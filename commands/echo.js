const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echos the input.')
        .addStringOption(option => option.setName('input').setDescription('The input to echo back')),
    async execute(interaction) {
        const value = interaction.options.getString('input');
        if (value) return interaction.reply(`\`${value}\``);
        return interaction.reply('No option was provided!');
    },
};