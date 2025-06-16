// ==== This is synchronous JS code ====
// Any code which is running by a single thread at a time
// You can't run two lines together

// ===== SUM OF TWO NUMBERS =====
function sum(a, b) {
    return a + b;
}

// Basic addition
let ans = sum(2, 3);
console.log(ans); // Output: 5

// Concatenation (when one parameter is string)
let ans1 = sum("2", 3);
console.log(ans1); // Output: "23"

// ===== FIND SUM FROM 1 TO A NUMBER =====
function sumofNum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) { // Starting from 1 instead of 0
        ans = ans + i;
    }
    return ans;
}

// Test cases
const result1 = sumofNum(5);
console.log(result1); // Output: 15

const result2 = sumofNum(10);
console.log(result2); // Output: 55

const result3 = sumofNum(100);
console.log(result3); // Output: 5050

/*
Expected results:
if n = 5, ans = 15 (1+2+3+4+5 = 15)
   n = 10, ans = 55 (1+2+3+...+10 = 55)
   n = 100, ans = 5050 (1+2+3+...+100 = 5050)
*/