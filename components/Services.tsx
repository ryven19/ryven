"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="services"
      aria-label="Services: what Ryven does"
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
            <p className="mono-label mb-2 md:mb-3">// SERVICES</p>
            <h2 className="font-sans font-medium text-display-md text-bone leading-tight tracking-[-0.02em] max-w-2xl">
              What{" "}
              <em className="font-serif italic font-normal">Ryven</em> does.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-sm text-slate max-w-xs leading-relaxed">
            A focused set of AI-driven creative capabilities built for
            brand impact and rapid delivery.
          </motion.p>
        </motion.div>

        {/* Services list — static editorial numbered rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col"
          role="list"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              role="listitem"
              className={`grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 py-6 sm:py-8 lg:py-10 border-t border-[rgba(0,0,0,0.1)] ${
                i === services.length - 1 ? "border-b border-[rgba(0,0,0,0.1)]" : ""
              }`}
            >
              {/* Service ID */}
              <div className="lg:col-span-1 flex items-start pt-0.5 sm:pt-1">
                <span className="mono-label">{service.id}</span>
              </div>

              {/* Service title */}
              <div className="lg:col-span-5 flex items-start">
                <h3
                  className="font-sans font-medium text-bone leading-tight tracking-[-0.015em]"
                  style={{ fontSize: "clamp(1.35rem, 3vw, 2.5rem)" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description — always visible */}
              <div className="lg:col-span-5 lg:col-start-7 flex items-start pt-1 lg:pt-0">
                <p className="font-sans text-sm text-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
