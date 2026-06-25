import { motion } from "framer-motion";

const items = [
  { y: "2025 — Now", r: "Independent Frontend Developer", c: "Codi Tech · Worldwide",
    d: "Partnering with founders and studios on cinematic product launches and brand sites." },
  { y: "2023 — 2025", r: "Senior Frontend Engineer", c: "Halo Interactive",
    d: "Led motion architecture across three Awwwards-shortlisted launches." },
  { y: "2021 — 2023", r: "UI Developer", c: "Northwind Studio",
    d: "Built design systems and shipped 20+ marketing experiences for SaaS brands." },
  { y: "2019 — 2021", r: "Frontend Apprentice", c: "Self-taught",
    d: "Fell in love with shaders, scroll, and the rhythm of great interfaces." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-y" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-x" />

      <div className="relative mx-auto max-w-[1440px] px-6 z-10">
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl"
          >
            Building <span className="chrome-text">digital excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto"
          >
            Every milestone represents a step forward in perfecting the art of digital craftsmanship.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line - left aligned for mobile, center for desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          {items.map((it, i) => (
            <motion.div
              key={it.y}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "md:[&>div:last-child]:order-2" : "md:[&>div:first-child]:order-2"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center pulse-glow" style={{ boxShadow: "0 0 40px var(--primary)" }}>
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary" />
                </div>
              </div>

              {/* Year badge */}
              <div className={`flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-start md:justify-center pl-16 md:pl-0`}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl glass"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">{it.y}</span>
                </motion.div>
              </div>

              {/* Content card */}
              <div className="flex justify-start md:justify-center pl-16 md:pl-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border hover:border-primary/30 transition-colors w-full md:max-w-md"
                  style={{ boxShadow: "0 0 40px oklch(0.55 0.18 195 / 0.1)" }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl md:text-3xl font-display font-bold text-primary">
                      {String(4 - i).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-2xl font-display font-semibold mb-1 md:mb-2">{it.r}</h3>
                      <div className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{it.c}</div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{it.d}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
