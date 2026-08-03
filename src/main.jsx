import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useGLTF } from '@react-three/drei'
import './index.css'
import App from './App.jsx'

// Self-host Draco decoder to remove runtime CDN dependency
// This ensures reliable loading of Draco-compressed models
useGLTF.setDecoderPath('/draco/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)