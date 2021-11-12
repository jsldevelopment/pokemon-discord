const { Client, Intents } = require('discord.js');
const cassandra = require('cassandra-driver');
const { profToken, catchToken, dbId, dbSecret, guildId } = require('../config.json');
const profBot = require('./bots/profBot.js');
const catchBot = require('./bots/catchBot.js');
const queries = require('./db/queries.js');
const userMap = require('./data/userMap.js');

(async() => {

    const dbClient = new cassandra.Client({
        cloud: { secureConnectBundle: './secure-connect-pokemon.zip' },
        credentials: { username: dbId, password: dbSecret },
        keyspace: 'data'
    });

    const users = await queries.getAllUsers(dbClient);
    users.rows.forEach((row) => {
        userMap.set(row.id, JSON.parse(row.data));
    });

    const profClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
    const catchClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INTEGRATIONS] });

    profBot.start(profClient, dbClient, profToken, guildId);
    catchBot.start(catchClient, dbClient, catchToken, guildId);

})();