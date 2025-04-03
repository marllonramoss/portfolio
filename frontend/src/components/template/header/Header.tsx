"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const menu = menuRef.current;
    const closeButton = closeButtonRef.current;
    if (!menu || !closeButton) return;

    if (isMenuOpen) {
      // Animar o menu principal mais rápido
      gsap.to(menu, {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Animar o botão de fechar
          gsap.fromTo(
            closeButton,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.2,
              ease: "back.out(1.7)",
            }
          );

          // Animar os itens do menu sequencialmente com menos delay
          gsap.fromTo(
            menuItemsRef.current,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.05,
              ease: "power2.out",
            }
          );
        },
      });
    } else {
      // Animar o botão de fechar
      gsap.to(closeButton, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "back.in(1.7)",
      });

      // Resetar a posição dos itens antes de fechar
      gsap.set(menuItemsRef.current, {
        y: 20,
        opacity: 0,
      });

      // Animar o menu principal mais rápido
      gsap.to(menu, {
        x: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

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

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
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

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-zinc-800/95 backdrop-blur-md transform translate-x-full opacity-0 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            ref={(el) => (menuItemsRef.current[0] = el)}
            href="/"
            className="text-white text-2xl font-medium hover:text-gray-300 transition-colors px-6 py-3 w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            ref={(el) => (menuItemsRef.current[1] = el)}
            href="/working"
            className="text-white text-2xl font-medium hover:text-gray-300 transition-colors px-6 py-3 w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            ref={(el) => (menuItemsRef.current[2] = el)}
            href="/working"
            className="text-white text-2xl font-medium hover:text-gray-300 transition-colors px-6 py-3 w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            About me
          </Link>
          <Link
            ref={(el) => (menuItemsRef.current[3] = el)}
            href="/working"
            className="text-white text-2xl font-medium hover:text-gray-300 transition-colors px-6 py-3 w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
