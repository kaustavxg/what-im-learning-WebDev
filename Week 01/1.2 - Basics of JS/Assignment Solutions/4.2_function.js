function canVote(age){
    if(age >= 18) {
        return true;
    }
    else{
        return false;
    }

}

let vote = canVote(20);
let vote5 = canVote(10);
console.log(vote);
console.log(vote5);

// ----------------------------

function canVote2(age) {
    if(age >= 18) {
        console.log("public can vote");
    }
    else{
        console.log("public cannot vote");
    }
}

let vote2 = canVote2(20);
let vote3 = canVote2(17);