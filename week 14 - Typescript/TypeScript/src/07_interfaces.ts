//===========================================
//! Object Types in Functions - The Problem
//===========================================

// Function that accepts an object with inline type definition
function greet(user1: {
    firstName: string,  // Defining object structure inline
    secondName: string,
    age: number
}) {
    console.log(`Hello ${user1.firstName}`);
}

//# Variable with the same object type defined inline again
let user1: {
    firstName: string,
    secondName: string,
    age: number
} = {
    firstName: "Kaustav",
    secondName: "Gupta",
    age: 21
}

console.log(user1.firstName); // Output: Kaustav

//==========================================
//? The Problem with Inline Types
//==========================================

/*
Issues with the above approach:
1. Code repetition - we defined the same structure twice
2. Hard to maintain - if we need to add 'email', we update multiple places
3. Not reusable - can't use this type definition elsewhere
4. Error-prone - easy to make typos or miss fields

Example: If we want to add 'email' field, we have to update:
- Function parameter type
- Variable type
- Any other place using this structure
*/

//==========================================
// Why We Can't Just Use a Variable
//==========================================

/*
You might think: "Let me store the type in a variable!"

let userType = {           // ❌ This won't work
    firstName: string,
    lastName: string,
    age: number
}

function greet(user: userType) {  // ❌ Error!
    //# Error: 'userType' refers to a value, but is being used as a type here
}

Why doesn't this work?
- TypeScript has TWO separate worlds: VALUES and TYPES
- Regular variables (let/const) exist in the VALUE world
- Type annotations need things from the TYPE world
- We need a way to create reusable TYPES, not values
*/

//==========================================
//! Solution: INTERFACES
//==========================================

//# Interface: A reusable type definition for objects
// Lives in the TYPE world, not the VALUE world


interface UserCanDo{
    firstName: string,
    lastName: string,
    age: number
}

let usersss: UserCanDo = {
    firstName: "Kaustav",
    lastName: "Gupta",
    age: 2000
}

function thisIs(user: UserCanDo) {
    console.log(`firstname is: ${user.firstName}, lastName: ${user.lastName} and your age is: ${user.age}`);
}

thisIs(usersss);


interface UserType {
    firstName: string,
    lastName: string,
    age: number
}

// Now we can reuse 'UserType' anywhere
function greetings(user: UserType) {
    console.log(`Hello ${user.firstName} ${user.lastName}`);
}

// Same type, no repetition
let user2: UserType = {
    firstName: "Kaustav",
    lastName: "Gupta",
    age: 21
}

greetings(user2); // Output: Hello Kaustav Gupta

//==========================================
// Benefits of Interfaces
//==========================================

/*
Advantages:
✓ Define once, use everywhere
✓ Easy to maintain (change in one place)
✓ Self-documenting code
✓ Better autocomplete in editors
✓ Type safety across your entire codebase

If we need to add 'email', we just update the interface:
interface UserType {
    firstName: string,
    lastName: string,
    age: number,
    email: string  // Added once, works everywhere!
}
*/

//==========================================
// Complex Nested Interfaces
//==========================================

// Interface for a single todo item
interface TodoType {
    title: string,        // Fixed typo: 'titile' -> 'title'
    description: string,
    done: boolean
}

// Interface that uses another interface
interface TodoInput {
    todo: TodoType,      // Nested interface - todo is of type TodoType
    lastDoneAt: Date     // Built-in Date type
}

// Function that accepts the complex nested structure
function Todo(props: TodoInput) {
    console.log(`Todo: ${props.todo.title}`);
    console.log(`Description: ${props.todo.description}`);
    console.log(`Completed: ${props.todo.done}`);
    console.log(`Last done at: ${props.lastDoneAt}`);
}

// Using the nested interfaces
let myTodo: TodoInput = {
    todo: {
        title: "Learn TypeScript",
        description: "Master interfaces and types",
        done: false
    },
    lastDoneAt: new Date()
}

Todo(myTodo);

//==========================================
// Interface Naming Convention
//==========================================

/*
Common naming patterns:
- PascalCase (capitalize first letter): UserType, TodoType
- Descriptive names: User, Todo, UserProfile, TodoItem
- Avoid 'I' prefix (old convention): IUser ❌ → User ✓

Interface vs Type (quick note):
Both work similarly for objects, but interfaces are preferred for:
- Object shapes
- Classes
- Extending/implementing
*/

//==========================================
// Key Takeaways
//==========================================

/*
1. Inline types = repetitive and hard to maintain
2. Can't use regular variables as types (value vs type world)
3. Interfaces = reusable type definitions
4. Interfaces can be nested for complex structures
5. Change once, apply everywhere
6. Makes code more maintainable and type-safe
*/

//==========================================