// =======================
// 1. READING A FILE 
// =======================

// // 'fs' is the built-in Node.js module that provides functions to interact with the file system,
// // such as reading, writing, and managing files and directories.
// const fs = require("fs");

// Step 1: fs module ko import karte hain
const fs = require("fs"); // fs = file system module

// Smart logics wale logon ne yeh fs library likhi hai,
// jahan tum file ka path doge aur yeh tumhe uska content de dega

// Step 2: readFileSync function se file ka content read karte hain
// Syntax: fs.readFileSync("path_of_file", "encoding")
// "utf-8" encoding se file ko string ki tarah padhega, binary nahi

const contents = fs.readFileSync("a.txt", "utf-8"); // Synchronously file ka content read ho gaya

// Step 3: Ab console par print karwa lete hain
console.log(contents);

// ===== What is UTF-8 ========= solu by ChatGPT
/*
    UTF-8 stands for "Unicode Transformation Format - 8-bit".
    It’s the most commonly used character encoding format on the web and in files.

    Why do we need it?
    When a file is read, the computer actually sees raw binary data (0s and 1s).
    To turn that into readable text (like A, B, C, 😄, अ) — we need to decode it properly.
    That’s where UTF-8 comes in.

*/

