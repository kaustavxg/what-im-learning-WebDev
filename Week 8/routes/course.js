const { Router } = require('express');
const courseRouter = Router();

// purchase a course
courseRouter.post('/purchase', function(req, res){    
    res.json({
        message: "you have bought the course"
    })
})

// view all courses
courseRouter.get('/preview', function(req, res){
    res.json({
        message: "you are viewing all the course"
    })
})

module.exports = {
    courseRouter: courseRouter
}