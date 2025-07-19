const express = require('express');
const app = express();

// helps me parse the js content into json 
app.use(express.json());

// function that returns a boolean if a person is more than age of 14


//! ================== MIDDLEWARE APPROACH ==================
// Ye function check karta hai ki user 14+ hai ya nahi
// Agar hai toh next() call karta hai, nahi toh error message send karta hai
function isOldEnough(req, res, next){
    const age = req.query.age;
    
    if(age >= 14){
        next(); // User ko next middleware/route handler pe bhej do
    } else {
        res.json({
            msg: "Sorry: you are under age"
        })
    }
}

// Ride 1 route - middleware check ke saath
app.get('/ride1', isOldEnough, function(req, res){
    res.json({
        msg: "you have successfully riden ride 1"
    })
})

// Ride 2 route - same middleware reuse kar rahe hain
app.get('/ride2', isOldEnough, function(req, res){
    res.json({
        msg: "you have successfully riden ride 2"
    })
})

app.listen(3000);

//! ================ GLOBAL MIDDLEWARE APPROACH =========
// Agar sabhi routes mein same middleware use karna hai toh ye method use karo
//# ```````` app.use(isOldEnough) ```````````;

// Fir routes mein middleware function name nahi likhna padega
/*
app.get('/ride1', function(req, res){
    res.json({
        msg: "you have successfully riden ride 1"
    })
})

// ```````` app.use(isOldEnough) ```````````; 
// agar mein yaha likhu app.use(<middleware>) toh bs niche walo mein use higa na ki upar walo mein

app.get('/ride2', function(req, res){
    res.json({
        msg: "you have successfully riden ride 2"
    })
})

app.get('/ride3', function(req, res){
    res.json({
        msg: "you have successfully riden ride 3"
    })
})
*/


//! ================ WITHOUT MIDDLEWARE APPROACH (AVOID THIS) =========
//# Ye dekho ki middleware use na karne se kitna repetitive code hota hai

/*
// --------- basically a ticket checker -------------

function isOldEnough(age){
    if(age > 14){
        return true;
    } else {
        return false;
    }
}

------------------------------------------------------
app.get('/ride1',function(req, res){
    if(isOldEnough(req.query.age)){
         res.json({
            msg: "you have successfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are under age!"
        })
    }
})

app.get('/ride2',function(req, res){
    if(isOldEnough(req.query.age)){
         res.json({
            msg: "you have successfully riden the ride 2"
        })
    } else {
        res.status(411).json({
            msg: "Sorry you are under age!"
        })
    }
})
*/

/* 
!=============== MIDDLEWARE KYA HOTA HAI? ===============
- Middleware ek function hai jo request aur response ke beech mein run hota hai
- Ye request ko 
#    1. modify kar sakta hai, 
#    2. response bhej sakta hai, 
#    3. next middleware ko call kar sakta hai
- next() function current middleware se next middleware/route handler pe control pass karta hai

FAYDE:
1. Code reusability - Same logic multiple routes mein use kar sakte hain
2. Clean code - Repetitive checks avoid ho jaate hain
3. Modularity - Alag alag concerns ko separate kar sakte hain

EXAMPLE USAGE:
- GET /ride1?age=15 → Success message
- GET /ride1?age=12 → Under age error
*/