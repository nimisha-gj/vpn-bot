const { connection } = require("../services/ssh");

exports.removePublicKey = async (message) => {
  const parts = message.content.split(" ");
  const key = parts[1];

  console.log("Key to remove:", key);
  connection(process.env.SSH_EXEC_DEL_CMD,key);
};
