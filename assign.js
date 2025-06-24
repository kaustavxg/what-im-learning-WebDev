const fs = require("fs")

function readTheFile(sendFinalVal){
    fs.readFile("f.txt", "utf-8", function(err, data){
        sendFinalVal(data);
    })
    
}

function readFile(fileName){
    return new Promise(readTheFile)
}


let p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);

