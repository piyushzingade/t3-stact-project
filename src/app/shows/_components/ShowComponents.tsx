"use client";
import type { Show } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function ShowComponent({ show }: { show: Show }) {
    const router = useRouter();
    return (
        <div 
        onClick={() => {
            router.push(`/shows/${show.id}`);
        }}
        className="relative flex flex-col overflow-clip rounded-2xl border border-black cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:scale-105">
        <div className="aspect-video max-h-36">
            <img
            height="200"
            //   width=""
            alt="Show Thumbnail"
            className="aspect-video object-cover"
            src={
                `${show.thumbnail}` ||
                "https://img.etimg.com/thumb/width-1600,height-900,imgsize-19296,resizemode-75,msid-122520137/tech/technology/indias-got-latent-row-samay-raina-appears-before-ncw-here-is-all-you-need-to-know.jpg"
            }
            //   src="https://img.etimg.com/thumb/width-1600,height-900,imgsize-19296,resizemode-75,msid-122520137/tech/technology/indias-got-latent-row-samay-raina-appears-before-ncw-here-is-all-you-need-to-know.jpg"
            />
        </div>
        <div className="absolute top-2 right-2 rounded-full bg-white px-1 text-xs">
            ₹ {show.price}
        </div>
        <div className="mt-10 p-2">
            <div className="text-lg text-neutral-900">{show.title}</div>
            <p className="text-md truncate text-neutral-700">{show.description}</p>
            <div className="text-md text-gray-800">{show.location}</div>
            <div className="text-xs text-neutral-500">
            {new Date(show.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}
            </div>
        </div>
        </div>
  );
}
