//==========================================
// !TypeScript Functions with Type Annotations
//==========================================

// Function with typed parameter and implicit return type
// Takes a string parameter and returns a number
function greet(name: string): number {
    console.log(`Hi, Good Morning ${name}`);
    
    return 0; // Returns 0 to indicate successful execution
}

// Function call with a string argument
greet("ABC"); // Output: Hi, Good Morning ABC

//==========================================
//! TypeScript Type System Overview
//==========================================

//! Common Types in TypeScript:
// - number:  Numeric values (1, 3.14, -5)
// - string:  Text values ("hello", 'world')
// - boolean: True/false values
//# - any:     ANY type (⚠️ Avoid using this!)

//! WARNING: The 'any' type disables TypeScript's type safety
//! Using 'any' defeats the purpose of TypeScript because it allows
//! any type of value, making your code as unsafe as plain JavaScript

//==========================================
// Union Types: Multiple Allowed Types
//==========================================

// Union type: Variable can be string OR number OR boolean
let x: string | number | boolean = 1;

// All these reassignments are valid due to union type
x = true;       // Boolean is allowed
x = "kaustav"; //  String is allowed
// x = [1, 2, 3]; // ❌ Error: Array is NOT in the union type

console.log(x); // Output: "harkirat"

//==========================================
// Best Practices
//==========================================
//  Always specify types for function parameters
//  Use union types when a variable needs flexibility
//  Avoid 'any' type - it removes TypeScript's benefits
//  Let TypeScript infer return types when obvious
//==========================================