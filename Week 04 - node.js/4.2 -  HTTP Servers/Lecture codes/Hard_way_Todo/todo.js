const express = require("express");
const app = express();
app.use(express.json());

const myTodoData = require('./file.js')

app.get('/', function(req, res){
    const title = myTodoData.map(todo => todo.title);
    const id = myTodoData.map(todo => todo.id);
    res.json({
        title
    })
})

app.delete('/', function(req, res){
    const {id} = req.body;
    for(let i = 0; i < myTodoData.length; i++){
        if(myTodoData[i].id === id){
            myTodoData.splice(i, 1);
            break;
        }
    }
    res.json({
        msg: "todo deleted successfully"
    })
})

app.listen(3000);