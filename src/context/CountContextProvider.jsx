import React, { useState } from 'react'
import CountContext from './countContext'

const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(90)
    const increment = () => {
        setCount(prev => prev + 1)
    }
    const decrement = () => {
        setCount(prev => prev - 1)
    }


    return (
        <CountContext.Provider value={{ count, increment, decrement,setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextProvider