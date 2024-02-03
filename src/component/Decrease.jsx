import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/countContext'

const Decrease = () => {
    const { decrement, count } = useContext(CountContext)
    console.log(count)
    return (
        <button onClick={() => decrement()}>Decrease</button>
    )
}

export default Decrease