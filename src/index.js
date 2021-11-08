const { Client, Intents } = require('discord.js');
const cassandra = require('cassandra-driver');
const { profToken, catchToken, dbId, dbSecret, guildId } = require('../config.json');
const profBot = require('./bots/profBot.js');
const catchBot = require('./bots/catchBot.js');
const queries = require('./db/queries.js');
const userMap = require('./data/userMap.js');

const dbClient = new cassandra.Client({
    cloud: { secureConnectBundle: './secure-connect-pokemon.zip' },
    credentials: { username: dbId, password: dbSecret },
    keyspace: 'data'
});

(async() => {

    // grab all users from db
    // const users = await queries.getAllUsers(dbClient);

    // add each user to our map
    // users.rows.forEach((row) => {
    //     userMap.set(row.id, JSON.parse(row.data));
    // });

    // instantiate client and intents
    const profClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
    // const catchClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INTEGRATIONS] });

    // start bots
    profBot.start(profClient, dbClient, profToken, guildId);
    // catchBot.start(catchClient, dbClient, catchToken, guildId);

})();