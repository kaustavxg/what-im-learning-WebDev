// This line loads environment variables from a .env file into process.env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Import the routers for the user, course, and admin APIs
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());

// Mount the user router at the /api/v1/user path
app.use('/api/v1/user', userRouter);

// Mount the course router at the /api/v1/course path
app.use('/api/v1/course', courseRouter);

// Mount the admin router at the /api/v1/admin path
app.use('/api/v1/admin', adminRouter); 

// This is an asynchronous function to handle database connection and server startup
async function main(){
    /*  using the mongo db string here is bad, 
        that means isko bhi 
    !   .env mein feko

    This line connects to the MongoDB database using a connection string from the environment variables
    */
    await mongoose.connect(process.env.MONGODB_URI);

    // Start the server and listen for incoming requests on the specified port
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    })    
}

main();