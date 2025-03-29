"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-2 `}
    >
      <div
        className={`max-w-7xl mx-auto px-4 h-16 rounded-3xl ${
          isScrolled
            ? "bg-zinc-400/20 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between  px-4 h-full">
          <div className="text-white text-xl font-bold tracking-widest">
            MARLLON
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
