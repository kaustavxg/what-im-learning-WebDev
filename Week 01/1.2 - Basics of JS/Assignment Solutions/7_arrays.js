// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

// without filter

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = [];
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
        evenNum.push(array[i]);
    }
}

console.log(evenNum);


// with FILTER
let array2 = [11, 12, 13, 14, 15];
let evenNum2 = array2.filter(array2 => array2 % 2 == 0);
console.log(array2);

// kya karo?
// array2 ko filter karo and vhi number rakho jo 2 se divide ho rahe hai