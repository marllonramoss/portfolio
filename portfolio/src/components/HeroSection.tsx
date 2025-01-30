import React from "react";

type HeroSectionProps = {
  className?: string;
};

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <div
      className={`h-[calc(100vh-48px)] bg-zinc-950 flex justify-center items-center ${
        className ?? ""
      } `}
    >
      <span className="text-white">HeroSection</span>
    </div>
  );
};

export default HeroSection;
