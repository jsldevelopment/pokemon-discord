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
        // is this pve or pvp?
        this.executeTurns = (interaction) => __awaiter(this, void 0, void 0, function* () {
            this.messageManager = new MessageManager(this.client, interaction);
            yield this.messageManager.deferUpdate();
            this.choices.push(this.player2.generateMove());
            this.sortMoves();
            this.executeMoves();
        });
        this.executeSelection = (type, disableButtons) => __awaiter(this, void 0, void 0, function* () {
            // run away
            if (type.selection === 'run') {
                const escaped = yield this.executeRun(this.player1, this.player2);
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    if (escaped) {
                        // delete the thread, delete the battle, remove battle from user
                        this.threadManager.deleteThread(this.channel, this.name);
                        this.messageManager.sendRunAwayBroadcast(this);
                        battleMap.delete(this.player1.battle);
                        // is there a nicer way to reset this?
                        this.player1.battle = null;
                        resolve(false);
                    }
                    else {
                        this.escapes++;
                        const message = yield messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, "Couldn't get away!", disableButtons);
                        yield this.messageManager.editMessage(message);
                        resolve(true);
                    }
                }));
            }
            // use a move
            // TODO: this logic is directly related to the 2nd pokemon, and no generalized for any pokemon that uses a move
            // continuing to write like this will make it impossible to add pvp logic later
            if (type.selection === 'move') {
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    const message = yield messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, `${this.player2Lead.name} used ${selection.name}`, disableButtons);
                    yield this.messageManager.editMessage(message);
                    resolve(true);
                }));
            }
            // use an item
            else if (type.selection === 'catch') {
                const caught = yield this.executeCatch(this.player1, this.player2);
                return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    if (caught) {
                        // delete the thread, delete the battle, remove battle from user
                        this.threadManager.deleteThread(this);
                        this.messageManager.sendCapturedBroadcast(this);
                        battleMap.delete(this.player1.battle);
                        // is there a nicer way to reset this?
                        this.player1.battle = null;
                        resolve(false);
                    }
                    else {
                        const message = yield messages.msgBattle(this.player1Lead, this.player2Lead, this.player1.id, "Awe, it appeared to be caught!", disableButtons);
                        yield this.messageManager.editMessage(message);
                        resolve(true);
                    }
                }));
            }
            // swap to a different party member
            else if (type.selection === 'swap') {
                // TODO: implement swap logic
            }
        });
        this.executeRun = (player1, player2) => __awaiter(this, void 0, void 0, function* () {
            const player1Pkmn = player1.party[0];
            const player2Pkmn = player2.party[0];
            const message = yield messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "Attempting to run away...", true);
            yield this.messageManager.editMessage(message);
            yield sleep(1000);
            let escaped = (((player1Pkmn.stats.spd * 128) / player1Pkmn.stats.spd) + 30 * this.escapes) % 256;
            if (Math.random() * 101 < escaped)
                return true;
            return false;
        });
        this.executeCatch = (player1, player2) => __awaiter(this, void 0, void 0, function* () {
            const player1Pkmn = player1.party[0];
            const player2Pkmn = player2.party[0];
            const message = yield messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "You toss a pokeball!", true);
            yield this.messageManager.editMessage(message);
            yield sleep(1500);
            const message2 = yield messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "It wiggles...", true);
            yield this.messageManager.editMessage(message2);
            yield sleep(1500);
            const message3 = yield messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "It wiggles again...", true);
            yield this.messageManager.editMessage(message3);
            yield sleep(1500);
            const captured = Math.random() * 10;
            return true;
        });
        /**
         * The number of attempted escapes from this battle
         */
        this.escapes = 0;
        /**
         * The name of this battle, for threading reference.
         */
        this.name = `${this.player1.username} vs. Lvl. ${this.player2Lead.level} ${this.player2Lead.name}`;
    }
}
module.exports = BattlePve;
