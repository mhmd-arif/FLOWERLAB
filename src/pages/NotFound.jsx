/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div class="text-[#6D8B74] mx-auto w-auto h-screen flex flex-col gap-7 justify-center content-center">
            <h1 class="text-8xl">Oops!</h1>
            <p class="text-5xl">404 - Page Not Found</p>
            
            <Link to='/'><button class="bg-[#6D8B74] text-white text-3xl px-5 py-2 rounded-md">HomePage</button></Link>
        </div>
    )
}