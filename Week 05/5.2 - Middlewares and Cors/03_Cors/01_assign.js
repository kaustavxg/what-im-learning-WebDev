const express = require('express');
const app = express();
app.use(express.json());

// write a middleware
// logs the method, timestamp, and the url

function middleware(req, res, next){
    console.log(`Method is: ${req.method}`);
    console.log(`Timestamp; ${new Date()}`);
    console.log(`URL: ${req.url}`);
    console.log(`Host: ${req.hostname}`);
    
    
    next();
}

app.use(middleware)

app.get('/sum/:a/:b', function(req, res){
    const a = req.params.a;
    const b = req.params.b;

    let ans = parseInt(a) + parseInt(b);
    res.json(`answer = ${ans}`)
})

app.get('/subtract/:a/:b', function(req, res){
    const a = req.params.a;
    const b = req.params.b; 

    let ans = a - b;
    res.json(`answer = ${ans}`)
})

app.get('/multiply/:a/:b', function(req, res){
    const a = req.params.a;
    const b = req.params.b;

    let ans = a * b;
    res.json(`answer = ${ans}`)
})

app.get('/divide/:a/:b', function(req, res){
    const a = req.params.a;
    const b = req.params.b;

    let ans = a / b;
    res.json(`answer = ${ans}`)
})

app.listen(3000);


