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
    async createPveThread(battle) {
        if (!this.client) return;
        const thread = (await (await getChannel(this.client, battle.channel)).threads.create({
            name: battle.name
        }));
        return thread.id;
    }

    /**
     * deletes a thread in this channel
     * @param {String} user the user interacting with th
     */
    async deleteThread(channel, threadName) {
        if (!this.client) return;
        // TODO: can we find a way to delete the message that point to this thread after the thread is deleted
        (await getChannel(this.client, channel)).threads.cache
            .forEach(async(thread) => {
                if (thread.name === threadName) {
                    await thread.delete();
                }
            })
    }

}

module.exports = ThreadManager;