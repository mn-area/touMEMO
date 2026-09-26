import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TradeList from './TradeList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TradeList />
  </StrictMode>
)
