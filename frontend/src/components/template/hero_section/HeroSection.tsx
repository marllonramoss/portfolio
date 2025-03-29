"use client";

import React, { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { Instrument_Serif } from "next/font/google";
import TechCarousel from "../tech_carousel/TechCarousel";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles carregadas", container);
    },
    []
  );

  return (
    <section className="relative h-screen mt-20 bg-black">
      <div className="absolute inset-0 h-screen">
        <Particles
          id="tsparticles"
          className="h-full"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-start mt-96 items-center">
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
