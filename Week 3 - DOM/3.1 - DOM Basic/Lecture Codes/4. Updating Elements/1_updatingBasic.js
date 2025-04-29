// Basic counter updating function
let ctr = 0;
function callback() {
    console.log(ctr);
    ctr = ctr + 1;
}

/* 
------------------------------------------
APPROACH 1 - Direct Function Calls
------------------------------------------

Manually call the function multiple times
*/

callback(); // Output: 0
callback(); // Output: 1
callback(); // Output: 2
callback(); // Output: 3
callback(); // Output: 4

/* 
------------------------------------------
APPROACH 2 - Using setInterval
------------------------------------------

setInterval calls the callback function every 1000ms (1 second) infinitely.
*/

setInterval(callback, 1000);

/*
Example:
    Output:
        0
        1
        2
        3
        4
        ...
        (and so on every second)

------------------------------------------
setTimeout - Calls callback only once after delay
------------------------------------------

setTimeout(callback, 1000);

Output:
    0 (printed once after 1 second)
*/
