"use strict";
class Trainer {
    constructor(id, pokemon) {
        this.party = [pokemon];
        this.lead = this.party[0];
        this.id = id;
    }
    ;
}
module.exports = Trainer;
