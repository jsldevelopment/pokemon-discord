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
const { constructor } = require('../data/battleMap');
const { getChannel } = require('../util/getDiscordInfo');
const BaseManager = require('./BaseManager');
class ThreadManager extends BaseManager {
    /**
     * set initial reference to instantiating client and interaction
     * @param {Client|Interaction} param0
     */
    constructor(client) {
        super(client);
    }
    /**
     * creates a new thread in this channel for PVE based battles
     * @param {String} user the the thread is created for
     * @returns {Thread} returns a reference to the thread so the messagehandler can send an init message
     */
    createPveThread(battle) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client)
                return;
            const thread = (yield (yield getChannel(this.client, battle.channel)).threads.create({
                name: battle.name
            }));
            return thread.id;
        });
    }
    /**
     * deletes a thread in this channel
     * @param {String} user the user interacting with th
     */
    deleteThread(channel, threadName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client)
                return;
            // TODO: can we find a way to delete the message that point to this thread after the thread is deleted
            (yield getChannel(this.client, channel)).threads.cache
                .forEach((thread) => __awaiter(this, void 0, void 0, function* () {
                if (thread.name === threadName) {
                    yield thread.delete();
                }
            }));
        });
    }
}
module.exports = ThreadManager;
