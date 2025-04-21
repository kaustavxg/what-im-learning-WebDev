function random(resolve) {
    // resolve();
}

// this is creating PROMISE
let p =  new Promise(random); // supposed to return u something eventually




//  using the eventual value returned by promise
// this person is using the PROMISE
function callback() {
    console.log("promises succeded");
}

p.then(callback);