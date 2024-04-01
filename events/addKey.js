const { connection } = require("../services/ssh");

exports.addPublicKey = async (message) => {
  const parts = message.content.split(" ");
  const key = parts[1];

  console.log("Extracted Key:", key);

  await connection(process.env.SSH_EXEC_ADD_CMD,key);

  message.reply("Your Key was successfully added");
};
