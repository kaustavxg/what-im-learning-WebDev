// // function addTodo() {
// //     const inputElement = document.querySelector("input");
// //     const value = inputElement.value;
// //     console.log(value);
// // }


// ---------------- updating in todo using basic js functions ---------
// let ctr = 0;
// function callback() {
//     console.log(ctr);
//     ctr = ctr + 1;
// }

// setInterval(callback, 100000); // setInterval -> after every 1 second, it calls the callback function infinitely
// // setTimeout -> it will call the callback function after 1 second for once

// // callback();
// // callback();
// // callback();
// // callback();
// // callback();

// ------------------ updating in todo using querySelector method ----------------------
let ctr = 0 
function callback() {
    const el = document.querySelectorAll("h4")[1];
    el.innerHTML = ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);

// -------------deleting in java script ----------------------
 