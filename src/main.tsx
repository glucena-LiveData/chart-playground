import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PercentFCOS from './PercentFCOS.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /><br /><br />
    <PercentFCOS />
  </StrictMode>,
)
