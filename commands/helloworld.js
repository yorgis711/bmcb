const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('helloworld')
        .setDescription('Sends an embed with a button to visit www.yorgis.net'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setTitle('Hello World')
            .setDescription('go to www.yorgis.net');

        const button = new MessageButton()
            .setCustomId('yorgis_net')
            .setLabel('www.yorgis.net')
            .setStyle('LINK')
            .setURL('https://www.yorgis.net');

        const row = new MessageActionRow()
            .addComponents(button);

        await interaction.reply({ embeds: [embed], components: [row] });
    },
};