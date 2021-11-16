class Pokemon {

    constructor(uuid, captured, name, id, types, level, evolves, base, stats, currentStats, gender, ability, nature, ivs, evs, moves, learnset) {
        /**
         * @type UUID
         */
        this.uuid = uuid;

        /**
         * @type Date
         */
        this.captured = captured;

        this.name = name;
        this.id = id;
        this.types = types;
        this.level = level;
        this.evolves = evolves;
        this.base = base;
        this.stats = stats;
        this.currentStats = currentStats;
        this.gender = gender;
        this.ability = ability;
        this.nature = nature;
        this.ivs = ivs;
        this.evs = evs;
        this.moves = moves;
        this.learnset = learnset;

    }

}

module.exports = Pokemon;