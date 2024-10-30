const fs = require("fs")

function print(err, data) {
    if(err) {
        console.log("File not found")
    }
    else{
        console.log(data)
    }
}

fs.readFile("a.txt", "utf-8", print) //asynchronously

console.log("Done!")