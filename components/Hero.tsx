"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center section-spacing pt-24 sm:pt-32 md:pt-40 pb-12 md:pb-24"
    >
      <div className="container-ryven">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-8 items-start"
        >
          {/* Left column — headline + CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="signal-dot" aria-hidden="true" />
              <span className="mono-label">
                AI Creative & Commercial Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-sans font-medium text-display-lg text-bone leading-[1.02] tracking-[-0.02em]"
            >
              Creative technology
              <br className="hidden sm:inline" />{" "}
              for brands{" "}
              <em className="font-serif not-italic italic font-normal">
                moving faster.
              </em>
            </motion.h1>

            {/* Supporting statement */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-base sm:text-lg text-slate max-w-lg leading-relaxed"
            >
              We produce high-impact ads, product visuals, and video campaigns
              that let ambitious brands operate at a different speed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <Link
                href="#work"
                className="font-mono text-mono-label text-bone tracking-[0.08em] uppercase border border-bone px-6 py-3.5 sm:py-3 text-center justify-center hover:bg-bone hover:text-ink transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px] flex items-center"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                See our work
              </Link>
              <a
                href="https://tally.so/r/EkOeVB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-mono-label text-slate tracking-[0.08em] uppercase border border-[rgba(0,0,0,0.15)] px-6 py-3.5 sm:py-3 text-center justify-center hover:border-bone hover:text-bone transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px] flex items-center"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Start a project
              </a>
            </motion.div>

            {/* Horizontal mono readout strip */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 border-t border-[rgba(0,0,0,0.1)] mt-2 md:mt-4"
            >
              <ReadoutItem label="Status" value="Available" live />
              <span className="w-px h-4 bg-[rgba(0,0,0,0.1)] hidden sm:block" aria-hidden="true" />
              <ReadoutItem label="Location" value="Global" />
              <span className="w-px h-4 bg-[rgba(0,0,0,0.1)] hidden sm:block" aria-hidden="true" />
              <ReadoutItem label="Output" value="8+ Ads" />
            </motion.div>
          </div>

          {/* Right column — viewfinder media frame */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 lg:col-start-8 w-full max-w-md mx-auto lg:max-w-none"
          >
            {/* Viewfinder frame — no border-radius, corner marks */}
            <div
              className="viewfinder relative w-full aspect-[4/5] bg-surface overflow-hidden flex items-center justify-center"
              aria-label="Ryven Studio Reel"
              role="img"
            >
              {/* Corner marks — all four */}
              <span className="vf-tl z-20" aria-hidden="true" />
              <span className="vf-tr z-20" aria-hidden="true" />
              <span className="vf-bl z-20" aria-hidden="true" />
              <span className="vf-br z-20" aria-hidden="true" />

              {/* Video visual — poster shows instantly while video streams */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/posters/air-jordan.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/Air jordan ugc.mp4" type="video/mp4" />
              </video>

              {/* Viewfinder info strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4 py-2 border-t border-[rgba(0,0,0,0.1)] bg-white/70 backdrop-blur-sm z-10">
                <span className="mono-label">REC</span>
                <span className="flex items-center gap-2">
                  <span className="signal-dot" aria-hidden="true" />
                  <span className="mono-label text-bone">LIVE FEED</span>
                </span>
                <span className="mono-label">24 FPS</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom page indicator - hidden on mobile to avoid overlapping content */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="mono-label">Scroll</span>
        <span className="w-px h-8 bg-[rgba(0,0,0,0.15)]" aria-hidden="true" />
      </div>
    </section>
  );
}

// Small reusable readout item
function ReadoutItem({
  label,
  value,
  live,
}: {
  label: string;
  value: string;
  live?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="mono-label" style={{ fontSize: "0.6rem" }}>
        {label}
      </span>
      <div className="flex items-center gap-1.5">
        {live && <span className="signal-dot" style={{ width: 5, height: 5 }} aria-hidden="true" />}
        <span className="font-mono text-xs text-bone uppercase tracking-[0.06em]">
          {value}
        </span>
      </div>
    </div>
  );
}
