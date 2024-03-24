require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { menu } = require("./handlers/menuHandler.js")

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
  ] /*  */,
  partials: [Partials.Channel, Partials.Message],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const messageCreateHandler = (message) => {
  menu(message);
};

client.on("messageCreate", messageCreateHandler);

client.login(process.env.DISCORD_TOKEN);
