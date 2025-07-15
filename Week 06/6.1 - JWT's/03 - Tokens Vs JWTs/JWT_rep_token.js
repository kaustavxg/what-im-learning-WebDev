//# source: https://petal-estimate-4e9.notion.site/Replace-token-logic-with-jwt-b980661c0604499cbd47066ca3d5edaa

const express = require('express');

//!
const JWT_SECRET = "randomkavu@sharvaaro"

const jwt = require('jsonwebtoken');


const app = express();

app.use(express.json());

let users = [];


app.post('/signup', function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    const duplicate = users.find(u => u.username === username)
    if(duplicate){
        res.status(400).json({
            error: "username already exist!"
        })
    }

    if(password.length < 5) {
        res.status(400).json({
            error: "password is too small!"
        })
    }

    users.push({
        username,
        password
    })

    res.json({
        msg: `you have signed-up successfully with username: ${username}, password: ${password}`
    })
})

app.post('/signin', function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
        if(u.username === username && u.password === password){
            return true;
        } else {
            return false;
        }
    })

    if(user){
        // const token = generateToken();

        //! .sign()
        // converted this usrname to a token using JWT_SECRET
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        /*
        # jwt.sign() takes two arguments
        1. what do you want to encode, encrypt
        2. what is your secret to sign this token
        */

        // user.token = token; //!No need of this anymore, our token is stateless
        res.json({
            token: token
        })
    } else {
        res.status(400).json({
            error: "Invalid username or password"
        })
    }
})

app.get('/me', function(req, res){
    const token = req.headers.token; //! it will send a JWT token now
    //# how do you know if this user in global variable?
    const decodedInformation = jwt.verify(token, JWT_SECRET); //{kaustav@gmail.com}

    // here  //# jwt => username
    // decoding our token

    const username = decodedInformation.username;



    const foundUser = users.find(u => u.username === username) // need to hit the DB to get the password

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(400).json({
            error: "Invalid token!"
        })
    }
})

app.listen(3000);

/*

while using JWT's, there is no need of using generateToken() anymore

i can use jsonwebtoken library which will generate tokens for me

*/