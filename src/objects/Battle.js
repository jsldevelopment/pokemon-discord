const { sleep } = require('../util/getDiscordInfo');

/**
 * Battle Object - contains all necessary info for a PVE or PVP battle.
 * Current available options: Run Away, Toss Pokeball
 * - TODO: turns/dmg
 */
class Battle {

    constructor(client, player1, player2) {
        this.client = client;
        // player 1 will always refer to the player who initiated the battle
        this.player1 = player1;
        this.player2Lead = player1.party[0];
        this.player2 = player2;
        this.player2Lead = player2.party[0];
        this.choices = [];
        this.turns = 0;
    };


    /**
     * TODO: add logic for PVP vs PVE. 
     *  PVE - we always execute turns after the player has selected a move
     *  PVP - if the opponent has not selected a move, we idle the player until then
     */
    addMove = (move, interaction) => {
        this.choices.push(move);
        this.executeTurns(interaction);
    }

    sortMoves = () => {
        this.choices.sort((a, b) => {
            a.spd > b.spd ? 1 : -1
        });
        this.choices.sort((a, b) => {
            a.prio > b.prio ? 1 : -1
        });
    }

    executeMoves = () => {
        this.executeSelection(this.choices[0], true)
            .then(async goAgain => {
                await sleep(1500);
                if (goAgain) {
                    await this.executeSelection(this.choices[1], false);
                    await sleep(1500);
                }
            });
    }

}

module.exports = Battle;