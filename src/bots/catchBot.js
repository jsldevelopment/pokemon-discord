// ext libs
const { v4: uuid } = require('uuid');

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
            const hooks = await this.webhookManager.getAllHooks("907722445128097805");
            console.log('got hooks');
            // if a hook currentyl exist, do NOT create another one
            if (!hooks.size) {
                await this.webhookManager.createHook("907722445128097805", "Battle:");
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

                    // generate mon and create reply message
                    // const generated = await generatePokemon((Math.random() * 10) < 6 ? 10 : 396, 5);
                    // for testing purposes, we only want to encounter caterpie
                    const generated = await generatePokemon(10, 5);
                    const message = await messages.msgBattleStart(currentUser.party[0], generated, currentUser.id, "What will you do?");

                    // instantiate battle manager and pass encounter deets
                    const battleId = new uuid();
                    // generate ai opponent based on pokemon
                    const aiOpp = new TrainerAi(new uuid(), generated);
                    battleMap.set(battleId, new BattlePve(discordClient, currentUser, aiOpp, interaction.channelId));

                    // set user battle options here so we can use them on the thread
                    // how much of this can be in the battle handler
                    currentUser.battle = battleId;

                    // deletes the initial bot reply to the command without the command failing
                    const deferMsg = await messageManager.deferReply({ fetchReply: true });
                    deferMsg.delete();

                    // kick off new thread for battle and use webhook to send intiial command
                    const threadId = await this.threadManager.createPveThread(battleMap.get(battleId));
                    const hook = (await this.webhookManager.getAllHooks(battleMap.get(battleId).channel)).first();
                    await hook.send({...message, threadId: threadId });

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

                    const message = await messages.msgItems(curBattle.player1Lead, curBattle.player2Lead, currentUser.id, "Use which item?");
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/fight\|[0-9]*/)) {

                    const message = await messages.msgFight(curBattle.player1Lead, curBattle.player2Lead, currentUser.id, "Pick a move!");
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/party\|[0-9]*/)) {

                    const message = await messages.msgParty(curBattle.player1Lead, curBattle.player1.party.slice(0), curBattle.player2Lead, currentUser.id, "Select a pokemon!");
                    await messageManager.updateMessage(message);

                    // return to the main menu
                } else if (btnId.match(/back\|[0-9]*/)) {

                    const message = await messages.msgBattle(curBattle.player1Lead, curBattle.player2Lead, currentUser.id, "What will you do?");
                    await messageManager.updateMessage(message);

                }
            }

        });

        discordClient.login(token);

    }

}

module.exports = catchBot;