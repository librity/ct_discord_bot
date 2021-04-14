const logMessage = require('./logMessage')

const ping = require('./ping')
const choo = require('./choo')
const random = require('./random')
const gif = require('./gif')

const commands = {
  ping,
  choo,
  rand: random,
  gif,
}

function commandHandler(message) {
  logMessage(message)

  if (botNotAllowed(message.channel.id)) return

  const tokens = message.content.split(' ')
  if (tokens.length === 0) return

  const first = tokens.shift()
  if (first.charAt(0) !== '!') return

  const command = first.substr(1)
  commands[command](message, tokens)
}

function botNotAllowed(channel_id) {
  const allowedChannels = ['831061414134939688']
  const isAllowed = allowedChannels.find(id => id === channel_id)

  return !isAllowed
}

module.exports = commandHandler
