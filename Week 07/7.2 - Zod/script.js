const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ilovemomo@100x"
const mongoose = require('mongoose');
const { UserModel } = require('./database');

mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/todo-kaustav")

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        await UserModel.create({
       email: email,
        password: password,
        name: name
        })

        res.json({
            message: "signed up successfully!!!"
        })

    } catch(error){
        res.status(404).json({
            error: `Error in sign up: ${error}`
        })
    }
})

app.post('/signin', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    
    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id,
            email: user.email,
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Invalid credentials"
        })
    }

})

function auth(req, res, next){

    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        req.email = decodedData.email;
        next();
    } else {
        res.status(404).json({

        })
    }

}

app.post('/todo', auth, function(req, res){
    const userId = req.userId
    const email = req.email
    res.json({
        userId: userId,
        email: email
    })
})

app.post('/todos', auth, function(req, res){
    const userId = req.userId
    res.json({
        userId: userId
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})

``