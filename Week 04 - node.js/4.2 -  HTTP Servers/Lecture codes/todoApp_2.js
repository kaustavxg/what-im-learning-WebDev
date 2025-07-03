const express = require("express")
const app = express();

app.use(express.json());

let todos = [
    {
        title: "work 1",
        id: "1"
    },
    {
        title: "work 2",
        id: "2"
    },
    {
        title: "work 3",
        id: "3"
    },
    {
        title: "work 4",
        id: "4"
    },
]

app.get("/", function(req, res){
    // const title = todos.map(todo => todo.title);
    const {title} = req.body
    const id = todos.map(todo => todo.id);
    res.json({
        title,
        id
    })
})


app.delete("/", function(req, res){
    // extract the content
    // const deleteTodo = todos.filter(todo => todo.id !== id);
    // res.json({
    //     deleteTodo
    // })
    const {id} = req.body;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos.splice(i, 1);
            break;
        }
    }
    res.json({
        msg: "todo deleted successfully"
    })
})

app.listen(3000);