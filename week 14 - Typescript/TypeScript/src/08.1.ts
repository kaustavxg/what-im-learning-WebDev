// interface User {
//     age: number
// }

// let user: User = {
//     age: 20
// }

// function isLegal(user: User): boolean {
//     if(user.age >= 18){
//         return true
//     } else {
//         return false
//     }
// }

// const ans = isLegal(user)
// if(ans){
//     console.log(`My age is legal`);
// } else {
//     console.log(`my age is illegal`);
// }

// =============================

interface Address {
    city: string,
    country: string,
    pincode: string,
    houseNumber: string
}

interface User {
    name: string
    age: number
    address: Address
}

interface Office {
    address: Address
}

let userss: User = {
    name: "kaustav",
    age: 5,
    address: {
        city: "Delhi",
        country: "India",
        pincode: "110092",
        houseNumber: ""
    }
}

interface People {
    name: string,
    age: number,
    greet: () => string, // or greet(): string
}

// create an obj called person of people type
// greet should just greet the function

// let person: People = {
//     name: "kaustav",
//     age: 20,
//     // greet: () => {
//     //     return "hi"
//     // }
// }

// let greeting = person.greet()
// console.log(greeting);

// creating a class that implements this interface

// classes in java script 
class Manager implements People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}