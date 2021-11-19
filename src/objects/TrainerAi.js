const Trainer = require("./Trainer");

/**
 * Represents a Trainer controlled by AI.
 * @extends {Trainer}
 */
class TrainerAi extends Trainer {

    constructor(id, username, avatar, pokemon) {
        super(id, username, avatar, pokemon);
    }

    generateMove = () => {
        return this.lead.moves[Math.floor(Math.random() * this.lead.moves.length)];
    }

}

module.exports = TrainerAi;