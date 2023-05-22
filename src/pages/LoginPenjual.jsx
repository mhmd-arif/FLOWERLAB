/* eslint-disable react/no-unknown-property */
import { flower, user } from "../assets"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function LoginPenjual() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] md:mt-[-50px] gap-7 justify-center content-center">
        <div className="bg-white flex flex-col gap-2 md:flex-row rounded-md p-[20px] bigger-background">
            <div className="w-full md:w-1/2">
                <img src={user} alt="user-pict" className="bigger-image" />
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="flex text-3xl ">Halo!</h4>
                <label className="flex mt-5"> Email</label>
                <input type="text" class="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan email Anda" required />
                <label className="flex mt-5"> Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan password Anda"
                        required
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="absolute top-5 right-2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                <label className="flex text-xs mt-2"> Lupa password</label>
                <div className="flex justify-end mt-5 mb-7">
                    <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Masuk</button>
                </div>
                <label className="text-center mt-5"> Belum punya akun?  <span className="underline font-bold ml-2"> Daftar di sini!</span></label>
            </div>
        </div>
    </div>
)
}
