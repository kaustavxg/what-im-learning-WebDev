import { useState, useEffect } from 'react'
import './App.css'

// conditional rendering -  based on a certain condition render a component
function App() {

  let counterVisible = true;
  
  return(
    <div>
      <h1>Clock</h1>

      {/* // this is rendering the clock  */}
      {counterVisible ?  <StartClock></StartClock> : null }
     
    </div>
  )
}

// mounting, re-rendering, un-mounting
function StartClock(){
  const [count, setCount] = useState(0)

  console.log(`inside counter component ${count}`);
  
  // guatd our setInterval from re-render
  useEffect(function(){
    setInterval(function(){
    setCount(counterVisible) // this code will be called only once
    // useEffect toh baar baar re-render hoga // but andar ka setInterval bas first time chalega and bs update hota rahega
  }, 1000)
  console.log(` On Mount`); // this will be printed only once 
  }, [])  // dependency array

  

  function increaseCount(){
    setCount(count+1);
  }

  return (
      <div>
        <h1 id='text'>{count}</h1> 
        {/* clock component render ho rha hai, jaise jaise count badh rha hai vo baar baar rerender hota rahega like
        count - 1
        count - 1 2
        count - 1 2 3
        count - 1 2 3 4 .....

        isiliye setInterval is creating an issue, vo bhi aise baar baar render ho rha hai
        */}
        <button onClick={increaseCount}>Increase</button>
      </div>
  )
}

export {App}
