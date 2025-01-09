import Link from "next/link";
import React from "react";
import { Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/RhymesDisplayTrial-Light.otf",
});

const noto_Serif_Display = Noto_Serif_Display({
  weight: ["400", "500", "600"],
});

const Footer = () => {
  return (
    <div className={`w-full  flex-col container  `}>
      <div className="w-full flex justify-between md:flex-row flex-col md:gap-0 gap-5 ">
        {/* LEFT */}
        <div className="w-3/5 bg-white">
          <span
            className={`text-left  ${myFont.className} text-2xl md:text-3xl  text-black `}
          >
            Marllon Ramos is a software engineer specializing in full stack web
            development. I enjoy creating user-friendly applications and am
            always eager to learn new things. Let’s connect!
          </span>
        </div>
        {/* RIGHT */}
        <div>
          <div className="w-[171px] ">
            <span className="font-semibold">More</span>
            <p>Techs</p>
            <p>Carreer</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white h-16 mt-16">
        <Link href={"#"} className="uppercase font-semibold tracking-wide">
          linkedin
        </Link>
        <span className="uppercase font-semibold p-1 hover:cursor-pointer">
          contatomarllonramos@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
