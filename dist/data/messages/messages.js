"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    msgShowProfile: function (profile) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                embeds: [embeds.profileEmbed(profile)]
            };
        });
    },
    msgShowPokemon: function (pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = new MessageAttachment(`./src/data/img/icons/${pokemon.id}.png`);
            const embed = [embeds.pokemonEmbed(pokemon)];
            return {
                embeds: embed,
                files: [file]
            };
        });
    },
    msgBattleStart: function (currentPokemon, opPokemon, id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = new MessageAttachment(`./src/data/img/icons/${currentPokemon.id}.png`);
            const file2 = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
            const battleMessage = yield this.msgBattle(currentPokemon, opPokemon, id, description);
            return Object.assign(Object.assign({}, battleMessage), { files: [file, file2] });
        });
    },
    msgBattle: function (currentPokemon, opPokemon, id, description, disabled) {
        return __awaiter(this, void 0, void 0, function* () {
            const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
            const embedRowA = buttons.rowBattleA(id);
            const embedRowB = buttons.rowBattleB(id);
            if (disabled) {
                embedRowA.components.forEach((row) => {
                    row.setDisabled(true);
                });
                embedRowB.components.forEach((row) => {
                    row.setDisabled(true);
                });
            }
            if (description) {
                embed[0].description = description;
            }
            return {
                embeds: embed,
                components: [embedRowA, embedRowB]
            };
        });
    },
    msgItems: function (currentPokemon, opPokemon, id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(opPokemon);
            const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
            const embedRows = buttons.rowItem(id);
            if (description) {
                embed[0].description = description;
            }
            return {
                embeds: embed,
                components: [embedRows]
            };
        });
    },
    msgParty: function (curPokemon, party, opPokemon, id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const embed = [embeds.battleStartEmbed(curPokemon, opPokemon)];
            // generate rows based on team members
            const embedRows = buttons.rowParty(party, id);
            if (description) {
                embed[0].description = description;
            }
            return {
                embeds: embed,
                components: [embedRows]
            };
        });
    },
    msgFight: function (currentPokemon, opPokemon, id, description) {
        return __awaiter(this, void 0, void 0, function* () {
            // const file = new MessageAttachment(`./src/data/img/icons/${opPokemon.id}.png`);
            const embed = [embeds.battleStartEmbed(currentPokemon, opPokemon)];
            // generate rows based on available moves
            const embedRows = buttons.rowFight(currentPokemon, id);
            if (description) {
                embed[0].description = description;
            }
            return {
                embeds: embed,
                components: [embedRows]
            };
        });
    }
};
module.exports = messages;
