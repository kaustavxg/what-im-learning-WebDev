// not in class
// this is an EXTRA CONCEPT

// Ques - You have an array of numbers and you want to filter out only the even numbers.

// WITHOUT FILTER

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];
for(let i = 0; i<numbers.length; i++) {
    if(numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

// WITH FILTER

// example 1
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
let evenNum = numbers1.filter(num => num % 2 == 0);

console.log(evenNum);

