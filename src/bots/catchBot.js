// objs
const MessageManager = require('../managers/MessageManager');
const { WebhookClient } = require('discord.js');

// fxns
const generatePokemon = require('../util/generatePokemon.js');
const { sleep } = require('../util/getDiscordInfo');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');
const { catchWebhookId, catchWebhookToken } = require('../../config.json');

const catchBot = {

    start: function(discordClient, dbClient, token, guild) {

        const webhookClient = new WebhookClient({ id: catchWebhookId, token: catchWebhookToken });
        let messageManager = new MessageManager(discordClient);

        discordClient.once('ready', async() => {
            console.log(`catchBot: ready to serve ${userMap.size} users`);
        });

        discordClient.on('interactionCreate', async interaction => {


            messageManager.setInteraction(interaction);

            const userId = interaction.user.id;
            const currentUser = userMap.get(userId);

            if (interaction.isCommand()) {

                messageManager.setCommandDetails();
                const cmdId = interaction.commandName;

                // each search area should check what 'route' the user is in
                // and pull based on that
                if (cmdId === 'search') {

                    if (currentUser.isInBattle) return await messageManager.replyAlreadyInBattle();

                    // generate encounter probabilty based on route data
                    const wildPokemon = (Math.random() * 10) < 6 ? 10 : 396;
                    // check again for level
                    const generated = await generatePokemon(wildPokemon, 5);
                    // start encounter between user and generated mon
                    const message = await messages.msgBattle(currentUser.party[0], generated, userId, "What will you do?");
                    // reply with battle prompt
                    await messageManager.createThread(currentUser, message);

                    // lock user into battle
                    currentUser.isInBattle = true;
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

                messageManager.setButtonDetails();

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                // if user is in battle, grab a reference to both pokemon
                if (currentUser.battling) {
                    curPokemon = currentUser.party[0];
                    opPokemon = currentUser.battling.opponent;
                }

                if (btnId.match(/fight\|[1-9]*/)) {

                    const message = await messages.msgFight(curPokemon, opPokemon, userId, "Pick a move!");
                    await interaction.update(message);

                } else if (btnId.match(/party\|[1-9]*/)) {

                    console.log('here');
                    const message = await messages.msgParty(curPokemon, currentUser.party.slice(1), opPokemon, userId, "Select a pokemon!");
                    await interaction.update(message);

                } else if (btnId.match(/item\|[1-9]*/)) {

                    const message = await messages.msgItems(curPokemon, opPokemon, userId, "Use which item?");
                    await interaction.update(message);

                } else if (btnId.match(/run\|[1-9]*/)) {

                    interaction.deferUpdate();
                    await sleep(500);
                    const message = await messages.msgBattle(curPokemon, opPokemon, userId, "Attempting to run away...");
                    await interaction.editReply(message);

                    let escaped = (((currentUser.party[0].stats.spd * 128) / currentUser.battling.opponent.stats.spd) + 30 * currentUser.battling.escapes) % 256;
                    console.log(`Escape attempt ${currentUser.battling.escapes} : ${escaped}`);
                    await sleep(1500);

                    if (Math.random() * 101 < escaped) {

                        await messageManager.deleteThisMessage();
                        await messageManager.sendRunAwayBroadcast(currentUser, opPokemon);
                        resetUser(currentUser);

                    } else {

                        currentUser.battling.escapes++;
                        const message = await messages.msgBattle(curPokemon, opPokemon, userId, "Couldn't get away!");
                        await interaction.editReply(message);

                    }

                } else if (btnId.match(/back\|[1-9]*/)) {

                    const message = await messages.msgBattle(curPokemon, opPokemon, userId, "What will you do?");
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