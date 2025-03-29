"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const techs = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "MongoDB" },
  { name: "GraphQL" },
  { name: "Next.js" },
  { name: "TailwindCSS" },
];

const TechCarousel = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/90 via-black/50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/90 via-black/50 to-transparent z-10"></div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={8}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={20000}
        className="w-full cursor-grab active:cursor-grabbing"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
      >
        {[...techs, ...techs].map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-3 flex items-center justify-center h-12">
              <span className="text-white text-sm font-medium">
                {tech.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechCarousel;
