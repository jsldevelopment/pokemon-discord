import guildId from '../config.json';

exports.getGuild = async function(client: any) {

    if (!client) return;
    return await client.guilds.cache.get(guildId);

}

exports.getMember = async function(client: any, id: number) {

    if (!client) return;
    return await client.guilds.cache.get(guildId).members.fetch(id);

}

exports.getRole = async function(client: any, roleId: String) {

    if (!client) return;
    return await client.guilds.cache.get(guildId).roles.cache.find((role: any) => role.name === roleId);

}

exports.getChannel = async function(client: any, id: number) {
    return await client.channels.fetch(id);
}

exports.sleep = function(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}