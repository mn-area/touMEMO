import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tradelist from './tradelist'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tradelist />
  </StrictMode>
)
