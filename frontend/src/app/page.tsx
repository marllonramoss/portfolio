import HeroSection from "@/components/template/hero_section/HeroSection";
import Second_section from "@/components/template/second_section/Second_section";
import ExperienceSection from "@/components/template/experience_section/ExperienceSection";
import StacksSection from "@/components/template/stacks_section/StacksSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <Second_section />
      <ExperienceSection />
      <StacksSection />
    </main>
  );
}
