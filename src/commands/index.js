const logMessage = require('./logMessage')

const ping = require('./ping')
const choo = require('./choo')
const random = require('./random')
const gif = require('./gif')

function commandHandler(message) {
  logMessage(message)

  if (inactive_channel(message.channel.id)) return

  const tokens = message.content.split(' ')

  if (tokens[0] === '!ping') return ping(message)
  if (tokens[0] === '!choochoo') return choo(message)
  if (tokens[0] === '!rand') return random(message)
  if (tokens[0] === '!gif') return gif(message, tokens)
}

function inactive_channel(channel_id) {
  const activeChannels = ['831061414134939688']
  const isInactive = !activeChannels.find(id => id === channel_id)

  return isInactive
}

module.exports = commandHandler
