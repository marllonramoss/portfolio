import React from "react";
import CardList from "./CardList";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/BigerOver-6Y4wx.otf",
});

type SecondSectionProps = {
  className?: string;
};

const SecondSection = ({ className }: SecondSectionProps) => {
  return (
    <div
      className={`flex bg-zinc-950 h-[calc(100vh-48px)] justify-between items-center ${
        className ?? ""
      } flex-col relative`}
    >
      <span
        className={`${myFont.className} text-zinc-600/10 absolute top-28 left-4 text-9xl`}
      >
        SHOWCASE
      </span>

      <CardList />
    </div>
  );
};

export default SecondSection;
