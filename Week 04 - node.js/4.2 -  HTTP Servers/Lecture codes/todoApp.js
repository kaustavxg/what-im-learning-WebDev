const express = require("express")
const app = express();

let todos = [];
// easy way -> store data here
// hard way -> store data in a file -> foundation for database
// add user logic f

app.post('/', function(req, res){
    // extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', function(req, res){
    // extract the todo id
    // remove the todo from here
})

app.get('/', function(req, res){
    res.json({
        todos
    })
})

app.listen(3000); // which port 
