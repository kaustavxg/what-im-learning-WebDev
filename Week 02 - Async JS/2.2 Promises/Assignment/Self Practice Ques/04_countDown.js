// Countdown Timer
// Print numbers from 5 to 1, one per second, using async/await.

function CountdownPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
}

async function timer(){
        for(let i = 5; i > 0; i--){
            await CountdownPromisified(1000)
            console.log(i);
        }

        

    // console.log("5");
    // await CountdownPromisified(1000);
    // console.log("4");
    // await CountdownPromisified(1000);
    // console.log("3");
    // await CountdownPromisified(1000);
    // console.log("2");
    // await CountdownPromisified(1000);
    // console.log("1");
    
}

timer()