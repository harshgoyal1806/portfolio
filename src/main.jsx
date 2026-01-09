import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './components/context/themeContext'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
       <App />
  </ThemeContextProvider>
    
  
)
