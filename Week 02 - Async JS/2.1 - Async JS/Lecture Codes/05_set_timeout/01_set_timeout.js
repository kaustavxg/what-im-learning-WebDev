// ASYNCHRONOUS JAVASCRIPT DEMO
// Run this code on JavaScript Loupe to visualize execution

// Function to run after 15 seconds
function run() {
    console.log("I will run after 15s");
}

// Function to run after 30 seconds  
function timeout() {
    console.log("I will run after 30 sec");
}

// Asynchronous operations - I/O intensive tasks
setTimeout(run, 15000);     // 15 seconds delay
setTimeout(timeout, 30000); // 30 seconds delay

// Synchronous operations - execute immediately
console.log("I will run immediately");
console.log("Hi!");
console.log("welcome here");

// Expected output order:
// 1. "I will run immediately"
// 2. "Hi!"
// 3. "welcome here"
// 4. "I will run after 15s" (after 15 seconds)
// 5. "I will run after 30 sec" (after 30 seconds)