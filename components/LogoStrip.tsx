"use client";

import { clients, type Client } from "@/data/clients";
import { useReducedMotion } from "@/lib/utils";

export default function LogoStrip() {
  const reducedMotion = useReducedMotion();

  // Repeat array so the marquee seamlessly scrolls across all screen sizes
  const repeated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      aria-label="Clients & Partners"
      className="py-8 sm:py-10 border-y border-[rgba(0,0,0,0.08)] bg-white overflow-hidden"
    >
      <div className="container-ryven mb-4 sm:mb-6">
        <p className="mono-label text-[0.65rem] text-slate">
          // IN PARTNERSHIP WITH
        </p>
      </div>

      <div
        className={`flex items-center ${reducedMotion ? "gap-6 sm:gap-12 flex-wrap justify-center container-ryven" : ""}`}
        aria-live="off"
      >
        {reducedMotion ? (
          // Static grid for reduced-motion users
          clients.map((client) => (
            <LogoItem key={client.id} client={client} />
          ))
        ) : (
          // Continuous marquee — duplicated track for seamless loop
          <div
            className="marquee-track flex items-center"
            aria-hidden="false"
            role="list"
            aria-label="Client logos"
          >
            {repeated.map((client, i) => (
              <div
                key={`${client.id}-${i}`}
                role="listitem"
                className="flex-shrink-0 px-6 sm:px-8 md:px-12"
              >
                <LogoItem client={client} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function LogoItem({ client }: { client: Client }) {
  return (
    <div
      className="flex items-center gap-3.5 group cursor-default transition-all duration-300 opacity-80 hover:opacity-100"
      aria-label={client.name}
    >
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-md overflow-hidden bg-surface border border-[rgba(0,0,0,0.08)] flex items-center justify-center p-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain rounded-[4px]"
        />
      </div>
      <span className="font-sans text-sm md:text-base font-medium text-bone tracking-tight transition-colors">
        {client.name}
      </span>
    </div>
  );
}
