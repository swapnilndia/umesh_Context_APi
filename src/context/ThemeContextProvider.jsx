import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ({ children }) => {
    const [color, setColor] = useState('red')
    const [backgroundColor, setBackgroundColor] = useState('green')

    return (
        <ThemeContext.Provider value = {{ color, backgroundColor, setBackgroundColor, setColor}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider