const axios = require('axios');

axios.get('/results[0]')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })


async function getAPI(){
    try{
        const response = await axios.get("https://randomuser.me/api/");
        console.log(response);
        
    } catch(err){
        console.log(`ERROR: ${err}`);
    }
    
}


