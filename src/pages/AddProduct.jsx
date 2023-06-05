/* eslint-disable react/no-unknown-property */
import { user } from "../assets"

export default function LoginPenjual() {
  return (
    <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] md:mt-[-50px]  justify-center content-center">
        <h1 className="text-left mb-3 text-lg font-bold">Menambahkan Produk</h1>
        <div className="bg-white flex flex-col gap-2 md:flex-row rounded-md p-[20px] bigger-background">
        <div className="w-full md:w-1/2 flex justify-center">
            <img src={user} alt="user-pict" className="bigger-image" />
        </div>  
            <div className="w-full md:w-1/2">
                <input type="text" class="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Produk" required />
                <input type="text" class="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Link Gambar Produk" required />
                <select className="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                    <option value="" disabled selected className="placeholder-text">Pilih Jenis Bunga</option>
                    <option value="option1">Cattleya</option>
                    <option value="option2">Vanda</option>
                    <option value="option3">Dendrobium</option>
                    <option value="option3">Phalaenopsis</option>
                </select>
                <input type="text" class="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Harga Produk" required />
                <input type="text" className="text-left mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[100px] p-2.5 pl-2 pt-2  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Deskripsi Produk" required />

            </div>
        </div>
    </div>
)
}
