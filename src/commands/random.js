const { getRandom } = require('./utils')

function random(message, _token) {
  const replies = ['Money', 'Fame', 'Disneyland', 'Coffee']
  const index = getRandom(replies.length)

  message.channel.send(replies[index])
}

module.exports = random
