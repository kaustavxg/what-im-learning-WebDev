const express = require('express');

//! Secret key jo JWT token sign karne ke liye use hoti hai
const JWT_SECRET = "randomkavu@sharvaaro"

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

//! Ye ek local in-memory array hai jisme ham users store kar rahe hain
let users = [];

/*
  ! SIGN-UP API
  - New user ka username aur password accept karta hai
  - Duplicate username check karta hai
  - Agar sab sahi ho toh users array mein store karta hai
*/
app.post('/signup', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // Check karo ki username already exist karta hai ya nahi
    const duplicate = users.find(u => u.username === username);
    if(duplicate){
        res.status(400).json({
            error: "username already exist!"
        });
        return; // return daalna zaroori hai warna neeche ka code bhi chalega
    }

    // Password ka length check karo
    if(password.length < 5) {
        res.status(400).json({
            error: "password is too small!"
        });
        return;
    }

    // Agar sab sahi ho toh user ko users list mein daal do
    users.push({
        username,
        password
    });

    res.json({
        msg: `you have signed-up successfully with username: ${username}, password: ${password}`
    });
});


/*
  ! SIGN-IN API username,
  - username + password verify karta hai
  - agar user mil gaya toh JWT token generate karta hai
*/
app.post('/signin', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // Check karo ki user exist karta hai ya nahi
    const user = users.find(function(u){
        return u.username === username && u.password === password;
    });

    if(user){
        
        //! JWT token generate kar rahe hain
        const token = jwt.sign({
            username: username   // payload: kya encode karna hai
        }, JWT_SECRET);         // secret: kis key se sign kar rahe ho

        /*
          🔑 jwt.sign(payload, secret)
          - payload = woh info jo token mein store karni hai
          - secret = private key jis se token sign kiya jaega (verify bhi issi se hoga)
          - token automatically expire nahi hota unless aap manually "expiresIn" add karo
        */

        // ✅ token bhej do response mein
        res.json({
            token: token
        });

    } else {
        res.status(400).json({
            error: "Invalid username or password"
        });
    }
});


/*
  ! /me API
  - front-end se JWT token milega header ke through
  - us token ko decode (verify) karenge
  - decode karke username nikaalenge
  - fir username ke basis pe user dhoondhenge
*/
app.get('/me', function(req, res){
    const token = req.headers.token;  // client header mein "token" bhejta hai

    try {
        // JWT token verify karo (matlab check karo ki valid hai ya nahi)
        const decodedInformation = jwt.verify(token, JWT_SECRET);

        // token ke andar se username nikaal lo
        const username = decodedInformation.username;

        // users array mein se user object find karo
        const foundUser = users.find(u => u.username === username);

        if(foundUser){
            res.json({
                username: foundUser.username,
                password: foundUser.password
            });
        } else {
            res.status(400).json({
                error: "Invalid token!"
            });
        }

    } catch (err) {
        // Agar token galat hai ya expired hai toh yeh chalega
        res.status(401).json({
            error: "Token verification failed!"
        });
    }
});


//! Server ko port 3000 pe start kar do
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});


/*
Revision Note:

- JWT ek *stateless authentication* ka tarika hai.
- User jab login karta hai toh ek token milta hai.
- Server ko token ke basis pe pata chal jaata hai ki kaunse user ka request hai.
- Server mein session ya user ki login state store karne ki zarurat nahi hoti.

Useful methods:
  - jwt.sign(payload, secret) ➜ token banata hai
  - jwt.verify(token, secret) ➜ token ko decode karta hai aur verify bhi

Token ko kabhi bhi database mein mat store karo (unless for logout invalidation use case)
Real-world apps mein passwords ko hash karna chahiye using bcrypt or similar libraries.

*/

