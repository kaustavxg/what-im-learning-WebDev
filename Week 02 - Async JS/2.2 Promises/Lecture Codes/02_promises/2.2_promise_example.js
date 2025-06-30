// For more understanding check out [04.2_promises - image]

// EXAMPLE 1: Basic Promise Structure (Commented out for reference)
// This shows the fundamental promise pattern

function random(resolve) {
   setTimeout(resolve, 4000);
}

let p = new Promise(random); // supposed to return you something eventually on completion

// Using the eventual value returned by the promise
function callback() {
    console.log("promise succeeded");
}
p.then(callback); // this will be called when the promise is resolved


// =======================================================================================


// EXAMPLE 2: Direct Callback Approach (Current Active Code)
// This demonstrates passing a callback function directly without promises

// Step 1: Define the async operation function
// This function accepts a callback (resolve) and executes it after 3 seconds
function waitFor3S(resolve) {
    // Log the function that was passed as callback
    console.log(resolve);
    // Execute the callback after 3000ms
    setTimeout(resolve, 3000);
}

// Step 2: Define what happens when the operation completes
function main() {
    console.log("main is called after 3 seconds");
}

// Step 3: Execute the async operation
// Pass main function as callback to waitFor3S
waitFor3S(main);

// Note: This is direct callback approach, not using Promise syntax
// The waitFor3S function directly accepts and calls the callback
// Unlike promises where we use .then() method