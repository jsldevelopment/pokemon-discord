const { sleep } = require('../util/getDiscordInfo');
const ThreadManager = require('../managers/ThreadManager');

/**
 * Battle Object - contains all necessary info for a PVE or PVP battle.
 * Current available options: Run Away, Toss Pokeball
 * - TODO: turns/dmg
 */
class Battle {

    constructor(client, player1, player2, channel) {
        this.client = client;
        this.channel = channel;
        // player 1 will always refer to the player who initiated the battle
        this.player1 = player1;
        this.player2 = player2;
        this.choices = [];
        this.turns = 0;
        this.threadManager = new ThreadManager(client);
    };

    sortMoves = () => {
        this.choices.sort((a, b) => {
            a.spd > b.spd ? 1 : -1
        });
        this.choices.sort((a, b) => {
            a.prio > b.prio ? 1 : -1
        });
    }

    executeMoves = () => {
        this.executeSelection(this.choices[0], false)
            .then(async goAgain => {
                await sleep(1500);
                if (goAgain) {
                    await this.executeSelection(this.choices[0], true);
                    await sleep(1500);
                }
            });
    }

}

module.exports = Battle;