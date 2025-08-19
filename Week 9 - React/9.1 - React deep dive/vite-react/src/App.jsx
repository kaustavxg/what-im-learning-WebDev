import { useState } from 'react' // hook

import "./App.css"

function App() {

  const [count, setCount] = useState(0); // hook
  //! anything which starts with ### use ### in react is a hook

  //# if we dont want to use the above hook, what the above hook is doing is given below
  // const count = stateVariable[0];
  // const setCount = stateVariable[1];

  function onClickHandler(){
    setCount(count + 1);
  }

  return (
    <div>
      <button id="btn" onClick={onClickHandler}>
        Counter {count}
      </button>
    </div>
  )
}

export default App
