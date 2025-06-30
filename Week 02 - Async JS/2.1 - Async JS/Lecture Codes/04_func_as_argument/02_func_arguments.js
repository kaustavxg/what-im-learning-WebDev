// HIGHER ORDER FUNCTIONS
// Passing a function as an argument to another function

// Basic arithmetic functions
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Higher order function - accepts another function as parameter
function doOperation(a, b, op) {
    // op is a functional argument
    let val = op(a, b);
    return val;
}

// Test cases - passing functions as arguments
const ans = doOperation(1, 2, sum);       // 1+2 = 3
const ans2 = doOperation(1, 2, subtract); // 1-2 = -1
const ans3 = doOperation(5, 2, divide);   // 5/2 = 2.5
const ans4 = doOperation(5, 2, multiply); // 5*2 = 10

console.log(ans);  // Output: 3
console.log(ans2); // Output: -1
console.log(ans3); // Output: 2.5
console.log(ans4); // Output: 10