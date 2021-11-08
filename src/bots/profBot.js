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

        discordClient.on('guildMemberAdd', async(member) => {
            const messageManager = new MessageManager({ client: discordClient });
            messageManager.sendDirectMessage(
                member,
                messages.msgWelcome
            );
        });

        discordClient.on('interactionCreate', async interaction => {

            // instantiate the message manager and grab the calling user from the map
            const messageManager = new MessageManager({ client: discordClient, interaction: interaction });
            const currentUser = userMap.get(interaction.user.id);

            if (interaction.isCommand()) {

                const cmdId = interaction.commandName;

                if (cmdId === 'profile') {

                    await interaction.deferReply();
                    const profileMsg = await messages.msgShowProfile(currentUser);
                    await messageManager.editMessage(profileMsg);

                }

                if (cmdId === 'team') {

                    if (currentUser.party[interaction.options.getSubcommand() - 1]) {
                        const partyMemberMsg = await messages.msgShowPokemon(currentUser.party[interaction.options.getSubcommand() - 1]);
                        messageManager.replyEphemeralMessage(partyMemberMsg);
                    } else {
                        messageManager.replyNoPokemonInSlot();
                    }

                }

            } else if (interaction.isMessageComponent()) {

                const label = interaction.customId;

                const member = await getMember(discordClient, currentUser.id);

                // TODO: clean up and standardize these methods
                if (label === 'beginRegistration') {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendDirectMessage(member, messages.msgSelectAvatar);
                    registeringUsers.set(currentUser.id, { id: currentUser.id });

                } else if (label.match(/selectAvatar\|[1-9]*/)) {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendDirectMessage(member, messages.msgSelectStarter);
                    registeringUsers.set(currentUser.id, {...registeringUsers.get(currentUser.id), avatar: label.charAt(label.length - 1) });

                } else if (label.match(/selectStarter\|[1-9]*/)) {

                    await messageManager.deleteThisMessage();
                    let starter1gen = await generatePokemon(label.split("|")[1], 20);
                    starter1gen.currentStats = starter1gen.stats;
                    queries.insertPokemon(dbClient, { owner_id: currentUser.id, pokemon_id: starter1gen.uuid, pokemon: starter1gen });
                    registeringUsers.set(currentUser.id, {...registeringUsers.get(currentUser.id), starter: starter1gen });
                    await messageManager.sendDirectMessage(member, messages.msgConfirmRegistration);

                } else if (label === 'confirmRegistration') {

                    await messageManager.deleteThisMessage();
                    await messageManager.sendLoadingMessage(member);
                    const finalUser = new User(interaction.user.id, member.user.username, registeringUsers.get(currentUser.id).avatar, registeringUsers.get(currentUser.id).starter);
                    await queries.insertUser(dbClient, interaction.user.id, finalUser);
                    userMap.set(currentUser.id, finalUser);
                    registeringUsers.delete(currentUser.id);
                    member.roles.add(await getRole(discordClient, "trainer"));
                    await messageManager.deleteLoadingMessage();
                    await messageManager.sendRegisteredMessage(member);

                }
            }

        });

        discordClient.login(token);

    }

}

module.exports = profBot;