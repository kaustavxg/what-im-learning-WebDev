const fs = require("fs");

// ========= I/O BOUND TASK =========
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronously
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8"); // synchronously
console.log(contents2);

console.log();

//  ============== Asynchronously =================

const async = fs.readFile("a.txt", "utf-8");
const async2 = fs.readFile("b.txt", "utf-8");
console.log(async);


// =========== NON I/O BOUND TASK or CPU BOUND TASK ================
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	

// A PROGRAM THAT DEALS WITH DIGITS or CALCULATIONS -> CPU BOUND 

