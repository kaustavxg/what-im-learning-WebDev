/*
# Middlewares

In Express.js, **middleware** refers to functions that have access to the request object (`req`), response object (`res`), and the `next` function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as 

1. Modifying the request or response objects.
2. Ending the request-response cycle.
3. Calling the next middleware function in the stack.

*/


const express = require('express');
const app = express();

//! express framework is a chain of middleware

app.use(express.json());

let count = 0;

function requestIncreaser(req, res, next){
    count = count + 1;
    // STEP 1: Modifying the request or response objects.
    req.name = "hahahGupta123"
    console.log(`Total count is now = ${count}`);
    next();
}


function yahaPeSumHoga(req, res){
     // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);
    // seconds handler can access it 
    
}

// better routing, add database, middleware
app.get('/sum', requestIncreaser ,yahaPeSumHoga)

app.get('/multipy', requestIncreaser ,yahaPeSumHoga)

app.get('/admin', function(req, res){
    res.json({
        message: `Total number of counts till now = ${count}`
    })
})

app.listen(3000);

//! what is middleware
// something which runs before actual logic works
// middleware is like a middleman in a business
// middleware have access to request and resolve and the next function in the application req-res shit


// pov: you actually dont need middlewear, you can do all shit witjhout it also?
// then why to use? more better readibility