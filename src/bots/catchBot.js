// ext libs
const uuid = require('uuid').v4;

// objs
const MessageManager = require('../managers/MessageManager');
const WebhookManager = require('../managers/WebhookManager');
const ThreadManager = require('../managers/ThreadManager');
const BattlePve = require('../objects/BattlePve');
const TrainerAi = require('../objects/TrainerAi');

// maps
const battleMap = require('../data/map/battleMap.js');

// fxns
const generatePokemon = require('../util/generatePokemon.js');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/map/userMap.js');

const catchBot = {

    start: function(discordClient, dbClient, token, guild) {

        discordClient.once('ready', async() => {

            this.threadManager = new ThreadManager(discordClient);

            console.log(`catchBot: ready to serve ${userMap.size} users`);

            this.webhookManager = new WebhookManager(discordClient, guild);
            const hooks = await this.webhookManager.getAllHooks("910584340688302182");
            console.log('got hooks');
            if (!hooks.size) {
                await this.webhookManager.createHook("910584340688302182", "Battle:");
                console.log("Hook created.");
            }

        });

        discordClient.on('interactionCreate', async interaction => {

            const messageManager = new MessageManager(discordClient, interaction);
            const currentUser = userMap.get(interaction.user.id);

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'search') {

                    if (currentUser.battle) return messageManager.replyAlreadyInBattle();

                    const generated = await generatePokemon({ id: 10, level: 5 });
                    const message = await messages.msgBattleStart(currentUser.party[0], generated, currentUser.id, "What will you do?");

                    currentUser.battle = uuid();
                    const aiOpp = new TrainerAi(uuid(), generated, currentUser.battle);
                    battleMap.set(currentUser.battle, new BattlePve(discordClient, currentUser, aiOpp, interaction.channelId));

                    const deferMsg = await messageManager.deferReply({ fetchReply: true });
                    deferMsg.delete();

                    const hook = (await this.webhookManager.getAllHooks(battleMap.get(currentUser.battle).channel)).first();
                    const threadId = await this.threadManager.createPveThread(battleMap.get(currentUser.battle));
                    await hook.send({...message, threadId: threadId });
                    // how do we a reference to the message that created the hook???

                }

            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;

                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();
                const curBattle = battleMap.get(currentUser.battle);

                if (btnId.match(/catch\|[0-9]*/)) { return curBattle.addTurn(interaction, currentUser, "catch") }
                if (btnId.match(/run\|[0-9]*/)) { return curBattle.addTurn(interaction, currentUser, "run") }
                if (btnId.match(/move[0-9]\|[0-9]*/)) { return curBattle.addTurn(interaction, currentUser, "move", btnId.charAt(4)) }
                if (btnId.match(/item\|[0-9]*/)) {
                    return await messageManager
                        .updateMessage(await messages.msgItems(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "Use which item?"))
                }
                if (btnId.match(/fight\|[0-9]*/)) {
                    return await messageManager
                        .updateMessage(await messages.msgFight(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "Pick a move!"))
                }
                if (btnId.match(/party\|[0-9]*/)) {
                    return await messageManager
                        .updateMessage(await messages.msgParty(curBattle.player1.lead, curBattle.player1.party.slice(0), curBattle.player2.lead, currentUser.id, "Select a pokemon!"))
                }
                if (btnId.match(/back\|[0-9]*/)) {
                    return await messageManager
                        .updateMessage(await messages.msgBattle(curBattle.player1.lead, curBattle.player2.lead, currentUser.id, "What will you do?"))
                }

            }
        });

        discordClient.login(token);

    }

}

module.exports = catchBot;