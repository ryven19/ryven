"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const metrics = [
  {
    tag: "// 01 · DELIVERED",
    value: "06",
    unit: "+",
    label: "Commercial Projects",
    desc: "Shipped across brand, product, and digital formats",
  },
  {
    tag: "// 02 · PARTNERS",
    value: "04",
    unit: "+",
    label: "Brand Collaborations",
    desc: "AI-forward startups & creative studios",
  },
  {
    tag: "// 03 · REACH",
    value: "03",
    unit: "+",
    label: "Global Markets",
    desc: "Multi-language & localized distribution",
  },
  {
    tag: "// 04 · OUTPUT",
    value: "08",
    unit: "+",
    label: "Commercial Spots",
    desc: "High-cadence UGC & cinematic video ads",
  },
];

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      aria-label="Key metrics"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven">
        {/* Section header consistent with the rest of the site */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp}>
            <p className="mono-label mb-2 md:mb-3">// BY THE NUMBERS</p>
            <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em]">
              Performance that speaks for{" "}
              <em className="font-serif italic font-normal">itself.</em>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-sm text-slate max-w-xs leading-relaxed">
            Real outputs from active client campaigns and commercial synthesis.
          </motion.p>
        </motion.div>

        {/* 4-column structured metrics grid with consistent studio typography */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)]"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-6 sm:p-7 md:p-8 flex flex-col justify-between group hover:bg-surface transition-colors duration-300"
            >
              <div>
                {/* Top mono category tag */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="mono-label text-[0.65rem] text-slate font-mono">
                    {metric.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-signal/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Big number with consistent editorial mono/sans pairing */}
                <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
                  <span className="font-sans font-medium text-4xl sm:text-5xl text-bone tracking-tight leading-none">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xl sm:text-2xl text-signal font-normal">
                    {metric.unit}
                  </span>
                </div>

                {/* Metric label */}
                <h3 className="font-sans text-base font-medium text-bone mb-1">
                  {metric.label}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-slate leading-relaxed pt-3 sm:pt-4 border-t border-[rgba(0,0,0,0.06)] mt-3 sm:mt-4">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
