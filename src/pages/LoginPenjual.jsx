/* eslint-disable react/no-unknown-property */
import { flower, user } from "../assets"
import { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

export default function LoginPenjual() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState();
    const navigate = useNavigate();
    const [setCookie] = useCookies(["token"]);


    const login = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('https://flowerlab-backend-node.vercel.app/auth/signin',{
                email: email,
                password: password,
            });
            navigate("/profile-penjual");
            console.log(response.data.data.accessToken);
            const token = response.data.data.accessToken;
            setCookie("token", token, {
                path: "/",
            });
            
    
        } catch (error) {
            if(error.response){
                console.log(error.response.data.msg)
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] gap-7 justify-center content-center">
        <form onSubmit={login} className="bg-white flex flex-col gap-2 md:flex-row rounded-md p-[20px] bigger-background">
        <h1 class="text-center">{msg}</h1>
            <div className="w-full md:w-1/2">
                <img src={user} alt="user-pict" className="bigger-image" />
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="flex text-3xl ">Halo!</h4>
                <label className="flex mt-5"> Email</label>
                <input type="text" class="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Masukkan email Anda"
                    id="exampleFormControlInput1"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    required />
                <label className="flex mt-5"> Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="exampleFormControlInput2"
                        placeholder="Masukkan password Anda"
                        onChange={(e)=>setPassword(e.target.value)}
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
                    <button type="submit" className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md">Masuk</button>
                </div>
                <label className="text-center mt-5"> Belum punya akun?</label>
                <Link className="" to="/daftar-penjual">
                    <span className="underline font-bold ml-2"> 
                        Daftar di sini!
                    </span>
                </Link>
            </div>
        </form>
    </div>
)
}
