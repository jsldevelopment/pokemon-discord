const Battle = require('./Battle');
const messages = require('../data/messages/messages.js');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');
const { sleep } = require('../util/getDiscordInfo');

/**
 * Represents a PVE Battle occuring between player1: HumanUser and player2: AIUser
 * @extends {Battle}
 */
class BattlePve extends Battle {
    constructor(client, player1, player2, channel) {
        super(client, player1, player2, channel);
        this.escapes = 0;
        this.name = `${this.player1.username} vs. Lvl. ${this.player2Lead.level} ${this.player2Lead.name}`;
    }

    executeTurns = async(interaction) => {
        this.messageManager = new MessageManager(this.client, interaction);
        await this.messageManager.deferUpdate();
        this.choices.push(this.player2.generateMove());
        this.sortMoves();
        this.executeMoves();
    }

    executeSelection = async(type, disableButtons) => {
        if (type.selection === 'run') {
            const escaped = await this.executeRun(this.player1, this.player2);
            return new Promise(async resolve => {
                if (escaped) {
                    this.threadManager.deleteThread(this.channel, this.name);
                    this.messageManager.sendRunAwayBroadcast(this);
                    battleMap.delete(this.player1.battle);
                    this.player1.battle = null;
                    resolve(false);
                } else {
                    this.escapes++;
                    const message = await messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, "Couldn't get away!", disableButtons);
                    await this.messageManager.editMessage(message);
                    resolve(true);
                }
            });
        }

        if (type.selection === 'move') {
            return new Promise(async resolve => {
                const message = await messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, `${this.player2Lead.name} used ${selection.name}`, disableButtons);
                await this.messageManager.editMessage(message);
                resolve(true);
            });
        } else if (type.selection === 'catch') {
            const caught = await this.executeCatch(this.player1, this.player2);
            return new Promise(async resolve => {
                if (caught) {
                    this.threadManager.deleteThread(this);
                    this.messageManager.sendCapturedBroadcast(this);
                    battleMap.delete(this.player1.battle);
                    this.player1.battle = null;
                    resolve(false);
                } else {
                    const message = await messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, "Awe, it appeared to be caught!", disableButtons);
                    await this.messageManager.editMessage(message);
                    resolve(true);
                }
            });
        } else if (type.selection === 'swap') {

        }
    }

    executeRun = async(player1, player2) => {

        const player1Pkmn = player1.party[0];
        const player2Pkmn = player2.party[0];

        const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "Attempting to run away...", true);
        await this.messageManager.editMessage(message);
        await sleep(1000);

        let escaped = (((player1Pkmn.stats.spd * 128) / player1Pkmn.stats.spd) + 30 * this.escapes) % 256;

        if (Math.random() * 101 < escaped) return true;
        return false;

    };

    executeCatch = async(player1, player2) => {

        const player1Pkmn = player1.party[0];
        const player2Pkmn = player2.party[0];

        const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "You toss a pokeball!", true);
        await this.messageManager.editMessage(message);
        await sleep(1500);
        const message2 = await messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "It wiggles...", true);
        await this.messageManager.editMessage(message2);
        await sleep(1500);
        const message3 = await messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "It wiggles again...", true);
        await this.messageManager.editMessage(message3);
        await sleep(1500);
        const captured = Math.random() * 10;

        return true;

    }
}

module.exports = BattlePve;