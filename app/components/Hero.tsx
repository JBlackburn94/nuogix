import Image from "next/image";
import heroBg from "../../public/nuogix-hero-bg.webp";

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden relative">
      <Image
        src={heroBg}
        alt="Hero section background with the Nuogix N logo"
        className="absolute z-10 opacity-[95%] backdrop-blur-sm"
      />
      <video autoPlay muted loop className="absolute z-0">
        <source src="/nuogix-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
