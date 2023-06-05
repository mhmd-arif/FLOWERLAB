import { Link } from "react-router-dom";
import { imageuser } from "../assets";
import { flowerSquare } from "../assets";

export default function ProfilePenjual() {
    return (
        <div className="text-[#6D8B74] mx-auto w-auto h-screen flex flex-col gap-7 m-[-40px] justify-center">
            <div className="w-full md:w-1/4 bg-[#CFC9C1] absolute w-363 min-h-screen left-0 flex items-center justify-center flex-col p-3 overflow-y-hidden">
                <h1 className="text-black text-xl font-medium">Profile Penjual</h1>
                <div className="flex justify-center mt-7">
                    <img src={imageuser} alt="image-user" />
                </div>
                <label className="text-left mt-7 text-black"> Email</label>
                    <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-[#FFFFFF] dark:placeholder-gray-600 dark:text-black" />
                    <label className="text-left mt-7 text-black"> Nama</label>
                    <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <label className="text-left mt-7 text-black"> Kontak</label>
                    <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <div className="flex justify-center gap-2 mt-8">
                        <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md mt-5">Edit Profile</button>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}
