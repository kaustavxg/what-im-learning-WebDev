// 'fs' is the built-in Node.js module that provides functions to interact with the file system,
// such as reading, writing, and managing files and directories.
const fs = require("fs");

// 'fs.readFileSync' is a method that reads the contents of a file synchronously,
// The first argument is the file path ('a.txt'), and the second argument specifies the encoding ('utf-8'),
// which ensures the file is read as a text string instead of raw binary data.
const contents = fs.readFileSync("a.txt", "utf-8");

console.log(contents);

// fs is an object, its name could be differ like: fs can be written as fsa, fsx or anything which you like
// when i run this function - the content written in a.txt shows up 
// utf is an encoding type


 