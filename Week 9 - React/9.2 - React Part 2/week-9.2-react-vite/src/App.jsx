import { useActionState, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h2>Counter App</h2>
    </div>
  )
}



function Counter(){

  const [count, setCount] = useState(1);
  // 

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function resetCount(){
    setCount(0)
  }

  return(
    <div>
      <h1 id='text'>{count}</h1>
      <button onClick={increaseCount}>Increase count</button>

      <button onClick={decreaseCount}>Decrease count</button>

      <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export {App, Counter}

 