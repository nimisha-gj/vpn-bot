const { HELP_MESSAGE } = require('../constants/menuConstants');

exports.menu = (message) => {
    if (message.author.bot || !message.channel.type) return;
    if (message.guild) {
      const isGeneralChannelOrThread =
        message.channel.isThread() || message.channel.name === "general";
      if (isGeneralChannelOrThread) return;
    }

    const content = message.content;
    console.log("reacher here")
    switch (true) {
        default:
            message.reply(HELP_MESSAGE);
            break;
    }
}
