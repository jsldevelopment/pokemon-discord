const uuid = require('uuid').v4;
const rawPokemon = require('../data/models/pokemon-raw.js');
const Pokemon = require('../objects/Pokemon');
const calcStats = require('../util/calculateStat');
const { Natures } = require('../data/constants/general');

module.exports = async function(id, level) {

    let raw = rawPokemon[id];

    const natures = Object.keys(Natures);
    const nature = natures[Math.floor(Math.random() * natures.length)];
    
    const ivs = getIvs();
    const evs = getEvs();
    const netStats = await calcStats(level, raw.base, nature, ivs, evs);

    const pokemon = new Pokemon(
        uuid(),
        Date.now(),
        raw.name,
        id,
        raw.types,
        level,
        raw.evolves,
        raw.base,
        Math.floor(Math.random() * 101) < raw.genderRatio ? 1 : 0,
        Math.floor(Math.random() * 101) < raw.abilities.abilityRatio ? raw.abilities.ability1 : raw.abilities.ability2,
        nature,
        ivs,
        evs,
        raw.moves,
        raw.learned,
        netStats
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