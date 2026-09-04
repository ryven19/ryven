"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      aria-label="About Ryven"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left — pull-quote + approach */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <motion.div variants={fadeUp}>
              <p className="mono-label mb-3">// ABOUT</p>
              {/* Serif pull-quote */}
              <blockquote className="border-l border-[rgba(0,0,0,0.1)] pl-6">
                <p
                  className="font-serif italic text-bone leading-[1.2]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  "We think the best advertising happens when innovative AI
                  tools empower you to{" "}
                  <em className="not-italic font-normal" style={{ textDecoration: "underline", textDecorationColor: "var(--signal)", textUnderlineOffset: "4px" }}>
                    create without limits.
                  </em>
                  "
                </p>
              </blockquote>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <p className="font-sans text-base text-slate leading-relaxed">
                Ryven is a focused studio with a specific craft: we produce
                AI-driven creative campaigns, high-converting ads, and cinematic product
                visuals that deliver real impact. We partner with ambitious brands on
                commercials that demand elevated creative direction and rapid delivery.
              </p>
              <p className="font-sans text-base text-slate leading-relaxed">
                Our workflow runs on one core principle: understand your brand voice,
                craft standout creative, and ship work that captures attention.
              </p>
            </motion.div>

            {/* Founder/team mono label */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 pt-6 border-t border-[rgba(0,0,0,0.1)]"
            >
              <div className="w-8 h-8 bg-surface border border-[rgba(0,0,0,0.1)] flex items-center justify-center flex-shrink-0">
                <span className="mono-label" style={{ fontSize: "0.55rem" }}>
                  [R]
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm text-bone">
                  [Founder Name] — placeholder
                </span>
                <span className="mono-label">Founder, Ryven Studio</span>
              </div>
            </motion.div>
          </div>

          {/* Right — corner-marked team/founder image placeholder */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 lg:col-start-8"
          >
            <div
              className="viewfinder relative w-full aspect-[3/4] bg-surface flex flex-col items-center justify-center gap-3"
              role="img"
              aria-label="[FOUNDER / TEAM PHOTO — placeholder]"
            >
              {/* Corner marks — all four */}
              <span className="vf-tl" aria-hidden="true" />
              <span className="vf-tr" aria-hidden="true" />
              <span className="vf-bl" aria-hidden="true" />
              <span className="vf-br" aria-hidden="true" />

              {/* Placeholder content */}
              <span className="mono-label text-center px-8">
                [ FOUNDER / TEAM PHOTO ]
              </span>
              <p className="font-sans text-sm text-slate text-center max-w-[180px] leading-relaxed">
                Replace with actual portrait or team image
              </p>

              {/* Caption strip */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 border-t border-[rgba(0,0,0,0.1)]">
                <span className="mono-label">Ryven Studio</span>
                <span className="mono-label">[City, Country]</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
