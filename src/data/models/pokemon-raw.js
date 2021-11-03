const { Type, Stat, Rate } = require('../constants/general');
const { Move } = require('../constants/moves');
const { Ability } = require('../constants/abilities');

module.exports = {
    1: {
        id: 1,
        name: "Bulbasaur",
        desc: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
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
        learnset: {
            1: Move.Tackle,
            2: Move.Growl,
            3: Move.VineWhip,
            6: Move.Growth,
            9: Move.LeechSeed,
            12: Move.RazorLeaf,
            15: Move.PoisonPowder,
            18: Move.SleepPowder,
            21: Move.TakeDown,
            24: Move.SweetScent,
            27: Move.Synthesis,
            30: Move.WorrySeed,
            33: Move.DoubleEdge,
            36: Move.SolarBeam
        },
        evYield: {
            stat: Stat.SPATK,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    4: {
        id: 4,
        name: "Charmander",
        desc: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
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
        learnset: {
            1: Move.Scratch,
            2: Move.Growl,
            4: Move.Ember,
            8: Move.Smokescreen,
            12: Move.DragonBreath,
            17: Move.FireFang,
            20: Move.Slash,
            24: Move.Flamethrower,
            28: Move.ScaryFace,
            32: Move.FireSpin,
            36: Move.Inferno,
            40: Move.FlareBlitz
        },
        evYield: {
            stat: Stat.SPATK,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    7: {
        id: 7,
        name: "Squirtle",
        desc: "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth.",
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
        learnset: {
            1: Move.Tackle,
            2: Move.TailWhip,
            3: Move.WaterGun,
            6: Move.Withdraw,
            9: Move.RapidSpin,
            12: Move.Bite,
            15: Move.WaterPulse,
            18: Move.Protect,
            21: Move.RainDance,
            24: Move.AquaTail,
            27: Move.ShellSmash,
            30: Move.IronDefense,
            33: Move.HydroPump,
            36: Move.SkullBash
        },
        evYield: {
            stat: Stat.DEF,
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    10: {
        id: 10,
        name: "Caterpie",
        desc: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
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
        learnset: {
            1: Move.Tackle,
            2: Move.StringShot,
            9: Move.BugBite
        },
        evYield: {
            stat: Stat.HP,
            amt: 1
        },
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    13: {
        id: 13,
        name: "Weedle",
        desc: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
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
        learnset: {
            1: Move.PoisonSting,
            2: Move.StringShot,
            9: Move.BugBite
        },
        evYield: {
            stat: Stat.SPD,
            amt: 1
        },
        expRate: Rate.MediumFast,
        catchRate: 255
    }
}