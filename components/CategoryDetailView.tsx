"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  ShowcaseCategory,
  CapabilitySection,
  showcaseCategories,
} from "@/data/showcase";
import { fadeUp, staggerContainer } from "@/lib/animations";

// ─── Poster map for section cover videos ──────────────────────────────────────
const SECTION_POSTERS: Record<string, string> = {
  "/Air jordan ugc.mp4":       "/posters/air-jordan.jpg",
  "/Clothing UGC.mp4":         "/posters/clothing-ugc.jpg",
  "/Tutorial UGC.mp4":         "/posters/tutorial-ugc.jpg",
  "/donut.mp4":                "/posters/donut.jpg",
  "/goat_life.mp4":            "/posters/goat-life.jpg",
  "/Goat_life2.mp4":           "/posters/goat-life2.jpg",
  "/plush.mp4":                "/posters/plush.jpg",
  "/good_habbits.mp4":         "/posters/good-habbits.jpg",
  "/Oatly Product Ad.mp4":     "/posters/oatly.jpg",
  "/Beverage Product Ad.mp4":  "/posters/beverage.jpg",
  "/Ice-Cream Product Ad.mp4": "/posters/ice-cream.jpg",
  "/clothing cinematic.mp4":   "/posters/clothing-cinematic.jpg",
};

// ─── CardVideo ────────────────────────────────────────────────────────────────
// Lazy-loading card video for category grid. 0 bytes fetched until the card
// enters the viewport; poster shows immediately so there is no black frame.
function CardVideo({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1, rootMargin: "150px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) videoRef.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster={SECTION_POSTERS[src]}
      className={className}
    />
  );
}

export default function CategoryDetailView({
  category,
}: {
  category: ShowcaseCategory;
}) {
  const router = useRouter();
  const otherCategories = showcaseCategories.filter((c) => c.id !== category.id);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/#work");
    }
  };

  return (
    <div className="min-h-screen bg-white text-bone">
      {/* Top subtle breadcrumb navbar with smart back navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
        <div className="container-ryven">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Back button returns to the exact previous page */}
              <button
                type="button"
                onClick={handleBack}
                aria-label="Go back to previous page"
                className="flex items-center gap-1.5 font-mono text-xs text-slate hover:text-bone transition-colors duration-200 group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Back</span>
              </button>

              <span className="text-slate/30 text-xs">/</span>

              <span className="font-mono text-xs font-medium text-bone">
                {category.label}
              </span>
            </div>

            <a
              href="https://tally.so/r/EkOeVB"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider border border-[rgba(0,0,0,0.2)] px-3.5 py-1.5 hover:bg-bone hover:text-white transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-ryven py-10 md:py-16">
        {/* Category Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mb-10 md:mb-14"
        >
          <motion.p variants={fadeUp} className="mono-label text-slate mb-2.5">
            // SELECTED DISCIPLINES & COLLECTIONS
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl text-bone leading-[1.1] tracking-[-0.02em] mb-3"
          >
            {category.label}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-sm sm:text-base text-slate leading-relaxed"
          >
            {category.description}
          </motion.p>
        </motion.div>

        {/* 4-in-a-row Single Horizontal Panel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
          {category.sections.map((section, idx) => (
            <LuxurySectionCard
              key={section.id}
              categorySlug={category.slug}
              section={section}
              index={idx}
            />
          ))}
        </div>

        {/* Cross-Category Navigation */}
        <div className="mt-20 pt-10 border-t border-[rgba(0,0,0,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="mono-label mb-1">// EXPLORE OTHER DISCIPLINES</p>
              <h2 className="font-sans font-medium text-xl md:text-2xl text-bone">
                More Capabilities
              </h2>
            </div>
            <Link
              href="/#work"
              className="font-mono text-xs uppercase tracking-wider text-slate hover:text-bone transition-colors flex items-center gap-1.5"
            >
              <span>Back to Overview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherCategories.map((other) => (
              <Link
                key={other.id}
                href={`/work/${other.slug}`}
                className="group p-6 bg-surface/30 hover:bg-surface border border-[rgba(0,0,0,0.06)] hover:border-bone/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-[0.6rem] text-slate">
                      {other.tag}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate group-hover:text-bone group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="font-sans text-xl font-medium text-bone mb-2 group-hover:text-slate transition-colors">
                    {other.label}
                  </h3>
                  <p className="font-sans text-sm text-slate line-clamp-2 leading-relaxed">
                    {other.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                  <span className="mono-label text-[0.65rem] text-slate">
                    {other.sections.length} {other.sections.length === 1 ? "Project" : "Projects"}
                  </span>
                  <span className="font-mono text-xs text-bone font-medium">
                    View Discipline →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function LuxurySectionCard({
  categorySlug,
  section,
  index,
}: {
  categorySlug: string;
  section: CapabilitySection;
  index: number;
}) {
  const router = useRouter();
  const sectionUrl = `/work/${categorySlug}/${section.slug}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={() => router.push(sectionUrl)}
      className="group bg-white border border-[rgba(0,0,0,0.08)] flex flex-col overflow-hidden hover:shadow-xl hover:border-bone/25 transition-all duration-300 cursor-pointer h-full"
    >
      {/* Visual frame — 4:5 portrait frame with perfect object containment/cover */}
      <div className="relative aspect-[4/5] w-full bg-[#f8f7f5] overflow-hidden flex items-center justify-center">
        {section.coverMedia.type === "video" ? (
          <CardVideo
            src={section.coverMedia.src}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={section.coverMedia.src}
            alt={section.title}
            className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
          />
        )}

        {/* Minimal hover overlay */}
        <div className="absolute inset-0 bg-bone/25 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex items-center justify-center">
          <span className="font-mono text-[0.7rem] uppercase tracking-wider bg-white text-bone px-3 py-1.5 shadow-md flex items-center gap-1.5">
            <span>Explore Suite</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Content block */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-center justify-between text-slate mb-1.5">
            <span className="mono-label text-[0.65rem]">{section.client}</span>
            <span className="font-mono text-[0.65rem] text-slate">{section.year}</span>
          </div>

          <h3 className="font-sans font-medium text-lg sm:text-xl text-bone mb-1 group-hover:text-slate transition-colors leading-snug tracking-tight">
            {section.title}
          </h3>

          <p className="font-serif italic text-xs text-slate mb-2.5 line-clamp-1">
            {section.subtitle}
          </p>

          <p className="font-sans text-xs text-slate leading-relaxed line-clamp-2">
            {section.description}
          </p>
        </div>

        {/* Footer info & arrow */}
        <div className="pt-3.5 mt-3.5 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
          <span className="mono-label text-[0.65rem] text-slate">
            {section.deliverables.length} {section.deliverables.length === 1 ? "Work" : "Works"}
          </span>
          <span className="font-mono text-xs text-slate group-hover:text-bone transition-colors flex items-center gap-1">
            <span>View</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
