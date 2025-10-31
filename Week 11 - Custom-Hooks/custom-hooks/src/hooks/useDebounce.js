import { useRef } from "react";

export function useDebounce(originalFn){

    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalFn, 500);

        // here it is first clearing the old timer 
        // then starting the new timer and which will start running after 5 seconds or 5000 ms 
    }

    return fn;

}