import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { HeroStackSection } from "./sections/HeroStackSection/HeroStackSection";
import { LogoTitleSection } from "./sections/LogoTitleSection/LogoTitleSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const SaasFuturisticApp = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full relative bg-[#0B0121]">
      <NavbarSection />
      <HeroStackSection />
      <LogoTitleSection />
      <FeaturesSection />
      <HeroSection />
      <FooterSection />
    </main>
  );
};
