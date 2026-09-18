import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import LogoStrip from "@/components/LogoStrip";
import Founders from "@/components/Founders";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import StickyContactButton from "@/components/StickyContactButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed navigation */}
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        {/* Skip to main content link (keyboard accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bone focus:text-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>

        {/* 1 — Hero */}
        <Hero />

        {/* Mobile sticky contact — appears after hero scroll */}
        <StickyContactButton />

        {/* 2 — Showcase (SIGNATURE) */}
        <Showcase />

        {/* 3 — Proof / Metrics */}
        <Metrics />

        {/* 5 — How we work (SIGNATURE) */}
        <Process />

        {/* 6 — Client strip */}
        <LogoStrip />

        {/* 7 — Services */}
        <Services />

        {/* 8 — Portfolio */}
        <Portfolio />

        {/* 9 — Who's behind RYVEN */}
        <Founders />

        {/* 10 — Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
