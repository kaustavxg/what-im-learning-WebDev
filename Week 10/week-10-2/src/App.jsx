import { useState } from 'react'
import './App.css'
import lampOn from './assets/lampOn.png';
import lampOff from './assets/lampOff.png';


function App() {

  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){

  const [bulbOn, setBulbOn] = useState(true);

  return <div>

    {/* here we moved props from child to parent s */}
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
  </div>

}

// on off on off 
function BulbState({bulbOn}){

  return <div>
    <img 
        src={bulbOn ? lampOn : lampOff} 
        width="150"
      />
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}){

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

export default App
