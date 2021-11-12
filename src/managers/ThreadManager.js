const { getChannel } = require('../util/getDiscordInfo');

const threadManager = {

    setClient(client) {
        this.client = client;
    },

    /**
     * creates a new thread in this channel
     * @param {String} user the the thread is created for
     * @returns {Thread} returns a reference to the thread so the messagehandler can send an init message
     */
    async createThread(user, opponent) {
        if (!this.client) return;
        const thread = (await (await getChannel(this.client, user.route)).threads.create({
            name: `${user.username} vs. Level ${opponent.level} ${opponent.name}`
        }));
        return thread.id;
    },

    /**
     * deletes a thread in this channel
     * @param {String} user the user interacting with th
     */
    async deleteThread(user) {
        if (!this.client) return;
        // TODO: can we find a way to delete the message that point to this thread after the thread is deleted
        (await getChannel(this.client, user.route)).threads.cache
            .forEach(async(thread) => {
                if (thread.name === `${user.username} vs. Level ${user.battling.opponent.level} ${user.battling.opponent.name}`) {
                    await thread.delete();
                }
            })
    }

}

module.exports = threadManager;