require("dotenv").config();

console.log("Beep beep! 🤖");

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

  if (message.content === "!ping") return message.reply("pong!");
  if (message.content === "!choochoo") return message.channel.send("🚂🌈💖!");
  if (message.content === "!rand") return random_reply(message);
}

function inactive_channel(channel_id) {
  const active_channels = ["831061414134939688"];
  const is_inactive = !active_channels.find((id) => id === channel_id);

  return is_inactive;
}

function random_reply(message) {
  const replies = ["Money", "Fame", "Disneyland", "Coffee"];
  const index = Math.floor(Math.random() * replies.length);

  message.channel.send(replies[index]);
}
