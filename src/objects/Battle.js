const { sleep } = require('../util/getDiscordInfo');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
const MessageManager = require('../managers/MessageManager');
class Battle {

    constructor(client, player, opponent, battleType) {
        this.client = client;
        this.battleType = battleType;
        this.player = player;
        this.opponent = opponent;
        this.turns = 0;
        this.escapes = 0;
    };

    selections = [];

    /**
     * TODO: add logic for PVP vs PVE. 
     *  PVE - we always execute turns after the player has selected a move
     *  PVP - if the opponent has not selected a move, we idle the player until then
     */
    addMove = (move) => {
        this.selections.push(move);
    }

    // is this pve or pvp?
    executeTurns = async(interaction) => {
        this.interaction = interaction;
        this.messageManager = new MessageManager({ client: this.client, interaction: this.interaction });
        if (this.battleType === "PVE") return await this.executePVE();
        if (this.battleType === "PVP") return await this.executePVP();
    }

    executePVE = async() => {
        if (this.selections[0] === 'run') {
            await this.executeRun();
        }
    }

    executeRun = async() => {
        await sleep(500);
        const message = await messages.msgBattle(this.player.party[0], this.opponent, this.player.id, "Attempting to run away...", true);
        await this.messageManager.editMessage(message);

        let escaped = (((this.player.party[0].stats.spd * 128) / this.opponent.stats.spd) + 30 * this.escapes) % 256;
        await sleep(1500);

        if (Math.random() * 101 < escaped) {

            await threadManager.deleteThread(this);
            await this.messageManager.sendRunAwayBroadcast(this.player, this.opponent);

        } else {

            this.escapes++;
            const message = await messages.msgBattle(this.player.party[0], this.opponent, this.player.id, "Couldn't get away!");
            await this.messageManager.editMessage(message);

        }
    }

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