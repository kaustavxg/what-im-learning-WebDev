// ======== HTTP -> Hypertext Transfer Protocol ===========
// How do I create an HTTP server? -> It is a protocol, can be written in any language
// Answer -> Express

const express = require("express");

function calcSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// HTTP SERVER SETUP

// Step 1: Creating the app instance (a room of a doctor, various people come)
const app = express();

// Route handler - here we are exposing express to the world
app.get("/", function(req, res) {
    const n = req.query.n;  // Getting parameter from URL query
    const ans = calcSum(n);
    res.send("Hi your ans is " + ans);
});

// Step 2: Start the server (listening on port 3000)
app.listen(3000);

