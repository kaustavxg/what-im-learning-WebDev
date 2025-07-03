const express = require("express")
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


let todos = [];
// easy way -> store data here
// hard way -> store data in a file -> foundation for database
// add user logic f


app.post('/', function(req, res){
    // extract the todo title from the body
    const {title, id} = req.body;
    todos.push({
        title, 
        id
    });
    res.json({msg: "todo added successfully"});
})

// delete todos
app.delete('/', function(req, res){
    const {id} = req.body;
    for(let i = 0 ; i< todos.length; i++){
        if(todos[i].id === id){
            todos.splice(i, 1);
            break;
        }
    }
    res.json({msg: "todo removed successfully"});
})

app.get('/', function(req, res){
    const title = todos.map(todo => todo.title)
    res.json({
        title
    })
})

app.listen(3000); 