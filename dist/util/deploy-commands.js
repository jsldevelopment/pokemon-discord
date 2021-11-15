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
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { profClientId, catchClientId, guildId, profToken, catchToken } = require('./config.json');
const fs = require('fs');
const profCommandsList = [];
const profCommands = fs.readdirSync('./src/commands/profCommands').filter(file => file.endsWith('.js'));
const catchCommandsList = [];
const catchCommands = fs.readdirSync('./src/commands/catchCommands').filter(file => file.endsWith('.js'));
const restProf = new REST({ version: '9' }).setToken(profToken);
const restCatch = new REST({ version: '9' }).setToken(catchToken);
for (const file of profCommands) {
    const command = require(`./src/commands/profCommands/${file}`);
    profCommandsList.push(command.data.toJSON());
}
for (const file of catchCommands) {
    const command = require(`./src/commands/catchCommands/${file}`);
    catchCommandsList.push(command.data.toJSON());
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Started refreshing application (/) commands.');
        yield restProf.put(Routes.applicationGuildCommands(profClientId, guildId), { body: profCommandsList });
        yield restCatch.put(Routes.applicationGuildCommands(catchClientId, guildId), { body: catchCommandsList });
        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error(error);
    }
}))();
