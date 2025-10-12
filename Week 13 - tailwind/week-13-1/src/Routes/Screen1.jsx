import React, { useState } from 'react'
import {Button} from '../Components/Button'
import {Input} from '../Components/Input'
import {Heading} from '../Components/Heading'
import {SecondHeading} from '../Components/SecondHeading'
import { useNavigate } from 'react-router-dom'

function Screen1() {

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);

  function handleContinue(){
    navigate('/screen2');
  }

  return (
    <div className='min-h-screen bg-[#111b5d]'>

      <div className='flex flex-col'>
        
        <div className='flex flex-row justify-center mt-15'> 
          <Heading/>
        </div>

        <div className='flex justify-center mt-20'>
          <SecondHeading secondHeading={"Verify your age"}/>
        </div>

        <div className='flex flex-col items-center mt-10'>
          <span className='mt-5 text-gray-400 m-5'>
            Please confirm your birth year, This data will not be stored
          </span>
          <Input 
            type="date" 
            placeholder={"Your birth year"} 
            onDone={() => {
            setDisabled(false)
          }}/>
        </div> 

        <div className='flex justify-center mt-18'>
          <Button 
            disabled={disabled}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
        
      </div>
    </div>
  )
}

export default Screen1