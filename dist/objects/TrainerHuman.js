"use strict";
const Trainer = require("./Trainer");
/**
 * Represents a Trainer controlled by a human user.
 * @extends {Trainer}
 */
class TrainerHuman extends Trainer {
    constructor(id, username, avatar, pokemon) {
        super(pokemon);
        this.id = id;
        this.username = username;
        this.avatar = avatar;
        this.money = 5000;
        this.pokedex = {
            caught: 1,
            seen: 1
        };
        this.badges = 0;
        this.isInBattle = false;
        this.battling = {};
    }
}
module.exports = TrainerHuman;
