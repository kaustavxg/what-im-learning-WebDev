const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require("../db")
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post('/signup', async function(req, res){ 

    //zod
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
        await adminModel.create({
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

adminRouter.post('/signin', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;

    const response = await adminModel.findOne({ // either the use or undefined
        email: email
    })

    if(!response){
        res.status(400).json({
            error: "user does not exist"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: response._id.toString()
        }, process.env.JWT_ADMIN_PASSWORD)
        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Invalid credentials"
        })
    }
})

adminRouter.post('/course', adminMiddleware ,async function(req, res){

    const adminId = req.userId;

    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    // creating a web3 saas in 6 hours
    await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })

    res.json({
        message: "adding a new course from admin panel",
        courseId: courseModel._id
    })

})

// edit the course admin has created
adminRouter.put('/course/price', function(req, res){

    res.json({
        message: "price of the course updated - admin"
    })

})

adminRouter.get('course/bulk', function(req, res){

    res.json({
        message: "view all the course from admin panel"
    })
    
})

module.exports = {
    adminRouter: adminRouter
}