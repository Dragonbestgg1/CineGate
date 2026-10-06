import Image from "next/image";
import NavBar from "./navbar";

export default function Header() {
    return(
        <main className="bg-purple-700 text-white flex flex-1 w-full h-20 items-center justify-between px-4 border-b rounded-b-2xl">
            <Image 
                src="/logo.png"
                alt="Logo"
                width={100}
                height={40}
                
            />
            <NavBar></NavBar>
        </main>
    )
}