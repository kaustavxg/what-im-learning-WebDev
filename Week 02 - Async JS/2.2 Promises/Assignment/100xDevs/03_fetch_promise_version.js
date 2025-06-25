async function getData() {
    const url = "https://api.github.com/users/kaustavxg";
    try{
    const response = await fetch(url);
    if(response.ok){
        const json = await response.json();
        console.log(json.login);
        // console.log(response.login);
    } else{
        console.log("404: ERROR FOUND");
        
    }
    } catch(error){
        console.log(error.message);
    }
}

getData();

console.log("hahahahahah");
