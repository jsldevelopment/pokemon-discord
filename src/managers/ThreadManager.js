const { getChannel } = require('../util/getDiscordInfo');
const { battleThreadName } = require('../data/constants/Text');

class ThreadManager {

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
     * creates a new thread in this channel
     * @param {String} user the the thread is created for
     * @returns {Thread} returns a reference to the thread so the messagehandler can send an init message
     */
    async createThread(user) { return (await (await getChannel(this.client, user.route)).threads.create({ name: battleThreadName(user.username) })).id; }

    /**
     * deletes a thread in this channel
     * @param {String} user the user interacting with th
     */
    async deleteThread(user) {
        (await getChannel(this.client, user.route)).threads.cache
            .forEach(async(thread) => {
                if (thread.name === battleThreadName(user.username)) {
                    await thread.delete();
                }
            })
    }

}

module.exports = ThreadManager;