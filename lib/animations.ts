import { Variants } from "framer-motion";

// ─── Easing ──────────────────────────────────────────────────────────────────
export const EASE_RYVEN = [0.16, 1, 0.3, 1] as const;
export const DURATION_STD = 0.5;
export const DURATION_FAST = 0.35;
export const STAGGER_STEP = 0.07; // 70ms between items

// ─── Scroll reveal (opacity + translateY) ────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_STD, ease: EASE_RYVEN },
  },
};

// Staggered container — wraps a list of fadeUp children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_STEP,
      delayChildren: 0,
    },
  },
};

// ─── Crossfade (Showcase section) ────────────────────────────────────────────
export const crossfade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_STD, ease: EASE_RYVEN },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION_FAST, ease: "easeIn" },
  },
};

// ─── Mobile menu overlay ──────────────────────────────────────────────────────
export const menuOverlay: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_STD, ease: EASE_RYVEN },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DURATION_FAST, ease: "easeIn" },
  },
};

export const menuItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_STD, ease: EASE_RYVEN },
  },
};

// ─── Service row hover reveal ─────────────────────────────────────────────────
export const revealRight: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION_STD, ease: EASE_RYVEN },
  },
  exit: {
    opacity: 0,
    x: 12,
    transition: { duration: DURATION_FAST, ease: "easeIn" },
  },
};
