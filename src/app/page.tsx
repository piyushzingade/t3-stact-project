import Image from "next/image";
import TestimonialsCarousel from "~/components/mvpblocks/testimonials-marquee";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import NavBar from "./_components/navbar";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      {/* Hero Section with Fullscreen Background */}
      <section className="relative h-screen w-full">
        {/* Background Image (full screen) */}
        <Image
          src="/samay.jpg"
          alt="India Got latent"
          fill // replaces layout="fill"
          className="object-cover"
          priority
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Navbar above image */}
        <div className="absolute top-0 right-0 left-0 z-10">
          <NavBar className="text-white" />
        </div>

        {/* Optional text or content centered */}
        {/* <div className="relative z-10 flex h-full items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to India Latent
          </h1>
        </div> */}
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-300 text-black ">
        <TestimonialsCarousel />
      </section>
    </HydrateClient>
  );
}
