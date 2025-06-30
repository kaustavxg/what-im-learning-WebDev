// ===================== CALLBACK BASED APPROACH =====================
// Traditional way using callback functions
// Direct method - simple but can lead to callback hell in complex scenarios

function main() {
    console.log("kaustav is logged after 5 sec");
}

// setTimeout takes a callback function and executes it after specified time
setTimeout(main, 5000);

/* 
You can use callback based approach

--------------------------------------------  OR  ------------------------------------------

// ==================================== PROMISES ====================================

You can use promises based approach -> cleaner approach 
*/

// Promises are syntactically better way of writing callbacks
// Syntactically better? dhikne mein ache lagte hai, sundar syntax

// A Promise in JavaScript is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value

// Defining a promise is hard
// Using a promise is easy

//
// Creating a promisified version of setTimeout

// Step 1: Create the async operation function
// This function will be passed to Promise constructor
function doAsyncOp(resolve) {
    // setTimeout will call resolve after 3000ms
    setTimeout(resolve, 3000);
}

// Step 2: Create a function that returns a Promise
// Returns an object of the promise class
function setTimeoutPromisified() {
    // Promise constructor takes a function with resolve parameter
    return new Promise(doAsyncOp);
}

// Step 3: Define what happens when promise resolves
function callback() {
    console.log("callback is called");
}

// Step 4: Use the promise
// Create promise object
let p = setTimeoutPromisified();
// Attach callback using .then() method
p.then(callback);