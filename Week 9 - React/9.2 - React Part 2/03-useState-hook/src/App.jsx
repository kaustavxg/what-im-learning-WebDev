import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <b>
        Hi from week 9.2
      </b>
      <Counter/>
    </div>
  )
}


function Counter(){

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function reset(){
    setCount(0)
  }

  return(
    <div>
      <h1 id='text'>{count}</h1>
      <button onClick={increaseCount}>Increase count</button>

      <button onClick={decreaseCount}>Decrease</button>

      <button onClick={reset}>Reset</button>
    </div>
  )

}

export default App
