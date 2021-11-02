const { Categories, Types } = require('./general');

 exports.Moves = {
    "Accelerock": {
      "type": "rock",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user smashes into the target at high speed. This move always goes first.",
      "name": "Accelerock"
    },
    "AcidDownpour": {
      "type": "poison",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Acid Downpour"
    },
    "Acrobatics": {
      "type": "flying",
      "cat": "physical",
      "pp": 15,
      "dmg": 55,
      "acc": 100,
      "desc": "The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.",
      "name": "Acrobatics"
    },
    "AerialAce": {
      "type": "flying",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user confounds the target with speed, then slashes. This attack never misses.",
      "name": "Aerial Ace"
    },
    "AllOutPummeling": {
      "type": "fighting",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "All-Out Pummeling"
    },
    "AnchorShot": {
      "type": "steel",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
      "name": "Anchor Shot"
    },
    "AquaJet": {
      "type": "water",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
      "name": "Aqua Jet"
    },
    "AquaTail": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
      "name": "Aqua Tail"
    },
    "ArmThrust": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 15,
      "acc": 100,
      "desc": "The user lets loose a flurry of open-palmed arm thrusts that hit two to five times in a row.",
      "name": "Arm Thrust"
    },
    "Assurance": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "If the target has already taken some damage in the same turn, this attack's power is doubled.",
      "name": "Assurance"
    },
    "Astonish": {
      "type": "ghost",
      "cat": "physical",
      "pp": 15,
      "dmg": 30,
      "acc": 100,
      "desc": "The user attacks the target while shouting in a startling fashion. This may also make the target flinch.",
      "name": "Astonish"
    },
    "AttackOrder": {
      "type": "bug",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user calls out its underlings to pummel the target. Critical hits land more easily.",
      "name": "Attack Order"
    },
    "AuraWheel": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 110,
      "acc": 100,
      "desc": "Morpeko attacks and raises its Speed with the energy stored in its cheeks. This move's type changes depending on the user's form.",
      "name": "Aura Wheel"
    },
    "Avalanche": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The power of this attack move is doubled if the user has been hurt by the target in the same turn.",
      "name": "Avalanche"
    },
    "Barrage": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Barrage"
    },
    "BeakBlast": {
      "type": "flying",
      "cat": "physical",
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn.",
      "name": "Beak Blast"
    },
    "BeatUp": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",
      "name": "Beat Up"
    },
    "BehemothBash": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user becomes a gigantic shield and slams into the target. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Behemoth Bash"
    },
    "BehemothBlade": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user becomes a gigantic sword and cuts the target. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Behemoth Blade"
    },
    "Bide": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bide"
    },
    "Bind": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
      "name": "Bind"
    },
    "Bite": {
      "type": "dark",
      "cat": "physical",
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is bitten with viciously sharp fangs. This may also make the target flinch.",
      "name": "Bite"
    },
    "BlackHoleEclipse": {
      "type": "dark",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Black Hole Eclipse"
    },
    "BlazeKick": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 90,
      "desc": "The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn.",
      "name": "Blaze Kick"
    },
    "BloomDoom": {
      "type": "grass",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bloom Doom"
    },
    "BodyPress": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks by slamming its body into the target. The higher the user's Defense, the more damage it can inflict on the target.",
      "name": "Body Press"
    },
    "BodySlam": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 85,
      "acc": 100,
      "desc": "The user drops onto the target with its full body weight. This may also leave the target with paralysis.",
      "name": "Body Slam"
    },
    "BoltBeak": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user stabs the target with its electrified beak. If the user attacks before the target, the power of this move is doubled.",
      "name": "Bolt Beak"
    },
    "BoltStrike": {
      "type": "electric",
      "cat": "physical",
      "pp": 5,
      "dmg": 130,
      "acc": 85,
      "desc": "The user surrounds itself with a great amount of electricity and charges its target. This may also leave the target with paralysis.",
      "name": "Bolt Strike"
    },
    "BoneClub": {
      "type": "ground",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bone Club"
    },
    "BoneRush": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 25,
      "acc": 90,
      "desc": "The user strikes the target with a hard bone two to five times in a row.",
      "name": "Bone Rush"
    },
    "Bonemerang": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 50,
      "acc": 90,
      "desc": "The user throws the bone it holds. The bone loops around to hit the target twiceâ€”coming and going.",
      "name": "Bonemerang"
    },
    "Bounce": {
      "type": "flying",
      "cat": "physical",
      "pp": 5,
      "dmg": 85,
      "acc": 85,
      "desc": "The user bounces up high, then drops on the target on the second turn. This may also leave the target with paralysis.",
      "name": "Bounce"
    },
    "BranchPoke": {
      "type": "grass",
      "cat": "physical",
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks the target by poking it with a sharply pointed branch.",
      "name": "Branch Poke"
    },
    "BraveBird": {
      "type": "flying",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot.",
      "name": "Brave Bird"
    },
    "BreakingSwipe": {
      "type": "dragon",
      "cat": "physical",
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user swings its tough tail wildly and attacks opposing Pokémon. This also lowers their Attack stats.",
      "name": "Breaking Swipe"
    },
    "BreakneckBlitz": {
      "type": "normal",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Breakneck Blitz"
    },
    "BrickBreak": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks with a swift chop. It can also break barriers, such as Light Screen and Reflect.",
      "name": "Brick Break"
    },
    "BrutalSwing": {
      "type": "dark",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user swings its body around violently to inflict damage on everything in its vicinity.",
      "name": "Brutal Swing"
    },
    "BugBite": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
      "name": "Bug Bite"
    },
    "Bulldoze": {
      "type": "ground",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit.",
      "name": "Bulldoze"
    },
    "BulletPunch": {
      "type": "steel",
      "cat": "physical",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user strikes the target with tough punches as fast as bullets. This move always goes first.",
      "name": "Bullet Punch"
    },
    "BulletSeed": {
      "type": "grass",
      "cat": "physical",
      "pp": 30,
      "dmg": 25,
      "acc": 100,
      "desc": "The user forcefully shoots seeds at the target two to five times in a row.",
      "name": "Bullet Seed"
    },
    "Catastropika": {
      "type": "electric",
      "cat": "physical",
      "pp": 1,
      "dmg": 210,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Catastropika"
    },
    "ChipAway": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Chip Away"
    },
    "CircleThrow": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Circle Throw"
    },
    "Clamp": {
      "type": "water",
      "cat": "physical",
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Clamp"
    },
    "CloseCombat": {
      "type": "fighting",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user fights the target up close without guarding itself. This also lowers the user's Defense and Sp. Def stats.",
      "name": "Close Combat"
    },
    "CometPunch": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 18,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Comet Punch"
    },
    "Constrict": {
      "type": "normal",
      "cat": "physical",
      "pp": 35,
      "dmg": 10,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Constrict"
    },
    "ContinentalCrush": {
      "type": "rock",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Continental Crush"
    },
    "CorkscrewCrash": {
      "type": "steel",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Corkscrew Crash"
    },
    "Counter": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A retaliation move that counters any physical attack, inflicting double the damage taken.",
      "name": "Counter"
    },
    "Covet": {
      "type": "normal",
      "cat": "physical",
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user endearingly approaches the target, then steals the target's held item.",
      "name": "Covet"
    },
    "Crabhammer": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The target is hammered with a large pincer. Critical hits land more easily.",
      "name": "Crabhammer"
    },
    "CrossChop": {
      "type": "fighting",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 80,
      "desc": "The user delivers a double chop with its forearms crossed. Critical hits land more easily.",
      "name": "Cross Chop"
    },
    "CrossPoison": {
      "type": "poison",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "A slashing attack with a poisonous blade that may also poison the target. Critical hits land more easily.",
      "name": "Cross Poison"
    },
    "Crunch": {
      "type": "dark",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.",
      "name": "Crunch"
    },
    "CrushClaw": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 95,
      "desc": "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat.",
      "name": "Crush Claw"
    },
    "CrushGrip": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is crushed with great force. The more HP the target has left, the greater this move's power.",
      "name": "Crush Grip"
    },
    "Cut": {
      "type": "normal",
      "cat": "physical",
      "pp": 30,
      "dmg": 50,
      "acc": 95,
      "desc": "The target is cut with a scythe or claw.",
      "name": "Cut"
    },
    "DarkestLariat": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user swings both arms and hits the target. The target's stat changes don't affect this attack's damage.",
      "name": "Darkest Lariat"
    },
    "DevastatingDrake": {
      "type": "dragon",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Devastating Drake"
    },
    "DiamondStorm": {
      "type": "rock",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply raise the user's Defense stat.",
      "name": "Diamond Storm"
    },
    "Dig": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user burrows into the ground, then attacks on the next turn.",
      "name": "Dig"
    },
    "Dive": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "Diving on the first turn, the user floats up and attacks on the next turn.",
      "name": "Dive"
    },
    "DizzyPunch": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Dizzy Punch"
    },
    "DoubleHit": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 35,
      "acc": 90,
      "desc": "The user slams the target with a long tail, vines, or a tentacle. The target is hit twice in a row.",
      "name": "Double Hit"
    },
    "DoubleIronBash": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "The user rotates, centering the hex nut in its chest, and then strikes with its arms twice in a row. This may also make the target flinch.",
      "name": "Double Iron Bash"
    },
    "DoubleKick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 30,
      "dmg": 30,
      "acc": 100,
      "desc": "The target is quickly kicked twice in succession using both feet.",
      "name": "Double Kick"
    },
    "DoubleSlap": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 15,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Double Slap"
    },
    "DoubleEdge": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "A reckless, life-risking tackle in which the user rushes the target. This also damages the user quite a lot.",
      "name": "Double-Edge"
    },
    "DragonAscent": {
      "type": "flying",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "After soaring upward, the user attacks its target by dropping out of the sky at high speeds. But it lowers its own Defense and Sp. Def stats in the process.",
      "name": "Dragon Ascent"
    },
    "DragonClaw": {
      "type": "dragon",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slashes the target with huge sharp claws.",
      "name": "Dragon Claw"
    },
    "DragonDarts": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user attacks twice using Dreepy. If there are two targets, this move hits each target once.",
      "name": "Dragon Darts"
    },
    "DragonHammer": {
      "type": "dragon",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user uses its body like a hammer to attack the target and inflict damage.",
      "name": "Dragon Hammer"
    },
    "DragonRush": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 75,
      "desc": "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
      "name": "Dragon Rush"
    },
    "DragonTail": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Dragon Tail"
    },
    "DrainPunch": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "An energy-draining punch. The user's HP is restored by half the damage taken by the target.",
      "name": "Drain Punch"
    },
    "Drill Peck": {
      "type": "flying",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "A corkscrewing attack that strikes the target with a sharp beak acting as a drill.",
      "name": "Drill Peck"
    },
    "Drill Run": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 95,
      "desc": "The user crashes into its target while rotating its body like a drill. Critical hits land more easily.",
      "name": "Drill Run"
    },
    "Drum Beating": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user plays its drum, controlling the drum's roots to attack the target. This also lowers the target's Speed stat.",
      "name": "Drum Beating"
    },
    "Dual Chop": {
      "type": "dragon",
      "cat": "physical",
      "pp": 15,
      "dmg": 40,
      "acc": 90,
      "desc": "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.",
      "name": "Dual Chop"
    },
    "Dual Wingbeat": {
      "type": "flying",
      "cat": "physical",
      "pp": 10,
      "dmg": 40,
      "acc": 90,
      "desc": "The user slams the target with its wings. The target is hit twice in a row.",
      "name": "Dual Wingbeat"
    },
    "Dynamic Punch": {
      "type": "fighting",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 50,
      "desc": "The user punches the target with full, concentrated power. This confuses the target if it hits.",
      "name": "Dynamic Punch"
    },
    "Earthquake": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user sets off an earthquake that strikes every Pokémon around it.",
      "name": "Earthquake"
    },
    "Egg Bomb": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 75,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Egg Bomb"
    },
    "Endeavor": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This attack move cuts down the target's HP to equal the user's HP.",
      "name": "Endeavor"
    },
    "Explosion": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 250,
      "acc": 100,
      "desc": "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
      "name": "Explosion"
    },
    "Extreme Speed": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user charges the target at blinding speed. This move always goes first.",
      "name": "Extreme Speed"
    },
    "Facade": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
      "name": "Facade"
    },
    "Fake Out": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 40,
      "acc": 100,
      "desc": "This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.",
      "name": "Fake Out"
    },
    "False Surrender": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 101,
      "desc": "The user pretends to bow its head, but then it stabs the target with its disheveled hair. This attack never misses.",
      "name": "False Surrender"
    },
    "False Swipe": {
      "type": "normal",
      "cat": "physical",
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.",
      "name": "False Swipe"
    },
    "Feint": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 30,
      "acc": 100,
      "desc": "This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.",
      "name": "Feint"
    },
    "Feint Attack": {
      "type": "dark",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Feint Attack"
    },
    "Fell Stinger": {
      "type": "bug",
      "cat": "physical",
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "When the user knocks out a target with this move, the user's Attack stat rises drastically.",
      "name": "Fell Stinger"
    },
    "Fire Fang": {
      "type": "fire",
      "cat": "physical",
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.",
      "name": "Fire Fang"
    },
    "Fire Lash": {
      "type": "fire",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes the target with a burning lash. This also lowers the target's Defense stat.",
      "name": "Fire Lash"
    },
    "Fire Punch": {
      "type": "fire",
      "cat": "physical",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with a fiery fist. This may also leave the target with a burn.",
      "name": "Fire Punch"
    },
    "First Impression": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "Although this move has great power, it only works the first turn each time the user enters battle.",
      "name": "First Impression"
    },
    "Fishious Rend": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user rends the target with its hard gills. If the user attacks before the target, the power of this move is doubled.",
      "name": "Fishious Rend"
    },
    "Fissure": {
      "type": "ground",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",
      "name": "Fissure"
    },
    "Flail": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user flails about aimlessly to attack. The less HP the user has, the greater the move's power.",
      "name": "Flail"
    },
    "Flame Charge": {
      "type": "fire",
      "cat": "physical",
      "pp": 20,
      "dmg": 50,
      "acc": 100,
      "desc": "Cloaking itself in flame, the user attacks the target. Then, building up more power, the user raises its Speed stat.",
      "name": "Flame Charge"
    },
    "Flame Wheel": {
      "type": "fire",
      "cat": "physical",
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user cloaks itself in fire and charges at the target. This may also leave the target with a burn.",
      "name": "Flame Wheel"
    },
    "Flare Blitz": {
      "type": "fire",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.",
      "name": "Flare Blitz"
    },
    "Fling": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user flings its held item at the target to attack. This move's power and effects depend on the item.",
      "name": "Fling"
    },
    "Flip Turn": {
      "type": "water",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "Flip Turn"
    },
    "Floaty Fall": {
      "type": "flying",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Floaty Fall"
    },
    "Fly": {
      "type": "flying",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 95,
      "desc": "The user flies up into the sky and then strikes its target on the next turn.",
      "name": "Fly"
    },
    "Flying Press": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 95,
      "desc": "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.",
      "name": "Flying Press"
    },
    "Focus Punch": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 150,
      "acc": 100,
      "desc": "The user focuses its mind before launching a punch. This move fails if the user is hit before it is used.",
      "name": "Focus Punch"
    },
    "Force Palm": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is attacked with a shock wave. This may also leave the target with paralysis.",
      "name": "Force Palm"
    },
    "Foul Play": {
      "type": "dark",
      "cat": "physical",
      "pp": 15,
      "dmg": 95,
      "acc": 100,
      "desc": "The user turns the target's power against it. The higher the target's Attack stat, the greater the damage it deals.",
      "name": "Foul Play"
    },
    "Freeze Shock": {
      "type": "ice",
      "cat": "physical",
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "On the second turn, the user hits the target with electrically charged ice. This may also leave the target with paralysis.",
      "name": "Freeze Shock"
    },
    "Frustration": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Frustration"
    },
    "Fury Attack": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "The target is jabbed repeatedly with a horn or beak two to five times in a row.",
      "name": "Fury Attack"
    },
    "Fury Cutter": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 95,
      "desc": "The target is slashed with scythes or claws. This attack becomes more powerful if it hits in succession.",
      "name": "Fury Cutter"
    },
    "Fury Swipes": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 18,
      "acc": 80,
      "desc": "The target is raked with sharp claws or scythes quickly two to five times in a row.",
      "name": "Fury Swipes"
    },
    "Fusion Bolt": {
      "type": "electric",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user throws down a giant lightning bolt. This move's power is increased when influenced by an enormous flame.",
      "name": "Fusion Bolt"
    },
    "G-Max Befuddle": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Bug-type attack that Gigantamax Butterfree use. This move inflicts the poisoned, paralyzed, or asleep status condition on opponents.",
      "name": "G-Max Befuddle"
    },
    "G-Max Cannonade": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Blastoise use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Cannonade"
    },
    "G-Max Centiferno": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Centiskorch use. This move traps opponents in flames for four to five turns.",
      "name": "G-Max Centiferno"
    },
    "G-Max Chi Strike": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fighting-type attack that Gigantamax Machamp use. This move raises the chance of critical hits.",
      "name": "G-Max Chi Strike"
    },
    "G-Max Cuddle": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Eevee use. This move infatuates opponents.",
      "name": "G-Max Cuddle"
    },
    "G-Max Depletion": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dragon-type attack that Gigantamax Duraludon use. Reduces the PP of the last move used.",
      "name": "G-Max Depletion"
    },
    "G-Max Drum Solo": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Rillaboom use. This move can be used on the target regardless of its Abilities.",
      "name": "G-Max Drum Solo"
    },
    "G-Max Finale": {
      "type": "fairy",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fairy-type attack that Gigantamax Alcremie use. This move heals the HP of allies.",
      "name": "G-Max Finale"
    },
    "G-Max Fireball": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Cinderace use. This move can be used on the target regardless of its Abilities",
      "name": "G-Max Fireball"
    },
    "G-Max Foam Burst": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Kingler use. This move harshly lowers the Speed of opponents.",
      "name": "G-Max Foam Burst"
    },
    "G-Max Gold Rush": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Meowth use. This move confuses opponents and also earns extra money.",
      "name": "G-Max Gold Rush"
    },
    "G-Max Gravitas": {
      "type": "psychic",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Psychic-type attack that Gigantamax Orbeetle use. This move changes gravity for five turns.",
      "name": "G-Max Gravitas"
    },
    "G-Max Hydrosnipe": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Inteleon use. This move can be used on the target regardless of its Abilities.",
      "name": "G-Max Hydrosnipe"
    },
    "G-Max Malodor": {
      "type": "poison",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Poison-type attack that Gigantamax Garbodor use. This move poisons opponents.",
      "name": "G-Max Malodor"
    },
    "G-Max Meltdown": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Steel-type attack that Gigantamax Melmetal use. This move makes opponents incapable of using the same move twice in a row.",
      "name": "G-Max Meltdown"
    },
    "G-Max One Blow": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dark-type attack that Gigantamax Urshifu use. This single-strike move can ignore Max Guard.",
      "name": "G-Max One Blow"
    },
    "G-Max Rapid Flow": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Urshifu use. This rapid-strike move can ignore Max Guard.",
      "name": "G-Max Rapid Flow"
    },
    "G-Max Replenish": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Snorlax use. This move restores Berries that have been eaten.",
      "name": "G-Max Replenish"
    },
    "G-Max Resonance": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Ice-type attack that Gigantamax Lapras use. This move reduces the damage received for five turns.",
      "name": "G-Max Resonance"
    },
    "G-Max Sandblast": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Ground-type attack that Gigantamax Sandaconda use. Opponents are trapped in a raging sandstorm for four to five turns.",
      "name": "G-Max Sandblast"
    },
    "G-Max Smite": {
      "type": "fairy",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fairy-type attack that Gigantamax Hatterene use. This move confuses opponents.",
      "name": "G-Max Smite"
    },
    "G-Max Snooze": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dark-type attack that Gigantamax Grimmsnarl use. The user lets loose a huge yawn that lulls the targets into falling asleep on the next turn.",
      "name": "G-Max Snooze"
    },
    "G-Max Steelsurge": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Steel-type attack that Gigantamax Copperajah use. This move scatters sharp spikes around the field.",
      "name": "G-Max Steelsurge"
    },
    "G-Max Stonesurge": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Drednaw use. This move scatters sharp rocks around the field.",
      "name": "G-Max Stonesurge"
    },
    "G-Max Stun Shock": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Electric-type attack that Gigantamax Toxtricity use. This move poisons or paralyzes opponents.",
      "name": "G-Max Stun Shock"
    },
    "G-Max Sweetness": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Appletun use. This move heals the status conditions of allies.",
      "name": "G-Max Sweetness"
    },
    "G-Max Tartness": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Flapple use. This move reduces the opponentsâ€™ evasiveness.",
      "name": "G-Max Tartness"
    },
    "G-Max Terror": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Ghost-type attack that Gigantamax Gengar use. This Pokémon steps on the opposing Pokémonâ€™s shadow to prevent them from escaping.",
      "name": "G-Max Terror"
    },
    "G-Max Vine Lash": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Venusaur use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Vine Lash"
    },
    "G-Max Volcalith": {
      "type": "rock",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Rock-type attack that Gigantamax Coalossal use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Volcalith"
    },
    "G-Max Volt Crash": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Electric-type attack that Gigantamax Pikachu use. This move paralyzes opponents.",
      "name": "G-Max Volt Crash"
    },
    "G-Max Wildfire": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Wildfire"
    },
    "G-Max Wind Rage": {
      "type": "flying",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Flying-type attack that Gigantamax Corviknight use. This move removes the effects of moves like Reflect and Light Screen.",
      "name": "G-Max Wind Rage"
    },
    "Gear Grind": {
      "type": "steel",
      "cat": "physical",
      "pp": 15,
      "dmg": 50,
      "acc": 85,
      "desc": "The user attacks by throwing steel gears at its target twice.",
      "name": "Gear Grind"
    },
    "Giga Impact": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user charges at the target using every bit of its power. The user can't move on the next turn.",
      "name": "Giga Impact"
    },
    "Gigavolt Havoc": {
      "type": "electric",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Gigavolt Havoc"
    },
    "Glacial Lance": {
      "type": "ice",
      "cat": "physical",
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokémon.",
      "name": "Glacial Lance"
    },
    "Grassy Glide": {
      "type": "grass",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "Gliding on the ground, the user attacks the target. This move always goes first on Grassy Terrain.",
      "name": "Grassy Glide"
    },
    "Grav Apple": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user inflicts damage by dropping an apple from high above. This also lowers the target's Defense stat.",
      "name": "Grav Apple"
    },
    "Guillotine": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "A vicious, tearing attack with big pincers. The target faints instantly if this attack hits.",
      "name": "Guillotine"
    },
    "Gunk Shot": {
      "type": "poison",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 80,
      "desc": "The user shoots filthy garbage at the target to attack. This may also poison the target.",
      "name": "Gunk Shot"
    },
    "Gyro Ball": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user tackles the target with a high-speed spin. The slower the user compared to the target, the greater the move's power.",
      "name": "Gyro Ball"
    },
    "Hammer Arm": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
      "name": "Hammer Arm"
    },
    "Head Charge": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user charges its head into its target, using its powerful guard hair. This also damages the user a little.",
      "name": "Head Charge"
    },
    "Head Smash": {
      "type": "rock",
      "cat": "physical",
      "pp": 5,
      "dmg": 150,
      "acc": 80,
      "desc": "The user attacks the target with a hazardous, full-power headbutt. This also damages the user terribly.",
      "name": "Head Smash"
    },
    "Headbutt": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.",
      "name": "Headbutt"
    },
    "Heart Stamp": {
      "type": "psychic",
      "cat": "physical",
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heart Stamp"
    },
    "Heat Crash": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",
      "name": "Heat Crash"
    },
    "Heavy Slam": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user slams into the target with its heavy body. The more the user outweighs the target, the greater the move's power.",
      "name": "Heavy Slam"
    },
    "High Horsepower": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 95,
      "acc": 95,
      "desc": "The user fiercely attacks the target using its entire body.",
      "name": "High Horsepower"
    },
    "High Jump Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 130,
      "acc": 90,
      "desc": "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.",
      "name": "High Jump Kick"
    },
    "Hold Back": {
      "type": "normal",
      "cat": "physical",
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user holds back when it attacks, and the target is left with at least 1 HP.",
      "name": "Hold Back"
    },
    "Horn Attack": {
      "type": "normal",
      "cat": "physical",
      "pp": 25,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is jabbed with a sharply pointed horn to inflict damage.",
      "name": "Horn Attack"
    },
    "Horn Drill": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",
      "name": "Horn Drill"
    },
    "Horn Leech": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user drains the target's energy with its horns. The user's HP is restored by half the damage taken by the target.",
      "name": "Horn Leech"
    },
    "Hydro Vortex": {
      "type": "water",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Hydro Vortex"
    },
    "Hyper Fang": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
      "name": "Hyper Fang"
    },
    "Hyperspace Fury": {
      "type": "dark",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 101,
      "desc": "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. But the user's Defense stat falls.",
      "name": "Hyperspace Fury"
    },
    "Ice Ball": {
      "type": "ice",
      "cat": "physical",
      "pp": 20,
      "dmg": 30,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ice Ball"
    },
    "Ice Fang": {
      "type": "ice",
      "cat": "physical",
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen.",
      "name": "Ice Fang"
    },
    "Ice Hammer": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
      "name": "Ice Hammer"
    },
    "Ice Punch": {
      "type": "ice",
      "cat": "physical",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with an icy fist. This may also leave the target frozen.",
      "name": "Ice Punch"
    },
    "Ice Shard": {
      "type": "ice",
      "cat": "physical",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
      "name": "Ice Shard"
    },
    "Icicle Crash": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 90,
      "desc": "The user attacks by harshly dropping large icicles onto the target. This may also make the target flinch.",
      "name": "Icicle Crash"
    },
    "Icicle Spear": {
      "type": "ice",
      "cat": "physical",
      "pp": 30,
      "dmg": 25,
      "acc": 100,
      "desc": "The user launches sharp icicles at the target two to five times in a row.",
      "name": "Icicle Spear"
    },
    "Inferno Overdrive": {
      "type": "fire",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Inferno Overdrive"
    },
    "Iron Head": {
      "type": "steel",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slams the target with its steel-hard head. This may also make the target flinch.",
      "name": "Iron Head"
    },
    "Iron Tail": {
      "type": "steel",
      "cat": "physical",
      "pp": 15,
      "dmg": 100,
      "acc": 75,
      "desc": "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.",
      "name": "Iron Tail"
    },
    "Jaw Lock": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move prevents the user and the target from switching out until either of them faints. The effect goes away if either of the Pokémon leaves the field.",
      "name": "Jaw Lock"
    },
    "Jump Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Jump Kick"
    },
    "Karate Chop": {
      "type": "fighting",
      "cat": "physical",
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Karate Chop"
    },
    "Knock Off": {
      "type": "dark",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user slaps down the target's held item, and that item can't be used in that battle. The move does more damage if the target has a held item.",
      "name": "Knock Off"
    },
    "Land's Wrath": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user gathers the energy of the land and focuses that power on opposing Pokémon to damage them.",
      "name": "Land's Wrath"
    },
    "Lash Out": {
      "type": "dark",
      "cat": "physical",
      "pp": 5,
      "dmg": 75,
      "acc": 100,
      "desc": "The user lashes out to vent its frustration toward the target. If the user's stats were lowered during this turn, the power of this move is doubled.",
      "name": "Lash Out"
    },
    "Last Resort": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 140,
      "acc": 100,
      "desc": "This move can be used only after the user has used all the other moves it knows in the battle.",
      "name": "Last Resort"
    },
    "Leaf Blade": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
      "name": "Leaf Blade"
    },
    "Leafage": {
      "type": "grass",
      "cat": "physical",
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks by pelting the target with leaves.",
      "name": "Leafage"
    },
    "Leech Life": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.",
      "name": "Leech Life"
    },
    "Let's Snuggle Forever": {
      "type": "fairy",
      "cat": "physical",
      "pp": 1,
      "dmg": 190,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Let's Snuggle Forever"
    },
    "Lick": {
      "type": "ghost",
      "cat": "physical",
      "pp": 30,
      "dmg": 30,
      "acc": 100,
      "desc": "The target is licked with a long tongue, causing damage. This may also leave the target with paralysis.",
      "name": "Lick"
    },
    "Liquidation": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat.",
      "name": "Liquidation"
    },
    "Low Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.",
      "name": "Low Kick"
    },
    "Low Sweep": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
      "name": "Low Sweep"
    },
    "Lunge": {
      "type": "bug",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat.",
      "name": "Lunge"
    },
    "Mach Punch": {
      "type": "fighting",
      "cat": "physical",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user throws a punch at blinding speed. This move always goes first.",
      "name": "Mach Punch"
    },
    "Magnet Bomb": {
      "type": "steel",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Magnet Bomb"
    },
    "Magnitude": {
      "type": "ground",
      "cat": "physical",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Magnitude"
    },
    "Malicious Moonsault": {
      "type": "dark",
      "cat": "physical",
      "pp": 1,
      "dmg": 180,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Malicious Moonsault"
    },
    "Max Airstream": {
      "type": "flying",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Flying-type attack Dynamax Pokémon use. This raises ally Pokémon's Speed stats.",
      "name": "Max Airstream"
    },
    "Max Darkness": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Dark-type attack Dynamax Pokémon use. This lowers the target's Sp. Def stat.",
      "name": "Max Darkness"
    },
    "Max Flare": {
      "type": "fire",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fire-type attack Dynamax Pokémon use. The user intensifies the sun for five turns.",
      "name": "Max Flare"
    },
    "Max Flutterby": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Bug-type attack Dynamax Pokémon use. This lowers the target's Sp. Atk stat.",
      "name": "Max Flutterby"
    },
    "Max Geyser": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Water-type attack Dynamax Pokémon use. The user summons a heavy rain that falls for five turns.",
      "name": "Max Geyser"
    },
    "Max Hailstorm": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is an Ice-type attack Dynamax Pokémon use. The user summons a hailstorm lasting five turns.",
      "name": "Max Hailstorm"
    },
    "Max Knuckle": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fighting-type attack Dynamax Pokémon use. This raises ally Pokémon's Attack stats.",
      "name": "Max Knuckle"
    },
    "Max Lightning": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is an Electric-type attack Dynamax Pokémon use. The user turns the ground into Electric Terrain for five turns.",
      "name": "Max Lightning"
    },
    "Max Mindstorm": {
      "type": "psychic",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Psychic-type attack Dynamax Pokémon use. The user turns the ground into Psychic Terrain for five turns.",
      "name": "Max Mindstorm"
    },
    "Max Ooze": {
      "type": "poison",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Poison-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Atk stats.",
      "name": "Max Ooze"
    },
    "Max Overgrowth": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Grass-type attack Dynamax Pokémon use. The user turns the ground into Grassy Terrain for five turns.",
      "name": "Max Overgrowth"
    },
    "Max Phantasm": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Ghost-type attack Dynamax Pokémon use. This lowers the target's Defense stat.",
      "name": "Max Phantasm"
    },
    "Max Quake": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Ground-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Def stats.",
      "name": "Max Quake"
    },
    "Max Rockfall": {
      "type": "rock",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Rock-type attack Dynamax Pokémon use. The user summons a sandstorm lasting five turns.",
      "name": "Max Rockfall"
    },
    "Max Starfall": {
      "type": "fairy",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fairy-type attack Dynamax Pokémon use. The user turns the ground into Misty Terrain for five turns.",
      "name": "Max Starfall"
    },
    "Max Steelspike": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Steel-type attack Dynamax Pokémon use. This raises ally Pokémon's Defense stats.",
      "name": "Max Steelspike"
    },
    "Max Strike": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Normal-type attack Dynamax Pokémon use. This lowers the target's Speed stat.",
      "name": "Max Strike"
    },
    "Max Wyrmwind": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Dragon-type attack Dynamax Pokémon use. This lowers the target's Attack stat.",
      "name": "Max Wyrmwind"
    },
    "Mega Kick": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 75,
      "desc": "The target is attacked by a kick launched with muscle-packed power.",
      "name": "Mega Kick"
    },
    "Mega Punch": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 85,
      "desc": "The target is slugged by a punch thrown with muscle-packed power.",
      "name": "Mega Punch"
    },
    "Megahorn": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "Using its tough and impressive horn, the user rams into the target with no letup.",
      "name": "Megahorn"
    },
    "Metal Burst": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user retaliates with much greater force against the opponent that last inflicted damage on it.",
      "name": "Metal Burst"
    },
    "Metal Claw": {
      "type": "steel",
      "cat": "physical",
      "pp": 35,
      "dmg": 50,
      "acc": 95,
      "desc": "The target is raked with steel claws. This may also raise the user's Attack stat.",
      "name": "Metal Claw"
    },
    "Meteor Assault": {
      "type": "fighting",
      "cat": "physical",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks wildly with its thick leek. The user can't move on the next turn, because the force of this move makes it stagger.",
      "name": "Meteor Assault"
    },
    "Meteor Mash": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The target is hit with a hard punch fired like a meteor. This may also raise the user's Attack stat.",
      "name": "Meteor Mash"
    },
    "Multi-Attack": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "Cloaking itself in high energy, the user slams into the target. The memory held determines the move's type.",
      "name": "Multi-Attack"
    },
    "Natural Gift": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Natural Gift"
    },
    "Needle Arm": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Needle Arm"
    },
    "Never-Ending Nightmare": {
      "type": "ghost",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Never-Ending Nightmare"
    },
    "Night Slash": {
      "type": "dark",
      "cat": "physical",
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user slashes the target the instant an opportunity arises. Critical hits land more easily.",
      "name": "Night Slash"
    },
    "Nuzzle": {
      "type": "electric",
      "cat": "physical",
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.",
      "name": "Nuzzle"
    },
    "Outrage": {
      "type": "dragon",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
      "name": "Outrage"
    },
    "Pay Day": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.",
      "name": "Pay Day"
    },
    "Payback": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user stores power, then attacks. If the user moves after the target, this attack's power will be doubled.",
      "name": "Payback"
    },
    "Peck": {
      "type": "flying",
      "cat": "physical",
      "pp": 35,
      "dmg": 35,
      "acc": 100,
      "desc": "The target is jabbed with a sharply pointed beak or horn.",
      "name": "Peck"
    },
    "Petal Blizzard": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user stirs up a violent petal blizzard and attacks everything around it.",
      "name": "Petal Blizzard"
    },
    "Phantom Force": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.",
      "name": "Phantom Force"
    },
    "Pin Missile": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 25,
      "acc": 95,
      "desc": "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
      "name": "Pin Missile"
    },
    "Plasma Fists": {
      "type": "electric",
      "cat": "physical",
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves.",
      "name": "Plasma Fists"
    },
    "Play Rough": {
      "type": "fairy",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The user plays rough with the target and attacks it. This may also lower the target's Attack stat.",
      "name": "Play Rough"
    },
    "Pluck": {
      "type": "flying",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user pecks the target. If the target is holding a Berry, the user eats it and gains its effect.",
      "name": "Pluck"
    },
    "Poison Fang": {
      "type": "poison",
      "cat": "physical",
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "The user bites the target with toxic fangs. This may also leave the target badly poisoned.",
      "name": "Poison Fang"
    },
    "Poison Jab": {
      "type": "poison",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The target is stabbed with a tentacle, arm, or the like steeped in poison. This may also poison the target.",
      "name": "Poison Jab"
    },
    "Poison Sting": {
      "type": "poison",
      "cat": "physical",
      "pp": 35,
      "dmg": 15,
      "acc": 100,
      "desc": "The user stabs the target with a poisonous stinger. This may also poison the target.",
      "name": "Poison Sting"
    },
    "Poison Tail": {
      "type": "poison",
      "cat": "physical",
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "The user hits the target with its tail. This may also poison the target. Critical hits land more easily.",
      "name": "Poison Tail"
    },
    "Poltergeist": {
      "type": "ghost",
      "cat": "physical",
      "pp": 5,
      "dmg": 110,
      "acc": 90,
      "desc": "The user attacks the target by controlling the target's item. The move fails if the target doesn't have an item.",
      "name": "Poltergeist"
    },
    "Pound": {
      "type": "normal",
      "cat": "physical",
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is physically pounded with a long tail, a foreleg, or the like.",
      "name": "Pound"
    },
    "Power Trip": {
      "type": "dark",
      "cat": "physical",
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user boasts its strength and attacks the target. The more the user's stats are raised, the greater the move's power.",
      "name": "Power Trip"
    },
    "Power Whip": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "The user violently whirls its vines, tentacles, or the like to harshly lash the target.",
      "name": "Power Whip"
    },
    "Power-Up Punch": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat.",
      "name": "Power-Up Punch"
    },
    "Precipice Blades": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone.",
      "name": "Precipice Blades"
    },
    "Present": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 0,
      "acc": 90,
      "desc": "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however.",
      "name": "Present"
    },
    "Psychic Fangs": {
      "type": "psychic",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
      "name": "Psychic Fangs"
    },
    "Psycho Cut": {
      "type": "psychic",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
      "name": "Psycho Cut"
    },
    "Pulverizing Pancake": {
      "type": "normal",
      "cat": "physical",
      "pp": 1,
      "dmg": 210,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pulverizing Pancake"
    },
    "Punishment": {
      "type": "dark",
      "cat": "physical",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Punishment"
    },
    "Pursuit": {
      "type": "dark",
      "cat": "physical",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pursuit"
    },
    "Pyro Ball": {
      "type": "fire",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 90,
      "desc": "The user attacks by igniting a small stone and launching it as a fiery ball at the target. This may also leave the target with a burn.",
      "name": "Pyro Ball"
    },
    "Quick Attack": {
      "type": "normal",
      "cat": "physical",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
      "name": "Quick Attack"
    },
    "Rage": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rage"
    },
    "RapidSpin": {
      "type": "normal",
      "cat": "physical",
      "pp": 40,
      "dmg": 50,
      "acc": 100,
      "desc": "A spin attack that can also eliminate such moves as Bind, Wrap, and Leech Seed. This also raises the user's Speed stat.",
      "name": "Rapid Spin"
    },
    "RazorLeaf": {
      "type": "grass",
      "cat": "physical",
      "pp": 25,
      "dmg": 55,
      "acc": 95,
      "desc": "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.",
      "name": "Razor Leaf"
    },
    "Razor Shell": {
      "type": "water",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 95,
      "desc": "The user cuts its target with sharp shells. This may also lower the target's Defense stat.",
      "name": "Razor Shell"
    },
    "Retaliate": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move's power is increased.",
      "name": "Retaliate"
    },
    "Return": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Return"
    },
    "Revenge": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "This attack move's power is doubled if the user has been hurt by the opponent in the same turn.",
      "name": "Revenge"
    },
    "Reversal": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "An all-out attack that becomes more powerful the less HP the user has.",
      "name": "Reversal"
    },
    "Rock Blast": {
      "type": "rock",
      "cat": "physical",
      "pp": 10,
      "dmg": 25,
      "acc": 90,
      "desc": "The user hurls hard rocks at the target. Two to five rocks are launched in a row.",
      "name": "Rock Blast"
    },
    "Rock Climb": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 90,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rock Climb"
    },
    "Rock Slide": {
      "type": "rock",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 90,
      "desc": "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
      "name": "Rock Slide"
    },
    "Rock Smash": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks with a punch. This may also lower the target's Defense stat.",
      "name": "Rock Smash"
    },
    "Rock Throw": {
      "type": "rock",
      "cat": "physical",
      "pp": 15,
      "dmg": 50,
      "acc": 90,
      "desc": "The user picks up and throws a small rock at the target to attack.",
      "name": "Rock Throw"
    },
    "Rock Tomb": {
      "type": "rock",
      "cat": "physical",
      "pp": 15,
      "dmg": 60,
      "acc": 95,
      "desc": "Boulders are hurled at the target. This also lowers the target's Speed stat by preventing its movement.",
      "name": "Rock Tomb"
    },
    "Rock Wrecker": {
      "type": "rock",
      "cat": "physical",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user launches a huge boulder at the target to attack. The user can't move on the next turn.",
      "name": "Rock Wrecker"
    },
    "Rolling Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 60,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rolling Kick"
    },
    "Rollout": {
      "type": "rock",
      "cat": "physical",
      "pp": 20,
      "dmg": 30,
      "acc": 90,
      "desc": "The user continually rolls into the target over five turns. It becomes more powerful each time it hits.",
      "name": "Rollout"
    },
    "Sacred Fire": {
      "type": "fire",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn.",
      "name": "Sacred Fire"
    },
    "Sacred Sword": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks by slicing with a long horn. The target's stat changes don't affect this attack's damage.",
      "name": "Sacred Sword"
    },
    "Sand Tomb": {
      "type": "ground",
      "cat": "physical",
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The user traps the target inside a harshly raging sandstorm for four to five turns.",
      "name": "Sand Tomb"
    },
    "Sappy Seed": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sappy Seed"
    },
    "Savage Spin-Out": {
      "type": "bug",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Savage Spin-Out"
    },
    "Scale Shot": {
      "type": "dragon",
      "cat": "physical",
      "pp": 20,
      "dmg": 25,
      "acc": 90,
      "desc": "The user attacks by shooting scales two to five times in a row. This move boosts the user's Speed stat but lowers its Defense stat.",
      "name": "Scale Shot"
    },
    "Scratch": {
      "type": "normal",
      "cat": "physical",
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "Hard, pointed, sharp claws rake the target to inflict damage.",
      "name": "Scratch"
    },
    "Searing Sunraze Smash": {
      "type": "steel",
      "cat": "physical",
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Searing Sunraze Smash"
    },
    "Secret Power": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Secret Power"
    },
    "Seed Bomb": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slams a barrage of hard-shelled seeds down on the target from above.",
      "name": "Seed Bomb"
    },
    "Seismic Toss": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
      "name": "Seismic Toss"
    },
    "Self-Destruct": {
      "type": "normal",
      "cat": "physical",
      "pp": 5,
      "dmg": 200,
      "acc": 100,
      "desc": "The user attacks everything around it by causing an explosion. The user faints upon using this move.",
      "name": "Self-Destruct"
    },
    "Shadow Bone": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target's Defense stat.",
      "name": "Shadow Bone"
    },
    "Shadow Claw": {
      "type": "ghost",
      "cat": "physical",
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
      "name": "Shadow Claw"
    },
    "Shadow Force": {
      "type": "ghost",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user disappears, then strikes the target on the next turn. This move hits even if the target protects itself.",
      "name": "Shadow Force"
    },
    "Shadow Punch": {
      "type": "ghost",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user throws a punch from the shadows. This attack never misses.",
      "name": "Shadow Punch"
    },
    "Shadow Sneak": {
      "type": "ghost",
      "cat": "physical",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user extends its shadow and attacks the target from behind. This move always goes first.",
      "name": "Shadow Sneak"
    },
    "Shattered Psyche": {
      "type": "psychic",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Shattered Psyche"
    },
    "Sinister Arrow Raid": {
      "type": "ghost",
      "cat": "physical",
      "pp": 1,
      "dmg": 180,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sinister Arrow Raid"
    },
    "Sizzly Slide": {
      "type": "fire",
      "cat": "physical",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sizzly Slide"
    },
    "Skitter Smack": {
      "type": "bug",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 90,
      "desc": "The user skitters behind the target to attack. This also lowers the target's Sp. Atk stat.",
      "name": "Skitter Smack"
    },
    "Skull Bash": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 130,
      "acc": 100,
      "desc": "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
      "name": "Skull Bash"
    },
    "Sky Attack": {
      "type": "flying",
      "cat": "physical",
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "A second-turn attack move where critical hits land more easily. This may also make the target flinch.",
      "name": "Sky Attack"
    },
    "Sky Drop": {
      "type": "flying",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sky Drop"
    },
    "Sky Uppercut": {
      "type": "fighting",
      "cat": "physical",
      "pp": 15,
      "dmg": 85,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sky Uppercut"
    },
    "Slam": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 75,
      "desc": "The target is slammed with a long tail, vines, or the like to inflict damage.",
      "name": "Slam"
    },
    "Slash": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The target is attacked with a slash of claws or blades. Critical hits land more easily.",
      "name": "Slash"
    },
    "Smack Down": {
      "type": "rock",
      "cat": "physical",
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "The user throws a stone or similar projectile to attack the target. A flying Pokémon will fall to the ground when it's hit.",
      "name": "Smack Down"
    },
    "Smart Strike": {
      "type": "steel",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 101,
      "desc": "The user stabs the target with a sharp horn. This attack never misses.",
      "name": "Smart Strike"
    },
    "Smelling Salts": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Smelling Salts"
    },
    "Snap Trap": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 35,
      "acc": 100,
      "desc": "The user snares the target in a snap trap for four to five turns.",
      "name": "Snap Trap"
    },
    "Solar Blade": {
      "type": "grass",
      "cat": "physical",
      "pp": 10,
      "dmg": 125,
      "acc": 100,
      "desc": "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
      "name": "Solar Blade"
    },
    "Soul-Stealing 7-Star Strike": {
      "type": "ghost",
      "cat": "physical",
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Soul-Stealing 7-Star Strike"
    },
    "Spark": {
      "type": "electric",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user throws an electrically charged tackle at the target. This may also leave the target with paralysis.",
      "name": "Spark"
    },
    "Spectral Thief": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user hides in the target's shadow, steals the target's stat boosts, and then attacks.",
      "name": "Spectral Thief"
    },
    "Spike Cannon": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 20,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spike Cannon"
    },
    "Spirit Break": {
      "type": "fairy",
      "cat": "physical",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks the target with so much force that it could break the target's spirit. This also lowers the target's Sp. Atk stat.",
      "name": "Spirit Break"
    },
    "Spirit Shackle": {
      "type": "ghost",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks while simultaneously stitching the target's shadow to the ground to prevent the target from escaping.",
      "name": "Spirit Shackle"
    },
    "Splintered Stormshards": {
      "type": "rock",
      "cat": "physical",
      "pp": 1,
      "dmg": 190,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Splintered Stormshards"
    },
    "Steamroller": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Steamroller"
    },
    "Steel Roller": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "The user attacks while destroying the terrain. This move fails when the ground hasn't turned into a terrain.",
      "name": "Steel Roller"
    },
    "Steel Wing": {
      "type": "steel",
      "cat": "physical",
      "pp": 25,
      "dmg": 70,
      "acc": 90,
      "desc": "The target is hit with wings of steel. This may also raise the user's Defense stat.",
      "name": "Steel Wing"
    },
    "Stomp": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is stomped with a big foot. This may also make the target flinch.",
      "name": "Stomp"
    },
    "Stomping Tantrum": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "Driven by frustration, the user attacks the target. If the user's previous move has failed, the power of this move doubles.",
      "name": "Stomping Tantrum"
    },
    "Stone Edge": {
      "type": "rock",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 80,
      "desc": "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
      "name": "Stone Edge"
    },
    "Storm Throw": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The user strikes the target with a fierce blow. This attack always results in a critical hit.",
      "name": "Storm Throw"
    },
    "Strength": {
      "type": "normal",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The target is slugged with a punch thrown at maximum power.",
      "name": "Strength"
    },
    "Struggle": {
      "type": "normal",
      "cat": "physical",
      "pp": 1,
      "dmg": 50,
      "acc": 101,
      "desc": "This attack is used in desperation only if the user has no PP. It also damages the user a little.",
      "name": "Struggle"
    },
    "Submission": {
      "type": "fighting",
      "cat": "physical",
      "pp": 20,
      "dmg": 80,
      "acc": 80,
      "desc": "The user grabs the target and recklessly dives for the ground. This also damages the user a little.",
      "name": "Submission"
    },
    "Subzero Slammer": {
      "type": "ice",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Subzero Slammer"
    },
    "Sucker Punch": {
      "type": "dark",
      "cat": "physical",
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "This move enables the user to attack first. This move fails if the target is not readying an attack.",
      "name": "Sucker Punch"
    },
    "Sunsteel Strike": {
      "type": "steel",
      "cat": "physical",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user slams into the target with the force of a meteor. This move can be used on the target regardless of its Abilities.",
      "name": "Sunsteel Strike"
    },
    "Super Fang": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.",
      "name": "Super Fang"
    },
    "Superpower": {
      "type": "fighting",
      "cat": "physical",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks the target with great power. However, this also lowers the user's Attack and Defense stats.",
      "name": "Superpower"
    },
    "Supersonic Skystrike": {
      "type": "flying",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Supersonic Skystrike"
    },
    "Surging Strikes": {
      "type": "water",
      "cat": "physical",
      "pp": 5,
      "dmg": 25,
      "acc": 100,
      "desc": "The user, having mastered the Water style, strikes the target with a flowing motion three times in a row. This attack always results in a critical hit.",
      "name": "Surging Strikes"
    },
    "Tackle": {
      "type": "normal",
      "cat": "physical",
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "A physical attack in which the user charges and slams into the target with its whole body.",
      "name": "Tackle"
    },
    "Tail Slap": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 25,
      "acc": 85,
      "desc": "The user attacks by striking the target with its hard tail. It hits the target two to five times in a row.",
      "name": "Tail Slap"
    },
    "TakeDown": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 90,
      "acc": 85,
      "desc": "A reckless, full-body charge attack for slamming into the target. This also damages the user a little.",
      "name": "Take Down"
    },
    "Tectonic Rage": {
      "type": "ground",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Tectonic Rage"
    },
    "Thief": {
      "type": "dark",
      "cat": "physical",
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.",
      "name": "Thief"
    },
    "Thousand Arrows": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "This move also hits opposing Pokémon that are in the air. Those Pokémon are knocked down to the ground.",
      "name": "Thousand Arrows"
    },
    "Thousand Waves": {
      "type": "ground",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks with a wave that crawls along the ground. Those it hits can't flee from battle.",
      "name": "Thousand Waves"
    },
    "Thrash": {
      "type": "normal",
      "cat": "physical",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
      "name": "Thrash"
    },
    "Throat Chop": {
      "type": "dark",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target's throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.",
      "name": "Throat Chop"
    },
    "Thunder Fang": {
      "type": "electric",
      "cat": "physical",
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis.",
      "name": "Thunder Fang"
    },
    "Thunder Punch": {
      "type": "electric",
      "cat": "physical",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with an electrified fist. This may also leave the target with paralysis.",
      "name": "Thunder Punch"
    },
    "Thunderous Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user overwhelms the target with lightning-like movement before delivering a kick. This also lowers the target's Defense stat.",
      "name": "Thunderous Kick"
    },
    "Triple Axel": {
      "type": "ice",
      "cat": "physical",
      "pp": 10,
      "dmg": 20,
      "acc": 90,
      "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
      "name": "Triple Axel"
    },
    "Triple Kick": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 10,
      "acc": 90,
      "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
      "name": "Triple Kick"
    },
    "Trop Kick": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user lands an intense kick of tropical origins on the target. This also lowers the target's Attack stat.",
      "name": "Trop Kick"
    },
    "Twineedle": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 25,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Twineedle"
    },
    "Twinkle Tackle": {
      "type": "fairy",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Twinkle Tackle"
    },
    "U-turn": {
      "type": "bug",
      "cat": "physical",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "U-turn"
    },
    "V-create": {
      "type": "fire",
      "cat": "physical",
      "pp": 5,
      "dmg": 180,
      "acc": 95,
      "desc": "With a hot flame on its forehead, the user hurls itself at its target. This lowers the user's Defense, Sp. Def, and Speed stats.",
      "name": "V-create"
    },
    "Veevee Volley": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Veevee Volley"
    },
    "VineWhip": {
      "type": "grass",
      "cat": "physical",
      "pp": 25,
      "dmg": 45,
      "acc": 100,
      "desc": "The target is struck with slender, whiplike vines to inflict damage.",
      "name": "Vine Whip"
    },
    "Vise Grip": {
      "type": "normal",
      "cat": "physical",
      "pp": 30,
      "dmg": 55,
      "acc": 100,
      "desc": "The target is gripped and squeezed from both sides to inflict damage.",
      "name": "Vise Grip"
    },
    "Vital Throw": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 101,
      "desc": "The user attacks last. In return, this throw move never misses.",
      "name": "Vital Throw"
    },
    "Volt Tackle": {
      "type": "electric",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user electrifies itself and charges the target. This also damages the user quite a lot. This attack may leave the target with paralysis.",
      "name": "Volt Tackle"
    },
    "Wake-Up Slap": {
      "type": "fighting",
      "cat": "physical",
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Wake-Up Slap"
    },
    "Waterfall": {
      "type": "water",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user charges at the target and may make it flinch.",
      "name": "Waterfall"
    },
    "Wicked Blow": {
      "type": "dark",
      "cat": "physical",
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user, having mastered the Dark style, strikes the target with a fierce blow. This attack always results in a critical hit.",
      "name": "Wicked Blow"
    },
    "Wild Charge": {
      "type": "electric",
      "cat": "physical",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
      "name": "Wild Charge"
    },
    "Wing Attack": {
      "type": "flying",
      "cat": "physical",
      "pp": 35,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is struck with large, imposing wings spread wide to inflict damage.",
      "name": "Wing Attack"
    },
    "Wood Hammer": {
      "type": "grass",
      "cat": "physical",
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user slams its rugged body into the target to attack. This also damages the user quite a lot.",
      "name": "Wood Hammer"
    },
    "Wrap": {
      "type": "normal",
      "cat": "physical",
      "pp": 20,
      "dmg": 15,
      "acc": 90,
      "desc": "A long body, vines, or the like are used to wrap and squeeze the target for four to five turns.",
      "name": "Wrap"
    },
    "X-Scissor": {
      "type": "bug",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
      "name": "X-Scissor"
    },
    "Zen Headbutt": {
      "type": "psychic",
      "cat": "physical",
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user focuses its willpower to its head and attacks the target. This may also make the target flinch.",
      "name": "Zen Headbutt"
    },
    "Zing Zap": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
      "name": "Zing Zap"
    },
    "Zippy Zap": {
      "type": "electric",
      "cat": "physical",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Zippy Zap"
    },
    "10,000,000 Volt Thunderbolt": {
      "type": "electric",
      "cat": "special",
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "10,000,000 Volt Thunderbolt"
    },
    "Absorb": {
      "type": "grass",
      "cat": "special",
      "pp": 25,
      "dmg": 20,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Absorb"
    },
    "Acid": {
      "type": "poison",
      "cat": "special",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats.",
      "name": "Acid"
    },
    "Acid Spray": {
      "type": "poison",
      "cat": "special",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user spits fluid that works to melt the target. This harshly lowers the target's Sp. Def stat.",
      "name": "Acid Spray"
    },
    "Aeroblast": {
      "type": "flying",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.",
      "name": "Aeroblast"
    },
    "Air Cutter": {
      "type": "flying",
      "cat": "special",
      "pp": 25,
      "dmg": 60,
      "acc": 95,
      "desc": "The user launches razor-like wind to slash opposing Pokémon. Critical hits land more easily.",
      "name": "Air Cutter"
    },
    "Air Slash": {
      "type": "flying",
      "cat": "special",
      "pp": 15,
      "dmg": 75,
      "acc": 95,
      "desc": "The user attacks with a blade of air that slices even the sky. This may also make the target flinch.",
      "name": "Air Slash"
    },
    "Ancient Power": {
      "type": "rock",
      "cat": "special",
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks with a prehistoric power. This may also raise all the user's stats at once.",
      "name": "Ancient Power"
    },
    "Apple Acid": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target with an acidic liquid created from tart apples. This also lowers the target's Sp. Def stat.",
      "name": "Apple Acid"
    },
    "Astral Barrage": {
      "type": "ghost",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks by sending a frightful amount of small ghosts at opposing Pokémon.",
      "name": "Astral Barrage"
    },
    "Aura Sphere": {
      "type": "fighting",
      "cat": "special",
      "pp": 20,
      "dmg": 80,
      "acc": 101,
      "desc": "The user lets loose a blast of aura power from deep within its body at the target. This attack never misses.",
      "name": "Aura Sphere"
    },
    "Aurora Beam": {
      "type": "ice",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.",
      "name": "Aurora Beam"
    },
    "Baddy Bad": {
      "type": "dark",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Baddy Bad"
    },
    "Belch": {
      "type": "poison",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 90,
      "desc": "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move.",
      "name": "Belch"
    },
    "Blast Burn": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is razed by a fiery explosion. The user can't move on the next turn.",
      "name": "Blast Burn"
    },
    "Blizzard": {
      "type": "ice",
      "cat": "special",
      "pp": 5,
      "dmg": 110,
      "acc": 70,
      "desc": "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
      "name": "Blizzard"
    },
    "Blue Flare": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 85,
      "desc": "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn.",
      "name": "Blue Flare"
    },
    "Boomburst": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 140,
      "acc": 100,
      "desc": "The user attacks everything around it with the destructive power of a terrible, explosive sound.",
      "name": "Boomburst"
    },
    "Bouncy Bubble": {
      "type": "water",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bouncy Bubble"
    },
    "Brine": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "If the target's HP is half or less, this attack will hit with double the power.",
      "name": "Brine"
    },
    "Bubble": {
      "type": "water",
      "cat": "special",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bubble"
    },
    "Bubble Beam": {
      "type": "water",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat.",
      "name": "Bubble Beam"
    },
    "Bug Buzz": {
      "type": "bug",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat.",
      "name": "Bug Buzz"
    },
    "Burn Up": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
      "name": "Burn Up"
    },
    "Burning Jealousy": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user attacks with energy from jealousy. This leaves all opposing Pokémon that have had their stats boosted during the turn with a burn.",
      "name": "Burning Jealousy"
    },
    "Buzzy Buzz": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Buzzy Buzz"
    },
    "Charge Beam": {
      "type": "electric",
      "cat": "special",
      "pp": 10,
      "dmg": 50,
      "acc": 90,
      "desc": "The user attacks the target with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat.",
      "name": "Charge Beam"
    },
    "Chatter": {
      "type": "flying",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user attacks the target with sound waves of deafening chatter. This confuses the target.",
      "name": "Chatter"
    },
    "Clanging Scales": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 110,
      "acc": 100,
      "desc": "The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat goes down after the attack.",
      "name": "Clanging Scales"
    },
    "Clangorous Soulblaze": {
      "type": "dragon",
      "cat": "special",
      "pp": 1,
      "dmg": 185,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Clangorous Soulblaze"
    },
    "Clear Smog": {
      "type": "poison",
      "cat": "special",
      "pp": 15,
      "dmg": 50,
      "acc": 101,
      "desc": "The user attacks the target by throwing a clump of special mud. All stat changes are returned to normal.",
      "name": "Clear Smog"
    },
    "Confusion": {
      "type": "psychic",
      "cat": "special",
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "The target is hit by a weak telekinetic force. This may also confuse the target.",
      "name": "Confusion"
    },
    "Core Enforcer": {
      "type": "dragon",
      "cat": "special",
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "If the Pokémon the user has inflicted damage on have already used their moves, this move eliminates the effect of the target's Ability.",
      "name": "Core Enforcer"
    },
    "Dark Pulse": {
      "type": "dark",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.",
      "name": "Dark Pulse"
    },
    "Dazzling Gleam": {
      "type": "fairy",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user damages opposing Pokémon by emitting a powerful flash.",
      "name": "Dazzling Gleam"
    },
    "Disarming Voice": {
      "type": "fairy",
      "cat": "special",
      "pp": 15,
      "dmg": 40,
      "acc": 101,
      "desc": "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses.",
      "name": "Disarming Voice"
    },
    "Discharge": {
      "type": "electric",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
      "name": "Discharge"
    },
    "Doom Desire": {
      "type": "steel",
      "cat": "special",
      "pp": 5,
      "dmg": 140,
      "acc": 100,
      "desc": "Two turns after this move is used, a concentrated bundle of light blasts the target.",
      "name": "Doom Desire"
    },
    "Draco Meteor": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "Comets are summoned down from the sky onto the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Draco Meteor"
    },
    "Dragon Breath": {
      "type": "dragon",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
      "name": "Dragon Breath"
    },
    "Dragon Energy": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "Converting its life-force into power, the user attacks opposing Pokémon. The lower the user's HP, the lower the move's power.",
      "name": "Dragon Energy"
    },
    "Dragon Pulse": {
      "type": "dragon",
      "cat": "special",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The target is attacked with a shock wave generated by the user's gaping mouth.",
      "name": "Dragon Pulse"
    },
    "Dragon Rage": {
      "type": "dragon",
      "cat": "special",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Dragon Rage"
    },
    "Draining Kiss": {
      "type": "fairy",
      "cat": "special",
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user steals the target's HP with a kiss. The user's HP is restored by over half of the damage taken by the target.",
      "name": "Draining Kiss"
    },
    "Dream Eater": {
      "type": "psychic",
      "cat": "special",
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user eats the dreams of a sleeping target. The user's HP is restored by half the damage taken by the target.",
      "name": "Dream Eater"
    },
    "Dynamax Cannon": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user unleashes a strong beam from its core. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Dynamax Cannon"
    },
    "Earth Power": {
      "type": "ground",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat.",
      "name": "Earth Power"
    },
    "Echoed Voice": {
      "type": "normal",
      "cat": "special",
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks the target with an echoing voice. If this move is used every turn, its power is increased.",
      "name": "Echoed Voice"
    },
    "Eerie Spell": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with its tremendous psychic power. This also removes 3 PP from the target's last move.",
      "name": "Eerie Spell"
    },
    "Electro Ball": {
      "type": "electric",
      "cat": "special",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user hurls an electric orb at the target. The faster the user is than the target, the greater the move's power.",
      "name": "Electro Ball"
    },
    "Electroweb": {
      "type": "electric",
      "cat": "special",
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks and captures opposing Pokémon using an electric net. This lowers their Speed stats.",
      "name": "Electroweb"
    },
    "Ember": {
      "type": "fire",
      "cat": "special",
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is attacked with small flames. This may also leave the target with a burn.",
      "name": "Ember"
    },
    "Energy Ball": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat.",
      "name": "Energy Ball"
    },
    "Eruption": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",
      "name": "Eruption"
    },
    "Eternabeam": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 160,
      "acc": 90,
      "desc": "This is Eternatus's most powerful attack in its original form. The user can't move on the next turn.",
      "name": "Eternabeam"
    },
    "Expanding Force": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target with its psychic power. This move's power goes up and damages all opposing Pokémon on Psychic Terrain.",
      "name": "Expanding Force"
    },
    "Extrasensory": {
      "type": "psychic",
      "cat": "special",
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with an odd, unseeable power. This may also make the target flinch.",
      "name": "Extrasensory"
    },
    "Fairy Wind": {
      "type": "fairy",
      "cat": "special",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user stirs up a fairy wind and strikes the target with it.",
      "name": "Fairy Wind"
    },
    "Fiery Dance": {
      "type": "fire",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "Cloaked in flames, the user attacks the target by dancing and flapping its wings. This may also raise the user's Sp. Atk stat.",
      "name": "Fiery Dance"
    },
    "Fiery Wrath": {
      "type": "dark",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user transforms its wrath into a fire-like aura to attack. This may also make opposing Pokémon flinch.",
      "name": "Fiery Wrath"
    },
    "Final Gambit": {
      "type": "fighting",
      "cat": "special",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user risks everything to attack its target. The user faints but does damage equal to its HP.",
      "name": "Final Gambit"
    },
    "Fire Blast": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 110,
      "acc": 85,
      "desc": "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
      "name": "Fire Blast"
    },
    "Fire Pledge": {
      "type": "fire",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of fire hits the target. When used with its grass equivalent, its power increases and a vast sea of fire appears.",
      "name": "Fire Pledge"
    },
    "Fire Spin": {
      "type": "fire",
      "cat": "special",
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The target becomes trapped within a fierce vortex of fire that rages for four to five turns.",
      "name": "Fire Spin"
    },
    "Flame Burst": {
      "type": "fire",
      "cat": "special",
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Flame Burst"
    },
    "Flamethrower": {
      "type": "fire",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is scorched with an intense blast of fire. This may also leave the target with a burn.",
      "name": "Flamethrower"
    },
    "Flash Cannon": {
      "type": "steel",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user gathers all its light energy and releases it all at once. This may also lower the target's Sp. Def stat.",
      "name": "Flash Cannon"
    },
    "Fleur Cannon": {
      "type": "fairy",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user unleashes a strong beam. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Fleur Cannon"
    },
    "Focus Blast": {
      "type": "fighting",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 70,
      "desc": "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
      "name": "Focus Blast"
    },
    "Freeze-Dry": {
      "type": "ice",
      "cat": "special",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water types.",
      "name": "Freeze-Dry"
    },
    "Freezing Glare": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
      "name": "Freezing Glare"
    },
    "Freezy Frost": {
      "type": "ice",
      "cat": "special",
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Freezy Frost"
    },
    "Frenzy Plant": {
      "type": "grass",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user slams the target with the roots of an enormous tree. The user can't move on the next turn.",
      "name": "Frenzy Plant"
    },
    "Frost Breath": {
      "type": "ice",
      "cat": "special",
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The user blows its cold breath on the target. This attack always results in a critical hit.",
      "name": "Frost Breath"
    },
    "Fusion Flare": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user brings down a giant flame. This move's power is increased when influenced by an enormous lightning bolt.",
      "name": "Fusion Flare"
    },
    "Future Sight": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "Two turns after this move is used, a hunk of psychic energy attacks the target.",
      "name": "Future Sight"
    },
    "Genesis Supernova": {
      "type": "psychic",
      "cat": "special",
      "pp": 1,
      "dmg": 185,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Genesis Supernova"
    },
    "Giga Drain": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Giga Drain"
    },
    "Glaciate": {
      "type": "ice",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 95,
      "desc": "The user attacks by blowing freezing cold air at opposing Pokémon. This lowers their Speed stats.",
      "name": "Glaciate"
    },
    "Glitzy Glow": {
      "type": "psychic",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Glitzy Glow"
    },
    "Grass Knot": {
      "type": "grass",
      "cat": "special",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user snares the target with grass and trips it. The heavier the target, the greater the move's power.",
      "name": "Grass Knot"
    },
    "Grass Pledge": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of grass hits the target. When used with its water equivalent, its power increases and a vast swamp appears.",
      "name": "Grass Pledge"
    },
    "Guardian of Alola": {
      "type": "fairy",
      "cat": "special",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Guardian of Alola"
    },
    "Gust": {
      "type": "flying",
      "cat": "special",
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
      "name": "Gust"
    },
    "Heat Wave": {
      "type": "fire",
      "cat": "special",
      "pp": 10,
      "dmg": 95,
      "acc": 90,
      "desc": "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave those Pokémon with a burn.",
      "name": "Heat Wave"
    },
    "Hex": {
      "type": "ghost",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "This relentless attack does massive damage to a target affected by status conditions.",
      "name": "Hex"
    },
    "Hidden Power": {
      "type": "normal",
      "cat": "special",
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Hidden Power"
    },
    "Hurricane": {
      "type": "flying",
      "cat": "special",
      "pp": 10,
      "dmg": 110,
      "acc": 70,
      "desc": "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target.",
      "name": "Hurricane"
    },
    "Hydro Cannon": {
      "type": "water",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is hit with a watery blast. The user can't move on the next turn.",
      "name": "Hydro Cannon"
    },
    "Hydro Pump": {
      "type": "water",
      "cat": "special",
      "pp": 5,
      "dmg": 110,
      "acc": 80,
      "desc": "The target is blasted by a huge volume of water launched under great pressure.",
      "name": "Hydro Pump"
    },
    "Hyper Beam": {
      "type": "normal",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is attacked with a powerful beam. The user can't move on the next turn.",
      "name": "Hyper Beam"
    },
    "Hyper Voice": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user lets loose a horribly echoing shout with the power to inflict damage.",
      "name": "Hyper Voice"
    },
    "Hyperspace Hole": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 80,
      "acc": 101,
      "desc": "Using a hyperspace hole, the user appears right next to the target and strikes. This also hits a target using a move such as Protect or Detect.",
      "name": "Hyperspace Hole"
    },
    "Ice Beam": {
      "type": "ice",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
      "name": "Ice Beam"
    },
    "Ice Burn": {
      "type": "ice",
      "cat": "special",
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "On the second turn, an ultracold, freezing wind surrounds the target. This may leave the target with a burn.",
      "name": "Ice Burn"
    },
    "Icy Wind": {
      "type": "ice",
      "cat": "special",
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats.",
      "name": "Icy Wind"
    },
    "Incinerate": {
      "type": "fire",
      "cat": "special",
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable.",
      "name": "Incinerate"
    },
    "Inferno": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 50,
      "desc": "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.",
      "name": "Inferno"
    },
    "Infestation": {
      "type": "bug",
      "cat": "special",
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "The target is infested and attacked for four to five turns. The target can't flee during this time.",
      "name": "Infestation"
    },
    "Judgment": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user releases countless shots of light at the target. This move's type varies depending on the kind of Plate the user is holding.",
      "name": "Judgment"
    },
    "Lava Plume": {
      "type": "fire",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
      "name": "Lava Plume"
    },
    "Leaf Storm": {
      "type": "grass",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Leaf Storm"
    },
    "Leaf Tornado": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 90,
      "desc": "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy.",
      "name": "Leaf Tornado"
    },
    "Light That Burns the Sky": {
      "type": "psychic",
      "cat": "special",
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Light That Burns the Sky"
    },
    "Light of Ruin": {
      "type": "fairy",
      "cat": "special",
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user quite a lot.",
      "name": "Light of Ruin"
    },
    "Luster Purge": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat.",
      "name": "Luster Purge"
    },
    "Magical Leaf": {
      "type": "grass",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user scatters curious leaves that chase the target. This attack never misses.",
      "name": "Magical Leaf"
    },
    "Magma Storm": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 75,
      "desc": "The target becomes trapped within a maelstrom of fire that rages for four to five turns.",
      "name": "Magma Storm"
    },
    "Mega Drain": {
      "type": "grass",
      "cat": "special",
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Mega Drain"
    },
    "Menacing Moonraze Maelstrom": {
      "type": "ghost",
      "cat": "special",
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Menacing Moonraze Maelstrom"
    },
    "Meteor Beam": {
      "type": "rock",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 90,
      "desc": "In this two-turn attack, the user gathers space power and boosts its Sp. Atk stat, then attacks the target on the next turn.",
      "name": "Meteor Beam"
    },
    "Mind Blown": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks everything around it by causing its own head to explode. This also damages the user.",
      "name": "Mind Blown"
    },
    "Mirror Coat": {
      "type": "psychic",
      "cat": "special",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A retaliation move that counters any special attack, inflicting double the damage taken.",
      "name": "Mirror Coat"
    },
    "Mirror Shot": {
      "type": "steel",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mirror Shot"
    },
    "Mist Ball": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat.",
      "name": "Mist Ball"
    },
    "Misty Explosion": {
      "type": "fairy",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks everything around it and faints upon using this move. This move's power is increased on Misty Terrain.",
      "name": "Misty Explosion"
    },
    "Moonblast": {
      "type": "fairy",
      "cat": "special",
      "pp": 15,
      "dmg": 95,
      "acc": 100,
      "desc": "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.",
      "name": "Moonblast"
    },
    "Moongeist Beam": {
      "type": "ghost",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user emits a sinister ray to attack the target. This move can be used on the target regardless of its Abilities.",
      "name": "Moongeist Beam"
    },
    "Mud Bomb": {
      "type": "ground",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mud Bomb"
    },
    "Mud Shot": {
      "type": "ground",
      "cat": "special",
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat.",
      "name": "Mud Shot"
    },
    "Mud-Slap": {
      "type": "ground",
      "cat": "special",
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user hurls mud in the target's face to inflict damage and lower its accuracy.",
      "name": "Mud-Slap"
    },
    "Muddy Water": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 85,
      "desc": "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy.",
      "name": "Muddy Water"
    },
    "Mystical Fire": {
      "type": "fire",
      "cat": "special",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.",
      "name": "Mystical Fire"
    },
    "Nature's Madness": {
      "type": "fairy",
      "cat": "special",
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "The user hits the target with the force of nature. It halves the target's HP.",
      "name": "Nature's Madness"
    },
    "Night Daze": {
      "type": "dark",
      "cat": "special",
      "pp": 10,
      "dmg": 85,
      "acc": 95,
      "desc": "The user lets loose a pitch-black shock wave at its target. This may also lower the target's accuracy.",
      "name": "Night Daze"
    },
    "Night Shade": {
      "type": "ghost",
      "cat": "special",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.",
      "name": "Night Shade"
    },
    "Oblivion Wing": {
      "type": "flying",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user absorbs its target's HP. The user's HP is restored by over half of the damage taken by the target.",
      "name": "Oblivion Wing"
    },
    "Oceanic Operetta": {
      "type": "water",
      "cat": "special",
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Oceanic Operetta"
    },
    "Octazooka": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "The user attacks by spraying ink in the target's face or eyes. This may also lower the target's accuracy.",
      "name": "Octazooka"
    },
    "Ominous Wind": {
      "type": "ghost",
      "cat": "special",
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ominous Wind"
    },
    "Origin Pulse": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 110,
      "acc": 85,
      "desc": "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue.",
      "name": "Origin Pulse"
    },
    "Overdrive": {
      "type": "electric",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon by twanging a guitar or bass guitar, causing a huge echo and strong vibration.",
      "name": "Overdrive"
    },
    "Overheat": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user attacks the target at full power. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Overheat"
    },
    "Parabolic Charge": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit.",
      "name": "Parabolic Charge"
    },
    "Petal Dance": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
      "name": "Petal Dance"
    },
    "Photon Geyser": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks a target with a pillar of light. This move inflicts Attack or Sp. Atk damageâ€”whichever stat is higher for the user.",
      "name": "Photon Geyser"
    },
    "Pika Papow": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pika Papow"
    },
    "Pollen Puff": {
      "type": "bug",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
      "name": "Pollen Puff"
    },
    "Powder Snow": {
      "type": "ice",
      "cat": "special",
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks with a chilling gust of powdery snow. This may also freeze opposing Pokémon.",
      "name": "Powder Snow"
    },
    "Power Gem": {
      "type": "rock",
      "cat": "special",
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
      "name": "Power Gem"
    },
    "Prismatic Laser": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 160,
      "acc": 100,
      "desc": "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",
      "name": "Prismatic Laser"
    },
    "Psybeam": {
      "type": "psychic",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is attacked with a peculiar ray. This may also leave the target confused.",
      "name": "Psybeam"
    },
    "Psychic": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.",
      "name": "Psychic"
    },
    "Psycho Boost": {
      "type": "psychic",
      "cat": "special",
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Psycho Boost"
    },
    "Psyshock": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
      "name": "Psyshock"
    },
    "Psystrike": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
      "name": "Psystrike"
    },
    "Psywave": {
      "type": "psychic",
      "cat": "special",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Psywave"
    },
    "Razor Wind": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Razor Wind"
    },
    "Relic Song": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",
      "name": "Relic Song"
    },
    "Revelation Dance": {
      "type": "normal",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks the target by dancing very hard. The user's type determines the type of this move.",
      "name": "Revelation Dance"
    },
    "Rising Voltage": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user attacks with electric voltage rising from the ground. This move's power doubles when the target is on Electric Terrain.",
      "name": "Rising Voltage"
    },
    "Roar of Time": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user blasts the target with power that distorts even time. The user can't move on the next turn.",
      "name": "Roar of Time"
    },
    "Round": {
      "type": "normal",
      "cat": "special",
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks the target with a song. Others can join in the Round to increase the power of the attack.",
      "name": "Round"
    },
    "Scald": {
      "type": "water",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user shoots boiling hot water at its target. This may also leave the target with a burn.",
      "name": "Scald"
    },
    "Scorching Sands": {
      "type": "ground",
      "cat": "special",
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "The user throws scorching sand at the target to attack. This may also leave the target with a burn.",
      "name": "Scorching Sands"
    },
    "Searing Shot": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
      "name": "Searing Shot"
    },
    "Secret Sword": {
      "type": "fighting",
      "cat": "special",
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user cuts with its long horn. The odd power contained in the horn does physical damage to the target.",
      "name": "Secret Sword"
    },
    "Seed Flare": {
      "type": "grass",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 85,
      "desc": "The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat.",
      "name": "Seed Flare"
    },
    "Shadow Ball": {
      "type": "ghost",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user hurls a shadowy blob at the target. This may also lower the target's Sp. Def stat.",
      "name": "Shadow Ball"
    },
    "Sheer Cold": {
      "type": "ice",
      "cat": "special",
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The target faints instantly. It's less likely to hit the target if it's used by Pokémon other than Ice types.",
      "name": "Sheer Cold"
    },
    "Shell Side Arm": {
      "type": "poison",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "This move inflicts physical or special damage, whichever will be more effective. This may also poison the target.",
      "name": "Shell Side Arm"
    },
    "Shell Trap": {
      "type": "fire",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on opposing Pokémon.",
      "name": "Shell Trap"
    },
    "Shock Wave": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user strikes the target with a quick jolt of electricity. This attack never misses.",
      "name": "Shock Wave"
    },
    "Signal Beam": {
      "type": "bug",
      "cat": "special",
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Signal Beam"
    },
    "Silver Wind": {
      "type": "bug",
      "cat": "special",
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Silver Wind"
    },
    "Sludge": {
      "type": "poison",
      "cat": "special",
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
      "name": "Sludge"
    },
    "Sludge Bomb": {
      "type": "poison",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
      "name": "Sludge Bomb"
    },
    "Sludge Wave": {
      "type": "poison",
      "cat": "special",
      "pp": 10,
      "dmg": 95,
      "acc": 100,
      "desc": "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit.",
      "name": "Sludge Wave"
    },
    "Smog": {
      "type": "poison",
      "cat": "special",
      "pp": 20,
      "dmg": 30,
      "acc": 70,
      "desc": "The target is attacked with a discharge of filthy gases. This may also poison the target.",
      "name": "Smog"
    },
    "Snarl": {
      "type": "dark",
      "cat": "special",
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user yells as if it's ranting about something, which lowers the Sp. Atk stats of opposing Pokémon.",
      "name": "Snarl"
    },
    "Snipe Shot": {
      "type": "water",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target.",
      "name": "Snipe Shot"
    },
    "Snore": {
      "type": "normal",
      "cat": "special",
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
      "name": "Snore"
    },
    "SolarBeam": {
      "type": "grass",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
      "name": "Solar Beam"
    },
    "Sonic Boom": {
      "type": "normal",
      "cat": "special",
      "pp": 20,
      "dmg": 0,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sonic Boom"
    },
    "Spacial Rend": {
      "type": "dragon",
      "cat": "special",
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The user tears the target along with the space around it. Critical hits land more easily.",
      "name": "Spacial Rend"
    },
    "Sparkling Aria": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be healed by the touch of these bubbles.",
      "name": "Sparkling Aria"
    },
    "Sparkly Swirl": {
      "type": "fairy",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sparkly Swirl"
    },
    "Spit Up": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the move's power.",
      "name": "Spit Up"
    },
    "Splishy Splash": {
      "type": "water",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Splishy Splash"
    },
    "Steam Eruption": {
      "type": "water",
      "cat": "special",
      "pp": 5,
      "dmg": 110,
      "acc": 95,
      "desc": "The user immerses the target in superheated steam. This may also leave the target with a burn.",
      "name": "Steam Eruption"
    },
    "Steel Beam": {
      "type": "steel",
      "cat": "special",
      "pp": 5,
      "dmg": 140,
      "acc": 95,
      "desc": "The user fires a beam of steel that it collected from its entire body. This also damages the user.",
      "name": "Steel Beam"
    },
    "Stoked Sparksurfer": {
      "type": "electric",
      "cat": "special",
      "pp": 1,
      "dmg": 175,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Stoked Sparksurfer"
    },
    "Stored Power": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user attacks the target with stored power. The more the user's stats are raised, the greater the move's power.",
      "name": "Stored Power"
    },
    "Strange Steam": {
      "type": "fairy",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 95,
      "desc": "The user attacks the target by emitting steam. This may also confuse the target.",
      "name": "Strange Steam"
    },
    "Struggle Bug": {
      "type": "bug",
      "cat": "special",
      "pp": 20,
      "dmg": 50,
      "acc": 100,
      "desc": "While resisting, the user attacks opposing Pokémon. This lowers the Sp. Atk stats of those hit.",
      "name": "Struggle Bug"
    },
    "Surf": {
      "type": "water",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks everything around it by swamping its surroundings with a giant wave.",
      "name": "Surf"
    },
    "Swift": {
      "type": "normal",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "Star-shaped rays are shot at opposing Pokémon. This attack never misses.",
      "name": "Swift"
    },
    "Synchronoise": {
      "type": "psychic",
      "cat": "special",
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Synchronoise"
    },
    "Techno Blast": {
      "type": "normal",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user fires a beam of light at its target. The move's type changes depending on the Drive the user holds.",
      "name": "Techno Blast"
    },
    "Terrain Pulse": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user utilizes the power of the terrain to attack. This move's type and power changes depending on the terrain when it's used.",
      "name": "Terrain Pulse"
    },
    "Thunder": {
      "type": "electric",
      "cat": "special",
      "pp": 10,
      "dmg": 110,
      "acc": 70,
      "desc": "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
      "name": "Thunder"
    },
    "Thunder Cage": {
      "type": "electric",
      "cat": "special",
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user traps the target in a cage of sparking electricity for four to five turns.",
      "name": "Thunder Cage"
    },
    "Thunder Shock": {
      "type": "electric",
      "cat": "special",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "A jolt of electricity crashes down on the target to inflict damage. This may also leave the target with paralysis.",
      "name": "Thunder Shock"
    },
    "Thunderbolt": {
      "type": "electric",
      "cat": "special",
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "A strong electric blast crashes down on the target. This may also leave the target with paralysis.",
      "name": "Thunderbolt"
    },
    "Tri Attack": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes with a simultaneous three-beam attack. This may also burn, freeze, or paralyze the target.",
      "name": "Tri Attack"
    },
    "Trump Card": {
      "type": "normal",
      "cat": "special",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Trump Card"
    },
    "Twister": {
      "type": "dragon",
      "cat": "special",
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user whips up a vicious tornado to tear at opposing Pokémon. This may also make them flinch.",
      "name": "Twister"
    },
    "Uproar": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep.",
      "name": "Uproar"
    },
    "Vacuum Wave": {
      "type": "fighting",
      "cat": "special",
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.",
      "name": "Vacuum Wave"
    },
    "Venoshock": {
      "type": "poison",
      "cat": "special",
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned.",
      "name": "Venoshock"
    },
    "Volt Switch": {
      "type": "electric",
      "cat": "special",
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "Volt Switch"
    },
    "Water Gun": {
      "type": "water",
      "cat": "special",
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is blasted with a forceful shot of water.",
      "name": "Water Gun"
    },
    "Water Pledge": {
      "type": "water",
      "cat": "special",
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of water hits the target. When used with its fire equivalent, its power increases and a rainbow appears.",
      "name": "Water Pledge"
    },
    "Water Pulse": {
      "type": "water",
      "cat": "special",
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
      "name": "Water Pulse"
    },
    "Water Shuriken": {
      "type": "water",
      "cat": "special",
      "pp": 20,
      "dmg": 15,
      "acc": 100,
      "desc": "The user hits the target with throwing stars two to five times in a row. This move always goes first.",
      "name": "Water Shuriken"
    },
    "Water Spout": {
      "type": "water",
      "cat": "special",
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user spouts water to damage opposing Pokémon. The lower the user's HP, the lower the move's power.",
      "name": "Water Spout"
    },
    "Weather Ball": {
      "type": "normal",
      "cat": "special",
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "This attack move varies in power and type depending on the weather.",
      "name": "Weather Ball"
    },
    "Whirlpool": {
      "type": "water",
      "cat": "special",
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The user traps the target in a violent swirling whirlpool for four to five turns.",
      "name": "Whirlpool"
    },
    "Wring Out": {
      "type": "normal",
      "cat": "special",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Wring Out"
    },
    "Zap Cannon": {
      "type": "electric",
      "cat": "special",
      "pp": 5,
      "dmg": 120,
      "acc": 50,
      "desc": "The user fires an electric blast like a cannon to inflict damage and cause paralysis.",
      "name": "Zap Cannon"
    },
    "Acid Armor": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.",
      "name": "Acid Armor"
    },
    "Acupressure": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user applies pressure to stress points, sharply boosting one of its or its allies' stats.",
      "name": "Acupressure"
    },
    "After You": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user helps the target and makes it use its move right after the user.",
      "name": "After You"
    },
    "Agility": {
      "type": "psychic",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user relaxes and lightens its body to move faster. This sharply raises the Speed stat.",
      "name": "Agility"
    },
    "Ally Switch": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user teleports using a strange power and switches places with one of its allies.",
      "name": "Ally Switch"
    },
    "Amnesia": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user temporarily empties its mind to forget its concerns. This sharply raises the user's Sp. Def stat.",
      "name": "Amnesia"
    },
    "Aqua Ring": {
      "type": "water",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user envelops itself in a veil made of water. It regains some HP every turn.",
      "name": "Aqua Ring"
    },
    "Aromatherapy": {
      "type": "grass",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user releases a soothing scent that heals all status conditions affecting the user's party.",
      "name": "Aromatherapy"
    },
    "Aromatic Mist": {
      "type": "fairy",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user raises the Sp. Def stat of an ally Pokémon by using a mysterious aroma.",
      "name": "Aromatic Mist"
    },
    "Assist": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Assist"
    },
    "Attract": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.",
      "name": "Attract"
    },
    "Aurora Veil": {
      "type": "ice",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move reduces damage from physical and special moves for five turns. This can be used only in a hailstorm.",
      "name": "Aurora Veil"
    },
    "Autotomize": {
      "type": "steel",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.",
      "name": "Autotomize"
    },
    "Baby-Doll Eyes": {
      "type": "fairy",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user stares at the target with its baby-doll eyes, which lowers the target's Attack stat. This move always goes first.",
      "name": "Baby-Doll Eyes"
    },
    "Baneful Bunker": {
      "type": "poison",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",
      "name": "Baneful Bunker"
    },
    "Barrier": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Barrier"
    },
    "Baton Pass": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user switches places with a party Pokémon in waiting and passes along any stat changes.",
      "name": "Baton Pass"
    },
    "Belly Drum": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user maximizes its Attack stat in exchange for HP equal to half its max HP.",
      "name": "Belly Drum"
    },
    "Bestow": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bestow"
    },
    "Block": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user blocks the target's way with arms spread wide to prevent escape.",
      "name": "Block"
    },
    "Bulk Up": {
      "type": "fighting",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user tenses its muscles to bulk up its body, raising both its Attack and Defense stats.",
      "name": "Bulk Up"
    },
    "Calm Mind": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.",
      "name": "Calm Mind"
    },
    "Camouflage": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Camouflage"
    },
    "Captivate": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Captivate"
    },
    "Celebrate": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The Pokémon congratulates you on your special day!",
      "name": "Celebrate"
    },
    "Charge": {
      "type": "electric",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user boosts the power of the Electric move it uses on the next turn. This also raises the user's Sp. Def stat.",
      "name": "Charge"
    },
    "Charm": {
      "type": "fairy",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat.",
      "name": "Charm"
    },
    "Clangorous Soul": {
      "type": "dragon",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user raises all its stats by using some of its HP.",
      "name": "Clangorous Soul"
    },
    "Coaching": {
      "type": "fighting",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": null,
      "desc": "The user properly coaches its ally Pokémon, boosting their Attack and Defense stats.",
      "name": "Coaching"
    },
    "Coil": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy.",
      "name": "Coil"
    },
    "Confide": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat.",
      "name": "Confide"
    },
    "Confuse Ray": {
      "type": "ghost",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is exposed to a sinister ray that triggers confusion.",
      "name": "Confuse Ray"
    },
    "Conversion": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user changes its type to become the same type as the move at the top of the list of moves it knows.",
      "name": "Conversion"
    },
    "Conversion 2": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user changes its type to make itself resistant to the type of the attack the target used last.",
      "name": "Conversion 2"
    },
    "Copycat": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user mimics the move used immediately before it. The move fails if no other move has been used yet.",
      "name": "Copycat"
    },
    "Corrosive Gas": {
      "type": "poison",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user surrounds everything around it with highly acidic gas and melts away items they hold.",
      "name": "Corrosive Gas"
    },
    "Cosmic Power": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user absorbs a mystical power from space to raise its Defense and Sp. Def stats.",
      "name": "Cosmic Power"
    },
    "Cotton Guard": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself by wrapping its body in soft cotton, which drastically raises the user's Defense stat.",
      "name": "Cotton Guard"
    },
    "Cotton Spore": {
      "type": "grass",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user releases cotton-like spores that cling to opposing Pokémon, which harshly lowers their Speed stats.",
      "name": "Cotton Spore"
    },
    "Court Change": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "With its mysterious power, the user swaps the effects on either side of the field.",
      "name": "Court Change"
    },
    "Crafty Shield": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage.",
      "name": "Crafty Shield"
    },
    "Curse": {
      "type": "ghost",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A move that works differently for the Ghost type than for all other types.",
      "name": "Curse"
    },
    "Dark Void": {
      "type": "dark",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 50,
      "desc": "Opposing Pokémon are dragged into a world of total darkness that makes them sleep.",
      "name": "Dark Void"
    },
    "Decorate": {
      "type": "fairy",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sharply raises the target's Attack and Sp. Atk stats by decorating the target.",
      "name": "Decorate"
    },
    "Defend Order": {
      "type": "bug",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.",
      "name": "Defend Order"
    },
    "Defense Curl": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user curls up to conceal weak spots and raise its Defense stat.",
      "name": "Defense Curl"
    },
    "Defog": {
      "type": "flying",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "A strong wind blows away the target's barriers such as Reflect or Light Screen. This also lowers the target's evasiveness.",
      "name": "Defog"
    },
    "Destiny Bond": {
      "type": "ghost",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "After using this move, if the user faints, the Pokémon that landed the knockout hit also faints. Its chance of failing rises if it is used in succession.",
      "name": "Destiny Bond"
    },
    "Detect": {
      "type": "fighting",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Detect"
    },
    "Disable": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "For four turns, this move prevents the target from using the move it last used.",
      "name": "Disable"
    },
    "Double Team": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.",
      "name": "Double Team"
    },
    "Dragon Dance": {
      "type": "dragon",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user vigorously performs a mystic, powerful dance that raises its Attack and Speed stats.",
      "name": "Dragon Dance"
    },
    "Eerie Impulse": {
      "type": "electric",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat.",
      "name": "Eerie Impulse"
    },
    "Electric Terrain": {
      "type": "electric",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user electrifies the ground for five turns, powering up Electric-type moves. Pokémon on the ground no longer fall asleep.",
      "name": "Electric Terrain"
    },
    "Electrify": {
      "type": "electric",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "If the target is electrified before it uses a move during that turn, the target's move becomes Electric type.",
      "name": "Electrify"
    },
    "Embargo": {
      "type": "dark",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Embargo"
    },
    "Encore": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user compels the target to keep using the move it encored for three turns.",
      "name": "Encore"
    },
    "Endure": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.",
      "name": "Endure"
    },
    "Entrainment": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's.",
      "name": "Entrainment"
    },
    "Extreme Evoboost": {
      "type": "normal",
      "cat": "status",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Extreme Evoboost"
    },
    "Fairy Lock": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "By locking down the battlefield, the user keeps all Pokémon from fleeing during the next turn.",
      "name": "Fairy Lock"
    },
    "Fake Tears": {
      "type": "dark",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user feigns crying to fluster the target, harshly lowering its Sp. Def stat.",
      "name": "Fake Tears"
    },
    "Feather Dance": {
      "type": "flying",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user covers the target's body with a mass of down that harshly lowers its Attack stat.",
      "name": "Feather Dance"
    },
    "Flash": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Flash"
    },
    "Flatter": {
      "type": "dark",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "Flattery is used to confuse the target. However, this also raises the target's Sp. Atk stat.",
      "name": "Flatter"
    },
    "Floral Healing": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores the target's HP by up to half of its max HP. It restores more HP when the terrain is grass.",
      "name": "Floral Healing"
    },
    "Flower Shield": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user raises the Defense stats of all Grass-type Pokémon in battle with a mysterious power.",
      "name": "Flower Shield"
    },
    "Focus Energy": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes a deep breath and focuses so that critical hits land more easily.",
      "name": "Focus Energy"
    },
    "Follow Me": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user draws attention to itself, making all targets take aim only at the user.",
      "name": "Follow Me"
    },
    "Foresight": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Foresight"
    },
    "Forest's Curse": {
      "type": "grass",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user puts a forest curse on the target. The target is now Grass type as well.",
      "name": "Forest's Curse"
    },
    "Gastro Acid": {
      "type": "poison",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability.",
      "name": "Gastro Acid"
    },
    "Gear Up": {
      "type": "steel",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.",
      "name": "Gear Up"
    },
    "Geomancy": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user absorbs energy and sharply raises its Sp. Atk, Sp. Def, and Speed stats on the next turn.",
      "name": "Geomancy"
    },
    "Glare": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user intimidates the target with the pattern on its belly to cause paralysis.",
      "name": "Glare"
    },
    "Grass Whistle": {
      "type": "grass",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 55,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Grass Whistle"
    },
    "Grassy Terrain": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user turns the ground to grass for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves.",
      "name": "Grassy Terrain"
    },
    "Gravity": {
      "type": "psychic",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables Flying-type Pokémon or Pokémon with the Levitate Ability to be hit by Ground-type moves. Moves that involve flying can't be used.",
      "name": "Gravity"
    },
    "Growl": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stats.",
      "name": "Growl"
    },
    "Growth": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user's body grows all at once, raising the Attack and Sp. Atk stats.",
      "name": "Growth"
    },
    "Grudge": {
      "type": "ghost",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "If the user faints, the user's grudge fully depletes the PP of the opponent's move that knocked it out.",
      "name": "Grudge"
    },
    "Guard Split": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to average its Defense and Sp. Def stats with those of the target.",
      "name": "Guard Split"
    },
    "Guard Swap": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target.",
      "name": "Guard Swap"
    },
    "Hail": {
      "type": "ice",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice types.",
      "name": "Hail"
    },
    "Happy Hour": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "Using Happy Hour doubles the amount of prize money received after battle.",
      "name": "Happy Hour"
    },
    "Harden": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user stiffens all the muscles in its body to raise its Defense stat.",
      "name": "Harden"
    },
    "Haze": {
      "type": "ice",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle.",
      "name": "Haze"
    },
    "Heal Bell": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user makes a soothing bell chime to heal the status conditions of all the party Pokémon.",
      "name": "Heal Bell"
    },
    "Heal Block": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heal Block"
    },
    "Heal Order": {
      "type": "bug",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heal Order"
    },
    "Heal Pulse": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user emits a healing pulse that restores the target's HP by up to half of its max HP.",
      "name": "Heal Pulse"
    },
    "Healing Wish": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user faints. In return, the Pokémon taking its place will have its HP restored and status conditions cured.",
      "name": "Healing Wish"
    },
    "Heart Swap": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heart Swap"
    },
    "Helping Hand": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user assists an ally by boosting the power of that ally's attack.",
      "name": "Helping Hand"
    },
    "Hold Hands": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and an ally hold hands. This makes them very happy.",
      "name": "Hold Hands"
    },
    "Hone Claws": {
      "type": "dark",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sharpens its claws to boost its Attack stat and accuracy.",
      "name": "Hone Claws"
    },
    "Howl": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user howls loudly to raise the spirit of itself and allies. This raises their Attack stats.",
      "name": "Howl"
    },
    "Hypnosis": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 60,
      "desc": "The user employs hypnotic suggestion to make the target fall into a deep sleep.",
      "name": "Hypnosis"
    },
    "Imprison": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "If opposing Pokémon know any move also known by the user, they are prevented from using it.",
      "name": "Imprison"
    },
    "Ingrain": {
      "type": "grass",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays roots that restore its HP on every turn. Because it's rooted, it can't switch out.",
      "name": "Ingrain"
    },
    "Instruct": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user instructs the target to use the target's last move again.",
      "name": "Instruct"
    },
    "Ion Deluge": {
      "type": "electric",
      "cat": "status",
      "pp": 25,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ion Deluge"
    },
    "Iron Defense": {
      "type": "steel",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user hardens its body's surface like iron, sharply raising its Defense stat.",
      "name": "Iron Defense"
    },
    "Jungle Healing": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user becomes one with the jungle, restoring HP and healing any status conditions of itself and its ally Pokémon in battle.",
      "name": "Jungle Healing"
    },
    "Kinesis": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 80,
      "desc": "The user distracts the target by bending a spoon. This lowers the target's accuracy.",
      "name": "Kinesis"
    },
    "King's Shield": {
      "type": "steel",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes a defensive stance while it protects itself from damage. It also lowers the Attack stat of any attacker that makes direct contact.",
      "name": "King's Shield"
    },
    "Laser Focus": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user concentrates intensely. The attack on the next turn always results in a critical hit.",
      "name": "Laser Focus"
    },
    "LeechSeed": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "A seed is planted on the target. It steals some HP from the target every turn.",
      "name": "Leech Seed"
    },
    "Leer": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gives opposing Pokémon an intimidating leer that lowers the Defense stat.",
      "name": "Leer"
    },
    "Life Dew": {
      "type": "water",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon in the battle.",
      "name": "Life Dew"
    },
    "Light Screen": {
      "type": "psychic",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "A wondrous wall of light is put up to reduce damage from special attacks for five turns.",
      "name": "Light Screen"
    },
    "Lock-On": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes sure aim at the target. This ensures the next attack does not miss the target.",
      "name": "Lock-On"
    },
    "Lovely Kiss": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 75,
      "desc": "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.",
      "name": "Lovely Kiss"
    },
    "Lucky Chant": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Lucky Chant"
    },
    "Lunar Dance": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user faints. In return, the Pokémon taking its place will have its status and HP fully restored.",
      "name": "Lunar Dance"
    },
    "MagicCoat": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves.",
      "name": "Magic Coat"
    },
    "MagicPowder": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user scatters a cloud of magic powder that changes the target to Psychic type.",
      "name": "Magic Powder"
    },
    "MagicRoom": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which Pokémon's held items lose their effects for five turns.",
      "name": "Magic Room"
    },
    "MagnetRise": {
      "type": "electric",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user levitates using electrically generated magnetism for five turns.",
      "name": "Magnet Rise"
    },
    "MagneticFlux": {
      "type": "electric",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user manipulates magnetic fields, which raises the Defense and Sp. Def stats of ally Pokémon with the Plus or Minus Ability.",
      "name": "Magnetic Flux"
    },
    "MatBlock": {
      "type": "fighting",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves.",
      "name": "Mat Block"
    },
    "MaxGuard": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Max Guard"
    },
    "MeFirst": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Me First"
    },
    "MeanLook": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user pins the target with a dark, arresting look. The target becomes unable to flee.",
      "name": "Mean Look"
    },
    "Meditate": {
      "type": "psychic",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Meditate"
    },
    "Memento": {
      "type": "dark",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user faints when using this move. In return, this harshly lowers the target's Attack and Sp. Atk stats.",
      "name": "Memento"
    },
    "MetalSound": {
      "type": "steel",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 85,
      "desc": "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat.",
      "name": "Metal Sound"
    },
    "Metronome": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user waggles a finger and stimulates its brain into randomly using nearly any move.",
      "name": "Metronome"
    },
    "MilkDrink": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP by up to half of its max HP.",
      "name": "Milk Drink"
    },
    "Mimic": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user copies the target's last move. The move can be used during battle until the Pokémon is switched out.",
      "name": "Mimic"
    },
    "MindReader": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user senses the target's movements with its mind to ensure its next attack does not miss the target.",
      "name": "Mind Reader"
    },
    "Minimize": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user compresses its body to make itself look smaller, which sharply raises its evasiveness.",
      "name": "Minimize"
    },
    "MiracleEye": {
      "type": "psychic",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Miracle Eye"
    },
    "MirrorMove": {
      "type": "flying",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mirror Move"
    },
    "Mist": {
      "type": "ice",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns.",
      "name": "Mist"
    },
    "MistyTerrain": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This protects Pokémon on the ground from status conditions and halves damage from Dragon-type moves for five turns.",
      "name": "Misty Terrain"
    },
    "Moonlight": {
      "type": "fairy",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Moonlight"
    },
    "MorningSun": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Morning Sun"
    },
    "MudSport": {
      "type": "ground",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mud Sport"
    },
    "NastyPlot": {
      "type": "dark",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.",
      "name": "Nasty Plot"
    },
    "NaturePower": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This attack makes use of nature's power. Its effects vary depending on the user's environment.",
      "name": "Nature Power"
    },
    "Nightmare": {
      "type": "ghost",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Nightmare"
    },
    "NoRetreat": {
      "type": "fighting",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move raises all the user's stats but prevents the user from switching out or fleeing.",
      "name": "No Retreat"
    },
    "NobleRoar": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk stats.",
      "name": "Noble Roar"
    },
    "Obstruct": {
      "type": "dark",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession. Direct contact harshly lowers the attacker's Defense stat.",
      "name": "Obstruct"
    },
    "Octolock": {
      "type": "fighting",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user locks the target in and prevents it from fleeing. This move also lowers the target's Defense and Sp. Def every turn.",
      "name": "Octolock"
    },
    "OdorSleuth": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Odor Sleuth"
    },
    "PainSplit": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user adds its HP to the target's HP, then equally shares the combined HP with the target.",
      "name": "Pain Split"
    },
    "PartingShot": {
      "type": "dark",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pokémon.",
      "name": "Parting Shot"
    },
    "PerishSong": {
      "type": "normal",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "Any Pokémon that hears this song faints in three turns, unless it switches out of battle.",
      "name": "Perish Song"
    },
    "PlayNice": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat.",
      "name": "Play Nice"
    },
    "PoisonGas": {
      "type": "poison",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 90,
      "desc": "A cloud of poison gas is sprayed in the face of opposing Pokémon, poisoning those it hits.",
      "name": "Poison Gas"
    },
    "PoisonPowder": {
      "type": "poison",
      "cat": "status",
      "pp": 35,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a cloud of poisonous dust that poisons the target.",
      "name": "Poison Powder"
    },
    "Powder": {
      "type": "bug",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user covers the target in a combustible powder. If the target uses a Fire-type move, the powder explodes and damages the target.",
      "name": "Powder"
    },
    "PowerSplit": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target.",
      "name": "Power Split"
    },
    "PowerSwap": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target.",
      "name": "Power Swap"
    },
    "PowerTrick": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch its Attack stat with its Defense stat.",
      "name": "Power Trick"
    },
    "Protect": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Protect"
    },
    "PsychUp": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user hypnotizes itself into copying any stat change made by the target.",
      "name": "Psych Up"
    },
    "PsychicTerrain": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This protects Pokémon on the ground from priority moves and powers up Psychic-type moves for five turns.",
      "name": "Psychic Terrain"
    },
    "PsychoShift": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "Using its psychic power of suggestion, the user transfers its status conditions to the target.",
      "name": "Psycho Shift"
    },
    "Purify": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user heals the target's status condition. If the move succeeds, it also restores the user's own HP.",
      "name": "Purify"
    },
    "Quash": {
      "type": "dark",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user suppresses the target and makes its move go last.",
      "name": "Quash"
    },
    "QuickGuard": {
      "type": "fighting",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself and its allies from priority moves.",
      "name": "Quick Guard"
    },
    "QuiverDance": {
      "type": "bug",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lightly performs a beautiful, mystic dance. This boosts the user's Sp. Atk, Sp. Def, and Speed stats.",
      "name": "Quiver Dance"
    },
    "RagePowder": {
      "type": "bug",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user.",
      "name": "Rage Powder"
    },
    "RainDance": {
      "type": "water",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user summons a heavy rain that falls for five turns, powering up Water-type moves. It lowers the power of Fire-type moves.",
      "name": "Rain Dance"
    },
    "Recover": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "Restoring its own cells, the user restores its own HP by half of its max HP.",
      "name": "Recover"
    },
    "Recycle": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user recycles a held item that has been used in battle so it can be used again.",
      "name": "Recycle"
    },
    "Reflect": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "A wondrous wall of light is put up to reduce damage from physical attacks for five turns.",
      "name": "Reflect"
    },
    "ReflectType": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user reflects the target's type, making the user the same type as the target.",
      "name": "Reflect Type"
    },
    "Refresh": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Refresh"
    },
    "Rest": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions.",
      "name": "Rest"
    },
    "Roar": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The target is scared off, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Roar"
    },
    "RockPolish": {
      "type": "rock",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user polishes its body to reduce drag. This sharply raises the Speed stat.",
      "name": "Rock Polish"
    },
    "RolePlay": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user mimics the target completely, copying the target's Ability.",
      "name": "Role Play"
    },
    "Roost": {
      "type": "flying",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lands and rests its body. This move restores the user's HP by up to half of its max HP.",
      "name": "Roost"
    },
    "Rototiller": {
      "type": "ground",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rototiller"
    },
    "Safeguard": {
      "type": "normal",
      "cat": "status",
      "pp": 25,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a protective field that prevents status conditions for five turns.",
      "name": "Safeguard"
    },
    "SandAttack": {
      "type": "ground",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "Sand is hurled in the target's face, reducing the target's accuracy.",
      "name": "Sand Attack"
    },
    "Sandstorm": {
      "type": "rock",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A five-turn sandstorm is summoned to hurt all combatants except Rock, Ground, and Steel types. It raises the Sp. Def stat of Rock types.",
      "name": "Sandstorm"
    },
    "ScaryFace": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user frightens the target with a scary face to harshly lower its Speed stat.",
      "name": "Scary Face"
    },
    "Screech": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 85,
      "desc": "An earsplitting screech harshly lowers the target's Defense stat.",
      "name": "Screech"
    },
    "Sharpen": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sharpen"
    },
    "ShellSmash": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user breaks its shell, which lowers Defense and Sp. Def stats but sharply raises its Attack, Sp. Atk, and Speed stats.",
      "name": "Shell Smash"
    },
    "ShiftGear": {
      "type": "steel",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user rotates its gears, raising its Attack stat and sharply raising its Speed stat.",
      "name": "Shift Gear"
    },
    "ShoreUp": {
      "type": "ground",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user regains up to half of its max HP. It restores more HP in a sandstorm.",
      "name": "Shore Up"
    },
    "SimpleBeam": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user's mysterious psychic wave changes the target's Ability to Simple.",
      "name": "Simple Beam"
    },
    "Sing": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 55,
      "desc": "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.",
      "name": "Sing"
    },
    "Sketch": {
      "type": "normal",
      "cat": "status",
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "It enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.",
      "name": "Sketch"
    },
    "SkillSwap": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to exchange Abilities with the target.",
      "name": "Skill Swap"
    },
    "SlackOff": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user slacks off, restoring its own HP by up to half of its max HP.",
      "name": "Slack Off"
    },
    "SleepPowder": {
      "type": "grass",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a big cloud of sleep-inducing dust around the target.",
      "name": "Sleep Powder"
    },
    "SleepTalk": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "While it is asleep, the user randomly uses one of the moves it knows.",
      "name": "Sleep Talk"
    },
    "Smokescreen": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy.",
      "name": "Smokescreen"
    },
    "Snatch": {
      "type": "dark",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Snatch"
    },
    "Soak": {
      "type": "water",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user shoots a torrent of water at the target and changes the target's type to Water.",
      "name": "Soak"
    },
    "SofgBoiled": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP by up to half of its max HP.",
      "name": "Soft-Boiled"
    },
    "SpeedSwap": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user exchanges Speed stats with the target.",
      "name": "Speed Swap"
    },
    "SpiderWeb": {
      "type": "bug",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spider Web"
    },
    "Spikes": {
      "type": "ground",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of spikes at the opposing team's feet. The trap hurts Pokémon that switch into battle.",
      "name": "Spikes"
    },
    "SpikyShield": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "In addition to protecting the user from attacks, this move also damages any attacker that makes direct contact.",
      "name": "Spiky Shield"
    },
    "Spite": {
      "type": "ghost",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.",
      "name": "Spite"
    },
    "Splash": {
      "type": "normal",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user just flops and splashes around to no effect at all...",
      "name": "Splash"
    },
    "Spore": {
      "type": "grass",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user scatters bursts of spores that induce sleep.",
      "name": "Spore"
    },
    "Spotlight": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spotlight"
    },
    "StealthRock": {
      "type": "rock",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of levitating stones around the opposing team. The trap hurts opposing Pokémon that switch into battle.",
      "name": "Stealth Rock"
    },
    "StickyWeb": {
      "type": "bug",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user weaves a sticky net around the opposing team, which lowers their Speed stats upon switching into battle.",
      "name": "Sticky Web"
    },
    "Stockpile": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user charges up power and raises both its Defense and Sp. Def stats. The move can be used three times.",
      "name": "Stockpile"
    },
    "StrengthSap": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user restores its HP by the same amount as the target's Attack stat. It also lowers the target's Attack stat.",
      "name": "Strength Sap"
    },
    "StringShot": {
      "type": "bug",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 95,
      "desc": "Opposing Pokémon are bound with silk blown from the user's mouth that harshly lowers the Speed stat.",
      "name": "String Shot"
    },
    "StuffCheeks": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user eats its held Berry, then sharply raises its Defense stat.",
      "name": "Stuff Cheeks"
    },
    "StunSpore": {
      "type": "grass",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a cloud of numbing powder that paralyzes the target.",
      "name": "Stun Spore"
    },
    "Substitute": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy.",
      "name": "Substitute"
    },
    "SunnyDay": {
      "type": "fire",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.",
      "name": "Sunny Day"
    },
    "Supersonic": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 55,
      "desc": "The user generates odd sound waves from its body that confuse the target.",
      "name": "Supersonic"
    },
    "Swagger": {
      "type": "normal",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 85,
      "desc": "The user enrages and confuses the target. However, this also sharply raises the target's Attack stat.",
      "name": "Swagger"
    },
    "Swallow": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The power stored using the move Stockpile is absorbed by the user to heal its HP. Storing more power heals more HP.",
      "name": "Swallow"
    },
    "SweetKiss": {
      "type": "fairy",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 75,
      "desc": "The user kisses the target with a sweet, angelic cuteness that causes confusion.",
      "name": "Sweet Kiss"
    },
    "SweetScent": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A sweet scent that harshly lowers opposing Pokémon's evasiveness.",
      "name": "Sweet Scent"
    },
    "Switcheroo": {
      "type": "dark",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user trades held items with the target faster than the eye can follow.",
      "name": "Switcheroo"
    },
    "SwordsDance": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
      "name": "Swords Dance"
    },
    "Synthesis": {
      "type": "grass",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Synthesis"
    },
    "TailGlow": {
      "type": "bug",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Tail Glow"
    },
    "TailWhip": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user wags its tail cutely, making opposing Pokémon less wary and lowering their Defense stats.",
      "name": "Tail Whip"
    },
    "Tailwind": {
      "type": "flying",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user whips up a turbulent whirlwind that ups the Speed stats of the user and its allies for four turns.",
      "name": "Tailwind"
    },
    "TarShot": {
      "type": "rock",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user pours sticky tar over the target, lowering the target's Speed stat. The target becomes weaker to Fire-type moves.",
      "name": "Tar Shot"
    },
    "Taunt": {
      "type": "dark",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is taunted into a rage that allows it to use only attack moves for three turns.",
      "name": "Taunt"
    },
    "TearfulLook": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user gets teary eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats.",
      "name": "Tearful Look"
    },
    "Teatime": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user has teatime with all the Pokémon in the battle. Each Pokémon eats its held Berry.",
      "name": "Teatime"
    },
    "TeeterDance": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user performs a wobbly dance that confuses the Pokémon around it.",
      "name": "Teeter Dance"
    },
    "Telekinesis": {
      "type": "psychic",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Telekinesis"
    },
    "Teleport": {
      "type": "psychic",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user switches places with a party Pokémon in waiting, if any. If a wild Pokémon uses this move, it flees.",
      "name": "Teleport"
    },
    "ThunderWave": {
      "type": "electric",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 90,
      "desc": "The user launches a weak jolt of electricity that paralyzes the target.",
      "name": "Thunder Wave"
    },
    "Tickle": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user tickles the target into laughing, reducing its Attack and Defense stats.",
      "name": "Tickle"
    },
    "TopsyTurvy": {
      "type": "dark",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",
      "name": "Topsy-Turvy"
    },
    "Torment": {
      "type": "dark",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user torments and enrages the target, making it incapable of using the same move twice in a row.",
      "name": "Torment"
    },
    "Toxic": {
      "type": "poison",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "A move that leaves the target badly poisoned. Its poison damage worsens every turn.",
      "name": "Toxic"
    },
    "ToxicSpikes": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle.",
      "name": "Toxic Spikes"
    },
    "ToxicThread": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user shoots poisonous threads to poison the target and lower the target's Speed stat.",
      "name": "Toxic Thread"
    },
    "Transform": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user transforms into a copy of the target right down to having the same move set.",
      "name": "Transform"
    },
    "Trick": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user catches the target off guard and swaps its held item with its own.",
      "name": "Trick"
    },
    "TrickRoom": {
      "type": "psychic",
      "cat": "status",
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which slower Pokémon get to move first for five turns.",
      "name": "Trick Room"
    },
    "TrickorTreat": {
      "type": "ghost",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user takes the target trick-or-treating. This adds Ghost type to the target's type.",
      "name": "Trick-or-Treat"
    },
    "VenomDrench": {
      "type": "poison",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target.",
      "name": "Venom Drench"
    },
    "WaterSport": {
      "type": "water",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Water Sport"
    },
    "Whirlwind": {
      "type": "normal",
      "cat": "status",
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The target is blown away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Whirlwind"
    },
    "WideGuard": {
      "type": "rock",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and its allies are protected from wide-ranging attacks for one turn.",
      "name": "Wide Guard"
    },
    "WillOWisp": {
      "type": "fire",
      "cat": "status",
      "pp": 15,
      "dmg": 0,
      "acc": 85,
      "desc": "The user shoots a sinister flame at the target to inflict a burn.",
      "name": "Will-O-Wisp"
    },
    "Wish": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "One turn after this move is used, the user's or its replacement's HP is restored by half the user's max HP.",
      "name": "Wish"
    },
    "Withdraw": {
      "type": "water",
      "cat": "status",
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user withdraws its body into its hard shell, raising its Defense stat.",
      "name": "Withdraw"
    },
    "WonderRoom": {
      "type": "psychic",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns.",
      "name": "Wonder Room"
    },
    "WorkUp": {
      "type": "normal",
      "cat": "status",
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user is roused, and its Attack and Sp. Atk stats increase.",
      "name": "Work Up"
    },
    "WorrySeed": {
      "type": "grass",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia.",
      "name": "Worry Seed"
    },
    "Yawn": {
      "type": "normal",
      "cat": "status",
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.",
      "name": "Yawn"
    }
  }