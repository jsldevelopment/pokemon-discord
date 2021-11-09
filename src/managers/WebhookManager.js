const { getChannel } = require('../util/getDiscordInfo');



class WebhookManager {

    /**
     * set initial reference to instantiating client
     * @param {Client} client
     */
    constructor(client) {
        /**
         * the client that instantiated this manager
         * @name client
         */
        this.client = client;
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
    async getAllHooks(id) {
        return await (await getChannel(this.client, id)).fetchWebhooks();
    }
}

module.exports = WebhookManager;