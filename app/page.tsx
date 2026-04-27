import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { PainSection } from "@/components/sections/PainSection";
import { PlatformPreviewSection } from "@/components/sections/PlatformPreviewSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <FeaturesSection />
      <PlatformPreviewSection />
      <IdentitySection />
      <WaitlistSection />
      <FinalCtaSection />
    </main>
  );
}
