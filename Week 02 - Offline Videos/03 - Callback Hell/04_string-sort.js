// string sorting in java script

let strSort = "zat";
const stringSorting = strSort.split("").sort().join("").toUpperCase();
// str.split("") =>  ["z", "a", "t"] => .sort() : ["a", "t", "z"] => .join() : [atz] => .toUpperCase : [ATZ]
console.log(`Sorted string is: ${stringSorting}`);
