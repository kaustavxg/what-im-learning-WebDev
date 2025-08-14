const {Router} = require('express');
const userRouter = Router(); 
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require("../db")

userRouter.post('/signup', async function(req, res){ 

    const requireBody = z.object({
            email: z.string().min(3).max(100),
            password: z.string().min(3).max(100),
            firstName: z.string().min(3).max(100),
            lastName: z.string().min(3).max(100)
        })
    
        // parse the Zod Data
        const parseDataWithSuccess = requireBody.safeParse(req.body);
        if(!parseDataWithSuccess.success){
            res.status(404).json({
                error: "Incorrect format"
            })
        }
    
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(`Hashed Password: ${hashedPassword}`);

    try{
        await userModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
        res.json({
            message: "admin signup endpoint"
        })
    } catch(error){
        console.log(`Error in signing up: ${error}`);
    }


})

userRouter.post('/signin', async function(req, res){
   
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email: email
    })

    if(!response){
        res.status(400).json({
            error: "user does not exist"
        })
    }

    const passwordMatch = await bcrypt.compare(password, response.password)

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString()
        }, process.env.JWT_USER_PASSWORD)


        // cookie / session based authentication if want to add 

        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Invalid credentials"
        })
    }
})

// view purchased course
userRouter.get('/purchases', function(req, res){
        res.json({
            message:"viewing my purchase"
        })
})

module.exports = {
    userRouter: userRouter
}