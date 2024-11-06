const fs = require("fs")

console.log("-------top of the file------")

function readTheFile(resolve) {
    console.log("readTheFile called")
    setTimeout(function() {
        console.log("callback based setTimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisified(fileName) {
    // read the file and returns it's value
    console.log("setTimeoutPromisifed cancelled ")
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback() {
    console.log("timer is done ")
}

p.then(callback)

console.log("-------end of the file------")
