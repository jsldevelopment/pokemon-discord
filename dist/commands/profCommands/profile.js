"use strict";
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Respond with user profile.')
};
