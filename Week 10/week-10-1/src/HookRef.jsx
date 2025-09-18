import { useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HookRef(){

    //! one of the way to write this function - not the right way -  you don't want through dom manipulation in react 
    // function focusOnInput(){
    //     document.getElementById('name').focus()
    // } 

    //! better way is to use - references **** (useRef) ****
    //# useRef - reference to a value, such that when you change the value, the component DOES NOT RE-RENDER
    const inputRef = useRef();
    function focusOnInput(){
        inputRef.current.focus();
    }


    return <div>
        <label>Sign up: </label>
        <input ref={inputRef} type={"text"} placeholder='reference is here'></input>
        <br></br>
        
        <label>Sign in: </label>
        <input type={"text"} placeholder='I am here'></input>
        <br></br>
        <button onClick={focusOnInput}>Submit</button>
    </div>

}

export default HookRef