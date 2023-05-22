import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { 
  NotFound,
  FlowerDesc,
  Home,
  DaftarPenjual,
  LoginPenjual,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/flower-description" element={<FlowerDesc />} />
        <Route path="/daftar-penjual" element={<DaftarPenjual />} />
        <Route path="/login-penjual" element={<LoginPenjual />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
