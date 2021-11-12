const { sleep } = require('../util/getDiscordInfo');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');

class Battle {

    constructor(client, player1, player2, battleType) {
        this.client = client;
        this.battleType = battleType;
        this.player1 = player1;
        this.player2 = player2;
        this.turns = 0;
        this.escapes = 0;
    };

    selections = [];

    /**
     * TODO: add logic for PVP vs PVE. 
     *  PVE - we always execute turns after the player has selected a move
     *  PVP - if the opponent has not selected a move, we idle the player until then
     */
    addMove = (move, id) => {
        // player 1 always holds the 0 index, player 2 always holds the 1 index
        if (id === this.player1.id) {
            this.selections[0] = move;
        } else {
            this.selections[1] = move;
        }
    }

    // is this pve or pvp?
    executeTurns = async(interaction) => {
        this.interaction = interaction;
        this.messageManager = new MessageManager({ client: this.client, interaction: this.interaction });
        if (this.battleType === "PVE") {
            // generate opponent move
            const moves = this.player2.party[0].moves;
            const moveNum = Math.floor(Math.random() * moves.length);
            this.selections[1] = { selection: "move", ...moves[moveNum] };
            console.log(JSON.stringify(this.selections));
            // await this.executeMove();
        }
        // if (this.battleType === "PVP") return await this.executePVP();
    }

    executeMove = async() => {
        if (this.selections[0] === 'run') {
            await this.executeRun(player1, player2)
                .then(async(escaped) => {
                    if (escaped) {
                        // delete the thread, delete the battle, remove battle from user
                        threadManager.deleteThread(this);
                        this.messageManager.sendRunAwayBroadcast(this.player1, this.player2);
                        battleMap.delete(this.player1.battle);
                        // is there a nicer way to reset this?
                        this.player.battle = {};
                    } else {
                        this.escapes++;
                        const message = await messages.msgBattle(this.player1.party[0], this.player2, this.player1.id, "Couldn't get away!");
                        await this.messageManager.editMessage(message);
                    }
                })
        }
    }

    executeRun = async(player1, player2) => {

        return new Promise(async(resolve) => {

            const player1Pkmn = player1.party[0];
            const player2Pkmn = player2.party[0];

            await sleep(500);
            const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.player1.id, "Attempting to run away...", true);
            await this.messageManager.editMessage(message);

            let escaped = (((player1Pkmn.stats.spd * 128) / player1Pkmn.stats.spd) + 30 * this.escapes) % 256;
            await sleep(1500);

            if (Math.random() * 101 < escaped) resolve(true);
            resolve(false);

        });

    };

    executeCatch = async() => {

        // do some calculations here
        // interaction.deferUpdate();
        // await sleep(500);
        // const message = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "You toss a pokeball!", true);
        // await interaction.editReply(message);
        // await sleep(1500);
        // const message2 = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "It wiggles...", true);
        // await interaction.editReply(message2);
        // await sleep(1500);
        // const message3 = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, "It wiggles again...", true);
        // await interaction.editReply(message3);
        // await sleep(1500);
        // const message4 = await messages.msgBattle(curPokemon, opPokemon, currentUser.id, `GOTCHA! ${opPokemon.name} was caught!`, true);
        // await interaction.editReply(message4);
        // await this.threadManager.deleteThread(currentUser);
        // currentUser.party[currentUser.party.length] = currentUser.battling.opponent;
        // await messageManager.sendCapturedBroadcast(currentUser, currentUser.battling.opponent);
    }
}

module.exports = Battle;