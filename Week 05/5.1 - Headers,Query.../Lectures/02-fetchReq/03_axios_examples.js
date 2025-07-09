const axios = require('axios');
// app.use(express.json());


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
        
    } catch{
        console.log("chud gaye guru");
        
    }
    
}


