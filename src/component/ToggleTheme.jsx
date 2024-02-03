import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ToggleTheme = () => {
    const { color, setColor, setBackgroundColor } = useContext(ThemeContext)
    console.log(color)
    return (
        <button onClick={() => {
            setColor(prev => {
                if (prev === 'red') {
                    return 'yellow'
                }
                else {
                    return 'red'
                }
            })
            setBackgroundColor(prev => {
                if (prev === 'green') {
                    return 'blue'
                }
                else {
                    return 'green'
                }
            })
        }}>ToggleTheme</button>
    )
}

export default ToggleTheme