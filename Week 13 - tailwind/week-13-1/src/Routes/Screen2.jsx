import React, { useState } from 'react'
import { Heading } from '../Components/Heading'
import { SecondHeading } from '../Components/SecondHeading'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button';

function Screen2() {

  const [disabled, setDisabled] = useState(true);

  return (
    <div className='min-h-screen bg-[#111b5d]'>
        <div className='flex flex-col'>

            <div className='flex flex-row justify-center mt-15'>
                <Heading/>
            </div>

            <div className='flex justify-center mt-29'>
                <SecondHeading secondHeading={"Let's get Started"}/>
            </div>

            <div className='flex flex-col items-center mt-10'>
                <Input
                    type="email"
                    placeholder={"Enter your email"}
                    onDone={() => {
                        setDisabled(false);
                    }}
                />
            </div>

            <div className='flex justify-center mt-18'>
                <Button disabled={disabled}>Continue</Button>

            </div>

        </div>
    </div>
  )
}

export default Screen2