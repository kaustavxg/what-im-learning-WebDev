import { useState } from "react";
import {usePrev} from './hooks/usePrev'

export function usePevious(){
    const [count, setCount] = useState(0);
    const prev = usePrev(state);

    return (
        <div>
            <p>{state}</p>
            <button
                onClick={() => {
                    setCount(prev => prev + 1)
                }}
            >
                Increase Count
            </button>
            <p>previous value was: {prev}</p>
        </div>
    )


}
