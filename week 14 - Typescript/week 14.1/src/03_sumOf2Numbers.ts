//==========================================
//! TypeScript Function Return Types
//==========================================

// Function that explicitly returns a string type
// Even though a and b are numbers, the result is converted to string
function sumFunc(a: number, b: number, c: string): string {
    return a + b + c; // Returns "33" (number addition then string concatenation)
}

//==========================================
// Understanding Return Type Annotations
//==========================================

// The ": string" after the parameters tells TypeScript that
// this function will ALWAYS return a string type
// 
//# Example: function sumFunc(...): string
//          means return type is string
//
// If we wrote ": number" instead, TypeScript would throw an error
// because we're concatenating with a string

//==========================================
//! Function Execution
//==========================================

let ans = sumFunc(1, 2, "3");
console.log(ans); // Output: "33" (1 + 2 = 3, then 3 + "3" = "33")

//# Note: JavaScript does 1 + 2 = 3 first (number addition),
//# then 3 + "3" = "33" (string concatenation)

//==========================================
// Key Takeaway
//==========================================
// Return type annotation ensures type consistency
// TypeScript will verify that your function actually returns
// the type you promised in the signature
//==========================================