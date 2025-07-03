const express = require('express');
const app = express();
app.use(express.json());

function isOldEnough(age){
    if( age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

app.get('/ride1', function(req, res){
   if(isOldEnough(req.query.age)) {
    res.json({
        msg: "you have successfully riden the ride 1"
    })
   } else {
    res.status(411).json({
        msg: "you are under age"
    })
   }
})

app.listen(3000);