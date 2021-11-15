"use strict";
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('team')
        .setDescription('View your team.')
        .addSubcommand(subcommand => subcommand
        .setName('1')
        .setDescription('info about pokemon 1'))
        .addSubcommand(subcommand => subcommand
        .setName('2')
        .setDescription('info about pokemon 2'))
        .addSubcommand(subcommand => subcommand
        .setName('3')
        .setDescription('info about pokemon 3'))
        .addSubcommand(subcommand => subcommand
        .setName('4')
        .setDescription('info about pokemon 4'))
        .addSubcommand(subcommand => subcommand
        .setName('5')
        .setDescription('info about pokemon 5'))
        .addSubcommand(subcommand => subcommand
        .setName('6')
        .setDescription('info about pokemon 6'))
};
