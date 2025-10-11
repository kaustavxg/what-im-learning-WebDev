import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './App2.jsx'
import Visible from './Visible.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App2 />
        {/* <Visible/> */}
    </StrictMode>
    
  
)
