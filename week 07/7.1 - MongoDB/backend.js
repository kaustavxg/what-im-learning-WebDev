const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} =  require("./database")
// isse ye mere mongo db tak phauch raha hai

const jwt = require('jsonwebtoken');
const JWT_SECRET = "kaustav@iam100xdevs"

mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/todo-kaustav")
const app = express();
app.use(express.json());


app.post('/signup', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // async function call -> it will return a promise 
    // good idea to await this promise
    await UserModel.create({
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
        const token = jwt.sign({
            id: user._id
        })
        res.json({
            token: token
        }, JWT_SECRET)
    } else {
        res.status(404).json({
            error: "Incorrect credentials"
        })
    }


})

// needs authentication
app.post('/login', function(req, res){

})

// needs authentication
app.get('/todo', function(req, res){

})

app.get('/', function(req, res){
    res.json(UserModel)
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})