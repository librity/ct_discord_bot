function logMessage(message) {
  // console.log(message)

  reducedMessage = {
    channelName: message.channel.name,
    channelId: message.channel.id,
    id: message.id,
    content: message.content,
    author: message.author.username,
    authorId: message.author.id,
  }

  console.log(reducedMessage)
}

module.exports = logMessage
