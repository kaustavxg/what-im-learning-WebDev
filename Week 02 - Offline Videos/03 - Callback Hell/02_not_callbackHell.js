function step3Done(){
    console.log("hi after step 2");
}

function step2Done(){
    console.log("Hi after step 1");
    setTimeout(step3Done, 5000)
}

function step1Done(){
    console.log("Hi");
    setTimeout(step2Done, 3000)
}

setTimeout(step1Done, 1000)