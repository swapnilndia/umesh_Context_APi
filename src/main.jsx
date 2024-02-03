import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountContextProvider from './context/CountContextProvider.jsx'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ThemeContextProvider>
      <CountContextProvider>
        <App />
      </CountContextProvider>

    </ThemeContextProvider>


)
