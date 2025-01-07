"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white h-12 flex justify-center items-center transition-all duration-300  ${
        isScrolled ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-lg" : ""
      } z-50`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />
        <Link href={"#"}>
          <span className="uppercase text-black font-semibold">contact</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
