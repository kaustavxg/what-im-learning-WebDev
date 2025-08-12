const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db")

adminRouter.post('/signup', function(req, res){ 

    res.json({
        message: "admin signup endpoint"
    })

})

adminRouter.post('/signin', function(req, res){

    res.json({
        message: "admin signin endpoint"
    })

})

adminRouter.post('/course', function(req, res){

    res.json({
        message: "adding a new course from admin panel"
    })

})

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