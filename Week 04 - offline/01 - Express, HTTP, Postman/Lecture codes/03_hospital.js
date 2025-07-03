// Express ko import kar rahe hain
const express = require("express");
const app = express();

// Sample user data - yahan pe users ki kidney info store hai
let user = [
    {
        name: "john",
        kidneys: [
            {healthy: false},
            {healthy: false},
            {healthy: true}
        ]
    },
    {
        name: "alex",
        kidneys: [{
            healthy: true
        }]
    }
];

// Middleware - JSON body ko parse karne ke liye (POST/PUT mein kaam aayega)
app.use(express.json());

/*

=> Parsing ka matlab hota hai data ko ek format se dusre format mein convert karna, taaki wo program ke liye easily samajh aaye.

=> Jab aap Express.js mein app.use(express.json()) likhte ho, toh iska kaam hai:

=> Client se aane wale JSON data ko (jo POST/PUT request ke body mein hota hai) JavaScript object mein convert karna.

=> Iske baad aap apne route handlers mein req.body ke through us data ko directly use kar sakte ho, bina manually parse kiye.

=> Agar yeh middleware na ho, toh aapko request body ek raw stream ki tarah milti, jo ki directly use nahi ho sakti. Parsing ke baad, Express aapke liye automatically JSON string ko JavaScript object bana deta hai

*/


// GET route - John ke kidneys ka stats dikhata hai
app.get("/", function(req, res){
    // John ki kidneys nikal rahe hain (user[0] matlab John)
    let johnKidneys = user[0].kidneys;
    let numberOfKidneys = johnKidneys.length; // Total kidneys
    let numberofHealthyKidneys = 0; // Healthy kidneys ka count

    // Loop se healthy kidneys count kar rahe hain
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys++;
        }
    }

    // Unhealthy kidneys = total - healthy
    let numberofUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;

    // Response bhej rahe hain JSON mein
    res.json({
        numberOfKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});


// POST route - John ki kidneys mein nayi kidney add karta hai
app.post("/", function(req, res){
    // Body se isHealthy value nikal rahe hain
    const isHealthy = req.body.isHealthy;

    // John ki kidneys mein nayi kidney add kar rahe hain
    user[0].kidneys.push({
        healthy: isHealthy
    });

    // Success message bhej rahe hain
    res.json({
        msg: "Kidney added successfully"
    });
});


// PUT route - John ki saari kidneys ko healthy bana deta hai
app.put("/", function(req, res){
    // Loop se har kidney ko healthy bana rahe hain
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }

    // Success message bhej rahe hain
    res.json({
        msg: "All kidneys are now healthy"
    });
});


// DELETE route - Saari unhealthy kidneys hata deta hai
app.delete("/", function(req, res){
    // Pehle check karte hain ki koi unhealthy kidney hai ya nahi
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];

        // Sirf healthy kidneys ko naya array mein daal rahe hain
        for(let i = 0; i < user[0].kidneys.length; i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }

        // John ki kidneys ko update kar rahe hain
        user[0].kidneys = newKidneys;
        res.json({msg: "Unhealthy kidneys removed successfully"});
    } else {
        // Agar koi unhealthy kidney nahi hai toh error bhejte hain
        res.status(401).json({msg: "No unhealthy kidneys found"});
    }
});


// Helper function - check karta hai ki koi unhealthy kidney hai ya nahi
function isThereAtleastOneUnhealthyKidney(){
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            return true; // Mil gayi toh true return karo
        }
    }
    return false; // Nahi mili toh false
}


// Server ko port 3000 pe start kar rahe hain
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
