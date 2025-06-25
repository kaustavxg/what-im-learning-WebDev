const fs = require("fs");

function readFile(filePath){
    return new Promise(function(resolve, reject){
            fs.readFile(filePath, "utf-8", function(err, data){
                if(err){
                    reject("ERROR: file not found");
                } else{
                    resolve(data);
                }
            })
        })
    }

function onDone(data){
    console.log(data);
}

function notDone(err){
    console.log(err);
}

readFile("Week 02 - Async JS/2.2 Promises/Assignment/a.txt")
.then(onDone)
.catch(notDone)
.finally(function(){
    console.log("task is completed");
    console.log("=======================================================");
    console.log(".finally() - resolve ho ya reject, mujhe fark nahi padta. Bas jab sab khatam ho jaye tab main chalta hun.");
    
});