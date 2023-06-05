import { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from '../assets/components';

export default function EditProfile() {
  return (
    <>
    <Navbar/>
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] gap-7 justify-center content-center">
      <div className="bg-white flex flex-col md:grid w-[500px] rounded-md p-[20px] md:py-[30px]">
        <h2 className="text-xl md:text-3xl">Edit Profile</h2>
        <label className="text-left mt-7"> Email</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Masukkan email Anda" required />
        <label className="text-left mt-7"> Username</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama Anda" required />
        <label className="text-left mt-7"> Kontak</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nomor handphone Anda" required />
        <div className="flex justify-center gap-2 mt-8">
            <Link to="/login-penjual">
            <button type="submit" className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Daftar</button>
            </Link>
            <Link to="/login-penjual">
            <button type="cancel" className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Cancel</button>
            </Link>
        </div>
      </div>
    </div>
    </>
  );
}
