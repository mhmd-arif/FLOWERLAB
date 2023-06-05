import { Link } from "react-router-dom";
import { imageuser } from "../assets";
import { flowerSquare } from "../assets";

export default function ProfilePenjual() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-[#CFC9C1] p-5 h-screen justify-center">
        <h1 className="text-black text-xl font-medium">Profile Penjual</h1>
        <div className="flex justify-center mt-7">
          <img src={imageuser} alt="image-user" />
        </div>
        <label className="text-left mt-7 text-black">Email</label>
        <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-[#FFFFFF] dark:placeholder-gray-600 dark:text-black"></div>
        <label className="text-left mt-7 text-black">Nama</label>
        <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></div>
        <label className="text-left mt-7 text-black">Kontak</label>
        <div className="mt-2 bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></div>
        <div className="flex justify-center gap-2 mt-8">
          {/* <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md mt-5">Edit Profile</button> */}
        </div>
      </div>
      <div className="w-3/4 pl-5 flex-wrap">
        <h1 className="text-left mb-3"><strong>Produk yang telah dijual :</strong></h1>
        <button className="bg-[#6D8B74] text-white text-1xl px-4 py-2 rounded-md mt-3 mb-10 flex flex-col">+ Tambah Produk</button>
        <div className="flex gap-4">
            <div className="bg-white w-52 h-1000 rounded-sm flex flex-col p-[10px] gap-4">
                <img src={flowerSquare} alt="flowersquare" className="w-full h-40 object-cover" />
                <div className="flex flex-col items-start">
                <p><strong>Nama produk</strong></p>
                <p className="overflow-hidden h-12 text-sm text-gray-700">
                    Deskripsi produk
                </p>
                </div>
                <div className="flex flex-col items-end">
                <p>Penjual</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
