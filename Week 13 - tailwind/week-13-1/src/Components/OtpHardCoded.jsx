import { useRef, useState } from "react"
import { Button } from "./Button";

export const OtpHardCoded = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setDisabled] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex justify-center">
                <SubOtp reference={ref1} onDone={() => {
                    ref2.current.focus();
                }}/>
                <SubOtp reference={ref2} onDone={() => {
                    ref3.current.focus();
                }}/>
                <SubOtp reference={ref3} onDone={() => {
                    ref4.current.focus();
                }}/>
                <SubOtp reference={ref4} onDone={() => {
                    ref5.current.focus();
                }}/>
                <SubOtp reference={ref5} onDone={() => {
                    ref6.current.focus();
                }}/>
                <SubOtp reference={ref6} onDone={() => {
                    setDisabled(false);
                }}/>
            </div>
            

            <div className="flex flex-col">
                <Button disabled={disabled} className='text-black'>Sign Up</Button>
            </div>
            
        </div>
    )
}

const SubOtp = ({reference, onDone}) => {

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