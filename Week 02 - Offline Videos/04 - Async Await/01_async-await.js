/*

async/await writes async code which behaves like sync code, making it easier to understand and maintain

async/await is essentially syntactic sugar on top of Promises. 

The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 

*/

/*

Assignment: Write code that
-> logs hi after 1 second
-> logs hello 3 seconds after step 1
-> logs hello there 5 seconds after step 2

*/

// ================ EXAMPLE 1 ================

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

// under the hood await has bunch of promises which we can't see

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi after 1 sec");
    await setTimeoutPromisified(3000);
    console.log("hi after 3 sec");
    await setTimeoutPromisified(5000);
    console.log("hi after 10 seconds");
}

solve();

console.log("after solve function");

/*

option 1 - 
    hi after 1 sec
    hi after 3 sec
    hi after 5 sec
    after solve function

option 2 - 
    after solve function 
    hi after 1 sec
    hi after 3 sec
    hi after 5 sec    

*/

// option 2 is correct 

// ================ EXAMPLE 2 ================
