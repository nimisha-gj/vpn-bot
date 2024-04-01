const {
  HELP_MESSAGE,
  DISPLAY_HELP,
  DISPLAY_HELP_UBUNTU,
} = require("../constants/menuConstants");
const { addPublicKey } = require("../events/addKey");
const { removePublicKey } = require("../events/removeKey");

exports.menu = async (message) => {
  if (message.author.bot || !message.channel.type) return;
  if (message.guild) {
    const isGeneralChannelOrThread =
      message.channel.isThread() || message.channel.name === "general";
    if (isGeneralChannelOrThread) return;
  }

  const content = message.content;
  switch (true) {
    case content === "/help":
      message.reply(DISPLAY_HELP);
      break;
    case content === "/help-ubuntu":
      message.reply(DISPLAY_HELP_UBUNTU);
      break;

    case content.startsWith("/add"):
      addPublicKey(message);
      break;

    case content.startsWith("/remove"):
      removePublicKey(message);
      break;

    default:
      message.reply(HELP_MESSAGE);
      break;
  }
};
