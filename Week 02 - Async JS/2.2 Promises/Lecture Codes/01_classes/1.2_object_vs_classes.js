// OBJECTS vs CLASSES IN JAVASCRIPT
// You don't need classes precisely - you can do it with creating objects

// ========== METHOD 1: Using Objects ==========

// Create object with properties
const rect1 = {
    width: 2,
    height: 3,
    color: "red"
};


function area1(rect1) {
    return "area is: " + rect1.height * rect1.width + " , color is:" + rect1.color;
}

const ans1 = area1(rect1);
console.log(ans1); // Output: area is: 6 , color is:red

console.log("Method 1 ends here");
console.log("Method 2 starts here");

// ========== METHOD 2: Using Classes (Clean Syntax) ==========

class Rectangle {
    // constructor - runs when new object is created
    // in JavaScript you can have only 1 constructoor
    constructor(width, height, color) { 
        this.width = width;   // "this" gives access to current object
        this.height = height; // properties
        this.color = color;   // properties
    }
    
    area() { // this is a method
        const area = this.width * this.height;
        return area;
    }
    
    paint() { // this is a method
        console.log("color is " + this.color);
    }
}

// Creating instance/object of Rectangle class
const rect = new Rectangle(2, 4, "red"); // properties are already atatched with the variable

console.log(rect.width);  // Output: 2
console.log(rect.height); // Output: 4

// Two ways to get area - both are same
console.log(rect.width * rect.height); // Output: 8

const area = rect.area();               // Output: 8
console.log(area);

rect.paint(); // Output: color is red

/*

1. Class Declaration:
    -> You declare a class using the class keyword.
    -> Inside a class, you define properties (variables) and methods (functions) that will belong   to  the objects created from this class.

2. Constructor:
    -> A special method inside the class that is called when you create an instance (an object) of   the class.
    -> It’s used to initialize the properties of the object.

3. Methods:
    -> Functions that are defined inside the class and can be used by all instances of the class.

4. Inheritance:
    -> Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.

5.  Static Methods:
    -> Methods that belong to the class itself, not to instances of the class. You call them directly on the class.

6. Getters and Setters:
    ->Special methods that allow you to define how properties are accessed and modified.


*/










/*

// class rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.height * this.width;
//         return area;
//     }

//     paint(){
//         console.log(Painting with color: ${this.color});
//     }
// }

// const rect = new rectangle(2, 4, 'red');
// console.log(rect.area());
// console.log((rect.color));

*/

