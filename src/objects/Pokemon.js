const { uuid } = require('uuidv4');
const Nature = require('../data/enum/Nature');
const calcStats = require('../util/calculateStat');
class Pokemon {

    constructor(pokemon, level) {

        /**
         * @type UUID
         */
        this.uuid = uuid();

        // these are derived from raw pokemon
        this.id = pokemon.id;
        this.name = pokemon.dex.name;
        this.desc = pokemon.dex.desc;
        this.types = pokemon.types;
        this.evolution = pokemon.evolution;
        this.stats = {
            base: {},
            net: {},
            current: {}
        }
        this.nature = getNature();
        this.ivs = getIvs();
        this.evs = getEvs();
        this.stats.base = pokemon.stats.base;
        this.stats.net = calcStats(level, pokemon.stats.base, this.nature, this.ivs, this.evs);
        this.stats.current = Object.assign({}, this.stats.net);
        this.gender = Math.floor(Math.random() * 101) < pokemon.genderRatio ? 1 : 0;
        this.ability = getAbility(pokemon);
        this.moves = getMoves(pokemon.learnset, level);
        this.learnset = pokemon.learnset;
        this.catchRate = pokemon.catchRate;

        /**
         * @type integer
         */
        this.level = level;

        /**
         * @type Date
         */
        this.captured = Date.now();
    }

}


const getIvs = () => {
    return {
        "hp": Math.floor(Math.random() * 32),
        "atk": Math.floor(Math.random() * 32),
        "def": Math.floor(Math.random() * 32),
        "spatk": Math.floor(Math.random() * 32),
        "spdef": Math.floor(Math.random() * 32),
        "spd": Math.floor(Math.random() * 32)
    }
}

const getEvs = () => {
    return {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "spatk": 0,
        "spdef": 0,
        "spd": 0
    }
}

const getMoves = (learnset, level) => {

    let generated = false;
    let movesArr = [];

    // TODO: if a pokemon has less than 4 moves, don't randomize the output

    while (!generated) {

        // filter out moves this pokemon cannot learn
        let available = learnset.filter(a => a.learned <= level);

        // if less than 4 available moves, grab them all
        let x = available.length < 4 ? available.length : 4;

        // grab all moves available, or if more than 4, a random lot
        for (let i = 0; i < x; i++) {
            let moveNum = (Math.floor(Math.random() * available.length));
            movesArr.push(available[moveNum].move);
            available.splice(moveNum, 1);
        }

        // check to ensure at least 1 damaging move is available
        for (let i = 0; i < movesArr.length; i++) {
            if (movesArr[i].dmg != 0) {
                generated = true;
                break;
            }
        }

    }

    return movesArr;
}

const getAbility = (raw) => {
    const ab = Math.floor(Math.random() * 101) < raw.abilities.abilityRatio ? raw.abilities.regular[0] : raw.abilities.regular[1];
    return ab;
}

const getNature = () => {
    const natures = Object.keys(Nature);
    return natures[Math.floor(Math.random() * natures.length)];
}

module.exports = Pokemon;