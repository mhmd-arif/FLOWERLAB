/* eslint-disable react/no-unknown-property */
import { FileInput } from "../assets/components"
// import Navbar from "../assets/components"
import Navbar from "../assets/components/Navbar.jsx";

export default function Home() {
    return (
        <>
        <Navbar/>   
            <div className="text-[#6D8B74] mx-auto w-auto h-screen flex flex-col gap-7 justify-center content-center">
                <h1 className="font-bold text-[#000A01] text-2xl md:text-5xl lg:text-6xl">Selamat Datang di Flowerlab!</h1>
                    <form class="flex justify-center items-center">   
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-[280px] md:w-[500px]">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari bunga yang kamu inginkan" required />
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>
                    <div>
                    <FileInput/>
                </div>
                <h1 className="font-bold text-[#000A01] text-md md:text-2xl">Atau kunjungi Flowerlab Marketplace</h1>
            </div>
        </>
    )
}