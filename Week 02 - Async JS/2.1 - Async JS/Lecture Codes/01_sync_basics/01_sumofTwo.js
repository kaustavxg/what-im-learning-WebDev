// JavaScript Basic Functions - Synchronous Code
// Single-threaded execution - one line at a time

// ===== SUM OF TWO NUMBERS =====
function sum(a, b) {
    return a + b;
}

// Basic addition example
let ans = sum(2, 3);
console.log(ans); // Output: 5

// String concatenation example (when one parameter is string)
let ans1 = sum("2", 3);
console.log(ans1); // Output: "23"

// ===== FIND SUM FROM 1 TO N =====
function sumofNum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// Test cases
const result1 = sumofNum(5);
console.log(result1); // Output: 15 (1+2+3+4+5)

const result2 = sumofNum(10);
console.log(result2); // Output: 55 (1+2+3+...+10)

const result3 = sumofNum(100);
console.log(result3); // Output: 5050 (1+2+3+...+100)