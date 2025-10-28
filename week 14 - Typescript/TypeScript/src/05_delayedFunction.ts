// //==========================================
// //! Higher-Order Functions & Callbacks
// //==========================================

// // Higher-order function: Takes another function as a parameter
// //# The parameter type "() => void" means:
// // - () → function takes no arguments
// // - void → function returns nothing
// function delayedCall(anotherFn: () => void) {
//     setTimeout(anotherFn, 1000); // Execute the passed function after 1 second
// }

// // at t = 1, it enters the log function

// // at t = 0, the functions enters the delayedCall function, under which there is a set timeout function under which there is a log function which will be executed after one second, after 1 second has passed the call stack will become empty and then it will enter the log function, inside log function, Hi there will be logged inside the call stack


// function log() {
//     console.log(`Hi there`);
// }

// // Pass the 'log' function to delayedCall
// // Note: We pass 'log' not 'log()' - we're passing the function itself

// delayedCall(log);








// //==========================================
// // Another Example - Same Pattern
// //==========================================

// function myFirst(mySecond: () => void) {
//     setTimeout(mySecond, 2000); // Execute after 2 seconds
// }

// function logging() {
//     console.log(`Hi Kaustav`);
// }

// myFirst(logging);

// //==========================================
// // Execution Timeline Breakdown
// //==========================================

// /*
// ========== EXAMPLE 1 FLOW ==========

// !Visualizing the Flow

// # Time t = 0 seconds:

// Line 5: delayedCall(log); → Calls delayedCall with log as the argument.
// Line 1: function delayedCall(anotherFn: () => void) { → Enters delayedCall.
// Line 2: setTimeout(anotherFn, 1000); → Schedules log to run after 1 second, then exits delayedCall.
// Program waits (call stack is empty).


// # Time t ≈ 1 second:

// setTimeout triggers, pushing log to the call stack.
// Line 4: function log() { → Enters log.
// Line 5: console.log(Hi there); → Prints "Hi there" to the console.
// log completes, and execution ends.

// */

function myFirstFunc(newNewFunc: () => void){
    setTimeout(newNewFunc, 3000);
}

function secondFunc(){
    console.log(`I am getting printed after 3 second`);
}

myFirstFunc(secondFunc)
