"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// objs
const MessageManager = require('../managers/MessageManager.js');
const TrainerHuman = require('../objects/TrainerHuman');
const { default: Collection } = require('@discordjs/collection');
//fxns
const generatePokemon = require('../util/generatePokemon.js');
const queries = require('../db/queries.js');
const { getRole, getMember } = require('../util/getDiscordInfo.js');
// data
const messages = require('../data/messages/messages.js');
const userMap = require('../data/userMap.js');
const profBot = {
    start: function (discordClient, dbClient, token, guild) {
        // used to hold data for users mid registration process
        const registeringUsers = new Collection();
        discordClient.once('ready', () => {
            console.log(`profBot: ready to serve ${userMap.size} users`);
        });
        discordClient.on('guildMemberAdd', (member) => __awaiter(this, void 0, void 0, function* () {
            const messageManager = new MessageManager(discordClient);
            messageManager.sendDirectMessage(member, messages.msgWelcome);
        }));
        discordClient.on('interactionCreate', (interaction) => __awaiter(this, void 0, void 0, function* () {
            // instantiate the message manager and grab the calling user from the map
            const messageManager = new MessageManager(discordClient, interaction);
            const currentUser = userMap.get(interaction.user.id);
            const registeringUser = registeringUsers.get(interaction.user.id);
            if (interaction.isCommand()) {
                const cmdId = interaction.commandName;
                if (cmdId === 'profile') {
                    yield interaction.deferReply();
                    const profileMsg = yield messages.msgShowProfile(currentUser);
                    yield messageManager.editMessage(profileMsg);
                }
                if (cmdId === 'team') {
                    if (currentUser.party[interaction.options.getSubcommand() - 1]) {
                        const partyMemberMsg = yield messages.msgShowPokemon(currentUser.party[interaction.options.getSubcommand() - 1]);
                        messageManager.replyEphemeralMessage(partyMemberMsg);
                    }
                    else {
                        messageManager.replyNoPokemonInSlot();
                    }
                }
            }
            else if (interaction.isMessageComponent()) {
                const label = interaction.customId;
                const member = yield getMember(discordClient, interaction.user.id);
                // TODO: clean up and standardize these methods
                if (label === 'beginRegistration') {
                    yield messageManager.deleteThisMessage();
                    yield messageManager.sendDirectMessage(member, messages.msgSelectAvatar);
                    registeringUsers.set(interaction.user.id, { id: interaction.user.id });
                }
                else if (label.match(/selectAvatar\|[1-9]*/)) {
                    yield messageManager.deleteThisMessage();
                    yield messageManager.sendDirectMessage(member, messages.msgSelectStarter);
                    registeringUsers.set(interaction.user.id, Object.assign(Object.assign({}, registeringUsers.get(registeringUser.id)), { avatar: label.charAt(label.length - 1) }));
                }
                else if (label.match(/selectStarter\|[1-9]*/)) {
                    yield messageManager.deleteThisMessage();
                    let starter1gen = yield generatePokemon(label.split("|")[1], 20);
                    starter1gen.currentStats = starter1gen.stats;
                    queries.insertPokemon(dbClient, { owner_id: registeringUser.id, pokemon_id: starter1gen.uuid, pokemon: starter1gen });
                    registeringUsers.set(interaction.user.id, Object.assign(Object.assign({}, registeringUsers.get(registeringUser.id)), { starter: starter1gen }));
                    yield messageManager.sendDirectMessage(member, messages.msgConfirmRegistration);
                }
                else if (label === 'confirmRegistration') {
                    yield messageManager.deleteThisMessage();
                    yield messageManager.sendLoadingMessage(member);
                    const finalUser = new TrainerHuman(interaction.user.id, member.user.username, registeringUsers.get(interaction.user.id).avatar, registeringUsers.get(interaction.user.id).starter);
                    yield queries.insertUser(dbClient, interaction.user.id, finalUser);
                    userMap.set(interaction.user.id, finalUser);
                    registeringUsers.delete(registeringUser.id);
                    member.roles.add(yield getRole(discordClient, "trainer"));
                    yield messageManager.deleteLoadingMessage();
                    yield messageManager.sendRegisteredMessage(member);
                }
            }
        }));
        discordClient.login(token);
    }
};
module.exports = profBot;
