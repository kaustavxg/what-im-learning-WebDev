

// function main() {

// }

// setTimeout(main , 3000) // CALLBACK THE MAIN FUNCTION

// // ===== PROMISES ======

// // promises are syntatically better way to write callbacks
// // syntatically better ? -> dhikne meina che lagte hai, syntax sundar hai

// // defining a promise is hard
// // using a promise is easy

// // A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 


// // assume this already exists
// // worry about how to use this

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => {
//         setInterval(resolve, ms);
//     })
// }

// function add(){
//     console.log("hahahahah");
// }


// setInterval(add, 1000) // you can say this is better -> debatable, sach bahar aa jayega when you reach call back hell

// setTimeoutPromisified(4000).then(add); // syntactically better
 
function waitFor3S(resolve){
    
    console.log("waitFor3S is called");

    setTimeout(resolve, 3000);
}

function main(){
    console.log("main is called after 3 seconds");
}

waitFor3S(main);

