import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym regularly",
    done: false
  }]);

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

  return (
    <div>
      <h1>Creating a Todo App</h1>
      <input id='title' type="text" placeholder='enter Title'/>
      <input id='description' type="text" placeholder='enter todo'/>
      <button onClick={AddTodo}>Add a Todo</button>
      {JSON.stringify(todos)}
    </div>
  );
}

function Todo(props){
  
}



export default App
