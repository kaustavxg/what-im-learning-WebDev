function setTimeoutPromisified(duration){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, duration);
    });
}

// ======== APPROACH 1 ========

// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Hi after 3 seconds");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("Hi after 5 seconds");
//         });
//     });
// });

// ======== APPROACH 2 - Promise Chaining: Better one ========

setTimeoutPromisified(1000).then(function(){
    console.log("hi after 2 sec");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("hello fter 3 sec");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("heyoo after 5 sec");
})
