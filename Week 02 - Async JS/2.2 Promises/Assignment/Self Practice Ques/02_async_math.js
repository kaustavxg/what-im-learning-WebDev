// Create an async function that doubles a number after 1 second. Chain 3 calls using await to double it 3 times.

function doubleAfter1sec(num){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(num * 2);
        }, 1000)
    })
}

async function double(){
    let result1 = await doubleAfter1sec(5);
    console.log(result1);
    
    let result2 = await doubleAfter1sec(result1);
    console.log(result2);

    let result3 = await doubleAfter1sec(result2);
    console.log(result3);
}

double();