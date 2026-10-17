import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import './styles/sections.css'

document.documentElement.classList.add('js') // lets CSS hide .reveal items only when JS is running
createRoot(document.getElementById('root')).render(<App />)
