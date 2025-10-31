import React, { useState } from 'react'

// # hook
function useCounter(){
    const [count, setCount] = useState(0);

    function IncreaseCount(){
        setCount(count => count + 1)
    }

    return {
        count: count,
        IncreaseCount: IncreaseCount
    }
}

function CounterHook() {
  return (
    <div>
        <CounterComponent/>
    </div>
  )
}

function CounterComponent(){
    const {count, IncreaseCount} = useCounter();

    return <div>
        <span>
            Count: {count}
        </span>
        <button
            onClick={IncreaseCount}
        >
            Increase Count
        </button>
    </div>
}

export default CounterHook