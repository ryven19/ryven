import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── LIGHT PALETTE ────────────────────────────────────────────
        ink: "#FFFFFF",          // page background — white
        surface: "#F4F3F0",      // raised surface — warm off-white
        bone: "#111110",         // primary text — near-black
        slate: "#888785",        // muted text, captions
        signal: "#FF3D2E",       // accent — status dots, thin underlines, single accents only
        hairline: "rgba(0,0,0,0.1)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.25rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4.5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.75rem, 3.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "mono-label": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        "mono-sm":    ["0.75rem",   { lineHeight: "1", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section":        "8rem",
        "section-mobile": "4rem",
        "page-x":         "5rem",
        "page-x-mobile":  "1.25rem",
      },
      maxWidth: {
        container: "1400px",
      },
      transitionTimingFunction: {
        ryven: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.2" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:      "marquee 30s linear infinite",
        "pulse-slow": "pulse 2s ease-in-out infinite",
        "fade-in":    "fadeIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
