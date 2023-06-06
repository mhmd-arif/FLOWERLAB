import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
  
    return (
      <div className='flex justify-between items-center px-[50px] h-[50px] bg-[#5F7161] text-white'>
        <div className='font-extrabold'>
            <Link to="/">FlowerLab</Link>
        </div>
        <div className='flex gap-7 font-medium'>
            <Link to="/marketplace">marketplace</Link>
            <Link to="/login-penjual">Login</Link>
        </div>
      </div>
    );
  }