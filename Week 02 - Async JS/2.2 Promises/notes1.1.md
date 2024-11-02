# Promises for beginners in JavaScript

Promises in JavaScript help us handle things that take time to complete, like loading data from a server or doing complex calculations. When you request something that takes time, JavaScript doesn’t want to keep you waiting; instead, it gives you a “promise” that it’ll let you know when the job is done. Think of a promise as a placeholder for a future result.

## How Promises Work

### 1. Creating a Promise

A promise represents a task that’s started but isn’t completed yet. You can create a promise that says, “I’ll do this task, and when I finish, I’ll either give you the result or let you know if something went wrong.”

### 2. States of a Promise

A promise can be in one of three states:

- **Pending**: The task is still happening, and you don’t have the result yet.
- **Fulfilled**: The task completed successfully, and you now have a result.
- **Rejected**: The task failed, and there’s an error message.

### 3. Using a Promise

When you get a promise, you can add `.then()` and `.catch()` to handle the result:

- `.then()` runs when the promise is fulfilled and lets you work with the result.
- `.catch()` runs if something goes wrong, so you can handle any errors.

### Example

Here’s an example to make it clearer:

```javascript
// Creating a promise
let getData = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  setTimeout(() => {
    if (success) {
      resolve("Data loaded successfully!"); // fulfilled
    } else {
      reject("Failed to load data."); // rejected
    }
  }, 2000); // Simulate a delay of 2 seconds
});

// Using the promise
getData
  .then((result) => {
    console.log(result); // Runs if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Runs if the promise is rejected
  });
