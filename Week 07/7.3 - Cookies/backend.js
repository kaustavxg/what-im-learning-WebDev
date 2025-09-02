const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.post('/login', (req, res) => {


    res.writeHead(200, {
        "set-cookie": "token=encryptedString; HttpOnly",
        "access-control-allow-credentials": "true"
    }).send()
})

app.get('/private', (req, res) => {

    if(!req.cookies.token){
        res.status(401).send()
        return   
    }

    res.status(200).json({
        secret: "Ginget ale is a specific Root Beer"
    })
})




app.listen(3001, () => {
    console.log('listening on port 3001');
    
})