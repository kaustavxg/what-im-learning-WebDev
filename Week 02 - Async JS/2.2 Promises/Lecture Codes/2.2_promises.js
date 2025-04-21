// // for more understand check out [04.2_promises - image]

// function random(resolve) {
//     setTimeout(resolve, 4000);
// }

// let p = new Promise(random); // supposed to return you something eventually on completion


// //using the eventual value returned by the promise
// function callback() {
//     console.log("promise succeded");
// }
// p.then(callback); // this will be called when the promise is resolved



function waitFor3S(resolve) {
    console.log(resolve);
    setTimeout(resolve, 3000)
}

// console.log("after 3 seconds, calls resolve ")

function main() {
    console.log("main is called after 3 seconds")
}

waitFor3S(main);
