import { useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HookRef() {

    //! Avoid this approach: directly manipulating the DOM is not recommended in React
    // function focusOnInput(){
    //     document.getElementById('name').focus()
    // } 

    //! Recommended approach: use refs (useRef)
    //# useRef allows you to keep a reference to a DOM element or value.
    //# Changing the ref does NOT trigger a component re-render.
    const inputRef = useRef();

    // Function to focus the input using the ref
    function focusOnInput() {
        inputRef.current.focus();
    }

    return <div>
        <label>Sign up: </label>
        <input ref={inputRef} type="text" placeholder='reference is here' />
        <br />
        
        <label>Sign in: </label>
        <input type="text" placeholder='I am here' />
        <br />
        <button onClick={focusOnInput}>Submit</button>
    </div>

}

export default HookRef
