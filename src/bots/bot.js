const messageHandler = require('../handlers/MessageHandler.js');
const messages = require('../data/messages.js');
const queries = require('../db/queries.js');
const { default: Collection } = require('@discordjs/collection');

const bot = {

    start: function(discordClient, dbClient, token, guild) {

        discordClient.registeringUsers = new Collection();

        discordClient.once('ready', () => {
            console.log('ready');
        });

        discordClient.on('guildMemberAdd', async member => {
            await messageHandler.sendDirectMessage(
                member, 
                messages["msgWelcome"]
            );
        });

        discordClient.on('interactionCreate', async interaction => {

            if (interaction.isCommand()) {

                if (interaction.commandName === 'profile') {
                    await interaction.deferReply();
                    const result = await queries.getUser(dbClient, interaction.user.id);
                    await interaction.editReply({ content: JSON.stringify(result) });
                }

            } else if (interaction.isMessageComponent()) {
                    
                const user = discordClient.registeringUsers.get(interaction.user.id);
                switch (interaction.customId) {

                    case('beginRegistration'):
                        await messageHandler.updateMessage(interaction, messages.msgSelectAvatar);
                        discordClient.registeringUsers.set(interaction.user.id, { id: interaction.user.id });
                        break;
                    case('selectAvatar1'):
                        await messageHandler.updateMessage(interaction, messages.msgSelectStarter);
                        discordClient.registeringUsers.set(interaction.user.id, { ...user, avatar: 1 });
                        break;
                    case('selectAvatar2'):
                        await messageHandler.updateMessage(interaction, messages.msgSelectStarter);
                        discordClient.registeringUsers.set(interaction.user.id, { ...user, avatar: 2 });
                        break;
                    case('selectStarter1'):
                        await messageHandler.showLoading(interaction);
                        let starter1 = await queries.getRawPokemon(dbClient, { id: 1 });
                        discordClient.registeringUsers.set(interaction.user.id, { ...user, party: starter1 });
                        await messageHandler.editMessage(interaction, messages.msgConfirmRegistration);
                        break;
                    case('selectStarter2'):
                        await messageHandler.showLoading(interaction);
                        let starter2 = await queries.getRawPokemon(dbClient, { id: 4 });
                        discordClient.registeringUsers.set(interaction.user.id, { ...user, party: starter2 });
                        await messageHandler.editMessage(interaction, messages.msgConfirmRegistration);
                        break;
                    case('selectStarter3'):
                        await messageHandler.showLoading(interaction);
                        let starter3 = await queries.getRawPokemon(dbClient, { id: 7 });
                        discordClient.registeringUsers.set(interaction.user.id, { ...user, party: starter3 });
                        await messageHandler.editMessage(interaction, messages.msgConfirmRegistration);
                        break;
                    case('confirmRegistration'):
                        await messageHandler.showLoading(interaction);
                        await queries.insertUser(dbClient, { id: user.id, avatar: user.avatar, party: user.party });
                        let member = await getMember(interaction.user.id);
                        member.roles.add(await getRole("trainer"));
                        await messageHandler.deleteMessage(interaction, 1);
                        break;

                }
            }

        });

        discordClient.login(token);


        getGuild = async function() {

            if(!discordClient) return;

            return await discordClient.guilds.cache.get(guild);

        },
    
        getMember = async function(id) {
            
            if (!discordClient) return;
            
            const guild = await getGuild();
            let member = await guild.members.fetch(id);
            return member;

        },

        getRole = async function(roleId) {

            if (!discordClient) return;

            const guild = await getGuild();
            return await guild.roles.cache.find(role => role.name === roleId);
            
        }
        
    }

}

module.exports = bot;