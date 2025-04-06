// Create a function that takes an array of objects as input and returns the users whose age > 18 and are male

function solve(arr) {
    
    // initialise a new Array, push to a new array
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].gender === "male" && arr[i].age > 18) {
            arr2.push(arr[i])
        }
    }

    return arr2;

    // you can use the filter function inside an array

}

const user1 = [{
    name: "kaustav",
    age: 20,
    gender: "male"
}, {
    name: "mohini",
    age: 20,
    gender: "female"
}, {
    name: "sarath",
    age: 35,
    gender: "male"
}]

// const ans = solve(user1);

// console.log(ans)

console.log(solve(user1));