"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menuOverlay, menuItem } from "@/lib/animations";
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
    window.dispatchEvent(
      new CustomEvent("ryven:mobile-menu", { detail: { open: menuOpen } })
    );
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
                className="btn-shimmer font-mono text-mono-label text-ink tracking-[0.08em] uppercase bg-bone px-4 py-2 hover:opacity-90 transition-opacity duration-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone relative"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <span className="relative z-[1]">Contact us</span>
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
            aria-label="Contact menu"
            aria-modal="true"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuOverlay}
            className="fixed inset-0 z-40 bg-[#ffffff] flex flex-col items-center justify-center px-[1.25rem] pb-8 md:hidden"
          >
            <motion.div
              variants={menuItem}
              initial="hidden"
              animate="visible"
              className="w-full max-w-sm"
            >
              <a
                href="https://tally.so/r/EkOeVB"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-shimmer flex items-center justify-center w-full font-mono text-mono-label text-ink tracking-[0.08em] uppercase bg-bone px-6 py-3.5 min-h-[48px] hover:opacity-90 transition-opacity duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone relative"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <span className="relative z-[1]">Contact us</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
