//! =============== FILTER ===============

// Task: Given an array, filter out only the even numbers

const input = [1, 2, 3, 4, 5,];

// Traditional approach: Using for loop to filter even numbers
const newArray = [];

for(let i = 0; i < input.length; i++){
    if(input[i] % 2 == 0) {
        newArray.push(input[i]);
    }
}

console.log(newArray); // [2, 4]

//! =============== BETTER WAY ===============

// Use FILTER for array filtering - cleaner and more functional

const newInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get only even numbers
const arr = newInput.filter(array => array % 2 == 0);
console.log(arr); // [2, 4, 6, 8, 10]

// Alternative: Using function expression (more explicit)
const evenNumbers = newInput.filter(function(element) {
    return element % 2 == 0;
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]

//! =============== ASSIGNMENT ===============

/**
 * Create a custom filter function that takes 2 parameters:
 * 1. An array to filter
 * 2. A condition callback function
 * Returns: A new filtered array based on the condition function
 */

function customFilter(array, conditionCallback) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        // Apply condition function to each element
        if (conditionCallback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    
    return result;
}

// Example usage of custom filter function
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using our custom filter to get even numbers
const evenFiltered = customFilter(testArray, function(element) {
    return element % 2 == 0;
});

console.log(evenFiltered); // [2, 4, 6, 8, 10]

// Using our custom filter to get numbers greater than 5
const greaterThanFive = customFilter(testArray, element => element > 5);
console.log(greaterThanFive); // [6, 7, 8, 9, 10]