"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const keys = require('../config.json');
const { Client, Intents } = require('discord.js');
const cassandra = require('cassandra-driver');
const profBot = require('./bots/profBot.js');
const catchBot = require('./bots/catchBot.js');
const queries = require('./db/queries.js');
const userMap = require('./data/userMap.js');
(() => __awaiter(void 0, void 0, void 0, function* () {
    const dbClient = new cassandra.Client({
        cloud: { secureConnectBundle: './secure-connect-pokemon.zip' },
        credentials: { username: keys.dbId, password: keys.dbSecret },
        keyspace: 'data'
    });
    const users = yield queries.getAllUsers(dbClient);
    users.rows.forEach((row) => {
        userMap.set(row.id, JSON.parse(row.data));
    });
    const profClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
    const catchClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INTEGRATIONS] });
    profBot.start(profClient, dbClient, keys.profToken, keys.guildId);
    catchBot.start(catchClient, dbClient, keys.catchToken, keys.guildId);
}))();
