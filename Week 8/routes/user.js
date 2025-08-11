const {Router} = require('express');

const userRouter = Router(); // this is a function
// router?
// routing the request to the right place
// handle incoming request

userRouter.post('/signup', function(req, res){   
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post('/signin', function(req, res){
    res.json({
        message: "signin endpoint"
    })
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