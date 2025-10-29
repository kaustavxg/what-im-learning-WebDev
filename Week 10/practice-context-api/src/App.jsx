import { createContext, useContext, useState } from 'react'
import './App.css'

const CountContext = createContext();

function CountProvider({children}){

  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{
    countKey: count, 
    setCountKey: setCount
  }}>
    {children}
  </CountContext.Provider>
}

function App() {
  return <div>
    <CountProvider>
      <Increase/>
      <Decrease/>
      <Value/>
    </CountProvider>
  </div> 
  
  
}

function Value(){

  const {countKey} = useContext(CountContext)

  return <div>
    <span>Count: {countKey}</span>
  </div>
}

function Increase(){
  const {setCountKey} = useContext(CountContext);

  function increaseCount(){
    setCountKey(count => count + 1)
  }

  return <div>
    <button
      onClick={increaseCount}
    >Increase Count</button>
  </div>
}

function Decrease(){
  const {setCountKey} = useContext(CountContext)

  function decreaseCount(){
    setCountKey(count => count - 1)
  }

  return <div>
    <button onClick={decreaseCount}>
      Decrease Count
    </button>
  </div>
}

export default App
