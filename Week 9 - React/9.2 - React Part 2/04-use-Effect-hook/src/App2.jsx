import { useState, useEffect } from 'react'
import './App.css'

// re-learning cleanup, useEffect, learning about dependency array
export default function App2() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function increase(){
        setCount(count => count + 1);
    }

    function decrease(){
        setCount2(count => count - 1)
    }

    return(
        <div>
            <Counter count={count} count2={count2}/>
            <button onClick={increase}>Home</button>
            <button onClick={decrease}>Notification</button>
        </div>
    )
}

// prop -> as an arg to a function

// mounting, re-rendering, Unmounting
function Counter(props){

    useEffect(function(){
        console.log("mount");
        
        return function(){
            console.log("unmount");
        }

    }, []) // dependency array

    useEffect(function(){
        console.log("count has changed");

        return function(){
            console.log("--------------------");
            
            console.log("clean up inside second effect");
            
        }

    }, [props.count, props.count2])

  return (
    <div>
      Counter1 {props.count}
      <br />
      <br />
      Counter2 {props.count2}
      <br />
      <br />
    </div>
  );
}


