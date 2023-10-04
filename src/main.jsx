import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import CoinDetail from './pages/CoinDetail.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='coin/:coinId' element={<CoinDetail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
