import React from 'react'
import lampOn  from '../assets/lampOn.png';   // one level up → src → assets
import lampOff from '../assets/lampOff.png';
import { useState } from 'react';

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}){
 

  return <div className='flex flex-col items-center'>
    <img 
      src={bulbOn ? lampOn : lampOff} alt="img" 
      className='h-50'
    />
    
  </div>
}

function ToggleBulbState({setBulbOn}){

  function toggle(){
    setBulbOn(currentState => !currentState)
  }

  return <div className='flex flex-col items-center mt-10 '>
    <button onClick={toggle}
      className='bg-gray-500 px-8 py-5 border-2'
    >
      Toggle the bulb
    </button>
  </div>
}

export default LightBulb