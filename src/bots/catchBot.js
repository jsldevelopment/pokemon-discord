// objs
const MessageManager = require('../managers/MessageManager');

// fxns
const generatePokemon = require('../util/generatePokemon.js');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');

const catchBot = {

    start: function(discordClient, dbClient, token, guild) {

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
                    const message = await messages.msgStartBattle(currentUser.party[0], generated, userId);
                    // reply with battle prompt
                    await messageManager.replyMessage(message);

                    // lock user into battle
                    currentUser.isInBattle = true;
                    currentUser.battling = generated;
                    currentUser.escapeAttempts = 0;

                }

            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;

                messageManager.setButtonDetails();

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                if (btnId.match(/fight\|[1-9]*/)) {

                    // bring up moves list
                    // await messageManager.deleteThisMessage();
                    console.log('Begin battle...');
                    const generated = await generatePokemon(10, 5);
                    const message = await messages.msgStartBattle(generated, userId);
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/party\|[1-9]*/)) {

                    // bring up list of party members

                    await messageManager.deleteThisMessage();
                    console.log('Swapping pokemon...');
                    // IMPLEMENT SWAP LOGIC

                } else if (btnId.match(/item\|[1-9]*/)) {

                    // bring up item menu

                    // implement logic for catch rates etc
                    await messageManager.deleteThisMessage();
                    currentUser.party[currentUser.party.length] = currentUser.battling;
                    await messageManager.sendCapturedBroadcast(currentUser, currentUser.battling);
                    // reset user battle settings
                    currentUser.isInBattle = false;
                    currentUser.battling = {};

                } else if (btnId.match(/run\|[1-9]*/)) {

                    const curPokemon = currentUser.party[0];
                    const opPokemon = currentUser.battling;
                    // logic to check speeds
                    console.log("Your speed " + curPokemon.stats.spd);
                    console.log("Enemy speed " + opPokemon.stats.spd);



                    // formula for escape
                    // revise this
                    let escaped = (((currentUser.party[0].stats.spd * 128) / currentUser.battling.stats.spd) + 30 * currentUser.escapeAttempts) % 256;
                    console.log(`Escape attempt ${currentUser.escapeAttempts}`);
                    if (Math.random() * 101 < escaped) {
                        await messageManager.deleteThisMessage();
                        await messageManager.gotAwaySafely();
                        // reset user battle settings
                        currentUser.isInBattle = false;
                        currentUser.battling = {};
                    } else {
                        currentUser.escapeAttempts++;
                        const message = await messages.msgStartBattle(curPokemon, opPokemon, userId);
                        await messageManager.couldntGetAway(message);
                    }


                }
            }
        });

        discordClient.login(token);

    }

}

module.exports = catchBot;