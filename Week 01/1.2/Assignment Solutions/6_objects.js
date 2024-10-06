 // 1. Write a function that takes a user as an input and greets them with their name and age

 function greet(user3){
    console.log("Hi " + user3.name + " your age is " + user3.age + " and your college is " + user3.college)
  }
  
  let user3 = {
    name: "kaustav,",
    age: 20,
    College: "SGTBKC",
  }
  
  greet(user3);
 
 
 // 2. Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

 // here I have taken values according to my own.

 function greet(user) {

    if(user.gender === 'male') {
        console.log("Hi Mr. " + user.name + " your age is " + user.age)
    }
    else if(user.gender === 'female') {
        console.log("Hi Mrs. " + user.name + " your age is " + user.age)
    }
    else{
        console.log("Hi " + user.name + "your age is " + user.age)
    }

}

let user = {
    name: 'Kaustav',
    age: 20,
    gender: 'male',
}

greet(user);

// 3. Also tell the user if they are legal to vote or not

function greet(user1) {

    if(user.gender === 'male') {
        if(canVote(user.age)) {
            console.log("Hi Mr. " + user1.name + " your age is " + user1.age + " and you are eligible to vote")
        }
        else{
            console.log("Hi Mr. " + user1.name + " your age is " + user1.age + " and you are not eligible to vote")
        }
    }

    else if(user.gender === "female"){

        if(user.gender === 'female') {
            if(canVote(user1.age)) {
                console.log("Hi Mrs. " + user1.name + " your age is " + user.age + " and you are eligible to vote")
            }
            else{
                console.log("Hi Mrs. " + user1.name + " your age is " + user.age + " and you are not eligible to vote")
            }
        }   
    }

    else{
        if(canVote(user1.age)) {
            console.log("Hi " + user1.name + " your age is " + user1.age + "you are eligible to vote")
        }
        else{
            console.log("Hi " + user1.name + " your age is " + user1.age + "you are not eligible to vote")
        }
    }

}


function canVote(age) {
    if( age >= 18) {
        return true;
    }
    else{
        return false;
    }
}

let user1 = {
    name: 'Mohini',
    age: 22,
    gender: 'female',
}

