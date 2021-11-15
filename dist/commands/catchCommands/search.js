"use strict";
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('search for wild pokemon in the area')
};
