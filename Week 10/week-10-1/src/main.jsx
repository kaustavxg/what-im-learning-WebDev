import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HookRef from './HookRef.jsx'
import Clock from './Clock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HookRef/> */}
    <Clock/>
  </StrictMode>,
)
