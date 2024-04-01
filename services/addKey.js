exports.addPublicKey = async (message) => {
  const parts = message.content.split(" ");
  const key = parts[1];

  console.log("Extracted Key:", key);

  conn
    .on("ready", () => {
      console.log("SSH connection established");
      conn.exec(
        "cd /path/to/fixed/directory && ./script.sh " + key,
        (err, stream) => {
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
        }
      );
    })
    .on("error", (err) => {
      console.error("Error:", err);
    })
    .connect({
      host: "192.168.88.100",
      port: 22,
      username: "fixed_username",
      privateKey: require("fs").readFileSync("/path/to/private/key"),
      // Add other options as needed
    }); /*  */
};
