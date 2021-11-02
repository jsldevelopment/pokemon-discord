const { Types, Stats, expRates } = require('../constants/general');
const { Moves } = require('../constants/moves');
const { Abilities } = require('../constants/abilities');

module.exports = {
    1: {
        id: 1,
        name: "Bulbasaur",
        types: [Types.grass, Types.poison],
        genderRatio: 88,
        abilities: {
            ability1: {
                name: Abilities.Overgrow
            },
            abilityRatio: 100,
            abilitySecret: Abilities.Chlorophyll
        },
        evolves: 16,
        base: {
            hp: 45,
            atk: 49,
            def: 49,
            spatk: 65,
            spdef: 65,
            spd: 45
        },
        moves: {
            1: null,
            2: null,
            3: null,
            4: null
        },
        learnset: {
            1: Moves.Tackle,
            2: Moves.Growl,
        },
        evYield: {
            stat: Stats.hp,
            amt: 1
        },
        expRate: expRates.mediumFast,
        catchRate: 255
    },
    // 4: {
    //     id: 4,
    //     name: "Charmander",
    //     types: [Types.fire],
    //     genderRatio: 88,
    //     abilities: {
    //         ability1: {
    //             name: "Blaze"
    //         },
    //         abilityRatio: 100,
    //         abilitySecret: "Solar Power"
    //     },
    //     evolves: 16,
    //     base: {
    //         hp: 45,
    //         atk: 49,
    //         def: 49,
    //         spatk: 65,
    //         spdef: 65,
    //         spd: 45
    //     },
    //     moves: {
    //         1: "Tackle",
    //         2: "Growl",
    //         3: null,
    //         4: null
    //     },
    //     learnset: {},
    //     evYield: {
    //         stat: "hp",
    //         amt: 1
    //     },
    //     expRate: "mediumFast",
    //     catchRate: 255
    // },
    // 7: {
    //     id: 7,
    //     name: "Squirtle",
    //     types: [Types.water],
    //     genderRatio: 88,
    //     abilities: {
    //         ability1: {
    //             name: "Torrent"
    //         },
    //         abilityRatio: 100,
    //         abilitySecret: "Rain Dish"
    //     },
    //     evolves: 16,
    //     base: {
    //         hp: 45,
    //         atk: 49,
    //         def: 49,
    //         spatk: 65,
    //         spdef: 65,
    //         spd: 45
    //     },
    //     moves: {
    //         1: "Tackle",
    //         2: "Growl",
    //         3: null,
    //         4: null
    //     },
    //     learnset: {},
    //     evYield: {
    //         stat: "hp",
    //         amt: 1
    //     },
    //     expRate: "mediumFast",
    //     catchRate: 255
    // },
    // 10: {
    //     id: 10,
    //     name: "Caterpie",
    //     types: [Types.bug],
    //     genderRatio: 30,
    //     abilities: {
    //         ability1: {
    //             name: "shield dust"
    //         },
    //         abilityRatio: 100,
    //         abilitySecret: "run away"
    //     },
    //     evolves: 7,
    //     base: {
    //         hp: 45,
    //         atk: 30,
    //         def: 35,
    //         spatk: 20,
    //         spdef: 20,
    //         spd: 45
    //     },
    //     moves: {
    //         1: "Tackle",
    //         2: "Growl",
    //         3: null,
    //         4: null
    //     },
    //     learnset: {},
    //     evYield: {
    //         stat: "hp",
    //         amt: 1
    //     },
    //     expRate: "mediumFast",
    //     catchRate: 255
    // }
}