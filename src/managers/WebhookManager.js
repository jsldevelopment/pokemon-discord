class WebhookManager {

    constructor(client, guildId) {
        this.client = client;
        this.guild = this.client.guilds.cache.get(guildId);
    }

    async clearHooks(channelId) {
        const channel2 = await this.client.channels.fetch(channelId);
        const hooks = await channel2.fetchWebhooks();
        console.log(`fetched ${hooks.size} webhooks`);
        hooks.forEach((hook) => {
            hook.delete({ reason: "cleanup on start" })
                .then(console.log("deleted hook"));
        });
    }

    async createHook(channelId) {
        const channel = await this.client.channels.fetch(channelId);
        await channel.createWebhook(`${channel.name}-hook`, {
            type: 3,
            avatar: 'https://i.imgur.com/AfFp7pu.png'
        })
        console.log(`${channel.name}-hook created`);
    }

    async getFirstHook(channelId) {
        const channel3 = await this.client.channels.fetch(channelId);
        const hooks = await channel3.fetchWebhooks();
        return hooks.first();
    }


    async getAllHooks(channelId) {
        const channel3 = await this.client.channels.fetch(channelId);
        return await channel3.fetchWebhooks();
    }
}

module.exports = WebhookManager;