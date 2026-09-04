import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

// ─── Tailwind class merge ─────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Reduced motion detection ─────────────────────────────────────────────────
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// ─── Clamp a number to a range ────────────────────────────────────────────────
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// ─── Format a number with a + suffix for metrics display ─────────────────────
export function formatMetric(value: string): { number: string; suffix: string } {
  const match = value.match(/^(\d+)(\+?)(.*)$/);
  if (!match) return { number: value, suffix: "" };
  return { number: match[1], suffix: match[2] + match[3] };
}

// ─── Pad single-digit number for live readout counters ───────────────────────
export function padCounter(n: number, digits = 3): string {
  return String(n).padStart(digits, "0");
}
