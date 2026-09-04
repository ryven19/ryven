"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menuOverlay, menuItem, staggerContainer, EASE_RYVEN } from "@/lib/animations";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Show hairline underline after scrolling 40px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-[rgba(0,0,0,0.1)] bg-[#ffffff]/95 backdrop-blur-sm" : "bg-transparent"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="container-ryven">
          <nav
            aria-label="Primary navigation"
            className="flex items-center justify-between h-16 md:h-20"
          >
            {/* Logo / Wordmark */}
            <Link
              href="/"
              aria-label="Ryven home"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
            >
              <Image
                src="/logo.png"
                alt="Ryven logo mark"
                width={28}
                height={28}
                className="object-contain transition-opacity duration-300 group-hover:opacity-70"
                priority
              />
              <span className="font-mono text-mono-label text-bone tracking-[0.08em] uppercase transition-colors duration-300 group-hover:text-slate">
                RYVEN
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul
              role="list"
              className="hidden md:flex items-center gap-8 list-none"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-slate hover:text-bone transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="https://tally.so/r/EkOeVB"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-mono-label text-bone tracking-[0.08em] uppercase border border-[rgba(0,0,0,0.2)] px-4 py-2 hover:border-bone hover:bg-bone hover:text-ink transition-all duration-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Start a project
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
            >
              <span
                className={cn(
                  "block w-5 h-px bg-bone transition-all duration-300",
                  menuOpen && "rotate-45 translate-y-[9px]"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-px bg-bone transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-5 h-px bg-bone transition-all duration-300",
                  menuOpen && "-rotate-45 -translate-y-[9px]"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuOverlay}
            className="fixed inset-0 z-40 bg-[#ffffff] flex flex-col pt-20 px-[1.25rem] pb-8 md:hidden overflow-y-auto"
          >
            {/* Nav links */}
            <motion.ul
              role="list"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 list-none mt-6 flex-1"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={menuItem}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block font-serif italic text-display-sm text-bone py-3 border-b border-[rgba(0,0,0,0.1)] hover:text-slate transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CTA at bottom */}
            <motion.div
              variants={menuItem}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="pt-6 mt-auto"
            >
              <a
                href="https://tally.so/r/EkOeVB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block font-mono text-mono-label text-bone tracking-[0.08em] uppercase border border-[rgba(0,0,0,0.2)] px-4 py-3.5 text-center hover:border-bone hover:bg-bone hover:text-ink transition-all duration-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone min-h-[44px] flex items-center justify-center"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                Start a project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
