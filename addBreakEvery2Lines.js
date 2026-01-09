const fs = require("fs");

const ioputFile = "lyrics\\Cam_20_Test_4_Part_4.txt";

const data = fs.readFileSync(ioputFile, "utf8");

// Split by line (handles Windows & Unix)
const lines = data.split(/\r?\n/);

let result = [];

for (let i = 0; i < lines.length; i++) {
  result.push(lines[i]);

  // Add blank line after every 2 lines (except at end)
  if ((i + 1) % 2 === 0 && i !== lines.length - 1) {
    result.push("");
  }
}
result.push("");
fs.writeFileSync(ioputFile, result.join("\n"), "utf8");

console.log("Done!");
