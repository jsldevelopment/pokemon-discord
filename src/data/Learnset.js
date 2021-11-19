const { Move } = require('./Move');
const Learnset = {
    "Bulbasaur": {
        "LevelUp": [{
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            },
            {
                move: Move.VineWhip,
                learned: 3
            },
            {
                move: Move.Growth,
                learned: 6
            },
            {
                move: Move.LeechSeed,
                learned: 9
            },
            {
                move: Move.RazorLeaf,
                learned: 12
            },
            {
                move: Move.PoisonPowder,
                learned: 15
            },
            {
                move: Move.SleepPowder,
                learned: 15
            },
            {
                move: Move.SeedBomb,
                learned: 18
            },
            {
                move: Move.TakeDown,
                learned: 21
            },
            {
                move: Move.SweetScent,
                learned: 24
            },
            {
                move: Move.Synthesis,
                learned: 27
            },
            {
                move: Move.WorrySeed,
                learned: 30
            },
            {
                move: Move.DoubleEdge,
                learned: 33
            },
            {
                move: Move.SolarBeam,
                learned: 36
            }
        ]
    },
    "Ivysaur": {
        "LevelUp": [{
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            },
            {
                move: Move.VineWhip,
                learned: 1
            },
            {
                move: Move.Growth,
                learned: 1
            },
            {
                move: Move.LeechSeed,
                learned: 9
            },
            {
                move: Move.RazorLeaf,
                learned: 12
            },
            {
                move: Move.PoisonPowder,
                learned: 15
            },
            {
                move: Move.SleepPowder,
                learned: 15
            },
            {
                move: Move.SeedBomb,
                learned: 20
            },
            {
                move: Move.TakeDown,
                learned: 25
            },
            {
                move: Move.SweetScent,
                learned: 30
            },
            {
                move: Move.Synthesis,
                learned: 33
            },
            {
                move: Move.WorrySeed,
                learned: 40
            },
            {
                move: Move.DoubleEdge,
                learned: 45
            },
            {
                move: Move.SolarBeam,
                learned: 50
            }
        ]
    },
    "Venusaur": {
        "LevelUp": [{
                move: Move.PetalBlizzard,
                learned: 1
            }, {
                move: Move.PetalDance,
                learned: 1
            }, {
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            },
            {
                move: Move.VineWhip,
                learned: 1
            },
            {
                move: Move.Growth,
                learned: 1
            },
            {
                move: Move.LeechSeed,
                learned: 9
            },
            {
                move: Move.RazorLeaf,
                learned: 12
            },
            {
                move: Move.PoisonPowder,
                learned: 15
            },
            {
                move: Move.SleepPowder,
                learned: 15
            },
            {
                move: Move.SeedBomb,
                learned: 20
            },
            {
                move: Move.TakeDown,
                learned: 25
            },
            {
                move: Move.SweetScent,
                learned: 30
            },
            {
                move: Move.Synthesis,
                learned: 37
            },
            {
                move: Move.WorrySeed,
                learned: 44
            },
            {
                move: Move.DoubleEdge,
                learned: 51
            },
            {
                move: Move.SolarBeam,
                learned: 58
            }
        ]
    },
    "Charmander": {
        "LevelUp": [{
                move: Move.Scratch,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            }, {
                move: Move.Ember,
                learned: 4
            },
            {
                move: Move.Smokescreen,
                learned: 8
            },
            {
                move: Move.DragonBreath,
                learned: 12
            },
            {
                move: Move.FireFang,
                learned: 17
            },
            {
                move: Move.Slash,
                learned: 20
            },
            {
                move: Move.Flamethrower,
                learned: 24
            },
            {
                move: Move.ScaryFace,
                learned: 28
            },
            {
                move: Move.FireSpin,
                learned: 32
            },
            {
                move: Move.Inferno,
                learned: 36
            },
            {
                move: Move.FlareBlitz,
                learned: 40
            }
        ]
    },
    "Charmeleon": {
        "LevelUp": [{
                move: Move.Scratch,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            }, {
                move: Move.Ember,
                learned: 1
            },
            {
                move: Move.Smokescreen,
                learned: 1
            },
            {
                move: Move.DragonBreath,
                learned: 12
            },
            {
                move: Move.FireFang,
                learned: 19
            },
            {
                move: Move.Slash,
                learned: 24
            },
            {
                move: Move.Flamethrower,
                learned: 30
            },
            {
                move: Move.ScaryFace,
                learned: 37
            },
            {
                move: Move.FireSpin,
                learned: 42
            },
            {
                move: Move.Inferno,
                learned: 48
            },
            {
                move: Move.FlareBlitz,
                learned: 54
            }
        ]
    },
    "Charizard": {
        "LevelUp": [{
                move: Move.AirSlash,
                learned: 1
            },
            {
                move: Move.DragonClaw,
                learned: 1
            },
            {
                move: Move.HeatWave,
                learned: 1
            },
            {
                move: Move.Scratch,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            },
            {
                move: Move.Ember,
                learned: 1
            },
            {
                move: Move.Smokescreen,
                learned: 1
            },
            {
                move: Move.DragonBreath,
                learned: 12
            },
            {
                move: Move.FireFang,
                learned: 19
            },
            {
                move: Move.Slash,
                learned: 24
            },
            {
                move: Move.Flamethrower,
                learned: 30
            },
            {
                move: Move.ScaryFace,
                learned: 39
            },
            {
                move: Move.FireSpin,
                learned: 46
            },
            {
                move: Move.Inferno,
                learned: 54
            },
            {
                move: Move.FlareBlitz,
                learned: 62
            }
        ]
    },
    "Squirtle": {
        "LevelUp": [{
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.TailWhip,
                learned: 1
            },
            {
                move: Move.WaterGun,
                learned: 3
            },
            {
                move: Move.Withdraw,
                learned: 6
            },
            {
                move: Move.RapidSpin,
                learned: 9
            },
            {
                move: Move.Bite,
                learned: 12
            },
            {
                move: Move.WaterPulse,
                learned: 15
            },
            {
                move: Move.Protect,
                learned: 18
            },
            {
                move: Move.RainDance,
                learned: 21
            },
            {
                move: Move.AquaTail,
                learned: 24
            },
            {
                move: Move.ShellSmash,
                learned: 27
            },
            {
                move: Move.IronDefense,
                learned: 30
            },
            {
                move: Move.HydroPump,
                learned: 33
            },
            {
                move: Move.SkullBash,
                learned: 36
            }
        ]
    },
    "Wartortle": {
        "LevelUp": [{
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.TailWhip,
                learned: 1
            },
            {
                move: Move.WaterGun,
                learned: 1
            },
            {
                move: Move.Withdraw,
                learned: 1
            },
            {
                move: Move.RapidSpin,
                learned: 9
            },
            {
                move: Move.Bite,
                learned: 12
            },
            {
                move: Move.WaterPulse,
                learned: 15
            },
            {
                move: Move.Protect,
                learned: 20
            },
            {
                move: Move.RainDance,
                learned: 25
            },
            {
                move: Move.AquaTail,
                learned: 30
            },
            {
                move: Move.ShellSmash,
                learned: 35
            },
            {
                move: Move.IronDefense,
                learned: 40
            },
            {
                move: Move.HydroPump,
                learned: 45
            },
            {
                move: Move.SkullBash,
                learned: 50
            }
        ]
    },
    "Blastoise": {
        "LevelUp": [{
                move: Move.FlashCannon,
                learned: 1
            },
            {
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.TailWhip,
                learned: 1
            },
            {
                move: Move.WaterGun,
                learned: 1
            },
            {
                move: Move.Withdraw,
                learned: 1
            },
            {
                move: Move.RapidSpin,
                learned: 9
            },
            {
                move: Move.Bite,
                learned: 12
            },
            {
                move: Move.WaterPulse,
                learned: 15
            },
            {
                move: Move.Protect,
                learned: 20
            },
            {
                move: Move.RainDance,
                learned: 25
            },
            {
                move: Move.AquaTail,
                learned: 30
            },
            {
                move: Move.ShellSmash,
                learned: 35
            },
            {
                move: Move.IronDefense,
                learned: 42
            },
            {
                move: Move.HydroPump,
                learned: 49
            },
            {
                move: Move.SkullBash,
                learned: 56
            }
        ]
    },
    "Caterpie": {
        "LevelUp": [{
                move: Move.Tackle,
                learned: 1
            },
            {
                move: Move.StringShot,
                learned: 1
            },
            {
                move: Move.BugBite,
                learned: 9
            }
        ]
    },
    "Metapod": {
        "LevelUp": [{
            move: Move.Tackle,
            learned: 1
        }, {
            move: Move.Harden,
            learned: 1
        }]
    },
    "Butterfree": {
        "LevelUp": [{
            move: Move.Gust,
            learned: 1
        }, {
            move: Move.Harden,
            learned: 1
        }, {
            move: Move.Tackle,
            learned: 1
        }, {
            move: Move.StringShot,
            learned: 1
        }, {
            move: Move.BugBite,
            learned: 1
        }, {
            move: Move.Supersonic,
            learned: 1
        }, {
            move: Move.Confusion,
            learned: 4
        }, {
            move: Move.PoisonPowder,
            learned: 8
        }, {
            move: Move.StunSpore,
            learned: 12
        }, {
            move: Move.SleepPowder,
            learned: 12
        }, {
            move: Move.Psybeam,
            learned: 16
        }, {
            move: Move.Whirlwind,
            learned: 20
        }, {
            move: Move.AirSlash,
            learned: 24
        }, {
            move: Move.Safeguard,
            learned: 28
        }, {
            move: Move.BugBuzz,
            learned: 32
        }, {
            move: Move.Tailwind,
            learned: 36
        }, {
            move: Move.RagePowder,
            learned: 40
        }, {
            move: Move.QuiverDance,
            learned: 4
        }]
    },
    "Pikachu": {
        "LevelUp": [{
                move: Move.PlayNice,
                learned: 1
            },
            {
                move: Move.SweetKiss,
                learned: 1
            },
            {
                move: Move.Nuzzle,
                learned: 1
            },
            {
                move: Move.NastyPlot,
                learned: 1
            },
            {
                move: Move.Charm,
                learned: 1
            },
            {
                move: Move.ThunderShock,
                learned: 1
            },
            {
                move: Move.TailWhip,
                learned: 1
            },
            {
                move: Move.Growl,
                learned: 1
            },
            {
                move: Move.QuickAttack,
                learned: 1
            },
            {
                move: Move.ThunderWave,
                learned: 4
            },
            {
                move: Move.DoubleTeam,
                learned: 8
            },
            {
                move: Move.ElectroBall,
                learned: 12
            },
            {
                move: Move.Feint,
                learned: 16
            },
            {
                move: Move.Spark,
                learned: 20
            },
            {
                move: Move.Agility,
                learned: 24
            },
            {
                move: Move.Slam,
                learned: 28
            },
            {
                move: Move.Discharge,
                learned: 32
            },
            {
                move: Move.Thunderbolt,
                learned: 36
            },
            {
                move: Move.LightScreen,
                learned: 40
            },
            {
                move: Move.Thunder,
                learned: 44
            }
        ]
    },
    "Starly": {
        "LevelUp": [{
            move: Move.Tackle,
            learned: 1
        }, {
            move: Move.Growl,
            learned: 1
        }, {
            move: Move.QuickAttack,
            learned: 5
        }, {
            move: Move.WingAttack,
            learned: 9
        }, {
            move: Move.DoubleTeam,
            learned: 13
        }, {
            move: Move.Endeavor,
            learned: 17
        }, {
            move: Move.Whirlwind,
            learned: 21
        }, {
            move: Move.AerialAce,
            learned: 25
        }, {
            move: Move.TakeDown,
            learned: 29
        }, {
            move: Move.Agility,
            learned: 33
        }, {
            move: Move.BraveBird,
            learned: 37
        }, {
            move: Move.FinalGambit,
            learned: 41
        }]
    },
    "Staravia": {
        "LevelUp": [{
            move: Move.Tackle,
            learned: 1
        }, {
            move: Move.Growl,
            learned: 1
        }, {
            move: Move.QuickAttack,
            learned: 1
        }, {
            move: Move.WingAttack,
            learned: 9
        }, {
            move: Move.DoubleTeam,
            learned: 13
        }, {
            move: Move.Endeavor,
            learned: 18
        }, {
            move: Move.Whirlwind,
            learned: 23
        }, {
            move: Move.AerialAce,
            learned: 28
        }, {
            move: Move.TakeDown,
            learned: 33
        }, {
            move: Move.Agility,
            learned: 38
        }, {
            move: Move.BraveBird,
            learned: 43
        }, {
            move: Move.FinalGambit,
            learned: 48
        }]
    },
    "Staraptor": {
        "LevelUp": [{
            move: Move.Tackle,
            learned: 1
        }, {
            move: Move.Growl,
            learned: 1
        }, {
            move: Move.QuickAttack,
            learned: 5
        }, {
            move: Move.WingAttack,
            learned: 9
        }, {
            move: Move.DoubleTeam,
            learned: 13
        }, {
            move: Move.Endeavor,
            learned: 18
        }, {
            move: Move.Whirlwind,
            learned: 23
        }, {
            move: Move.AerialAce,
            learned: 28
        }, {
            move: Move.TakeDown,
            learned: 33
        }, {
            move: Move.Agility,
            learned: 41
        }, {
            move: Move.BraveBird,
            learned: 49
        }, {
            move: Move.FinalGambit,
            learned: 57
        }]
    },
}

module.exports = Learnset;