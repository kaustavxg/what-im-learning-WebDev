/*

! ======== Generating a JWT ============
// bank creating a cheque book

*/
// const express = require('express');
const jwt = require('jsonwebtoken');


const value = {
    name: "kaustav",
    accountNumber: "123123123"
}

// JWT

const token = jwt.sign(value, "secret");
console.log(`token: ${token}`);


// this token has been generated using this secret and hence this token can only be verified using this secret