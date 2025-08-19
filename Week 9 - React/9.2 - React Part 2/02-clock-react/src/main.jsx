import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App, StartClock} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StartClock/>
  </StrictMode>,
)
