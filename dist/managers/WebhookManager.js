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
class WebhookManager extends BaseManager {
    /**
     * set initial reference to instantiating client
     * @param {Client} client
     */
    constructor(client) {
        super(client);
    }
    /**
     * clears all existing hooks from a given channel
     * @param {String} id the id of the channel containing the given hooks
     */
    clearHooks(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hooks = yield this.getAllHooks(id);
            hooks.forEach((hook) => {
                hook.delete({ reason: "cleanup on start" })
                    .then(console.log("deleted hook"));
            });
        });
    }
    /**
     * creates a new webhook in this channel
     * @param {String} id the id of the channel containing the given hooks
     */
    createHook(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield getChannel(this.client, id);
            yield channel.createWebhook(name, {
                type: 3,
                avatar: 'src/data/img/pokeball.png'
            });
        });
    }
    /**
     * gets all hooks from a channel
     * @param {String} id the id of the channel containing the given hooks
     */
    getAllHooks(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield getChannel(this.client, channel)).fetchWebhooks();
        });
    }
}
module.exports = WebhookManager;
