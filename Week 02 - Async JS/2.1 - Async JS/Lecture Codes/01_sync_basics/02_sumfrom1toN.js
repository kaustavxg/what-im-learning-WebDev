// =========== SYNCHRONOUS JAVASCRIPT CODE ==========
// Synchronous code executes line by line - each operation waits for the previous one to complete

// Why synchronous?
// First ans will be executed, then ans2 and last ans3
// Each line waits for the previous one to finish completely before starting

// ===== FIND SUM FROM 1 TO N - DIFFERENT METHODS =====

// ====== Method 1: Using Loop (starts from 0) ======
function sumFromZero(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const ans = sumFromZero(3); // 0+1+2+3 = 6
console.log(ans); // Output: 6

// ====== Method 2: Using Mathematical Formula ======
function sumFormula(n) {
    // Formula: n*(n+1)/2 for sum from 1 to n
    return n * (n + 1) / 2;
}

const ans2 = sumFormula(2); // 1+2 = 3
console.log(ans2); // Output: 3

// ====== Method 3: Using Loop (starts from 1) ======
function sumFromOne(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

const ans3 = sumFromOne(100);
console.log(ans3); // Output: 5050

// Test cases
const result1 = sumFromOne(5);
console.log(result1); // Output: 15 (1+2+3+4+5)

const result2 = sumFromOne(10);
console.log(result2); // Output: 55 (1+2+...+10)

// Note: Method 1 includes 0 in sum, Methods 2 & 3 calculate proper sum from 1 to n