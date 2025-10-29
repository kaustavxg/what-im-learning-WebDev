import React, { createContext, useContext, useState } from 'react'
import './App.css'
import lampOn from './assets/lampOn.png'
import lampOff from './assets/lampOff.png'


// # context api - Step 1: define a context
const BulbContext = createContext();

function Context() {

  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div className='flex flex-col'>
      {/* //! ===================== */}
      {/* <LightBulb/> */}
      {/* <PropDrilling bulbOn={bulbOn} setBulbOn={setBulbOn}/> */}
      {/* //! ====================== */}

      {/* //# context api - Step 2: wrap the component insider a Provider with defining the key and values */}
      <BulbContext.Provider
        value={{
          bulbOnKey: bulbOn,
          setBulbOnKey: setBulbOn
        }}
      >
        <Light/>
      </BulbContext.Provider>
      
    </div>
  )
}

//! I dont have to pass the props over here
function Light(){
  return <div>
     <LightBulb/>
     <LightSwitch/>
  </div>
}

function LightBulb(){

  // # context API - Step3: consume the context
  const {bulbOnKey} = useContext(BulbContext) 

  return <div className='flex flex-col items-center'>  
    <img 
      src={bulbOnKey ? lampOn : lampOff } 
      alt="img" 
      className='h-50'  
    />
  </div>
}

function LightSwitch(){

  const {setBulbOnKey} = useContext(BulbContext)

  function toggle(){
    setBulbOnKey(currentState => !currentState)
  }

  return <div className='flex flex-col mt-10 items-center'>
    <button
      className='px-5 py-3 border-2'
      onClick={toggle}
    >
      Toggle - On/Off
    </button>
  </div>
}

export default Context