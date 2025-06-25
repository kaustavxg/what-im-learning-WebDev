// Create a function that logs "Hello" after 2 seconds using async/await.

function promisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}

// ================ ❌ CASE 1 - Galat: console.log(...) turant chalega ================

async function nameDelay(){
    await promisified(2000).then(console.log("Hello after 2 seconds"));
    
}
nameDelay();

// ❌ Explanation:
// console.log("Hello after 2 seconds") runs immediately (because you are calling it immediately, not passing it as a function).
// Iska result `undefined` hota hai, jo .then() ke andar chala jaata hai.
// Output: "Hello..." turant print hota hai, 2 second baad kuch nahi hota.

// ================ CASE 2 - ✅ Correct way — wait for 2 sec, then print ================

async function nameDelay(){
    await promisified(2000)
    console.log("Hello after 2 seconds");
}
nameDelay();

// ✅ Best way to use async/await
// First wait 2 seconds (due to await), then log the message
// Clean, readable, proper async/await usage


// ================ CASE 3 - ✅ Slightly different — using a separate named function inside .then() ================

async function nameDelay(){
    await promisified(2000)
    .then(function(){
        console.log("Hello after 2 seconds");
    })
    
}
nameDelay();

// ✅ Also correct
// After 5 seconds, it calls `callMe()` and logs the message
// Works fine because you're passing the function reference, not calling it
// Equivalent to doing:
    // await promisified(5000);
    // callMe();


// agar tu .then() ke saath delay ke baad kuch karna chahta hai (jaise print), toh usse function ke andar wrap karna zaroori hai.
// Example: .then(() => console.log("Hello"))


// ================ CASE 4 -  ✅ Sahi: Named function passed to .then() ================

function callMe(){
    console.log("hello ji hello");
}
 
async function nameDelay(){
    await promisified(5000).then(callMe)
}
nameDelay();

// ✅ Explanation:
// callMe ek function hai, uska reference .then() ko diya gaya hai.
// Delay ke baad yeh function run hoga.
// Yeh bhi sahi hai, readable hai, aur kaam bhi sahi karta hai.

