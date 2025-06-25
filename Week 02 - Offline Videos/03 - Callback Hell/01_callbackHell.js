// console.log("=================================");

// PROMISE APPROACH - Clean and Readable (Commented for reference)
// This shows how to avoid callback hell using promises

// Step 1: Create a promisified version of setTimeout
// function setTimeoutPromisified(duration) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// Step 2: Define callback function
// function callback() {
//     console.log("5 second has been passed");
// }

// Step 3: Use the promise - clean and readable
// setTimeoutPromisified(5000).then(callback);

// ======== CALLBACK HELL ========
// Ugly code - demonstrates the problem with nested callbacks
// This is what happens when you have multiple async operations that depend on each other

setTimeout(function() {
    console.log("===================================");
    console.log("logs hi after 1 second");
    
    setTimeout(function() {
        console.log("===================================");
        console.log("logs hello 3 seconds after step 1");
        
        setTimeout(function() {
            console.log("===============================");
            console.log("logs hello there 5 seconds after step 2");
        }, 5000);
    }, 3000); 
}, 1000); 

// This ugly indentation in callback hell is known as "Pyramid of Doom"

// Problems with this approach:
// 1. Hard to read and understand
// 2. Difficult to maintain and debug
// 3. Error handling becomes complex
// 4. Code grows horizontally instead of vertically

// Total execution time: 1s + 3s + 5s = 9 seconds
// Each step waits for the previous one to complete