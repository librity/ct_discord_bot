require('dotenv').config()
const Discord = require('discord.js')

const commandHandler = require('./commands')

console.log('Beep beep! 🤖')
const client = new Discord.Client()

client.login(process.env.BOT_TOKEN)
client.on('ready', handleReady)
client.on('message', commandHandler)

function handleReady() {
  console.log(`Logged in as ${client.user.tag}! 🔓`)
}
