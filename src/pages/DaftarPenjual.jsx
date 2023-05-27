import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function DaftarPenjual() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] md:mt-[-50px] gap-7 justify-center content-center">
      <div className="bg-white flex flex-col md:grid max-w-[1000px] rounded-md p-[20px] md:py-[30px]">
        <h1 className="flex text-3xl md:text-5xl md:px-4">Hai, daftar di sini!</h1>
        <label className="text-left mt-7"> Email</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan email Anda" required />
        <label className="text-left mt-7">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan password Anda"
            required
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute top-7 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          />
        </div>
        <label className="text-left mt-7"> Nama</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama Anda" required />
        <label className="text-left mt-7"> Kontak</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nomor handphone Anda" required />
        <div className="flex justify-center gap-2 mt-10">
            <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Masuk</button>
            <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Daftar</button>
        </div>
      </div>
    </div>
  );
}
