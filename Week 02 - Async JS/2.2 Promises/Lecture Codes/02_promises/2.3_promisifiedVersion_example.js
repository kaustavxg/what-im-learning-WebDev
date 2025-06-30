const fs = require("fs")

console.log(" ---------------- top of the file ------------------");


function readFile(resolve){
    setTimeout(() => {
        console.log("callback based settimeout is called");
        resolve();
    }, 10000)

}

function setTimeoutPromisified(fileName){
    console.log("calling the new promise here");
    return new Promise(readFile);
}

let  p = setTimeoutPromisified();

function callback(){
    console.log("--------------------------------------");
    
    console.log("promise user function is called");
}

p.then(callback);

console.log("-------------------- end of the file -------------------");



// you can define a function 
/*

    1.  function name(params) {
        
    }

------------------ OR ---------------------------    

    2. () => {
        
        }

*/