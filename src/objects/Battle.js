const { sleep } = require('../util/getDiscordInfo');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
class Battle {

    constructor(currentPokemon, opponent, battleType) {
        this.battleType = battleType;
        this.selection = [];
        this.currentPokemon = currentPokemon;
        this.opponent = opponent;
        this.turns = 0;
        this.escapes = 0;
    };

    selections = [];

    executeTurns = async(interaction, curUser) => {
        if (this.battleType === "PVE") return await this.executePVE(interaction, curUser);
    }

    executePVE = async(interaction, curUser) => {
        if (this.selection[0] === "run") {
            console.log('executing run');
            // this isn't being executed
            await this.executeRun(interaction, curUser);
        }
    }

    executeRun = async(interaction, curUser) => {
        await sleep(500);
        const message = await messages.msgBattle(this.currentPokemon, this.opponent, curUser.id, "Attempting to run away...", true);
        await interaction.editReply(message);

        let escaped = (((this.currentPokemon.stats.spd * 128) / opponent.stats.spd) + 30 * this.escapes) % 256;
        await sleep(1500);

        if (Math.random() * 101 < escaped) {

            await threadManager.deleteThread(currentUser);
            await messageManager.sendRunAwayBroadcast(currentUser, this.opponent);

        } else {

            this.escapes++;
            const message = await messages.msgBattle(this.currentPokemon, this.opponent, currentUser.id, "Couldn't get away!");
            await interaction.editReply(message);

        }
    }
}

module.exports = Battle;