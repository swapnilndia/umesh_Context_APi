import React from 'react'
import { useContext } from 'react'
import CountContext from '../context/countContext'

const Increase = () => {
    const { increment, count } = useContext(CountContext)
    console.log(count)
    return (
        <button onClick={() => increment()}>Increase</button>
    )
}

export default Increase