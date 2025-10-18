//==========================================
//! READONLY PROPERTIES
//==========================================

//# You can make properties read-only, meaning they can't be 
//# changed after the object is created

//==========================================
//! Interface with Readonly Property
//==========================================

interface Book {
  readonly title: string; //! Cannot be modified after creation
  author: string;         // Can be modified
}

let book: Book = {
  title: "TypeScript Guide for Interface",
  author: "Kaustav",
};

book.author = "Rohan"; // This is fine - author is not readonly

console.log(book.title);
console.log("============================");

// But if you try to modify the readonly property:
// book.title = "New title after readonly"; // ❌ Error!
// Error: Cannot assign to 'title' because it is a read-only property

//==========================================
//!Type with Readonly Property
//==========================================

type Books = {
  readonly title: string; //! Cannot be modified after creation
  author: string;         // Can be modified
};

let books: Books = {
  title: "TypeScript Guide for Types",
  author: "Kaustav",
};

console.log(books.title);

// books.title = "New Title"; // ❌ Error!
// Error: Cannot assign to 'title' because it is a read-only property

//==========================================
//? What's happening?
//==========================================
/*
# The 'readonly' keyword ensures title can't be changed after 
# the object is created. Both interfaces and types support readonly.
*/

//==========================================
// Key Points about Readonly
//==========================================
/*
1. readonly prevents reassignment after object creation
2. Useful for properties that should never change (like IDs, creation dates)
3. Works the same in both interfaces and types
4. Only affects the property, not nested objects

Example:
readonly title: string means:
✓ Set during creation: { title: "Book" }
❌ Change later: book.title = "New" (Error!)

Common use cases:
- User IDs
- Creation timestamps
- Configuration values
- Immutable data structures
*/