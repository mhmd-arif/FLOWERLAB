/* eslint-disable react/no-unknown-property */
import { flower } from "../assets"
import { Navbar } from "../assets/components"

export default function ProductDesc() {
    return (
        <>
        <Navbar/>
        <div className="text-[#6D8B74] mx-auto w-auto h-screen grid gap-7 justify-center content-center">
            <div className="bg-white flex flex-col gap-5 md:grid md:grid-cols-2 max-w-[1000px] rounded-md p-[20px] md:py-[30px]">
            <div>
                <h1 className="text-3xl md:px-4 text-left">Nama Produk</h1>
                <h1 className="text-3xl md:px-4 text-left text-lg mt-3">Jenis Bunga</h1>
                <h1 className="text-3xl md:px-4 text-left text-lg mt-3 fixed-height">Deskripsi Bunga</h1>
                <h1 className="text-3xl md:px-4 text-left text-lg mt-3">Harga Bunga</h1>
                <h1 className="text-3xl md:px-4 text-left text-lg mt-3">Kontak Penjual</h1>
            </div>
            <div>
                <img src={flower} alt="flower-pict" />
            </div>
            </div>
        </div>
        </>
    )
}