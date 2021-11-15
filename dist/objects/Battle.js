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
const { sleep } = require('../util/getDiscordInfo');
const ThreadManager = require('../managers/ThreadManager');
/**
 * Battle Object - contains all necessary info for a PVE or PVP battle.
 * Current available options: Run Away, Toss Pokeball
 * - TODO: turns/dmg
 */
class Battle {
    constructor(client, player1, player2, channel) {
        /**
         * TODO: add logic for PVP vs PVE.
         *  PVE - we always execute turns after the player has selected a move
         *  PVP - if the opponent has not selected a move, we idle the player until then
         */
        this.addMove = (move, interaction) => {
            this.choices.push(move);
            this.executeTurns(interaction);
        };
        this.sortMoves = () => {
            this.choices.sort((a, b) => {
                a.spd > b.spd ? 1 : -1;
            });
            this.choices.sort((a, b) => {
                a.prio > b.prio ? 1 : -1;
            });
        };
        this.executeMoves = () => {
            this.executeSelection(this.choices[0], true)
                .then((goAgain) => __awaiter(this, void 0, void 0, function* () {
                yield sleep(1500);
                if (goAgain) {
                    yield this.executeSelection(this.choices[1], false);
                    yield sleep(1500);
                }
            }));
        };
        this.client = client;
        this.channel = channel;
        // player 1 will always refer to the player who initiated the battle
        this.player1 = player1;
        this.player2Lead = player1.party[0];
        this.player2 = player2;
        this.player2Lead = player2.party[0];
        this.choices = [];
        this.turns = 0;
        this.threadManager = new ThreadManager(client);
    }
    ;
}
module.exports = Battle;
