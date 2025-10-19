//==========================================
//! TypeScript Type Annotations & Union Types
//==========================================

//# Union Type: Variable can hold either number OR string
let x: number | string = 1;

//# Strict Type: Variable can only hold number
let y: number = 1;

// Reassigning x to a string (valid because of union type)
x = "kaustav";

// Uncommenting the line below would cause a TypeScript error
// because y is strictly typed as number
// y = "kaustav"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Output the current value of x
console.log(x); // Output: "kaustav"

//==========================================
//! How to Run TypeScript Code
//==========================================
// Step 1: Compile TypeScript to JavaScript
//   Command: npx tsc -b
//   or:      npx tsc index.ts
//
// Step 2: Execute the compiled JavaScript
//   Command: node index.js
//
// Alternative: Use ts-node for direct execution
//   Command: npx ts-node index.ts
//==========================================