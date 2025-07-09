const express = require('express');
const app = express();

app.use(express.json());

function requestCount(req, res, next){
    requestCount = requestCount + 1;
    console.log(`My total count is: ${requestCount}`);
    next();

    // if it does not call next(), 
    
}

function realSumHandler(req, res){
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
}

app.get('/sum/:a/:b', requestCount, function(req, res){
    count = count + 1;
    console.log(`My count is now: ${count} `);
    
    const a = req.params.a;
    const b = req.params.b;

    let ans = parseInt(a) + parseInt(b);
    res.json(ans)
})


app.listen(4000)

// expres is a chain of Middleware