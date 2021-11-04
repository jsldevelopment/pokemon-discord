const { Type, Stat, Rate } = require('./General');
const { Ability } = require('./Ability');
const { Learnset } = require('./Learnset');
const { Pokedex } = require('./Pokedex');

module.exports = {
    // bulbasaur
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
        evolution: {
            evolves: true,
            method: {
                level: 16,
                next: 2
            }
        },
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
            evYield: [{ stat: Stat.SPATK, amt: 1 }],
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // ivysaur
    2: {
        id: 2,
        name: Pokedex[2].name,
        desc: Pokedex[2].desc,
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
        evolution: {
            evolves: true,
            method: {
                level: 32,
                next: 3
            }
        },
        base: {
            hp: 60,
            atk: 62,
            def: 63,
            spatk: 80,
            spdef: 80,
            spd: 60
        },
        learnset: Learnset.Ivysaur.LevelUp,
        evYield: {
            evYield: [{ stat: Stat.SPATK, amt: 1 }, { stat: Stat.SPDEF, amt: 1 }],
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // venusaur
    3: {
        id: 3,
        name: Pokedex[3].name,
        desc: Pokedex[3].desc,
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
        evolution: {
            evolves: false
        },
        base: {
            hp: 80,
            atk: 82,
            def: 83,
            spatk: 100,
            spdef: 100,
            spd: 80
        },
        learnset: Learnset.Venusaur.LevelUp,
        evYield: [{ stat: Stat.SPATK, amt: 2 }, { stat: Stat.SPDEF, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // charmander
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
        evolution: {
            evolves: true,
            method: {
                level: 16,
                next: 5
            }
        },
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
            evYield: [{ stat: Stat.SPATK, amt: 1 }],
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // charmeleon
    5: {
        id: 4,
        name: Pokedex[5].name,
        desc: Pokedex[5].desc,
        types: [
            Type.Fire,
        ],
        genderRatio: 88,
        abilities: {
            ability1: Ability.Blaze,
            abilityRatio: 100,
            abilitySecret: Ability.SolarPower
        },
        evolution: {
            evolves: true,
            method: {
                level: 32,
                next: 6
            }
        },
        base: {
            hp: 58,
            atk: 64,
            def: 58,
            spatk: 80,
            spdef: 65,
            spd: 80
        },
        learnset: Learnset.Charmeleon.LevelUp,
        evYield: {
            evYield: [{ stat: Stat.SPATK, amt: 1 }],
            amt: 1
        },
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // charizard
    6: {
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
        evolution: {
            evolves: true,
            method: {
                level: 16,
                next: 5
            }
        },
        base: {
            hp: 39,
            atk: 52,
            def: 43,
            spatk: 60,
            spdef: 50,
            spd: 65
        },
        learnset: Learnset.Charizard.LevelUp,
        evYield: [{ stat: Stat.SPATK, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // squirtle
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
        evYield: [{ stat: Stat.DEF, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // wartortle
    8: {
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
        learnset: Learnset.Wartortle.LevelUp,
        evYield: [{ stat: Stat.DEF, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // blastoise
    9: {
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
        learnset: Learnset.Blastoise.LevelUp,
        evYield: [{ stat: Stat.DEF, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    //caterpie
    10: {
        id: 10,
        name: Pokedex[10].name,
        desc: Pokedex[10].desc,
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
        evYield: [{
            stat: Stat.HP,
            amt: 1
        }],
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    //metapod
    11: {
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
        learnset: Learnset.Metapod.LevelUp,
        evYield: [{ stat: Stat.HP, amt: 1 }],
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    //butterfree
    12: {
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
        learnset: Learnset.Butterfree.LevelUp,
        evYield: [{
            stat: Stat.HP,
            amt: 1
        }],
        expRate: Rate.MediumFast,
        catchRate: 255
    },
    // pikachu
    25: {
        id: 25,
        name: Pokedex[25].name,
        desc: Pokedex[25].desc,
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
        evYield: [{ stat: Stat.SPD, amt: 2 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    },
    // starly
    396: {
        id: 396,
        name: Pokedex[396].name,
        desc: Pokedex[396].desc,
        types: [
            Type.Normal,
            Type.Flying
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.KeenEye,
            abilityRatio: 100,
            abilitySecret: Ability.Reckless
        },
        evolution: {
            evolves: true,
            method: {
                level: 14,
                next: 397
            }
        },
        base: {
            hp: 40,
            atk: 55,
            def: 30,
            spatk: 30,
            spdef: 30,
            spd: 60
        },
        learnset: Learnset.Starly.LevelUp,
        evYield: [{ stat: Stat.SPD, amt: 1 }],
        expRate: Rate.MediumSlow,
        catchRate: 255
    },
    // staravia
    397: {
        id: 397,
        name: Pokedex[397].name,
        desc: Pokedex[397].desc,
        types: [
            Type.Normal,
            Type.Flying
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.Intimidate,
            abilityRatio: 100,
            abilitySecret: Ability.Reckless
        },
        evolution: {
            evolves: true,
            method: {
                level: 34,
                next: 398
            }
        },
        base: {
            hp: 55,
            atk: 75,
            def: 50,
            spatk: 40,
            spdef: 40,
            spd: 80
        },
        learnset: Learnset.Staravia.LevelUp,
        evYield: [{ stat: Stat.SPD, amt: 2 }],
        expRate: Rate.MediumSlow,
        catchRate: 120
    },
    // staraptor
    398: {
        id: 398,
        name: Pokedex[398].name,
        desc: Pokedex[398].desc,
        types: [
            Type.Normal,
            Type.Flying
        ],
        genderRatio: 50,
        abilities: {
            ability1: Ability.Intimidate,
            abilityRatio: 100,
            abilitySecret: Ability.Reckless
        },
        evolution: {
            evolves: false
        },
        base: {
            hp: 85,
            atk: 120,
            def: 70,
            spatk: 50,
            spdef: 60,
            spd: 100
        },
        learnset: Learnset.Staraptor.LevelUp,
        evYield: [{ stat: Stat.ATK, amt: 3 }],
        expRate: Rate.MediumSlow,
        catchRate: 45
    }
}