import HeroSection from "@/components/HeroSection";
import SectionIntro from "@/components/SectionIntro";
import SectionTransition from "@/components/SectionTransition";
import SectionBypass from "@/components/SectionBypass";
import SectionFeatures from "@/components/SectionFeatures";
import SectionDirections from "@/components/SectionDirections";
import SectionConclusion from "@/components/SectionConclusion";
import GameSection from "@/components/GameSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SectionIntro />
      <SectionTransition />
      <SectionBypass />
      <SectionFeatures />
      <SectionDirections />
      <SectionConclusion />
      <GameSection />
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        Chương 3 — Chủ nghĩa Xã hội Khoa học · Bài thuyết trình nhóm
      </footer>
    </main>
  );
};

export default Index;
