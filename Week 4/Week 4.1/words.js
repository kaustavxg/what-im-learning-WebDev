// reading the number of space as a CLI

const fs = require("fs"); // Node.js ka file system module import kiya

// main function jo file ka naam input lega aur usme words count karega
function main(fileName){
    // file ko asynchronously read karte hain
    fs.readFile(fileName, 'utf-8', function(err, data){
        // agar file read karte waqt koi error aata hai, toh yeh print karega
        if (err) {
            console.log("Error:", err.message);
            return; // error aane par function yahin ruk jayega
        }
        // yahan hum space count kar rahe hain, har space ek word ke beech ka gap hota hai
        let total = 0;
        for(let i = 0; i < data.length; i++){
            if(data[i] === " ") {
                total++; // har space milne par total ko 1 se badha do
            }
        }
        // total spaces + 1 = total words (simple logic, lekin perfect nahi hai)
        console.log(total+1);
    })
}

// yahan se program start hota hai
// process.argv[2] matlab terminal se diya gaya file ka naam
main(process.argv[2]); 

// process.argv -> yeh ek array hai jo terminal se diye gaye arguments ko rakhta hai
// [0] = node ka path, [1] = script ka path, [2] = pehla argument (yahan file ka naam)