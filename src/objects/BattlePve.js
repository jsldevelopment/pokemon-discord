const Battle = require('./Battle');
const messages = require('../messages/messages.js');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/map/battleMap.js');
const { sleep } = require('../util/getDiscordInfo');
const Category = require('../data/enum/Category');
const Stat = require('../data/enum/Stat');

/**
 * Represents a PVE Battle occuring between player1: HumanUser and player2: AIUser
 * @extends {Battle}
 */
class BattlePve extends Battle {
    constructor(client, player1, player2, channel) {
        super(client, player1, player2, channel);
        this.escapes = 0;
        this.name = `${this.player1.username} vs. Lvl. ${this.player2.lead.level} ${this.player2.lead.name}`;
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

        // remove first index from arr
        this.choices.shift();

        if (turn.type === 'run') {

            const escaped = await this.executeRun();

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
                await sleep(1500);

                // time for some move logic
                // get a reference to the OTHER trainer
                const opp = (turn.trainer.id === this.player1.id) ? this.player2 : this.player1;
                const player = (turn.trainer.id === this.player1.id) ? this.player1 : this.player2;

                console.log(`${player.lead.name}'s turn START -------'`);
                // dmg calc
                if (turn.action.cat !== Category.Status) {
                    console.log('executing dmg phase');
                    await this.calculateDmg(turn.action, player.lead, opp.lead);
                }
                // general dmg calc for testing
                if (turn.action.cat === Category.Status) {
                    console.log('executing state change');
                    await this.calcStatChange(turn.action, player.lead, opp.lead);
                }
                console.log(`${player.lead.name}'s turn END -------'`);

                // faint check
                if (opp.lead.stats.current.hp <= 0) {
                    console.log(`${opp.lead.name} defeated...`);
                    this.threadManager.deleteThread(this.channel, this.name);
                    this.messageManager.sendEnemyDefeatedBroadcast(this);
                    battleMap.delete(this.player1.battle);
                    this.player1.battle = null;
                    // do exp addition
                    console.log(this.expGained(player.lead, opp.lead));
                    resolve(false);
                }

                if (secondTurn) { this.resetTurns(); }
                resolve(true);
            });

        } else if (turn.type === 'catch') {

            const caught = await this.executeCatch(this.player2.lead);

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

    executeRun = async() => {

        this.updateBattleText("Attempting to run away...");
        await sleep(1000);
        let escaped = (((this.player1.lead.stats.spd * 128) / this.player2.lead.stats.spd) + 30 * this.escapes) % 256;
        if (Math.random() * 101 < escaped) return true;
        return false;

    };

    executeCatch = async(opp) => {

        // catch calc
        const caught = await this.calculateCatch(opp);

        this.updateBattleText("You toss a pokeball!");
        await sleep(1500);
        if (!this.shakeCheck(caught)) {
            return false;
        }
        this.updateBattleText("It wiggles...");
        await sleep(1500);
        if (!this.shakeCheck(caught)) {
            return false;
        }
        this.updateBattleText("It wiggles again...");
        await sleep(1500);
        if (!this.shakeCheck(caught)) {
            return false;
        }

        return Math.floor(Math.random() * 101) < caught ? true : false;

    }

    shakeCheck(a) {
        return Math.floor(Math.random() * 65536) >= 1048560 / Math.sqrt(Math.sqrt(16711680 / a));
    }

    resetTurns = async() => {
        await sleep(1500);
        const message2 = await messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, "What will you do?", false);
        await this.messageManager.editMessage(message2);
    }

    updateBattleText = async(text) => {
        const message = await messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, text, true);
        await this.messageManager.editMessage(message);
        this.updateLog(text);
    }

    calculateDmg = async(move, player, opp) => {

        let dmg = Math.floor((
            (
                (((2 * player.level) / 5) + 2) *
                move.dmg *
                (
                    (move.cat === Category.Physical ? player.stats.current.atk : player.stats.current.spatk) /
                    (move.cat === Category.Physical ? opp.stats.current.def : opp.stats.current.spdef)
                ) / 50
            ) + 2
        ));

        // dmg * crit
        // dmg * [.85:1]
        // dmg * STAB
        dmg *= (player.type === move.type ? 2 : 1);
        // dmg * Type
        // rawDmg *= (player.type === move.type ? 2 : 1);

        // we need dmg type vs opp type
        // STAB
        // critical hit
        // user atk/spatk
        // enemy def/spdef

        // TODO: this still displays the -x amount of hp, not 0
        (player.stats.current.hp - dmg <= 0) ? opp.stats.current.hp = 0: opp.stats.current.hp -= dmg;
        this.updateBattleText(`${opp.name} took ${dmg} damage!`);

    }

    calcStatChange = async(move, player, opp) => {

        if (move.statChange) {
            if (move.statChange.self) {
                if (move.statChange.lower) {
                    move.statChange.forEach((stat) => {
                        player.stats.current[stat] *= .5 * move.statChange.stage;
                    })
                } else {
                    move.statChange.forEach((stat) => {
                        player.stats.current[stat] *= 2 * move.statChange.stage;
                    })
                }
            } else {
                if (move.statChange.lower) {
                    move.statChange.stat.forEach(async(stat) => {
                        player.stats.current[stat] *= .5 * move.statChange.stage;
                        this.updateBattleText(`${opp.name} speed lowered by ${move.statChange.stage}!`);
                        await sleep(1500);
                    })
                } else {
                    move.statChange.forEach((stat) => {
                        player.stats.current[stat] *= 2 * move.statChange.stage;
                    })
                }
            }
        }

    }

    calculateCatch = async(opp) => {

        // the pokeball used
        let ball = 1;
        let status = 1;
        let rate = ((((3 * opp.stats.hp) - (2 * opp.stats.current.hp)) * opp.catchRate * ball) / (3 * opp.stats.net.hp)) * status;
        return rate;

    }

    updateLog = async(text) => {
        this.thread.messages.fetch({ limit: 10 })
            .then((messages) => {
                const logMessage = messages.first();
                const newContent = logMessage.content + "\n" + text;
                messages.first().edit({ content: newContent });
            });
    }

    expGained = (player, enemy) => {
        console.log(enemy);
        return (enemy.yield.exp * enemy.level / 5) * Math.pow((2 * enemy.level + 10) / (enemy.level + player.level + 10), 2.5);
    }

}

module.exports = BattlePve;