// ****************  RUN IN REPLIT  ******************


// ASYNC -> I/O Bound

const fs = require("fs");

// Ye ek callback function hai jiska kaam hai error ya data ko handle karna
// Jab file read hoti hai, agar error aaya toh 'err' mein milega that is file does not exist in the system, warna 'data' mein content aayega
function print(err, data) {
  if (err) {
    console.log("File not found!"); // agar koi error aaya toh usse print karo
  } else {
    console.log(data); // agar sab sahi hai toh file ka data print karo
  }
}

// Asynchronous (non-blocking) tareeke se 'a.txt' file ko read kar rahe hain
// readFile khud se 'print' function ko call karega jab file ka kaam ho jaayega
const contents = fs.readFile("a.txt", "utf-8", print);

// Ye bhi wahi async read hai for 'b.txt'
// Iska output bhi baad mein aayega, jab file read complete hogi
const contents2 = fs.readFile("b.txt", "utf-8", print);

// Ye line turant print ho jaayegi, bina wait kiye upar waali files ke liye
console.log("Done!");
