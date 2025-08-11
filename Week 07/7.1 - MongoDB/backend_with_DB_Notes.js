/*
=================================================
!Inttroducing intergration of backend with MongoDB
=================================================
Topics Covered:
- Express.js Server Setup
- MongoDB Connection with Mongoose
- User Authentication (Signup/Signin)
- JWT Token Generation & Verification
- Middleware for Route Protection
- RESTful API Endpoints
==========================================
*/

const express = require('express');
const mongoose = require('mongoose');
const {UserModel, TodoModel} =  require("./database") // Database models import kar rahe hain
// TodoModel abhi directly use nahi ho raha, but baad mein userId ke through todos fetch karenge

const jwt = require('jsonwebtoken');
const JWT_SECRET = "kaustav@100xdev" // JWT ke liye secret key - real world mein environment variable mein rakhte hain

/*
! MONGODB CONNECTION
Real-world analogy: Jaise aap apne ghar ka gate khol ke andar jaate ho,
waise hi database ka connection establish kar rahe hain
*/
mongoose.connect("mongodb+srv://kaustav23:1Y6cdcZ078aaK5bI@cluster0.vuiiw4w.mongodb.net/todo-kaustav") 
//? need of mongoose.connect???
/*
# mongoose.connect() ka need kyu?
- Database se connection banane ke liye zaruri hai
- Bina connection ke data read/write nahi kar sakte
- Real-world example: Phone call karne se pehle network connection chahiye na

# "todo-kaustav" kya karta hai URL ke end mein?
- Agar "todo-kaustav" naam ka database exist karta hai to usse connect ho jayega
- Agar nahi exist karta to naya database create kar dega
- Example: Agar aapke paas "MyShop" naam ka folder nahi hai to create ho jayega
*/

const app = express();
app.use(express.json()); // JSON data ko parse karne ke liye - jaise translator ka kaam

/*
! USER SIGNUP ENDPOINT
Real-world analogy: Kisi shop mein membership card banwana
*/
app.post('/signup', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    /*
    ! DATABASE MEIN USER CREATE KARNA
    - UserModel.create() ek async function hai (time lagta hai)
    - Database operation always promise return karta hai
    - await lagana zaroori hai, warna code aage badh jayega without waiting
    - Real-world example: Bank mein form submit karne ke baad receipt ka wait karna
    */
    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "you are logged in"
    })
})

/*
! USER SIGNIN ENDPOINT  
Real-world analogy: Shop mein apna membership card dikhana
*/
app.post('/signin', async function(req, res){

    const email = req.body.email;
    const password = req.body.password;

     /*
    # DATABASE MEIN USER DHUNDNA
    ? find() vs findOne() ka difference:
    - find(): Array return karta hai (multiple results possible)
    - findOne(): Single object return karta hai ya null
    - Example: Phone book mein "Sharma" search karne se multiple results (find)
              vs specific "Kaustav Sharma" search karne se ek result (findOne)
    */
    const user = await UserModel.findOne({ //# difference between find and findOne
        email: email,
        password: password
    })

    console.log(user);
    
    if(user){
         /*
        # USER ID KO STRING MEIN CONVERT KARNA
        ? toString() ka need kyu ?????
        - MongoDB ka _id ObjectId type ka hota hai, simple string nahi
        - JWT mein sirf string/number store kar sakte hain
        */
        console.log(user._id.toString());
        
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(404).json({
            error: "Incorrect credentials"
        })
    }


})

function auth(req, res, next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else {
        res.status(403).json({
            error: "Incorrect credentials"
        })
    }
}

/*
! CREATE TODO ENDPOINT
Real-world analogy: Diary mein nayi entry likhna (but pehle identity proof dikhana)
- 'auth' middleware pehle chalega (security check)
- Uske baad ye function chalega
*/
app.post('/todo', auth ,function(req, res){
     /*
    # PROTECTED ROUTE
    - Yahan tak sirf authenticated users hi pahunch sakte hain
    - req.userId auth middleware se mil gaya hai
    - Ab is userId se todos create kar sakte hain
    */
    const userId = req.userId;

    // Abhi sirf userId return kar rahe hain (testing ke liye)
    // Actual mein TodoModel.create() karna hoga
    res.json({
        userId: userId
    })
})

// needs authentication
app.get('/todos', auth ,function(req, res){
    // req.userId
    const userId = req.userId;

    res.json({
        userId: userId
    })
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})


/*
!=================================
  ADDITIONAL CONCEPTS TO REMEMBER
!=================================
# 1.  Async/Await Pattern:
   - Database operations time lete hain
   - await lagana zaroori hai warna undefined mil jayega

# 2.  JWT Working:
   - Signup/Signin ke time token generate hota hai
   - Har protected request mein token send karna padta hai
   - Server side token verify karta hai

# 3.  Middleware Chain:
   - Express mein functions ka sequence
   - auth → actual route handler
   - next() call karna zaroori hai

# 4.  Status Codes:
   - 200: Success
   - 404: Not Found
   - 403: Forbidden (authentication failed)

# 5.  Security Best Practices:
   - JWT_SECRET environment variable mein rakhna
   - Password hashing karna (bcrypt use karke)
   - Input validation karna

# 6. Next Steps:
   - TodoModel operations implement karna
   - Error handling improve karna
   - Input validation add karna
   - Password hashing add karna
*/