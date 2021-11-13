// ext libs
const uuid = require('uuid').v4;

// objs
const MessageManager = require('../managers/MessageManager');
const WebhookManager = require('../managers/WebhookManager');
const threadManager = require('../managers/ThreadManager');
const Battle = require('../objects/Battle');
const AIUser = require('../objects/AIUser');

// maps
const battleMap = require('../data/battleMap.js');

// fxns
const generatePokemon = require('../util/generatePokemon.js');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');

const catchBot = {

    start: function(discordClient, dbClient, token, guild) {

        discordClient.once('ready', async() => {

            threadManager.setClient(discordClient);

            console.log(`catchBot: ready to serve ${userMap.size} users`);

            // IMPORTANT: this is a placeholder system for managing hooks in testing
            // this will need to be completely overhauled to allow for hooks to be created dynamically
            // in each available channel, as needed
            // instantiate webhooks manager
            this.webhookManager = new WebhookManager(discordClient, guild);
            // get all hooks for associated channel
            // TODO: move channel ids to a json property - channel name, value - channel id
            const hooks = await this.webhookManager.getAllHooks("907722445128097805");
            // if a hook currentyl exist, do NOT create another one
            if (!hooks.size) {
                await this.webhookManager.createHook("907722445128097805", "Battle:");
                console.log("Hook created.");
            }

        });

        discordClient.on('interactionCreate', async interaction => {

            // instantiate the message manager and grab the calling user from the map
            const messageManager = new MessageManager({ client: discordClient, interaction: interaction });
            const currentUser = userMap.get(interaction.user.id);

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'search') {

                    if (currentUser.battle) return messageManager.replyAlreadyInBattle();

                    // generate mon and create reply message
                    const generated = await generatePokemon((Math.random() * 10) < 6 ? 10 : 396, 5);
                    const message = await messages.msgBattleStart(currentUser.party[0], generated, currentUser.id, "What will you do?");

                    // instantiate battle manager and pass encounter deets
                    const battleId = new uuid();
                    // generate ai opponent based on pokemon
                    const opponent = new AIUser(generated);
                    battleMap.set(battleId, new Battle(discordClient, currentUser, opponent, "PVE"));

                    // set user battle options here so we can use them on the thread
                    // how much of this can be in the battle handler
                    currentUser.battle = battleId;
                    currentUser.route = interaction.channelId;

                    // deletes the initial bot reply to the command without the command failing
                    const deferMsg = await messageManager.deferReply({ fetchReply: true });
                    deferMsg.delete();

                    // kick off new thread for battle and use webhook to send intiial command
                    const threadId = await threadManager.createThread(currentUser, opponent);
                    const hook = (await this.webhookManager.getAllHooks(currentUser.route)).first();
                    await hook.send({...message, threadId: threadId });

                }

            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                // grab current battle from map
                const curBattle = battleMap.get(currentUser.battle);

                // selections - these are final choices, once selected they are added to the turns list
                if (btnId.match(/catch\|[1-9]*/)) {

                    curBattle.addMove({ selection: "catch", prio: 5 }, interaction);

                } else if (btnId.match(/run\|[1-9]*/)) {

                    curBattle.addMove({ selection: "run", prio: 5 }, interaction);

                    // menuing - doesn't push anything to the turns list, instead just allows movement between option menus
                    //     } else if (btnId.match(/fight\|[1-9]*/)) {

                    //         const message = await messages.msgFight(curBattle.currentPokemon, curBattle.opponent.party[0], currentUser.id, "Pick a move!");
                    //         await messageManager.updateMessage(message);

                    //     } else if (btnId.match(/party\|[1-9]*/)) {

                    //         const message = await messages.msgParty(curBattle.currentPokemon, currentUser.party.slice(1), curBattle.opponent.party[0], currentUser.id, "Select a pokemon!");
                    //         await messageManager.updateMessage(message);

                } else if (btnId.match(/item\|[1-9]*/)) {

                    const message = await messages.msgItems(curBattle.p1Lead, curBattle.p2Lead, currentUser.id, "Use which item?");
                    await messageManager.updateMessage(message);

                    // return to the main menu
                    //     } else if (btnId.match(/back\|[1-9]*/)) {

                    //         const message = await messages.msgBattle(curBattle.currentPokemon, curBattle.opponent.party[0], currentUser.id, "What will you do?");
                    //         await messageManager.updateMessage(message);

                }
            }

        });

        discordClient.login(token);

    }

}

module.exports = catchBot;