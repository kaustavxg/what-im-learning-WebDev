//==========================================
//! INTERFACES
//==========================================

// An interface describes the shape of an object
// Let's say we want to describe a Person with a name and age

// Define an interface for a Person
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let person: Person = {
  firstName: "Kaustav",
  lastName: "Gupta",
  age: 25,
};

console.log(person.firstName);
console.log(person.age);

//==========================================
//? What's happening?
//==========================================
/*
The Person interface says any object using it must have 
firstName (string), lastName (string), and age (number).
TypeScript checks that person follows this structure.
*/

//==========================================
//! TYPES
//==========================================

// A Type does a similar thing but is more flexible
// Let's define the same Person using a type

type PersonType = {
  name: string;
  age: number;
};

let personType: PersonType = {
  name: "Rohan",
  age: 20,
};

console.log(personType.name);
console.log(personType.age);

//==========================================
//? What is happening here?
//==========================================
/*
The 'type' keyword creates a PersonType with the same structure 
as the interface. It works almost the same as the interface 
for this simple case.
*/