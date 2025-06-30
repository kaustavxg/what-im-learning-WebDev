// 3. Also tell the user if they are legal to vote or not

function greet(user) {
    if(user.gender === "male") {
        if(canVote(user.age)) {
            console.log("Hi Mr. " + user.name + " you are eligible to vote" + " Congratulations!");
        }
        else{
            console.log("Hi Mr. " + user.name + " you are not eligible to vote");
        }
    }
    else if(user.gender === "female"){
        if(canVote(user.age)) {
            console.log("Hi Mrs. " + user.name + " you are eligible to vote" + " Congratulations!");
        }
        else{
            console.log("Hi Mrs. " + user.name + " you are not eligible to vote");
        }
    }
    else{
        return false;
    }
}

function canVote(age) {
    if(age >= 18) {
        return true;
    }
    else{
        return false;
    }
}

let user = {
    name: "Mangal",
    age: "30",
    gender: "female"
}

greet(user);