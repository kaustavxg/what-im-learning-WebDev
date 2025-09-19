import { useState } from 'react'
import './App.css'
import lampOn from './assets/lampOn.png';
import lampOff from './assets/lampOff.png';


function PropDrill() {
    const [bulbOn, setBulbOn] = useState(true);
    
    return <div>
        <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
}

function LightBulb({bulbOn, setBulbOn}){
    // bulbOn is a prop to the Bulb State component
    // bulbOn, setBulbOn are props to the ToggleBulbState component
  
    //# yaha pe bulbOn and setBulbOn toh use hi nai ho rhe hai - upar se leke niche children mein de rhe hai ye 

  return <div>

    {/* here we moved props from child to parent's */}
    {/* they are using the bulbOn and setBulbOn from above and passing down to the child  */}
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch setBulbOn={setBulbOn}/>
  </div>

}

// on off on off 
function LightBulb({bulbOn}){

  return <div>z
    <img 
        src={bulbOn ? lampOn : lampOff} 
        width="150"
      />
  </div>
}

function LightSwitch({bulbOn, setBulbOn}){

  function toggle(){
    //! 1.  setBulbOn(currentState => !currentState)
    //! 2. way
    setBulbOn(function(currentState){
      if(currentState == true){
        return false 
      } else {
        return true
      }
    })

    //! 3. way  
    // setBulbOn(!bulbOn)
  }


  return <div>
    <br></br>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}

export default PropDrill
