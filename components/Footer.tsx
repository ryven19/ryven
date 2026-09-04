import Link from "next/link";
import Image from "next/image";

// Internal links use Next.js <Link>, external/mailto use plain <a>
const navClusters = [
  {
    label: "Studio",
    links: [
      { label: "Work", href: "#work", external: false },
      { label: "Services", href: "#services", external: false },
      { label: "Process", href: "#process", external: false },
      { label: "Contact", href: "#contact", external: false },
    ],
  },
  {
    label: "Contact",
    links: [
      { label: "Start a project", href: "https://tally.so/r/EkOeVB", external: true },
      { label: "contact@ryven.website", href: "mailto:contact@ryven.website", external: true },
      { label: "Instagram", href: "https://www.instagram.com/ryven.ai/", external: true },
    ],
  },
];

const linkClass =
  "font-sans text-sm text-slate hover:text-bone transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone py-1 inline-block break-all sm:break-normal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t border-[rgba(0,0,0,0.1)] section-spacing"
    >
      <div className="container-ryven">
        {/* Top row: wordmark + tagline + nav clusters */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-8 mb-12 md:mb-16">
          {/* Wordmark + tagline */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Ryven — home"
              className="flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone"
            >
              <Image
                src="/logo.png"
                alt="Ryven logo mark"
                width={24}
                height={24}
                className="object-contain transition-opacity duration-300 group-hover:opacity-60"
              />
              <span className="font-mono text-mono-sm text-bone tracking-[0.08em] uppercase transition-colors duration-300 group-hover:text-slate">
                RYVEN
              </span>
            </Link>
            <p className="font-sans text-sm text-slate leading-relaxed max-w-xs">
              AI creative and commercial studio. Producing high-impact video ads,
              product visuals, and digital brand campaigns.
            </p>
          </div>

          {/* Nav clusters */}
          {navClusters.map((cluster) => (
            <div key={cluster.label} className="col-span-1 md:col-span-2 md:col-start-auto flex flex-col gap-3 sm:gap-4">
              <p className="mono-label">{cluster.label}</p>
              <ul role="list" className="flex flex-col gap-2 list-none">
                {cluster.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      // External URLs (https://, mailto:) — plain <a> tag
                      <a
                        href={link.href}
                        className={linkClass}
                        {...(link.href.startsWith("https")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    ) : (
                      // Internal anchor links — Next.js <Link>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: legal + status */}
        <div className="border-t border-[rgba(0,0,0,0.1)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="mono-label">
            © {year} Ryven Studio. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="signal-dot" aria-hidden="true" />
            <span className="mono-label text-slate">Open for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
