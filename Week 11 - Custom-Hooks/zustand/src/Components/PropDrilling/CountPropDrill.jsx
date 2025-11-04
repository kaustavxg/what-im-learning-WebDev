import { useState } from 'react'

function CountPropDrill() {
    const [count, setCount] = useState(0);


    return (
        <div>
            <Value count={count}/>
            <IncreaseCount setCount={setCount}/>
            <DecreaseCount setCount={setCount}/>
        </div>
    )
}

function Value({count}){
    return <div>
        {count}
    </div>
}

function IncreaseCount({setCount}){
    
    function increase(){
        setCount(count => count + 1)
    }

    return <div>
        <button
            onClick={increase}
        >
            Increase Counter
        </button>
    </div>
}

function DecreaseCount({setCount}){
    function decrease(){
        setCount(count => count - 1)
    }

    return <div>
        <button
            onClick={decrease}
        >
            Decrease Counter
        </button>
    </div>
}

export default CountPropDrill