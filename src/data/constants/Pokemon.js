const { Type, Stat, Rate } = require('./General');
const { Ability } = require('./Ability');
const { Learnset } = require('./Learnset');
const { Pokedex } = require('./Pokedex');

module.exports = {
    1: {
        id: 1,
        name: Pokedex[1].name,
        desc: Pokedex[1].desc,
        types: [
            Type.Grass,
            Type.Poison
        ],
        genderRatio: 88,
        abilities: {
            ability1: Ability.Overgrow,
            abilityRatio: 100,
            abilitySecret: Ability.Chlorophyll
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
        learnset: Learnset.Bulbasaur.LevelUp,
        evYield: {
            stat: Stat.SPATK,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    4: {
        id: 4,
        name: Pokedex[4].name,
        desc: Pokedex[4].desc,
        types: [
            Type.Fire,
        ],
        genderRatio: 88,
        abilities: {
            ability1: Ability.Blaze,
            abilityRatio: 100,
            abilitySecret: Ability.SolarPower
        },
        evolves: 16,
        base: {
            hp: 39,
            atk: 52,
            def: 43,
            spatk: 60,
            spdef: 50,
            spd: 65
        },
        learnset: Learnset.Charmander.LevelUp,
        evYield: {
            stat: Stat.SPATK,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    7: {
        id: 7,
        name: Pokedex[7].name,
        desc: Pokedex[7].desc,
        types: [
            Type.Water,
        ],
        genderRatio: 88,
        abilities: {
            ability1: Ability.Torrent,
            abilityRatio: 100,
            abilitySecret: Ability.RainDish
        },
        evolves: 16,
        base: {
            hp: 44,
            atk: 48,
            def: 65,
            spatk: 50,
            spdef: 64,
            spd: 43
        },
        learnset: Learnset.Squirtle.LevelUp,
        evYield: {
            stat: Stat.DEF,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    10: {
        id: 10,
        name: Pokedex[7].name,
        desc: Pokedex[7].desc,
        types: [
            Type.Bug
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.ShieldDust,
            abilityRatio: 100,
            abilitySecret: Ability.RunAway
        },
        evolves: 7,
        base: {
            hp: 45,
            atk: 30,
            def: 35,
            spatk: 20,
            spdef: 20,
            spd: 45
        },
        learnset: Learnset.Caterpie.LevelUp,
        evYield: {
            stat: Stat.HP,
            amt: 1
        },
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    13: {
        id: 13,
        name: Pokedex[7].name,
        desc: Pokedex[7].desc,
        types: [
            Type.Bug,
            Type.Poison
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.ShieldDust,
            abilityRatio: 100,
            abilitySecret: Ability.RunAway
        },
        evolves: 7,
        base: {
            hp: 40,
            atk: 35,
            def: 30,
            spatk: 20,
            spdef: 20,
            spd: 50
        },
        learnset: Learnset.Weedle.LevelUp,
        evYield: {
            stat: Stat.SPD,
            amt: 1
        },
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    25: {
        id: 25,
        name: Pokedex[7].name,
        desc: Pokedex[7].desc,
        types: [
            Type.Electric,
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.Static,
            abilityRatio: 100,
            abilitySecret: Ability.LightningRod
        },
        // TODO: handle stone evos
        evolves: 16,
        base: {
            hp: 35,
            atk: 55,
            def: 40,
            spatk: 50,
            spdef: 50,
            spd: 90
        },
        learnset: Learnset.Pikachu.LevelUp,
        evYield: {
            stat: Stat.SPD,
            amt: 2
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    }
}