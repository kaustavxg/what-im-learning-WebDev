import { useState } from 'react'
import './App.css'

function App() {
  
  return(
    <div>
      <h1>Clock</h1>
    </div>
  )
}

function StartClock(){
  const [count, setCount] = useState(0)

  setInterval(function(){
    setCount(count+1)
  }, 1000)

  return (
      <div>
        <h1 id='text'>{count}</h1>
      </div>
  )
}

export {App, StartClock}
