const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Hello World')
    .setURL('https://yorgis.net/')
    .setAuthor({ name: 'Bot McBotinson#6509', iconURL: 'https://cdn.discordapp.com/avatars/1086303671006023761/550ec9d5354776372b2970ce3b81944a.webp', url: 'https://yorgis.net/' })
    .setDescription('This is a very cool embed')
    .setThumbnail('https://kwkzcdfqvquavxhvoaqi.supabase.co/storage/v1/object/public/bucketo/forest.jpg')
    .addFields({ name: 'A field', value: 'This is a field' }, { name: '\u200B', value: '\u200B' })
    .addFields({ name: 'An inline field', value: 'This is an inline field', inline: true })
    .setImage('https://kwkzcdfqvquavxhvoaqi.supabase.co/storage/v1/object/public/bucketo/db.jpg')
    .setTimestamp()
    .setFooter({ text: 'I Love You!', iconURL: 'https://kwkzcdfqvquavxhvoaqi.supabase.co/storage/v1/object/public/bucketo/db.jpg' });


module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Responds with an embed.'),
    async execute(interaction) {
        channel.send({ embeds: [exampleEmbed] });
    },
};