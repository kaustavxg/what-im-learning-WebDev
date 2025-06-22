// CALLBACK BASED APPROACH
// Traditional way using callback functions

function main() {
    console.log("kaustav is logged after 5 sec");
}

setTimeout(main, 5000);

/* 
You can use callback based approach
----------  OR  ------------------
You can use promises based approach -> cleaner approach 
*/

// PROMISE BASED APPROACH
// A Promise in JavaScript is an object that represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value

// Defining a promise is hard
// Using a promise is easy

// Returns an object of the promise class
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}

// Callback function to execute after promise resolves
function afterDone() {
    console.log("5 seconds have passed");
}

// Using the promisified version - syntactically cleaner
setTimeoutPromisified(5000).then(afterDone);