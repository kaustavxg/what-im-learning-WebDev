import { useRef, useState } from "react"
import { Button } from "./Button"

export const Otp = () => {

    const ref = useRef(Array(number).fill(0));

    const [disabled, setDisabled] = useState(true);

    return (
        <div className="flex flex-col">

            {Array(number).fill(1).map((x, index) => <SubOtp key={index} onDone={() => {
                ref2.current.focus();
            }}  />)}

            <Button disabled={disabled} className='text-black'>Sign Up</Button>


        </div>
    )
}

const SubOtp = ({reference, onDone, goBack}) => {

    const [inputBoxVal, setInputBoxVal] = useState("");

    return (
        <div>
            <input 
                ref={reference}
                type="text" 
                onChange={(e) => {
                    onDone()
                }}
                className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
            />
        </div>
    )
}

