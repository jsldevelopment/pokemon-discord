const { sleep } = require('../util/getDiscordInfo');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');

/**
 * Battle Object - contains all necessary info for a PVE or PVP battle.
 * Current available options: Run Away, Toss Pokeball
 * - TODO: turns/dmg
 */
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

    choices = [];

    /**
     * TODO: add logic for PVP vs PVE. 
     *  PVE - we always execute turns after the player has selected a move
     *  PVP - if the opponent has not selected a move, we idle the player until then
     */
    addMove = (move, interaction) => {
        this.choices.push(move);
        this.executeTurns(interaction);
    }

    // is this pve or pvp?
    executeTurns = async(interaction) => {
        this.messageManager = new MessageManager({ client: this.client, interaction: interaction });
        await this.messageManager.deferUpdate();
        // pve logic
        // TODO: what if we sorted the array by SPD and then PRIO to always get the correct move order, then execute 0 - 1
        if (this.battleType === "PVE") {
            // in pve instances, the opposing pokemon will always use a move
            this.choices.push({ selection: "move", spd: this.p2Lead.stats.spd, ...this.p2Lead.moves[Math.floor(Math.random() * this.p2Lead.moves.length)] });
            this.choices.sort((a, b) => {
                a.spd > b.spd ? 1 : -1
            })
            this.choices.sort((a, b) => {
                    a.prio > b.prio ? 1 : -1
                })
                // this function resolves false in any event the second move should NOT be executed
                // i.e. the opponent faints, you successfully run away, etc
            this.executeMove(this.choices[0], true)
                .then(async goAgain => {
                    await sleep(1500);
                    if (goAgain) {
                        await this.executeMove(this.choices[1], false);
                        await sleep(1500);
                    }
                });
        }
        // pvp logic
        // if (this.battleType === "PVP") return await this.executePVP();
    }

    executeMove = async(selection, disableButtons) => {
        // run away
        if (selection.selection === 'run') {
            const escaped = await this.executeRun(this.p1, this.p2);
            return new Promise(async resolve => {
                if (escaped) {
                    // delete the thread, delete the battle, remove battle from user
                    threadManager.deleteThread(this);
                    this.messageManager.sendRunAwayBroadcast(this.p1, this.p2Lead);
                    battleMap.delete(this.p1.battle);
                    // is there a nicer way to reset this?
                    this.p1.battle = null;
                    resolve(false);
                } else {
                    this.escapes++;
                    const message = await messages.msgBattle(this.p1Lead, this.p2Lead, this.p1.id, "Couldn't get away!", disableButtons);
                    await this.messageManager.editMessage(message);
                    resolve(true);
                }
            });
        }
        // use a move
        if (selection.selection === 'move') {
            return new Promise(async resolve => {
                const message = await messages.msgBattle(this.p1Lead, this.p2Lead, this.p1.id, `${this.p2Lead.name} used ${selection.name}`, disableButtons);
                await this.messageManager.editMessage(message);
                resolve(true);
            });
        }
        // use an item
        if (selection.selection === 'catch') {
            const caught = await this.executeCatch(this.p1, this.p2);
            return new Promise(async resolve => {
                if (caught) {
                    // delete the thread, delete the battle, remove battle from user
                    threadManager.deleteThread(this);
                    this.messageManager.sendCapturedBroadcast(this.p1, this.p2Lead);
                    battleMap.delete(this.p1.battle);
                    // is there a nicer way to reset this?
                    this.p1.battle = null;
                    resolve(false);
                } else {
                    const message = await messages.msgBattle(this.p1Lead, this.p2Lead, this.p1.id, "Awe, it appeared to be caught!", disableButtons);
                    await this.messageManager.editMessage(message);
                    resolve(true);
                }
            });
        }
        // swap to a different party member
    }

    executeRun = async(p1, p2) => {

        const player1Pkmn = p1.party[0];
        const player2Pkmn = p2.party[0];

        const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.p1.id, "Attempting to run away...", true);
        await this.messageManager.editMessage(message);
        await sleep(1000);

        let escaped = (((player1Pkmn.stats.spd * 128) / player1Pkmn.stats.spd) + 30 * this.escapes) % 256;

        if (Math.random() * 101 < escaped) return true;
        return false;

    };

    executeCatch = async(p1, p2) => {

        const player1Pkmn = p1.party[0];
        const player2Pkmn = p2.party[0];

        const message = await messages.msgBattle(player1Pkmn, player2Pkmn, this.p1.id, "You toss a pokeball!", true);
        await this.messageManager.editMessage(message);
        await sleep(1500);
        const message2 = await messages.msgBattle(player1Pkmn, player2Pkmn, this.p1.id, "It wiggles...", true);
        await this.messageManager.editMessage(message2);
        await sleep(1500);
        const message3 = await messages.msgBattle(player1Pkmn, player2Pkmn, this.p1.id, "It wiggles again...", true);
        await this.messageManager.editMessage(message3);
        await sleep(1500);
        const captured = Math.random() * 10;

        // example 'caught' logic. research pokemon caught formula and integrate it into each **Wiggle** phase of the battle.
        if (captured < 5) {
            return true;
        }
        return false;

    }
}

module.exports = Battle;