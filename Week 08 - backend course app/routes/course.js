const { Router } = require('express');
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require('../db');

// This route is for a user to purchase a specific course.
courseRouter.post('/purchase', userMiddleware, async function(req, res){   
    // In a real-world scenario, you would integrate a payment gateway here
    // to handle the transaction and verify the payment before proceeding.

    // Get the user ID from the middleware and the course ID from the request body.
    const userId = req.userId;
    const courseId = req.body.courseId; // NOTE: The courseId should come from the request body, not a non-existent req.courseId.

    // Check if the user has already purchased this course to prevent duplicates.
    const existingPurchase = await purchaseModel.findOne({ userId, courseId });
    if (existingPurchase) {
        return res.status(409).json({ message: "You have already purchased this course." });
    }

    try {
        // Create a new purchase record in the database.
        const purchase = await purchaseModel.create({
            userId,
            courseId
        });
    
        res.json({
            message: "You have successfully bought the course",
            purchaseId: purchase._id // Return the ID of the new purchase record.
        });
    } catch (error) {
        console.error(`Error purchasing course: ${error}`);
        res.status(500).json({ message: "An error occurred during the purchase process." });
    }
});

// This route allows anyone (or authenticated users) to see all available courses.
courseRouter.get('/preview', async function(req, res){
    try {
        // Find all courses in the database.
        const allCourses = await courseModel.find({});

        res.json({
            courses: allCourses
        });
    } catch (error) {
        console.error(`Error fetching courses: ${error}`);
        res.status(500).json({ message: "An error occurred while fetching courses." });
    }
});

module.exports = {
    courseRouter: courseRouter
}