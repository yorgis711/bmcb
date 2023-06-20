/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */
/* eslint-disable indent */
const fs = require('node:fs');
require('dotenv').config();
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');
const fetch = require("node-fetch")
const myFunction = require("./server.js")
const prefix = 'spamstart';

//const btn = new ButtonBuilder()
//        .setCustomId("btn")
 //       .setLabel("Button")
  //      .setStyle(ButtonStyle.Primary);

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions],
});


client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
    console.log('Logged in!');
   client.user.setPresence({
  activities: [{ name: `him`, type: ActivityType.Playing }],
  status: 'online',
});
    
});

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const commandName = interaction;
    if (commandName === 'button') {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary),
            );

        await interaction.reply({ content: 'I think you should,', components: [row] });
    }


    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {

        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});




client.on('messageCreate', message => {
 // message.react('😃');
  console.log(message);
  if (message.content.startsWith(prefix)) {
   message.channel.send(message.content.substr(prefix.length).trim());
    message.channel.send(`${prefix} ${message.content.substr(prefix.length).trim()}`);
  }

  
});


myFunction()
client.login(token);
