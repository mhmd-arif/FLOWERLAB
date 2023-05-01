/* eslint-disable react/no-unknown-property */
import { flower } from "../assets"

export default function NotFound() {
    return (
        <div className="text-[#6D8B74]  mx-auto w-auto h-screen grid gap-7 justify-center content-center">
            <h1 className="flex text-3xl px-4">Flower name</h1>
            <div className=" bg-white grid grid-cols-2 max-w-[1000px] py-5 rounded-md justify-items-center ">
                <img src={flower} alt="flower-pict"/>
                <p className="text-justify pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}