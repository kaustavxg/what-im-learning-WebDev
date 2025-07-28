const bcrypt = require('bcrypt');

const plainPassword = "kaustav@23";

const password2 = "mohini@mangal"

const saltRounds = 10;

const merehaha = 10

bcrypt.hash(plainPassword, merehaha, function(err, hash){
    if(err){
        console.log(`error hashing password: ${err}`);
    } else {
        console.log(`Hashed password of kaustav: ${hash}`);
    }
})

console.log("===============================================");

bcrypt.hash(password2, saltRounds, function(err, hash){
    if(err){
        console.log(`error in hashed password: ${err}`);
    } else {
        console.log(`Hashed password of mohini: ${hash}`);
    }
})