const uuid = require('uuid').v4;
const rawPokemon = require('../data/models/pokemon-raw.js');
const Pokemon = require('../objects/Pokemon');
const calcStats = require('../util/calculateStat');

module.exports = async function(id, level) {

    let raw = rawPokemon[id];

    const netStats = await calcStats(raw.base);

    const pokemon = new Pokemon(
        uuid(),
        Date.now(),
        id,
        raw.types,
        level,
        raw.evolves,
        raw.base,
        Math.floor(Math.random() * 101) < raw.genderRatio ? 1 : 0,
        Math.floor(Math.random() * 101) < raw.abilities.abilityRatio ? raw.abilities.ability1 : raw.abilities.ability2,
        natures[Math.floor(Math.random() * natures.length)],
        getIvs(),
        getEvs(),
        raw.moves,
        raw.learned,
        netStats
    );
    
    return pokemon;

}

const natures = [
    "lonely"
];

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