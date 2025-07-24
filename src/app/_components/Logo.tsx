"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Logo(){
    const router = useRouter();
    return (
        <div 
        onClick={() => {
            router.push("/")
        }}
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full cursor-pointer">
            <Image
            width={40}
            height={40}
            alt="logo"
            src="/logo.jpg"
            className="h-full w-full object-cover"
            />
        </div>
    )
}