const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

/*
===============================================
!        QUERY PARAMETERS (?a=5&b=3)
===============================================

## What are Query Parameters?
┌─────────────────────────────────────────────────────────────────┐
│ Data passed in URL after the ? symbol                           │
│ Format: /endpoint?key1=value1&key2=value2                       │
│ Example: localhost:3000/sum?a=5&b=3                             │
│ Access: req.query.keyName                                       │
└─────────────────────────────────────────────────────────────────┘
*/

app.get('/sum', function(req, res){
    const a = req.query.a;  // Gets value of 'a' from URL
    const b = req.query.b;  // Gets value of 'b' from URL
    
    /*
    ## URL Example:
    localhost:3000/sum?a=5&b=3
    
    Breaking it down:
    • localhost:3000/sum  ← Base endpoint
    • ?                   ← Query parameter start
    • a=5                 ← First parameter
    • &                   ← Parameter separator  
    • b=3                 ← Second parameter
    
    ## Why parseInt()?
    • Query parameters are always STRINGS
    • "5" + "3" = "53" (string concatenation)
    • parseInt("5") + parseInt("3") = 8 (proper addition)
    */
    
    let add = parseInt(a) + parseInt(b);
    res.json(add);
})

app.get('/subtract', function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    
    // JavaScript automatically converts strings to numbers in subtraction
    let minus = a - b;
    res.json(minus);
})

app.get('/multiply', function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    
    // JavaScript automatically converts strings to numbers in multiplication
    let multiply = a * b;
    res.json(multiply);
})

app.get('/divide', function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    
    let divide = a / b;
    
    /*
    ## parseFloat() explanation:
    • parseInt() gives whole numbers: parseInt("5.7") = 5
    • parseFloat() gives decimal numbers: parseFloat("5.7") = 5.7
    • For division, we might get decimal results
    • JavaScript division automatically handles this, so parseFloat() not needed here
    */
    
    res.json(divide);
})

/*
===================================================
!        DYNAMIC ENDPOINTS (localhost:3000/add/4/5)
===================================================

## Problem with Query Parameters:
┌─────────────────────────────────────────────────────────────────┐
│ OLD WAY (Query Parameters):                                     │
│ localhost:3000/sum?a=4&b=3                                      │
│ • Long URLs                                                     │
│ • Need to remember parameter names                              │
│ • Not very clean looking                                        │
└─────────────────────────────────────────────────────────────────┘

## Solution - Route Parameters:
┌─────────────────────────────────────────────────────────────────┐
│ NEW WAY (Route Parameters):                                     │
│ localhost:3000/sum/4/5                                          │
│ • Cleaner URLs                                                  │
│ • No need to write a=, b=                                       │
│ • More intuitive and readable                                   │
└─────────────────────────────────────────────────────────────────┘

!=================== How Route Parameters Work ===================
• Define: /add/:a/:b  (: indicates parameter)
• Access: req.params.a, req.params.b
• URL: localhost:3000/add/4/5
• Result: a=4, b=5
*/

app.get('/add/:a/:b', (req, res) => {
    const a = req.params.a;  // Gets first parameter from URL path
    const b = req.params.b;  // Gets second parameter from URL path

    let ans = parseInt(a) + parseInt(b);
    res.json(ans);
})

/*
    ## Route Parameters vs Query Parameters:
    
    ┌─────────────────────────────────────────────────────────────────┐
!   │ ROUTE PARAMETERS (/add/4/5):                                    │
    │ • Part of the URL path                                          │
    │ • Access: req.params.paramName                                  │
    │ • Example: /user/123/profile                                    │
    │ • Good for: Required data, IDs, essential parameters            │
    └─────────────────────────────────────────────────────────────────┘
    
    ┌─────────────────────────────────────────────────────────────────┐
!   │ QUERY PARAMETERS (/add?a=4&b=5):                                │
    │ • After ? in URL                                                │
    │ • Access: req.query.paramName                                   │
    │ • Example: /search?q=javascript&limit=10                        │
    │ • Good for: Optional data, filters, pagination                  │
    └─────────────────────────────────────────────────────────────────┘
*/

// ===================================================================

/*
===============================================
            WHEN TO USE WHAT?
===============================================

## Use Route Parameters (/api/user/123) when:
Data is required for the endpoint to work
Information is essential (like user ID, product ID)
You want cleaner, more readable URLs
Building RESTful APIs

## Use Query Parameters (/api/users?page=1&limit=10) when:
Data is optional
For filtering, sorting, pagination
Multiple optional parameters
Search functionality

## Real-world Examples:

    ┌─────────────────────────────────────────────────────────────────┐
!   │ ROUTE PARAMETERS:                                               │
    │ • /api/user/123           ← Get user with ID 123                │
    │ • /api/post/456/comments  ← Get comments for post 456           │
    │ • /calculator/add/10/20   ← Add 10 and 20                       │
    └─────────────────────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────┐
!   │ QUERY PARAMETERS:                                               │
    │ • /api/users?page=2&limit=5    ← Pagination                     │
    │ • /api/products?category=electronics&sort=price                 │
    │ • /search?q=javascript&type=tutorial                            │
    └─────────────────────────────────────────────────────────────────┘

## Best Practice:
Combine both when needed:
/api/user/123/posts?page=1&limit=10
• 123 is required (route parameter)
• page and limit are optional (query parameters)
*/

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Try these endpoints:');
    console.log('• http://localhost:3000/sum?a=5&b=3');
    console.log('• http://localhost:3000/add/4/5');
});