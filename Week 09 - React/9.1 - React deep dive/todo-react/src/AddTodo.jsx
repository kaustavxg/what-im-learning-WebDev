function AddTodo(){
    let newArray = [];
    for(let i = 0; i < todos.length; i++){
        newArray.push(todos[i]);
    }
    newArray.push({
        title: "Eat food",
        description: "watch week 9.1",
        done: true,
    })
    setTodos(newArray);
}

export default AddTodo;