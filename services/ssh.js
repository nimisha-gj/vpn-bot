const { Client } = require("ssh2");

exports.connection = (command,key) => {
    const conn = new Client();

    conn
      .on("ready", () => {
        console.log("SSH connection established");
        conn.exec(command + " " + key, (err, stream) => {
          if (err) throw err;
  
          stream
            .on("close", (code, signal) => {
              console.log("Script execution finished");
              conn.end();
            })
            .on("data", (data) => {
              console.log("STDOUT: " + data);
            })
            .stderr.on("data", (data) => {
              console.error("STDERR: " + data);
            });
        });
      })
      .on("error", (err) => {
        console.error("Error:", err);
      })
      .connect({
        host: process.env.SSH_HOST,
        port: process.env.SSH_PORT,
        username: process.env.SSH_USERNAME,
        password: process.env.SSH_PASSWORD,
      });
}