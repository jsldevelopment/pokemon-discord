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


(async() => {
    try {
        console.log('Started refreshing application (/) commands.');

        await restProf.put(
            Routes.applicationGuildCommands(profClientId, guildId), { body: profCommandsList },
        );
        await restCatch.put(
            Routes.applicationGuildCommands(catchClientId, guildId), { body: catchCommandsList },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();