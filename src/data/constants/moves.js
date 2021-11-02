const { Categories, Types } = require('./general');

 exports.Moves = {
    "10,000,000 Volt Thunderbolt": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 195,
        "pp": 1,
        "type": Types.electric
    },
    "Absorb": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
        "dmg": 20,
        "pp": 25,
        "type": Types.grass
    },
    "Accelerock": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user smashes into the target at high speed. This move always goes first.",
        "dmg": 40,
        "pp": 20,
        "type": Types.rock
    },
    "Acid": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats.",
        "dmg": 40,
        "pp": 30,
        "type": Types.Poison
    },
    "Acid Armor": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Acid Downpour": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.Poison
    },
    "Acid Spray": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user spits fluid that works to melt the target. This harshly lowers the target's Sp. Def stat.",
        "dmg": 40,
        "pp": 20,
        "type": Types.Poison
    },
    "Acrobatics": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.",
        "dmg": 55,
        "pp": 15,
        "type": Types.flying
    },
    "Acupressure": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user applies pressure to stress points, sharply boosting one of its or its allies' stats.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Aerial Ace": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "The user confounds the target with speed, then slashes. This attack never misses.",
        "dmg": 60,
        "pp": 20,
        "type": Types.flying
    },
    "Aeroblast": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.",
        "dmg": 100,
        "pp": 5,
        "type": Types.flying
    },
    "After You": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user helps the target and makes it use its move right after the user.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Agility": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user relaxes and lightens its body to move faster. This sharply raises the Speed stat.",
        "dmg": 0,
        "pp": 30,
        "type": Types.psychic
    },
    "Air Cutter": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user launches razor-like wind to slash opposing Pokémon. Critical hits land more easily.",
        "dmg": 60,
        "pp": 25,
        "type": Types.flying
    },
    "Air Slash": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks with a blade of air that slices even the sky. This may also make the target flinch.",
        "dmg": 75,
        "pp": 15,
        "type": Types.flying
    },
    "All-Out Pummeling": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.fighting
    },
    "Ally Switch": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user teleports using a strange power and switches places with one of its allies.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Amnesia": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user temporarily empties its mind to forget its concerns. This sharply raises the user's Sp. Def stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Anchor Shot": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
        "dmg": 80,
        "pp": 20,
        "type": Types.steel
    },
    "Ancient Power": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with a prehistoric power. This may also raise all the user's stats at once.",
        "dmg": 60,
        "pp": 5,
        "type": Types.rock
    },
    "Apple Acid": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with an acidic liquid created from tart apples. This also lowers the target's Sp. Def stat.",
        "dmg": 80,
        "pp": 10,
        "type": Types.grass
    },
    "Aqua Jet": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
        "dmg": 40,
        "pp": 20,
        "type": Types.water
    },
    "Aqua Ring": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user envelops itself in a veil made of water. It regains some HP every turn.",
        "dmg": 0,
        "pp": 20,
        "type": Types.water
    },
    "Aqua Tail": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
        "dmg": 90,
        "pp": 10,
        "type": Types.water
    },
    "Arm Thrust": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user lets loose a flurry of open-palmed arm thrusts that hit two to five times in a row.",
        "dmg": 15,
        "pp": 20,
        "type": Types.fighting
    },
    "Aromatherapy": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user releases a soothing scent that heals all status conditions affecting the user's party.",
        "dmg": 0,
        "pp": 5,
        "type": Types.grass
    },
    "Aromatic Mist": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user raises the Sp. Def stat of an ally Pokémon by using a mysterious aroma.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fairy
    },
    "Assist": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Assurance": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "If the target has already taken some damage in the same turn, this attack's power is doubled.",
        "dmg": 60,
        "pp": 10,
        "type": Types.dark
    },
    "Astonish": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks the target while shouting in a startling fashion. This may also make the target flinch.",
        "dmg": 30,
        "pp": 15,
        "type": Types.ghost
    },
    "Astral Barrage": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks by sending a frightful amount of small ghosts at opposing Pokémon.",
        "dmg": 120,
        "pp": 5,
        "type": Types.ghost
    },
    "Attack Order": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user calls out its underlings to pummel the target. Critical hits land more easily.",
        "dmg": 90,
        "pp": 15,
        "type": Types.bug
    },
    "Attract": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Aura Sphere": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "The user lets loose a blast of aura power from deep within its body at the target. This attack never misses.",
        "dmg": 80,
        "pp": 20,
        "type": Types.fighting
    },
    "Aura Wheel": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Morpeko attacks and raises its Speed with the energy stored in its cheeks. This move's type changes depending on the user's form.",
        "dmg": 110,
        "pp": 10,
        "type": Types.electric
    },
    "Aurora Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.",
        "dmg": 65,
        "pp": 20,
        "type": Types.ice
    },
    "Aurora Veil": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move reduces damage from physical and special moves for five turns. This can be used only in a hailstorm.",
        "dmg": 0,
        "pp": 20,
        "type": Types.ice
    },
    "Autotomize": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.steel
    },
    "Avalanche": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The power of this attack move is doubled if the user has been hurt by the target in the same turn.",
        "dmg": 60,
        "pp": 10,
        "type": Types.ice
    },
    "Baby-Doll Eyes": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user stares at the target with its baby-doll eyes, which lowers the target's Attack stat. This move always goes first.",
        "dmg": 0,
        "pp": 30,
        "type": Types.fairy
    },
    "Baddy Bad": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 80,
        "pp": 15,
        "type": Types.dark
    },
    "Baneful Bunker": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",
        "dmg": 0,
        "pp": 10,
        "type": Types.Poison
    },
    "Barrage": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 15,
        "pp": 20,
        "type": Types.normal
    },
    "Barrier": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Baton Pass": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user switches places with a party Pokémon in waiting and passes along any stat changes.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Beak Blast": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn.",
        "dmg": 100,
        "pp": 15,
        "type": Types.flying
    },
    "Beat Up": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Behemoth Bash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user becomes a gigantic shield and slams into the target. This move deals twice the damage if the target is Dynamaxed.",
        "dmg": 100,
        "pp": 5,
        "type": Types.steel
    },
    "Behemoth Blade": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user becomes a gigantic sword and cuts the target. This move deals twice the damage if the target is Dynamaxed.",
        "dmg": 100,
        "pp": 5,
        "type": Types.steel
    },
    "Belch": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move.",
        "dmg": 120,
        "pp": 10,
        "type": Types.Poison
    },
    "Belly Drum": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user maximizes its Attack stat in exchange for HP equal to half its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Bestow": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Bide": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Bind": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
        "dmg": 15,
        "pp": 20,
        "type": Types.normal
    },
    "Bite": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is bitten with viciously sharp fangs. This may also make the target flinch.",
        "dmg": 60,
        "pp": 25,
        "type": Types.dark
    },
    "Black Hole Eclipse": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.dark
    },
    "Blast Burn": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The target is razed by a fiery explosion. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.fire
    },
    "Blaze Kick": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn.",
        "dmg": 85,
        "pp": 10,
        "type": Types.fire
    },
    "Blizzard": {
        "acc": 70,
        "cat": Categories.special,
        "desc": "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
        "dmg": 110,
        "pp": 5,
        "type": Types.ice
    },
    "Block": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user blocks the target's way with arms spread wide to prevent escape.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Bloom Doom": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.grass
    },
    "Blue Flare": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn.",
        "dmg": 130,
        "pp": 5,
        "type": Types.fire
    },
    "Body Press": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by slamming its body into the target. The higher the user's Defense, the more damage it can inflict on the target.",
        "dmg": 80,
        "pp": 10,
        "type": Types.fighting
    },
    "Body Slam": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user drops onto the target with its full body weight. This may also leave the target with paralysis.",
        "dmg": 85,
        "pp": 15,
        "type": Types.normal
    },
    "Bolt Beak": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user stabs the target with its electrified beak. If the user attacks before the target, the power of this move is doubled.",
        "dmg": 85,
        "pp": 10,
        "type": Types.electric
    },
    "Bolt Strike": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user surrounds itself with a great amount of electricity and charges its target. This may also leave the target with paralysis.",
        "dmg": 130,
        "pp": 5,
        "type": Types.electric
    },
    "Bone Club": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 65,
        "pp": 20,
        "type": Types.ground
    },
    "Bone Rush": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user strikes the target with a hard bone two to five times in a row.",
        "dmg": 25,
        "pp": 10,
        "type": Types.ground
    },
    "Bonemerang": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user throws the bone it holds. The bone loops around to hit the target twiceâ€”coming and going.",
        "dmg": 50,
        "pp": 10,
        "type": Types.ground
    },
    "Boomburst": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks everything around it with the destructive power of a terrible, explosive sound.",
        "dmg": 140,
        "pp": 10,
        "type": Types.normal
    },
    "Bounce": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user bounces up high, then drops on the target on the second turn. This may also leave the target with paralysis.",
        "dmg": 85,
        "pp": 5,
        "type": Types.flying
    },
    "Bouncy Bubble": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 20,
        "type": Types.water
    },
    "Branch Poke": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks the target by poking it with a sharply pointed branch.",
        "dmg": 40,
        "pp": 40,
        "type": Types.grass
    },
    "Brave Bird": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot.",
        "dmg": 120,
        "pp": 15,
        "type": Types.flying
    },
    "Breaking Swipe": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user swings its tough tail wildly and attacks opposing Pokémon. This also lowers their Attack stats.",
        "dmg": 60,
        "pp": 15,
        "type": Types.dragon
    },
    "Breakneck Blitz": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.normal
    },
    "Brick Break": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks with a swift chop. It can also break barriers, such as Light Screen and Reflect.",
        "dmg": 75,
        "pp": 15,
        "type": Types.fighting
    },
    "Brine": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "If the target's HP is half or less, this attack will hit with double the power.",
        "dmg": 65,
        "pp": 10,
        "type": Types.water
    },
    "Brutal Swing": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user swings its body around violently to inflict damage on everything in its vicinity.",
        "dmg": 60,
        "pp": 20,
        "type": Types.dark
    },
    "Bubble": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 40,
        "pp": 30,
        "type": Types.water
    },
    "Bubble Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat.",
        "dmg": 65,
        "pp": 20,
        "type": Types.water
    },
    "Bug Bite": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
        "dmg": 60,
        "pp": 20,
        "type": Types.bug
    },
    "Bug Buzz": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.bug
    },
    "Bulk Up": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user tenses its muscles to bulk up its body, raising both its Attack and Defense stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fighting
    },
    "Bulldoze": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit.",
        "dmg": 60,
        "pp": 20,
        "type": Types.ground
    },
    "Bullet Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user strikes the target with tough punches as fast as bullets. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.steel
    },
    "Bullet Seed": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user forcefully shoots seeds at the target two to five times in a row.",
        "dmg": 25,
        "pp": 30,
        "type": Types.grass
    },
    "Burn Up": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
        "dmg": 130,
        "pp": 5,
        "type": Types.fire
    },
    "Burning Jealousy": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with energy from jealousy. This leaves all opposing Pokémon that have had their stats boosted during the turn with a burn.",
        "dmg": 70,
        "pp": 5,
        "type": Types.fire
    },
    "Buzzy Buzz": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 20,
        "type": Types.electric
    },
    "Calm Mind": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Camouflage": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Captivate": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Catastropika": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 210,
        "pp": 1,
        "type": Types.electric
    },
    "Celebrate": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The Pokémon congratulates you on your special day!",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Charge": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user boosts the power of the Electric move it uses on the next turn. This also raises the user's Sp. Def stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.electric
    },
    "Charge Beam": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user attacks the target with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat.",
        "dmg": 50,
        "pp": 10,
        "type": Types.electric
    },
    "Charm": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fairy
    },
    "Chatter": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with sound waves of deafening chatter. This confuses the target.",
        "dmg": 65,
        "pp": 20,
        "type": Types.flying
    },
    "Chip Away": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 20,
        "type": Types.normal
    },
    "Circle Throw": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
        "dmg": 60,
        "pp": 10,
        "type": Types.fighting
    },
    "Clamp": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 35,
        "pp": 15,
        "type": Types.water
    },
    "Clanging Scales": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat goes down after the attack.",
        "dmg": 110,
        "pp": 5,
        "type": Types.dragon
    },
    "Clangorous Soul": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user raises all its stats by using some of its HP.",
        "dmg": 0,
        "pp": 5,
        "type": Types.dragon
    },
    "Clangorous Soulblaze": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 185,
        "pp": 1,
        "type": Types.dragon
    },
    "Clear Smog": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "The user attacks the target by throwing a clump of special mud. All stat changes are returned to normal.",
        "dmg": 50,
        "pp": 15,
        "type": Types.Poison
    },
    "Close Combat": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user fights the target up close without guarding itself. This also lowers the user's Defense and Sp. Def stats.",
        "dmg": 120,
        "pp": 5,
        "type": Types.fighting
    },
    "Coaching": {
        "acc": null,
        "cat": Categories.status,
        "desc": "The user properly coaches its ally Pokémon, boosting their Attack and Defense stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fighting
    },
    "Coil": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Comet Punch": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 18,
        "pp": 15,
        "type": Types.normal
    },
    "Confide": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Confuse Ray": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The target is exposed to a sinister ray that triggers confusion.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ghost
    },
    "Confusion": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is hit by a weak telekinetic force. This may also confuse the target.",
        "dmg": 50,
        "pp": 25,
        "type": Types.psychic
    },
    "Constrict": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 10,
        "pp": 35,
        "type": Types.normal
    },
    "Continental Crush": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.rock
    },
    "Conversion": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user changes its type to become the same type as the move at the top of the list of moves it knows.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Conversion 2": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user changes its type to make itself resistant to the type of the attack the target used last.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Copycat": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user mimics the move used immediately before it. The move fails if no other move has been used yet.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Core Enforcer": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "If the Pokémon the user has inflicted damage on have already used their moves, this move eliminates the effect of the target's Ability.",
        "dmg": 100,
        "pp": 10,
        "type": Types.dragon
    },
    "Corkscrew Crash": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.steel
    },
    "Corrosive Gas": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user surrounds everything around it with highly acidic gas and melts away items they hold.",
        "dmg": 0,
        "pp": 40,
        "type": Types.Poison
    },
    "Cosmic Power": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user absorbs a mystical power from space to raise its Defense and Sp. Def stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Cotton Guard": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user protects itself by wrapping its body in soft cotton, which drastically raises the user's Defense stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Cotton Spore": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user releases cotton-like spores that cling to opposing Pokémon, which harshly lowers their Speed stats.",
        "dmg": 0,
        "pp": 40,
        "type": Types.grass
    },
    "Counter": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A retaliation move that counters any physical attack, inflicting double the damage taken.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fighting
    },
    "Court Change": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "With its mysterious power, the user swaps the effects on either side of the field.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Covet": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user endearingly approaches the target, then steals the target's held item.",
        "dmg": 60,
        "pp": 25,
        "type": Types.normal
    },
    "Crabhammer": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is hammered with a large pincer. Critical hits land more easily.",
        "dmg": 100,
        "pp": 10,
        "type": Types.water
    },
    "Crafty Shield": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Cross Chop": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The user delivers a double chop with its forearms crossed. Critical hits land more easily.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fighting
    },
    "Cross Poison": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A slashing attack with a poisonous blade that may also poison the target. Critical hits land more easily.",
        "dmg": 70,
        "pp": 20,
        "type": Types.Poison
    },
    "Crunch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.",
        "dmg": 80,
        "pp": 15,
        "type": Types.dark
    },
    "Crush Claw": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat.",
        "dmg": 75,
        "pp": 10,
        "type": Types.normal
    },
    "Crush Grip": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is crushed with great force. The more HP the target has left, the greater this move's power.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Curse": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A move that works differently for the Ghost type than for all other types.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ghost
    },
    "Cut": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The target is cut with a scythe or claw.",
        "dmg": 50,
        "pp": 30,
        "type": Types.normal
    },
    "Dark Pulse": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.",
        "dmg": 80,
        "pp": 15,
        "type": Types.dark
    },
    "Dark Void": {
        "acc": 50,
        "cat": Categories.status,
        "desc": "Opposing Pokémon are dragged into a world of total darkness that makes them sleep.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Darkest Lariat": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user swings both arms and hits the target. The target's stat changes don't affect this attack's damage.",
        "dmg": 85,
        "pp": 10,
        "type": Types.dark
    },
    "Dazzling Gleam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user damages opposing Pokémon by emitting a powerful flash.",
        "dmg": 80,
        "pp": 10,
        "type": Types.fairy
    },
    "Decorate": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user sharply raises the target's Attack and Sp. Atk stats by decorating the target.",
        "dmg": 0,
        "pp": 15,
        "type": Types.fairy
    },
    "Defend Order": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.bug
    },
    "Defense Curl": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user curls up to conceal weak spots and raise its Defense stat.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Defog": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A strong wind blows away the target's barriers such as Reflect or Light Screen. This also lowers the target's evasiveness.",
        "dmg": 0,
        "pp": 15,
        "type": Types.flying
    },
    "Destiny Bond": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "After using this move, if the user faints, the Pokémon that landed the knockout hit also faints. Its chance of failing rises if it is used in succession.",
        "dmg": 0,
        "pp": 5,
        "type": Types.ghost
    },
    "Detect": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
        "dmg": 0,
        "pp": 5,
        "type": Types.fighting
    },
    "Devastating Drake": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.dragon
    },
    "Diamond Storm": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply raise the user's Defense stat.",
        "dmg": 100,
        "pp": 5,
        "type": Types.rock
    },
    "Dig": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user burrows into the ground, then attacks on the next turn.",
        "dmg": 80,
        "pp": 10,
        "type": Types.ground
    },
    "Disable": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "For four turns, this move prevents the target from using the move it last used.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Disarming Voice": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses.",
        "dmg": 40,
        "pp": 15,
        "type": Types.fairy
    },
    "Discharge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
        "dmg": 80,
        "pp": 15,
        "type": Types.electric
    },
    "Dive": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Diving on the first turn, the user floats up and attacks on the next turn.",
        "dmg": 80,
        "pp": 10,
        "type": Types.water
    },
    "Dizzy Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 10,
        "type": Types.normal
    },
    "Doom Desire": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Two turns after this move is used, a concentrated bundle of light blasts the target.",
        "dmg": 140,
        "pp": 5,
        "type": Types.steel
    },
    "Double Hit": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user slams the target with a long tail, vines, or a tentacle. The target is hit twice in a row.",
        "dmg": 35,
        "pp": 10,
        "type": Types.normal
    },
    "Double Iron Bash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user rotates, centering the hex nut in its chest, and then strikes with its arms twice in a row. This may also make the target flinch.",
        "dmg": 60,
        "pp": 5,
        "type": Types.steel
    },
    "Double Kick": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is quickly kicked twice in succession using both feet.",
        "dmg": 30,
        "pp": 30,
        "type": Types.fighting
    },
    "Double Slap": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 15,
        "pp": 10,
        "type": Types.normal
    },
    "Double Team": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Double-Edge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A reckless, life-risking tackle in which the user rushes the target. This also damages the user quite a lot.",
        "dmg": 120,
        "pp": 15,
        "type": Types.normal
    },
    "Draco Meteor": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "Comets are summoned down from the sky onto the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
        "dmg": 130,
        "pp": 5,
        "type": Types.dragon
    },
    "Dragon Ascent": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "After soaring upward, the user attacks its target by dropping out of the sky at high speeds. But it lowers its own Defense and Sp. Def stats in the process.",
        "dmg": 120,
        "pp": 5,
        "type": Types.flying
    },
    "Dragon Breath": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
        "dmg": 60,
        "pp": 20,
        "type": Types.dragon
    },
    "Dragon Claw": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slashes the target with huge sharp claws.",
        "dmg": 80,
        "pp": 15,
        "type": Types.dragon
    },
    "Dragon Dance": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user vigorously performs a mystic, powerful dance that raises its Attack and Speed stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dragon
    },
    "Dragon Darts": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks twice using Dreepy. If there are two targets, this move hits each target once.",
        "dmg": 50,
        "pp": 10,
        "type": Types.dragon
    },
    "Dragon Energy": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Converting its life-force into power, the user attacks opposing Pokémon. The lower the user's HP, the lower the move's power.",
        "dmg": 150,
        "pp": 5,
        "type": Types.dragon
    },
    "Dragon Hammer": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user uses its body like a hammer to attack the target and inflict damage.",
        "dmg": 90,
        "pp": 15,
        "type": Types.dragon
    },
    "Dragon Pulse": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is attacked with a shock wave generated by the user's gaping mouth.",
        "dmg": 85,
        "pp": 10,
        "type": Types.dragon
    },
    "Dragon Rage": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dragon
    },
    "Dragon Rush": {
        "acc": 75,
        "cat": Categories.physical,
        "desc": "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
        "dmg": 100,
        "pp": 10,
        "type": Types.dragon
    },
    "Dragon Tail": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
        "dmg": 60,
        "pp": 10,
        "type": Types.dragon
    },
    "Drain Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "An energy-draining punch. The user's HP is restored by half the damage taken by the target.",
        "dmg": 75,
        "pp": 10,
        "type": Types.fighting
    },
    "Draining Kiss": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user steals the target's HP with a kiss. The user's HP is restored by over half of the damage taken by the target.",
        "dmg": 50,
        "pp": 10,
        "type": Types.fairy
    },
    "Dream Eater": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user eats the dreams of a sleeping target. The user's HP is restored by half the damage taken by the target.",
        "dmg": 100,
        "pp": 15,
        "type": Types.psychic
    },
    "Drill Peck": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A corkscrewing attack that strikes the target with a sharp beak acting as a drill.",
        "dmg": 80,
        "pp": 20,
        "type": Types.flying
    },
    "Drill Run": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user crashes into its target while rotating its body like a drill. Critical hits land more easily.",
        "dmg": 80,
        "pp": 10,
        "type": Types.ground
    },
    "Drum Beating": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user plays its drum, controlling the drum's roots to attack the target. This also lowers the target's Speed stat.",
        "dmg": 80,
        "pp": 10,
        "type": Types.grass
    },
    "Dual Chop": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.",
        "dmg": 40,
        "pp": 15,
        "type": Types.dragon
    },
    "Dual Wingbeat": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user slams the target with its wings. The target is hit twice in a row.",
        "dmg": 40,
        "pp": 10,
        "type": Types.flying
    },
    "Dynamax Cannon": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user unleashes a strong beam from its core. This move deals twice the damage if the target is Dynamaxed.",
        "dmg": 100,
        "pp": 5,
        "type": Types.dragon
    },
    "Dynamic Punch": {
        "acc": 50,
        "cat": Categories.physical,
        "desc": "The user punches the target with full, concentrated power. This confuses the target if it hits.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fighting
    },
    "Earth Power": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ground
    },
    "Earthquake": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user sets off an earthquake that strikes every Pokémon around it.",
        "dmg": 100,
        "pp": 10,
        "type": Types.ground
    },
    "Echoed Voice": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with an echoing voice. If this move is used every turn, its power is increased.",
        "dmg": 40,
        "pp": 15,
        "type": Types.normal
    },
    "Eerie Impulse": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.electric
    },
    "Eerie Spell": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with its tremendous psychic power. This also removes 3 PP from the target's last move.",
        "dmg": 80,
        "pp": 5,
        "type": Types.psychic
    },
    "Egg Bomb": {
        "acc": 75,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 100,
        "pp": 10,
        "type": Types.normal
    },
    "Electric Terrain": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user electrifies the ground for five turns, powering up Electric-type moves. Pokémon on the ground no longer fall asleep.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "Electrify": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "If the target is electrified before it uses a move during that turn, the target's move becomes Electric type.",
        "dmg": 0,
        "pp": 20,
        "type": Types.electric
    },
    "Electro Ball": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user hurls an electric orb at the target. The faster the user is than the target, the greater the move's power.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "Electroweb": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks and captures opposing Pokémon using an electric net. This lowers their Speed stats.",
        "dmg": 55,
        "pp": 15,
        "type": Types.electric
    },
    "Embargo": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.dark
    },
    "Ember": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is attacked with small flames. This may also leave the target with a burn.",
        "dmg": 40,
        "pp": 25,
        "type": Types.fire
    },
    "Encore": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user compels the target to keep using the move it encored for three turns.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Endeavor": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This attack move cuts down the target's HP to equal the user's HP.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Endure": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Energy Ball": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.grass
    },
    "Entrainment": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Eruption": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",
        "dmg": 150,
        "pp": 5,
        "type": Types.fire
    },
    "Eternabeam": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "This is Eternatus's most powerful attack in its original form. The user can't move on the next turn.",
        "dmg": 160,
        "pp": 5,
        "type": Types.dragon
    },
    "Expanding Force": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with its psychic power. This move's power goes up and damages all opposing Pokémon on Psychic Terrain.",
        "dmg": 80,
        "pp": 10,
        "type": Types.psychic
    },
    "Explosion": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
        "dmg": 250,
        "pp": 5,
        "type": Types.normal
    },
    "Extrasensory": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with an odd, unseeable power. This may also make the target flinch.",
        "dmg": 80,
        "pp": 20,
        "type": Types.psychic
    },
    "Extreme Evoboost": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.normal
    },
    "Extreme Speed": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user charges the target at blinding speed. This move always goes first.",
        "dmg": 80,
        "pp": 5,
        "type": Types.normal
    },
    "Facade": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
        "dmg": 70,
        "pp": 20,
        "type": Types.normal
    },
    "Fairy Lock": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "By locking down the battlefield, the user keeps all Pokémon from fleeing during the next turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Fairy Wind": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user stirs up a fairy wind and strikes the target with it.",
        "dmg": 40,
        "pp": 30,
        "type": Types.fairy
    },
    "Fake Out": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.",
        "dmg": 40,
        "pp": 10,
        "type": Types.normal
    },
    "Fake Tears": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user feigns crying to fluster the target, harshly lowering its Sp. Def stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dark
    },
    "False Surrender": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "The user pretends to bow its head, but then it stabs the target with its disheveled hair. This attack never misses.",
        "dmg": 80,
        "pp": 10,
        "type": Types.dark
    },
    "False Swipe": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.",
        "dmg": 40,
        "pp": 40,
        "type": Types.normal
    },
    "Feather Dance": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user covers the target's body with a mass of down that harshly lowers its Attack stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.flying
    },
    "Feint": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.",
        "dmg": 30,
        "pp": 10,
        "type": Types.normal
    },
    "Feint Attack": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 20,
        "type": Types.dark
    },
    "Fell Stinger": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "When the user knocks out a target with this move, the user's Attack stat rises drastically.",
        "dmg": 50,
        "pp": 25,
        "type": Types.bug
    },
    "Fiery Dance": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Cloaked in flames, the user attacks the target by dancing and flapping its wings. This may also raise the user's Sp. Atk stat.",
        "dmg": 80,
        "pp": 10,
        "type": Types.fire
    },
    "Fiery Wrath": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user transforms its wrath into a fire-like aura to attack. This may also make opposing Pokémon flinch.",
        "dmg": 90,
        "pp": 10,
        "type": Types.dark
    },
    "Final Gambit": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user risks everything to attack its target. The user faints but does damage equal to its HP.",
        "dmg": 0,
        "pp": 5,
        "type": Types.fighting
    },
    "Fire Blast": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
        "dmg": 110,
        "pp": 5,
        "type": Types.fire
    },
    "Fire Fang": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.",
        "dmg": 65,
        "pp": 15,
        "type": Types.fire
    },
    "Fire Lash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user strikes the target with a burning lash. This also lowers the target's Defense stat.",
        "dmg": 80,
        "pp": 15,
        "type": Types.fire
    },
    "Fire Pledge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A column of fire hits the target. When used with its grass equivalent, its power increases and a vast sea of fire appears.",
        "dmg": 80,
        "pp": 10,
        "type": Types.fire
    },
    "Fire Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is punched with a fiery fist. This may also leave the target with a burn.",
        "dmg": 75,
        "pp": 15,
        "type": Types.fire
    },
    "Fire Spin": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The target becomes trapped within a fierce vortex of fire that rages for four to five turns.",
        "dmg": 35,
        "pp": 15,
        "type": Types.fire
    },
    "First Impression": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Although this move has great power, it only works the first turn each time the user enters battle.",
        "dmg": 90,
        "pp": 10,
        "type": Types.bug
    },
    "Fishious Rend": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user rends the target with its hard gills. If the user attacks before the target, the power of this move is doubled.",
        "dmg": 85,
        "pp": 10,
        "type": Types.water
    },
    "Fissure": {
        "acc": 30,
        "cat": Categories.physical,
        "desc": "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",
        "dmg": 0,
        "pp": 5,
        "type": Types.ground
    },
    "Flail": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user flails about aimlessly to attack. The less HP the user has, the greater the move's power.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Flame Burst": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 15,
        "type": Types.fire
    },
    "Flame Charge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Cloaking itself in flame, the user attacks the target. Then, building up more power, the user raises its Speed stat.",
        "dmg": 50,
        "pp": 20,
        "type": Types.fire
    },
    "Flame Wheel": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user cloaks itself in fire and charges at the target. This may also leave the target with a burn.",
        "dmg": 60,
        "pp": 25,
        "type": Types.fire
    },
    "Flamethrower": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is scorched with an intense blast of fire. This may also leave the target with a burn.",
        "dmg": 90,
        "pp": 15,
        "type": Types.fire
    },
    "Flare Blitz": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.",
        "dmg": 120,
        "pp": 15,
        "type": Types.fire
    },
    "Flash": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Flash Cannon": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user gathers all its light energy and releases it all at once. This may also lower the target's Sp. Def stat.",
        "dmg": 80,
        "pp": 10,
        "type": Types.steel
    },
    "Flatter": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "Flattery is used to confuse the target. However, this also raises the target's Sp. Atk stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.dark
    },
    "Fleur Cannon": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user unleashes a strong beam. The attack's recoil harshly lowers the user's Sp. Atk stat.",
        "dmg": 130,
        "pp": 5,
        "type": Types.fairy
    },
    "Fling": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user flings its held item at the target to attack. This move's power and effects depend on the item.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Flip Turn": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
        "dmg": 60,
        "pp": 20,
        "type": Types.water
    },
    "Floaty Fall": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 90,
        "pp": 15,
        "type": Types.flying
    },
    "Floral Healing": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores the target's HP by up to half of its max HP. It restores more HP when the terrain is grass.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Flower Shield": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user raises the Defense stats of all Grass-type Pokémon in battle with a mysterious power.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Fly": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user flies up into the sky and then strikes its target on the next turn.",
        "dmg": 90,
        "pp": 15,
        "type": Types.flying
    },
    "Flying Press": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.",
        "dmg": 100,
        "pp": 10,
        "type": Types.fighting
    },
    "Focus Blast": {
        "acc": 70,
        "cat": Categories.special,
        "desc": "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
        "dmg": 120,
        "pp": 5,
        "type": Types.fighting
    },
    "Focus Energy": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user takes a deep breath and focuses so that critical hits land more easily.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Focus Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user focuses its mind before launching a punch. This move fails if the user is hit before it is used.",
        "dmg": 150,
        "pp": 20,
        "type": Types.fighting
    },
    "Follow Me": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user draws attention to itself, making all targets take aim only at the user.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Force Palm": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is attacked with a shock wave. This may also leave the target with paralysis.",
        "dmg": 60,
        "pp": 10,
        "type": Types.fighting
    },
    "Foresight": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Forest's Curse": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user puts a forest curse on the target. The target is now Grass type as well.",
        "dmg": 0,
        "pp": 20,
        "type": Types.grass
    },
    "Foul Play": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user turns the target's power against it. The higher the target's Attack stat, the greater the damage it deals.",
        "dmg": 95,
        "pp": 15,
        "type": Types.dark
    },
    "Freeze Shock": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "On the second turn, the user hits the target with electrically charged ice. This may also leave the target with paralysis.",
        "dmg": 140,
        "pp": 5,
        "type": Types.ice
    },
    "Freeze-Dry": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.",
        "dmg": 70,
        "pp": 20,
        "type": Types.ice
    },
    "Freezing Glare": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
        "dmg": 90,
        "pp": 10,
        "type": Types.psychic
    },
    "Freezy Frost": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 100,
        "pp": 10,
        "type": Types.ice
    },
    "Frenzy Plant": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user slams the target with the roots of an enormous tree. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.grass
    },
    "Frost Breath": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user blows its cold breath on the target. This attack always results in a critical hit.",
        "dmg": 60,
        "pp": 10,
        "type": Types.ice
    },
    "Frustration": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Fury Attack": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The target is jabbed repeatedly with a horn or beak two to five times in a row.",
        "dmg": 15,
        "pp": 20,
        "type": Types.normal
    },
    "Fury Cutter": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The target is slashed with scythes or claws. This attack becomes more powerful if it hits in succession.",
        "dmg": 40,
        "pp": 20,
        "type": Types.bug
    },
    "Fury Swipes": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The target is raked with sharp claws or scythes quickly two to five times in a row.",
        "dmg": 18,
        "pp": 15,
        "type": Types.normal
    },
    "Fusion Bolt": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user throws down a giant lightning bolt. This move's power is increased when influenced by an enormous flame.",
        "dmg": 100,
        "pp": 5,
        "type": Types.electric
    },
    "Fusion Flare": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user brings down a giant flame. This move's power is increased when influenced by an enormous lightning bolt.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fire
    },
    "Future Sight": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Two turns after this move is used, a hunk of psychic energy attacks the target.",
        "dmg": 120,
        "pp": 10,
        "type": Types.psychic
    },
    "G-Max Befuddle": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Bug-type attack that Gigantamax Butterfree use. This move inflicts the poisoned, paralyzed, or asleep status condition on opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.bug
    },
    "G-Max Cannonade": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Water-type attack that Gigantamax Blastoise use. This move continues to deal damage to opponents for four turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "G-Max Centiferno": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fire-type attack that Gigantamax Centiskorch use. This move traps opponents in flames for four to five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fire
    },
    "G-Max Chi Strike": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fighting-type attack that Gigantamax Machamp use. This move raises the chance of critical hits.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fighting
    },
    "G-Max Cuddle": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Normal-type attack that Gigantamax Eevee use. This move infatuates opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "G-Max Depletion": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Dragon-type attack that Gigantamax Duraludon use. Reduces the PP of the last move used.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dragon
    },
    "G-Max Drum Solo": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Grass-type attack that Gigantamax Rillaboom use. This move can be used on the target regardless of its Abilities.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "G-Max Finale": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fairy-type attack that Gigantamax Alcremie use. This move heals the HP of allies.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "G-Max Fireball": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fire-type attack that Gigantamax Cinderace use. This move can be used on the target regardless of its Abilities",
        "dmg": 0,
        "pp": 10,
        "type": Types.fire
    },
    "G-Max Foam Burst": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Water-type attack that Gigantamax Kingler use. This move harshly lowers the Speed of opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "G-Max Gold Rush": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Normal-type attack that Gigantamax Meowth use. This move confuses opponents and also earns extra money.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "G-Max Gravitas": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Psychic-type attack that Gigantamax Orbeetle use. This move changes gravity for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "G-Max Hydrosnipe": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Water-type attack that Gigantamax Inteleon use. This move can be used on the target regardless of its Abilities.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "G-Max Malodor": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Poison-type attack that Gigantamax Garbodor use. This move poisons opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.Poison
    },
    "G-Max Meltdown": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Steel-type attack that Gigantamax Melmetal use. This move makes opponents incapable of using the same move twice in a row.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "G-Max One Blow": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Dark-type attack that Gigantamax Urshifu use. This single-strike move can ignore Max Guard.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "G-Max Rapid Flow": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Water-type attack that Gigantamax Urshifu use. This rapid-strike move can ignore Max Guard.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "G-Max Replenish": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Normal-type attack that Gigantamax Snorlax use. This move restores Berries that have been eaten.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "G-Max Resonance": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "An Ice-type attack that Gigantamax Lapras use. This move reduces the damage received for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ice
    },
    "G-Max Sandblast": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Ground-type attack that Gigantamax Sandaconda use. Opponents are trapped in a raging sandstorm for four to five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ground
    },
    "G-Max Smite": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fairy-type attack that Gigantamax Hatterene use. This move confuses opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "G-Max Snooze": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Dark-type attack that Gigantamax Grimmsnarl use. The user lets loose a huge yawn that lulls the targets into falling asleep on the next turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "G-Max Steelsurge": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Steel-type attack that Gigantamax Copperajah use. This move scatters sharp spikes around the field.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "G-Max Stonesurge": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Water-type attack that Gigantamax Drednaw use. This move scatters sharp rocks around the field.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "G-Max Stun Shock": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "An Electric-type attack that Gigantamax Toxtricity use. This move poisons or paralyzes opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "G-Max Sweetness": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Grass-type attack that Gigantamax Appletun use. This move heals the status conditions of allies.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "G-Max Tartness": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Grass-type attack that Gigantamax Flapple use. This move reduces the opponentsâ€™ evasiveness.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "G-Max Terror": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Ghost-type attack that Gigantamax Gengar use. This Pokémon steps on the opposing Pokémonâ€™s shadow to prevent them from escaping.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ghost
    },
    "G-Max Vine Lash": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Grass-type attack that Gigantamax Venusaur use. This move continues to deal damage to opponents for four turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "G-Max Volcalith": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Rock-type attack that Gigantamax Coalossal use. This move continues to deal damage to opponents for four turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.rock
    },
    "G-Max Volt Crash": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "An Electric-type attack that Gigantamax Pikachu use. This move paralyzes opponents.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "G-Max Wildfire": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fire
    },
    "G-Max Wind Rage": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "A Flying-type attack that Gigantamax Corviknight use. This move removes the effects of moves like Reflect and Light Screen.",
        "dmg": 0,
        "pp": 10,
        "type": Types.flying
    },
    "Gastro Acid": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability.",
        "dmg": 0,
        "pp": 10,
        "type": Types.Poison
    },
    "Gear Grind": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user attacks by throwing steel gears at its target twice.",
        "dmg": 50,
        "pp": 15,
        "type": Types.steel
    },
    "Gear Up": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.",
        "dmg": 0,
        "pp": 20,
        "type": Types.steel
    },
    "Genesis Supernova": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 185,
        "pp": 1,
        "type": Types.psychic
    },
    "Geomancy": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user absorbs energy and sharply raises its Sp. Atk, Sp. Def, and Speed stats on the next turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Giga Drain": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
        "dmg": 75,
        "pp": 10,
        "type": Types.grass
    },
    "Giga Impact": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user charges at the target using every bit of its power. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.normal
    },
    "Gigavolt Havoc": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.electric
    },
    "Glacial Lance": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokémon.",
        "dmg": 130,
        "pp": 5,
        "type": Types.ice
    },
    "Glaciate": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks by blowing freezing cold air at opposing Pokémon. This lowers their Speed stats.",
        "dmg": 65,
        "pp": 10,
        "type": Types.ice
    },
    "Glare": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user intimidates the target with the pattern on its belly to cause paralysis.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Glitzy Glow": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 80,
        "pp": 15,
        "type": Types.psychic
    },
    "Grass Knot": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user snares the target with grass and trips it. The heavier the target, the greater the move's power.",
        "dmg": 0,
        "pp": 20,
        "type": Types.grass
    },
    "Grass Pledge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A column of grass hits the target. When used with its water equivalent, its power increases and a vast swamp appears.",
        "dmg": 80,
        "pp": 10,
        "type": Types.grass
    },
    "Grass Whistle": {
        "acc": 55,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.grass
    },
    "Grassy Glide": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Gliding on the ground, the user attacks the target. This move always goes first on Grassy Terrain.",
        "dmg": 70,
        "pp": 20,
        "type": Types.grass
    },
    "Grassy Terrain": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user turns the ground to grass for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Grav Apple": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user inflicts damage by dropping an apple from high above. This also lowers the target's Defense stat.",
        "dmg": 80,
        "pp": 10,
        "type": Types.grass
    },
    "Gravity": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move enables Flying-type Pokémon or Pokémon with the Levitate Ability to be hit by Ground-type moves. Moves that involve flying can't be used.",
        "dmg": 0,
        "pp": 5,
        "type": Types.psychic
    },
    "Growl": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stats.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Growth": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user's body grows all at once, raising the Attack and Sp. Atk stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Grudge": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "If the user faints, the user's grudge fully depletes the PP of the opponent's move that knocked it out.",
        "dmg": 0,
        "pp": 5,
        "type": Types.ghost
    },
    "Guard Split": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to average its Defense and Sp. Def stats with those of the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Guard Swap": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Guardian of Alola": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.fairy
    },
    "Guillotine": {
        "acc": 30,
        "cat": Categories.physical,
        "desc": "A vicious, tearing attack with big pincers. The target faints instantly if this attack hits.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Gunk Shot": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The user shoots filthy garbage at the target to attack. This may also poison the target.",
        "dmg": 120,
        "pp": 5,
        "type": Types.Poison
    },
    "Gust": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
        "dmg": 40,
        "pp": 35,
        "type": Types.flying
    },
    "Gyro Ball": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user tackles the target with a high-speed spin. The slower the user compared to the target, the greater the move's power.",
        "dmg": 0,
        "pp": 5,
        "type": Types.steel
    },
    "Hail": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice types.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ice
    },
    "Hammer Arm": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
        "dmg": 100,
        "pp": 10,
        "type": Types.fighting
    },
    "Happy Hour": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "Using Happy Hour doubles the amount of prize money received after battle.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Harden": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user stiffens all the muscles in its body to raise its Defense stat.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Haze": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle.",
        "dmg": 0,
        "pp": 30,
        "type": Types.ice
    },
    "Head Charge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user charges its head into its target, using its powerful guard hair. This also damages the user a little.",
        "dmg": 120,
        "pp": 15,
        "type": Types.normal
    },
    "Head Smash": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The user attacks the target with a hazardous, full-power headbutt. This also damages the user terribly.",
        "dmg": 150,
        "pp": 5,
        "type": Types.rock
    },
    "Headbutt": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.",
        "dmg": 70,
        "pp": 15,
        "type": Types.normal
    },
    "Heal Bell": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user makes a soothing bell chime to heal the status conditions of all the party Pokémon.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Heal Block": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Heal Order": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.bug
    },
    "Heal Pulse": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user emits a healing pulse that restores the target's HP by up to half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Healing Wish": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user faints. In return, the Pokémon taking its place will have its HP restored and status conditions cured.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Heart Stamp": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 25,
        "type": Types.psychic
    },
    "Heart Swap": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Heat Crash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fire
    },
    "Heat Wave": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave those Pokémon with a burn.",
        "dmg": 95,
        "pp": 10,
        "type": Types.fire
    },
    "Heavy Slam": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams into the target with its heavy body. The more the user outweighs the target, the greater the move's power.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "Helping Hand": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user assists an ally by boosting the power of that ally's attack.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Hex": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This relentless attack does massive damage to a target affected by status conditions.",
        "dmg": 65,
        "pp": 10,
        "type": Types.ghost
    },
    "Hidden Power": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 15,
        "type": Types.normal
    },
    "High Horsepower": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user fiercely attacks the target using its entire body.",
        "dmg": 95,
        "pp": 10,
        "type": Types.ground
    },
    "High Jump Kick": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.",
        "dmg": 130,
        "pp": 10,
        "type": Types.fighting
    },
    "Hold Back": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user holds back when it attacks, and the target is left with at least 1 HP.",
        "dmg": 40,
        "pp": 40,
        "type": Types.normal
    },
    "Hold Hands": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user and an ally hold hands. This makes them very happy.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Hone Claws": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user sharpens its claws to boost its Attack stat and accuracy.",
        "dmg": 0,
        "pp": 15,
        "type": Types.dark
    },
    "Horn Attack": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is jabbed with a sharply pointed horn to inflict damage.",
        "dmg": 65,
        "pp": 25,
        "type": Types.normal
    },
    "Horn Drill": {
        "acc": 30,
        "cat": Categories.physical,
        "desc": "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Horn Leech": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user drains the target's energy with its horns. The user's HP is restored by half the damage taken by the target.",
        "dmg": 75,
        "pp": 10,
        "type": Types.grass
    },
    "Howl": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user howls loudly to raise the spirit of itself and allies. This raises their Attack stats.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Hurricane": {
        "acc": 70,
        "cat": Categories.special,
        "desc": "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target.",
        "dmg": 110,
        "pp": 10,
        "type": Types.flying
    },
    "Hydro Cannon": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The target is hit with a watery blast. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.water
    },
    "Hydro Pump": {
        "acc": 80,
        "cat": Categories.special,
        "desc": "The target is blasted by a huge volume of water launched under great pressure.",
        "dmg": 110,
        "pp": 5,
        "type": Types.water
    },
    "Hydro Vortex": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.water
    },
    "Hyper Beam": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The target is attacked with a powerful beam. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.normal
    },
    "Hyper Fang": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
        "dmg": 80,
        "pp": 15,
        "type": Types.normal
    },
    "Hyper Voice": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user lets loose a horribly echoing shout with the power to inflict damage.",
        "dmg": 90,
        "pp": 10,
        "type": Types.normal
    },
    "Hyperspace Fury": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. But the user's Defense stat falls.",
        "dmg": 100,
        "pp": 5,
        "type": Types.dark
    },
    "Hyperspace Hole": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "Using a hyperspace hole, the user appears right next to the target and strikes. This also hits a target using a move such as Protect or Detect.",
        "dmg": 80,
        "pp": 5,
        "type": Types.psychic
    },
    "Hypnosis": {
        "acc": 60,
        "cat": Categories.status,
        "desc": "The user employs hypnotic suggestion to make the target fall into a deep sleep.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Ice Ball": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 30,
        "pp": 20,
        "type": Types.ice
    },
    "Ice Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ice
    },
    "Ice Burn": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "On the second turn, an ultracold, freezing wind surrounds the target. This may leave the target with a burn.",
        "dmg": 140,
        "pp": 5,
        "type": Types.ice
    },
    "Ice Fang": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen.",
        "dmg": 65,
        "pp": 15,
        "type": Types.ice
    },
    "Ice Hammer": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
        "dmg": 100,
        "pp": 10,
        "type": Types.ice
    },
    "Ice Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is punched with an icy fist. This may also leave the target frozen.",
        "dmg": 75,
        "pp": 15,
        "type": Types.ice
    },
    "Ice Shard": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.ice
    },
    "Icicle Crash": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks by harshly dropping large icicles onto the target. This may also make the target flinch.",
        "dmg": 85,
        "pp": 10,
        "type": Types.ice
    },
    "Icicle Spear": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user launches sharp icicles at the target two to five times in a row.",
        "dmg": 25,
        "pp": 30,
        "type": Types.ice
    },
    "Icy Wind": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats.",
        "dmg": 55,
        "pp": 15,
        "type": Types.ice
    },
    "Imprison": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "If opposing Pokémon know any move also known by the user, they are prevented from using it.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Incinerate": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable.",
        "dmg": 60,
        "pp": 15,
        "type": Types.fire
    },
    "Inferno": {
        "acc": 50,
        "cat": Categories.special,
        "desc": "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fire
    },
    "Inferno Overdrive": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.fire
    },
    "Infestation": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is infested and attacked for four to five turns. The target can't flee during this time.",
        "dmg": 20,
        "pp": 20,
        "type": Types.bug
    },
    "Ingrain": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lays roots that restore its HP on every turn. Because it's rooted, it can't switch out.",
        "dmg": 0,
        "pp": 20,
        "type": Types.grass
    },
    "Instruct": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user instructs the target to use the target's last move again.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Ion Deluge": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 25,
        "type": Types.electric
    },
    "Iron Defense": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user hardens its body's surface like iron, sharply raising its Defense stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.steel
    },
    "Iron Head": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams the target with its steel-hard head. This may also make the target flinch.",
        "dmg": 80,
        "pp": 15,
        "type": Types.steel
    },
    "Iron Tail": {
        "acc": 75,
        "cat": Categories.physical,
        "desc": "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.",
        "dmg": 100,
        "pp": 15,
        "type": Types.steel
    },
    "Jaw Lock": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move prevents the user and the target from switching out until either of them faints. The effect goes away if either of the Pokémon leaves the field.",
        "dmg": 80,
        "pp": 10,
        "type": Types.dark
    },
    "Judgment": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user releases countless shots of light at the target. This move's type varies depending on the kind of Plate the user is holding.",
        "dmg": 100,
        "pp": 10,
        "type": Types.normal
    },
    "Jump Kick": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 100,
        "pp": 10,
        "type": Types.fighting
    },
    "Jungle Healing": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user becomes one with the jungle, restoring HP and healing any status conditions of itself and its ally Pokémon in battle.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Karate Chop": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 50,
        "pp": 25,
        "type": Types.fighting
    },
    "Kinesis": {
        "acc": 80,
        "cat": Categories.status,
        "desc": "The user distracts the target by bending a spoon. This lowers the target's accuracy.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "King's Shield": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user takes a defensive stance while it protects itself from damage. It also lowers the Attack stat of any attacker that makes direct contact.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "Knock Off": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slaps down the target's held item, and that item can't be used in that battle. The move does more damage if the target has a held item.",
        "dmg": 65,
        "pp": 20,
        "type": Types.dark
    },
    "Land's Wrath": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user gathers the energy of the land and focuses that power on opposing Pokémon to damage them.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ground
    },
    "Laser Focus": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user concentrates intensely. The attack on the next turn always results in a critical hit.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Lash Out": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user lashes out to vent its frustration toward the target. If the user's stats were lowered during this turn, the power of this move is doubled.",
        "dmg": 75,
        "pp": 5,
        "type": Types.dark
    },
    "Last Resort": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can be used only after the user has used all the other moves it knows in the battle.",
        "dmg": 140,
        "pp": 5,
        "type": Types.normal
    },
    "Lava Plume": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
        "dmg": 80,
        "pp": 15,
        "type": Types.fire
    },
    "Leaf Blade": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
        "dmg": 90,
        "pp": 15,
        "type": Types.grass
    },
    "Leaf Storm": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
        "dmg": 130,
        "pp": 5,
        "type": Types.grass
    },
    "Leaf Tornado": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy.",
        "dmg": 65,
        "pp": 10,
        "type": Types.grass
    },
    "Leafage": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by pelting the target with leaves.",
        "dmg": 40,
        "pp": 40,
        "type": Types.grass
    },
    "Leech Life": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.",
        "dmg": 80,
        "pp": 10,
        "type": Types.bug
    },
    "Leech Seed": {
        "acc": 90,
        "cat": Categories.status,
        "desc": "A seed is planted on the target. It steals some HP from the target every turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Leer": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user gives opposing Pokémon an intimidating leer that lowers the Defense stat.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Let's Snuggle Forever": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 190,
        "pp": 1,
        "type": Types.fairy
    },
    "Lick": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is licked with a long tongue, causing damage. This may also leave the target with paralysis.",
        "dmg": 30,
        "pp": 30,
        "type": Types.ghost
    },
    "Life Dew": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon in the battle.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "Light of Ruin": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user quite a lot.",
        "dmg": 140,
        "pp": 5,
        "type": Types.fairy
    },
    "Light Screen": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A wondrous wall of light is put up to reduce damage from special attacks for five turns.",
        "dmg": 0,
        "pp": 30,
        "type": Types.psychic
    },
    "Light That Burns the Sky": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 200,
        "pp": 1,
        "type": Types.psychic
    },
    "Liquidation": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat.",
        "dmg": 85,
        "pp": 10,
        "type": Types.water
    },
    "Lock-On": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user takes sure aim at the target. This ensures the next attack does not miss the target.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Lovely Kiss": {
        "acc": 75,
        "cat": Categories.status,
        "desc": "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Low Kick": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fighting
    },
    "Low Sweep": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
        "dmg": 65,
        "pp": 20,
        "type": Types.fighting
    },
    "Lucky Chant": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Lunar Dance": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user faints. In return, the Pokémon taking its place will have its status and HP fully restored.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Lunge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat.",
        "dmg": 80,
        "pp": 15,
        "type": Types.bug
    },
    "Luster Purge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat.",
        "dmg": 70,
        "pp": 5,
        "type": Types.psychic
    },
    "Mach Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user throws a punch at blinding speed. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.fighting
    },
    "Magic Coat": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Magic Powder": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user scatters a cloud of magic powder that changes the target to Psychic type.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Magic Room": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a bizarre area in which Pokémon's held items lose their effects for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Magical Leaf": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "The user scatters curious leaves that chase the target. This attack never misses.",
        "dmg": 60,
        "pp": 20,
        "type": Types.grass
    },
    "Magma Storm": {
        "acc": 75,
        "cat": Categories.special,
        "desc": "The target becomes trapped within a maelstrom of fire that rages for four to five turns.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fire
    },
    "Magnet Bomb": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 20,
        "type": Types.steel
    },
    "Magnet Rise": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user levitates using electrically generated magnetism for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "Magnetic Flux": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user manipulates magnetic fields, which raises the Defense and Sp. Def stats of ally Pokémon with the Plus or Minus Ability.",
        "dmg": 0,
        "pp": 20,
        "type": Types.electric
    },
    "Magnitude": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 30,
        "type": Types.ground
    },
    "Malicious Moonsault": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 180,
        "pp": 1,
        "type": Types.dark
    },
    "Mat Block": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fighting
    },
    "Max Airstream": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Flying-type attack Dynamax Pokémon use. This raises ally Pokémon's Speed stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.flying
    },
    "Max Darkness": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Dark-type attack Dynamax Pokémon use. This lowers the target's Sp. Def stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Max Flare": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Fire-type attack Dynamax Pokémon use. The user intensifies the sun for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fire
    },
    "Max Flutterby": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Bug-type attack Dynamax Pokémon use. This lowers the target's Sp. Atk stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.bug
    },
    "Max Geyser": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Water-type attack Dynamax Pokémon use. The user summons a heavy rain that falls for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.water
    },
    "Max Guard": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Max Hailstorm": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is an Ice-type attack Dynamax Pokémon use. The user summons a hailstorm lasting five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ice
    },
    "Max Knuckle": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Fighting-type attack Dynamax Pokémon use. This raises ally Pokémon's Attack stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fighting
    },
    "Max Lightning": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is an Electric-type attack Dynamax Pokémon use. The user turns the ground into Electric Terrain for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.electric
    },
    "Max Mindstorm": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Psychic-type attack Dynamax Pokémon use. The user turns the ground into Psychic Terrain for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Max Ooze": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Poison-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Atk stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.Poison
    },
    "Max Overgrowth": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Grass-type attack Dynamax Pokémon use. The user turns the ground into Grassy Terrain for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Max Phantasm": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Ghost-type attack Dynamax Pokémon use. This lowers the target's Defense stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ghost
    },
    "Max Quake": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Ground-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Def stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ground
    },
    "Max Rockfall": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Rock-type attack Dynamax Pokémon use. The user summons a sandstorm lasting five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.rock
    },
    "Max Starfall": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Fairy-type attack Dynamax Pokémon use. The user turns the ground into Misty Terrain for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Max Steelspike": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Steel-type attack Dynamax Pokémon use. This raises ally Pokémon's Defense stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "Max Strike": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Normal-type attack Dynamax Pokémon use. This lowers the target's Speed stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Max Wyrmwind": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This is a Dragon-type attack Dynamax Pokémon use. This lowers the target's Attack stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dragon
    },
    "Me First": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Mean Look": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user pins the target with a dark, arresting look. The target becomes unable to flee.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Meditate": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 40,
        "type": Types.psychic
    },
    "Mega Drain": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
        "dmg": 40,
        "pp": 15,
        "type": Types.grass
    },
    "Mega Kick": {
        "acc": 75,
        "cat": Categories.physical,
        "desc": "The target is attacked by a kick launched with muscle-packed power.",
        "dmg": 120,
        "pp": 5,
        "type": Types.normal
    },
    "Mega Punch": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The target is slugged by a punch thrown with muscle-packed power.",
        "dmg": 80,
        "pp": 20,
        "type": Types.normal
    },
    "Megahorn": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "Using its tough and impressive horn, the user rams into the target with no letup.",
        "dmg": 120,
        "pp": 10,
        "type": Types.bug
    },
    "Memento": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user faints when using this move. In return, this harshly lowers the target's Attack and Sp. Atk stats.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Menacing Moonraze Maelstrom": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 200,
        "pp": 1,
        "type": Types.ghost
    },
    "Metal Burst": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user retaliates with much greater force against the opponent that last inflicted damage on it.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "Metal Claw": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The target is raked with steel claws. This may also raise the user's Attack stat.",
        "dmg": 50,
        "pp": 35,
        "type": Types.steel
    },
    "Metal Sound": {
        "acc": 85,
        "cat": Categories.status,
        "desc": "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat.",
        "dmg": 0,
        "pp": 40,
        "type": Types.steel
    },
    "Meteor Assault": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks wildly with its thick leek. The user can't move on the next turn, because the force of this move makes it stagger.",
        "dmg": 150,
        "pp": 5,
        "type": Types.fighting
    },
    "Meteor Beam": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "In this two-turn attack, the user gathers space power and boosts its Sp. Atk stat, then attacks the target on the next turn.",
        "dmg": 120,
        "pp": 10,
        "type": Types.rock
    },
    "Meteor Mash": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is hit with a hard punch fired like a meteor. This may also raise the user's Attack stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.steel
    },
    "Metronome": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user waggles a finger and stimulates its brain into randomly using nearly any move.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Milk Drink": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores its own HP by up to half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Mimic": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user copies the target's last move. The move can be used during battle until the Pokémon is switched out.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Mind Blown": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks everything around it by causing its own head to explode. This also damages the user.",
        "dmg": 150,
        "pp": 5,
        "type": Types.fire
    },
    "Mind Reader": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user senses the target's movements with its mind to ensure its next attack does not miss the target.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Minimize": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user compresses its body to make itself look smaller, which sharply raises its evasiveness.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Miracle Eye": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 40,
        "type": Types.psychic
    },
    "Mirror Coat": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A retaliation move that counters any special attack, inflicting double the damage taken.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Mirror Move": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.flying
    },
    "Mirror Shot": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 65,
        "pp": 10,
        "type": Types.steel
    },
    "Mist": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns.",
        "dmg": 0,
        "pp": 30,
        "type": Types.ice
    },
    "Mist Ball": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat.",
        "dmg": 70,
        "pp": 5,
        "type": Types.psychic
    },
    "Misty Explosion": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks everything around it and faints upon using this move. This move's power is increased on Misty Terrain.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fairy
    },
    "Misty Terrain": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This protects Pokémon on the ground from status conditions and halves damage from Dragon-type moves for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Moonblast": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.",
        "dmg": 95,
        "pp": 15,
        "type": Types.fairy
    },
    "Moongeist Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user emits a sinister ray to attack the target. This move can be used on the target regardless of its Abilities.",
        "dmg": 100,
        "pp": 5,
        "type": Types.ghost
    },
    "Moonlight": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
        "dmg": 0,
        "pp": 5,
        "type": Types.fairy
    },
    "Morning Sun": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Mud Bomb": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 65,
        "pp": 10,
        "type": Types.ground
    },
    "Mud Shot": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat.",
        "dmg": 55,
        "pp": 15,
        "type": Types.ground
    },
    "Mud Sport": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.ground
    },
    "Mud-Slap": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user hurls mud in the target's face to inflict damage and lower its accuracy.",
        "dmg": 20,
        "pp": 10,
        "type": Types.ground
    },
    "Muddy Water": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy.",
        "dmg": 90,
        "pp": 10,
        "type": Types.water
    },
    "Multi-Attack": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Cloaking itself in high energy, the user slams into the target. The memory held determines the move's type.",
        "dmg": 120,
        "pp": 10,
        "type": Types.normal
    },
    "Mystical Fire": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.",
        "dmg": 75,
        "pp": 10,
        "type": Types.fire
    },
    "Nasty Plot": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dark
    },
    "Natural Gift": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Nature Power": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This attack makes use of nature's power. Its effects vary depending on the user's environment.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Nature's Madness": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user hits the target with the force of nature. It halves the target's HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Needle Arm": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 15,
        "type": Types.grass
    },
    "Never-Ending Nightmare": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.ghost
    },
    "Night Daze": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user lets loose a pitch-black shock wave at its target. This may also lower the target's accuracy.",
        "dmg": 85,
        "pp": 10,
        "type": Types.dark
    },
    "Night Shade": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.",
        "dmg": 0,
        "pp": 15,
        "type": Types.ghost
    },
    "Night Slash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slashes the target the instant an opportunity arises. Critical hits land more easily.",
        "dmg": 70,
        "pp": 15,
        "type": Types.dark
    },
    "Nightmare": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.ghost
    },
    "No Retreat": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move raises all the user's stats but prevents the user from switching out or fleeing.",
        "dmg": 0,
        "pp": 5,
        "type": Types.fighting
    },
    "Noble Roar": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk stats.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Nuzzle": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.",
        "dmg": 20,
        "pp": 20,
        "type": Types.electric
    },
    "Oblivion Wing": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user absorbs its target's HP. The user's HP is restored by over half of the damage taken by the target.",
        "dmg": 80,
        "pp": 10,
        "type": Types.flying
    },
    "Obstruct": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession. Direct contact harshly lowers the attacker's Defense stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Oceanic Operetta": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 195,
        "pp": 1,
        "type": Types.water
    },
    "Octazooka": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user attacks by spraying ink in the target's face or eyes. This may also lower the target's accuracy.",
        "dmg": 65,
        "pp": 10,
        "type": Types.water
    },
    "Octolock": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user locks the target in and prevents it from fleeing. This move also lowers the target's Defense and Sp. Def every turn.",
        "dmg": 0,
        "pp": 15,
        "type": Types.fighting
    },
    "Odor Sleuth": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Ominous Wind": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 5,
        "type": Types.ghost
    },
    "Origin Pulse": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue.",
        "dmg": 110,
        "pp": 10,
        "type": Types.water
    },
    "Outrage": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
        "dmg": 120,
        "pp": 10,
        "type": Types.dragon
    },
    "Overdrive": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks opposing Pokémon by twanging a guitar or bass guitar, causing a huge echo and strong vibration.",
        "dmg": 80,
        "pp": 10,
        "type": Types.electric
    },
    "Overheat": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user attacks the target at full power. The attack's recoil harshly lowers the user's Sp. Atk stat.",
        "dmg": 130,
        "pp": 5,
        "type": Types.fire
    },
    "Pain Split": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user adds its HP to the target's HP, then equally shares the combined HP with the target.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Parabolic Charge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit.",
        "dmg": 65,
        "pp": 20,
        "type": Types.electric
    },
    "Parting Shot": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pokémon.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dark
    },
    "Pay Day": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.",
        "dmg": 40,
        "pp": 20,
        "type": Types.normal
    },
    "Payback": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user stores power, then attacks. If the user moves after the target, this attack's power will be doubled.",
        "dmg": 50,
        "pp": 10,
        "type": Types.dark
    },
    "Peck": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is jabbed with a sharply pointed beak or horn.",
        "dmg": 35,
        "pp": 35,
        "type": Types.flying
    },
    "Perish Song": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "Any Pokémon that hears this song faints in three turns, unless it switches out of battle.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Petal Blizzard": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user stirs up a violent petal blizzard and attacks everything around it.",
        "dmg": 90,
        "pp": 15,
        "type": Types.grass
    },
    "Petal Dance": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
        "dmg": 120,
        "pp": 10,
        "type": Types.grass
    },
    "Phantom Force": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ghost
    },
    "Photon Geyser": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks a target with a pillar of light. This move inflicts Attack or Sp. Atk damageâ€”whichever stat is higher for the user.",
        "dmg": 100,
        "pp": 5,
        "type": Types.psychic
    },
    "Pika Papow": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.electric
    },
    "Pin Missile": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
        "dmg": 25,
        "pp": 20,
        "type": Types.bug
    },
    "Plasma Fists": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves.",
        "dmg": 100,
        "pp": 15,
        "type": Types.electric
    },
    "Play Nice": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Play Rough": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user plays rough with the target and attacks it. This may also lower the target's Attack stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.fairy
    },
    "Pluck": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user pecks the target. If the target is holding a Berry, the user eats it and gains its effect.",
        "dmg": 60,
        "pp": 20,
        "type": Types.flying
    },
    "Poison Fang": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user bites the target with toxic fangs. This may also leave the target badly poisoned.",
        "dmg": 50,
        "pp": 15,
        "type": Types.Poison
    },
    "Poison Gas": {
        "acc": 90,
        "cat": Categories.status,
        "desc": "A cloud of poison gas is sprayed in the face of opposing Pokémon, poisoning those it hits.",
        "dmg": 0,
        "pp": 40,
        "type": Types.Poison
    },
    "Poison Jab": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is stabbed with a tentacle, arm, or the like steeped in poison. This may also poison the target.",
        "dmg": 80,
        "pp": 20,
        "type": Types.Poison
    },
    "Poison Powder": {
        "acc": 75,
        "cat": Categories.status,
        "desc": "The user scatters a cloud of poisonous dust that poisons the target.",
        "dmg": 0,
        "pp": 35,
        "type": Types.Poison
    },
    "Poison Sting": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user stabs the target with a poisonous stinger. This may also poison the target.",
        "dmg": 15,
        "pp": 35,
        "type": Types.Poison
    },
    "Poison Tail": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user hits the target with its tail. This may also poison the target. Critical hits land more easily.",
        "dmg": 50,
        "pp": 25,
        "type": Types.Poison
    },
    "Pollen Puff": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
        "dmg": 90,
        "pp": 15,
        "type": Types.bug
    },
    "Poltergeist": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks the target by controlling the target's item. The move fails if the target doesn't have an item.",
        "dmg": 110,
        "pp": 5,
        "type": Types.ghost
    },
    "Pound": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is physically pounded with a long tail, a foreleg, or the like.",
        "dmg": 40,
        "pp": 35,
        "type": Types.normal
    },
    "Powder": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user covers the target in a combustible powder. If the target uses a Fire-type move, the powder explodes and damages the target.",
        "dmg": 0,
        "pp": 20,
        "type": Types.bug
    },
    "Powder Snow": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with a chilling gust of powdery snow. This may also freeze opposing Pokémon.",
        "dmg": 40,
        "pp": 25,
        "type": Types.ice
    },
    "Power Gem": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
        "dmg": 80,
        "pp": 20,
        "type": Types.rock
    },
    "Power Split": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Power Swap": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Power Trick": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to switch its Attack stat with its Defense stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Power Trip": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user boasts its strength and attacks the target. The more the user's stats are raised, the greater the move's power.",
        "dmg": 20,
        "pp": 10,
        "type": Types.dark
    },
    "Power Whip": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user violently whirls its vines, tentacles, or the like to harshly lash the target.",
        "dmg": 120,
        "pp": 10,
        "type": Types.grass
    },
    "Power-Up Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat.",
        "dmg": 40,
        "pp": 20,
        "type": Types.fighting
    },
    "Precipice Blades": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone.",
        "dmg": 120,
        "pp": 10,
        "type": Types.ground
    },
    "Present": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Prismatic Laser": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",
        "dmg": 160,
        "pp": 10,
        "type": Types.psychic
    },
    "Protect": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Psybeam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is attacked with a peculiar ray. This may also leave the target confused.",
        "dmg": 65,
        "pp": 20,
        "type": Types.psychic
    },
    "Psych Up": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user hypnotizes itself into copying any stat change made by the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    Types.psychic: {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.psychic
    },
    "Psychic Fangs": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
        "dmg": 85,
        "pp": 10,
        "type": Types.psychic
    },
    "Psychic Terrain": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This protects Pokémon on the ground from priority moves and powers up Psychic-type moves for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Psycho Boost": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 140,
        "pp": 5,
        "type": Types.psychic
    },
    "Psycho Cut": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
        "dmg": 70,
        "pp": 20,
        "type": Types.psychic
    },
    "Psycho Shift": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "Using its psychic power of suggestion, the user transfers its status conditions to the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Psyshock": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
        "dmg": 80,
        "pp": 10,
        "type": Types.psychic
    },
    "Psystrike": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
        "dmg": 100,
        "pp": 10,
        "type": Types.psychic
    },
    "Psywave": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Pulverizing Pancake": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 210,
        "pp": 1,
        "type": Types.normal
    },
    "Punishment": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 5,
        "type": Types.dark
    },
    "Purify": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user heals the target's status condition. If the move succeeds, it also restores the user's own HP.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Pursuit": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 40,
        "pp": 20,
        "type": Types.dark
    },
    "Pyro Ball": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks by igniting a small stone and launching it as a fiery ball at the target. This may also leave the target with a burn.",
        "dmg": 120,
        "pp": 5,
        "type": Types.fire
    },
    "Quash": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user suppresses the target and makes its move go last.",
        "dmg": 0,
        "pp": 15,
        "type": Types.dark
    },
    "Quick Attack": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.normal
    },
    "Quick Guard": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user protects itself and its allies from priority moves.",
        "dmg": 0,
        "pp": 15,
        "type": Types.fighting
    },
    "Quiver Dance": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lightly performs a beautiful, mystic dance. This boosts the user's Sp. Atk, Sp. Def, and Speed stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.bug
    },
    "Rage": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 20,
        "pp": 20,
        "type": Types.normal
    },
    "Rage Powder": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user.",
        "dmg": 0,
        "pp": 20,
        "type": Types.bug
    },
    "Rain Dance": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user summons a heavy rain that falls for five turns, powering up Water-type moves. It lowers the power of Fire-type moves.",
        "dmg": 0,
        "pp": 5,
        "type": Types.water
    },
    "Rapid Spin": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A spin attack that can also eliminate such moves as Bind, Wrap, and Leech Seed. This also raises the user's Speed stat.",
        "dmg": 50,
        "pp": 40,
        "type": Types.normal
    },
    "Razor Leaf": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.",
        "dmg": 55,
        "pp": 25,
        "type": Types.grass
    },
    "Razor Shell": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user cuts its target with sharp shells. This may also lower the target's Defense stat.",
        "dmg": 75,
        "pp": 10,
        "type": Types.water
    },
    "Razor Wind": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 80,
        "pp": 10,
        "type": Types.normal
    },
    "Recover": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "Restoring its own cells, the user restores its own HP by half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Recycle": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user recycles a held item that has been used in battle so it can be used again.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Reflect": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A wondrous wall of light is put up to reduce damage from physical attacks for five turns.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Reflect Type": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user reflects the target's type, making the user the same type as the target.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Refresh": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Relic Song": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",
        "dmg": 75,
        "pp": 10,
        "type": Types.normal
    },
    "Rest": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Retaliate": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move's power is increased.",
        "dmg": 70,
        "pp": 5,
        "type": Types.normal
    },
    "Return": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Revelation Dance": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target by dancing very hard. The user's type determines the type of this move.",
        "dmg": 90,
        "pp": 15,
        "type": Types.normal
    },
    "Revenge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This attack move's power is doubled if the user has been hurt by the opponent in the same turn.",
        "dmg": 60,
        "pp": 10,
        "type": Types.fighting
    },
    "Reversal": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "An all-out attack that becomes more powerful the less HP the user has.",
        "dmg": 0,
        "pp": 15,
        "type": Types.fighting
    },
    "Rising Voltage": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks with electric voltage rising from the ground. This move's power doubles when the target is on Electric Terrain.",
        "dmg": 70,
        "pp": 20,
        "type": Types.electric
    },
    "Roar": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The target is scared off, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Roar of Time": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user blasts the target with power that distorts even time. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.dragon
    },
    "Rock Blast": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user hurls hard rocks at the target. Two to five rocks are launched in a row.",
        "dmg": 25,
        "pp": 10,
        "type": Types.rock
    },
    "Rock Climb": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 90,
        "pp": 20,
        "type": Types.normal
    },
    "Rock Polish": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user polishes its body to reduce drag. This sharply raises the Speed stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.rock
    },
    "Rock Slide": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
        "dmg": 75,
        "pp": 10,
        "type": Types.rock
    },
    "Rock Smash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks with a punch. This may also lower the target's Defense stat.",
        "dmg": 40,
        "pp": 15,
        "type": Types.fighting
    },
    "Rock Throw": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user picks up and throws a small rock at the target to attack.",
        "dmg": 50,
        "pp": 15,
        "type": Types.rock
    },
    "Rock Tomb": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "Boulders are hurled at the target. This also lowers the target's Speed stat by preventing its movement.",
        "dmg": 60,
        "pp": 15,
        "type": Types.rock
    },
    "Rock Wrecker": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user launches a huge boulder at the target to attack. The user can't move on the next turn.",
        "dmg": 150,
        "pp": 5,
        "type": Types.rock
    },
    "Role Play": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user mimics the target completely, copying the target's Ability.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Rolling Kick": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 15,
        "type": Types.fighting
    },
    "Rollout": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user continually rolls into the target over five turns. It becomes more powerful each time it hits.",
        "dmg": 30,
        "pp": 20,
        "type": Types.rock
    },
    "Roost": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lands and rests its body. This move restores the user's HP by up to half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.flying
    },
    "Rototiller": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ground
    },
    "Round": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with a song. Others can join in the Round to increase the power of the attack.",
        "dmg": 60,
        "pp": 15,
        "type": Types.normal
    },
    "Sacred Fire": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fire
    },
    "Sacred Sword": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by slicing with a long horn. The target's stat changes don't affect this attack's damage.",
        "dmg": 90,
        "pp": 15,
        "type": Types.fighting
    },
    "Safeguard": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a protective field that prevents status conditions for five turns.",
        "dmg": 0,
        "pp": 25,
        "type": Types.normal
    },
    "Sand Attack": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "Sand is hurled in the target's face, reducing the target's accuracy.",
        "dmg": 0,
        "pp": 15,
        "type": Types.ground
    },
    "Sand Tomb": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user traps the target inside a harshly raging sandstorm for four to five turns.",
        "dmg": 35,
        "pp": 15,
        "type": Types.ground
    },
    "Sandstorm": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A five-turn sandstorm is summoned to hurt all combatants except Rock, Ground, and Steel types. It raises the Sp. Def stat of Rock types.",
        "dmg": 0,
        "pp": 10,
        "type": Types.rock
    },
    "Sappy Seed": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 100,
        "pp": 10,
        "type": Types.grass
    },
    "Savage Spin-Out": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.bug
    },
    "Scald": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user shoots boiling hot water at its target. This may also leave the target with a burn.",
        "dmg": 80,
        "pp": 15,
        "type": Types.water
    },
    "Scale Shot": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user attacks by shooting scales two to five times in a row. This move boosts the user's Speed stat but lowers its Defense stat.",
        "dmg": 25,
        "pp": 20,
        "type": Types.dragon
    },
    "Scary Face": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user frightens the target with a scary face to harshly lower its Speed stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Scorching Sands": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user throws scorching sand at the target to attack. This may also leave the target with a burn.",
        "dmg": 70,
        "pp": 10,
        "type": Types.ground
    },
    "Scratch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Hard, pointed, sharp claws rake the target to inflict damage.",
        "dmg": 40,
        "pp": 35,
        "type": Types.normal
    },
    "Screech": {
        "acc": 85,
        "cat": Categories.status,
        "desc": "An earsplitting screech harshly lowers the target's Defense stat.",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Searing Shot": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
        "dmg": 100,
        "pp": 5,
        "type": Types.fire
    },
    "Searing Sunraze Smash": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 200,
        "pp": 1,
        "type": Types.steel
    },
    "Secret Power": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 20,
        "type": Types.normal
    },
    "Secret Sword": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user cuts with its long horn. The odd power contained in the horn does physical damage to the target.",
        "dmg": 85,
        "pp": 10,
        "type": Types.fighting
    },
    "Seed Bomb": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams a barrage of hard-shelled seeds down on the target from above.",
        "dmg": 80,
        "pp": 15,
        "type": Types.grass
    },
    "Seed Flare": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat.",
        "dmg": 120,
        "pp": 5,
        "type": Types.grass
    },
    "Seismic Toss": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
        "dmg": 0,
        "pp": 20,
        "type": Types.fighting
    },
    "Self-Destruct": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks everything around it by causing an explosion. The user faints upon using this move.",
        "dmg": 200,
        "pp": 5,
        "type": Types.normal
    },
    "Shadow Ball": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user hurls a shadowy blob at the target. This may also lower the target's Sp. Def stat.",
        "dmg": 80,
        "pp": 15,
        "type": Types.ghost
    },
    "Shadow Bone": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target's Defense stat.",
        "dmg": 85,
        "pp": 10,
        "type": Types.ghost
    },
    "Shadow Claw": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
        "dmg": 70,
        "pp": 15,
        "type": Types.ghost
    },
    "Shadow Force": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user disappears, then strikes the target on the next turn. This move hits even if the target protects itself.",
        "dmg": 120,
        "pp": 5,
        "type": Types.ghost
    },
    "Shadow Punch": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "The user throws a punch from the shadows. This attack never misses.",
        "dmg": 60,
        "pp": 20,
        "type": Types.ghost
    },
    "Shadow Sneak": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user extends its shadow and attacks the target from behind. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.ghost
    },
    "Sharpen": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Shattered Psyche": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.psychic
    },
    "Sheer Cold": {
        "acc": 30,
        "cat": Categories.special,
        "desc": "The target faints instantly. It's less likely to hit the target if it's used by Pokémon other than Ice types.",
        "dmg": 0,
        "pp": 5,
        "type": Types.ice
    },
    "Shell Side Arm": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move inflicts physical or special damage, whichever will be more effective. This may also poison the target.",
        "dmg": 90,
        "pp": 10,
        "type": Types.Poison
    },
    "Shell Smash": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user breaks its shell, which lowers Defense and Sp. Def stats but sharply raises its Attack, Sp. Atk, and Speed stats.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Shell Trap": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on opposing Pokémon.",
        "dmg": 150,
        "pp": 5,
        "type": Types.fire
    },
    "Shift Gear": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user rotates its gears, raising its Attack stat and sharply raising its Speed stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.steel
    },
    "Shock Wave": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "The user strikes the target with a quick jolt of electricity. This attack never misses.",
        "dmg": 60,
        "pp": 20,
        "type": Types.electric
    },
    "Shore Up": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user regains up to half of its max HP. It restores more HP in a sandstorm.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ground
    },
    "Signal Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 75,
        "pp": 15,
        "type": Types.bug
    },
    "Silver Wind": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 5,
        "type": Types.bug
    },
    "Simple Beam": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user's mysterious psychic wave changes the target's Ability to Simple.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Sing": {
        "acc": 55,
        "cat": Categories.status,
        "desc": "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Sinister Arrow Raid": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 180,
        "pp": 1,
        "type": Types.ghost
    },
    "Sizzly Slide": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 20,
        "type": Types.fire
    },
    "Sketch": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "It enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.",
        "dmg": 0,
        "pp": 1,
        "type": Types.normal
    },
    "Skill Swap": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user employs its psychic power to exchange Abilities with the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Skitter Smack": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user skitters behind the target to attack. This also lowers the target's Sp. Atk stat.",
        "dmg": 70,
        "pp": 10,
        "type": Types.bug
    },
    "Skull Bash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
        "dmg": 130,
        "pp": 10,
        "type": Types.normal
    },
    "Sky Attack": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "A second-turn attack move where critical hits land more easily. This may also make the target flinch.",
        "dmg": 140,
        "pp": 5,
        "type": Types.flying
    },
    "Sky Drop": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 60,
        "pp": 10,
        "type": Types.flying
    },
    "Sky Uppercut": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 85,
        "pp": 15,
        "type": Types.fighting
    },
    "Slack Off": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user slacks off, restoring its own HP by up to half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Slam": {
        "acc": 75,
        "cat": Categories.physical,
        "desc": "The target is slammed with a long tail, vines, or the like to inflict damage.",
        "dmg": 80,
        "pp": 20,
        "type": Types.normal
    },
    "Slash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is attacked with a slash of claws or blades. Critical hits land more easily.",
        "dmg": 70,
        "pp": 20,
        "type": Types.normal
    },
    "Sleep Powder": {
        "acc": 75,
        "cat": Categories.status,
        "desc": "The user scatters a big cloud of sleep-inducing dust around the target.",
        "dmg": 0,
        "pp": 15,
        "type": Types.grass
    },
    "Sleep Talk": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "While it is asleep, the user randomly uses one of the moves it knows.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Sludge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
        "dmg": 65,
        "pp": 20,
        "type": Types.Poison
    },
    "Sludge Bomb": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
        "dmg": 90,
        "pp": 10,
        "type": Types.Poison
    },
    "Sludge Wave": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit.",
        "dmg": 95,
        "pp": 10,
        "type": Types.Poison
    },
    "Smack Down": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user throws a stone or similar projectile to attack the target. A flying Pokémon will fall to the ground when it's hit.",
        "dmg": 50,
        "pp": 15,
        "type": Types.rock
    },
    "Smart Strike": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "The user stabs the target with a sharp horn. This attack never misses.",
        "dmg": 70,
        "pp": 10,
        "type": Types.steel
    },
    "Smelling Salts": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 10,
        "type": Types.normal
    },
    "Smog": {
        "acc": 70,
        "cat": Categories.special,
        "desc": "The target is attacked with a discharge of filthy gases. This may also poison the target.",
        "dmg": 30,
        "pp": 20,
        "type": Types.Poison
    },
    "Smokescreen": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Snap Trap": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user snares the target in a snap trap for four to five turns.",
        "dmg": 35,
        "pp": 15,
        "type": Types.grass
    },
    "Snarl": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user yells as if it's ranting about something, which lowers the Sp. Atk stats of opposing Pokémon.",
        "dmg": 55,
        "pp": 15,
        "type": Types.dark
    },
    "Snatch": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Snipe Shot": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target.",
        "dmg": 80,
        "pp": 15,
        "type": Types.water
    },
    "Snore": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
        "dmg": 50,
        "pp": 15,
        "type": Types.normal
    },
    "Soak": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user shoots a torrent of water at the target and changes the target's type to Water.",
        "dmg": 0,
        "pp": 20,
        "type": Types.water
    },
    "Soft-Boiled": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores its own HP by up to half of its max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Solar Beam": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
        "dmg": 120,
        "pp": 10,
        "type": Types.grass
    },
    "Solar Blade": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
        "dmg": 125,
        "pp": 10,
        "type": Types.grass
    },
    "Sonic Boom": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Soul-Stealing 7-Star Strike": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 195,
        "pp": 1,
        "type": Types.ghost
    },
    "Spacial Rend": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user tears the target along with the space around it. Critical hits land more easily.",
        "dmg": 100,
        "pp": 5,
        "type": Types.dragon
    },
    "Spark": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user throws an electrically charged tackle at the target. This may also leave the target with paralysis.",
        "dmg": 65,
        "pp": 20,
        "type": Types.electric
    },
    "Sparkling Aria": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be healed by the touch of these bubbles.",
        "dmg": 90,
        "pp": 10,
        "type": Types.water
    },
    "Sparkly Swirl": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 120,
        "pp": 5,
        "type": Types.fairy
    },
    "Spectral Thief": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user hides in the target's shadow, steals the target's stat boosts, and then attacks.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ghost
    },
    "Speed Swap": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user exchanges Speed stats with the target.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Spider Web": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 10,
        "type": Types.bug
    },
    "Spike Cannon": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 20,
        "pp": 15,
        "type": Types.normal
    },
    "Spikes": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lays a trap of spikes at the opposing team's feet. The trap hurts Pokémon that switch into battle.",
        "dmg": 0,
        "pp": 20,
        "type": Types.ground
    },
    "Spiky Shield": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "In addition to protecting the user from attacks, this move also damages any attacker that makes direct contact.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Spirit Break": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks the target with so much force that it could break the target's spirit. This also lowers the target's Sp. Atk stat.",
        "dmg": 75,
        "pp": 15,
        "type": Types.fairy
    },
    "Spirit Shackle": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks while simultaneously stitching the target's shadow to the ground to prevent the target from escaping.",
        "dmg": 80,
        "pp": 10,
        "type": Types.ghost
    },
    "Spit Up": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the move's power.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Spite": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.",
        "dmg": 0,
        "pp": 10,
        "type": Types.ghost
    },
    "Splash": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user just flops and splashes around to no effect at all...",
        "dmg": 0,
        "pp": 40,
        "type": Types.normal
    },
    "Splintered Stormshards": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 190,
        "pp": 1,
        "type": Types.rock
    },
    "Splishy Splash": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 90,
        "pp": 15,
        "type": Types.water
    },
    "Spore": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user scatters bursts of spores that induce sleep.",
        "dmg": 0,
        "pp": 15,
        "type": Types.grass
    },
    "Spotlight": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Stealth Rock": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lays a trap of levitating stones around the opposing team. The trap hurts opposing Pokémon that switch into battle.",
        "dmg": 0,
        "pp": 20,
        "type": Types.rock
    },
    "Steam Eruption": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user immerses the target in superheated steam. This may also leave the target with a burn.",
        "dmg": 110,
        "pp": 5,
        "type": Types.water
    },
    "Steamroller": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 65,
        "pp": 20,
        "type": Types.bug
    },
    "Steel Beam": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user fires a beam of steel that it collected from its entire body. This also damages the user.",
        "dmg": 140,
        "pp": 5,
        "type": Types.steel
    },
    "Steel Roller": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks while destroying the terrain. This move fails when the ground hasn't turned into a terrain.",
        "dmg": 130,
        "pp": 5,
        "type": Types.steel
    },
    "Steel Wing": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The target is hit with wings of steel. This may also raise the user's Defense stat.",
        "dmg": 70,
        "pp": 25,
        "type": Types.steel
    },
    "Sticky Web": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user weaves a sticky net around the opposing team, which lowers their Speed stats upon switching into battle.",
        "dmg": 0,
        "pp": 20,
        "type": Types.bug
    },
    "Stockpile": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user charges up power and raises both its Defense and Sp. Def stats. The move can be used three times.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Stoked Sparksurfer": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 175,
        "pp": 1,
        "type": Types.electric
    },
    "Stomp": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is stomped with a big foot. This may also make the target flinch.",
        "dmg": 65,
        "pp": 20,
        "type": Types.normal
    },
    "Stomping Tantrum": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "Driven by frustration, the user attacks the target. If the user's previous move has failed, the power of this move doubles.",
        "dmg": 75,
        "pp": 10,
        "type": Types.ground
    },
    "Stone Edge": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
        "dmg": 100,
        "pp": 5,
        "type": Types.rock
    },
    "Stored Power": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with stored power. The more the user's stats are raised, the greater the move's power.",
        "dmg": 20,
        "pp": 10,
        "type": Types.psychic
    },
    "Storm Throw": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user strikes the target with a fierce blow. This attack always results in a critical hit.",
        "dmg": 60,
        "pp": 10,
        "type": Types.fighting
    },
    "Strange Steam": {
        "acc": 95,
        "cat": Categories.special,
        "desc": "The user attacks the target by emitting steam. This may also confuse the target.",
        "dmg": 90,
        "pp": 10,
        "type": Types.fairy
    },
    "Strength": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is slugged with a punch thrown at maximum power.",
        "dmg": 80,
        "pp": 15,
        "type": Types.normal
    },
    "Strength Sap": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user restores its HP by the same amount as the target's Attack stat. It also lowers the target's Attack stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "String Shot": {
        "acc": 95,
        "cat": Categories.status,
        "desc": "Opposing Pokémon are bound with silk blown from the user's mouth that harshly lowers the Speed stat.",
        "dmg": 0,
        "pp": 40,
        "type": Types.bug
    },
    "Struggle": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This attack is used in desperation only if the user has no PP. It also damages the user a little.",
        "dmg": 50,
        "pp": 1,
        "type": Types.normal
    },
    "Struggle Bug": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "While resisting, the user attacks opposing Pokémon. This lowers the Sp. Atk stats of those hit.",
        "dmg": 50,
        "pp": 20,
        "type": Types.bug
    },
    "Stuff Cheeks": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user eats its held Berry, then sharply raises its Defense stat.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Stun Spore": {
        "acc": 75,
        "cat": Categories.status,
        "desc": "The user scatters a cloud of numbing powder that paralyzes the target.",
        "dmg": 0,
        "pp": 30,
        "type": Types.grass
    },
    "Submission": {
        "acc": 80,
        "cat": Categories.physical,
        "desc": "The user grabs the target and recklessly dives for the ground. This also damages the user a little.",
        "dmg": 80,
        "pp": 20,
        "type": Types.fighting
    },
    "Substitute": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Subzero Slammer": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.ice
    },
    "Sucker Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move enables the user to attack first. This move fails if the target is not readying an attack.",
        "dmg": 70,
        "pp": 5,
        "type": Types.dark
    },
    "Sunny Day": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.",
        "dmg": 0,
        "pp": 5,
        "type": Types.fire
    },
    "Sunsteel Strike": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams into the target with the force of a meteor. This move can be used on the target regardless of its Abilities.",
        "dmg": 100,
        "pp": 5,
        "type": Types.steel
    },
    "Super Fang": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Superpower": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks the target with great power. However, this also lowers the user's Attack and Defense stats.",
        "dmg": 120,
        "pp": 5,
        "type": Types.fighting
    },
    "Supersonic": {
        "acc": 55,
        "cat": Categories.status,
        "desc": "The user generates odd sound waves from its body that confuse the target.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Supersonic Skystrike": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.flying
    },
    "Surf": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks everything around it by swamping its surroundings with a giant wave.",
        "dmg": 90,
        "pp": 15,
        "type": Types.water
    },
    "Surging Strikes": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user, having mastered the Water style, strikes the target with a flowing motion three times in a row. This attack always results in a critical hit.",
        "dmg": 25,
        "pp": 5,
        "type": Types.water
    },
    "Swagger": {
        "acc": 85,
        "cat": Categories.status,
        "desc": "The user enrages and confuses the target. However, this also sharply raises the target's Attack stat.",
        "dmg": 0,
        "pp": 15,
        "type": Types.normal
    },
    "Swallow": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The power stored using the move Stockpile is absorbed by the user to heal its HP. Storing more power heals more HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Sweet Kiss": {
        "acc": 75,
        "cat": Categories.status,
        "desc": "The user kisses the target with a sweet, angelic cuteness that causes confusion.",
        "dmg": 0,
        "pp": 10,
        "type": Types.fairy
    },
    "Sweet Scent": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "A sweet scent that harshly lowers opposing Pokémon's evasiveness.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Swift": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "Star-shaped rays are shot at opposing Pokémon. This attack never misses.",
        "dmg": 60,
        "pp": 20,
        "type": Types.normal
    },
    "Switcheroo": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user trades held items with the target faster than the eye can follow.",
        "dmg": 0,
        "pp": 10,
        "type": Types.dark
    },
    "Swords Dance": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Synchronoise": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 120,
        "pp": 10,
        "type": Types.psychic
    },
    "Synthesis": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
        "dmg": 0,
        "pp": 5,
        "type": Types.grass
    },
    "Tackle": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A physical attack in which the user charges and slams into the target with its whole body.",
        "dmg": 40,
        "pp": 35,
        "type": Types.normal
    },
    "Tail Glow": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.bug
    },
    "Tail Slap": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "The user attacks by striking the target with its hard tail. It hits the target two to five times in a row.",
        "dmg": 25,
        "pp": 10,
        "type": Types.normal
    },
    "Tail Whip": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user wags its tail cutely, making opposing Pokémon less wary and lowering their Defense stats.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Tailwind": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user whips up a turbulent whirlwind that ups the Speed stats of the user and its allies for four turns.",
        "dmg": 0,
        "pp": 15,
        "type": Types.flying
    },
    "Take Down": {
        "acc": 85,
        "cat": Categories.physical,
        "desc": "A reckless, full-body charge attack for slamming into the target. This also damages the user a little.",
        "dmg": 90,
        "pp": 20,
        "type": Types.normal
    },
    "Tar Shot": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user pours sticky tar over the target, lowering the target's Speed stat. The target becomes weaker to Fire-type moves.",
        "dmg": 0,
        "pp": 15,
        "type": Types.rock
    },
    "Taunt": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The target is taunted into a rage that allows it to use only attack moves for three turns.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dark
    },
    "Tearful Look": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user gets teary eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Teatime": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user has teatime with all the Pokémon in the battle. Each Pokémon eats its held Berry.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Techno Blast": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user fires a beam of light at its target. The move's type changes depending on the Drive the user holds.",
        "dmg": 120,
        "pp": 5,
        "type": Types.normal
    },
    "Tectonic Rage": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.ground
    },
    "Teeter Dance": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user performs a wobbly dance that confuses the Pokémon around it.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Telekinesis": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.psychic
    },
    "Teleport": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user switches places with a party Pokémon in waiting, if any. If a wild Pokémon uses this move, it flees.",
        "dmg": 0,
        "pp": 20,
        "type": Types.psychic
    },
    "Terrain Pulse": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user utilizes the power of the terrain to attack. This move's type and power changes depending on the terrain when it's used.",
        "dmg": 50,
        "pp": 10,
        "type": Types.normal
    },
    "Thief": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.",
        "dmg": 60,
        "pp": 25,
        "type": Types.dark
    },
    "Thousand Arrows": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move also hits opposing Pokémon that are in the air. Those Pokémon are knocked down to the ground.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ground
    },
    "Thousand Waves": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks with a wave that crawls along the ground. Those it hits can't flee from battle.",
        "dmg": 90,
        "pp": 10,
        "type": Types.ground
    },
    "Thrash": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
        "dmg": 120,
        "pp": 10,
        "type": Types.normal
    },
    "Throat Chop": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user attacks the target's throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.",
        "dmg": 80,
        "pp": 15,
        "type": Types.dark
    },
    "Thunder": {
        "acc": 70,
        "cat": Categories.special,
        "desc": "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
        "dmg": 110,
        "pp": 10,
        "type": Types.electric
    },
    "Thunder Cage": {
        "acc": 90,
        "cat": Categories.special,
        "desc": "The user traps the target in a cage of sparking electricity for four to five turns.",
        "dmg": 80,
        "pp": 15,
        "type": Types.electric
    },
    "Thunder Fang": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis.",
        "dmg": 65,
        "pp": 15,
        "type": Types.electric
    },
    "Thunder Punch": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is punched with an electrified fist. This may also leave the target with paralysis.",
        "dmg": 75,
        "pp": 15,
        "type": Types.electric
    },
    "Thunder Shock": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A jolt of electricity crashes down on the target to inflict damage. This may also leave the target with paralysis.",
        "dmg": 40,
        "pp": 30,
        "type": Types.electric
    },
    "Thunder Wave": {
        "acc": 90,
        "cat": Categories.status,
        "desc": "The user launches a weak jolt of electricity that paralyzes the target.",
        "dmg": 0,
        "pp": 20,
        "type": Types.electric
    },
    "Thunderbolt": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A strong electric blast crashes down on the target. This may also leave the target with paralysis.",
        "dmg": 90,
        "pp": 15,
        "type": Types.electric
    },
    "Thunderous Kick": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user overwhelms the target with lightning-like movement before delivering a kick. This also lowers the target's Defense stat.",
        "dmg": 90,
        "pp": 10,
        "type": Types.fighting
    },
    "Tickle": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user tickles the target into laughing, reducing its Attack and Defense stats.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Topsy-Turvy": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",
        "dmg": 0,
        "pp": 20,
        "type": Types.dark
    },
    "Torment": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user torments and enrages the target, making it incapable of using the same move twice in a row.",
        "dmg": 0,
        "pp": 15,
        "type": Types.dark
    },
    "Toxic": {
        "acc": 90,
        "cat": Categories.status,
        "desc": "A move that leaves the target badly poisoned. Its poison damage worsens every turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.Poison
    },
    "Toxic Spikes": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Toxic Thread": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user shoots poisonous threads to poison the target and lower the target's Speed stat.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Transform": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user transforms into a copy of the target right down to having the same move set.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Tri Attack": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user strikes with a simultaneous three-beam attack. This may also burn, freeze, or paralyze the target.",
        "dmg": 80,
        "pp": 10,
        "type": Types.normal
    },
    "Trick": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user catches the target off guard and swaps its held item with its own.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Trick Room": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a bizarre area in which slower Pokémon get to move first for five turns.",
        "dmg": 0,
        "pp": 5,
        "type": Types.psychic
    },
    "Trick-or-Treat": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "The user takes the target trick-or-treating. This adds Ghost type to the target's type.",
        "dmg": 0,
        "pp": 20,
        "type": Types.ghost
    },
    "Triple Axel": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
        "dmg": 20,
        "pp": 10,
        "type": Types.ice
    },
    "Triple Kick": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
        "dmg": 10,
        "pp": 10,
        "type": Types.fighting
    },
    "Trop Kick": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user lands an intense kick of tropical origins on the target. This also lowers the target's Attack stat.",
        "dmg": 70,
        "pp": 15,
        "type": Types.grass
    },
    "Trump Card": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "Twineedle": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 25,
        "pp": 20,
        "type": Types.bug
    },
    "Twinkle Tackle": {
        "acc": 101,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 1,
        "type": Types.fairy
    },
    "Twister": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user whips up a vicious tornado to tear at opposing Pokémon. This may also make them flinch.",
        "dmg": 40,
        "pp": 20,
        "type": Types.dragon
    },
    "U-turn": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
        "dmg": 70,
        "pp": 20,
        "type": Types.bug
    },
    "Uproar": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep.",
        "dmg": 90,
        "pp": 10,
        "type": Types.normal
    },
    "V-create": {
        "acc": 95,
        "cat": Categories.physical,
        "desc": "With a hot flame on its forehead, the user hurls itself at its target. This lowers the user's Defense, Sp. Def, and Speed stats.",
        "dmg": 180,
        "pp": 5,
        "type": Types.fire
    },
    "Vacuum Wave": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.",
        "dmg": 40,
        "pp": 30,
        "type": Types.fighting
    },
    "Veevee Volley": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Venom Drench": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target.",
        "dmg": 0,
        "pp": 20,
        "type": Types.Poison
    },
    "Venoshock": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned.",
        "dmg": 65,
        "pp": 10,
        "type": Types.Poison
    },
    "Vine Whip": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is struck with slender, whiplike vines to inflict damage.",
        "dmg": 45,
        "pp": 25,
        "type": Types.grass
    },
    "Vise Grip": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is gripped and squeezed from both sides to inflict damage.",
        "dmg": 55,
        "pp": 30,
        "type": Types.normal
    },
    "Vital Throw": {
        "acc": 101,
        "cat": Categories.physical,
        "desc": "The user attacks last. In return, this throw move never misses.",
        "dmg": 70,
        "pp": 10,
        "type": Types.fighting
    },
    "Volt Switch": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
        "dmg": 70,
        "pp": 20,
        "type": Types.electric
    },
    "Volt Tackle": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user electrifies itself and charges the target. This also damages the user quite a lot. This attack may leave the target with paralysis.",
        "dmg": 120,
        "pp": 15,
        "type": Types.electric
    },
    "Wake-Up Slap": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 70,
        "pp": 10,
        "type": Types.fighting
    },
    "Water Gun": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The target is blasted with a forceful shot of water.",
        "dmg": 40,
        "pp": 25,
        "type": Types.water
    },
    "Water Pledge": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "A column of water hits the target. When used with its fire equivalent, its power increases and a rainbow appears.",
        "dmg": 80,
        "pp": 10,
        "type": Types.water
    },
    "Water Pulse": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
        "dmg": 60,
        "pp": 20,
        "type": Types.water
    },
    "Water Shuriken": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user hits the target with throwing stars two to five times in a row. This move always goes first.",
        "dmg": 15,
        "pp": 20,
        "type": Types.water
    },
    "Water Sport": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 15,
        "type": Types.water
    },
    "Water Spout": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "The user spouts water to damage opposing Pokémon. The lower the user's HP, the lower the move's power.",
        "dmg": 150,
        "pp": 5,
        "type": Types.water
    },
    "Waterfall": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user charges at the target and may make it flinch.",
        "dmg": 80,
        "pp": 15,
        "type": Types.water
    },
    "Weather Ball": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This attack move varies in power and type depending on the weather.",
        "dmg": 50,
        "pp": 10,
        "type": Types.normal
    },
    "Whirlpool": {
        "acc": 85,
        "cat": Categories.special,
        "desc": "The user traps the target in a violent swirling whirlpool for four to five turns.",
        "dmg": 35,
        "pp": 15,
        "type": Types.water
    },
    "Whirlwind": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The target is blown away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
        "dmg": 0,
        "pp": 20,
        "type": Types.normal
    },
    "Wicked Blow": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user, having mastered the Dark style, strikes the target with a fierce blow. This attack always results in a critical hit.",
        "dmg": 80,
        "pp": 5,
        "type": Types.dark
    },
    "Wide Guard": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user and its allies are protected from wide-ranging attacks for one turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.rock
    },
    "Wild Charge": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
        "dmg": 90,
        "pp": 15,
        "type": Types.electric
    },
    "Will-O-Wisp": {
        "acc": 85,
        "cat": Categories.status,
        "desc": "The user shoots a sinister flame at the target to inflict a burn.",
        "dmg": 0,
        "pp": 15,
        "type": Types.fire
    },
    "Wing Attack": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The target is struck with large, imposing wings spread wide to inflict damage.",
        "dmg": 60,
        "pp": 35,
        "type": Types.flying
    },
    "Wish": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "One turn after this move is used, the user's or its replacement's HP is restored by half the user's max HP.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Withdraw": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user withdraws its body into its hard shell, raising its Defense stat.",
        "dmg": 0,
        "pp": 40,
        "type": Types.water
    },
    "Wonder Room": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns.",
        "dmg": 0,
        "pp": 10,
        "type": Types.psychic
    },
    "Wood Hammer": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slams its rugged body into the target to attack. This also damages the user quite a lot.",
        "dmg": 120,
        "pp": 15,
        "type": Types.grass
    },
    "Work Up": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user is roused, and its Attack and Sp. Atk stats increase.",
        "dmg": 0,
        "pp": 30,
        "type": Types.normal
    },
    "Worry Seed": {
        "acc": 100,
        "cat": Categories.status,
        "desc": "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia.",
        "dmg": 0,
        "pp": 10,
        "type": Types.grass
    },
    "Wrap": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "A long body, vines, or the like are used to wrap and squeeze the target for four to five turns.",
        "dmg": 15,
        "pp": 20,
        "type": Types.normal
    },
    "Wring Out": {
        "acc": 100,
        "cat": Categories.special,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 0,
        "pp": 5,
        "type": Types.normal
    },
    "X-Scissor": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
        "dmg": 80,
        "pp": 15,
        "type": Types.bug
    },
    "Yawn": {
        "acc": 101,
        "cat": Categories.status,
        "desc": "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.",
        "dmg": 0,
        "pp": 10,
        "type": Types.normal
    },
    "Zap Cannon": {
        "acc": 50,
        "cat": Categories.special,
        "desc": "The user fires an electric blast like a cannon to inflict damage and cause paralysis.",
        "dmg": 120,
        "pp": 5,
        "type": Types.electric
    },
    "Zen Headbutt": {
        "acc": 90,
        "cat": Categories.physical,
        "desc": "The user focuses its willpower to its head and attacks the target. This may also make the target flinch.",
        "dmg": 80,
        "pp": 15,
        "type": Types.psychic
    },
    "Zing Zap": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
        "dmg": 80,
        "pp": 10,
        "type": Types.electric
    },
    "Zippy Zap": {
        "acc": 100,
        "cat": Categories.physical,
        "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
        "dmg": 80,
        "pp": 10,
        "type": Types.electric
    }
}