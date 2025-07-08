// Start all 3 tasks together, and wait for them to finish. 
// The first one that finishes gets catered to first.

const fs = require("fs");

// function print(err, data) {
//   console.log(data)
// }

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});