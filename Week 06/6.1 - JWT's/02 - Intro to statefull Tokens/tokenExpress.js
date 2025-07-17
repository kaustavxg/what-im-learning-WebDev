/*
! ===============================================
! USER LOGIN/SIGNUP SYSTEM WITH TOKEN
! ===============================================
! 
! Ye code kya karta hai:
! - Naye user ka account banata hai
! - User ko login karwata hai aur token deta hai
! - Token check karke user ki details batata hai
! - Sab data memory mein store karta hai
! 
! Routes:
! POST /signup - Naya account banao
! POST /signin - Login karo, token pao
! GET /me - Apni details dekho (token chahiye)
! 
! ===============================================
*/

//# source: https://petal-estimate-4e9.notion.site/Creating-an-express-app-a01ad6db6d544d2b84fd1ff5bd057abe

const express = require('express');
const app = express();

app.use(express.json());

let users = [] // Yahan sab users store honge

// Token banane ka simple tarika - current time use karte hain

function generateToken(){
    return parseInt(Date.now().toString() + Math.random() * 10000);
}

//! =====================================================
//! SIGNUP - NAYA ACCOUNT BANAO (NEW USER AUTHENTICATION)
//! =====================================================
/*
Kya karta hai:
1. Username aur password leta hai
2. Check karta hai ki username pehle se hai ya nahi
3. Password kam se kam 5 character ka hona chahiye
4. User ko array mein add kar deta hai
5. Success message bhej deta hai
*/
app.post('/signup', function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    //! Dekho ki ye username pehle se hai ya nahi
    const duplicate = users.find(u => u.username === username)
    if(duplicate){
        res.status(400).json({
            msg: "username already exists!"
        })
        return;
    }

    //! Password ki length check karo
    if(password.length < 5){
        res.status(400).json({
            msg: "password is too small"
        })
        return;
    }

    users.push({
        username,
        password
    })

    res.json({
        msg: `You have signed up with username: "${username}" and password: "${password}"`
    })

    console.log(users);
})

//! ======================================================
//! SIGNIN - LOGIN KARO AUR TOKEN PAO (USER AUTHENTICATION)
//! ======================================================
/*
Kya karta hai:
1. Username aur password leta hai
2. Users list mein dhundta hai ki ye user hai ya nahi
3. Agar user mila: token banake user ke saath store karta hai
4. Agar nahi mila: error message bhej deta hai
*/
app.post('/signin', function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    //! Sahi username aur password wala user dhundo
    const user = users.find(function(u){
        if(u.username === username && u.password === password){
            return true;
        } else {
            return false;
        }
    })

    if(user){
        const token = generateToken();
        user.token = token; //! User ke saath token store kar do
        res.json({
            token: token
        })
    } else {
        res.status(409).json({
            msg: "Invalid username or password"
        })
    }
})

//! ===============================================
//! TOKEN CHECK KARKE USER KI DETAILS BATAO
//! ===============================================
/*
Kya karta hai:
1. Header se token leta hai
2. Token ke through user dhundta hai
3. Agar user mila: uski details bhej deta hai
4. Agar nahi mila: invalid token error deta hai
*/

//! This is an authenticated EP
// create an endpoint (/me ) that returns the user their information `only if they send their`

app.get('/me', function(req, res){
    const token = req.headers.token;
    const foundUser = users.find(u => u.token === token);

    if(foundUser){
        res.json({
            username: foundUser.username, //! SAHI: foundUser.username
            password: foundUser.password  //! SAHI: foundUser.password
        })
    } else {
        res.status(400).json({
            msg: "token invalid"
        })
    }
})

app.listen(8080);