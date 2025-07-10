// RESPONSE.JSON()


const express = require('express');
const app = express();

// in express, if you need to send JSON data.
// you need to parse the JSON data

app.use(express.json());

//! why we need to call .json()??
// bec .json is itself a function
/*

apan aise bhi bula skte hai ki
=> let middleware = express.json()

#.json??

let express = {
    json: function (req, res, next){

    

    }
}


// so inshort you are calling a function
// express ka json function

// when it is needed?
jaisa marzi data bhejo usko apan json mein convert kr denge

*/

app.post('/sum', function(req, res){
    const a = req.body.a;
    const b = req.body.b;

    let ans = parseInt(a) + parseInt(b);
    res.json(`answer = ${ans}`)
})


app.listen(8000);