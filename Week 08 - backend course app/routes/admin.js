// Third-party dependencies
const { Router } = require('express');
// We are using JavaScript destructuring to get Router from Express
// Express is a big library with many functions like express.json(), express.Router(), etc.
// Normally, to create a router, we would write ``` express.Router() ``` every time
//# By doing `const { Router } = require('express')`, we can now just call Router()
// This makes the code cleaner and easier to read, especially when creating multiple route files

const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Internal modules
const { adminModel, courseModel } = require("../db");

// middleware
const { adminMiddleware } = require("../middleware/admin");

// Initialize router
const adminRouter = Router();

// Other
const course = require('./course');

// Route for admin signup
adminRouter.post('/signup', async function(req, res){ 
    
    // zod
    const requireBody = z.object({
        email: z.string().min(3).max(100),
        password: z.string().min(3).max(100),
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100)
    })

    // Validate the request body against the defined schema.
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    if(!parseDataWithSuccess.success){
        // If validation fails, send a 404 Not Found status with an error message.
        res.status(404).json({
            error: "Incorrect format"
        })
        return; // Important: return to prevent further execution after sending the response.
    }

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    // Hash the plain-text password before storing it for security.
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(`Hashed Password: ${hashedPassword}`);

    try{
        // Attempt to create a new admin user in the database.
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

// Route for admin signin
adminRouter.post('/signin', async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    // Find the admin user by email.
    const response = await adminModel.findOne({ // either the use or undefined
        email: email
    })

    if(!response){
        // If no user is found with the given email, send a 400 Bad Request error.
        res.status(400).json({
            error: "user does not exist"
        })
        return; // Return to prevent further execution.
    }

    // Compare the plain-text password with the stored hashed password.
    const passwordMatch = await bcrypt.compare(password, response.password);

    if(passwordMatch){
        // If passwords match, create a JWT token containing the user's ID.
        const token = jwt.sign({
            id: response._id.toString()
        }, process.env.JWT_ADMIN_PASSWORD)
        // Send the token back to the client for future authentication.
        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Invalid credentials"
        })
    }
})

// Route for an admin to create a new course.
// This route is protected by the 'adminMiddleware'.
adminRouter.post('/course', adminMiddleware ,async function(req, res){
    // The user ID is added to the request object by the adminMiddleware.
    const adminId = req.userId;

    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;

    // Create a new course document in the database with the admin's ID as the creator.
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

// Route for an admin to update an existing course.
// This route is protected by the 'adminMiddleware'.
adminRouter.put('/course/price', adminMiddleware ,async function(req, res){
    // The admin ID is added to the request object by the adminMiddleware.
    const adminId = req.userId;

    const {title, description, imageUrl, price, courseId} = req.body;

    // Find and update a course only if its ID and creatorId match the request.
    const course = await courseModel.updateOne({
        _id: courseId, //# update the course jaha pe course id ye hai
        creatorId: adminId //# or is particular admin(creator) ka course hai vahi update kar skta hai
        //! only update the course where both of the conditions are fulfilled
    }
    ,{
        // Set the new values for the course fields.
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        message: "course updated",
        courseId: course._id
    })
})

// Route to view all courses.
adminRouter.get('/course/bulk', async function(req, res){
    // Retrieve all course documents from the database.
    const allCourses = await courseModel.find({});

    // Send the list of all courses in the response.
    res.json({
        allCourses
    })
})

// Export the admin router to be used in the main application file.
module.exports = {
    adminRouter: adminRouter
}