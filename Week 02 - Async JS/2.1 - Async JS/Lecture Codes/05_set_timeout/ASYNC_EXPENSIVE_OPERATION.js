// EVENT LOOP DEMONSTRATION
// Run on Loupe to understand execution order

function timeout() {
    console.log("I will run after 1 second");
}

// Synchronous code executes first
console.log("Hiiii");

// Asynchronous operation - goes to Web API
setTimeout(timeout, 1000);

console.log("Welcome to loupe");

// CPU intensive synchronous task - blocks the main thread
let c = 0;
for (let i = 0; i < 1000000; i++) {
    c = c + 1;
}

console.log("Expensive operation done");

/*
EXECUTION ORDER QUIZ:

====== OPTION 1 ======
Hiiii
Welcome to loupe
I will run after 1 second
Expensive operation done

====== OPTION 2 ======
Hiiii
Welcome to loupe
Expensive operation done
I will run after 1 second

====== OPTION 2 IS CORRECT ✓ ======
Why? Run it on Loupe - pta chal jayega kyu!

Reason: setTimeout callback waits in callback queue until call stack is empty.
The expensive loop blocks the main thread, so callback executes only after loop completes.
*/