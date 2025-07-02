// Creating an HTTP server using Express
// Express framework for Node.js

const express = require("express");

// BASIC HTTP SERVER SETUP

// Step 1: Creating the app instance (like opening a clinic)
const app = express();

/*
=========== EXPRESS ROUTING SYNTAX ===========

app.get(path, callback)

- path: Defines the route for which the middleware function is triggered
- callback: Function(s) that process the request made to the server

 // req -> all things related to the request -> if you want to extract something from the body
// res -> want to send something back as the response
*/

// Route handler for root path
app.get("/", function(req, res) {
    res.send("jai ho");
});

// Step 2: Start the server (doctor taking a room, listening on specific port)
app.listen(3000);

/*
=========== YOUR LOGIC IS LIKE A DOCTOR ===========

REQUEST METHODS:
1. GET    -> Going for consultation to get a check up, asking something from server
2. POST   -> Going to get a new kidney -> put some data in backend  
3. PUT    -> Going to get kidney replaced -> update data
4. DELETE -> Going to get kidney removed -> remove something

STATUS CODES:
1. 200 - Everything went fine
2. 404 - Doctor is not in the hospital
3. 500 - Something went wrong
4. 411 - Inputs were incorrect, wrong chize dal gayi isme
5. 403 - Not allowed inside -> no access to something -> eg. password change hogya can't login
*/