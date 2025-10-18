//! INTERFACES

// an interface describes the shape of an object, Let's say we want to describe a Perosn with a name and age

// Define a interface for a Perosn
interface Person {
    firstName: string,
    lastName: string,
    age: number
}

let person: Person = {
    firstName: "Kaustav",
    lastName: "Gupta",
    age: 25
}