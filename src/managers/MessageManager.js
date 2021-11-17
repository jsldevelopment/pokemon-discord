const { getChannel } = require('../util/getDiscordInfo');
const BaseManager = require('./BaseManager');

class MessageManager extends BaseManager {

    /**
     * set initial reference to instantiating client and interaction
     * @param {Client|Interaction} param0 
     */
    constructor(client, interaction) {
        super(client, interaction);
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

    async sendCapturedBroadcast(battle) {
        (await getChannel(this.client, battle.channel)).send({ content: `${battle.player1.username} has caught a ${battle.player2.lead.name}!` });
    }

    async sendEnemyDefeatedBroadcast(battle) {
        (await getChannel(this.client, battle.channel)).send({ content: `defeated text` });
    }

    async sendRunAwayBroadcast(battle) {
        (await getChannel(this.client, battle.channel)).send({ content: `ran away text` });
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