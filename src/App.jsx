import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { 
  NotFound,
  FlowerDesc,
  Home,
  DaftarPenjual,
  Marketplace,
  LoginPenjual,
  ProductDesc,
  AddProduct,
  ProfilePenjual,
  EditProfile,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/flower-description" element={<FlowerDesc />} />
        <Route path="/daftar-penjual" element={<DaftarPenjual />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login-penjual" element={<LoginPenjual />} />
        <Route path="/product-description" element={<ProductDesc />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/profile-penjual" element={<ProfilePenjual />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
