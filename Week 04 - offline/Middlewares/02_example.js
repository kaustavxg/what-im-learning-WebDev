
const express = require('express');
const app = express();

const requestTime = function(req, res, next){
    console.log("Inside requestTime function");
    
    req.requestTime = new Date().toISOString()
    next();
}

app.use(requestTime);

app.get('/time', function(req, res){
    let responseText = req.requestTime;
    let myText = `Current time is ${responseText}`;
    res.send(myText);
})

app.listen(3001);
// service which can be used in multiple situations  