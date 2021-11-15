class BaseManager {

    /**
     * set initial reference to instantiating client
     * @param {Client} client
     */
    constructor(client, interaction) {
        /**
         * the client that instantiated this manager
         * @name client
         */
        if (client) this.client = client;
        /**
         * the interaction that instantiated this manager
         * @name interaction
         */
        if (interaction) {

            this.interaction = interaction;

            console.log(this.interaction);
            if (this.interaction.isCommand()) {

                this.channel = this.interaction.channelId

            } else if (this.interaction.isMessageComponent()) {

                this.message = this.interaction.message.id,
                    this.author = this.interaction.message.author.id,
                    this.channel = this.interaction.message.channelId

            }

        }
    }

}

module.exports = BaseManager;