const fs = require("fs");

console.log("Begin");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log("file readed");
  console.log(data);
});

setTimeout(() => {
  console.log("Timeout executed");
}, 0);

console.log("end");
