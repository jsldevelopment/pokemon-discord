"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        // how do we write this such that the function knows who the calling user is
        this.addTurn = (interaction, player, type, index) => {
            if (type === "move") {
                var action = { action: player.lead.moves[index] };
            }
            this.choices.push(Object.assign({ type: type, trainer: player }, action));
            this.choices.push({
                type: type,
                trainer: this.player2,
                action: this.player2.generateMove()
            });
            this.executeTurns(interaction);
        };
        // and the executing move knows who executed it, and who to act on
        this.executeTurns = (interaction) => __awaiter(this, void 0, void 0, function* () {
            this.messageManager = new MessageManager(this.client, interaction);
            yield this.messageManager.deferUpdate();
            this.sortMoves();
            this.executeMoves();
        });
        this.executeSelection = (turn, secondTurn) => __awaiter(this, void 0, void 0, function* () {
            if (turn.type === 'run') {
                const escaped = yield this.executeRun();
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    if (escaped) {
                        this.threadManager.deleteThread(this.channel, this.name);
                        this.messageManager.sendRunAwayBroadcast(this);
                        battleMap.delete(this.player1.battle);
                        this.player1.battle = null;
                        resolve(false);
                    }
                    else {
                        this.escapes++;
                        this.updateBattleText("You couldn't get away...");
                        if (secondTurn) {
                            this.resetTurns();
                        }
                        resolve(true);
                    }
                }));
            }
            if (turn.type === 'move') {
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    this.updateBattleText(`${turn.trainer.party[0].name} used ${turn.action.name}`);
                    yield sleep(1500);
                    // time for some move logic
                    // get a reference to the OTHER trainer
                    const opp = (turn.trainer.id === this.player1.id) ? this.player2 : this.player1;
                    // dmg calc
                    const dmg = Math.floor(Math.random() * 5) + 1;
                    opp.lead.currentStats.hp -= dmg;
                    console.log(opp.lead.currentStats.hp);
                    this.updateBattleText(`${opp.lead.name} took ${dmg} damage!`);
                    // faint check
                    if (opp.lead.currentStats.hp <= 0) {
                        console.log(`${opp.lead.name} defeated...`);
                        this.threadManager.deleteThread(this.channel, this.name);
                        this.messageManager.sendEnemyDefeatedBroadcast(this);
                        battleMap.delete(this.player1.battle);
                        this.player1.battle = null;
                        resolve(false);
                    }
                    if (secondTurn) {
                        this.resetTurns();
                    }
                    resolve(true);
                }));
            }
            else if (turn.type === 'catch') {
                const caught = yield this.executeCatch();
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    if (caught) {
                        this.threadManager.deleteThread(this.channel, this.name);
                        this.messageManager.sendCapturedBroadcast(this);
                        battleMap.delete(this.player1.battle);
                        this.player1.battle = null;
                        resolve(false);
                    }
                    else {
                        this.updateBattleText("Awe, it appeared to be caught!");
                        if (secondTurn) {
                            this.resetTurns();
                        }
                        resolve(true);
                    }
                }));
            }
            else if (type.selection === 'swap') {
                // implement swap logic
            }
        });
        this.executeRun = () => __awaiter(this, void 0, void 0, function* () {
            this.updateBattleText("Attempting to run away...");
            yield sleep(1000);
            let escaped = (((this.player1.lead.stats.spd * 128) / this.player2.lead.stats.spd) + 30 * this.escapes) % 256;
            if (Math.random() * 101 < escaped)
                return true;
            return false;
        });
        this.executeCatch = () => __awaiter(this, void 0, void 0, function* () {
            this.updateBattleText("You toss a pokeball!");
            yield sleep(1500);
            this.updateBattleText("It wiggles...");
            yield sleep(1500);
            this.updateBattleText("It wiggles again...");
            yield sleep(1500);
            // const captured = Math.random() * 10;
            return true;
        });
        this.resetTurns = () => __awaiter(this, void 0, void 0, function* () {
            this.choices = [];
            yield sleep(1500);
            const message2 = yield messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, "What will you do?", false);
            yield this.messageManager.editMessage(message2);
        });
        this.updateBattleText = (text) => __awaiter(this, void 0, void 0, function* () {
            const message = yield messages.msgBattle(this.player1.lead, this.player2.lead, this.player1.id, text, true);
            yield this.messageManager.editMessage(message);
        });
        this.escapes = 0;
        this.name = `${this.player1.username} vs. Lvl. ${this.player2.lead.level} ${this.player2.lead.name}`;
    }
}
module.exports = BattlePve;
