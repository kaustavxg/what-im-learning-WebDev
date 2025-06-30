/* 

2. Write a function that takes a new object as input which has name , age 
and gender and greets the user with their gender (Hi Mr/Mrs/Others kaustav, your age is 21)

*/

// here I have taken values according to my own.

function greet(user) {
    if (user.gender === "male") { 
                                  /* === -> strictly equality operator -> checks both 
                                  1. value (like male) 
                                  2. type (string, int etc etc)
                                  */ 
      console.log("Hi Mr. " + user.name + " your age is " + user.age);
    } else if (user.gender === "female") {
      console.log("Hi Mrs " + user.name + "your age is " + user.age);
    } else {
      return false;
    }
  }
  
  let user = {
    name: "kaustav",
    age: 25,
    gender: "male",
  };
  
  greet(user);