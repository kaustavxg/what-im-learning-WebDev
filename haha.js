const fs = require("fs")

function print(err, data){
    // console.log("error is: ", err);
    // console.log("data is: ", data);
    
    // console.log(data);
     
    if(err){
        console.log("file not found");
        
    }
    else{
        console.log(data);
        
    }

    console.log("typeof err is: ", typeof err);
    
}

fs.readFile("g.txt", "utf-8", print); 

console.log("printing is done");


// why we are not calling -> print()
/*

check doOperation, were we calling add, minus? No
we were passing the name of the function 

same we are doing here -> we are passing the name of the function signature 

*/

// ======== IF WE WRITE THE SAME CODE WITH SYNC =================

// fs.readFileSync("g.txt", "utf-8", print); 

// only printing is done will get printed as in sync -> it does not expect a 3rd arugment, you can add as many arguments like
// fs.readFileSync("g.txt", "utf-8", print, cb, xyz); -> but this will ignore all the arguments after first two 
// 

// console.log("printing is done ");

function cb(err, data){
    if(err){
        console.log("file not found");
    }
    else{
        console.log("data");
        
    }
}