# RYVEN — Agency Website Template

AI + Creative Technology Studio. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

---

## Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 16 (Turbopack) | Framework + routing |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility styling |
| Framer Motion | 11 | Scroll + hover animations |
| Lucide React | — | Icon system (available, used sparingly) |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & typecheck

```bash
npm run build      # Production build
npm run typecheck  # tsc --noEmit (zero errors expected)
```

---

## Project structure

```
ryven/
├── app/
│   ├── layout.tsx        Root layout — fonts, metadata, Open Graph
│   ├── page.tsx          Composes all 11 sections
│   └── globals.css       Design tokens, resets, viewfinder, marquee
│
├── components/           11 self-contained sections
│   ├── Navbar.tsx        Fixed nav + full-screen mobile overlay
│   ├── Hero.tsx          Eyebrow, headline, viewfinder media, CTAs
│   ├── Metrics.tsx       Large-type numbers (no cards)
│   ├── LogoStrip.tsx     CSS marquee, pause-on-hover
│   ├── Showcase.tsx  ★   Category tablist + crossfade + signal readout
│   ├── Services.tsx      Numbered editorial rows, hover reveal
│   ├── About.tsx         Two-col pull-quote + corner-marked image
│   ├── Process.tsx   ★   Five-node scroll-linked signal path
│   ├── Portfolio.tsx     Grid from data, hover meta overlay
│   ├── CTA.tsx           Final CTA — serif headline + single button
│   └── Footer.tsx        Wordmark, nav clusters, legal
│
├── data/                 ← All content lives here — swap without touching layout
│   ├── projects.ts       Project type + 6 placeholder entries
│   ├── services.ts       Service type + 5 service entries
│   └── clients.ts        Client type + 8 logo placeholder slots
│
└── lib/
    ├── animations.ts     Framer Motion variants (fadeUp, crossfade, stagger…)
    └── utils.ts          cn(), useReducedMotion(), clamp(), padCounter()
```

★ = signature interactions

---

## Design system

### Palette
| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B0B0C` | Page background |
| `surface` | `#141416` | Raised panels |
| `bone` | `#EDEAE4` | Primary text |
| `slate` | `#8B8A87` | Muted text / captions |
| `signal` | `#FF3D2E` | Status dots, single accent only — **never fill** |
| hairline | `rgba(237,234,228,0.12)` | 1px dividers |

### Typefaces (loaded via `next/font/google`)
- **Instrument Serif** italic — one emphasis word per headline only
- **Inter** — body, UI, nav
- **IBM Plex Mono** — all labels, eyebrows, live readouts

### Layout
- Max container: `1400px`
- Section padding: `128px` desktop → `64px` mobile
- Page gutter: `80px` desktop → `20px` mobile
- No cards, no shadows, no gradients, no glassmorphism

---

## Populating with real content

Everything is placeholder-ready. To populate:

| Placeholder | File | Action |
|---|---|---|
| `[XX]+` metrics | `components/Metrics.tsx` | Update the `metrics` array values |
| Project data | `data/projects.ts` | Fill `name`, `image`, `link`, `description` |
| Client logos | `data/clients.ts` | Replace `name` strings with SVG `<Image>` components |
| Service previews | `data/services.ts` | Replace `preview` strings with real media paths |
| Hero visual | `components/Hero.tsx` | Swap viewfinder content with `<Image>` or `<video>` |
| Team photo | `components/About.tsx` | Swap viewfinder content with `<Image>` |
| OG image | `public/og-image.png` | Add 1200×630 image |
| Domain | `app/layout.tsx` `metadataBase` | Set real production URL |
| Contact email | `components/CTA.tsx`, `components/Footer.tsx` | Replace `[hello@ryven.studio]` |

---

## Accessibility

- Skip-to-content link (visible on keyboard focus)
- All images: descriptive `aria-label` placeholders ready to receive real alt text
- Showcase: full `role="tablist"` / `role="tab"` / `role="tabpanel"` keyboard pattern
- Mobile menu: `aria-expanded`, `aria-controls`, `aria-modal`, body scroll lock
- All interactive elements: visible `focus-visible` ring (1px bone, 3px offset)
- `prefers-reduced-motion`: marquee stops, signal path static, all pulses disabled

---

## License

Template — no license. All rights reserved to Ryven Studio.
