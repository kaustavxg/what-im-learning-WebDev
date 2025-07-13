/* 
! =============== MAP ===============

// Task: Given an array, return a new array where every value is multiplied by 2
// Note: The example output shows filtered even numbers, but the comment asks for multiplication

input -> [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
output -> [2, 4, 6, 8, 10] // This is actually filtering even numbers, not multiplying by 2
*/

const input = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

// Traditional approach: Using for loop to filter even numbers
// const newArray = [];
// for(let i = 0; i < input.length; i++){
//     if(input[i] % 2 === 0){
//         newArray.push(input[i])
//     }
// }
// console.log(newArray);

//! =============== BETTER WAY ===============

// Use MAP for array transformation - cleaner and more functional

const newInput = [1, 2, 3, 4, 5];

// Using map to multiply each element by 2
const ans = input.map(function(element){
    return element * 2;
});

console.log(ans); // [2, 4, 6, 8, 10, 10, 12, 14, 16, 18, 20]

// Alternative: Using arrow function (more concise)
const doubledArray = input.map(element => element * 2);

// Example: Filtering even numbers using filter method
const evenNumbers = input.filter(element => element % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//! =============== ASSIGNMENT ===============

/**
 * Create a custom map function that takes 2 parameters:
 * 1. An array to transform
 * 2. A transformation callback function
 * Returns: A new transformed array using the callback function
 */

function customMap(array, tranformedCallback){
    const result = [];

    for(let i = 0; i < array.length; i++){
        const newArr = tranformedCallback(array[i], i, array);
        result.push(newArr);
    }

    return result;
}