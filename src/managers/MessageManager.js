class MessaageManager {

    // set initial interaction deets
    constructor(client) {
        this.client = client;
    }

    setInteraction(interaction) {
        this.interaction = interaction;
    }

    setButtonDetails() {
        this.message = this.interaction.message.id;
        this.author = this.interaction.message.author.id;
        this.channel = this.interaction.message.channelId;
    }

    setCommandDetails() {
        this.channel = this.interaction.channelId;
    }

    // general messaging
    async replyMessage(message) {

        await this.interaction.reply(message);

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

    async deferReply() {

        await this.interaction.deferReply();

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

    // predefined messages
    async sendRegisteredMessage(member) {

        await member.send({ content: 'You have been succesfully registered.' });

    }

    async sendCapturedBroadcast(user, pokemon) {

        const channel = await this.getChannel();
        channel.send({ content: `${user.username} has succesfully caught a level ${pokemon.level} ${pokemon.name}` });

    }

    async sendRunAwayBroadcast(user, pokemon) {

        const channel = await this.getChannel();
        channel.send({ content: `${user.username} has fled from a level ${pokemon.level} ${pokemon.name}` });

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

        const channel = await this.getChannel();
        await channel.fetch(this.loadingMessageId).then((msg) => {
            msg.delete();
        });

    }

    // CONST EPHEMERAL ALERT MESSAGES
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

    //util
    async getChannel() {
        return await this.client.channels.fetch(this.channel);
    }

}

module.exports = MessaageManager;