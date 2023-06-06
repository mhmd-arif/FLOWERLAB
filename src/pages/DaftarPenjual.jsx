import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Navbar } from '../assets/components';

export default function DaftarPenjual() {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://flowerlab-backend-node.vercel.app/auth/signup", {
        email: email,
        password : password,
        username: username,
        contact: contact,
      });
      console.log(email, password, username, contact)
      navigate("/login-penjual");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
    <Navbar/>
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid gap-7 justify-center content-center">
      <p className="text-base text-red-500 text-center">{msg}</p>
      <form onSubmit={saveUser} className="bg-white flex flex-col md:grid max-w-[1000px] rounded-md p-[20px] md:py-[30px]">
        <h1 className="flex text-3xl md:text-5xl md:px-4">Hai, daftar di sini!</h1>
        <label className="text-left mt-7"> Email</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required />
        <label className="text-left mt-7">Password</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan password Anda"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute top-7 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          />
        </div>
        <label className="text-left mt-7"> Username</label>
        <input type="text" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Masukkan nama Anda" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required />
        <label className="text-left mt-7"> Kontak</label>
        <input  className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Masukkan nomor handphone Anda"
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)} 
          required />
        <div className="flex justify-center gap-2 mt-8">
            <button type="submit" className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Daftar</button>
        </div>
        <label className="text-center mt-5">
            Sudah punya akun?
            <Link className="" to="/login-penjual">
                <span className="underline font-bold" style={{ marginLeft: '2px' }}>
                    Masuk!
                </span>
            </Link>
        </label>
      </form>
    </div>
    </>
  );
}
