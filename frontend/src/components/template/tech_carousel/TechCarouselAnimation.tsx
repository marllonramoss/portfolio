"use client";

import React from "react";
import { Tech } from "@/services/techService";

interface TechCarouselAnimationProps {
  techs: Tech[];
}

const TechCarouselAnimation = ({ techs }: TechCarouselAnimationProps) => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className="flex animate-scroll">
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-3 flex items-center justify-center h-12 mx-2 min-w-[100px]"
          >
            <span className="text-white text-sm font-medium">{tech.nome}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default TechCarouselAnimation;
