const { MessageAttachment } = require('discord.js');
var moment = require('moment'); // require

const promptBegin = {
    title: "Welcome to the world of\n Pokemon Discord!",
    desc: "In order to register you as a new user, we need to ask some simple questions! \n Tap the 'Begin' button to start!"
}

const promptAvatar = {
    title: "Who are you again?",
    desc: "Please choose the button that corresponds to the avatar you identify with the most!"
}

const promptStarter = {
    title: "Select your starter -",
    desc: "Please choose one of the following pokemon partners to accompany you on your grand adventure."
}

const promptRules = {
    title: "Press here to agree to the rules and conditions.",
    desc: "In order to get you registered for our game, we need to you to answer a few basic questions about yourself."
}

const promptComplete = {
    title: "Registration complete!",
    desc: "In order to get you registered for our game, we need to you to answer a few basic questions about yourself."
}

const embedBegin = {
    color: 0xffcb05,
    title: promptBegin.title,
    url: 'https://discord.js.org',
    description: promptBegin.desc,
    thumbnail: {
        url: 'attachment://pokeball.png',
    },
    timestamp: new Date(),
    footer: {
        text: "Tap the title bar to visit our website.",
        icon_url: 'attachment://pokeball.png',
    },
};

const embedAvatar = {
    color: 0xffcb05,
    title: promptAvatar.title,
    url: 'https://discord.js.org',
    description: promptAvatar.desc,
    thumbnail: {
        url: 'attachment://pokeball.png',
    },
    image: {
        url: 'attachment://avatar-selection.png'
    },
    timestamp: new Date(),
    footer: {
        text: "Tap the title bar to visit our website.",
        icon_url: 'attachment://pokeball.png',
    },
};

const embedStarter = {
    color: 0xffcb05,
    title: promptStarter.title,
    url: 'https://discord.js.org',
    description: promptStarter.desc,
    thumbnail: {
        url: 'attachment://pokeball.png',
    },
    image: {
        url: 'attachment://starter-selection.png'
    },
    timestamp: new Date(),
    footer: {
        text: "Tap the title bar to visit our website.",
        icon_url: 'attachment://pokeball.png',
    },
};

const embedRules = {
    color: 0xffcb05,
    title: promptComplete.title,
    url: 'https://discord.js.org',
    description: promptComplete.desc,
    thumbnail: {
        url: 'attachment://pokeball.png',
    },
    timestamp: new Date(),
    footer: {
        text: "Tap the title bar to visit our website.",
        icon_url: 'attachment://pokeball.png',
    },
};

const embedConfirm = {
    color: 0xffcb05,
    title: promptComplete.title,
    url: 'https://discord.js.org',
    description: promptComplete.desc,
    thumbnail: {
        url: 'attachment://pokeball.png',
    },
    timestamp: new Date(),
    footer: {
        text: "Tap the title bar to visit our website.",
        icon_url: 'attachment://pokeball.png',
    },
};

// create prompt for profile
const profileEmbed = (profile) => {
    return {
        color: 0x0099ff,
        title: `${profile.username}`,
        url: 'https://discord.js.org',
        thumbnail: {
            url: 'attachment://pokeball.png',
        },
        fields: [{
                name: "Captured: ",
                value: profile.pokedex.caught.toString()
            },
            {
                name: "Seen: ",
                value: profile.pokedex.seen.toString()
            },
            {
                name: "Badges: ",
                value: profile.badges.toString()
            },
            {
                name: "Money: ",
                value: profile.money.toString()
            }
        ],
        timestamp: new Date(),
        footer: {
            text: "Tap the title bar to visit our website.",
            icon_url: 'attachment://pokeball.png',
        }
    }
}

// create prompt for pokemon
const pokemonEmbed = (pokemon) => {
    return {
        color: promptColors[pokemon.types[0]],
        title: `${pokemon.name}`,
        description: `Lvl. ${pokemon.level}`,
        thumbnail: {
            url: `attachment://${pokemon.id}.png`,
        },
        fields: [{
                name: "Ability: ",
                value: pokemon.ability.name,
                inline: true
            },
            {
                name: "Gender: ",
                value: pokemon.gender ? "Male" : "Female",
                inline: true
            },
            {
                name: "Nature: ",
                value: pokemon.nature,
                inline: true
            },
            {
                name: "HP:",
                value: pokemon.stats.hp.toString(),
                inline: true
            },
            {
                name: "Attack: ",
                value: pokemon.stats.atk.toString(),
                inline: true
            },
            {
                name: "Defense: ",
                value: pokemon.stats.def.toString(),
                inline: true
            },
            {
                name: "Sp. Attack: ",
                value: pokemon.stats.spatk.toString(),
                inline: true
            },
            {
                name: "Sp. Defense: ",
                value: pokemon.stats.spdef.toString(),
                inline: true
            },
            {
                name: "Speed: ",
                value: pokemon.stats.spd.toString(),
                inline: true
            }
        ],
        footer: {
            text: `Caught on ${moment(pokemon.captured).format('MMMM do YYYY, h:mm')}`
        }
    }
}

// create prompt for pokemon
const battleStartEmbed = (curPokemon, opPokemon) => {
    return {
        color: promptColors[opPokemon.types[0]],
        title: `A wild Lvl. ${opPokemon.level} ${opPokemon.name} appears...`,
        description: "The battle begins...",
        thumbnail: {
            url: `attachment://${opPokemon.id}.png`,
        },
        fields: [{
                name: "Your HP: ",
                value: `${curPokemon.currentStats.hp}/${curPokemon.stats.hp}`,
                inline: true
            },
            {
                name: "Enemy HP: ",
                value: `${opPokemon.currentStats.hp}/${opPokemon.stats.hp}`,
                inline: true
            },
        ],
        timestamp: moment(Date.now()).format('MMMM do YYYY, h:mm')
    }
}

// create prompt for pokemon
const gotAwayEmbed = {
    description: "Got away safely!"
}

const promptColors = {
    "grass": 0x249225,
    "bug": 0x61E9AA
}

module.exports = {
    embeds: {
        embedBegin,
        embedAvatar,
        embedStarter,
        embedRules,
        embedConfirm,
        profileEmbed,
        pokemonEmbed,
        battleStartEmbed,
        gotAwayEmbed
    }
};