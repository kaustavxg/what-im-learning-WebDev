interface User {
    age: number
}

function isLegal(user: User){
    if(user.age > 18){
       console.log(`age is above 18, given age: ${user.age}`);
       return 0;
    } else {
       console.log(`age is below 18 as given age is: ${user.age}`);
       
    }
}

// if I run like this -> isLegal()
// it will throw me an error -> Argument of type 'number' is not assignable to parameter of type 'User'.
// isLegal() expects a User object - not just a number

isLegal({
    age: 22
})