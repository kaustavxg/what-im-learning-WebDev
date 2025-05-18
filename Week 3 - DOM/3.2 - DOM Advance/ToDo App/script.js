let todos = [];

function addTodo() {
    todos.push({
        title: document.querySelector("input").value
    })
    render();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function createTodoComponent(todo, index) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    button.innerHTML = "Delete";
    h1.innerHTML = todo.title;

    div.append(h1);
    div.append(button);
    //document.querySelector("body").appendChild(div);

    return div;
}

function render() {
    document.querySelector("#todos").innerHTML = "";
    for(let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const element = createTodoComponent(todos[i]);
        document.querySelector("#todos").appendChild(element);
    }
}