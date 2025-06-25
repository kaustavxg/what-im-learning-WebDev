// Assignment QUES 1 - setTimeout Promise version

function setTimeoutPromisified(duration){
    return new Promise(function(resolve, reject){
            setTimeout(resolve, duration);
    });
}

setTimeoutPromisified(1000).then(function(){
    console.log("hanji veere after 1 sec");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("hi after 3 seconds");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("hi after 5 seconds");
})