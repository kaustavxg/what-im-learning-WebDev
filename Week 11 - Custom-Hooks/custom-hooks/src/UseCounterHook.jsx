import { useState } from 'react'
import './App.css'

//! custom hook - some repetitve logic have been encapsulated here 
function useCounter(){
  const [count, setCount] = useState(0); // 1. define a hook

  function increaseCount(){ // 2. add the function
  //  setCount(count + 1);
   setCount(c => c + 1);
  }

  return{ // 3. return the function and state variable 
    count: count,
    increaseCount: increaseCount
  }
}

function CounterHook() {
  return (
    <div>

      {/* here we have created 4 state variables */}
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

function Counter2(){
  const {count, increaseCount} = useCounter();

  return (
    <div>

    <button onClick={increaseCount}>Increase Count: {count}</button>

    </div>
  )
}

function Counter(){
  //4. destructure the obj here
  const {count, increaseCount} = useCounter();

  return (
    <div>

    <button onClick={increaseCount}>Increase Count: {count}</button>

    </div>
  )
}

export default CounterHook
