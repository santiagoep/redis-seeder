const fs = require("fs");
const { exec } = require("child_process");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile(
    "result.txt",
    data
      .replace(/" /g, "' ")
      .replace(/ "/g, " '")
      .replace(/"\r?\n|\r/g, "'\n"),
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      exec("cat result.txt | redis-cli --pipe", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        process.exit(0);
      });
    }
  );
});
