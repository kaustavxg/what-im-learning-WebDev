//==========================================
//! Arrow Functions with Type Annotations
//==========================================

/*
! Basic Syntax Pattern:

let functionName = (param1: type, param2: type): returnType => {
    // function body
    return something;
}

Breaking it down:
├─ let/const → variable declaration
├─ functionName → name of the function
├─ (param: type) → parameters with types
├─ : returnType → optional return type annotation
├─ => → arrow (this makes it an arrow function)
└─ { } → function body
*/

let Kaustav = (name: string, age: number, marks: number): number => {
    console.log(`Hi my name is ${name}, my age is ${age} and my marks are ${marks}`);

    return 0;
}
console.log(Kaustav("Kaustav", 21, 85));


// Arrow function stored in a variable
//# TypeScript infers the return type as 'void' (returns nothing)
let greet = (name: string) => {
    console.log(`Hi there ${name}`);
}

// Calling the arrow function
greet("kaustav"); // Output: Hi there kaustav

//==========================================
// Arrow Function Syntax Variations
//==========================================

// With explicit return type annotation
let greetExplicit = (name: string): void => {
    console.log(`Hi there ${name}`);
}

console.log(greetExplicit("alex"));


// Single-line arrow function (implicit return)
let greetShort = (name: string) => console.log(`Hi there ${name}`);
console.log(greetShort("kirat"));


// Arrow function that returns a value
let greetWithReturn = (name: string): string => {
    return `Hi there ${name}`;
}
console.log(greetWithReturn);


// Even shorter - implicit return with parentheses removed
let getMessage = (name: string) => `Hi there ${name}`;

//==========================================
//! Arrow vs Regular Function
//==========================================

// Regular function declaration
function greetRegular(name: string) {
    console.log(`Hi there ${name}`);
}

// Arrow function (stored in variable)
let greetArrow = (name: string) => {
    console.log(`Hi there ${name}`);
}

// Both work the same way for simple cases
// Arrow functions are more concise and commonly used in modern TypeScript

//==========================================
// When to Use Arrow Functions
//==========================================
//  Callbacks (setTimeout, map, filter, etc.)
//  Short, simple functions
//  When you want concise syntax
//  Event handlers in modern frameworks
//==========================================