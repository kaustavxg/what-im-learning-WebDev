const express = require('express');

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
        const token = generateToken();
        user.token = token;
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
    const token = req.headers.token;
    const foundUser = users.find(u => u.token === token)

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