// ext libs
const uuid = require('uuid').v4;

// objs
const MessageManager = require('../managers/MessageManager');
const WebhookManager = require('../managers/WebhookManager');
const ThreadManager = require('../managers/ThreadManager');
const BattlePve = require('../objects/BattlePve');
const TrainerAi = require('../objects/TrainerAi');

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

            this.threadManager = new ThreadManager(discordClient);

            console.log(`catchBot: ready to serve ${userMap.size} users`);

            // IMPORTANT: this is a placeholder system for managing hooks in testing
            // this will need to be completely overhauled to allow for hooks to be created dynamically
            // in each available channel, as needed
            // instantiate webhooks manager
            this.webhookManager = new WebhookManager(discordClient, guild);
            // get all hooks for associated channel
            // TODO: move channel ids to a json property - channel name, value - channel id
            const hooks = await this.webhookManager.getAllHooks("910584340688302182");
            console.log('got hooks');
            // if a hook currentyl exist, do NOT create another one
            if (!hooks.size) {
                await this.webhookManager.createHook("910584340688302182", "Battle:");
                console.log("Hook created.");
            }

        });

        discordClient.on('interactionCreate', async interaction => {

            // instantiate the message manager and grab the calling user from the map
            const messageManager = new MessageManager(discordClient, interaction);
            const currentUser = userMap.get(interaction.user.id);

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'search') {

                    if (currentUser.battle) return messageManager.replyAlreadyInBattle();

                    const generated = await generatePokemon({ id: 10, level: 5 });
                    const message = await messages.msgBattleStart(currentUser.party[0], generated, currentUser.id, "What will you do?");

                    // add battle id to user, generate ai opp, create battle & add to map
                    currentUser.battle = uuid();
                    const aiOpp = new TrainerAi(uuid(), generated, currentUser.battle);
                    battleMap.set(currentUser.battle, new BattlePve(discordClient, currentUser, aiOpp, interaction.channelId));

                    // deletes the initial bot reply to the command without the command failing
                    const deferMsg = await messageManager.deferReply({ fetchReply: true });
                    deferMsg.delete();

                    // kick off new thread for battle and use webhook to send intiial command
                    const hook = (await this.webhookManager.getAllHooks(battleMap.get(currentUser.battle).channel)).first();
                    const threadId = await this.threadManager.createPveThread(battleMap.get(currentUser.battle));
                    await hook.send({...message, threadId: threadId });
                    // how do we a reference to the message that created the hook???

                }

                // TODO: ephemeral menuing or hidden menuing
            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                // grab current battle from map
                const curBattle = battleMap.get(currentUser.battle);

                // selections - these are final choices, once selected they are added to the turns list
                if (btnId.match(/catch\|[0-9]*/)) {

                    curBattle.addTurn(interaction, currentUser, "catch");

                } else if (btnId.match(/run\|[0-9]*/)) {

                    curBattle.addTurn(interaction, currentUser, "run");

                } else if (btnId.match(/move[0-9]\|[0-9]*/)) {

                    curBattle.addTurn(interaction, currentUser, "move", btnId.charAt(4));

                    // menuing
                } else if (btnId.match(/item\|[0-9]*/)) {

                    const message = await messages.msgItems(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "Use which item?");
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/fight\|[0-9]*/)) {

                    const message = await messages.msgFight(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "Pick a move!");
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/party\|[0-9]*/)) {

                    const message = await messages.msgParty(curBattle.player1.lead, curBattle.player1.party.slice(0), curBattle.player2.lead, currentUser.id, "Select a pokemon!");
                    await messageManager.updateMessage(message);

                    // return to the main menu
                } else if (btnId.match(/back\|[0-9]*/)) {

                    const message = await messages.msgBattle(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "What will you do?");
                    await messageManager.updateMessage(message);

                }
            }

        });

        discordClient.login(token);

    }

}

module.exports = catchBot;