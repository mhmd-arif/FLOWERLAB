/* eslint-disable react/no-unknown-property */
import { flower } from "../assets"
import { useLocation } from "react-router-dom"

export default function FlowerDesc() {
    const location = useLocation();
    console.log(location.state.flower_data)
    const flowerData = location.state.flower_data;

    return (
        <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] md:mt-[-50px] gap-7 justify-center content-center">
            <h1 className="flex text-3xl md:text-5xl md:px-4">{flowerData.genus}</h1>
            <div className=" bg-white flex flex-col gap-5 md:grid md:grid-cols-2 max-w-[1000px] rounded-md justify-items-center p-[20px] md:py-[30px]">
                <img src={flowerData.imageUrl} alt="flower-pict" />
                <div className="ml-[]">
                    <p className="text-justify ">Genus : {flowerData.genus}</p>
                    <p className="text-justify ">Family : {flowerData.family}</p>
                    <p className="text-justify ">Deskripsi :</p>
                    <p className="text-justify ">   {flowerData.description}</p>
                </div>
                
            </div>
        </div>
    )
}