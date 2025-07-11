// CORS = Cross Origin Resource Sharing

// Real problem: Browser ki security policy
// Example: harkirat.classx.co.in website se harkirat.api.classx.co.in se data mangna
// Browser says: "Nahi! Different domain hai, allowed nahi hai!"

//! What is CORS?
// Simple: Different websites se data exchange karne ka tarika
// Browser by default block karta hai cross-origin requests
// CORS = Permission slip jo browser ko batata hai "ye allowed hai"

//! When CORS problem hota hai?
// Jab frontend aur backend different domains pe hosted hai
// Example scenarios:
// - Frontend: localhost:3000, Backend: localhost:8000 → CORS issue!
// - Frontend: myapp.com, Backend: api.myapp.com → CORS issue!
// - Frontend: app.netlify.com, Backend: myapi.herokuapp.com → CORS issue!

//! How to solve CORS?
// Backend mein headers add karne padte hai
// Browser ko batana padta hai: "Ye website se requests allowed hai"

const express = require('express');
const app = express();

// Solution 1: Manual CORS headers
app.use((req, res, next) => {
    // Ye header browser ko batata hai: "Koi bhi website se request allowed hai"
    res.header('Access-Control-Allow-Origin', '*');
    
    // Ye methods allowed hai
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Ye headers allowed hai
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

// Solution 2: Using CORS package (easier way)
// First install: npm install cors
// const cors = require('cors');
// app.use(cors()); // Bas ye line add karo, sab ho jayega!

app.use(express.json());

// Simple sum endpoint
app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = parseInt(a) + parseInt(b);
    
    res.json({
        answer: result,
        message: `${a} + ${b} = ${result}`
    });
});

app.listen(8000, () => {
    console.log('Backend server running on port 8000');
});

//! Real life example:
// Tumhara frontend: localhost:3000
// Tumhara backend: localhost:8000
// Bina CORS: Browser blocks the request
// CORS ke saath: Request successfully hoti hai

//! Common CORS errors:
// "Access to fetch at 'localhost:8000' from origin 'localhost:3000' has been blocked by CORS policy"
// Solution: Backend mein CORS headers add karo ya cors package use karo

//! Security note:
// '*' means koi bhi website se request allowed hai
// Production mein specific domains allow karo:
// res.header('Access-Control-Allow-Origin', 'https://myapp.com');

//! Easy way to remember:
// CORS = Browser ki permission
// Backend se permission deni padti hai
// Frontend automatically request kar deta hai agar permission hai