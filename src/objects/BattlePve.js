const Battle = require('./Battle');
const messages = require('../data/messages/messages.js');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');
const { sleep } = require('../util/getDiscordInfo');
const Category = require('../data/constants/Category');
const Stat = require('../data/constants/Stat');

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
                // dmg calc
                const dmg = await this.calculateDmg(turn.action, player.lead, opp.lead);

                // faint check
                if (opp.lead.currentStats.hp <= 0) {
                    console.log(`${opp.lead.name} defeated...`);
                    this.threadManager.deleteThread(this.channel, this.name);
                    this.messageManager.sendEnemyDefeatedBroadcast(this);
                    battleMap.delete(this.player1.battle);
                    this.player1.battle = null;
                    resolve(false);
                }

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

    executeRun = async() => {

        this.updateBattleText("Attempting to run away...");
        await sleep(1000);
        let escaped = (((this.player1.lead.stats.spd * 128) / this.player2.lead.stats.spd) + 30 * this.escapes) % 256;
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
        const message2 = await messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, "What will you do?", false);
        await this.messageManager.editMessage(message2);
    }

    updateBattleText = async(text) => {
        const message = await messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, text, true);
        await this.messageManager.editMessage(message);
    }

    calculateDmg = async(move, player, opp) => {

        // general dmg calc for testing
        if (move.cat === Category.Status) return await this.calcStatChange(move, player, opp);
        let dmg = Math.floor((
            (
                (((2 * player.level) / 5) + 2) *
                move.dmg *
                (
                    (move.cat === Category.Physical ? player.currentStats.atk : player.currentStats.spatk) /
                    (move.cat === Category.Physical ? opp.currentStats.def : opp.currentStats.spdef)
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

        player.currentStats.hp - dmg <= 0 ? opp.currentStats.hp = 0 : opp.currentStats.hp -= dmg;
        this.updateBattleText(`${opp.name} took ${dmg} damage!`);

    }

    calcStatChange = async(move, player, opp) => {

        // "StringShot": {
        //     "type": Type.Bug,
        //     "cat": Category.Status,
        //     "pp": 40,
        //     "dmg": 0,
        //     "acc": 95,
        //     "desc": "Opposing Pokémon are bound with silk blown from the user's mouth that harshly lowers the Speed stat.",
        //     "name": "String Shot",
        //     "prio": 0,
        //     "statChange": {
        //         self: false,
        //         stage: 1,
        //         lower: false,
        //         stat: [Stat.SPD]
        //     }
        // },

        if (move.statChange) {
            if (move.statChange.self) {
                if (move.statChange.lower) {
                    move.statChange.forEach((stat) => {
                        player.currentStats[stat] *= .5 * move.statChange.stage;
                    })
                } else {
                    move.statChange.forEach((stat) => {
                        player.currentStats[stat] *= 2 * move.statChange.stage;
                    })
                }
            } else {
                if (move.statChange.lower) {
                    move.statChange.stat.forEach(async(stat) => {
                        player.currentStats[stat] *= .5 * move.statChange.stage;
                        this.updateBattleText(`${opp.name} speed lowered by ${move.statChange.stage}!`);
                        await sleep(1500);
                    })
                } else {
                    move.statChange.forEach((stat) => {
                        player.currentStats[stat] *= 2 * move.statChange.stage;
                    })
                }
            }
        }

    }

}

module.exports = BattlePve;