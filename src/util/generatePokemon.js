// ext libs
const uuid = require('uuid').v4;
// constants
const rawPokemon = require('../data/constants/Pokemon.js');
const Nature = require('../data/constants/Nature');
// objs
const Pokemon = require('../objects/Pokemon');
// util fxn
const calcStats = require('../util/calculateStat');

module.exports = async function(id, level) {

    let raw = rawPokemon[id];

    const natures = Object.keys(Nature);
    const nature = natures[Math.floor(Math.random() * natures.length)];

    const ivs = getIvs();
    const evs = getEvs();
    // const netStats = await calcStats(level, raw.base, nature, ivs, evs);

    const pokemon = new Pokemon(
        uuid(),
        Date.now(),
        raw.name,
        id,
        raw.types,
        level,
        raw.evolves,
        raw.base,
        await calcStats(level, raw.base, nature, ivs, evs),
        await calcStats(level, raw.base, nature, ivs, evs),
        Math.floor(Math.random() * 101) < raw.genderRatio ? 1 : 0,
        getAbility(raw),
        nature,
        ivs,
        evs,
        getMoves(raw.learnset, level),
        raw.learnset
    );

    return pokemon;

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
    const ab = Math.floor(Math.random() * 101) < raw.abilities.abilityRatio ? raw.abilities.ability1 : raw.abilities.ability2;
    return ab;
}