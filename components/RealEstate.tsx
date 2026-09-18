"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

type RealEstateProject = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  services: string[];
  description: string;
  videoSrc: string;
};

const realEstateProjects: RealEstateProject[] = [
  {
    id: "RE — 01",
    tag: "LUXURY REAL ESTATE",
    title: "Horizon Villa & Estate",
    subtitle: "AI Spatial Walkthrough",
    location: "Malibu Coastline",
    year: "2025",
    services: ["Spatial Lighting", "Volumetric Architecture", "4K Generative Film"],
    description:
      "Cinematic architectural exploration featuring ambient daylight transitions, custom interior textures, and seamless fluid camera movements.",
    videoSrc: "/R1.mp4",
  },
  {
    id: "RE — 02",
    tag: "ARCHITECTURAL VISUALIZATION",
    title: "Vanguard Minimalist Residence",
    subtitle: "Interior Architecture Tour",
    location: "Swiss Alps",
    year: "2025",
    services: ["Material Ray-Tracing", "Atmosphere & Shadow", "Dynamic Camera"],
    description:
      "Photorealistic interior walkthrough engineered to highlight spatial geometry, natural wood craftsmanship, and modern minimalist design.",
    videoSrc: "/R2.mp4",
  },
];

// ─── Video card with play/pause + mute controls ────────────────────────────
function RealEstateCard({ project }: { project: RealEstateProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play when in viewport, pause when not
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting && isPlaying) {
          video.muted = isMuted;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={fadeUp}
      className="group flex flex-col border border-[rgba(0,0,0,0.08)] overflow-hidden bg-white hover:border-bone transition-colors duration-500"
    >
      {/* ── Video ── */}
      <div
        className="relative w-full aspect-video bg-surface overflow-hidden cursor-pointer"
        onClick={togglePlay}
        role="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); togglePlay(); } }}
      >
        <video
          ref={videoRef}
          src={project.videoSrc}
          loop
          muted={isMuted}
          playsInline
          autoPlay
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          aria-hidden="true"
        />

        {/* Viewfinder corners */}
        <span className="vf-tl opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
        <span className="vf-tr opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
        <span className="vf-bl opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
        <span className="vf-br opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />

        {/* Category pill — top left */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[rgba(0,0,0,0.08)]">
          <span className="signal-dot" aria-hidden="true" />
          <span className="mono-label text-[0.6rem] text-bone font-medium">
            {project.tag}
          </span>
        </div>

        {/* Mute / unmute — top right */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[rgba(0,0,0,0.08)] hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
        >
          <span className="mono-label text-[0.6rem] text-bone">
            {isMuted ? "SOUND OFF" : "SOUND ON"}
          </span>
          {/* Simple speaker icon via SVG */}
          {isMuted ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-bone" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>

        {/* Play / pause overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-[rgba(0,0,0,0.1)] flex items-center justify-center shadow-md">
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-bone" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-bone ml-0.5" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* ── Meta ── */}
      <div className="p-5 sm:p-6 bg-white border-t border-[rgba(0,0,0,0.08)]">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="mono-label text-[0.65rem]">{project.id}</span>
          <span className="mono-label text-[0.65rem]">{project.location} · {project.year}</span>
        </div>

        <h3 className="font-sans text-lg font-medium text-bone leading-tight tracking-[-0.015em] mb-1">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-slate mb-4">{project.subtitle}</p>
        <p className="font-sans text-sm text-slate leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(0,0,0,0.06)]">
          {project.services.map((s) => (
            <span key={s} className="mono-label text-[0.65rem] text-slate">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function RealEstate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="real-estate"
      aria-label="Real estate and architectural showcase"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={ref}>
        {/* Section header — matches all other sections */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp}>
            <p className="mono-label mb-2 md:mb-3">// REAL ESTATE</p>
            <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em]">
              Spatial &amp;{" "}
              <em className="font-serif italic font-normal">architectural</em>{" "}
              cinematics.
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="font-sans text-sm text-slate max-w-xs leading-relaxed"
          >
            Generative walkthroughs, volumetric lighting, and architectural
            flythroughs for premier developers and luxury brokerages.
          </motion.p>
        </motion.div>

        {/* Two-column video grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          role="list"
        >
          {realEstateProjects.map((project) => (
            <RealEstateCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
