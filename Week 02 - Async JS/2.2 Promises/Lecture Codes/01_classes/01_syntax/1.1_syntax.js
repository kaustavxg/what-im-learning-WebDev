// UNDERSTANDING RECTANGLE CLASS - COMPLETE BREAKDOWN
// ========== CLASS DEFINITION ==========
class Rectangle {
    // CONSTRUCTOR: Special method that runs when creating new Rectangle object
    constructor(width, height, color) {
        // PARAMETER ASSIGNMENT EXPLAINED:
        // this.width = width means:
        // "Take the 'width' parameter and store it as the 'width' property of THIS rectangle object"
        
        this.width = width;   // Object property = Parameter value
        this.height = height; // Object property = Parameter value  
        this.color = color;   // Object property = Parameter value
        
        console.log("Rectangle created with:");
        console.log("- Width:", this.width);
        console.log("- Height:", this.height);
        console.log("- Color:", this.color);
    }
    
    area() {
        // 'this' refers to the current rectangle object calling this method
        // this.height and this.width access the properties we stored in constructor
        const area = this.height * this.width;
        return area;
    }
    
    paint() {
        // Template literal using this.color property
        console.log(`Painting with color: ${this.color}`);
    }
}

// ========== OBJECT CREATION STEP BY STEP ==========
// When you write: new Rectangle(2, 4, 'red')
// 1. JavaScript creates a new empty object: {}
// 2. Calls constructor with parameters: width=2, height=4, color='red'
// 3. Inside constructor, 'this' points to the new object
// 4. this.width = width → newObject.width = 2
// 5. this.height = height → newObject.height = 4  
// 6. this.color = color → newObject.color = 'red'
// 7. Returns the completed object

const rect = new Rectangle(2, 4, 'red');
// ↑ rect now contains: { width: 2, height: 4, color: 'red' }

// ========== METHOD CALLS EXPLAINED ==========
console.log("\n--- METHOD CALLS ---");

// CALLING AREA METHOD:
// rect.area() means: "call the area method on the rect object"

console.log("Area calculation:", rect.area()); // Output: 8

console.log("Rectangle color:", rect.color); // Output: red

rect.paint(); // Output: Painting with color: red


// ========== CREATING MULTIPLE OBJECTS ==========
console.log("\n--- MULTIPLE RECTANGLES ---");

const rect1 = new Rectangle(3, 5, 'blue');
const rect2 = new Rectangle(1, 8, 'green');

console.log("Rectangle 1 area:", rect1.area()); // Output: 15
console.log("Rectangle 2 area:", rect2.area()); // Output: 8

rect1.paint(); // Output: Painting with color: blue
rect2.paint(); // Output: Painting with color: green

// ========== KEY CONCEPTS BREAKDOWN ==========
/*
1. CLASS vs OBJECT:
   - Class = Blueprint/Template (Rectangle)
   - Object = Actual instance created from class (rect, rect1, rect2)

2. 'this' KEYWORD:
   - In constructor: refers to the new object being created
   - In methods: refers to the object that called the method
   - Example: when rect.area() is called, 'this' = rect

3. PROPERTIES vs PARAMETERS:
   - Parameters: temporary values passed to constructor (width, height, color)
   - Properties: permanent values stored in object (this.width, this.height, this.color)
   - Parameters disappear after constructor ends
   - Properties remain with the object

4. METHOD ACCESS TO PROPERTIES:
   - Methods can access object properties using 'this'
   - area() uses this.width and this.height
   - paint() uses this.color

5. ENCAPSULATION:
   - Each rectangle object has its own copy of properties
   - rect1 and rect2 have different width, height, color values
   - Methods work with each object's specific property values
*/

// ========== WHAT HAPPENS IN MEMORY ==========
/*
When: const rect = new Rectangle(2, 4, 'red');

STEP 1: New object created in memory
┌─────────────────┐
│   rect object   │
├─────────────────┤ 
│ width: 2        │
│ height: 4       │
│ color: 'red'    │
│ area: [method]  │
│ paint: [method] │
└─────────────────┘

STEP 2: When calling rect.area()
- JavaScript looks up 'area' method in rect object
- Calls area method with 'this' pointing to rect
- Inside method: this.height (4) * this.width (2) = 8
- Returns 8

STEP 3: When calling rect.paint()
- JavaScript looks up 'paint' method in rect object  
- Calls paint method with 'this' pointing to rect
- Inside method: accesses this.color ('red')
- Prints: "Painting with color: red"
*/

// ========== COMMON MISTAKES TO AVOID ==========
console.log("\n--- COMMON MISTAKES ---");

// ❌ MISTAKE 1: Forgetting 'this' in constructor
class BadRectangle1 {
    constructor(width, height, color) {
        width = width;   // ❌ This doesn't create object properties!
        height = height; // ❌ Just reassigns parameters to themselves
        color = color;   // ❌ Properties won't be accessible later
    }
}

// ❌ MISTAKE 2: Forgetting 'this' in methods
class BadRectangle2 {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    area() {
        // ❌ 'width' and 'height' are not defined here
        // Should be 'this.width' and 'this.height'
        // const area = width * height; // ReferenceError!
        const area = this.width * this.height; // ✅ Correct
        return area;
    }
}

// ❌ MISTAKE 3: Calling methods without object
// Rectangle.area(); // ❌ Error - need an object instance
// rect.area();      // ✅ Correct - calling on object instance