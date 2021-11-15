const { guildId } = require('../config.json');

exports.getGuild = async function(client) {

    if (!client) return;
    return await client.guilds.cache.get(guildId);

}

exports.getMember = async function(client, id) {

    if (!client) return;
    return await client.guilds.cache.get(guildId).members.fetch(id);

}

exports.getRole = async function(client, roleId) {

    if (!client) return;
    return await client.guilds.cache.get(guildId).roles.cache.find((role) => role.name === roleId);

}

exports.getChannel = async function(client, id) {
    return await client.channels.fetch(id);
}

exports.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}