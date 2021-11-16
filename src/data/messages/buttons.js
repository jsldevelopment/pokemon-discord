const { MessageActionRow, MessageButton } = require('discord.js');
const MessaageManager = require('../../managers/MessageManager');

const buttons = {

    // REGISTRATION BUTTONS
    btnBeginRegistration: new MessageButton()
        .setCustomId('beginRegistration')
        .setStyle('PRIMARY')
        .setLabel('Begin'),
    btnSelectAvatar1: new MessageButton()
        .setCustomId('selectAvatar|1')
        .setStyle('PRIMARY')
        .setLabel('May'),
    btnSelectAvatar2: new MessageButton()
        .setCustomId('selectAvatar|2')
        .setStyle('PRIMARY')
        .setLabel('Brendan'),
    btnSelectAvatar3: new MessageButton()
        .setCustomId('selectAvatar3')
        .setStyle('PRIMARY')
        .setLabel('Aqua'),
    btnSelectAvatar4: new MessageButton()
        .setCustomId('selectAvatar4')
        .setStyle('PRIMARY')
        .setLabel('Magma'),
    btnSelectAvatar5: new MessageButton()
        .setCustomId('selectAvatar5')
        .setStyle('PRIMARY')
        .setLabel('Fighter'),
    btnSelectAvatar6: new MessageButton()
        .setCustomId('selectAvatar6')
        .setStyle('PRIMARY')
        .setLabel('Beauty'),
    btnSelectAvatar7: new MessageButton()
        .setCustomId('selectAvatar7')
        .setStyle('PRIMARY')
        .setLabel('Scientist'),
    btnSelectAvatar8: new MessageButton()
        .setCustomId('selectAvatar8')
        .setStyle('PRIMARY')
        .setLabel('Fisher'),
    btnSelectAvatar9: new MessageButton()
        .setCustomId('selectAvatar9')
        .setStyle('PRIMARY')
        .setLabel('Elder'),
    btnSelectStarter1: new MessageButton()
        .setCustomId('selectStarter|1')
        .setStyle('PRIMARY')
        .setEmoji('905211751879016519'),
    btnSelectStarter2: new MessageButton()
        .setCustomId('selectStarter|4')
        .setStyle('PRIMARY')
        .setEmoji('905211751908397136'),
    btnSelectStarter3: new MessageButton()
        .setCustomId('selectStarter|7')
        .setStyle('PRIMARY')
        .setEmoji('905211751476363356'),
    btnSelectStarter4: new MessageButton()
        .setCustomId('selectStarter|25')
        .setStyle('PRIMARY')
        .setEmoji('905211751728042026'),
    btnConfirmRegistration: new MessageButton()
        .setCustomId('confirmRegistration')
        .setStyle('PRIMARY')
        .setLabel('Confirm'),
    // BATTLE START MESSAGES
    btnFight: (id) => {
        return new MessageButton()
            .setCustomId('fight|' + id)
            .setStyle('PRIMARY')
            .setLabel('Fight')
    },
    btnParty: (id) => {
        return new MessageButton()
            .setCustomId('party|' + id)
            .setStyle('PRIMARY')
            .setLabel(' Party ')
    },
    btnItem: (id) => {
        return new MessageButton()
            .setCustomId('item|' + id)
            .setStyle('PRIMARY')
            .setLabel('Items')
    },
    btnRun: (id) => {
        return new MessageButton()
            .setCustomId('run|' + id)
            .setStyle('PRIMARY')
            .setLabel('Run Away')
    },
    // ITEMS 
    btnCatch: (id) => {
        return new MessageButton()
            .setCustomId('catch|' + id)
            .setStyle('PRIMARY')
            .setLabel('PokeBall')
    },
    btnHeal: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    // MOVES
    btnMove: (id, num, name) => {
        return new MessageButton()
            .setCustomId(`move${num}|${id}`)
            .setStyle('PRIMARY')
            .setLabel(name)
    },
    // PARTY BUTTONS
    btnPartyMember: (id, num, name) => {
        return new MessageButton()
            .setCustomId(`party${num}|${id}`)
            .setStyle('PRIMARY')
            .setLabel(name)
    },
    // GO BACK TO BATTLE MENU
    btnBack: (id) => {
        return new MessageButton()
            .setCustomId('back|' + id)
            .setStyle('PRIMARY')
            .setLabel('Back')
    }

}

const buttonRows = {

    rowRegister: new MessageActionRow().addComponents(buttons.btnBeginRegistration),
    rowSelectAvatar: new MessageActionRow().addComponents(buttons.btnSelectAvatar1, buttons.btnSelectAvatar2),
    rowSelectStarter: new MessageActionRow().addComponents(buttons.btnSelectStarter1, buttons.btnSelectStarter2, buttons.btnSelectStarter3, buttons.btnSelectStarter4),
    rowConfirmRegistration: new MessageActionRow().addComponents(buttons.btnConfirmRegistration),
    rowBattleA: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnFight(id),
            buttons.btnParty(id))
    },
    rowBattleB: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnItem(id),
            buttons.btnRun(id))
    },
    rowItem: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnCatch(id),
            buttons.btnHeal(id),
            buttons.btnBack(id))
    },
    rowParty: (party, id) => {
        const partyRow = new MessageActionRow();
        let partyNum = 1;
        party.forEach((pokemon) => {
            partyRow.addComponents(buttons.btnPartyMember(id, partyNum, pokemon.name));
            partyNum++;
        });
        partyRow.addComponents(buttons.btnBack(id));
        return partyRow;
    },
    rowFight: (currentPokemon, id) => {
        const moveRow = new MessageActionRow();
        let moveNum = 0;
        currentPokemon.moves.forEach((move) => {
            moveRow.addComponents(buttons.btnMove(id, moveNum, move.name));
            moveNum++;
        });
        moveRow.addComponents(buttons.btnBack(id));
        return moveRow;
    }
}

exports.buttons = buttonRows;