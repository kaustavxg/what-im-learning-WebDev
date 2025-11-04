import React from 'react'
import { useThemeStore } from './ThemeStore'

function ZustandTheme() {
  
    const {theme, toggleTheme} = useThemeStore();

    return (
        <div className={theme}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Switch</button>
        </div>
    )
}

export default ZustandTheme