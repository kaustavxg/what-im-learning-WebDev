function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
// setTimeout is a global function which is available to everyone

console.log("I will run immedietely");

console.log("Hi!")

function timeout() {
	console.log("click the button")
}

setTimeout(timeout, 5000);

console.log("welcome here")