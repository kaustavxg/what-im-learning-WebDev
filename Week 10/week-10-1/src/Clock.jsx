import { useRef, useState } from 'react'
import './App.css'

//! clock with start and small button 

function Clock(){

    const [currentCount, setCurrentCount] = useState(1);
    const timer = useRef();

    function startClock(){
        let value = setInterval(() => {
            setCurrentCount(prevCount => prevCount + 1);
        }, 1000)
        timer.current = value; // this will not trigger a re-render 
    } // useEffect 
    
    function stopClock(){
        console.log(timer);
        clearInterval(timer);
    }


    return <div>
        {currentCount}
        <br></br>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
}

export default Clock