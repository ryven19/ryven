"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="work"
      aria-label="Featured work"
      className="section-spacing border-t border-[rgba(0,0,0,0.1)]"
    >
      <div className="container-ryven" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <motion.div variants={fadeUp}>
            <p className="mono-label mb-2 md:mb-3">// SELECTED WORK</p>
            <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em]">
              Work that{" "}
              <em className="font-serif italic font-normal">ships.</em>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-sm text-slate max-w-xs leading-relaxed">
            {projects.length} projects · High-cadence AI production
          </motion.p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          role="list"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              role="listitem"
              className="group flex flex-col bg-surface border border-[rgba(0,0,0,0.08)] overflow-hidden transition-colors duration-500 hover:border-bone cursor-pointer md:cursor-default"
              style={{ willChange: "transform" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setHoveredId((prev) => (prev === project.id ? null : project.id))}
            >
              <div className="flex flex-col h-full">
                {/* Media container */}
                <div
                  className="relative w-full aspect-[4/5] bg-surface overflow-hidden"
                  role="img"
                  aria-label={project.name}
                >
                  {project.video ? (
                    <LazyVideo
                      src={project.video}
                      poster={project.poster}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : project.image && project.image.startsWith("/") ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="mono-label text-slate text-center px-6">
                        {project.image}
                      </span>
                    </div>
                  )}

                  {/* Corner viewfinder marks */}
                  <span className="vf-tl opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
                  <span className="vf-tr opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
                  <span className="vf-bl opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />
                  <span className="vf-br opacity-30 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true" />

                  {/* Top status pill */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-[rgba(0,0,0,0.08)]">
                    <span className="signal-dot" aria-hidden="true" />
                    <span className="mono-label text-[0.6rem] text-bone font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredId === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col items-start justify-end p-6 z-10"
                      >
                        <p className="font-sans text-xs text-white/90 leading-relaxed max-w-xs mb-3">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="mono-label text-white/70">{project.year}</span>
                          <span className="mono-label text-white/40">·</span>
                          <span className="mono-label text-white font-medium">{project.category}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project meta */}
                <div className="flex items-start justify-between p-4 sm:p-5 bg-white border-t border-[rgba(0,0,0,0.08)]">
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="font-sans text-base font-medium text-bone leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((s) => (
                        <span key={s} className="mono-label text-[0.65rem] text-slate">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mono-label text-slate text-xs flex-shrink-0 ml-3 sm:ml-4 font-mono">{project.year}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Lazy Video: only plays when visible in viewport ─────────────────────────
// preload="none"   → browser downloads 0 bytes until the source is injected
// poster           → shows a still frame immediately (no layout shift, no black box)
// rootMargin 200px → starts loading ~200px before it enters view (smooth UX)
function LazyVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);      // inject <source> once and never remove
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      // rootMargin 200px: begins loading slightly before the card scrolls in
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-trigger play after source injection (handles the first-load case)
  useEffect(() => {
    if (shouldLoad) {
      videoRef.current?.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
      aria-hidden="true"
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
