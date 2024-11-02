# Promisifying `setTimeout` in JavaScript

## The Goal
Normally, `setTimeout` is a function in JavaScript that waits for a specified amount of time and then runs some code. But when we "promisify" it, we turn it into a promise so that we can use `.then()` to handle what happens when the wait is over.

## Why Promisify `setTimeout`?
By using promises with `setTimeout`, it makes it easier to manage delays in code that use promises. This approach makes the code easier to read and simplifies working with other async (delayed) tasks.

## The Code
Here's the code for a promisified `setTimeout`:

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

## Breaking Down the Code

### Function Declaration
We create a function named `delay` that takes one argument: `ms` (milliseconds). This will be the time it waits before doing something.

### Creating the Promise
Inside `delay`, we return a new `Promise`. This promise is like saying, "I promise to wait for a certain amount of time."

### Setting up `setTimeout`
Inside the promise, we use `setTimeout`, giving it two arguments:
- **`resolve`**: The function to call when the waiting time is done.
- **`ms`**: The number of milliseconds to wait.

After `ms` milliseconds, `setTimeout` calls `resolve`, fulfilling the promise.

## How to Use This
Now, when you call `delay`, it returns a promise that "resolves" (completes) after the given time. You can use `.then()` to handle what happens next:

``javascript
delay(2000).then(() => {
  console.log("2 seconds have passed!");
});
```

### In This Example:
- `delay(2000)` means we want to wait for 2 seconds (2000 milliseconds).
- After 2 seconds, the promise is fulfilled, so `.then()` runs the code inside: `console.log("2 seconds have passed!");`

## Summary
- Promisifying `setTimeout` lets you control delays with promises, which is helpful in complex asynchronous code.
- `delay(ms)` returns a promise that completes after `ms` milliseconds.
- You can use `.then()` to run code once the time is up.
