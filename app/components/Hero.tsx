"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  });

  return (
    <section className="h-screen overflow-x-hidden bg-black relative">
      <video
        autoPlay
        muted
        className="absolute object-cover h-full w-full z-10"
      >
        <source src="/nuogix-hero.mp4" />
      </video>
    </section>
  );
}
