const { Category, Type } = require('./general');

 exports.Move = {
  "Accelerock": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user smashes into the target at high speed. This move always goes first.",
      "name": "Accelerock"
  },
  "AcidDownpour": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Acid Downpour"
  },
  "Acrobatics": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 55,
      "acc": 100,
      "desc": "The user nimbly strikes the target. If the user is not holding an item, this attack inflicts massive damage.",
      "name": "Acrobatics"
  },
  "AerialAce": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user confounds the target with speed, then slashes. This attack never misses.",
      "name": "Aerial Ace"
  },
  "AllOutPummeling": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "All-Out Pummeling"
  },
  "AnchorShot": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user entangles the target with its anchor chain while attacking. The target becomes unable to flee.",
      "name": "Anchor Shot"
  },
  "AquaJet": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
      "name": "Aqua Jet"
  },
  "AquaTail": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The user attacks by swinging its tail as if it were a vicious wave in a raging storm.",
      "name": "Aqua Tail"
  },
  "ArmThrust": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 15,
      "acc": 100,
      "desc": "The user lets loose a flurry of open-palmed arm thrusts that hit two to five times in a row.",
      "name": "Arm Thrust"
  },
  "Assurance": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "If the target has already taken some damage in the same turn, this attack's power is doubled.",
      "name": "Assurance"
  },
  "Astonish": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 30,
      "acc": 100,
      "desc": "The user attacks the target while shouting in a startling fashion. This may also make the target flinch.",
      "name": "Astonish"
  },
  "AttackOrder": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user calls out its underlings to pummel the target. Critical hits land more easily.",
      "name": "Attack Order"
  },
  "AuraWheel": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 110,
      "acc": 100,
      "desc": "Morpeko attacks and raises its Speed with the energy stored in its cheeks. This move's type changes depending on the user's form.",
      "name": "Aura Wheel"
  },
  "Avalanche": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The power of this attack move is doubled if the user has been hurt by the target in the same turn.",
      "name": "Avalanche"
  },
  "Barrage": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Barrage"
  },
  "BeakBlast": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user first heats up its beak, and then it attacks the target. Making direct contact with the Pokémon while it's heating up its beak results in a burn.",
      "name": "Beak Blast"
  },
  "BeatUp": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gets all party Pokémon to attack the target. The more party Pokémon, the greater the number of attacks.",
      "name": "Beat Up"
  },
  "BehemothBash": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user becomes a gigantic shield and slams into the target. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Behemoth Bash"
  },
  "BehemothBlade": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user becomes a gigantic sword and cuts the target. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Behemoth Blade"
  },
  "Bide": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bide"
  },
  "Bind": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.",
      "name": "Bind"
  },
  "Bite": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is bitten with viciously sharp fangs. This may also make the target flinch.",
      "name": "Bite"
  },
  "BlackHoleEclipse": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Black Hole Eclipse"
  },
  "BlazeKick": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 90,
      "desc": "The user launches a kick that lands a critical hit more easily. This may also leave the target with a burn.",
      "name": "Blaze Kick"
  },
  "BloomDoom": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bloom Doom"
  },
  "BodyPress": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks by slamming its body into the target. The higher the user's Defense, the more damage it can inflict on the target.",
      "name": "Body Press"
  },
  "BodySlam": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 85,
      "acc": 100,
      "desc": "The user drops onto the target with its full body weight. This may also leave the target with paralysis.",
      "name": "Body Slam"
  },
  "BoltBeak": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user stabs the target with its electrified beak. If the user attacks before the target, the power of this move is doubled.",
      "name": "Bolt Beak"
  },
  "BoltStrike": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 130,
      "acc": 85,
      "desc": "The user surrounds itself with a great amount of electricity and charges its target. This may also leave the target with paralysis.",
      "name": "Bolt Strike"
  },
  "BoneClub": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bone Club"
  },
  "BoneRush": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 25,
      "acc": 90,
      "desc": "The user strikes the target with a hard bone two to five times in a row.",
      "name": "Bone Rush"
  },
  "Bonemerang": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 50,
      "acc": 90,
      "desc": "The user throws the bone it holds. The bone loops around to hit the target twiceâ€”coming and going.",
      "name": "Bonemerang"
  },
  "Bounce": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 85,
      "acc": 85,
      "desc": "The user bounces up high, then drops on the target on the second turn. This may also leave the target with paralysis.",
      "name": "Bounce"
  },
  "BranchPoke": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks the target by poking it with a sharply pointed branch.",
      "name": "Branch Poke"
  },
  "BraveBird": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user tucks in its wings and charges from a low altitude. This also damages the user quite a lot.",
      "name": "Brave Bird"
  },
  "BreakingSwipe": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user swings its tough tail wildly and attacks opposing Pokémon. This also lowers their Attack stats.",
      "name": "Breaking Swipe"
  },
  "BreakneckBlitz": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Breakneck Blitz"
  },
  "BrickBreak": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks with a swift chop. It can also break barriers, such as Light Screen and Reflect.",
      "name": "Brick Break"
  },
  "BrutalSwing": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user swings its body around violently to inflict damage on everything in its vicinity.",
      "name": "Brutal Swing"
  },
  "BugBite": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user bites the target. If the target is holding a Berry, the user eats it and gains its effect.",
      "name": "Bug Bite"
  },
  "Bulldoze": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user strikes everything around it by stomping down on the ground. This lowers the Speed stats of those hit.",
      "name": "Bulldoze"
  },
  "BulletPunch": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user strikes the target with tough punches as fast as bullets. This move always goes first.",
      "name": "Bullet Punch"
  },
  "BulletSeed": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 25,
      "acc": 100,
      "desc": "The user forcefully shoots seeds at the target two to five times in a row.",
      "name": "Bullet Seed"
  },
  "Catastropika": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 210,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Catastropika"
  },
  "ChipAway": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Chip Away"
  },
  "CircleThrow": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The target is thrown, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Circle Throw"
  },
  "Clamp": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Clamp"
  },
  "CloseCombat": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user fights the target up close without guarding itself. This also lowers the user's Defense and Sp. Def stats.",
      "name": "Close Combat"
  },
  "CometPunch": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 18,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Comet Punch"
  },
  "Constrict": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 10,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Constrict"
  },
  "ContinentalCrush": {
      "type": Type.Rock,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Continental Crush"
  },
  "CorkscrewCrash": {
      "type": Type.Steel,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Corkscrew Crash"
  },
  "Counter": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A retaliation move that counters any physical attack, inflicting double the damage taken.",
      "name": "Counter"
  },
  "Covet": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user endearingly approaches the target, then steals the target's held item.",
      "name": "Covet"
  },
  "Crabhammer": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The target is hammered with a large pincer. Critical hits land more easily.",
      "name": "Crabhammer"
  },
  "CrossChop": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 80,
      "desc": "The user delivers a double chop with its forearms crossed. Critical hits land more easily.",
      "name": "Cross Chop"
  },
  "CrossPoison": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "A slashing attack with a poisonous blade that may also poison the target. Critical hits land more easily.",
      "name": "Cross Poison"
  },
  "Crunch": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.",
      "name": "Crunch"
  },
  "CrushClaw": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 95,
      "desc": "The user slashes the target with hard and sharp claws. This may also lower the target's Defense stat.",
      "name": "Crush Claw"
  },
  "CrushGrip": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is crushed with great force. The more HP the target has left, the greater this move's power.",
      "name": "Crush Grip"
  },
  "Cut": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 50,
      "acc": 95,
      "desc": "The target is cut with a scythe or claw.",
      "name": "Cut"
  },
  "DarkestLariat": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user swings both arms and hits the target. The target's stat changes don't affect this attack's damage.",
      "name": "Darkest Lariat"
  },
  "DevastatingDrake": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Devastating Drake"
  },
  "DiamondStorm": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The user whips up a storm of diamonds to damage opposing Pokémon. This may also sharply raise the user's Defense stat.",
      "name": "Diamond Storm"
  },
  "Dig": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user burrows into the ground, then attacks on the next turn.",
      "name": "Dig"
  },
  "Dive": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "Diving on the first turn, the user floats up and attacks on the next turn.",
      "name": "Dive"
  },
  "DizzyPunch": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Dizzy Punch"
  },
  "DoubleHit": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 35,
      "acc": 90,
      "desc": "The user slams the target with a long tail, vines, or a tentacle. The target is hit twice in a row.",
      "name": "Double Hit"
  },
  "DoubleIronBash": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "The user rotates, centering the hex nut in its chest, and then strikes with its arms twice in a row. This may also make the target flinch.",
      "name": "Double Iron Bash"
  },
  "DoubleKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 30,
      "acc": 100,
      "desc": "The target is quickly kicked twice in succession using both feet.",
      "name": "Double Kick"
  },
  "DoubleSlap": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 15,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Double Slap"
  },
  "DoubleEdge": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "A reckless, life-risking tackle in which the user rushes the target. This also damages the user quite a lot.",
      "name": "Double-Edge"
  },
  "DragonAscent": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "After soaring upward, the user attacks its target by dropping out of the sky at high speeds. But it lowers its own Defense and Sp. Def stats in the process.",
      "name": "Dragon Ascent"
  },
  "DragonClaw": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slashes the target with huge sharp claws.",
      "name": "Dragon Claw"
  },
  "DragonDarts": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user attacks twice using Dreepy. If there are two targets, this move hits each target once.",
      "name": "Dragon Darts"
  },
  "DragonHammer": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user uses its body like a hammer to attack the target and inflict damage.",
      "name": "Dragon Hammer"
  },
  "DragonRush": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 75,
      "desc": "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
      "name": "Dragon Rush"
  },
  "DragonTail": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The target is knocked away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Dragon Tail"
  },
  "DrainPunch": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "An energy-draining punch. The user's HP is restored by half the damage taken by the target.",
      "name": "Drain Punch"
  },
  "DrillPeck": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "A corkscrewing attack that strikes the target with a sharp beak acting as a drill.",
      "name": "Drill Peck"
  },
  "DrillRun": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 95,
      "desc": "The user crashes into its target while rotating its body like a drill. Critical hits land more easily.",
      "name": "Drill Run"
  },
  "DrumBeating": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user plays its drum, controlling the drum's roots to attack the target. This also lowers the target's Speed stat.",
      "name": "Drum Beating"
  },
  "DualChop": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 40,
      "acc": 90,
      "desc": "The user attacks its target by hitting it with brutal strikes. The target is hit twice in a row.",
      "name": "Dual Chop"
  },
  "DualWingbeat": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 40,
      "acc": 90,
      "desc": "The user slams the target with its wings. The target is hit twice in a row.",
      "name": "Dual Wingbeat"
  },
  "DynamicPunch": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 50,
      "desc": "The user punches the target with full, concentrated power. This confuses the target if it hits.",
      "name": "Dynamic Punch"
  },
  "Earthquake": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user sets off an earthquake that strikes every Pokémon around it.",
      "name": "Earthquake"
  },
  "EggBomb": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 75,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Egg Bomb"
  },
  "Endeavor": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This attack move cuts down the target's HP to equal the user's HP.",
      "name": "Endeavor"
  },
  "Explosion": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 250,
      "acc": 100,
      "desc": "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
      "name": "Explosion"
  },
  "ExtremeSpeed": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user charges the target at blinding speed. This move always goes first.",
      "name": "Extreme Speed"
  },
  "Facade": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This attack move doubles its power if the user is poisoned, burned, or paralyzed.",
      "name": "Facade"
  },
  "FakeOut": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 40,
      "acc": 100,
      "desc": "This attack hits first and makes the target flinch. It only works the first turn each time the user enters battle.",
      "name": "Fake Out"
  },
  "FalseSurrender": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 101,
      "desc": "The user pretends to bow its head, but then it stabs the target with its disheveled hair. This attack never misses.",
      "name": "False Surrender"
  },
  "FalseSwipe": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "A restrained attack that prevents the target from fainting. The target is left with at least 1 HP.",
      "name": "False Swipe"
  },
  "Feint": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 30,
      "acc": 100,
      "desc": "This attack hits a target using a move such as Protect or Detect. This also lifts the effects of those moves.",
      "name": "Feint"
  },
  "FeintAttack": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Feint Attack"
  },
  "FellStinger": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "When the user knocks out a target with this move, the user's Attack stat rises drastically.",
      "name": "Fell Stinger"
  },
  "FireFang": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with flame-cloaked fangs. This may also make the target flinch or leave it with a burn.",
      "name": "Fire Fang"
  },
  "FireLash": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes the target with a burning lash. This also lowers the target's Defense stat.",
      "name": "Fire Lash"
  },
  "FirePunch": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with a fiery fist. This may also leave the target with a burn.",
      "name": "Fire Punch"
  },
  "FirstImpression": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "Although this move has great power, it only works the first turn each time the user enters battle.",
      "name": "First Impression"
  },
  "FishiousRend": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user rends the target with its hard gills. If the user attacks before the target, the power of this move is doubled.",
      "name": "Fishious Rend"
  },
  "Fissure": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The user opens up a fissure in the ground and drops the target in. The target faints instantly if this attack hits.",
      "name": "Fissure"
  },
  "Flail": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user flails about aimlessly to attack. The less HP the user has, the greater the move's power.",
      "name": "Flail"
  },
  "FlameCharge": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 50,
      "acc": 100,
      "desc": "Cloaking itself in flame, the user attacks the target. Then, building up more power, the user raises its Speed stat.",
      "name": "Flame Charge"
  },
  "FlameWheel": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user cloaks itself in fire and charges at the target. This may also leave the target with a burn.",
      "name": "Flame Wheel"
  },
  "FlareBlitz": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This attack may leave the target with a burn.",
      "name": "Flare Blitz"
  },
  "Fling": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user flings its held item at the target to attack. This move's power and effects depend on the item.",
      "name": "Fling"
  },
  "FlipTurn": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "Flip Turn"
  },
  "FloatyFall": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Floaty Fall"
  },
  "Fly": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 95,
      "desc": "The user flies up into the sky and then strikes its target on the next turn.",
      "name": "Fly"
  },
  "FlyingPress": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 95,
      "desc": "The user dives down onto the target from the sky. This move is Fighting and Flying type simultaneously.",
      "name": "Flying Press"
  },
  "FocusPunch": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 150,
      "acc": 100,
      "desc": "The user focuses its mind before launching a punch. This move fails if the user is hit before it is used.",
      "name": "Focus Punch"
  },
  "ForcePalm": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is attacked with a shock wave. This may also leave the target with paralysis.",
      "name": "Force Palm"
  },
  "FoulPlay": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 95,
      "acc": 100,
      "desc": "The user turns the target's power against it. The higher the target's Attack stat, the greater the damage it deals.",
      "name": "Foul Play"
  },
  "FreezeShock": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "On the second turn, the user hits the target with electrically charged ice. This may also leave the target with paralysis.",
      "name": "Freeze Shock"
  },
  "Frustration": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Frustration"
  },
  "FuryAttack": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 15,
      "acc": 85,
      "desc": "The target is jabbed repeatedly with a horn or beak two to five times in a row.",
      "name": "Fury Attack"
  },
  "FuryCutter": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 95,
      "desc": "The target is slashed with scythes or claws. This attack becomes more powerful if it hits in succession.",
      "name": "Fury Cutter"
  },
  "FurySwipes": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 18,
      "acc": 80,
      "desc": "The target is raked with sharp claws or scythes quickly two to five times in a row.",
      "name": "Fury Swipes"
  },
  "FusionBolt": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user throws down a giant lightning bolt. This move's power is increased when influenced by an enormous flame.",
      "name": "Fusion Bolt"
  },
  "GMaxBefuddle": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Bug-type attack that Gigantamax Butterfree use. This move inflicts the poisoned, paralyzed, or asleep status condition on opponents.",
      "name": "G-Max Befuddle"
  },
  "GMaxCannonade": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Blastoise use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Cannonade"
  },
  "GMaxCentiferno": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Centiskorch use. This move traps opponents in flames for four to five turns.",
      "name": "G-Max Centiferno"
  },
  "GMaxChiStrike": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fighting-type attack that Gigantamax Machamp use. This move raises the chance of critical hits.",
      "name": "G-Max Chi Strike"
  },
  "GMaxCuddle": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Eevee use. This move infatuates opponents.",
      "name": "G-Max Cuddle"
  },
  "GMaxDepletion": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dragon-type attack that Gigantamax Duraludon use. Reduces the PP of the last move used.",
      "name": "G-Max Depletion"
  },
  "GMaxDrumSolo": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Rillaboom use. This move can be used on the target regardless of its Abilities.",
      "name": "G-Max Drum Solo"
  },
  "GMaxFinale": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fairy-type attack that Gigantamax Alcremie use. This move heals the HP of allies.",
      "name": "G-Max Finale"
  },
  "GMaxFireball": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Cinderace use. This move can be used on the target regardless of its Abilities",
      "name": "G-Max Fireball"
  },
  "GMaxFoamBurst": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Kingler use. This move harshly lowers the Speed of opponents.",
      "name": "G-Max Foam Burst"
  },
  "GMaxGoldRush": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Meowth use. This move confuses opponents and also earns extra money.",
      "name": "G-Max Gold Rush"
  },
  "GMaxGravitas": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Psychic-type attack that Gigantamax Orbeetle use. This move changes gravity for five turns.",
      "name": "G-Max Gravitas"
  },
  "GMaxHydrosnipe": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Inteleon use. This move can be used on the target regardless of its Abilities.",
      "name": "G-Max Hydrosnipe"
  },
  "GMaxMalodor": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Poison-type attack that Gigantamax Garbodor use. This move poisons opponents.",
      "name": "G-Max Malodor"
  },
  "GMaxMeltdown": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Steel-type attack that Gigantamax Melmetal use. This move makes opponents incapable of using the same move twice in a row.",
      "name": "G-Max Meltdown"
  },
  "GMaxOneBlow": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dark-type attack that Gigantamax Urshifu use. This single-strike move can ignore Max Guard.",
      "name": "G-Max One Blow"
  },
  "GMaxRapidFlow": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Urshifu use. This rapid-strike move can ignore Max Guard.",
      "name": "G-Max Rapid Flow"
  },
  "GMaxReplenish": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Normal-type attack that Gigantamax Snorlax use. This move restores Berries that have been eaten.",
      "name": "G-Max Replenish"
  },
  "GMaxResonance": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Ice-type attack that Gigantamax Lapras use. This move reduces the damage received for five turns.",
      "name": "G-Max Resonance"
  },
  "GMaxSandblast": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Ground-type attack that Gigantamax Sandaconda use. Opponents are trapped in a raging sandstorm for four to five turns.",
      "name": "G-Max Sandblast"
  },
  "GMaxSmite": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fairy-type attack that Gigantamax Hatterene use. This move confuses opponents.",
      "name": "G-Max Smite"
  },
  "GMaxSnooze": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Dark-type attack that Gigantamax Grimmsnarl use. The user lets loose a huge yawn that lulls the targets into falling asleep on the next turn.",
      "name": "G-Max Snooze"
  },
  "GMaxSteelsurge": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Steel-type attack that Gigantamax Copperajah use. This move scatters sharp spikes around the field.",
      "name": "G-Max Steelsurge"
  },
  "GMaxStonesurge": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Water-type attack that Gigantamax Drednaw use. This move scatters sharp rocks around the field.",
      "name": "G-Max Stonesurge"
  },
  "GMaxStunShock": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Electric-type attack that Gigantamax Toxtricity use. This move poisons or paralyzes opponents.",
      "name": "G-Max Stun Shock"
  },
  "GMaxSweetness": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Appletun use. This move heals the status conditions of allies.",
      "name": "G-Max Sweetness"
  },
  "GMaxTartness": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Flapple use. This move reduces the opponentsâ€™ evasiveness.",
      "name": "G-Max Tartness"
  },
  "GMaxTerror": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Ghost-type attack that Gigantamax Gengar use. This Pokémon steps on the opposing Pokémonâ€™s shadow to prevent them from escaping.",
      "name": "G-Max Terror"
  },
  "GMaxVineLash": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Grass-type attack that Gigantamax Venusaur use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Vine Lash"
  },
  "GMaxVolcalith": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Rock-type attack that Gigantamax Coalossal use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Volcalith"
  },
  "GMaxVoltCrash": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "An Electric-type attack that Gigantamax Pikachu use. This move paralyzes opponents.",
      "name": "G-Max Volt Crash"
  },
  "GMaxWildfire": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.",
      "name": "G-Max Wildfire"
  },
  "GMaxWindRage": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A Flying-type attack that Gigantamax Corviknight use. This move removes the effects of moves like Reflect and Light Screen.",
      "name": "G-Max Wind Rage"
  },
  "GearGrind": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 50,
      "acc": 85,
      "desc": "The user attacks by throwing steel gears at its target twice.",
      "name": "Gear Grind"
  },
  "GigaImpact": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user charges at the target using every bit of its power. The user can't move on the next turn.",
      "name": "Giga Impact"
  },
  "GigavoltHavoc": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Gigavolt Havoc"
  },
  "GlacialLance": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "The user attacks by hurling a blizzard-cloaked icicle lance at opposing Pokémon.",
      "name": "Glacial Lance"
  },
  "GrassyGlide": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "Gliding on the ground, the user attacks the target. This move always goes first on Grassy Terrain.",
      "name": "Grassy Glide"
  },
  "GravApple": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user inflicts damage by dropping an apple from high above. This also lowers the target's Defense stat.",
      "name": "Grav Apple"
  },
  "Guillotine": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "A vicious, tearing attack with big pincers. The target faints instantly if this attack hits.",
      "name": "Guillotine"
  },
  "GunkShot": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 80,
      "desc": "The user shoots filthy garbage at the target to attack. This may also poison the target.",
      "name": "Gunk Shot"
  },
  "GyroBall": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user tackles the target with a high-speed spin. The slower the user compared to the target, the greater the move's power.",
      "name": "Gyro Ball"
  },
  "HammerArm": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
      "name": "Hammer Arm"
  },
  "HeadCharge": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user charges its head into its target, using its powerful guard hair. This also damages the user a little.",
      "name": "Head Charge"
  },
  "HeadSmash": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 150,
      "acc": 80,
      "desc": "The user attacks the target with a hazardous, full-power headbutt. This also damages the user terribly.",
      "name": "Head Smash"
  },
  "Headbutt": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.",
      "name": "Headbutt"
  },
  "HeartStamp": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heart Stamp"
  },
  "HeatCrash": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user slams its target with its flame-covered body. The more the user outweighs the target, the greater the move's power.",
      "name": "Heat Crash"
  },
  "HeavySlam": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user slams into the target with its heavy body. The more the user outweighs the target, the greater the move's power.",
      "name": "Heavy Slam"
  },
  "HighHorsepower": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 95,
      "acc": 95,
      "desc": "The user fiercely attacks the target using its entire body.",
      "name": "High Horsepower"
  },
  "HighJumpKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 130,
      "acc": 90,
      "desc": "The target is attacked with a knee kick from a jump. If it misses, the user is hurt instead.",
      "name": "High Jump Kick"
  },
  "HoldBack": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user holds back when it attacks, and the target is left with at least 1 HP.",
      "name": "Hold Back"
  },
  "HornAttack": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is jabbed with a sharply pointed horn to inflict damage.",
      "name": "Horn Attack"
  },
  "HornDrill": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.",
      "name": "Horn Drill"
  },
  "HornLeech": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user drains the target's energy with its horns. The user's HP is restored by half the damage taken by the target.",
      "name": "Horn Leech"
  },
  "HydroVortex": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Hydro Vortex"
  },
  "HyperFang": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user bites hard on the target with its sharp front fangs. This may also make the target flinch.",
      "name": "Hyper Fang"
  },
  "HyperspaceFury": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 101,
      "desc": "Using its many arms, the user unleashes a barrage of attacks that ignore the effects of moves like Protect and Detect. But the user's Defense stat falls.",
      "name": "Hyperspace Fury"
  },
  "IceBall": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 30,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ice Ball"
  },
  "IceFang": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with cold-infused fangs. This may also make the target flinch or leave it frozen.",
      "name": "Ice Fang"
  },
  "IceHammer": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "The user swings and hits with its strong, heavy fist. It lowers the user's Speed, however.",
      "name": "Ice Hammer"
  },
  "IcePunch": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with an icy fist. This may also leave the target frozen.",
      "name": "Ice Punch"
  },
  "IceShard": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user flash-freezes chunks of ice and hurls them at the target. This move always goes first.",
      "name": "Ice Shard"
  },
  "IcicleCrash": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 90,
      "desc": "The user attacks by harshly dropping large icicles onto the target. This may also make the target flinch.",
      "name": "Icicle Crash"
  },
  "IcicleSpear": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 25,
      "acc": 100,
      "desc": "The user launches sharp icicles at the target two to five times in a row.",
      "name": "Icicle Spear"
  },
  "InfernoOverdrive": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Inferno Overdrive"
  },
  "IronHead": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slams the target with its steel-hard head. This may also make the target flinch.",
      "name": "Iron Head"
  },
  "IronTail": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 100,
      "acc": 75,
      "desc": "The target is slammed with a steel-hard tail. This may also lower the target's Defense stat.",
      "name": "Iron Tail"
  },
  "JawLock": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move prevents the user and the target from switching out until either of them faints. The effect goes away if either of the Pokémon leaves the field.",
      "name": "Jaw Lock"
  },
  "JumpKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Jump Kick"
  },
  "KarateChop": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Karate Chop"
  },
  "KnockOff": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user slaps down the target's held item, and that item can't be used in that battle. The move does more damage if the target has a held item.",
      "name": "Knock Off"
  },
  "LandsWrath": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user gathers the energy of the land and focuses that power on opposing Pokémon to damage them.",
      "name": "Land's Wrath"
  },
  "LashOut": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 75,
      "acc": 100,
      "desc": "The user lashes out to vent its frustration toward the target. If the user's stats were lowered during this turn, the power of this move is doubled.",
      "name": "Lash Out"
  },
  "LastResort": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 140,
      "acc": 100,
      "desc": "This move can be used only after the user has used all the other moves it knows in the battle.",
      "name": "Last Resort"
  },
  "LeafBlade": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user handles a sharp leaf like a sword and attacks by cutting its target. Critical hits land more easily.",
      "name": "Leaf Blade"
  },
  "Leafage": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 40,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks by pelting the target with leaves.",
      "name": "Leafage"
  },
  "LeechLife": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user drains the target's blood. The user's HP is restored by half the damage taken by the target.",
      "name": "Leech Life"
  },
  "Let'sSnuggleForever": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 190,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Let's Snuggle Forever"
  },
  "Lick": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 30,
      "acc": 100,
      "desc": "The target is licked with a long tongue, causing damage. This may also leave the target with paralysis.",
      "name": "Lick"
  },
  "Liquidation": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user slams into the target using a full-force blast of water. This may also lower the target's Defense stat.",
      "name": "Liquidation"
  },
  "LowKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.",
      "name": "Low Kick"
  },
  "LowSweep": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user makes a swift attack on the target's legs, which lowers the target's Speed stat.",
      "name": "Low Sweep"
  },
  "Lunge": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user makes a lunge at the target, attacking with full force. This also lowers the target's Attack stat.",
      "name": "Lunge"
  },
  "MachPunch": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user throws a punch at blinding speed. This move always goes first.",
      "name": "Mach Punch"
  },
  "MagnetBomb": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Magnet Bomb"
  },
  "Magnitude": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Magnitude"
  },
  "MaliciousMoonsault": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 180,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Malicious Moonsault"
  },
  "MaxAirstream": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Flying-type attack Dynamax Pokémon use. This raises ally Pokémon's Speed stats.",
      "name": "Max Airstream"
  },
  "MaxDarkness": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Dark-type attack Dynamax Pokémon use. This lowers the target's Sp. Def stat.",
      "name": "Max Darkness"
  },
  "MaxFlare": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fire-type attack Dynamax Pokémon use. The user intensifies the sun for five turns.",
      "name": "Max Flare"
  },
  "MaxFlutterby": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Bug-type attack Dynamax Pokémon use. This lowers the target's Sp. Atk stat.",
      "name": "Max Flutterby"
  },
  "MaxGeyser": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Water-type attack Dynamax Pokémon use. The user summons a heavy rain that falls for five turns.",
      "name": "Max Geyser"
  },
  "MaxHailstorm": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is an Ice-type attack Dynamax Pokémon use. The user summons a hailstorm lasting five turns.",
      "name": "Max Hailstorm"
  },
  "MaxKnuckle": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fighting-type attack Dynamax Pokémon use. This raises ally Pokémon's Attack stats.",
      "name": "Max Knuckle"
  },
  "MaxLightning": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is an Electric-type attack Dynamax Pokémon use. The user turns the ground into Electric Terrain for five turns.",
      "name": "Max Lightning"
  },
  "MaxMindstorm": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Psychic-type attack Dynamax Pokémon use. The user turns the ground into Psychic Terrain for five turns.",
      "name": "Max Mindstorm"
  },
  "MaxOoze": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Poison-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Atk stats.",
      "name": "Max Ooze"
  },
  "MaxOvergrowth": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Grass-type attack Dynamax Pokémon use. The user turns the ground into Grassy Terrain for five turns.",
      "name": "Max Overgrowth"
  },
  "MaxPhantasm": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Ghost-type attack Dynamax Pokémon use. This lowers the target's Defense stat.",
      "name": "Max Phantasm"
  },
  "MaxQuake": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Ground-type attack Dynamax Pokémon use. This raises ally Pokémon's Sp. Def stats.",
      "name": "Max Quake"
  },
  "MaxRockfall": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Rock-type attack Dynamax Pokémon use. The user summons a sandstorm lasting five turns.",
      "name": "Max Rockfall"
  },
  "MaxStarfall": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Fairy-type attack Dynamax Pokémon use. The user turns the ground into Misty Terrain for five turns.",
      "name": "Max Starfall"
  },
  "MaxSteelspike": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Steel-type attack Dynamax Pokémon use. This raises ally Pokémon's Defense stats.",
      "name": "Max Steelspike"
  },
  "MaxStrike": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Normal-type attack Dynamax Pokémon use. This lowers the target's Speed stat.",
      "name": "Max Strike"
  },
  "MaxWyrmwind": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This is a Dragon-type attack Dynamax Pokémon use. This lowers the target's Attack stat.",
      "name": "Max Wyrmwind"
  },
  "MegaKick": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 75,
      "desc": "The target is attacked by a kick launched with muscle-packed power.",
      "name": "Mega Kick"
  },
  "MegaPunch": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 85,
      "desc": "The target is slugged by a punch thrown with muscle-packed power.",
      "name": "Mega Punch"
  },
  "Megahorn": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "Using its tough and impressive horn, the user rams into the target with no letup.",
      "name": "Megahorn"
  },
  "MetalBurst": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user retaliates with much greater force against the opponent that last inflicted damage on it.",
      "name": "Metal Burst"
  },
  "MetalClaw": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 50,
      "acc": 95,
      "desc": "The target is raked with steel claws. This may also raise the user's Attack stat.",
      "name": "Metal Claw"
  },
  "MeteorAssault": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks wildly with its thick leek. The user can't move on the next turn, because the force of this move makes it stagger.",
      "name": "Meteor Assault"
  },
  "MeteorMash": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The target is hit with a hard punch fired like a meteor. This may also raise the user's Attack stat.",
      "name": "Meteor Mash"
  },
  "MultiAttack": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "Cloaking itself in high energy, the user slams into the target. The memory held determines the move's type.",
      "name": "Multi-Attack"
  },
  "NaturalGift": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Natural Gift"
  },
  "NeedleArm": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Needle Arm"
  },
  "NeverEndingNightmare": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Never-Ending Nightmare"
  },
  "NightSlash": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user slashes the target the instant an opportunity arises. Critical hits land more easily.",
      "name": "Night Slash"
  },
  "Nuzzle": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "The user attacks by nuzzling its electrified cheeks against the target. This also leaves the target with paralysis.",
      "name": "Nuzzle"
  },
  "Outrage": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
      "name": "Outrage"
  },
  "PayDay": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "Numerous coins are hurled at the target to inflict damage. Money is earned after the battle.",
      "name": "Pay Day"
  },
  "Payback": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user stores power, then attacks. If the user moves after the target, this attack's power will be doubled.",
      "name": "Payback"
  },
  "Peck": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 35,
      "acc": 100,
      "desc": "The target is jabbed with a sharply pointed beak or horn.",
      "name": "Peck"
  },
  "PetalBlizzard": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user stirs up a violent petal blizzard and attacks everything around it.",
      "name": "Petal Blizzard"
  },
  "PhantomForce": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user vanishes somewhere, then strikes the target on the next turn. This move hits even if the target protects itself.",
      "name": "Phantom Force"
  },
  "PinMissile": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 25,
      "acc": 95,
      "desc": "Sharp spikes are shot at the target in rapid succession. They hit two to five times in a row.",
      "name": "Pin Missile"
  },
  "PlasmaFists": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks with electrically charged fists. This move changes Normal-type moves to Electric-type moves.",
      "name": "Plasma Fists"
  },
  "PlayRough": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 90,
      "desc": "The user plays rough with the target and attacks it. This may also lower the target's Attack stat.",
      "name": "Play Rough"
  },
  "Pluck": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user pecks the target. If the target is holding a Berry, the user eats it and gains its effect.",
      "name": "Pluck"
  },
  "PoisonFang": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "The user bites the target with toxic fangs. This may also leave the target badly poisoned.",
      "name": "Poison Fang"
  },
  "PoisonJab": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The target is stabbed with a tentacle, arm, or the like steeped in poison. This may also poison the target.",
      "name": "Poison Jab"
  },
  "PoisonSting": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 15,
      "acc": 100,
      "desc": "The user stabs the target with a poisonous stinger. This may also poison the target.",
      "name": "Poison Sting"
  },
  "PoisonTail": {
      "type": Type.Poison,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "The user hits the target with its tail. This may also poison the target. Critical hits land more easily.",
      "name": "Poison Tail"
  },
  "Poltergeist": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 110,
      "acc": 90,
      "desc": "The user attacks the target by controlling the target's item. The move fails if the target doesn't have an item.",
      "name": "Poltergeist"
  },
  "Pound": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is physically pounded with a long tail, a foreleg, or the like.",
      "name": "Pound"
  },
  "PowerTrip": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user boasts its strength and attacks the target. The more the user's stats are raised, the greater the move's power.",
      "name": "Power Trip"
  },
  "PowerWhip": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "The user violently whirls its vines, tentacles, or the like to harshly lash the target.",
      "name": "Power Whip"
  },
  "PowerUpPunch": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "Striking opponents over and over makes the user's fists harder. Hitting a target raises the Attack stat.",
      "name": "Power-Up Punch"
  },
  "PrecipiceBlades": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 85,
      "desc": "The user attacks opposing Pokémon by manifesting the power of the land in fearsome blades of stone.",
      "name": "Precipice Blades"
  },
  "Present": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 0,
      "acc": 90,
      "desc": "The user attacks by giving the target a gift with a hidden trap. It restores HP sometimes, however.",
      "name": "Present"
  },
  "PsychicFangs": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user bites the target with its psychic capabilities. This can also destroy Light Screen and Reflect.",
      "name": "Psychic Fangs"
  },
  "PsychoCut": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user tears at the target with blades formed by psychic power. Critical hits land more easily.",
      "name": "Psycho Cut"
  },
  "PulverizingPancake": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 210,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pulverizing Pancake"
  },
  "Punishment": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Punishment"
  },
  "Pursuit": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pursuit"
  },
  "PyroBall": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 90,
      "desc": "The user attacks by igniting a small stone and launching it as a fiery ball at the target. This may also leave the target with a burn.",
      "name": "Pyro Ball"
  },
  "QuickAttack": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user lunges at the target at a speed that makes it almost invisible. This move always goes first.",
      "name": "Quick Attack"
  },
  "Rage": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rage"
  },
  "RapidSpin": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 40,
      "dmg": 50,
      "acc": 100,
      "desc": "A spin attack that can also eliminate such moves as Bind, Wrap, and Leech Seed. This also raises the user's Speed stat.",
      "name": "Rapid Spin"
  },
  "RazorLeaf": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 55,
      "acc": 95,
      "desc": "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.",
      "name": "Razor Leaf"
  },
  "RazorShell": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 95,
      "desc": "The user cuts its target with sharp shells. This may also lower the target's Defense stat.",
      "name": "Razor Shell"
  },
  "Retaliate": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user gets revenge for a fainted ally. If an ally fainted in the previous turn, this move's power is increased.",
      "name": "Retaliate"
  },
  "Return": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Return"
  },
  "Revenge": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "This attack move's power is doubled if the user has been hurt by the opponent in the same turn.",
      "name": "Revenge"
  },
  "Reversal": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "An all-out attack that becomes more powerful the less HP the user has.",
      "name": "Reversal"
  },
  "RockBlast": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 25,
      "acc": 90,
      "desc": "The user hurls hard rocks at the target. Two to five rocks are launched in a row.",
      "name": "Rock Blast"
  },
  "RockClimb": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 90,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rock Climb"
  },
  "RockSlide": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 90,
      "desc": "Large boulders are hurled at opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.",
      "name": "Rock Slide"
  },
  "RockSmash": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks with a punch. This may also lower the target's Defense stat.",
      "name": "Rock Smash"
  },
  "RockThrow": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 50,
      "acc": 90,
      "desc": "The user picks up and throws a small rock at the target to attack.",
      "name": "Rock Throw"
  },
  "RockTomb": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 60,
      "acc": 95,
      "desc": "Boulders are hurled at the target. This also lowers the target's Speed stat by preventing its movement.",
      "name": "Rock Tomb"
  },
  "RockWrecker": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user launches a huge boulder at the target to attack. The user can't move on the next turn.",
      "name": "Rock Wrecker"
  },
  "RollingKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 60,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rolling Kick"
  },
  "Rollout": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 30,
      "acc": 90,
      "desc": "The user continually rolls into the target over five turns. It becomes more powerful each time it hits.",
      "name": "Rollout"
  },
  "SacredFire": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The target is razed with a mystical fire of great intensity. This may also leave the target with a burn.",
      "name": "Sacred Fire"
  },
  "SacredSword": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks by slicing with a long horn. The target's stat changes don't affect this attack's damage.",
      "name": "Sacred Sword"
  },
  "SandTomb": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The user traps the target inside a harshly raging sandstorm for four to five turns.",
      "name": "Sand Tomb"
  },
  "SappySeed": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sappy Seed"
  },
  "SavageSpinOut": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Savage Spin-Out"
  },
  "ScaleShot": {
      "type": "dragon",
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 25,
      "acc": 90,
      "desc": "The user attacks by shooting scales two to five times in a row. This move boosts the user's Speed stat but lowers its Defense stat.",
      "name": "Scale Shot"
  },
  "Scratch": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "Hard, pointed, sharp claws rake the target to inflict damage.",
      "name": "Scratch"
  },
  "SearingSunrazeSmash": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Searing Sunraze Smash"
  },
  "SecretPower": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Secret Power"
  },
  "SeedBomb": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slams a barrage of hard-shelled seeds down on the target from above.",
      "name": "Seed Bomb"
  },
  "SeismicToss": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
      "name": "Seismic Toss"
  },
  "SelfDestruct": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 200,
      "acc": 100,
      "desc": "The user attacks everything around it by causing an explosion. The user faints upon using this move.",
      "name": "Self-Destruct"
  },
  "ShadowBone": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user attacks by beating the target with a bone that contains a spirit. This may also lower the target's Defense stat.",
      "name": "Shadow Bone"
  },
  "ShadowClaw": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user slashes with a sharp claw made from shadows. Critical hits land more easily.",
      "name": "Shadow Claw"
  },
  "ShadowForce": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user disappears, then strikes the target on the next turn. This move hits even if the target protects itself.",
      "name": "Shadow Force"
  },
  "ShadowPunch": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user throws a punch from the shadows. This attack never misses.",
      "name": "Shadow Punch"
  },
  "ShadowSneak": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user extends its shadow and attacks the target from behind. This move always goes first.",
      "name": "Shadow Sneak"
  },
  "ShatteredPsyche": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Shattered Psyche"
  },
  "SinisterArrowRaid": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 180,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sinister Arrow Raid"
  },
  "SizzlySlide": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sizzly Slide"
  },
  "SkitterSmack": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 90,
      "desc": "The user skitters behind the target to attack. This also lowers the target's Sp. Atk stat.",
      "name": "Skitter Smack"
  },
  "SkullBash": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 130,
      "acc": 100,
      "desc": "The user tucks in its head to raise its Defense stat on the first turn, then rams the target on the next turn.",
      "name": "Skull Bash"
  },
  "SkyAttack": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "A second-turn attack move where critical hits land more easily. This may also make the target flinch.",
      "name": "Sky Attack"
  },
  "SkyDrop": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sky Drop"
  },
  "SkyUppercut": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 85,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sky Uppercut"
  },
  "Slam": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 75,
      "desc": "The target is slammed with a long tail, vines, or the like to inflict damage.",
      "name": "Slam"
  },
  "Slash": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The target is attacked with a slash of claws or blades. Critical hits land more easily.",
      "name": "Slash"
  },
  "SmackDown": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "The user throws a stone or similar projectile to attack the target. A flying Pokémon will fall to the ground when it's hit.",
      "name": "Smack Down"
  },
  "SmartStrike": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 101,
      "desc": "The user stabs the target with a sharp horn. This attack never misses.",
      "name": "Smart Strike"
  },
  "SmellingSalts": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Smelling Salts"
  },
  "SnapTrap": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 35,
      "acc": 100,
      "desc": "The user snares the target in a snap trap for four to five turns.",
      "name": "Snap Trap"
  },
  "SolarBlade": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 125,
      "acc": 100,
      "desc": "In this two-turn attack, the user gathers light and fills a blade with the light's energy, attacking the target on the next turn.",
      "name": "Solar Blade"
  },
  "SoulStealing7StarStrike": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Soul-Stealing 7-Star Strike"
  },
  "Spark": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user throws an electrically charged tackle at the target. This may also leave the target with paralysis.",
      "name": "Spark"
  },
  "SpectralThief": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user hides in the target's shadow, steals the target's stat boosts, and then attacks.",
      "name": "Spectral Thief"
  },
  "SpikeCannon": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 20,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spike Cannon"
  },
  "SpiritBreak": {
      "type": Type.Fairy,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks the target with so much force that it could break the target's spirit. This also lowers the target's Sp. Atk stat.",
      "name": "Spirit Break"
  },
  "SpiritShackle": {
      "type": "ghost",
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks while simultaneously stitching the target's shadow to the ground to prevent the target from escaping.",
      "name": "Spirit Shackle"
  },
  "SplinteredStormshards": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 190,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Splintered Stormshards"
  },
  "Steamroller": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Steamroller"
  },
  "SteelRoller": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "The user attacks while destroying the terrain. This move fails when the ground hasn't turned into a terrain.",
      "name": "Steel Roller"
  },
  "SteelWing": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 70,
      "acc": 90,
      "desc": "The target is hit with wings of steel. This may also raise the user's Defense stat.",
      "name": "Steel Wing"
  },
  "Stomp": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is stomped with a big foot. This may also make the target flinch.",
      "name": "Stomp"
  },
  "StompingTantrum": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "Driven by frustration, the user attacks the target. If the user's previous move has failed, the power of this move doubles.",
      "name": "Stomping Tantrum"
  },
  "StoneEdge": {
      "type": Type.Rock,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 80,
      "desc": "The user stabs the target from below with sharpened stones. Critical hits land more easily.",
      "name": "Stone Edge"
  },
  "StormThrow": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 60,
      "acc": 100,
      "desc": "The user strikes the target with a fierce blow. This attack always results in a critical hit.",
      "name": "Storm Throw"
  },
  "Strength": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The target is slugged with a punch thrown at maximum power.",
      "name": "Strength"
  },
  "Struggle": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 1,
      "dmg": 50,
      "acc": 101,
      "desc": "This attack is used in desperation only if the user has no PP. It also damages the user a little.",
      "name": "Struggle"
  },
  "Submission": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 80,
      "acc": 80,
      "desc": "The user grabs the target and recklessly dives for the ground. This also damages the user a little.",
      "name": "Submission"
  },
  "SubzeroSlammer": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Subzero Slammer"
  },
  "SuckerPunch": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "This move enables the user to attack first. This move fails if the target is not readying an attack.",
      "name": "Sucker Punch"
  },
  "SunsteelStrike": {
      "type": Type.Steel,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user slams into the target with the force of a meteor. This move can be used on the target regardless of its Abilities.",
      "name": "Sunsteel Strike"
  },
  "SuperFang": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.",
      "name": "Super Fang"
  },
  "Superpower": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks the target with great power. However, this also lowers the user's Attack and Defense stats.",
      "name": "Superpower"
  },
  "SupersonicSkystrike": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Supersonic Skystrike"
  },
  "SurgingStrikes": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 25,
      "acc": 100,
      "desc": "The user, having mastered the Water style, strikes the target with a flowing motion three times in a row. This attack always results in a critical hit.",
      "name": "Surging Strikes"
  },
  "Tackle": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "A physical attack in which the user charges and slams into the target with its whole body.",
      "name": "Tackle"
  },
  "TailSlap": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 25,
      "acc": 85,
      "desc": "The user attacks by striking the target with its hard tail. It hits the target two to five times in a row.",
      "name": "Tail Slap"
  },
  "TakeDown": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 90,
      "acc": 85,
      "desc": "A reckless, full-body charge attack for slamming into the target. This also damages the user a little.",
      "name": "Take Down"
  },
  "TectonicRage": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Tectonic Rage"
  },
  "Thief": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks and steals the target's held item simultaneously. The user can't steal anything if it already holds an item.",
      "name": "Thief"
  },
  "ThousandArrows": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "This move also hits opposing Pokémon that are in the air. Those Pokémon are knocked down to the ground.",
      "name": "Thousand Arrows"
  },
  "ThousandWaves": {
      "type": Type.Ground,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks with a wave that crawls along the ground. Those it hits can't flee from battle.",
      "name": "Thousand Waves"
  },
  "Thrash": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user rampages and attacks for two to three turns. The user then becomes confused.",
      "name": "Thrash"
  },
  "ThroatChop": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target's throat, and the resultant suffering prevents the target from using moves that emit sound for two turns.",
      "name": "Throat Chop"
  },
  "ThunderFang": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 65,
      "acc": 95,
      "desc": "The user bites with electrified fangs. This may also make the target flinch or leave it with paralysis.",
      "name": "Thunder Fang"
  },
  "ThunderPunch": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "The target is punched with an electrified fist. This may also leave the target with paralysis.",
      "name": "Thunder Punch"
  },
  "ThunderousKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user overwhelms the target with lightning-like movement before delivering a kick. This also lowers the target's Defense stat.",
      "name": "Thunderous Kick"
  },
  "TripleAxel": {
      "type": Type.Ice,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 20,
      "acc": 90,
      "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
      "name": "Triple Axel"
  },
  "TripleKick": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 10,
      "acc": 90,
      "desc": "A consecutive three-kick attack that becomes more powerful with each successful hit.",
      "name": "Triple Kick"
  },
  "TropKick": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "The user lands an intense kick of tropical origins on the target. This also lowers the target's Attack stat.",
      "name": "Trop Kick"
  },
  "Twineedle": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 25,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Twineedle"
  },
  "TwinkleTackle": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Twinkle Tackle"
  },
  "Uturn": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "U-turn"
  },
  "Vcreate": {
      "type": Type.Fire,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 180,
      "acc": 95,
      "desc": "With a hot flame on its forehead, the user hurls itself at its target. This lowers the user's Defense, Sp. Def, and Speed stats.",
      "name": "V-create"
  },
  "VeeveeVolley": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Veevee Volley"
  },
  "VineWhip": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 25,
      "dmg": 45,
      "acc": 100,
      "desc": "The target is struck with slender, whiplike vines to inflict damage.",
      "name": "Vine Whip"
  },
  "ViseGrip": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 30,
      "dmg": 55,
      "acc": 100,
      "desc": "The target is gripped and squeezed from both sides to inflict damage.",
      "name": "Vise Grip"
  },
  "VitalThrow": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 101,
      "desc": "The user attacks last. In return, this throw move never misses.",
      "name": "Vital Throw"
  },
  "VoltTackle": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user electrifies itself and charges the target. This also damages the user quite a lot. This attack may leave the target with paralysis.",
      "name": "Volt Tackle"
  },
  "WakeUpSlap": {
      "type": Type.Fighting,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Wake-Up Slap"
  },
  "Waterfall": {
      "type": Type.Water,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user charges at the target and may make it flinch.",
      "name": "Waterfall"
  },
  "WickedBlow": {
      "type": Type.Dark,
      "cat": Category.Physical,
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user, having mastered the Dark style, strikes the target with a fierce blow. This attack always results in a critical hit.",
      "name": "Wicked Blow"
  },
  "WildCharge": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user shrouds itself in electricity and smashes into its target. This also damages the user a little.",
      "name": "Wild Charge"
  },
  "WingAttack": {
      "type": Type.Flying,
      "cat": Category.Physical,
      "pp": 35,
      "dmg": 60,
      "acc": 100,
      "desc": "The target is struck with large, imposing wings spread wide to inflict damage.",
      "name": "Wing Attack"
  },
  "WoodHammer": {
      "type": Type.Grass,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 120,
      "acc": 100,
      "desc": "The user slams its rugged body into the target to attack. This also damages the user quite a lot.",
      "name": "Wood Hammer"
  },
  "Wrap": {
      "type": Type.Normal,
      "cat": Category.Physical,
      "pp": 20,
      "dmg": 15,
      "acc": 90,
      "desc": "A long body, vines, or the like are used to wrap and squeeze the target for four to five turns.",
      "name": "Wrap"
  },
  "XScissor": {
      "type": Type.Bug,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user slashes at the target by crossing its scythes or claws as if they were a pair of scissors.",
      "name": "X-Scissor"
  },
  "ZenHeadbutt": {
      "type": Type.psychic,
      "cat": Category.Physical,
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user focuses its willpower to its head and attacks the target. This may also make the target flinch.",
      "name": "Zen Headbutt"
  },
  "ZingZap": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A strong electric blast crashes down on the target, giving it an electric shock. This may also make the target flinch.",
      "name": "Zing Zap"
  },
  "ZippyZap": {
      "type": Type.electric,
      "cat": Category.Physical,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Zippy Zap"
  },
  "10000000VoltThunderbolt": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "10,000,000 Volt Thunderbolt"
  },
  "Absorb": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 20,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Absorb"
  },
  "Acid": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "Opposing Pokémon are attacked with a spray of harsh acid. This may also lower their Sp. Def stats.",
      "name": "Acid"
  },
  "AcidSpray": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user spits fluid that works to melt the target. This harshly lowers the target's Sp. Def stat.",
      "name": "Acid Spray"
  },
  "Aeroblast": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "A vortex of air is shot at the target to inflict damage. Critical hits land more easily.",
      "name": "Aeroblast"
  },
  "AirCutter": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 60,
      "acc": 95,
      "desc": "The user launches razor-like wind to slash opposing Pokémon. Critical hits land more easily.",
      "name": "Air Cutter"
  },
  "AirSlash": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 75,
      "acc": 95,
      "desc": "The user attacks with a blade of air that slices even the sky. This may also make the target flinch.",
      "name": "Air Slash"
  },
  "AncientPower": {
      "type": Type.Rock,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks with a prehistoric power. This may also raise all the user's stats at once.",
      "name": "Ancient Power"
  },
  "AppleAcid": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target with an acidic liquid created from tart apples. This also lowers the target's Sp. Def stat.",
      "name": "Apple Acid"
  },
  "AstralBarrage": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks by sending a frightful amount of small ghosts at opposing Pokémon.",
      "name": "Astral Barrage"
  },
  "AuraSphere": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 80,
      "acc": 101,
      "desc": "The user lets loose a blast of aura power from deep within its body at the target. This attack never misses.",
      "name": "Aura Sphere"
  },
  "AuroraBeam": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is hit with a rainbow-colored beam. This may also lower the target's Attack stat.",
      "name": "Aurora Beam"
  },
  "BaddyBad": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Baddy Bad"
  },
  "Belch": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 90,
      "desc": "The user lets out a damaging belch at the target. The user must eat a held Berry to use this move.",
      "name": "Belch"
  },
  "BlastBurn": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is razed by a fiery explosion. The user can't move on the next turn.",
      "name": "Blast Burn"
  },
  "Blizzard": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 110,
      "acc": 70,
      "desc": "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
      "name": "Blizzard"
  },
  "BlueFlare": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 85,
      "desc": "The user attacks by engulfing the target in an intense, yet beautiful, blue flame. This may also leave the target with a burn.",
      "name": "Blue Flare"
  },
  "Boomburst": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 140,
      "acc": 100,
      "desc": "The user attacks everything around it with the destructive power of a terrible, explosive sound.",
      "name": "Boomburst"
  },
  "BouncyBubble": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bouncy Bubble"
  },
  "Brine": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "If the target's HP is half or less, this attack will hit with double the power.",
      "name": "Brine"
  },
  "Bubble": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bubble"
  },
  "BubbleBeam": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "A spray of bubbles is forcefully ejected at the target. This may also lower the target's Speed stat.",
      "name": "Bubble Beam"
  },
  "BugBuzz": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat.",
      "name": "Bug Buzz"
  },
  "BurnUp": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 100,
      "desc": "To inflict massive damage, the user burns itself out. After using this move, the user will no longer be Fire type.",
      "name": "Burn Up"
  },
  "BurningJealousy": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user attacks with energy from jealousy. This leaves all opposing Pokémon that have had their stats boosted during the turn with a burn.",
      "name": "Burning Jealousy"
  },
  "BuzzyBuzz": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Buzzy Buzz"
  },
  "ChargeBeam": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 50,
      "acc": 90,
      "desc": "The user attacks the target with an electric charge. The user may use any remaining electricity to raise its Sp. Atk stat.",
      "name": "Charge Beam"
  },
  "Chatter": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user attacks the target with sound waves of deafening chatter. This confuses the target.",
      "name": "Chatter"
  },
  "ClangingScales": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 110,
      "acc": 100,
      "desc": "The user rubs the scales on its entire body and makes a huge noise to attack opposing Pokémon. The user's Defense stat goes down after the attack.",
      "name": "Clanging Scales"
  },
  "ClangorousSoulblaze": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 1,
      "dmg": 185,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Clangorous Soulblaze"
  },
  "ClearSmog": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 50,
      "acc": 101,
      "desc": "The user attacks the target by throwing a clump of special mud. All stat changes are returned to normal.",
      "name": "Clear Smog"
  },
  "Confusion": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 50,
      "acc": 100,
      "desc": "The target is hit by a weak telekinetic force. This may also confuse the target.",
      "name": "Confusion"
  },
  "CoreEnforcer": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "If the Pokémon the user has inflicted damage on have already used their moves, this move eliminates the effect of the target's Ability.",
      "name": "Core Enforcer"
  },
  "DarkPulse": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user releases a horrible aura imbued with dark thoughts. This may also make the target flinch.",
      "name": "Dark Pulse"
  },
  "DazzlingGleam": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user damages opposing Pokémon by emitting a powerful flash.",
      "name": "Dazzling Gleam"
  },
  "DisarmingVoice": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 40,
      "acc": 101,
      "desc": "Letting out a charming cry, the user does emotional damage to opposing Pokémon. This attack never misses.",
      "name": "Disarming Voice"
  },
  "Discharge": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes everything around it by letting loose a flare of electricity. This may also cause paralysis.",
      "name": "Discharge"
  },
  "DoomDesire": {
      "type": Type.Steel,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 140,
      "acc": 100,
      "desc": "Two turns after this move is used, a concentrated bundle of light blasts the target.",
      "name": "Doom Desire"
  },
  "DracoMeteor": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "Comets are summoned down from the sky onto the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Draco Meteor"
  },
  "DragonBreath": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
      "name": "Dragon Breath"
  },
  "DragonEnergy": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "Converting its life-force into power, the user attacks opposing Pokémon. The lower the user's HP, the lower the move's power.",
      "name": "Dragon Energy"
  },
  "DragonPulse": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The target is attacked with a shock wave generated by the user's gaping mouth.",
      "name": "Dragon Pulse"
  },
  "DragonRage": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Dragon Rage"
  },
  "DrainingKiss": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user steals the target's HP with a kiss. The user's HP is restored by over half of the damage taken by the target.",
      "name": "Draining Kiss"
  },
  "DreamEater": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 100,
      "acc": 100,
      "desc": "The user eats the dreams of a sleeping target. The user's HP is restored by half the damage taken by the target.",
      "name": "Dream Eater"
  },
  "DynamaxCannon": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user unleashes a strong beam from its core. This move deals twice the damage if the target is Dynamaxed.",
      "name": "Dynamax Cannon"
  },
  "EarthPower": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat.",
      "name": "Earth Power"
  },
  "EchoedVoice": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks the target with an echoing voice. If this move is used every turn, its power is increased.",
      "name": "Echoed Voice"
  },
  "EerieSpell": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with its tremendous psychic power. This also removes 3 PP from the target's last move.",
      "name": "Eerie Spell"
  },
  "ElectroBall": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user hurls an electric orb at the target. The faster the user is than the target, the greater the move's power.",
      "name": "Electro Ball"
  },
  "Electroweb": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks and captures opposing Pokémon using an electric net. This lowers their Speed stats.",
      "name": "Electroweb"
  },
  "Ember": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is attacked with small flames. This may also leave the target with a burn.",
      "name": "Ember"
  },
  "EnergyBall": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user draws power from nature and fires it at the target. This may also lower the target's Sp. Def stat.",
      "name": "Energy Ball"
  },
  "Eruption": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon with explosive fury. The lower the user's HP, the lower the move's power.",
      "name": "Eruption"
  },
  "Eternabeam": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 160,
      "acc": 90,
      "desc": "This is Eternatus's most powerful attack in its original form. The user can't move on the next turn.",
      "name": "Eternabeam"
  },
  "ExpandingForce": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks the target with its psychic power. This move's power goes up and damages all opposing Pokémon on Psychic Terrain.",
      "name": "Expanding Force"
  },
  "Extrasensory": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with an odd, unseeable power. This may also make the target flinch.",
      "name": "Extrasensory"
  },
  "FairyWind": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user stirs up a fairy wind and strikes the target with it.",
      "name": "Fairy Wind"
  },
  "FieryDance": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "Cloaked in flames, the user attacks the target by dancing and flapping its wings. This may also raise the user's Sp. Atk stat.",
      "name": "Fiery Dance"
  },
  "FieryWrath": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user transforms its wrath into a fire-like aura to attack. This may also make opposing Pokémon flinch.",
      "name": "Fiery Wrath"
  },
  "FinalGambit": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user risks everything to attack its target. The user faints but does damage equal to its HP.",
      "name": "Final Gambit"
  },
  "FireBlast": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 110,
      "acc": 85,
      "desc": "The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.",
      "name": "Fire Blast"
  },
  "FirePledge": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of fire hits the target. When used with its grass equivalent, its power increases and a vast sea of fire appears.",
      "name": "Fire Pledge"
  },
  "FireSpin": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The target becomes trapped within a fierce vortex of fire that rages for four to five turns.",
      "name": "Fire Spin"
  },
  "FlameBurst": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 70,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Flame Burst"
  },
  "Flamethrower": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is scorched with an intense blast of fire. This may also leave the target with a burn.",
      "name": "Flamethrower"
  },
  "FlashCannon": {
      "type": Type.Steel,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user gathers all its light energy and releases it all at once. This may also lower the target's Sp. Def stat.",
      "name": "Flash Cannon"
  },
  "FleurCannon": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user unleashes a strong beam. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Fleur Cannon"
  },
  "FocusBlast": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 70,
      "desc": "The user heightens its mental focus and unleashes its power. This may also lower the target's Sp. Def stat.",
      "name": "Focus Blast"
  },
  "FreezeDry": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user rapidly cools the target. This may also leave the target frozen. This move is super effective on Water Type.",
      "name": "Freeze-Dry"
  },
  "FreezingGlare": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user shoots its psychic power from its eyes to attack. This may also leave the target frozen.",
      "name": "Freezing Glare"
  },
  "FreezyFrost": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 100,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Freezy Frost"
  },
  "FrenzyPlant": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user slams the target with the roots of an enormous tree. The user can't move on the next turn.",
      "name": "Frenzy Plant"
  },
  "FrostBreath": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 60,
      "acc": 90,
      "desc": "The user blows its cold breath on the target. This attack always results in a critical hit.",
      "name": "Frost Breath"
  },
  "FusionFlare": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user brings down a giant flame. This move's power is increased when influenced by an enormous lightning bolt.",
      "name": "Fusion Flare"
  },
  "FutureSight": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "Two turns after this move is used, a hunk of psychic energy attacks the target.",
      "name": "Future Sight"
  },
  "GenesisSupernova": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 185,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Genesis Supernova"
  },
  "GigaDrain": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Giga Drain"
  },
  "Glaciate": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 95,
      "desc": "The user attacks by blowing freezing cold air at opposing Pokémon. This lowers their Speed stats.",
      "name": "Glaciate"
  },
  "GlitzyGlow": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 95,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Glitzy Glow"
  },
  "GrassKnot": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user snares the target with grass and trips it. The heavier the target, the greater the move's power.",
      "name": "Grass Knot"
  },
  "GrassPledge": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of grass hits the target. When used with its water equivalent, its power increases and a vast swamp appears.",
      "name": "Grass Pledge"
  },
  "GuardianofAlola": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Guardian of Alola"
  },
  "Gust": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 35,
      "dmg": 40,
      "acc": 100,
      "desc": "A gust of wind is whipped up by wings and launched at the target to inflict damage.",
      "name": "Gust"
  },
  "HeatWave": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 95,
      "acc": 90,
      "desc": "The user attacks by exhaling hot breath on opposing Pokémon. This may also leave those Pokémon with a burn.",
      "name": "Heat Wave"
  },
  "Hex": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "This relentless attack does massive damage to a target affected by status conditions.",
      "name": "Hex"
  },
  "HiddenPower": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Hidden Power"
  },
  "Hurricane": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 110,
      "acc": 70,
      "desc": "The user attacks by wrapping its opponent in a fierce wind that flies up into the sky. This may also confuse the target.",
      "name": "Hurricane"
  },
  "HydroCannon": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is hit with a watery blast. The user can't move on the next turn.",
      "name": "Hydro Cannon"
  },
  "HydroPump": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 110,
      "acc": 80,
      "desc": "The target is blasted by a huge volume of water launched under great pressure.",
      "name": "Hydro Pump"
  },
  "HyperBeam": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The target is attacked with a powerful beam. The user can't move on the next turn.",
      "name": "Hyper Beam"
  },
  "HyperVoice": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user lets loose a horribly echoing shout with the power to inflict damage.",
      "name": "Hyper Voice"
  },
  "HyperspaceHole": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 80,
      "acc": 101,
      "desc": "Using a hyperspace hole, the user appears right next to the target and strikes. This also hits a target using a move such as Protect or Detect.",
      "name": "Hyperspace Hole"
  },
  "IceBeam": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
      "name": "Ice Beam"
  },
  "IceBurn": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "On the second turn, an ultracold, freezing wind surrounds the target. This may leave the target with a burn.",
      "name": "Ice Burn"
  },
  "IcyWind": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks with a gust of chilled air. This also lowers opposing Pokémon's Speed stats.",
      "name": "Icy Wind"
  },
  "Incinerate": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon with fire. If a Pokémon is holding a certain item, such as a Berry, the item becomes burned up and unusable.",
      "name": "Incinerate"
  },
  "Inferno": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 50,
      "desc": "The user attacks by engulfing the target in an intense fire. This leaves the target with a burn.",
      "name": "Inferno"
  },
  "Infestation": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 20,
      "acc": 100,
      "desc": "The target is infested and attacked for four to five turns. The target can't flee during this time.",
      "name": "Infestation"
  },
  "Judgment": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user releases countless shots of light at the target. This move's type varies depending on the kind of Plate the user is holding.",
      "name": "Judgment"
  },
  "LavaPlume": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
      "name": "Lava Plume"
  },
  "LeafStorm": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user whips up a storm of leaves around the target. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Leaf Storm"
  },
  "LeafTornado": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 90,
      "desc": "The user attacks its target by encircling it in sharp leaves. This attack may also lower the target's accuracy.",
      "name": "Leaf Tornado"
  },
  "LightThatBurnstheSky": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Light That Burns the Sky"
  },
  "LightofRuin": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "Drawing power from the Eternal Flower, the user fires a powerful beam of light. This also damages the user quite a lot.",
      "name": "Light of Ruin"
  },
  "LusterPurge": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "The user lets loose a damaging burst of light. This may also lower the target's Sp. Def stat.",
      "name": "Luster Purge"
  },
  "MagicalLeaf": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user scatters curious leaves that chase the target. This attack never misses.",
      "name": "Magical Leaf"
  },
  "MagmaStorm": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 75,
      "desc": "The target becomes trapped within a maelstrom of fire that rages for four to five turns.",
      "name": "Magma Storm"
  },
  "MegaDrain": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 40,
      "acc": 100,
      "desc": "A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.",
      "name": "Mega Drain"
  },
  "MenacingMoonrazeMaelstrom": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 1,
      "dmg": 200,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Menacing Moonraze Maelstrom"
  },
  "MeteorBeam": {
      "type": Type.Rock,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 90,
      "desc": "In this two-turn attack, the user gathers space power and boosts its Sp. Atk stat, then attacks the target on the next turn.",
      "name": "Meteor Beam"
  },
  "MindBlown": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user attacks everything around it by causing its own head to explode. This also damages the user.",
      "name": "Mind Blown"
  },
  "MirrorCoat": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A retaliation move that counters any special attack, inflicting double the damage taken.",
      "name": "Mirror Coat"
  },
  "MirrorShot": {
      "type": Type.Steel,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mirror Shot"
  },
  "MistBall": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 70,
      "acc": 100,
      "desc": "A mist-like flurry of down envelops and damages the target. This may also lower the target's Sp. Atk stat.",
      "name": "Mist Ball"
  },
  "MistyExplosion": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks everything around it and faints upon using this move. This move's power is increased on Misty Terrain.",
      "name": "Misty Explosion"
  },
  "Moonblast": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 95,
      "acc": 100,
      "desc": "Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.",
      "name": "Moonblast"
  },
  "MoongeistBeam": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user emits a sinister ray to attack the target. This move can be used on the target regardless of its Abilities.",
      "name": "Moongeist Beam"
  },
  "MudBomb": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mud Bomb"
  },
  "MudShot": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user attacks by hurling a blob of mud at the target. This also lowers the target's Speed stat.",
      "name": "Mud Shot"
  },
  "MudSlap": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user hurls mud in the target's face to inflict damage and lower its accuracy.",
      "name": "Mud-Slap"
  },
  "MuddyWater": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 85,
      "desc": "The user attacks by shooting muddy water at opposing Pokémon. This may also lower their accuracy.",
      "name": "Muddy Water"
  },
  "MysticalFire": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user attacks by breathing a special, hot fire. This also lowers the target's Sp. Atk stat.",
      "name": "Mystical Fire"
  },
  "Nature'sMadness": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "The user hits the target with the force of nature. It halves the target's HP.",
      "name": "Nature's Madness"
  },
  "NightDaze": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 85,
      "acc": 95,
      "desc": "The user lets loose a pitch-black shock wave at its target. This may also lower the target's accuracy.",
      "name": "Night Daze"
  },
  "NightShade": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.",
      "name": "Night Shade"
  },
  "OblivionWing": {
      "type": Type.Flying,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user absorbs its target's HP. The user's HP is restored by over half of the damage taken by the target.",
      "name": "Oblivion Wing"
  },
  "OceanicOperetta": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 195,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Oceanic Operetta"
  },
  "Octazooka": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 85,
      "desc": "The user attacks by spraying ink in the target's face or eyes. This may also lower the target's accuracy.",
      "name": "Octazooka"
  },
  "OminousWind": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ominous Wind"
  },
  "OriginPulse": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 110,
      "acc": 85,
      "desc": "The user attacks opposing Pokémon with countless beams of light that glow a deep and brilliant blue.",
      "name": "Origin Pulse"
  },
  "Overdrive": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks opposing Pokémon by twanging a guitar or bass guitar, causing a huge echo and strong vibration.",
      "name": "Overdrive"
  },
  "Overheat": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 130,
      "acc": 90,
      "desc": "The user attacks the target at full power. The attack's recoil harshly lowers the user's Sp. Atk stat.",
      "name": "Overheat"
  },
  "ParabolicCharge": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The user attacks everything around it. The user's HP is restored by half the damage taken by those hit.",
      "name": "Parabolic Charge"
  },
  "PetalDance": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "The user attacks the target by scattering petals for two to three turns. The user then becomes confused.",
      "name": "Petal Dance"
  },
  "PhotonGeyser": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user attacks a target with a pillar of light. This move inflicts Attack or Sp. Atk damageâ€”whichever stat is higher for the user.",
      "name": "Photon Geyser"
  },
  "PikaPapow": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Pika Papow"
  },
  "PollenPuff": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks the enemy with a pollen puff that explodes. If the target is an ally, it gives the ally a pollen puff that restores its HP instead.",
      "name": "Pollen Puff"
  },
  "PowderSnow": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The user attacks with a chilling gust of powdery snow. This may also freeze opposing Pokémon.",
      "name": "Powder Snow"
  },
  "PowerGem": {
      "type": Type.Rock,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 80,
      "acc": 100,
      "desc": "The user attacks with a ray of light that sparkles as if it were made of gemstones.",
      "name": "Power Gem"
  },
  "PrismaticLaser": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 160,
      "acc": 100,
      "desc": "The user shoots powerful lasers using the power of a prism. The user can't move on the next turn.",
      "name": "Prismatic Laser"
  },
  "Psybeam": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "The target is attacked with a peculiar ray. This may also leave the target confused.",
      "name": "Psybeam"
  },
  "Psychic": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.",
      "name": Type.psychic
  },
  "PsychoBoost": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 140,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Psycho Boost"
  },
  "Psyshock": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
      "name": "Psyshock"
  },
  "Psystrike": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 100,
      "acc": 100,
      "desc": "The user materializes an odd psychic wave to attack the target. This attack does physical damage.",
      "name": "Psystrike"
  },
  "Psywave": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Psywave"
  },
  "RazorWind": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Razor Wind"
  },
  "RelicSong": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 75,
      "acc": 100,
      "desc": "The user sings an ancient song and attacks by appealing to the hearts of the listening opposing Pokémon. This may also induce sleep.",
      "name": "Relic Song"
  },
  "RevelationDance": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks the target by dancing very hard. The user's type determines the type of this move.",
      "name": "Revelation Dance"
  },
  "RisingVoltage": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "The user attacks with electric voltage rising from the ground. This move's power doubles when the target is on Electric Terrain.",
      "name": "Rising Voltage"
  },
  "RoarofTime": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 90,
      "desc": "The user blasts the target with power that distorts even time. The user can't move on the next turn.",
      "name": "Roar of Time"
  },
  "Round": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks the target with a song. Others can join in the Round to increase the power of the attack.",
      "name": "Round"
  },
  "Scald": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user shoots boiling hot water at its target. This may also leave the target with a burn.",
      "name": "Scald"
  },
  "ScorchingSands": {
      "type": Type.Ground,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 70,
      "acc": 100,
      "desc": "The user throws scorching sand at the target to attack. This may also leave the target with a burn.",
      "name": "Scorching Sands"
  },
  "SearingShot": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 100,
      "desc": "The user torches everything around it in an inferno of scarlet flames. This may also leave those it hits with a burn.",
      "name": "Searing Shot"
  },
  "SecretSword": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 85,
      "acc": 100,
      "desc": "The user cuts with its long horn. The odd power contained in the horn does physical damage to the target.",
      "name": "Secret Sword"
  },
  "SeedFlare": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 85,
      "desc": "The user emits a shock wave from its body to attack its target. This may also harshly lower the target's Sp. Def stat.",
      "name": "Seed Flare"
  },
  "ShadowBall": {
      "type": "ghost",
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user hurls a shadowy blob at the target. This may also lower the target's Sp. Def stat.",
      "name": "Shadow Ball"
  },
  "SheerCold": {
      "type": Type.Ice,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 0,
      "acc": 30,
      "desc": "The target faints instantly. It's less likely to hit the target if it's used by Pokémon other than Ice Type.",
      "name": "Sheer Cold"
  },
  "ShellSideArm": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "This move inflicts physical or special damage, whichever will be more effective. This may also poison the target.",
      "name": "Shell Side Arm"
  },
  "ShellTrap": {
      "type": Type.Fire,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user sets a shell trap. If the user is hit by a physical move, the trap will explode and inflict damage on opposing Pokémon.",
      "name": "Shell Trap"
  },
  "ShockWave": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "The user strikes the target with a quick jolt of electricity. This attack never misses.",
      "name": "Shock Wave"
  },
  "SignalBeam": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 75,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Signal Beam"
  },
  "SilverWind": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 60,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Silver Wind"
  },
  "Sludge": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 65,
      "acc": 100,
      "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
      "name": "Sludge"
  },
  "SludgeBomb": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "Unsanitary sludge is hurled at the target. This may also poison the target.",
      "name": "Sludge Bomb"
  },
  "SludgeWave": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 95,
      "acc": 100,
      "desc": "The user strikes everything around it by swamping the area with a giant sludge wave. This may also poison those hit.",
      "name": "Sludge Wave"
  },
  "Smog": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 30,
      "acc": 70,
      "desc": "The target is attacked with a discharge of filthy gases. This may also poison the target.",
      "name": "Smog"
  },
  "Snarl": {
      "type": Type.Dark,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 55,
      "acc": 95,
      "desc": "The user yells as if it's ranting about something, which lowers the Sp. Atk stats of opposing Pokémon.",
      "name": "Snarl"
  },
  "SnipeShot": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 100,
      "desc": "The user ignores the effects of opposing Pokémon's moves and Abilities that draw in moves, allowing this move to hit the chosen target.",
      "name": "Snipe Shot"
  },
  "Snore": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 50,
      "acc": 100,
      "desc": "This attack can be used only if the user is asleep. The harsh noise may also make the target flinch.",
      "name": "Snore"
  },
  "SolarBeam": {
      "type": Type.Grass,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
      "name": "Solar Beam"
  },
  "SonicBoom": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 0,
      "acc": 90,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sonic Boom"
  },
  "SpacialRend": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 5,
      "dmg": 100,
      "acc": 95,
      "desc": "The user tears the target along with the space around it. Critical hits land more easily.",
      "name": "Spacial Rend"
  },
  "SparklingAria": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user bursts into song, emitting many bubbles. Any Pokémon suffering from a burn will be healed by the touch of these bubbles.",
      "name": "Sparkling Aria"
  },
  "SparklySwirl": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 85,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sparkly Swirl"
  },
  "SpitUp": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The power stored using the move Stockpile is released at once in an attack. The more power is stored, the greater the move's power.",
      "name": "Spit Up"
  },
  "SplishySplash": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Splishy Splash"
  },
  "SteamEruption": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 110,
      "acc": 95,
      "desc": "The user immerses the target in superheated steam. This may also leave the target with a burn.",
      "name": "Steam Eruption"
  },
  "SteelBeam": {
      "type": Type.Steel,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 140,
      "acc": 95,
      "desc": "The user fires a beam of steel that it collected from its entire body. This also damages the user.",
      "name": "Steel Beam"
  },
  "StokedSparksurfer": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 1,
      "dmg": 175,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Stoked Sparksurfer"
  },
  "StoredPower": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 20,
      "acc": 100,
      "desc": "The user attacks the target with stored power. The more the user's stats are raised, the greater the move's power.",
      "name": "Stored Power"
  },
  "StrangeSteam": {
      "type": Type.Fairy,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 95,
      "desc": "The user attacks the target by emitting steam. This may also confuse the target.",
      "name": "Strange Steam"
  },
  "StruggleBug": {
      "type": Type.Bug,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 50,
      "acc": 100,
      "desc": "While resisting, the user attacks opposing Pokémon. This lowers the Sp. Atk stats of those hit.",
      "name": "Struggle Bug"
  },
  "Surf": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks everything around it by swamping its surroundings with a giant wave.",
      "name": "Surf"
  },
  "Swift": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 101,
      "desc": "Star-shaped rays are shot at opposing Pokémon. This attack never misses.",
      "name": "Swift"
  },
  "Synchronoise": {
      "type": Type.psychic,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 120,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Synchronoise"
  },
  "TechnoBlast": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 100,
      "desc": "The user fires a beam of light at its target. The move's type changes depending on the Drive the user holds.",
      "name": "Techno Blast"
  },
  "TerrainPulse": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "The user utilizes the power of the terrain to attack. This move's type and power changes depending on the terrain when it's used.",
      "name": "Terrain Pulse"
  },
  "Thunder": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 110,
      "acc": 70,
      "desc": "A wicked thunderbolt is dropped on the target to inflict damage. This may also leave the target with paralysis.",
      "name": "Thunder"
  },
  "ThunderCage": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 80,
      "acc": 90,
      "desc": "The user traps the target in a cage of sparking electricity for four to five turns.",
      "name": "Thunder Cage"
  },
  "ThunderShock": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "A jolt of electricity crashes down on the target to inflict damage. This may also leave the target with paralysis.",
      "name": "Thunder Shock"
  },
  "Thunderbolt": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 90,
      "acc": 100,
      "desc": "A strong electric blast crashes down on the target. This may also leave the target with paralysis.",
      "name": "Thunderbolt"
  },
  "TriAttack": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "The user strikes with a simultaneous three-beam attack. This may also burn, freeze, or paralyze the target.",
      "name": "Tri Attack"
  },
  "TrumpCard": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Trump Card"
  },
  "Twister": {
      "type": "dragon",
      "cat": Category.Special,
      "pp": 20,
      "dmg": 40,
      "acc": 100,
      "desc": "The user whips up a vicious tornado to tear at opposing Pokémon. This may also make them flinch.",
      "name": "Twister"
  },
  "Uproar": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 90,
      "acc": 100,
      "desc": "The user attacks in an uproar for three turns. During that time, no Pokémon can fall asleep.",
      "name": "Uproar"
  },
  "VacuumWave": {
      "type": Type.Fighting,
      "cat": Category.Special,
      "pp": 30,
      "dmg": 40,
      "acc": 100,
      "desc": "The user whirls its fists to send a wave of pure vacuum at the target. This move always goes first.",
      "name": "Vacuum Wave"
  },
  "Venoshock": {
      "type": Type.Poison,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 65,
      "acc": 100,
      "desc": "The user drenches the target in a special poisonous liquid. This move's power is doubled if the target is poisoned.",
      "name": "Venoshock"
  },
  "VoltSwitch": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 70,
      "acc": 100,
      "desc": "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
      "name": "Volt Switch"
  },
  "WaterGun": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 25,
      "dmg": 40,
      "acc": 100,
      "desc": "The target is blasted with a forceful shot of water.",
      "name": "Water Gun"
  },
  "WaterPledge": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 80,
      "acc": 100,
      "desc": "A column of water hits the target. When used with its fire equivalent, its power increases and a rainbow appears.",
      "name": "Water Pledge"
  },
  "WaterPulse": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 60,
      "acc": 100,
      "desc": "The user attacks the target with a pulsing blast of water. This may also confuse the target.",
      "name": "Water Pulse"
  },
  "WaterShuriken": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 20,
      "dmg": 15,
      "acc": 100,
      "desc": "The user hits the target with throwing stars two to five times in a row. This move always goes first.",
      "name": "Water Shuriken"
  },
  "WaterSpout": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 150,
      "acc": 100,
      "desc": "The user spouts water to damage opposing Pokémon. The lower the user's HP, the lower the move's power.",
      "name": "Water Spout"
  },
  "WeatherBall": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 10,
      "dmg": 50,
      "acc": 100,
      "desc": "This attack move varies in power and type depending on the weather.",
      "name": "Weather Ball"
  },
  "Whirlpool": {
      "type": Type.Water,
      "cat": Category.Special,
      "pp": 15,
      "dmg": 35,
      "acc": 85,
      "desc": "The user traps the target in a violent swirling whirlpool for four to five turns.",
      "name": "Whirlpool"
  },
  "WringOut": {
      "type": Type.Normal,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Wring Out"
  },
  "ZapCannon": {
      "type": Type.electric,
      "cat": Category.Special,
      "pp": 5,
      "dmg": 120,
      "acc": 50,
      "desc": "The user fires an electric blast like a cannon to inflict damage and cause paralysis.",
      "name": "Zap Cannon"
  },
  "AcidArmor": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user alters its cellular structure to liquefy itself, sharply raising its Defense stat.",
      "name": "Acid Armor"
  },
  "Acupressure": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user applies pressure to stress points, sharply boosting one of its or its allies' stats.",
      "name": "Acupressure"
  },
  "AfterYou": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user helps the target and makes it use its move right after the user.",
      "name": "After You"
  },
  "Agility": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user relaxes and lightens its body to move faster. This sharply raises the Speed stat.",
      "name": "Agility"
  },
  "AllySwitch": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user teleports using a strange power and switches places with one of its allies.",
      "name": "Ally Switch"
  },
  "Amnesia": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user temporarily empties its mind to forget its concerns. This sharply raises the user's Sp. Def stat.",
      "name": "Amnesia"
  },
  "AquaRing": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user envelops itself in a veil made of water. It regains some HP every turn.",
      "name": "Aqua Ring"
  },
  "Aromatherapy": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user releases a soothing scent that heals all status conditions affecting the user's party.",
      "name": "Aromatherapy"
  },
  "AromaticMist": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user raises the Sp. Def stat of an ally Pokémon by using a mysterious aroma.",
      "name": "Aromatic Mist"
  },
  "Assist": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Assist"
  },
  "Attract": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "If it is the opposite gender of the user, the target becomes infatuated and less likely to attack.",
      "name": "Attract"
  },
  "AuroraVeil": {
      "type": Type.Ice,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move reduces damage from physical and special moves for five turns. This can be used only in a hailstorm.",
      "name": "Aurora Veil"
  },
  "Autotomize": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sheds part of its body to make itself lighter and sharply raise its Speed stat.",
      "name": "Autotomize"
  },
  "BabyDollEyes": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user stares at the target with its baby-doll eyes, which lowers the target's Attack stat. This move always goes first.",
      "name": "Baby-Doll Eyes"
  },
  "BanefulBunker": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "In addition to protecting the user from attacks, this move also poisons any attacker that makes direct contact.",
      "name": "Baneful Bunker"
  },
  "Barrier": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Barrier"
  },
  "BatonPass": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user switches places with a party Pokémon in waiting and passes along any stat changes.",
      "name": "Baton Pass"
  },
  "BellyDrum": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user maximizes its Attack stat in exchange for HP equal to half its max HP.",
      "name": "Belly Drum"
  },
  "Bestow": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Bestow"
  },
  "Block": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user blocks the target's way with arms spread wide to prevent escape.",
      "name": "Block"
  },
  "BulkUp": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user tenses its muscles to bulk up its body, raising both its Attack and Defense stats.",
      "name": "Bulk Up"
  },
  "CalmMind": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.",
      "name": "Calm Mind"
  },
  "Camouflage": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Camouflage"
  },
  "Captivate": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Captivate"
  },
  "Celebrate": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The Pokémon congratulates you on your special day!",
      "name": "Celebrate"
  },
  "Charge": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user boosts the power of the Electric move it uses on the next turn. This also raises the user's Sp. Def stat.",
      "name": "Charge"
  },
  "Charm": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gazes at the target rather charmingly, making it less wary. This harshly lowers the target's Attack stat.",
      "name": "Charm"
  },
  "ClangorousSoul": {
      "type": "dragon",
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user raises all its stats by using some of its HP.",
      "name": "Clangorous Soul"
  },
  "Coaching": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": null,
      "desc": "The user properly coaches its ally Pokémon, boosting their Attack and Defense stats.",
      "name": "Coaching"
  },
  "Coil": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user coils up and concentrates. This raises its Attack and Defense stats as well as its accuracy.",
      "name": "Coil"
  },
  "Confide": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user tells the target a secret, and the target loses its ability to concentrate. This lowers the target's Sp. Atk stat.",
      "name": "Confide"
  },
  "ConfuseRay": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is exposed to a sinister ray that triggers confusion.",
      "name": "Confuse Ray"
  },
  "Conversion": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user changes its type to become the same type as the move at the top of the list of moves it knows.",
      "name": "Conversion"
  },
  "Conversion2": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user changes its type to make itself resistant to the type of the attack the target used last.",
      "name": "Conversion 2"
  },
  "Copycat": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user mimics the move used immediately before it. The move fails if no other move has been used yet.",
      "name": "Copycat"
  },
  "CorrosiveGas": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user surrounds everything around it with highly acidic gas and melts away items they hold.",
      "name": "Corrosive Gas"
  },
  "CosmicPower": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user absorbs a mystical power from space to raise its Defense and Sp. Def stats.",
      "name": "Cosmic Power"
  },
  "CottonGuard": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself by wrapping its body in soft cotton, which drastically raises the user's Defense stat.",
      "name": "Cotton Guard"
  },
  "CottonSpore": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user releases cotton-like spores that cling to opposing Pokémon, which harshly lowers their Speed stats.",
      "name": "Cotton Spore"
  },
  "CourtChange": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "With its mysterious power, the user swaps the effects on either side of the field.",
      "name": "Court Change"
  },
  "CraftyShield": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself and its allies from status moves with a mysterious power. This does not stop moves that do damage.",
      "name": "Crafty Shield"
  },
  "Curse": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A move that works differently for the Ghost type than for all other Type.",
      "name": "Curse"
  },
  "DarkVoid": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 50,
      "desc": "Opposing Pokémon are dragged into a world of total darkness that makes them sleep.",
      "name": "Dark Void"
  },
  "Decorate": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sharply raises the target's Attack and Sp. Atk stats by decorating the target.",
      "name": "Decorate"
  },
  "DefendOrder": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user calls out its underlings to shield its body, raising its Defense and Sp. Def stats.",
      "name": "Defend Order"
  },
  "DefenseCurl": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user curls up to conceal weak spots and raise its Defense stat.",
      "name": "Defense Curl"
  },
  "Defog": {
      "type": Type.Flying,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "A strong wind blows away the target's barriers such as Reflect or Light Screen. This also lowers the target's evasiveness.",
      "name": "Defog"
  },
  "DestinyBond": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "After using this move, if the user faints, the Pokémon that landed the knockout hit also faints. Its chance of failing rises if it is used in succession.",
      "name": "Destiny Bond"
  },
  "Detect": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Detect"
  },
  "Disable": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "For four turns, this move prevents the target from using the move it last used.",
      "name": "Disable"
  },
  "DoubleTeam": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "By moving rapidly, the user makes illusory copies of itself to raise its evasiveness.",
      "name": "Double Team"
  },
  "DragonDance": {
      "type": "dragon",
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user vigorously performs a mystic, powerful dance that raises its Attack and Speed stats.",
      "name": "Dragon Dance"
  },
  "EerieImpulse": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user's body generates an eerie impulse. Exposing the target to it harshly lowers the target's Sp. Atk stat.",
      "name": "Eerie Impulse"
  },
  "ElectricTerrain": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user electrifies the ground for five turns, powering up Electric-type moves. Pokémon on the ground no longer fall asleep.",
      "name": "Electric Terrain"
  },
  "Electrify": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "If the target is electrified before it uses a move during that turn, the target's move becomes Electric type.",
      "name": "Electrify"
  },
  "Embargo": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Embargo"
  },
  "Encore": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 100,
      "desc": "The user compels the target to keep using the move it encored for three turns.",
      "name": "Encore"
  },
  "Endure": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user endures any attack with at least 1 HP. Its chance of failing rises if it is used in succession.",
      "name": "Endure"
  },
  "Entrainment": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user dances with an odd rhythm that compels the target to mimic it, making the target's Ability the same as the user's.",
      "name": "Entrainment"
  },
  "ExtremeEvoboost": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Extreme Evoboost"
  },
  "FairyLock": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "By locking down the battlefield, the user keeps all Pokémon from fleeing during the next turn.",
      "name": "Fairy Lock"
  },
  "FakeTears": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user feigns crying to fluster the target, harshly lowering its Sp. Def stat.",
      "name": "Fake Tears"
  },
  "FeatherDance": {
      "type": Type.Flying,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user covers the target's body with a mass of down that harshly lowers its Attack stat.",
      "name": "Feather Dance"
  },
  "Flash": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Flash"
  },
  "Flatter": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "Flattery is used to confuse the target. However, this also raises the target's Sp. Atk stat.",
      "name": "Flatter"
  },
  "FloralHealing": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores the target's HP by up to half of its max HP. It restores more HP when the terrain is grass.",
      "name": "Floral Healing"
  },
  "FlowerShield": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user raises the Defense stats of all Grass-type Pokémon in battle with a mysterious power.",
      "name": "Flower Shield"
  },
  "FocusEnergy": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes a deep breath and focuses so that critical hits land more easily.",
      "name": "Focus Energy"
  },
  "FollowMe": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user draws attention to itself, making all targets take aim only at the user.",
      "name": "Follow Me"
  },
  "Foresight": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Foresight"
  },
  "Forest'sCurse": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user puts a forest curse on the target. The target is now Grass type as well.",
      "name": "Forest's Curse"
  },
  "GastroAcid": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user hurls up its stomach acids on the target. The fluid eliminates the effect of the target's Ability.",
      "name": "Gastro Acid"
  },
  "GearUp": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user engages its gears to raise the Attack and Sp. Atk stats of ally Pokémon with the Plus or Minus Ability.",
      "name": "Gear Up"
  },
  "Geomancy": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user absorbs energy and sharply raises its Sp. Atk, Sp. Def, and Speed stats on the next turn.",
      "name": "Geomancy"
  },
  "Glare": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user intimidates the target with the pattern on its belly to cause paralysis.",
      "name": "Glare"
  },
  "GrassWhistle": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 55,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Grass Whistle"
  },
  "GrassyTerrain": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user turns the ground to grass for five turns. This restores the HP of Pokémon on the ground a little every turn and powers up Grass-type moves.",
      "name": "Grassy Terrain"
  },
  "Gravity": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables Flying-type Pokémon or Pokémon with the Levitate Ability to be hit by Ground-type moves. Moves that involve flying can't be used.",
      "name": "Gravity"
  },
  "Growl": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 100,
      "desc": "The user growls in an endearing way, making opposing Pokémon less wary. This lowers their Attack stats.",
      "name": "Growl"
  },
  "Growth": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user's body grows all at once, raising the Attack and Sp. Atk stats.",
      "name": "Growth"
  },
  "Grudge": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "If the user faints, the user's grudge fully depletes the PP of the opponent's move that knocked it out.",
      "name": "Grudge"
  },
  "GuardSplit": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to average its Defense and Sp. Def stats with those of the target.",
      "name": "Guard Split"
  },
  "GuardSwap": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch changes to its Defense and Sp. Def stats with the target.",
      "name": "Guard Swap"
  },
  "Hail": {
      "type": Type.Ice,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user summons a hailstorm lasting five turns. It damages all Pokémon except Ice Type.",
      "name": "Hail"
  },
  "HappyHour": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "Using Happy Hour doubles the amount of prize money received after battle.",
      "name": "Happy Hour"
  },
  "Harden": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user stiffens all the muscles in its body to raise its Defense stat.",
      "name": "Harden"
  },
  "Haze": {
      "type": Type.Ice,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a haze that eliminates every stat change among all the Pokémon engaged in battle.",
      "name": "Haze"
  },
  "HealBell": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user makes a soothing bell chime to heal the status conditions of all the party Pokémon.",
      "name": "Heal Bell"
  },
  "HealBlock": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heal Block"
  },
  "HealOrder": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heal Order"
  },
  "HealPulse": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user emits a healing pulse that restores the target's HP by up to half of its max HP.",
      "name": "Heal Pulse"
  },
  "HealingWish": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user faints. In return, the Pokémon taking its place will have its HP restored and status conditions cured.",
      "name": "Healing Wish"
  },
  "HeartSwap": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Heart Swap"
  },
  "HelpingHand": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user assists an ally by boosting the power of that ally's attack.",
      "name": "Helping Hand"
  },
  "HoldHands": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and an ally hold hands. This makes them very happy.",
      "name": "Hold Hands"
  },
  "HoneClaws": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user sharpens its claws to boost its Attack stat and accuracy.",
      "name": "Hone Claws"
  },
  "Howl": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user howls loudly to raise the spirit of itself and allies. This raises their Attack stats.",
      "name": "Howl"
  },
  "Hypnosis": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 60,
      "desc": "The user employs hypnotic suggestion to make the target fall into a deep sleep.",
      "name": "Hypnosis"
  },
  "Imprison": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "If opposing Pokémon know any move also known by the user, they are prevented from using it.",
      "name": "Imprison"
  },
  "Ingrain": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays roots that restore its HP on every turn. Because it's rooted, it can't switch out.",
      "name": "Ingrain"
  },
  "Instruct": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user instructs the target to use the target's last move again.",
      "name": "Instruct"
  },
  "IonDeluge": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 25,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Ion Deluge"
  },
  "IronDefense": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user hardens its body's surface like iron, sharply raising its Defense stat.",
      "name": "Iron Defense"
  },
  "JungleHealing": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user becomes one with the jungle, restoring HP and healing any status conditions of itself and its ally Pokémon in battle.",
      "name": "Jungle Healing"
  },
  "Kinesis": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 80,
      "desc": "The user distracts the target by bending a spoon. This lowers the target's accuracy.",
      "name": "Kinesis"
  },
  "King'sShield": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes a defensive stance while it protects itself from damage. It also lowers the Attack stat of any attacker that makes direct contact.",
      "name": "King's Shield"
  },
  "LaserFocus": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user concentrates intensely. The attack on the next turn always results in a critical hit.",
      "name": "Laser Focus"
  },
  "LeechSeed": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "A seed is planted on the target. It steals some HP from the target every turn.",
      "name": "Leech Seed"
  },
  "Leer": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user gives opposing Pokémon an intimidating leer that lowers the Defense stat.",
      "name": "Leer"
  },
  "LifeDew": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user scatters mysterious water around and restores the HP of itself and its ally Pokémon in the battle.",
      "name": "Life Dew"
  },
  "LightScreen": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "A wondrous wall of light is put up to reduce damage from special attacks for five turns.",
      "name": "Light Screen"
  },
  "LockOn": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user takes sure aim at the target. This ensures the next attack does not miss the target.",
      "name": "Lock-On"
  },
  "LovelyKiss": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 75,
      "desc": "With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.",
      "name": "Lovely Kiss"
  },
  "LuckyChant": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Lucky Chant"
  },
  "LunarDance": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user faints. In return, the Pokémon taking its place will have its status and HP fully restored.",
      "name": "Lunar Dance"
  },
  "MagicCoat": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "Moves like Leech Seed and moves that inflict status conditions are blocked by a barrier and reflected back to the user of those moves.",
      "name": "Magic Coat"
  },
  "MagicPowder": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user scatters a cloud of magic powder that changes the target to Psychic type.",
      "name": "Magic Powder"
  },
  "MagicRoom": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which Pokémon's held items lose their effects for five turns.",
      "name": "Magic Room"
  },
  "MagnetRise": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user levitates using electrically generated magnetism for five turns.",
      "name": "Magnet Rise"
  },
  "MagneticFlux": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user manipulates magnetic fields, which raises the Defense and Sp. Def stats of ally Pokémon with the Plus or Minus Ability.",
      "name": "Magnetic Flux"
  },
  "MatBlock": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "Using a pulled-up mat as a shield, the user protects itself and its allies from damaging moves. This does not stop status moves.",
      "name": "Mat Block"
  },
  "MaxGuard": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Max Guard"
  },
  "MeFirst": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Me First"
  },
  "MeanLook": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user pins the target with a dark, arresting look. The target becomes unable to flee.",
      "name": "Mean Look"
  },
  "Meditate": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Meditate"
  },
  "Memento": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user faints when using this move. In return, this harshly lowers the target's Attack and Sp. Atk stats.",
      "name": "Memento"
  },
  "MetalSound": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 85,
      "desc": "A horrible sound like scraping metal harshly lowers the target's Sp. Def stat.",
      "name": "Metal Sound"
  },
  "Metronome": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user waggles a finger and stimulates its brain into randomly using nearly any move.",
      "name": "Metronome"
  },
  "MilkDrink": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP by up to half of its max HP.",
      "name": "Milk Drink"
  },
  "Mimic": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user copies the target's last move. The move can be used during battle until the Pokémon is switched out.",
      "name": "Mimic"
  },
  "MindReader": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user senses the target's movements with its mind to ensure its next attack does not miss the target.",
      "name": "Mind Reader"
  },
  "Minimize": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user compresses its body to make itself look smaller, which sharply raises its evasiveness.",
      "name": "Minimize"
  },
  "MiracleEye": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Miracle Eye"
  },
  "MirrorMove": {
      "type": Type.Flying,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mirror Move"
  },
  "Mist": {
      "type": Type.Ice,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user cloaks itself and its allies in a white mist that prevents any of their stats from being lowered for five turns.",
      "name": "Mist"
  },
  "MistyTerrain": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This protects Pokémon on the ground from status conditions and halves damage from Dragon-type moves for five turns.",
      "name": "Misty Terrain"
  },
  "Moonlight": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Moonlight"
  },
  "MorningSun": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Morning Sun"
  },
  "MudSport": {
      "type": Type.Ground,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Mud Sport"
  },
  "NastyPlot": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user stimulates its brain by thinking bad thoughts. This sharply raises the user's Sp. Atk stat.",
      "name": "Nasty Plot"
  },
  "NaturePower": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This attack makes use of nature's power. Its effects vary depending on the user's environment.",
      "name": "Nature Power"
  },
  "Nightmare": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Nightmare"
  },
  "NoRetreat": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "This move raises all the user's stats but prevents the user from switching out or fleeing.",
      "name": "No Retreat"
  },
  "NobleRoar": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "Letting out a noble roar, the user intimidates the target and lowers its Attack and Sp. Atk stats.",
      "name": "Noble Roar"
  },
  "Obstruct": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession. Direct contact harshly lowers the attacker's Defense stat.",
      "name": "Obstruct"
  },
  "Octolock": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user locks the target in and prevents it from fleeing. This move also lowers the target's Defense and Sp. Def every turn.",
      "name": "Octolock"
  },
  "OdorSleuth": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Odor Sleuth"
  },
  "PainSplit": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user adds its HP to the target's HP, then equally shares the combined HP with the target.",
      "name": "Pain Split"
  },
  "PartingShot": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "With a parting threat, the user lowers the target's Attack and Sp. Atk stats. Then it switches with a party Pokémon.",
      "name": "Parting Shot"
  },
  "PerishSong": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "Any Pokémon that hears this song faints in three turns, unless it switches out of battle.",
      "name": "Perish Song"
  },
  "PlayNice": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and the target become friends, and the target loses its will to fight. This lowers the target's Attack stat.",
      "name": "Play Nice"
  },
  "PoisonGas": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 90,
      "desc": "A cloud of poison gas is sprayed in the face of opposing Pokémon, poisoning those it hits.",
      "name": "Poison Gas"
  },
  "PoisonPowder": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 35,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a cloud of poisonous dust that poisons the target.",
      "name": "Poison Powder"
  },
  "Powder": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user covers the target in a combustible powder. If the target uses a Fire-type move, the powder explodes and damages the target.",
      "name": "Powder"
  },
  "PowerSplit": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to average its Attack and Sp. Atk stats with those of the target.",
      "name": "Power Split"
  },
  "PowerSwap": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch changes to its Attack and Sp. Atk stats with the target.",
      "name": "Power Swap"
  },
  "PowerTrick": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to switch its Attack stat with its Defense stat.",
      "name": "Power Trick"
  },
  "Protect": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move enables the user to protect itself from all attacks. Its chance of failing rises if it is used in succession.",
      "name": "Protect"
  },
  "PsychUp": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user hypnotizes itself into copying any stat change made by the target.",
      "name": "Psych Up"
  },
  "PsychicTerrain": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This protects Pokémon on the ground from priority moves and powers up Psychic-type moves for five turns.",
      "name": "Psychic Terrain"
  },
  "PsychoShift": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "Using its psychic power of suggestion, the user transfers its status conditions to the target.",
      "name": "Psycho Shift"
  },
  "Purify": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user heals the target's status condition. If the move succeeds, it also restores the user's own HP.",
      "name": "Purify"
  },
  "Quash": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user suppresses the target and makes its move go last.",
      "name": "Quash"
  },
  "QuickGuard": {
      "type": Type.Fighting,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user protects itself and its allies from priority moves.",
      "name": "Quick Guard"
  },
  "QuiverDance": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lightly performs a beautiful, mystic dance. This boosts the user's Sp. Atk, Sp. Def, and Speed stats.",
      "name": "Quiver Dance"
  },
  "RagePowder": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user scatters a cloud of irritating powder to draw attention to itself. Opposing Pokémon aim only at the user.",
      "name": "Rage Powder"
  },
  "RainDance": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user summons a heavy rain that falls for five turns, powering up Water-type moves. It lowers the power of Fire-type moves.",
      "name": "Rain Dance"
  },
  "Recover": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "Restoring its own cells, the user restores its own HP by half of its max HP.",
      "name": "Recover"
  },
  "Recycle": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user recycles a held item that has been used in battle so it can be used again.",
      "name": "Recycle"
  },
  "Reflect": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "A wondrous wall of light is put up to reduce damage from physical attacks for five turns.",
      "name": "Reflect"
  },
  "ReflectType": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user reflects the target's type, making the user the same type as the target.",
      "name": "Reflect Type"
  },
  "Refresh": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Refresh"
  },
  "Rest": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user goes to sleep for two turns. This fully restores the user's HP and heals any status conditions.",
      "name": "Rest"
  },
  "Roar": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The target is scared off, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Roar"
  },
  "RockPolish": {
      "type": Type.Rock,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user polishes its body to reduce drag. This sharply raises the Speed stat.",
      "name": "Rock Polish"
  },
  "RolePlay": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user mimics the target completely, copying the target's Ability.",
      "name": "Role Play"
  },
  "Roost": {
      "type": Type.Flying,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lands and rests its body. This move restores the user's HP by up to half of its max HP.",
      "name": "Roost"
  },
  "Rototiller": {
      "type": Type.Ground,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Rototiller"
  },
  "Safeguard": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 25,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a protective field that prevents status conditions for five turns.",
      "name": "Safeguard"
  },
  "SandAttack": {
      "type": Type.Ground,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "Sand is hurled in the target's face, reducing the target's accuracy.",
      "name": "Sand Attack"
  },
  "Sandstorm": {
      "type": Type.Rock,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "A five-turn sandstorm is summoned to hurt all combatants except Rock, Ground, and Steel Type. It raises the Sp. Def stat of Rock Type.",
      "name": "Sandstorm"
  },
  "ScaryFace": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user frightens the target with a scary face to harshly lower its Speed stat.",
      "name": "Scary Face"
  },
  "Screech": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 85,
      "desc": "An earsplitting screech harshly lowers the target's Defense stat.",
      "name": "Screech"
  },
  "Sharpen": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Sharpen"
  },
  "ShellSmash": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user breaks its shell, which lowers Defense and Sp. Def stats but sharply raises its Attack, Sp. Atk, and Speed stats.",
      "name": "Shell Smash"
  },
  "ShiftGear": {
      "type": Type.Steel,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user rotates its gears, raising its Attack stat and sharply raising its Speed stat.",
      "name": "Shift Gear"
  },
  "ShoreUp": {
      "type": Type.Ground,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user regains up to half of its max HP. It restores more HP in a sandstorm.",
      "name": "Shore Up"
  },
  "SimpleBeam": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user's mysterious psychic wave changes the target's Ability to Simple.",
      "name": "Simple Beam"
  },
  "Sing": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 55,
      "desc": "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.",
      "name": "Sing"
  },
  "Sketch": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 1,
      "dmg": 0,
      "acc": 101,
      "desc": "It enables the user to permanently learn the move last used by the target. Once used, Sketch disappears.",
      "name": "Sketch"
  },
  "SkillSwap": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user employs its psychic power to exchange Abilities with the target.",
      "name": "Skill Swap"
  },
  "SlackOff": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user slacks off, restoring its own HP by up to half of its max HP.",
      "name": "Slack Off"
  },
  "SleepPowder": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a big cloud of sleep-inducing dust around the target.",
      "name": "Sleep Powder"
  },
  "SleepTalk": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "While it is asleep, the user randomly uses one of the moves it knows.",
      "name": "Sleep Talk"
  },
  "Smokescreen": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user releases an obscuring cloud of smoke or ink. This lowers the target's accuracy.",
      "name": "Smokescreen"
  },
  "Snatch": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Snatch"
  },
  "Soak": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user shoots a torrent of water at the target and changes the target's type to Water.",
      "name": "Soak"
  },
  "SoftBoiled": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP by up to half of its max HP.",
      "name": "Soft-Boiled"
  },
  "SpeedSwap": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user exchanges Speed stats with the target.",
      "name": "Speed Swap"
  },
  "SpiderWeb": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spider Web"
  },
  "Spikes": {
      "type": Type.Ground,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of spikes at the opposing team's feet. The trap hurts Pokémon that switch into battle.",
      "name": "Spikes"
  },
  "SpikyShield": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "In addition to protecting the user from attacks, this move also damages any attacker that makes direct contact.",
      "name": "Spiky Shield"
  },
  "Spite": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user unleashes its grudge on the move last used by the target by cutting 4 PP from it.",
      "name": "Spite"
  },
  "Splash": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user just flops and splashes around to no effect at all...",
      "name": "Splash"
  },
  "Spore": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user scatters bursts of spores that induce sleep.",
      "name": "Spore"
  },
  "Spotlight": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Spotlight"
  },
  "StealthRock": {
      "type": Type.Rock,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of levitating stones around the opposing team. The trap hurts opposing Pokémon that switch into battle.",
      "name": "Stealth Rock"
  },
  "StickyWeb": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user weaves a sticky net around the opposing team, which lowers their Speed stats upon switching into battle.",
      "name": "Sticky Web"
  },
  "Stockpile": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user charges up power and raises both its Defense and Sp. Def stats. The move can be used three times.",
      "name": "Stockpile"
  },
  "StrengthSap": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user restores its HP by the same amount as the target's Attack stat. It also lowers the target's Attack stat.",
      "name": "Strength Sap"
  },
  "StringShot": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 95,
      "desc": "Opposing Pokémon are bound with silk blown from the user's mouth that harshly lowers the Speed stat.",
      "name": "String Shot"
  },
  "StuffCheeks": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user eats its held Berry, then sharply raises its Defense stat.",
      "name": "Stuff Cheeks"
  },
  "StunSpore": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 75,
      "desc": "The user scatters a cloud of numbing powder that paralyzes the target.",
      "name": "Stun Spore"
  },
  "Substitute": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a substitute for itself using some of its HP. The substitute serves as the user's decoy.",
      "name": "Substitute"
  },
  "SunnyDay": {
      "type": Type.Fire,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user intensifies the sun for five turns, powering up Fire-type moves. It lowers the power of Water-type moves.",
      "name": "Sunny Day"
  },
  "Supersonic": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 55,
      "desc": "The user generates odd sound waves from its body that confuse the target.",
      "name": "Supersonic"
  },
  "Swagger": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 85,
      "desc": "The user enrages and confuses the target. However, this also sharply raises the target's Attack stat.",
      "name": "Swagger"
  },
  "Swallow": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The power stored using the move Stockpile is absorbed by the user to heal its HP. Storing more power heals more HP.",
      "name": "Swallow"
  },
  "SweetKiss": {
      "type": Type.Fairy,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 75,
      "desc": "The user kisses the target with a sweet, angelic cuteness that causes confusion.",
      "name": "Sweet Kiss"
  },
  "SweetScent": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "A sweet scent that harshly lowers opposing Pokémon's evasiveness.",
      "name": "Sweet Scent"
  },
  "Switcheroo": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user trades held items with the target faster than the eye can follow.",
      "name": "Switcheroo"
  },
  "SwordsDance": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "A frenetic dance to uplift the fighting spirit. This sharply raises the user's Attack stat.",
      "name": "Swords Dance"
  },
  "Synthesis": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user restores its own HP. The amount of HP regained varies with the weather.",
      "name": "Synthesis"
  },
  "TailGlow": {
      "type": Type.Bug,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Tail Glow"
  },
  "TailWhip": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 100,
      "desc": "The user wags its tail cutely, making opposing Pokémon less wary and lowering their Defense stats.",
      "name": "Tail Whip"
  },
  "Tailwind": {
      "type": Type.Flying,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "The user whips up a turbulent whirlwind that ups the Speed stats of the user and its allies for four turns.",
      "name": "Tailwind"
  },
  "TarShot": {
      "type": Type.Rock,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user pours sticky tar over the target, lowering the target's Speed stat. The target becomes weaker to Fire-type moves.",
      "name": "Tar Shot"
  },
  "Taunt": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The target is taunted into a rage that allows it to use only attack moves for three turns.",
      "name": "Taunt"
  },
  "TearfulLook": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user gets teary eyed to make the target lose its combative spirit. This lowers the target's Attack and Sp. Atk stats.",
      "name": "Tearful Look"
  },
  "Teatime": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user has teatime with all the Pokémon in the battle. Each Pokémon eats its held Berry.",
      "name": "Teatime"
  },
  "TeeterDance": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user performs a wobbly dance that confuses the Pokémon around it.",
      "name": "Teeter Dance"
  },
  "Telekinesis": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Telekinesis"
  },
  "Teleport": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user switches places with a party Pokémon in waiting, if any. If a wild Pokémon uses this move, it flees.",
      "name": "Teleport"
  },
  "ThunderWave": {
      "type": Type.electric,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 90,
      "desc": "The user launches a weak jolt of electricity that paralyzes the target.",
      "name": "Thunder Wave"
  },
  "Tickle": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user tickles the target into laughing, reducing its Attack and Defense stats.",
      "name": "Tickle"
  },
  "TopsyTurvy": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "All stat changes affecting the target turn topsy-turvy and become the opposite of what they were.",
      "name": "Topsy-Turvy"
  },
  "Torment": {
      "type": Type.Dark,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 100,
      "desc": "The user torments and enrages the target, making it incapable of using the same move twice in a row.",
      "name": "Torment"
  },
  "Toxic": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 90,
      "desc": "A move that leaves the target badly poisoned. Its poison damage worsens every turn.",
      "name": "Toxic"
  },
  "ToxicSpikes": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lays a trap of poison spikes at the feet of the opposing team. The spikes will poison opposing Pokémon that switch into battle.",
      "name": "Toxic Spikes"
  },
  "ToxicThread": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user shoots poisonous threads to poison the target and lower the target's Speed stat.",
      "name": "Toxic Thread"
  },
  "Transform": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user transforms into a copy of the target right down to having the same move set.",
      "name": "Transform"
  },
  "Trick": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "The user catches the target off guard and swaps its held item with its own.",
      "name": "Trick"
  },
  "TrickRoom": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 5,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which slower Pokémon get to move first for five turns.",
      "name": "Trick Room"
  },
  "TrickorTreat": {
      "type": "ghost",
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "The user takes the target trick-or-treating. This adds Ghost type to the target's type.",
      "name": "Trick-or-Treat"
  },
  "VenomDrench": {
      "type": Type.Poison,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 100,
      "desc": "Opposing Pokémon are drenched in an odd poisonous liquid. This lowers the Attack, Sp. Atk, and Speed stats of a poisoned target.",
      "name": "Venom Drench"
  },
  "WaterSport": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 101,
      "desc": "This move can't be used. It's recommended that this move is forgotten. Once forgotten, this move can't be remembered.",
      "name": "Water Sport"
  },
  "Whirlwind": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 20,
      "dmg": 0,
      "acc": 101,
      "desc": "The target is blown away, and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.",
      "name": "Whirlwind"
  },
  "WideGuard": {
      "type": Type.Rock,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user and its allies are protected from wide-ranging attacks for one turn.",
      "name": "Wide Guard"
  },
  "WillOWisp": {
      "type": Type.Fire,
      "cat": Category.Status,
      "pp": 15,
      "dmg": 0,
      "acc": 85,
      "desc": "The user shoots a sinister flame at the target to inflict a burn.",
      "name": "Will-O-Wisp"
  },
  "Wish": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "One turn after this move is used, the user's or its replacement's HP is restored by half the user's max HP.",
      "name": "Wish"
  },
  "Withdraw": {
      "type": Type.Water,
      "cat": Category.Status,
      "pp": 40,
      "dmg": 0,
      "acc": 101,
      "desc": "The user withdraws its body into its hard shell, raising its Defense stat.",
      "name": "Withdraw"
  },
  "WonderRoom": {
      "type": Type.psychic,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user creates a bizarre area in which Pokémon's Defense and Sp. Def stats are swapped for five turns.",
      "name": "Wonder Room"
  },
  "WorkUp": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 30,
      "dmg": 0,
      "acc": 101,
      "desc": "The user is roused, and its Attack and Sp. Atk stats increase.",
      "name": "Work Up"
  },
  "WorrySeed": {
      "type": Type.Grass,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 100,
      "desc": "A seed that causes worry is planted on the target. It prevents sleep by making the target's Ability Insomnia.",
      "name": "Worry Seed"
  },
  "Yawn": {
      "type": Type.Normal,
      "cat": Category.Status,
      "pp": 10,
      "dmg": 0,
      "acc": 101,
      "desc": "The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.",
      "name": "Yawn"
  }
}