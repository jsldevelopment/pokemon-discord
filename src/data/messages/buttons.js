const { MessageActionRow, MessageButton } = require('discord.js');

const buttons = {

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
    btnAttack: (id) => {
        return new MessageButton()
            .setCustomId('attackPokemon|' + id)
            .setStyle('PRIMARY')
            .setLabel('Attack')
    },
    btnSwap: (id) => {
        return new MessageButton()
            .setCustomId('swapPokemon|' + id)
            .setStyle('PRIMARY')
            .setLabel('Swap')
    },
    btnCatch: (id) => {
        return new MessageButton()
            .setCustomId('catchPokemon|' + id)
            .setStyle('PRIMARY')
            .setLabel('Catch')
    },
    btnRun: (id) => {
        return new MessageButton()
            .setCustomId('runPokemon|' + id)
            .setStyle('PRIMARY')
            .setLabel('Run')
    }

}

const buttonRows = {

    rowRegister: new MessageActionRow().addComponents(buttons.btnBeginRegistration),
    rowSelectAvatar: new MessageActionRow().addComponents(buttons.btnSelectAvatar1, buttons.btnSelectAvatar2),
    rowSelectStarter: new MessageActionRow().addComponents(buttons.btnSelectStarter1, buttons.btnSelectStarter2, buttons.btnSelectStarter3, buttons.btnSelectStarter4),
    rowConfirmRegistration: new MessageActionRow().addComponents(buttons.btnConfirmRegistration),
    rowBattle: (id) => {
        return new MessageActionRow().addComponents(
            buttons.btnAttack(id),
            buttons.btnSwap(id),
            buttons.btnCatch(id),
            buttons.btnRun(id))
    }

}

exports.buttons = buttonRows;