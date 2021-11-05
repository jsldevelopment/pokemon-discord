const { MessageActionRow, MessageButton } = require('discord.js');

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
            .setLabel('Party')
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
    btnMove1: (id) => {
        return new MessageButton()
            .setCustomId('catch|' + id)
            .setStyle('PRIMARY')
            .setLabel('PokeBall')
    },
    btnMove2: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnMove3: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnMove4: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    // PARTY BUTTONS
    btnParty1: (id) => {
        return new MessageButton()
            .setCustomId('catch|' + id)
            .setStyle('PRIMARY')
            .setLabel('PokeBall')
    },
    btnParty2: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnParty3: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnParty4: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnParty5: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
    },
    btnParty6: (id) => {
        return new MessageButton()
            .setCustomId('heal|' + id)
            .setStyle('PRIMARY')
            .setLabel('Potion')
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
    rowBattle: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnFight(id),
            buttons.btnParty(id),
            buttons.btnItem(id),
            buttons.btnRun(id))
    },
    rowItem: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnCatch(id),
            buttons.btnHeal(id),
            buttons.btnBack(id))
    },
    rowParty: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnCatch(id),
            buttons.btnHeal(id),
            buttons.btnBack(id))
    },
    rowFight: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnCatch(id),
            buttons.btnHeal(id),
            buttons.btnBack(id))
    }
}

exports.buttons = buttonRows;