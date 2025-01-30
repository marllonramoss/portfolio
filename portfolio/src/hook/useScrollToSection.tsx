import { useEffect } from "react";
import { gsap } from "gsap";

const useScrollToSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => section.classList.remove("active"));

    const firstSection = document.querySelector(".section");
    if (firstSection) {
      firstSection.classList.add("active");
    }

    let isScrolling = false;
    const offset = 48;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleScroll = (delta: number) => {
      if (isScrolling) return;

      isScrolling = true;

      const currentSection = document.querySelector(".section.active");
      const nextSection = currentSection?.nextElementSibling;
      const previousSection = currentSection?.previousElementSibling;

      if (delta > 0 && nextSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: nextSection, offsetY: offset },
          ease: "power4.out",
          onComplete: () => {
            currentSection.classList.remove("active");
            nextSection.classList.add("active");
            isScrolling = false;
          },
        });
      } else if (delta < 0 && previousSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: previousSection, offsetY: offset },
          ease: "power4.out",
          onComplete: () => {
            currentSection.classList.remove("active");
            previousSection.classList.add("active");
            isScrolling = false;
          },
        });
      } else {
        isScrolling = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      handleScroll(e.deltaY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        handleScroll(1);
      } else if (e.key === "ArrowUp") {
        handleScroll(-1);
      }
    };

    // Captura o início do toque
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    // Captura o final do toque e decide se vai rolar para cima ou para baixo
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        // Garante que só considera gestos mais longos
        handleScroll(deltaY);
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
};

export default useScrollToSection;
