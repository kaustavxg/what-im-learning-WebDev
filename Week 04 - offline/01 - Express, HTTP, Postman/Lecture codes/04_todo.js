const express = require('express');
const app = express();

app.use(express.json());

let myTodos = [
    // {
    //     title: "do your homework",
    //     id: "1"
    // },
    // {
    //     title: "study express",
    //     id: "2"
    // },
    // {
    //     title: "study week 5.2",
    //     id: "3"
    // },
    //  {
    //     title: "study week",
    //     id: "4"
    // },

];

// app.get('/', function(req, res){
//     const {title, id} = req.body;
//     res.json({
//         title, 
//         id
//     })
// })

app.post('/', function(req, res){
    const {title, id} = req.body;
    myTodos.push({
        title,
        id
    })
    res.json({msg: "todo added successfully"})
})



app.delete('/', function(req, res){
    const id = req.body.id;
    for(let i = 0; i < myTodos.length; i++){
        if(myTodos[i].id === id){
            myTodos.splice(i, 1);
            break;
        }
    }
    res.json({
        msg: "my todo has been deleted"
        
    })
})

app.get('/', (req, res) => {
    const title = myTodos.map(todo => todo.title);
    res.json({
        myTodos
    })
})

app.listen(4000)