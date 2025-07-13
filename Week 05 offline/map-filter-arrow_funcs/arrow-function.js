//! =============== ARROW FUNCTIONS ===============

// Traditional function declaration
function sum(a, b){
    return a + b;
}

// Arrow function with block body (same as above)
const sum2 = (a, b) => {
    return a + b;
}

// Arrow function with concise body (implicit return)
const sum3 = (a, b) => a + b;

// Example: Using arrow functions in Express.js routes
app.get('/sum', (req, res) => {
    const result = sum(1, 2);
    res.json({ result });
});

// Testing the functions
const ans = sum(1, 2);
console.log(ans); // 3

const ans2 = sum2(1, 2);
console.log(ans2); // 3

const ans3 = sum3(1, 2);
console.log(ans3); // 3

//! =============== MORE ARROW FUNCTION EXAMPLES ===============

// Single parameter - parentheses optional
const square = x => x * x;
console.log(square(5)); // 25

// No parameters - parentheses required
const greet = () => "Hello World!";
console.log(greet()); // "Hello World!"

// Multiple statements - need curly braces and return
const multiply = (a, b) => {
    const result = a * b;
    console.log(`${a} * ${b} = ${result}`);
    return result;
};

// Arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// Using arrow function with map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using arrow function with filter
const evenNum = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]