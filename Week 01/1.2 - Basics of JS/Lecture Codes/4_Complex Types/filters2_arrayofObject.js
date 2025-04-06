// example 2
// Ques - You have an array containing both numbers and null or undefined values, and you want to filter out these null or undefined values.

// WITHOUT FILTERS
let array = [1, 2, 3, null, 5, undefined, null, 8];
let filterValues = [];
for(let i = 0; i < array.length; i++) {
    if(array[i] !== null && array[i] !== undefined) {
        filterValues.push(array[i])
    }
}

console.log(filterValues);

// WITH FILTER
let array2 = [1, 2, 3, null, 5, undefined, null, 8, undefined, 10, 11, 12];
let filterValues2 = array2.filter(array2 => array2 != null && array2 !== undefined);
console.log(filterValues2);