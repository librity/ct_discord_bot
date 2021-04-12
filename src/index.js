require("dotenv").config();

console.log("Beep beep! 🤖");

const fetch = require("node-fetch");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on("ready", handleReady);

function handleReady() {
  console.log(`Logged in as ${client.user.tag}! 🔓`);
}

client.on("message", handleMessage);

function handleMessage(message) {
  // console.log(message);

  if (inactive_channel(message.channel.id)) return;

  const tokens = message.content.split(" ");

  if (tokens[0] === "!ping") return message.reply("pong!");
  if (tokens[0] === "!choochoo") return message.channel.send("🚂🌈💖!");
  if (tokens[0] === "!rand") return random_reply(message);
  if (tokens[0] === "!gif") return gif_reply(message, tokens);
}

function inactive_channel(channel_id) {
  const active_channels = ["831061414134939688"];
  const is_inactive = !active_channels.find((id) => id === channel_id);

  return is_inactive;
}

function random_reply(message) {
  const replies = ["Money", "Fame", "Disneyland", "Coffee"];
  const index = getRandom(replies.length);

  message.channel.send(replies[index]);
}

async function gif_reply(message, tokens) {
  const query = getQuery(tokens);
  const tenor_key = process.env.TENOR_API_KEY;
  const limit = 50;
  const url = `https://g.tenor.com/v1/search?q=${query}&key=${tenor_key}&limit=${limit}`;

  const response = await fetch(url);
  const content = await response.json();
  // console.log(content);

  const index = getRandom(limit);
  const gif = content.results[index].url;
  message.channel.send(gif);
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getQuery(tokens) {
  if (tokens.length > 1) return tokens.slice(1, tokens.length).join();

  const queries = [
    "codingtrain",
    "puppies",
    "puppy",
    "dogs",
    "dog",
    "cat",
    "cats",
    "kitten",
    "kittens",
    "beer",
    "beard",
    "coffee",
    "vsauce",
    "pug",
    "pugs",
    "party",
    "celebration",
    "happy",
    "vip",
    "pokemon",
    "boondocks",
  ];
  return queries[getRandom(queries.length)];
}
