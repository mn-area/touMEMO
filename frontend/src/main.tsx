import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TradeList from './TradeList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Calendar } from './Calender'
import { TradeGraph } from './TradeGraph'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<TradeList />} />
        <Route path="/Calender" element={<Calendar />} />
        <Route path="/TradeGraph" element={<TradeGraph />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
