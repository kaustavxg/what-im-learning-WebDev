// const rect = {
//     width: 2,
//     height: 3,
//     color: " red"
// }

// function area(rect) {
//     return rect.height * rect.width + rect.color;
//     // return rect.color;
// }

// const ans = area(rect);
// console.log(ans)


class Rectangle {
    constructor(width, height, color) {
         this.width = width; // properties
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
 
 const rect = new Rectangle(2, 4, "red")
 console.log(rect.width); // 2
 console.log(rect.height); // 4

 const area = rect.area();
 console.log(area) // 8

