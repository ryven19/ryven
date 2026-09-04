"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { crossfade, fadeUp, staggerContainer } from "@/lib/animations";
import { showcaseCategories } from "@/data/showcase";

type CategoryId = (typeof showcaseCategories)[number]["id"];

// ─── Poster frames for each showcase featured video ───────────────────────────
// Extracted at build time so a still frame shows immediately on first render.
const SHOWCASE_POSTERS: Record<string, string> = {
  "/Clothing UGC.mp4":   "/posters/clothing-ugc.jpg",
  "/donut.mp4":          "/posters/donut.jpg",
  "/Air jordan ugc.mp4": "/posters/air-jordan.jpg",
};

// ─── TabVideo ─────────────────────────────────────────────────────────────────
// Lazy video for Showcase tabs. Key behaviours:
//   • preload="none"  → 0 bytes fetched until this tab is first activated
//   • <source> injected once on mount, never removed (no duplicate downloads)
//   • poster shown instantly (no black flash during crossfade animation)
//   • autoPlay / loop / muted / playsInline preserved exactly as before
function TabVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sourceInjected, setSourceInjected] = useState(false);

  // Inject the source and start playing on first mount (= first tab activation)
  useEffect(() => {
    setSourceInjected(true);
    // Small rAF delay lets the crossfade animation start before the decode begins
    const raf = requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
    return () => {
      cancelAnimationFrame(raf);
      // Pause when tab changes (AnimatePresence unmounts this)
      videoRef.current?.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className="w-full h-full object-cover bg-surface"
    >
      {sourceInjected && <source src={src} type="video/mp4" />}
    </video>
  );
}


// ─── Component ────────────────────────────────────────────────────────────────
export default function Showcase() {
  const [activeId, setActiveId] = useState<CategoryId>("ai-visuals");
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const activeCategory = showcaseCategories.find((c) => c.id === activeId)!;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, id: CategoryId) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveId(id);
      }
    },
    []
  );

  const handleNavigate = (id: CategoryId) => {
    router.push(`/work/${id}`);
  };

  return (
    <section
      id="showcase"
      aria-label="Showcase — where ideas become output"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)] bg-white"
    >
      <div className="container-ryven" ref={ref}>
        {/* Two-column grid — 7:5 ratio, vertically centered for perfect viewport fit */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column — 7 columns */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            {/* Header block */}
            <motion.div variants={fadeUp} className="mb-6 md:mb-8">
              <p className="mono-label mb-2 md:mb-3">// THE LOOP, IN PRACTICE</p>
              <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em] mb-3 md:mb-4">
                Where ideas become{" "}
                <em className="font-serif italic font-normal">output.</em>
              </h2>
              <p className="font-sans text-sm text-slate leading-relaxed max-w-md">
                Select a capability to inspect live creative synthesis — AI video pipelines, generative stills, and high-cadence commercial output.
              </p>
            </motion.div>

            {/* Interactive Capability Selector Tabs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col border-t border-[rgba(0,0,0,0.08)]"
              role="tablist"
              aria-label="Work categories"
            >
              {showcaseCategories.map((cat, idx) => {
                const isActive = cat.id === activeId;
                return (
                  <div
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${cat.id}`}
                    id={`tab-${cat.id}`}
                    tabIndex={0}
                    onClick={() => setActiveId(cat.id)}
                    onDoubleClick={() => handleNavigate(cat.id)}
                    onKeyDown={(e) => handleKeyDown(e, cat.id)}
                    className={`w-full text-left py-3.5 md:py-5 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone cursor-pointer select-none border-b border-[rgba(0,0,0,0.08)] ${
                      isActive
                        ? "text-bone"
                        : "text-slate hover:text-bone"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-3.5">
                        <span className="mono-label text-xs font-mono w-5 flex-shrink-0 opacity-40">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                            style={{
                              backgroundColor: isActive ? "var(--signal)" : "transparent",
                              boxShadow: isActive ? "0 0 0 4px rgba(255,61,46,0.18)" : "none",
                              border: isActive ? "none" : "1px solid rgba(0,0,0,0.2)",
                            }}
                            aria-hidden="true"
                          />
                          <span className="font-sans text-base md:text-lg font-medium tracking-tight">
                            {cat.label}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`mono-label px-2.5 py-0.5 text-[0.65rem] border transition-colors ${
                            isActive
                              ? "bg-white border-[rgba(0,0,0,0.12)] text-bone font-medium"
                              : "bg-surface border-[rgba(0,0,0,0.06)] text-slate"
                          }`}
                        >
                          {cat.tag}
                        </span>
                        <Link
                          href={`/work/${cat.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open ${cat.label} samples`}
                          className={`w-8 h-8 md:w-7 md:h-7 border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                            isActive
                              ? "border-bone/30 text-bone hover:bg-bone hover:text-white bg-white shadow-xs"
                              : "border-[rgba(0,0,0,0.1)] text-slate hover:text-bone hover:border-bone"
                          }`}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Active description — smooth expand */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-xs md:text-sm text-slate mt-2 md:mt-2.5 pl-6 sm:pl-8 leading-relaxed">
                            {cat.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>

            {/* Bottom telemetry */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 sm:pt-4 sm:mt-4"
            >
              <div className="flex items-center gap-2">
                <span className="signal-dot" aria-hidden="true" />
                <span className="mono-label text-slate">AI Synthesis Pipeline · Active</span>
              </div>
              <span className="mono-label text-slate">24 FPS Studio Reel</span>
            </motion.div>
          </div>

          {/* Right Column — 5 columns, centered vertically with compact media frame */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full"
            role="tabpanel"
            id={`panel-${activeId}`}
            aria-labelledby={`tab-${activeId}`}
          >
            <div className="w-full max-w-[340px] sm:max-w-[390px] xl:max-w-[410px] flex flex-col bg-white border border-[rgba(0,0,0,0.08)] shadow-sm">
              {/* Viewfinder container — 4:5 portrait frame */}
              <div
                className="viewfinder relative w-full aspect-[4/5] bg-surface flex items-center justify-center overflow-hidden cursor-pointer group"
                aria-label={`Preview: ${activeCategory.label}`}
                onClick={() => handleNavigate(activeCategory.id)}
                title="Click to open samples page"
              >
                {/* Viewfinder corner marks */}
                <span className="vf-tl z-20" aria-hidden="true" />
                <span className="vf-tr z-20" aria-hidden="true" />
                <span className="vf-bl z-20" aria-hidden="true" />
                <span className="vf-br z-20" aria-hidden="true" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    variants={crossfade}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-surface"
                  >
                    {activeCategory.featuredMedia.type === "video" ? (
                      <TabVideo
                        src={activeCategory.featuredMedia.src}
                        poster={SHOWCASE_POSTERS[activeCategory.featuredMedia.src]}
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={activeCategory.featuredMedia.src}
                        alt={activeCategory.label}
                        className="w-full h-full object-cover bg-surface"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 z-20 bg-bone/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-wider bg-white/95 text-bone px-3.5 py-1.5 shadow-md flex items-center gap-1.5">
                    <span>Open Reference Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Top overlay badge */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[rgba(0,0,0,0.08)] shadow-xs">
                  <span className="signal-dot" aria-hidden="true" />
                  <span className="mono-label text-[0.6rem] text-bone font-medium">
                    {activeCategory.label}
                  </span>
                </div>

                {/* Top right tag */}
                <div className="absolute top-3.5 right-3.5 z-20 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white mono-label text-[0.55rem] tracking-widest font-mono">
                  {activeCategory.tag}
                </div>
              </div>

              {/* Bottom strip */}
              <div
                className="flex items-center justify-between border-t border-[rgba(0,0,0,0.06)] bg-white px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="mono-label text-[0.65rem] text-slate font-mono">
                    {activeCategory.tag}
                  </span>
                </div>
                {/* View link */}
                <Link
                  href={`/work/${activeCategory.slug}`}
                  className="flex items-center gap-1.5 font-mono text-xs text-bone hover:text-slate transition-colors"
                >
                  <span className="signal-dot" aria-hidden="true" />
                  <span className="font-medium">VIEW WORK →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
