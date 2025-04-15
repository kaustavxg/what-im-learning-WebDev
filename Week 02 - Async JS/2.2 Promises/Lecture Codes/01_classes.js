// you don't need the concept of classes precisely
// you can do it with creating objects

const rect1 = {
    width: 2,
    height: 3,
    color: " red"
}

function area1(rect1) {
    return "area is: " +rect1.height * rect1.width + " , color is:" + rect1.color;
    // return rect.color;
}

const ans1 = area1(rect1);
console.log(ans1)

console.log("code 1 ends here");
// OR
console.log("code 2 starts here");


// class -> clean syntax
class Rectangle {
    constructor(width, height, color) { 
         this.width = width; // "this" variable gives access to current object inside variable
         this.height = height; // properties
         this.color = color; // properties
         
         console.log(this);
    }
    
    area() { // method
        const area = this.width * this.height;
          return area;
    }
    
    paint() { // method
            //  console.log(`Painting with color ${this.color}`);
            console.log("color is " + this.color);
    }
    
 }

 const rect = new Rectangle(2, 4, "red") // creating instance or object of a rectangle class
 console.log(rect.width); // 2
 console.log(rect.height); // 4

 console.log(rect.width * rect.height); // 8
 const area = rect.area(); // line 46 and 47 is same
 console.log(area) // 8


 


