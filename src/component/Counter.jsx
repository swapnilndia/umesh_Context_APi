import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/countContext'

const Counter = () => {
    const { count } = useContext(CountContext)
console.log(count)
    return (
        <div>{count}</div>
    )
}

export default Counter