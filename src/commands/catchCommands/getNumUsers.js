const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('get')
        .setDescription('dummy command for checking usermap values')
}