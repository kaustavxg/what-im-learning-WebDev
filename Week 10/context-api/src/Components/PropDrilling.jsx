import React from 'react'

function PropDrilling({bulbOn, setBulbOn}) {
  return (
    <div>
        <Light bulbOn={bulbOn}/>
        <LightSwitch setBulbOn={setBulbOn}/>
    </div>
  )
}

function Light({bulbOn}){
    return <div>
        {bulbOn ? "bulb on" : "bulb off"}
    </div>
}

function LightSwitch({setBulbOn}){

    function toggle(){
        setBulbOn(currentState => !currentState)
    }

    return <div>
        <button
            onClick={toggle}
        >

        </button>
    </div>
    
}

export default PropDrilling