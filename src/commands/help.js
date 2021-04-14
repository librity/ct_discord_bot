const Discord = require('discord.js')

function help(message, _tokens) {
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff7829')
    .setTitle('Welcome to my first discord bot!')
    .setURL('https://github.com/librity/shiffman_discord_bot')
    .setAuthor(
      'ליאור בן יוסף',
      'https://avatars.githubusercontent.com/u/19496542?v=4',
      'https://github.com/librity',
    )
    .setDescription('Commands')
    .setThumbnail(
      'https://raw.githubusercontent.com/librity/shiffman_discord_bot/main/.github/sandbox.jpg',
    )
    .addFields(
      { name: 'Ping', value: '`!ping`' },
      { name: 'Choo Choo!', value: '`!choo`' },
      { name: 'Random phrase', value: '`!rand`' },
      { name: 'Random gif', value: '`!gif` _`query`_' },
    )
    .setTimestamp()
    .setFooter(
      'Coding Train discord bot tutorial',
      'https://raw.githubusercontent.com/librity/shiffman_discord_bot/main/.github/train.png',
    )

  message.channel.send(exampleEmbed)
}

module.exports = help
