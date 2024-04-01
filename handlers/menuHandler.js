const { HELP_MESSAGE,DISPLAY_HELP } = require('../constants/menuConstants');
const { addPublicKey } = require('../services/addKey');

exports.menu = async(message) => {
    if (message.author.bot || !message.channel.type) return;
    if (message.guild) {
      const isGeneralChannelOrThread =
        message.channel.isThread() || message.channel.name === "general";
      if (isGeneralChannelOrThread) return;
    }

    const content = message.content;
    switch (true) {
      case content === "!help":
          message.reply(DISPLAY_HELP);
          break;
      
      case content.startsWith("/add"):
         addPublicKey(message)
         break;

        default:
            message.reply(HELP_MESSAGE);
            break;
    }
}
