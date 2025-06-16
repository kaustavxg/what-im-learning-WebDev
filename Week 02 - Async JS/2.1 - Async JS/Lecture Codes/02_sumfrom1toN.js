// ===== FIND SUM FROM 1 TO A NUMBER - DIFFERENT METHODS =====


// ====== Method 1 =====
// Using loop (starts from 0 - includes 0 in sum)
function sum(n) {
    // Calculate sum from 0 to n using a loop
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;  // Add each number to ans
    }
    return ans;
}

const ans = sum(3); // Test case: sum of numbers from 0 to 3 (0+1+2+3 = 6)
console.log(ans); // Output: 6


// ====== Method 2 ======
// Using mathematical formula
function sum2(n2) {
    // Calculate sum from 1 to n2 using formula: n*(n+1)/2
    return n2 * (n2 + 1) / 2;
}

const ans2 = sum2(2); // Test case: sum of numbers from 1 to 2 (1+2 = 3)
console.log(ans2); // Expected output: 3

// ====== Method 3 ======
// Using loop (starts from 1 - proper sum from 1 to n)
function sumProper(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

const ans3 = sumProper(100);
console.log(ans3); // Output: 5050


// ====== Method 4 ======
// Alternative implementation (same as Method 3)
function sumofNum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) { // Starting from 1 instead of 0
        ans = ans + i;
    }
    return ans;
}

// Test cases for Method 4
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

Note: Method 1 includes 0 in the sum, while Methods 2, 3, and 4 calculate proper sum from 1 to n
*/