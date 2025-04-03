import React from "react";
import { Instrument_Serif } from "next/font/google";
import TechCarousel from "../tech_carousel/TechCarousel";
import ParticlesBackground from "./ParticlesBackground";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <section className="relative h-screen mt-20 bg-black">
      <ParticlesBackground />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-start mt-5 md:mt-96  items-center ">
          <span
            className={`text-white text-9xl ${instrumentSerif.className} w-full flex`}
          >
            Marllon Ramos
          </span>
          <span
            className={`text-white text-9xl ${instrumentSerif.className} w-full flex justify-end`}
          >
            Full stack Dev.
          </span>
          <div className="w-full mt-8">
            <TechCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
