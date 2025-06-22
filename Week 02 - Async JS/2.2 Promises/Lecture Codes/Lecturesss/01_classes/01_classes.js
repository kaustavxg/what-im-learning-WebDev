class rectangle {
    constructor(width, height, color) {
        this.width = width; // this gives access to current object
        this.height = height;
        this.color = color;
    }

    

    area() {
        const area = this.width *  this.height;
        return area;
       
        

    }

    paint(){
        console.log(this.color);
        console.log("=====================");
        console.log(this);
        // this variable just make us gets access to inside the function
    }
    
}
const rec = new rectangle(5, 4, 'red');
// this is a syntax to create an object : const ... = new rectangle()

console.log(rec.area());
rec.paint()


console.log("=====================");
const rect1 = new rectangle();
console.log(rect1.area());
// output: NaN -> why?
// because i multipled undefined * undefind


// class is a Blueprint