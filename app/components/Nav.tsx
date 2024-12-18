"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Nav() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.to("nav", {
      backgroundColor: "#000000",
      scrollTrigger: {
        trigger: "#nav",
        start: "center+=300 center",
        end: "bottom+=200 top ",
        scrub: true,
      },
    });
  });

  return (
    <header className="fixed w-full z-50">
      <nav
        id="nav"
        className="flex justify-between items-center h-[100px] w-full px-[25px] md:px-[50px]"
      >
        <div>
          <Link href={"/"} className="select-none">
            <Image
              src={logo}
              alt="Nuogix Logo"
              className="hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
        <div className="text-white text-base">
          <Link href={"#sign-up"} className="hover:underline">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
