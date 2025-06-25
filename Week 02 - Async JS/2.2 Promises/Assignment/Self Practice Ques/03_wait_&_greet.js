// Wait and Greet
// Write an async function that waits 3 seconds and then logs:
// "Hey! How are you?"

function waitAndGreet(){
    return new Promise(function(resolve){
        setTimeout(resolve, 1000)
    })
}

async function Greetings(){
    await waitAndGreet()
    console.log("Hey! How are you?");
}

Greetings();