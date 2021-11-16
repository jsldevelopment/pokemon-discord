const Trainer = require("./Trainer");

/**
 * Represents a Trainer controlled by AI.
 * @extends {Trainer}
 */
class TrainerAi extends Trainer {

    constructor(pokemon) {
        super(pokemon);
    }

    generateMove = () => {
        return this.lead.moves[Math.floor(Math.random() * this.lead.moves.length)];
    }

}

module.exports = TrainerAi;