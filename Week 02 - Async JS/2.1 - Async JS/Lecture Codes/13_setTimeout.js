// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// // setTimeout is a global function which is available to everyone

// console.log("I will run immedietely");

// console.log("Hi!")

function timeout() {
	console.log("click the button")
}

setTimeout(timeout, 10000);

console.log("welcome here")

// 4-5f seconds
let c = 0;
for(let i = 0; i < 10000000000; i++) {
	c+=1;
}

console.log("expensive operation done")