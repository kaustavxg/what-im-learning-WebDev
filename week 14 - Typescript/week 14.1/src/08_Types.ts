
//! ======= UNION =======
type SumInput = string | number;

function sum(a: SumInput, b: SumInput){
    // return a + b;
}

//# ========= FINDINGS ========

// ts can sum number + number
// ts can sum string + number
// ts can sum string + string
//# ts can't sum (string | number) + (string + number)

type S = string | number;

let x: S = 1;
let y: S = "abc";

let z = x + y;
console.log(z);


//! ======== INTERSECTION ========
type Employees ={
    name: string,
    startDate: Date
}

type Manager = {
    name: string,
    department: string
}

type TeamLead = Employees & Manager;

const teamLead: TeamLead = {
    name: "Kaustav",
    startDate: new Date(),
    department: "Software Developer"
}


