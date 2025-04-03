"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const nav = navRef.current;
    if (!header || !nav) return;

    // Definir o estado inicial
    gsap.set(nav, { padding: "2rem" });

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 0) {
            gsap.to(header, {
              backgroundColor: "rgba(161, 161, 170, 0.2)",
              backdropFilter: "blur(8px)",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(nav, {
              padding: "0.5rem 1rem",
              duration: 0.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(header, {
              backgroundColor: "transparent",
              backdropFilter: "none",
              boxShadow: "none",
              duration: 0.5,
              ease: "power2.out",
            });

            gsap.to(nav, {
              padding: "2rem",
              duration: 0.5,
              ease: "power2.out",
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-2">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 h-16 rounded-3xl">
        <nav
          ref={navRef}
          className="flex items-center justify-between h-full px-4"
        >
          <Link
            href="/"
            className="text-white text-xl font-bold tracking-widest hover:text-gray-300 transition-colors"
          >
            MARLLON
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/working"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/working"
                className="text-white hover:text-gray-300 transition-colors"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/working"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
