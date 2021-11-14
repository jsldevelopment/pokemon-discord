const Trainer = require("./Trainer");

/**
 * Represents a Trainer controlled by AI.
 * @extends {Trainer}
 */
class TrainerAi extends Trainer {

    constructor(pokemon) {
        super(pokemon);
        this.lead = this.party[0];
    }

    /**
     * Generates a move to be used by the AI
     * @returns Move
     */
    generateMove = () => {
        return {
            selection: "move",
            trainer: this,
            pokemon: this.lead,
            move: Math.floor(Math.random() * this.lead.moves.length)
        };
    }
}

module.exports = TrainerAi;