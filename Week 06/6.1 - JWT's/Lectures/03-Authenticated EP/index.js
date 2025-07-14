//! Creating an authenticated EP

//# Lets create an endpoint /me that returns the user their information `only if they send their` 

const express = require('express');
const app = express();

app.use(express.json());

