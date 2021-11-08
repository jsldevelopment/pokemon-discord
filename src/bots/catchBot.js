// objs
const MessageManager = require('../managers/MessageManager');
const WebhookManager = require('../managers/WebhookManager');

// fxns
const generatePokemon = require('../util/generatePokemon.js');
const { sleep } = require('../util/getDiscordInfo');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');

const catchBot = {

    start: function(discordClient, dbClient, token, guild) {

        discordClient.once('ready', async() => {

            console.log(`catchBot: ready to serve ${userMap.size} users`);

            // IMPORTANT: this is a placeholder system for managing hooks in testing
            // this will need to be completely overhauled to allow for hooks to be created dynamically
            // in each available channel, as needed
            // instantiate webhooks manager
            this.webhookManager = new WebhookManager(discordClient, guild);
            // get all hooks for associated channel
            // TODO: move channel ids to a json property - channel name, value - channel id
            const hooks = await this.webhookManager.getAllHooks("907300358672482336");
            // if a hook currentyl exist, do NOT create another one
            if (!hooks.size) {
                await this.webhookManager.createHook("907300358672482336");
                console.log("Hook created.");
            }

        });

        discordClient.on('interactionCreate', async interaction => {

            // instantiate the message manager and grab the calling user from the map
            const messageManager = new MessageManager({ client: discordClient, interaction: interaction });
            const currentUser = userMap.get(interaction.user.id);
            // TODO: thread check -- no interaction via threads

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'search') {

                    // do we need to await here?
                    if (currentUser.isInBattle) return await messageManager.replyAlreadyInBattle();

                    // generate mon and create reply message
                    const generated = await generatePokemon((Math.random() * 10) < 6 ? 10 : 396, 5);
                    const message = await messages.msgBattle(currentUser.party[0], generated, currentUser.id, "What will you do?");

                    // deletes the initial bot reply to the command without the command failing
                    const deferMsg = await interaction.deferReply({ fetchReply: true });
                    deferMsg.delete();

                    // kick off new thread for battle and use webhook to send intiial command
                    const threadId = await messageManager.createThread(currentUser);
                    const hook = await this.webhookManager.getFirstHook(interaction.channelId);
                    await hook.send({...message, threadId: threadId });

                    // lock user into battle
                    // make this into a method
                    currentUser.isInBattle = true;
                    currentUser.route = interaction.channelId;
                    currentUser.battling = {
                        opponent: generated,
                        turns: 0,
                        escapes: 0
                    }

                }

            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;
                let curPokemon;
                let opPokemon;

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                // if user is in battle, grab a reference to both pokemon
                if (currentUser.battling) {
                    curPokemon = currentUser.party[0];
                    opPokemon = currentUser.battling.opponent;
                }

                if (btnId.match(/fight\|[1-9]*/)) {

                    const message = await messages.msgFight(curPokemon, opPokemon, currentUser.id, "Pick a move!");
                    await interaction.update(message);

                } else if (btnId.match(/party\|[1-9]*/)) {

                    console.log('here');
                    const message = await messages.msgParty(curPokemon, currentUser.party.slice(1), opPokemon, currentUser.id, "Select a pokemon!");
                    await interaction.update(message);

                } else if (btnId.match(/item\|[1-9]*/)) {

                    const message = await messages.msgItems(curPokemon, opPokemon, currentUser.id, "Use which item?");
                    await interaction.update(message);

                } else if (btnId.match(/run\|[1-9]*/)) {

                    interaction.deferUpdate();
                    await sleep(500);
                    const message = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "Attempting to run away...");
                    await interaction.editReply(message);

                    let escaped = (((currentUser.party[0].stats.spd * 128) / currentUser.battling.opponent.stats.spd) + 30 * currentUser.battling.escapes) % 256;
                    console.log(`Escape attempt ${currentUser.battling.escapes} : ${escaped}`);
                    await sleep(1500);

                    if (Math.random() * 101 < escaped) {

                        // this works
                        await messageManager.deleteThisMessage();
                        // this works
                        await messageManager.endBattle(currentUser.username, currentUser.route);
                        // this fails
                        // await messageManager.sendRunAwayBroadcast(currentUser, opPokemon);
                        currentUser.isInBattle = false;
                        currentUser.battling = {};

                    } else {

                        currentUser.battling.escapes++;
                        const message = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "Couldn't get away!");
                        await interaction.editReply(message);

                    }

                } else if (btnId.match(/back\|[1-9]*/)) {

                    const message = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "What will you do?");
                    await interaction.update(message);

                } else if (btnId.match(/catch\|[1-9]*/)) {

                    // implement logic for catch rates etc
                    await messageManager.deleteThisMessage();
                    currentUser.party[currentUser.party.length] = currentUser.battling;
                    await messageManager.sendCapturedBroadcast(currentUser, currentUser.battling);
                    // reset user battle settings
                    currentUser.isInBattle = false;
                    currentUser.battling = {};

                }
            }

        });

        const resetUser = (user) => {

            user.isInBattle = false;
            user.battling = {}
        }

        discordClient.login(token);

    }

}

module.exports = catchBot;