// for more understand check out [04.2_promises]

function random(resolve) {
    setTimeout(resolve, 4000);
}

let p = new Promise(random); // supposed to return uou something eventually on completion



//using the eventual value returned by the promise
function callback() {
    console.log("promise succeded");
}
p.then(callback); // this will be called when the promise is resolved