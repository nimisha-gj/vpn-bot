require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");

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
  if (message.author.bot || !message.channel.type) return;
  if (message.guild) {
    const isGeneralChannelOrThread =
      message.channel.isThread() || message.channel.name === "general";
    if (isGeneralChannelOrThread) return;
  }
  message.reply("Heeya");
};

client.on("messageCreate", messageCreateHandler);

client.login(process.env.DISCORD_TOKEN);
