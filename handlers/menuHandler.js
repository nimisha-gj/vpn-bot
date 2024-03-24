exports.menu = (message) =>{
    if (message.author.bot || !message.channel.type) return;
    if (message.guild) {
      const isGeneralChannelOrThread =
        message.channel.isThread() || message.channel.name === "general";
      if (isGeneralChannelOrThread) return;
    }
    message.reply(`hey ${message.author.username}`)
}