class Trainer {

    constructor(id, username, avatar, pokemon) {
        this.id = id;
        this.username = username;
        this.avatar = avatar;
        this.party = [pokemon];
        this.lead = this.party[0];
        this.isInBattle = false;
        this.battling = {};
    };

}

module.exports = Trainer;