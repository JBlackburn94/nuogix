"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import hero from "../../public/logo.svg";
// import Link from "next/link";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(() => {
    gsap.to("#cover", {
      backgroundColor: "#000000",
      scrollTrigger: {
        trigger: "#cover",
        start: "top+=400 top+=300",
        end: "top+=500 top+=100",
        scrub: true,
      },
    });

    gsap.to("#hero", {
      opacity: 1,
      delay: 12,
    });
  });

  return (
    <section className="h-screen overflow-x-hidden bg-black relative">
      <div className="grid h-full w-full grid-cols-1 grid-rows-5 absolute z-20">
        <div
          id="hero"
          className="flex flex-col justify-center items-center text-white gap-4 row-span-4 col-span-1 opacity-0  m-5"
        >
          <Image src={hero} alt="Nuogix logo" className="scale-125" />
          <p>Coming Soon.</p>
        </div>
        {/* <div className="flex justify-center items-center text-white font-light row-span-1 col-span-1 m-5">
          <Link href="#gallery" className="hover:underline">
            Scroll down to find out more.
          </Link>
        </div> */}
      </div>
      <video
        autoPlay
        muted
        playsInline
        className="absolute object-cover h-full w-full z-10"
      >
        <source src="/nuogix-hero.mp4" />
        Your broswer does not support the video tag.
      </video>
    </section>
  );
}
