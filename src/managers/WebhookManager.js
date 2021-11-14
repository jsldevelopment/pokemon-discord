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
    async clearHooks(id) {
        const hooks = await this.getAllHooks(id);
        hooks.forEach((hook) => {
            hook.delete({ reason: "cleanup on start" })
                .then(console.log("deleted hook"));
        });
    }

    /**
     * creates a new webhook in this channel
     * @param {String} id the id of the channel containing the given hooks
     */
    async createHook(id, name) {
        const channel = await getChannel(this.client, id);
        await channel.createWebhook(name, {
            type: 3,
            avatar: 'src/data/img/pokeball.png'
        });
    }

    /**
     * gets all hooks from a channel
     * @param {String} id the id of the channel containing the given hooks
     */
    async getAllHooks(channel) {
        return await (await getChannel(this.client, channel)).fetchWebhooks();
    }
}

module.exports = WebhookManager;