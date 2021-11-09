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
        const file = new MessageAttachment(`./src/data/img/icons/${pokemon.id}.png`);
        const embed = [embeds.pokemonEmbed(pokemon)];
        return {
            embeds: embed,
            files: [file]
        }
    },

    msgBattle: async function(currentPokemon, opPokemon, id, description, disabled) {
        const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
        const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
        const embedRowA = buttons.rowBattleA(id);
        const embedRowB = buttons.rowBattleB(id);
        if (disabled) {
            embedRowA.components.forEach((row) => {
                row.setDisabled(true);
            })
            embedRowB.components.forEach((row) => {
                row.setDisabled(true);
            })
        }
        if (description) {
            embed[0].description = description;
        }
        return {
            embeds: embed,
            components: [embedRowA, embedRowB],
            files: [file]
        }
    },

    msgItems: async function(currentPokemon, opPokemon, id, description) {
        const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
        const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
        const embedRows = buttons.rowItem(id);
        if (description) {
            embed[0].description = description;
        }
        return {
            embeds: embed,
            components: [embedRows],
            files: [file]
        }
    },

    msgParty: async function(curPokemon, party, opPokemon, id, description) {
        const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
        const embed = [embeds.battleStartEmbed(curPokemon, opPokemon)];
        // generate rows based on team members
        const embedRows = buttons.rowParty(party, id);
        if (description) {
            embed[0].description = description;
        }
        return {
            embeds: embed,
            components: [embedRows],
            files: [file]
        }
    },

    msgFight: async function(currentPokemon, opPokemon, id, description) {
        const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
        const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
        // generate rows based on available moves
        const embedRows = buttons.rowFight(currentPokemon, id);
        if (description) {
            embed[0].description = description;
        }
        return {
            embeds: embed,
            components: [embedRows],
            files: [file]
        }
    }
}

module.exports = messages;