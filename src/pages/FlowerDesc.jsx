/* eslint-disable react/no-unknown-property */
import { flower } from "../assets"

export default function LoginPenjual() {
    return (
        <div className="text-[#6D8B74] mx-auto w-auto h-screen grid mt-[50px] md:mt-[-50px] gap-7 justify-center content-center">
            <h1 className="flex text-3xl md:text-5xl md:px-4">Flower name</h1>
            <div className=" bg-white flex flex-col gap-5 md:grid md:grid-cols-2 max-w-[1000px] rounded-md justify-items-center p-[20px] md:py-[30px]">
                <img src={flower} alt="flower-pict" />
                <p className="text-justify md:pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}