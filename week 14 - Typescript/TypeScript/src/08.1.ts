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