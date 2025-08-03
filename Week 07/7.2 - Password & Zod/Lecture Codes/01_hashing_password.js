const bcrypt = require('bcrypt');

//! callback based approach
bcrypt.genSalt(saltRounds, function(err, salt){
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash){
        // store hash in your password
    })
})

//! promise based approach -> auto gen a salt and hash
bcrypt.hash(myPlainTextPassword, saltRounds, function(err, hash){
    // store hash in your password DB
})