// objs
const MessageManager = require('../managers/MessageManager.js');
const User = require('../objects/User');
const { default: Collection } = require('@discordjs/collection');

//fxns
const generatePokemon = require('../util/generatePokemon.js');
const queries = require('../db/queries.js');
const { getRole, getMember } = require('../util/getDiscordInfo.js');

// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');

const profBot = {


    start: function(discordClient, dbClient, token, guild) {

        // used to hold data for users mid registration process
        const registeringUsers = new Collection();

        discordClient.once('ready', () => {
            console.log(`profBot: ready to serve ${userMap.size} users`);
        });

        discordClient.on('guildMemberAdd', async (member) => {
            const messageManager = new MessageManager({ client: discordClient });
            messageManager.sendDirectMessage(
                member,
                messages.msgWelcome
            );
        });

        discordClient.on('interactionCreate', async interaction => {

            let messageManager = new MessageManager({ client: discordClient, interaction: interaction });

            // messageManager.setInteraction();

            // grab the user id and perform lookup on map for every interaction
            const userId = interaction.user.id;
            const currentUser = userMap.get(userId);

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'profile') {

                    await interaction.deferReply();
                    const result = userMap.get(userId);
                    const resMessage = await messages.msgShowProfile(result);
                    await messageManager.editMessage(resMessage);

                }

                if (cmdId === 'team') {

                    if (currentUser.party[interaction.options.getSubcommand() - 1]) {
                        const resMessage = await messages.msgShowPokemon(currentUser.party[interaction.options.getSubcommand() - 1]);
                        messageManager.replyEphemeralMessage(resMessage);
                    } else {
                        messageManager.replyNoPokemonInSlot();
                    }

                }

            } else if (interaction.isMessageComponent()) {

                let messageManager = new MessageManager(discordClient);
                messageManager.setInteraction(interaction);

                const userId = interaction.user.id;
                const memObj = await getMember(discordClient, userId);
                const label = interaction.customId;

                messageManager.setButtonDetails();

                // TODO: clean up and standardize these methods
                if (label === 'beginRegistration') {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendDirectMessage(memObj, messages.msgSelectAvatar);
                    registeringUsers.set(userId, { id: userId });

                } else if (label.match(/selectAvatar\|[1-9]*/)) {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendDirectMessage(memObj, messages.msgSelectStarter);
                    registeringUsers.set(userId, {...registeringUsers.get(userId), avatar: label.charAt(label.length - 1) });

                } else if (label.match(/selectStarter\|[1-9]*/)) {

                    await messageManager.deleteThisMessage();
                    let starter1gen = await generatePokemon(label.split("|")[1], 20);
                    starter1gen.currentStats = starter1gen.stats;
                    queries.insertPokemon(dbClient, { owner_id: userId, pokemon_id: starter1gen.uuid, pokemon: starter1gen });
                    registeringUsers.set(userId, {...registeringUsers.get(userId), starter: starter1gen });
                    await messageManager.sendDirectMessage(memObj, messages.msgConfirmRegistration);

                } else if (label === 'confirmRegistration') {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendLoadingMessage(memObj);
                    const finalUser = new User(interaction.user.id, memObj.user.username, registeringUsers.get(userId).avatar, registeringUsers.get(userId).starter);
                    await queries.insertUser(dbClient, interaction.user.id, finalUser);
                    // add fully created User object to user map and remove json from registeringUsers list
                    userMap.set(userId, finalUser);
                    registeringUsers.delete(userId);
                    memObj.roles.add(await getRole(discordClient, "trainer"));
                    await messageManager.deleteLoadingMessage();
                    await messageManager.sendRegisteredMessage(memObj);

                }
            }

        });

        discordClient.login(token);

    }

}

module.exports = profBot;