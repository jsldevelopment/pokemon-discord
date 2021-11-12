const { getChannel } = require('../util/getDiscordInfo');

class MessageManager {

    /**
     * set initial reference to instantiating client and interaction
     * @param {Client|Interaction} param0 
     */
    constructor(options = {}) {
        /**
         * the client that instantiated this manager
         * @name client
         */
        if (options.client) this.client = options.client;
        /**
         * the interaction that instantiated this manager
         * @name interaction
         */
        if (options.interaction) {

            this.interaction = options.interaction;

            if (this.interaction.isCommand()) {

                this.channel = this.interaction.channelId

            } else if (this.interaction.isMessageComponent()) {

                this.message = this.interaction.message.id,
                    this.author = this.interaction.message.author.id,
                    this.channel = this.interaction.message.channelId

            }

        }
    }

    // general messaging
    async replyMessage(message) {

        // do we need to await here?
        return await this.interaction.reply({...message, fetchReply: true });

    }

    async replyEphemeralMessage(message) {

        await this.interaction.reply({...message, ephemeral: true });

    }

    async updateMessage(message) {

        await this.interaction.update(message);

    }

    async editMessage(message) {

        await this.interaction.editReply(message);

    }

    async deferUpdate() {

        await this.interaction.deferUpdate();

    }

    async deferReply(options) {

        return await this.interaction.deferReply(options);

    }

    async sendDirectMessage(member, message) {

        await member.send(message);

    }

    // update this to send a message id and then delete that message id on finish loading
    async sendLoadingMessage(member) {

        await member.send({ content: 'Please wait...' })
            .then((res) => {
                this.loadingMessageId = res.id;
            })

    }

    /**
     * predefined messages to be sent - only the content of these messages should be edited
     */
    async sendRegisteredMessage(member) {
        await member.send({ content: 'You have been succesfully registered.' });
    }

    async sendCapturedBroadcast(user, pokemon) {
        (await getChannel(this.client, user.route)).send({ content: `${user.username} has caught a level ${pokemon.level} ${pokemon.name}` });
    }

    async sendRunAwayBroadcast(user, pokemon) {
        (await getChannel(this.client, user.route)).send({ content: `${user.username} has fled from a level ${pokemon.level} ${pokemon.name}` });
    }

    // delete functions
    async deleteThisMessage() {

        this.client.channels.fetch(this.channel)
            .then((ch) => {
                ch.messages.fetch({
                    limit: 5
                }).then(messages => {
                    const msgs = messages.filter(m => m.author.id === this.author)
                    msgs.forEach(m => {
                        if (m.id === this.message) {
                            m.delete();
                        }
                    })
                });
            })
    }

    async deleteLoadingMessage() {
        (await (await getChannel(this.client, this.channel)).fetch(this.loadingMessageId)).delete();
    }

    /**
     * ephemeral alert messages
     */
    async replyAlreadyInBattle() {
        await this.interaction.reply({ content: "Please exit your current battle before searching for another...", ephemeral: true });
    }

    async replyNotYourBattle() {
        await this.interaction.reply({ content: "This is not your battle!", ephemeral: true });
    }

    async replyNoPokemonInSlot() {
        await this.interaction.reply({ content: "You don't have a pokemon in that slot!", ephemeral: true });
    }

    async couldntGetAway(message) {
        await this.interaction.update(message);
    }

    async gotAwaySafely(message) {
        await this.interaction.editReply({...message });
    }

}

module.exports = MessageManager;