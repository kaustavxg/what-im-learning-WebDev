function getLength(name){

    try{
        return name.length;
    } catch (err){
        console.log(`ERROR: ${err}`)
    }
}

console.log(getLength("kaustav"))