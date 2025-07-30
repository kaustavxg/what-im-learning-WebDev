const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const JWT_SECRET = "ilovemomo@100x"
const mongoose = require('mongoose');
const { z } = require('zod')

const { UserModel, TodoModel } = require('./db');

mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/new-todo-zod")

const app = express();
app.use(express.json());

app.post('/signup', async function(req, res){

    //# ZOD
    const requiredBody = z.object({
        email: z.string().min(3).max(100),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100)
    })

    //# const parseData = requiredBody.parse(req.body);
    // ============ OR ============
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        res.status(403).json({
            error: "Incorrect format!",
            issues: parsedDataWithSuccess.error.errors
        });
        return; // important to stop further execution
    }


    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    // password -> string, 5 -> salt round
    console.log(`Hashed password: ${hashedPassword}`);
    
    try {
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
        res.json({
        message: "sign ed up successfully!!!"
        }) 
    } catch (error){
        console.log(`Error in signing up: ${error}`); 
    }
})

app.post('/signin', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    
    const response = await UserModel.findOne({
        email: email
    })

    if(!response) {
        res.status(403).json({
            error: "user does not exist in database"
        })
        return;
    }

    const password_match = await bcrypt.compare(password, response.password)

    if(password_match){
        const token = jwt.sign({
            id: response._id.toString(),
            email: response.email, // added email as well -> just for fun
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

    console.log(`User ID: ${userId}`);
    console.log(`Email: ${email}`);
})

app.post('/todos', auth, function(req, res){
    const userId = req.userId
    res.json({
        userId: userId
    })
})

app.listen(3030, () => {
    console.log("listening on port 3030");
})

