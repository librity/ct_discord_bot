const fetch = require('node-fetch')

const { getRandom } = require('./utils')

const queries = [
  'yes',
  'no',
  'thankyou',
  'impossible',
  'cantsleep',
  'yawn',
  'hangry',
  'filthyfrank',
  'codingtrain',
  'puppies',
  'puppy',
  'dogs',
  'dog',
  'cat',
  'cats',
  'kitten',
  'kittens',
  'beer',
  'beard',
  'coffee',
  'vsauce',
  'pug',
  'pugs',
  'party',
  'celebration',
  'happy',
  'vip',
  'pokemon',
  'boondocks',
  'simpsons',
  'futurama',
]

async function gif(message, tokens) {
  const query = getQuery(tokens)
  const tenorKey = process.env.TENOR_API_KEY
  const limit = 50
  const url = `https://g.tenor.com/v1/search?q=${query}&key=${tenorKey}&limit=${limit}`

  const response = await fetch(url)
  const content = await response.json()

  const index = getRandom(limit)
  const gif = content.results[index].url
  message.channel.send(gif)
}

function getQuery(tokens) {
  if (tokens.length > 1) return tokens.slice(1, tokens.length).join()

  return queries[getRandom(queries.length)]
}

module.exports = gif
