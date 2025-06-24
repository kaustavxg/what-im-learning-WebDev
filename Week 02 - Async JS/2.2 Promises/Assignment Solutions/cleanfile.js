const fs = require("fs");

function readThefile(sendTheFinalValue){
    fs.readFile("a.txt", "utf-8", function(err, data){
        sendTheFinalValue(data);
    })
}

function readFile(fileName){
    // read the file and return its value
    return new Promise(readThefile);
}

let p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);