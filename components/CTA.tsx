"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="contact"
      aria-label="Contact — start a project"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-start gap-6 sm:gap-10 lg:max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="signal-dot" aria-hidden="true" />
            <span className="mono-label">Available for new projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-sans font-medium text-display-lg text-bone leading-[1.02] tracking-[-0.02em]"
          >
            Have something{" "}
            <em className="font-serif italic font-normal">worth building?</em>
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="font-sans text-base sm:text-lg text-slate max-w-xl leading-relaxed -mt-2 sm:-mt-4"
          >
            Tell us what you&#39;re working on. If it&#39;s the kind of thing we
            build, we&#39;ll be direct about whether we&#39;re the right team
            for it.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://tally.so/r/EkOeVB"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-mono-label text-bone tracking-[0.08em] uppercase border border-bone px-6 sm:px-8 py-3.5 sm:py-4 text-center justify-center hover:bg-bone hover:text-ink transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px] flex items-center"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              aria-label="Start a project — fill out inquiry form"
            >
              Start a project →
            </a>
            <a
              href="https://www.instagram.com/ryven.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-mono text-mono-label text-slate tracking-[0.08em] uppercase border border-[rgba(0,0,0,0.15)] px-6 py-3.5 sm:py-4 text-center hover:border-bone hover:text-bone transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              aria-label="Follow Ryven on Instagram @ryven.ai"
            >
              Instagram ↗
            </a>
          </motion.div>

          {/* Secondary — direct email */}
          <motion.p variants={fadeUp} className="mono-label text-slate flex flex-wrap items-center gap-1.5 pt-1">
            <span>Direct dispatch:</span>{" "}
            <a
              href="mailto:contact@ryven.website"
              className="text-bone hover:underline underline-offset-4 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone break-all sm:break-normal"
            >
              contact@ryven.website
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
