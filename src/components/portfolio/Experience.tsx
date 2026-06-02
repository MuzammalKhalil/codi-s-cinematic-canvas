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
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">◇ Journey</span>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
            A <span className="chrome-text">timeline</span> of craft.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />
          {items.map((it, i) => (
            <motion.div
              key={it.y}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative mb-12 grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:left-1/2 pulse-glow"
                style={{ boxShadow: "0 0 20px var(--primary)" }} />
              <div className={`hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="text-xs uppercase tracking-[0.25em] text-primary">{it.y}</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-primary md:hidden">{it.y}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{it.r}</h3>
                <div className="text-sm text-muted-foreground">{it.c}</div>
                <p className="mt-3 text-muted-foreground">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
