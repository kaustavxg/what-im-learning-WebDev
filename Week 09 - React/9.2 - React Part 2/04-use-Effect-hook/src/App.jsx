import { useState, useEffect } from 'react'
import './App.css'

// App Component → shows or hides the Clock component every 5 seconds
function App() {
  let [clockVisible, setClockVisible] = useState(true);

  // Toggle visibility every 5 seconds
  useEffect(() => {
    setInterval(() => {
      setClockVisible(visible => !visible)
    }, 5000)
  }, [])

  return (
    <div>
     {clockVisible ? <Clock/> : "not visible for 5 seconds"}
    </div>
  )
}

function Clock(){

  /*
   !React Lifecycle Phases:
   ------------------------
   1. Mounting → When the Clock component first appears on the screen.
      👉 Good place to start setInterval (run only once).
   
   2. Re-rendering → Happens whenever state/props change.
      👉 Don’t recreate setInterval on every render (use [] dependency).
   
   3. Unmounting → When the Clock is removed from the screen.
      👉 Cleanup happens here (clearInterval).
  */

  const [count, setCount] = useState(1);

  useEffect(() => {    
    //! Mounting: Start the interval once
    let clock = setInterval(() => {
      console.log("Clock mounted, interval running");
      
      // Functional update → ensures we always use the latest count value
      setCount(c => c + 1)
      console.log("count incremented inside interval");

      /*
        Alternative way:
        setCount(function(count){
          return count + 1
        }) 

        👉 This is the same as (c => c + 1). 
        It’s called a functional update, used when the new state 
        depends on the previous state.
      */
    }, 1000);

    //! Unmounting: Cleanup when Clock is removed from DOM
    return () => {
      console.log("Clock unmounted, interval cleared");
      clearInterval(clock); //# cleanup -> the clock is not running when component is off the screen
    }

  }, []) // [] means run only once on mount, and cleanup on unmountf

  return(
    <div>
      <h1 id='text'>{count}</h1>
    </div>
  )
}

export default App
