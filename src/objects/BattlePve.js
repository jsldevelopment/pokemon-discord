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

    // how do we write this such that the function knows who the calling user is
    addTurn = (interaction, player, type, index) => {

        if (type === "move") {
            var action = { action: player.lead.moves[index] };
        }

        this.choices.push({
            type: type,
            trainer: player,
            ...action
        });

        this.choices.push({
            type: type,
            trainer: this.player2,
            action: this.player2.generateMove()
        })

        this.executeTurns(interaction);

    }

    // and the executing move knows who executed it, and who to act on
    executeTurns = async(interaction) => {
        this.messageManager = new MessageManager(this.client, interaction);
        await this.messageManager.deferUpdate();
        this.sortMoves();
        this.executeMoves();
    }

    executeSelection = async(turn, secondTurn) => {

        console.log(turn);

        if (turn.type === 'run') {

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
                    this.updateBattleText("You couldn't get away...");
                    if (secondTurn) { this.resetTurns(); }
                    resolve(true);
                }
            });

        }

        if (turn.type === 'move') {

            return new Promise(async resolve => {
                this.updateBattleText(`${turn.trainer.party[0].name} used ${turn.action.name}`);
                if (secondTurn) { this.resetTurns(); }
                resolve(true);
            });

        } else if (turn.type === 'catch') {

            const caught = await this.executeCatch();

            return new Promise(async resolve => {
                if (caught) {
                    this.threadManager.deleteThread(this.channel, this.name);
                    this.messageManager.sendCapturedBroadcast(this);
                    battleMap.delete(this.player1.battle);
                    this.player1.battle = null;
                    resolve(false);
                } else {
                    this.updateBattleText("Awe, it appeared to be caught!");
                    if (secondTurn) { this.resetTurns(); }
                    resolve(true);
                }

            });

        } else if (type.selection === 'swap') {
            // implement swap logic
        }
    }

    executeRun = async(player1, player2) => {

        this.updateBattleText("Attempting to run away...");
        await sleep(1000);
        let escaped = (((this.player1Lead.stats.spd * 128) / this.player2Lead.stats.spd) + 30 * this.escapes) % 256;
        if (Math.random() * 101 < escaped) return true;
        return false;

    };

    executeCatch = async() => {

        this.updateBattleText("You toss a pokeball!");
        await sleep(1500);
        this.updateBattleText("It wiggles...");
        await sleep(1500);
        this.updateBattleText("It wiggles again...");
        await sleep(1500);
        // const captured = Math.random() * 10;

        return true;

    }

    resetTurns = async() => {
        this.choices = [];
        await sleep(1500);
        const message2 = await messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, "What will you do?", false);
        await this.messageManager.editMessage(message2);
    }

    updateBattleText = async(text) => {
        const message = await messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, text, true);
        await this.messageManager.editMessage(message);
    }
}

module.exports = BattlePve;