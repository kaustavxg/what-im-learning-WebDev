// // this is a callback function
// // function main() {
// //     console.log("kaustav is logged after 5 sec")
// // }

// // setTimeout(main, 5000);


// // A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// // returns an object of the promise classf
function setTimeoutPromisified(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
  }
  
//   function callback() {
//       console.log("5 seconds have passed");
//   }
  
//   setTimeoutPromisified(5000).then(callback)


function afterDone() {
    console.log("5 seconds have passed");
}

setTimeoutPromisified(5000).then(afterDone) // syntatically cleaner