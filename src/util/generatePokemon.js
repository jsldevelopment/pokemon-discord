const uuid = require('uuid').v4;
const rawPokemon = require('../data/models/pokemon-raw.js');
const Pokemon = require('../objects/Pokemon');
const calcStats = require('../util/calculateStat');
const { Nature } = require('../data/constants/general');

module.exports = async function(id, level) {

    let raw = rawPokemon[id];

    const natures = Object.keys(Nature);
    const nature = natures[Math.floor(Math.random() * natures.length)];
    
    const ivs = getIvs();
    const evs = getEvs();
    const netStats = await calcStats(level, raw.base, nature, ivs, evs);
    console.log(netStats);

    const pokemon = new Pokemon(
        uuid(),
        Date.now(),
        raw.name,
        id,
        raw.types,
        level,
        raw.evolves,
        raw.base,
        netStats,
        Math.floor(Math.random() * 101) < raw.genderRatio ? 1 : 0,
        getAbility(raw),
        nature,
        ivs,
        evs,
        getMoves(raw),
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
// write logic to determine starting moves
// iterate over the keys for each move in the learnset
// if 4 or less available moves given the pokemons level, take all available
// if more than 4, roll for 4 random moves within the available learnset
// roll until at least 1 damaging move has been added
const getMoves = () => {
    return {
        move1: "none",
        move2: "none",
        move3: "none",
        move4: "none"
    }
}

const getAbility = (raw) => {
    const ab = Math.floor(Math.random() * 101) < raw.abilities.abilityRatio ? raw.abilities.ability1 : raw.abilities.ability2;
    console.log(ab);
    return ab;
}