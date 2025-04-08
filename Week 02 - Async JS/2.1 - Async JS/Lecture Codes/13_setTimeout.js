// RUN ON LOUPE

function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000); // i/o intensive task

console.log("I will run immedietely");

console.log("Hi!")

function timeout() {
	console.log("click the button")
}

setTimeout(timeout, 10000); 

console.log("welcome here")

// // 4-5 seconds -> CPU INTENSIVE TASK
// let c = 0;
// for(let i = 0; i < 10000000000; i++) {
// 	c+=1;
// }

// console.log("expensive operation done")
