"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useReducedMotion } from "@/lib/utils";

// ─── The five process nodes ───────────────────────────────────────────────────
const nodes = [
  {
    id: "discover",
    label: "Discover",
    index: "01",
    description: "Brief, brand tone, and audience hooks — aligning on creative goals.",
  },
  {
    id: "concept",
    label: "Concept",
    index: "02",
    description: "Storyboarding, visual moodboards, and creative direction.",
  },
  {
    id: "create",
    label: "Create",
    index: "03",
    description: "AI video synthesis, 3D product motion, and rapid asset generation.",
  },
  {
    id: "refine",
    label: "Refine",
    index: "04",
    description: "Color grading, sound design, typography, and brand polish.",
  },
  {
    id: "scale",
    label: "Scale",
    index: "05",
    description: "Multi-platform export, aspect ratio variants, and campaign delivery.",
  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────
// Removed useScroll/useTransform continuous scroll tracking entirely —
// was running JS on every scroll frame causing jank. Replaced with simple
// CSS transition triggered once on inView.
export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-label="Our process — signal path"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={sectionRef}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp}>
            <p className="mono-label mb-2 md:mb-3">// OUR PROCESS</p>
            <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em]">
              How we{" "}
              <em className="font-serif italic font-normal">work.</em>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-sm text-slate max-w-xs leading-relaxed">
            5 clear phases from brief to final delivery. No surprises, no scope creep.
          </motion.p>
        </motion.div>

        {/* ─── Signal Path Diagram ──────────────────────────────────────── */}
        <div
          className="relative"
          role="list"
          aria-label="Process steps: Discover, Concept, Create, Refine, Scale"
        >
          {/* Desktop horizontal signal path */}
          <div className="hidden lg:block">
            {/* Connecting line + animated fill using CSS transition (no JS per frame) */}
            <div className="relative mb-8" aria-hidden="true">
              {/* Track */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(0,0,0,0.1)] -translate-y-1/2" />
              {/* Fill — CSS width transition on inView, zero JS overhead */}
              <div
                className="absolute top-1/2 left-0 h-px bg-bone -translate-y-1/2 origin-left"
                style={{
                  width: inView ? "100%" : "0%",
                  transition: reducedMotion
                    ? "none"
                    : "width 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
                }}
              />
              {/* Node dots */}
              <div className="relative flex justify-between items-center py-4">
                {nodes.map((node, i) => (
                  <div key={node.id} className="relative flex flex-col items-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full border-2 z-10"
                      style={{
                        backgroundColor: inView ? "var(--bone)" : "transparent",
                        borderColor: inView ? "var(--bone)" : "rgba(0,0,0,0.15)",
                        transition: reducedMotion
                          ? "none"
                          : `all 0.4s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Node labels + descriptions */}
            <div className="grid grid-cols-5 gap-4">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  role="listitem"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <span className="mono-label">{node.index}</span>
                    <h3 className="font-sans font-medium text-base text-bone">
                      {node.label}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate leading-relaxed">
                    {node.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile — vertical stacked list */}
          <div className="lg:hidden flex flex-col">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                role="listitem"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 sm:gap-6 py-4 sm:py-6 border-b border-[rgba(0,0,0,0.1)]"
              >
                {/* Left: dot + connector */}
                <div className="flex flex-col items-center pt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-bone" aria-hidden="true" />
                  {i < nodes.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-[rgba(0,0,0,0.1)]" aria-hidden="true" />
                  )}
                </div>
                {/* Right: content */}
                <div className="flex flex-col gap-1.5 sm:gap-2 pb-1 sm:pb-2">
                  <span className="mono-label">{node.index}</span>
                  <h3 className="font-sans font-medium text-base text-bone">{node.label}</h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">{node.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom mono strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 sm:mt-12 flex items-center gap-4 border-t border-[rgba(0,0,0,0.1)] pt-4"
          aria-hidden="true"
        >
          <span className="signal-dot" />
          <span className="mono-label">
            Signal path · 01 → 05 · Full pipeline
          </span>
        </motion.div>
      </div>
    </section>
  );
}
