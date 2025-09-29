import { useEffect, useRef, useState } from "react"

export const usePrev = (value) => {
// here if ref was changed, the whole component would re-render 

// but that is not the case with useRef, once the value is stored in useRef
// uske baad useRef kitna bhi update karlo - component re render nai hog

    const ref = useRef();
    //! initalized a ref and returend the value of ref below 

    console.log(`re-render happened with new value: ${value}`);
    

    useEffect(() => {
        console.log(`updated the ref to be: ${value}`);
        
        ref.current = value; // this is a ref -> it wil update the value
    }, [value]) // 1 -> 2

    console.log(`returned the usePrev to:  ${ref.current}`);
    
    // const prev = usePrev(state);
    //# this line was calling me in the App.jsx which required the ref 


    return ref.current
}

