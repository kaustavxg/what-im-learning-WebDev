// function setTimeoutPromisifed(duration) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// // setTimeout => promisified setTiemout
// function callback() {
//     console.log("1 second has passed");
// }

// setTimeoutPromisifed(1000).then(callback);

setTimeout(function() {
    console.log("hi");
    setTimeout(function () {
        console.log("hello")
    }, 3000);
}, 1000);