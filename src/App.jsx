import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'

import Increase from './component/Increase'
import Decrease from './component/Decrease'
import { useContext } from 'react'
import CountContext from './context/countContext'
import ThemeContext from './context/ThemeContext'
import ToggleTheme from './component/ToggleTheme'
function App() {
  const { count, setCount } = useContext(CountContext)
  const { color, backgroundColor } = useContext(ThemeContext)

  return (
    <div style={{ color, backgroundColor: backgroundColor }}>
      <Counter />
      <Increase />
      <Decrease />
      <ToggleTheme></ToggleTheme>
      <button onClick={() => setCount(count + 100)}>Add 100</button>
    </div>


  )
}

export default App
