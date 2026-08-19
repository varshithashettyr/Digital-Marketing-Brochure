import { Hero } from "@/components/landing/Hero";
import { ServicesExplorer } from "@/components/landing/ServicesExplorer";
import { DifferentiatorsStrip } from "@/components/landing/DifferentiatorsStrip";
import { CtaSection } from "@/components/landing/CtaSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SpeakToUs } from "@/components/landing/SpeakToUs";
import { useLenis } from "@/hooks/use-lenis";

export default function App() {
  useLenis();
  return (
    <>
      <main>
        <Hero />
        <ServicesExplorer />
        <div className="h-1.5 w-full" style={{ background: "#61a13c" }} aria-hidden />
        <DifferentiatorsStrip />
        <CtaSection />
        <SiteFooter />
      </main>
      <SpeakToUs />
    </>
  );
}