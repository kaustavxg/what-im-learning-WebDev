//! Replace token logic with JWT

const express = require('express');
const jwt = require('jsonwebtoken')

const JWT_SECRET = "random@melovingsharvari"


const app = express();

app.use(express.json());

const users = [];

// now this users have
// [
//  username: kaustav
//  password: 123456789
//  token: 1752459190067
// ]

function generateToken(){ // generate a random string as Token
    return Date.now().toString();
}


app.post('/signup', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const duplicate = users.find(u => u.username === username);
    if(duplicate){
        res.status(400).json({
            error: "username already exist"
        })
        return;
    }

    if(username.length < 5) {
        res.status(400).json({
            error: "username is very small"
        })
        return;
    }

    if(password.length < 8){
        res.status(400).json({
            error: "Need minimum 8 characters"
        })
        return;
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: "you have signed up!"
    })

    console.log(users);
    console.log("=================================");

    
})


app.post('/signin', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u){
        if(u.username === username && u.password === password) {
            return true;
        } else {
            return false;
        }
    })

    if(user){
        const token = jwt.sign({
            username: username //! convereted the username into token using my JWT_SECRET
        }, JWT_SECRET)

        /*

        !this is the function signature of jwt.sign
        it takes two arguments
        #   1.
            what do you want to encode, decrypt ...
        #   2.
            what is your secret using to sign your token to encode, encyrpt the token

        ? do we need to store this JWT token in memory? No
        #  because this is a stateless token, this token itslef stores its state, we dont need to store in DB

        */


        // user.token = token;
        res.json({
            msg: token
        })
    } else {
        res.status(409).json({
            error: "Invalid username or password"
        })
    } 
    console.log("=================================");
    console.log(users);
    console.log("=================================");
    
    
})

//# they will send me thier token aloon with thier headers
app.get('/me', function(req, res){
    const token = req.headers.token; //! jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username


    const foundUser = users.find(u => u.username === username)

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.status(409).json({
            error: "token invalid"
        })
    }
})


app.listen(3000);