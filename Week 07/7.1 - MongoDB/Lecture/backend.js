const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} = require("./database")

const jwt = require('jsonwebtoken');
const JWT_SECRET = "kaustav@100xdev"

mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/todo-kaustav") 
//# this is also an async function
// how can you put async await on this??

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({ // why need await?
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "you are logged in"
    })
})

app.post('/signin', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);
    
    if(user){
        console.log(user._id.toString());
        
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Incorrect credentials"
        })
    }
})

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            error: "Incorrect credentials"
        })
    }
}

app.post('/todo', auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
})

app.get('/todos', auth, function(req, res){
    const userId = req.userId;

    res.json({
        userId: userId
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})