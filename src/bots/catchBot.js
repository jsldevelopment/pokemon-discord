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

        discordClient.once('ready', async () => {
            console.log(`catchBot: ready to serve ${userMap.size} users`);
        });

        discordClient.on('interactionCreate', async interaction => {

            messageManager.setInteraction(interaction);

            const userId = interaction.user.id;
            const currentUser = userMap.get(userId);

            if (interaction.isCommand()) {

                messageManager.setCommandDetails();
                const cmdId = interaction.commandName;

                if (cmdId === 'search') {
                    
                    if (currentUser.isInBattle) return await messageManager.replyAlreadyInBattle();

                    // currently hard coded to encounter caterpie
                    // in the future this will pull from a list of available area encounters
                    // defined by the channel
                    const generated = await generatePokemon(10, 5);
                    const message = await messages.msgStartBattle(generated, userId);
                    await messageManager.replyMessage(message);

                    // lock user into battle
                    currentUser.isInBattle = true;
                    currentUser.battling = generated;

                }

            } else if (interaction.isMessageComponent()) {

                const btnId = interaction.customId;

                messageManager.setButtonDetails();

                // guard clause to prevent users from interacting with prompts they did not initiate
                if (currentUser.id != btnId.split('|')[1]) return messageManager.replyNotYourBattle();

                if (btnId.match(/attackPokemon[1-9]*/)){

                    // await messageManager.deleteThisMessage();
                    console.log('Begin battle...');
                    const generated = await generatePokemon(10, 5);
                    const message = await messages.msgStartBattle(generated, userId);
                    await messageManager.updateMessage(message);

                } else if (btnId.match(/swapPokemon[1-9]*/)){

                    await messageManager.deleteThisMessage();
                    console.log('Swapping pokemon...');
                    // IMPLEMENT SWAP LOGIC

                } else if (btnId.match(/catchPokemon[1-9]*/)){

                    // implement logic for catch rates etc
                    await messageManager.deleteThisMessage();
                    currentUser.party[currentUser.party.length] = currentUser.battling;
                    await messageManager.sendCapturedBroadcast(currentUser, currentUser.battling);
                    // reset user battle settings
                    currentUser.isInBattle = false;
                    currentUser.battling = {};


                } else if (btnId.match(/runPokemon[1-9]*/)){
                    
                    await messageManager.deleteThisMessage();
                    // reset user battle settings
                    currentUser.isInBattle = false;
                    currentUser.battling = {};

                }
            }
        });

        discordClient.login(token);

    }

}

module.exports = catchBot;