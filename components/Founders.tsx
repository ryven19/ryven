"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const creators = [
  {
    name: "Gurmeet",
    handle: "@gurmeet__oberoi",
    photo: "/gurmeet dp.jpg",
    bio: "Co-founder of RYVEN. Expert in performance marketing and AI systems, scaling data-driven growth strategies and automated workflows for high-impact brand campaigns.",
    instagramUrl: "https://www.instagram.com/gurmeet__oberoi/",
  },
  {
    name: "Kushal",
    handle: "@kushalfinds.ai",
    photo: "/kushal dp.jpeg",
    bio: "Co-founder of RYVEN. Makes and publishes AI content to a real, growing audience, which means every brand brief gets filtered through the instincts of someone who actually has to earn attention, not just produce it.",
    instagramUrl: "https://www.instagram.com/kushalfinds.ai/",
  },
  {
    name: "Nikhil",
    handle: "@nikkkhil.ai",
    photo: "/nikhil dp.jpeg",
    bio: "Co-founder of RYVEN. A visual storyteller and AI experimenter, creating content that sits at the edge of what the tools can do. Brings that same restlessness to the work we produce for brands.",
    instagramUrl: "https://www.instagram.com/nikkkhil.ai/",
  },
];

export default function Founders() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      id="founders"
      aria-label="Who's behind RYVEN"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8"
        >

          {/* ── LEFT: statement ──────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-10"
          >
            <div className="flex flex-col gap-3 sm:gap-5">
              <p className="mono-label mb-1">// WHO&apos;S BEHIND RYVEN</p>
              <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em]">
                Built by{" "}
                <em className="font-serif italic font-normal">creators.</em>
              </h2>
              <p className="font-sans text-base text-slate leading-relaxed max-w-sm">
                RYVEN is built by active creators. We don&apos;t just produce
                content for brands. We make it, publish it, and understand
                what holds attention from inside the same feed as your
                audience.
              </p>
              <p className="mono-label text-slate/70 mt-1">
                Creative directors · strategists · editors · performance marketers — senior only. No junior ever touches the work.
              </p>
            </div>

            {/* 70K stat — understated */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="font-sans font-medium text-2xl text-bone tracking-tight leading-none">
                  100K+
                </span>
              </div>
              <span className="mono-label">Self-owned distribution via AI on Instagram</span>
            </div>
          </motion.div>

          {/* ── RIGHT: byline entries ─────────────────────────────── */}
          <div
            className="lg:col-span-6 lg:col-start-7 flex flex-col"
            role="list"
            aria-label="RYVEN co-founders"
          >
            {creators.map((creator, i) => (
              <motion.div
                key={creator.name}
                variants={fadeUp}
                role="listitem"
                className={`flex gap-4 sm:gap-5 py-5 sm:py-6 md:py-7 ${
                  i === 0
                    ? "border-t border-b border-[rgba(0,0,0,0.08)]"
                    : "border-b border-[rgba(0,0,0,0.08)]"
                }`}
              >
                {/* Avatar — responsive sizing: 64px on mobile, 80px on tablet, 96px on desktop */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={creator.photo}
                  alt={creator.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 object-cover object-top rounded-sm"
                />

                {/* Text block */}
                <div className="flex flex-col gap-2.5 sm:gap-3 min-w-0">
                  {/* Name + handle */}
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-sans font-medium text-base text-bone leading-none">
                      {creator.name}
                    </span>
                    <span className="font-mono text-mono-label text-slate tracking-[0.06em]">
                      {creator.handle}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="font-sans text-sm text-slate leading-relaxed">
                    {creator.bio}
                  </p>

                  {/* Instagram link with comfortable touch target */}
                  <a
                    href={creator.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "inline-flex items-center gap-1.5 w-fit",
                      "font-mono text-mono-label text-bone tracking-[0.08em] uppercase",
                      "border-b border-[rgba(0,0,0,0.2)] py-1",
                      "hover:border-bone transition-colors duration-300",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone",
                    ].join(" ")}
                    aria-label={`View ${creator.name}'s Instagram (${creator.handle})`}
                  >
                    View Instagram
                    <span aria-hidden="true" className="text-signal">↗</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
