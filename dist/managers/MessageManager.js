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
const { getChannel } = require('../util/getDiscordInfo');
const BaseManager = require('./BaseManager');
class MessageManager extends BaseManager {
    /**
     * set initial reference to instantiating client and interaction
     * @param {Client|Interaction} param0
     */
    constructor(client, interaction) {
        super(client, interaction);
    }
    // general messaging
    replyMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            // do we need to await here?
            return yield this.interaction.reply(Object.assign(Object.assign({}, message), { fetchReply: true }));
        });
    }
    replyEphemeralMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.reply(Object.assign(Object.assign({}, message), { ephemeral: true }));
        });
    }
    updateMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.update(message);
        });
    }
    editMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.editReply(message);
        });
    }
    deferUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.deferUpdate();
        });
    }
    deferReply(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.interaction.deferReply(options);
        });
    }
    sendDirectMessage(member, message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield member.send(message);
        });
    }
    // update this to send a message id and then delete that message id on finish loading
    sendLoadingMessage(member) {
        return __awaiter(this, void 0, void 0, function* () {
            yield member.send({ content: 'Please wait...' })
                .then((res) => {
                this.loadingMessageId = res.id;
            });
        });
    }
    /**
     * predefined messages to be sent - only the content of these messages should be edited
     */
    sendRegisteredMessage(member) {
        return __awaiter(this, void 0, void 0, function* () {
            yield member.send({ content: 'You have been succesfully registered.' });
        });
    }
    sendCapturedBroadcast(battle) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield getChannel(this.client, battle.channel)).send({ content: `captured text` });
        });
    }
    sendRunAwayBroadcast(battle) {
        return __awaiter(this, void 0, void 0, function* () {
            (yield getChannel(this.client, battle.channel)).send({ content: `ran away text` });
        });
    }
    // delete functions
    deleteThisMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.channels.fetch(this.channel)
                .then((ch) => {
                ch.messages.fetch({
                    limit: 5
                }).then(messages => {
                    const msgs = messages.filter(m => m.author.id === this.author);
                    msgs.forEach(m => {
                        if (m.id === this.message) {
                            m.delete();
                        }
                    });
                });
            });
        });
    }
    deleteLoadingMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield (yield getChannel(this.client, this.channel)).fetch(this.loadingMessageId)).delete();
        });
    }
    /**
     * ephemeral alert messages
     */
    replyAlreadyInBattle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.reply({ content: "Please exit your current battle before searching for another...", ephemeral: true });
        });
    }
    replyNotYourBattle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.reply({ content: "This is not your battle!", ephemeral: true });
        });
    }
    replyNoPokemonInSlot() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.reply({ content: "You don't have a pokemon in that slot!", ephemeral: true });
        });
    }
    couldntGetAway(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.update(message);
        });
    }
    gotAwaySafely(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.interaction.editReply(Object.assign({}, message));
        });
    }
}
module.exports = MessageManager;
