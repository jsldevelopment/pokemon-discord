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
        this.sortMoves = () => {
            this.choices.sort((a, b) => {
                a.spd > b.spd ? 1 : -1;
            });
            this.choices.sort((a, b) => {
                a.prio > b.prio ? 1 : -1;
            });
        };
        this.executeMoves = () => {
            this.executeSelection(this.choices[0], false)
                .then((goAgain) => __awaiter(this, void 0, void 0, function* () {
                yield sleep(1500);
                if (goAgain) {
                    yield this.executeSelection(this.choices[1], true);
                    yield sleep(1500);
                }
            }));
        };
        this.client = client;
        this.channel = channel;
        // player 1 will always refer to the player who initiated the battle
        this.player1 = player1;
        this.player2 = player2;
        this.choices = [];
        this.turns = 0;
        this.threadManager = new ThreadManager(client);
    }
    ;
}
module.exports = Battle;
