/*
# Middlewares

In Express.js, **middleware** refers to functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as 

1. Modifying the request or response objects.
2. Ending the request-response cycle.
3. Calling the next middleware function in the stack.

*/

const express = require('express');
const app = express();

//! Express framework is fundamentally a chain of middleware functions
//! Every request passes through multiple middleware functions before reaching the final handler

// Built-in middleware to parse JSON from request body
app.use(express.json());

// Global counter to track total requests
let count = 0;

// Custom middleware function that runs before every route handler
function requestIncreaser(req, res, next) {
    // Increment the global counter for each request
    count = count + 1;
    
    // STEP 1: Modifying the request object by adding custom property
    // This property will be available in all subsequent middleware and route handlers
    req.name = "hahahGupta123"
    
    console.log(`Total count is now = ${count}`);
    
    // IMPORTANT: Call next() to pass control to the next middleware in the chain
    // Without next(), jo middleware ke baad ka function hai vo chalega hi nahi
    
    next();
}

// Route handler function - this is where the main business logic happens
function yahaPeSumHoga(req, res) {

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    // Accessing the custom property added by middleware
    console.log(req.name);
    
    // Note: This function should actually send a response
    // Currently it's incomplete - should add: res.json({ result: a + b });
}

// Routes with middleware chaining
// Pattern: app.get(path, middleware1, middleware2, ..., finalHandler)
app.get('/sum', requestIncreaser, yahaPeSumHoga)        // Addition endpoint
app.get('/multipy', requestIncreaser, yahaPeSumHoga)    // Multiplication endpoint

// Admin route to check total request count
app.get('/admin', function(req, res) {
    res.json({
        message: `Total number of requests till now = ${count}`
    })
})

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//! What is middleware?
// Middleware is a function that sits between the incoming request and the outgoing response
// It's like a middleman in a business transaction - it can inspect, modify, or control the flow

// Middleware functions have access to:
// - req (request object) - contains data about the HTTP request
// - res (response object) - used to send response back to client  
// - next (function) - passes control to the next middleware in the chain

//! Why use middleware when you can do everything without it?
// 1. Better code organization and readability
// 2. Reusability - same middleware can be used across multiple routes
// 3. Separation of concerns - authentication, logging, parsing can be separate
// 4. Easier debugging and maintenance
// 5. Following the DRY principle (Don't Repeat Yourself)

//! Common use cases for middleware:
// - Authentication and authorization
// - Request logging and analytics
// - Input validation and sanitization
// - Error handling
// - Rate limiting
// - CORS handling
// - Request parsing (JSON, URL-encoded, etc.)