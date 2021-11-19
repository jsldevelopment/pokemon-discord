const Trainer = require("./Trainer");

/**
 * Represents a Trainer controlled by a human user.
 * @extends {Trainer}
 */
class TrainerHuman extends Trainer {

    constructor(id, username, avatar, pokemon) {
        super(id, username, avatar, pokemon);
    }

}

module.exports = TrainerHuman;