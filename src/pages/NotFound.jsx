/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-[#6D8B74] mx-auto w-auto h-screen flex flex-col gap-7 m-[-40px] justify-center content-center">
            <h1 className="text-7xl md:text-9xl">Oops!</h1>
            <p className="text-3xl md:text-5xl">404 - Page Not Found</p>
            <Link to='/'><button class="bg-[#6D8B74] text-white text-2xl px-4 py-2 rounded-md">Homepage</button></Link>
        </div>
    )
}