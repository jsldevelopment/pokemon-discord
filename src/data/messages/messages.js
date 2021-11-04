const { embeds } = require('./prompts.js');
const { buttons } = require('./buttons.js');
const { MessageAttachment } = require('discord.js');
const pokeball = new MessageAttachment('./src/data/img/pokeball.png');
const avatar = new MessageAttachment('./src/data/img/avatar-selection.png');
const starter = new MessageAttachment('./src/data/img/starter-selection.png');


const messages = {

    msgWelcome: {
        embeds: [embeds.embedBegin],
        components: [buttons.rowRegister],
        files: [pokeball]
    },

    msgSelectAvatar: {
        embeds: [embeds.embedAvatar],
        components: [buttons.rowSelectAvatar],
        files: [avatar]
    },

    msgSelectStarter: {
        embeds: [embeds.embedStarter],
        components: [buttons.rowSelectStarter],
        files: [starter]
    },

    msgConfirmRegistration: {
        embeds: [embeds.embedConfirm],
        components: [buttons.rowConfirmRegistration]
    },

    msgShowProfile: async function(profile) {
        return {
            embeds: [embeds.profileEmbed(profile)]
        }
    },

    msgShowPokemon: async function(pokemon) {
        console.log(pokemon);
        const file = new MessageAttachment(`./src/data/img/icons/${pokemon.id}.png`);
        const embed = [embeds.pokemonEmbed(pokemon)];
        // console.log(embed);
        return {
            embeds: embed,
            files: [file]
        }
    },

    msgStartBattle: async function(currentPokemon, opPokemon, id) {
        const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
        const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
        const embedRows = buttons.rowBattle(id);
        return {
            embeds: embed,
            components: [embedRows],
            files: [file]
        }
    }

}

module.exports = messages;