// Understanding JSON in Express - Easy Way!

const express = require('express');
const app = express();

// Simple rule: Want to receive JSON data? Use this line!
// Client bhejega JSON data → Express samjhega → req.body mein mil jayega
app.use(express.json());

//! Why express.json() chahiye?
// Simple: Without this, req.body = undefined
// With this: req.body = actual data jo client ne bheja

/*
Think of it like this:
- Client sends: {"name": "John", "age": 25}
- Without express.json(): req.body = undefined (Express doesn't understand)
- With express.json(): req.body = {name: "John", age: 25} (Express understands!)

It's like a translator:
Client (JSON) → express.json() (Translator) → Your code (JavaScript object)
*/

//! When do you need this?
// Jab client tumhe data bhejta hai POST/PUT requests mein
// For example: Registration form, login form, any form data
// No data coming from client? No need for this line

// Real example: Calculator API
app.post('/sum', function(req, res) {
    // Client sends: {"a": 5, "b": 10}
    // req.body gets: {a: 5, b: 10}
    const a = req.body.a;
    const b = req.body.b;

    // Do the math
    let ans = parseInt(a) + parseInt(b);
    
    // Send answer back as JSON
    res.json({
        answer: ans,
        message: `${a} + ${b} = ${ans}`
    });
});

// What happens without express.json()? Let's see:
app.post('/broken-example', function(req, res) {
    console.log('Without express.json():', req.body); // undefined!
    res.json({
        error: 'Oops! Cannot read data without express.json()'
    });
});

app.listen(8000, () => {
    console.log('Server chal raha hai on port 8000');
});

//! Easy Summary:
// 1. express.json() = JSON data ko samjhane ke liye
// 2. Bina iske req.body undefined hota hai
// 3. Iske saath req.body mein actual data mil jata hai
// 4. Sirf POST/PUT requests mein chahiye (jab client data bhejta hai)

//! Common confusion:
// Q: express.json() kya karta hai?
// A: Client se aane wale JSON data ko JavaScript object banata hai

// Q: Kab use karni hai?
// A: Jab client se form data ya koi bhi data receive karna ho

// Q: Kya hoga agar nahi lagayi?
// A: req.body = undefined (data nahi milega)

//! Testing kaise kare:
// Use Postman ya any API tool
// POST request bhejo: http://localhost:8000/sum
// Body mein JSON data: {"a": 10, "b": 20}
// Response milega: {"answer": 30, "message": "10 + 20 = 30"}

//! Real life example:
// Imagine tum sign-up form bana rahe ho
// User details JSON mein aayenge: {"name": "Rahul", "email": "rahul@gmail.com"}
// express.json() iske bina ye data access nahi kar sakte