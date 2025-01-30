"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import useScrollToSection from "@/hook/useScrollToSection";

// Registra o plugin do GSAP uma vez, antes de qualquer renderização
gsap.registerPlugin(ScrollToPlugin);

const HomePage = () => {
  useScrollToSection();

  return (
    <div className="flex flex-col container">
      <HeroSection className="section active" />{" "}
      {/* Adicione as classes aqui */}
      <SecondSection className="section" /> {/* Adicione a classe aqui */}
    </div>
  );
};

export default HomePage;
