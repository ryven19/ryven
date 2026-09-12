"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  X,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShowcaseCategory,
  CapabilitySection,
  SampleWork,
} from "@/data/showcase";
import { fadeUp, staggerContainer } from "@/lib/animations";

// ─── Poster map for all gallery videos ────────────────────────────────────────
const GALLERY_POSTERS: Record<string, string> = {
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
  "/Cal AI UGC.mov":           "/posters/cal-ai-ugc.jpg",
  "/Protein Podcast Ads.mp4":  "/posters/protein-podcast.jpg",
  "/maybeliene.mp4":           "/posters/maybeliene.jpg",
};

// ─── GalleryVideo ─────────────────────────────────────────────────────────────
// Lazy-loading video for the works gallery grid.
// ─── GalleryVideo ─────────────────────────────────────────────────────────────
// Fast preloading & instant playback for the works gallery grid:
// • Preload observer (rootMargin 600px): buffers frames before card enters view
// • Viewport observer: plays immediately when visible, pauses when scrolled out
// • onCanPlay: triggers immediate playback the instant frames are ready
// • isMuted prop forwarded from parent (user-controlled mute button)
function GalleryVideo({
  src,
  isMuted,
  className,
}: {
  src: string;
  isMuted: boolean;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: "600px" }
    );

    preloadObserver.observe(el);
    return () => preloadObserver.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "40px" }
    );

    playObserver.observe(el);
    return () => playObserver.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !shouldLoad) return;

    el.defaultMuted = isMuted;
    el.muted = isMuted;
    el.playsInline = true;

    if (inView) {
      const p = el.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    } else {
      el.pause();
    }
  }, [inView, shouldLoad, isMuted]);

  const handleCanPlay = () => {
    if (inView && videoRef.current) {
      videoRef.current.defaultMuted = isMuted;
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      loop
      muted={isMuted}
      playsInline
      preload={shouldLoad ? "auto" : "none"}
      poster={GALLERY_POSTERS[src]}
      onCanPlay={handleCanPlay}
      className={className}
    />
  );
}


export default function SectionDetailView({
  category,
  section,
}: {
  category: ShowcaseCategory;
  section: CapabilitySection;
}) {
  const router = useRouter();
  const [selectedWork, setSelectedWork] = useState<SampleWork | null>(null);
  const otherSections = category.sections.filter((s) => s.id !== section.id);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(`/work/${category.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-bone">
      {/* Top subtle breadcrumb bar with smart back navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[rgba(0,0,0,0.06)]">
        <div className="container-ryven">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-3">
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

              <Link
                href={`/work/${category.slug}`}
                className="font-mono text-xs text-slate hover:text-bone transition-colors hidden sm:inline"
              >
                {category.label}
              </Link>

              <span className="text-slate/30 text-xs hidden sm:inline">/</span>

              <span className="font-mono text-xs font-medium text-bone truncate max-w-[180px] sm:max-w-none">
                {section.title}
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

      {/* Main Section Content */}
      <main className="container-ryven py-12 md:py-20">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mb-14 md:mb-18"
        >
          <motion.p variants={fadeUp} className="mono-label text-slate mb-3">
            // {section.client} · {section.year}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bone leading-[1.1] tracking-[-0.02em] mb-3"
          >
            {section.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-serif italic text-xl sm:text-2xl text-slate mb-5"
          >
            {section.subtitle}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-sans text-sm sm:text-base text-slate leading-relaxed"
          >
            {section.description}
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.deliverables.map((work, index) => (
            <LuxuryWorkCard
              key={work.id}
              work={work}
              index={index}
              onSelect={() => setSelectedWork(work)}
            />
          ))}
        </div>

        {/* Other Sections Navigation */}
        {otherSections.length > 0 && (
          <div className="mt-24 pt-12 border-t border-[rgba(0,0,0,0.08)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="mono-label mb-1">// MORE IN {category.label.toUpperCase()}</p>
                <h2 className="font-sans font-medium text-xl md:text-2xl text-bone">
                  Explore More Projects
                </h2>
              </div>
              <Link
                href={`/work/${category.slug}`}
                className="font-mono text-xs uppercase tracking-wider text-slate hover:text-bone transition-colors flex items-center gap-1.5"
              >
                <span>View All {category.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherSections.map((other) => (
                <Link
                  key={other.id}
                  href={`/work/${category.slug}/${other.slug}`}
                  className="group p-6 bg-surface/30 hover:bg-surface border border-[rgba(0,0,0,0.06)] hover:border-bone/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono-label text-[0.6rem] text-slate">
                        {other.client}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate group-hover:text-bone group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h3 className="font-sans text-lg font-medium text-bone mb-1 group-hover:text-slate transition-colors">
                      {other.title}
                    </h3>
                    <p className="font-serif italic text-xs text-slate">
                      {other.subtitle}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
                    <span className="mono-label text-[0.65rem] text-slate">
                      {other.deliverables.length} {other.deliverables.length === 1 ? "Work" : "Works"}
                    </span>
                    <span className="font-mono text-xs text-bone font-medium">
                      View Project →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bone/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[rgba(0,0,0,0.12)] shadow-2xl flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setSelectedWork(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 border border-[rgba(0,0,0,0.1)] flex items-center justify-center text-bone hover:bg-bone hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Media preview */}
              <div className="md:w-3/5 bg-surface relative flex items-center justify-center min-h-[220px] sm:min-h-[320px] md:min-h-[500px]">
                {selectedWork.mediaType === "video" ? (
                  <video
                    src={selectedWork.src}
                    autoPlay
                    controls
                    loop
                    playsInline
                    className="w-full h-full object-contain max-h-[50vh] md:max-h-[70vh] bg-surface"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedWork.src}
                    alt={selectedWork.title}
                    className="w-full h-full object-contain max-h-[50vh] md:max-h-[70vh] bg-surface"
                  />
                )}
              </div>

              {/* Content Panel */}
              <div className="md:w-2/5 p-5 sm:p-8 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-[rgba(0,0,0,0.06)]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="mono-label text-slate text-xs font-mono">
                      {selectedWork.client}
                    </span>
                    <span className="text-slate/40 text-xs">·</span>
                    <span className="mono-label text-slate text-xs font-mono">
                      {selectedWork.year}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-2xl text-bone mb-3">
                    {selectedWork.title}
                  </h3>

                  <p className="font-sans text-sm text-slate leading-relaxed mb-6">
                    {selectedWork.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {selectedWork.tags.map((t) => (
                      <span
                        key={t}
                        className="mono-label text-[0.65rem] px-2.5 py-1 bg-surface text-slate border border-[rgba(0,0,0,0.06)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                  <a
                    href="https://tally.so/r/EkOeVB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center font-mono text-xs uppercase tracking-wider bg-bone text-white py-3 hover:bg-slate transition-colors duration-300"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LuxuryWorkCard({
  work,
  index,
  onSelect,
}: {
  work: SampleWork;
  index: number;
  onSelect: () => void;
}) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onClick={onSelect}
      className="group bg-white border border-[rgba(0,0,0,0.06)] flex flex-col overflow-hidden hover:shadow-xl transition-all duration-400 cursor-pointer"
    >
      {/* Media container */}
      <div className="relative aspect-[4/5] bg-surface overflow-hidden flex items-center justify-center">
        {work.mediaType === "video" ? (
          <div className="w-full h-full relative">
            <GalleryVideo
              src={work.src}
              isMuted={isMuted}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-600"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-3 right-3 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={work.src}
            alt={work.title}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-600"
          />
        )}

        {/* Minimal hover overlay */}
        <div className="absolute inset-0 bg-bone/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-wider bg-white text-bone px-3.5 py-1.5 shadow-md flex items-center gap-1.5">
            <span>View Full Size</span>
            <Maximize2 className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-center justify-between text-slate mb-1.5">
            <span className="mono-label text-[0.65rem]">{work.client}</span>
            <span className="font-mono text-xs text-slate">{work.year}</span>
          </div>

          <h3 className="font-sans font-medium text-base text-bone group-hover:text-slate transition-colors leading-snug">
            {work.title}
          </h3>
        </div>

        <div className="pt-3 mt-3 border-t border-[rgba(0,0,0,0.06)] flex items-center justify-between">
          <span className="mono-label text-[0.65rem] text-slate">
            {work.category}
          </span>
          <span className="font-mono text-xs text-slate group-hover:text-bone transition-colors flex items-center gap-1">
            <span>Inspect</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
