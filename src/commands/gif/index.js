const fetch = require('node-fetch')

const { getRandom } = require('../utils')
const queries = require('./queries')

const limit = 50

async function gif(message, tokens) {
  const url = buildTenorUrl(tokens)
  logUrl(url)

  const response = await fetch(url)
  const content = await response.json()

  const index = getRandom(limit)
  const gif = content.results[index].url
  message.channel.send(gif)
}

function buildTenorUrl(tokens) {
  const query = getQuery(tokens)
  const tenorKey = process.env.TENOR_API_KEY

  return `https://g.tenor.com/v1/search?q=${query}&key=${tenorKey}&limit=${limit}`
}

function getQuery(tokens) {
  if (tokens.length >= 1) return tokens.join('')

  return queries[getRandom(queries.length)]
}

function logUrl(url) {
  console.log(`Calling Tenor API: ${url}`)
}

module.exports = gif
