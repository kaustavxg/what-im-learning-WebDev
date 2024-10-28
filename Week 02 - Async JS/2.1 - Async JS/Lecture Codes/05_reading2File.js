const fs = require("fs");

const contents = fs.readFile("a.txt", "utf-8"); // asynchronously
const contents4 = fs.readFileSync("a.txt", "utf-8"); // synchronously
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8"); //synchronously
console.log(contents2);


const fs = require("fs")

const contents3 = fs.readFileSync("c.txt", "utf-8");
console.log(contents3) 