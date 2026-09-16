"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONTACT_URL = "https://tally.so/r/EkOeVB";

export default function StickyContactButton() {
  const [scrollVisible, setScrollVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onMenuToggle = (e: Event) => {
      const { open } = (e as CustomEvent<{ open: boolean }>).detail;
      setMenuOpen(open);
    };
    window.addEventListener("ryven:mobile-menu", onMenuToggle);
    return () => window.removeEventListener("ryven:mobile-menu", onMenuToggle);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero) return;

    let heroPassed = false;
    let contactVisible = false;

    const update = () => setScrollVisible(heroPassed && !contactVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPassed = !entry.isIntersecting;
        update();
      },
      { threshold: 0 }
    );

    heroObserver.observe(hero);

    let contactObserver: IntersectionObserver | undefined;
    if (contact) {
      contactObserver = new IntersectionObserver(
        ([entry]) => {
          contactVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0.15 }
      );
      contactObserver.observe(contact);
    }

    return () => {
      heroObserver.disconnect();
      contactObserver?.disconnect();
    };
  }, []);

  const visible = scrollVisible && !menuOpen;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pt-6 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-white from-60% via-white/90 to-transparent pointer-events-none"
        >
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us"
            className="btn-shimmer pointer-events-auto flex items-center justify-center w-full font-mono text-mono-label text-ink tracking-[0.08em] uppercase bg-bone px-6 py-3.5 min-h-[48px] hover:opacity-90 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone relative"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span className="relative z-[1]">Contact us</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
