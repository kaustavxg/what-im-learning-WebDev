import React, { useState } from 'react'
import { Heading } from '../Components/Heading'
import { SecondHeading } from '../Components/SecondHeading'
import { OtpHardCoded } from '../Components/OtpHardCoded'

function Screen3() {

  const [emailId, setEmailId] = useState('');  

  return (

    <div className='min-h-screen bg-[#111b5d]'>
        <div className='flex flex-col'>

            <div className='flex flex-row justify-center mt-15'>
                <Heading/>
            </div>

            <div className='flex justify-center mt-20'>
                <SecondHeading secondHeading={"Check your email for a code"}/>
            </div>

            <div className='flex flex-col items-center mt-10'>
                <span className='mt-5 text-gray-400 mb-3'>
                    Please enter the verification code sent to your email id
                </span>
                <OtpHardCoded/>
                <span className='mt-2 text-gray-400'>
                    Can't find the email? Click 
                    <button className='text-white underline p-1'>
                        here
                    </button>
                    to resend
                </span>
            </div>

        </div>
    </div>
  
)
}

export default Screen3