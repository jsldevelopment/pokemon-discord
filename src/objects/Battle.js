const { sleep } = require('../util/getDiscordInfo');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');

class Battle {

    constructor(client, player1, player2, battleType) {
        this.client = client;
        this.battleType = battleType;
        // player 1 will always refer to the player who initiated the battle
        this.p1 = player1;
        this.p1Lead = player1.party[0];
        this.p2 = player2;
        this.p2Lead = player2.party[0];
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
        if (id === this.p1.id) {
            this.selections[0] = move;
        } else {
            this.selections[1] = move;
        }
    }

    // is this pve or pvp?
    executeTurns = async(interaction) => {
        this.interaction = interaction;
        this.messageManager = new MessageManager({ client: this.client, interaction: this.interaction });
        this.messageManager.deferUpdate();
        if (this.battleType === "PVE") {
            this.selections[1] = { selection: "move", ...this.p2Lead.moves[Math.floor(Math.random() * this.p2Lead.moves.length)] };
            // check for prio + speed then execute the moves in the appropriate order
            console.log(`${this.p1Lead.stats.spd} : ${this.p2Lead.stats.spd}`);
            if (this.p1Lead.stats.spd < this.p2Lead.stats.spd) {
                await this.executeMove(this.selections[1]);
                await this.executeMove(this.selections[0]);
            } else {
                await this.executeMove(this.selections[0]);
                await this.executeMove(this.selections[1]);
            }
        }
        // if (this.battleType === "PVP") return await this.executePVP();
    }

    executeMove = async(selection) => {
        if (selection.selection === 'run') {
            await this.executeRun(this.p1, this.p2)
                .then(async(escaped) => {
                    if (escaped) {
                        // delete the thread, delete the battle, remove battle from user
                        threadManager.deleteThread(this);
                        this.messageManager.sendRunAwayBroadcast(this.p1, this.p2);
                        battleMap.delete(this.p1.battle);
                        // is there a nicer way to reset this?
                        this.p1.battle = null;
                    } else {
                        this.escapes++;
                        const message = await messages.msgBattle(this.p1Lead, this.p2Lead, this.p1.id, "Couldn't get away!");
                        await this.messageManager.editMessage(message);
                    }
                })
        }
        if (selection.selection === 'move') {
            const message = await messages.msgBattle(this.p1Lead, this.p2Lead, this.p1.id, JSON.stringify(selection), true);
            await this.messageManager.editMessage(message);
        }
    }

    executeRun = async(p1, p2) => {

        return new Promise(async(resolve) => {

            const player1Pkmn = p1.party[0];
            const player2Pkmn = p2.party[0];

            await sleep(500);
            const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.p1.id, "Attempting to run away...", true);
            await this.messageManager.editMessage(message);

            let escaped = (((player1Pkmn.stats.spd * 128) / player1Pkmn.stats.spd) + 30 * this.escapes) % 256;
            await sleep(1500);

            // swtich this back to true it's onyl for testing
            if (Math.random() * 101 < escaped) resolve(false);
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