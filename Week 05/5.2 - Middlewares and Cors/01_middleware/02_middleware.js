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

// more cleaner way
// ki all the handlers after app.use, use requestIncreaser middleware
// dhikne mein acha lagta hai

app.use(requestIncreaser)

// better routing, add database, middleware
app.get('/sum' ,yahaPeSumHoga)

app.get('/multipy',yahaPeSumHoga)

app.get('/admin', function(req, res){
    res.json({
        message: `Total number of counts till now = ${count}`
    })
})

app.listen(3000);