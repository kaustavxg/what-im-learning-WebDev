import React, { useState } from 'react'

function Visible() {
    
    const [isVisible, setIsVisible] = useState(false);

    function visibility(){
        setIsVisible(!isVisible)
    }
    
    return (
        <div>
    
        
        <button onClick={visibility}>Toggle Button</button>
        {isVisible && <p>text is condtionally rendered</p>}
        
        </div>
  

    )
}

export default Visible