// First install express: npm install express

const express = require("express");
const app = express();

// Sample user data with kidney information
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

// Middleware to parse JSON bodies
app.use(express.json());

// GET route - Return kidney statistics for John
app.get("/", function(req, res){
    let johnKidneys = user[0].kidneys;
    let numberOfKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    
    // Count healthy kidneys
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberofHealthyKidneys++;
        }
    }
    
    let numberofUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
    
    res.json({
        numberOfKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
});

// POST route - Add new kidney to John
app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    
    user[0].kidneys.push({
        healthy: isHealthy
    });
    
    res.json({
        msg: "Kidney added successfully"
    });
});

// PUT route - Make all of John's kidneys healthy
app.put("/", function(req, res){
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    
    res.json({
        msg: "All kidneys are now healthy"
    });
});

// DELETE route - Remove all unhealthy kidneys
app.delete("/", function(req, res){
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        
        // Keep only healthy kidneys
        for(let i = 0; i < user[0].kidneys.length; i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }
        
        user[0].kidneys = newKidneys;
        res.json({msg: "Unhealthy kidneys removed successfully"});
    } else {
        res.status(401).json({msg: "No unhealthy kidneys found"});
    }
});

// Helper function to check if there's at least one unhealthy kidney
function isThereAtleastOneUnhealthyKidney(){
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            return true;
        }
    }
    return false;
}

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});