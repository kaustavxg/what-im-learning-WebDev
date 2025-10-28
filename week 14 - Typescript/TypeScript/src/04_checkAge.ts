function ageValidation(age: number){
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(ageValidation(18));


function checkAge(age: number) :boolean {
    if(age > 18){
        return true;
    } else{
        return false;
    }
}

console.log(checkAge(15));
