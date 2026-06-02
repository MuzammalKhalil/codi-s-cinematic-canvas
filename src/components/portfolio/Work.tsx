import { motion } from "framer-motion";

const projects = [
  { n: "01", t: "Lumen OS", c: "SaaS · 2025", d: "Cinematic dashboard with WebGL particle field and real-time analytics.",
    g: "linear-gradient(135deg, #004242, #1a1a2e)", tag: ["React", "R3F", "Motion"] },
  { n: "02", t: "Atelier Noir", c: "E-commerce · 2025", d: "Luxury fashion store with editorial scroll storytelling.",
    g: "linear-gradient(135deg, #1B1212, #343434)", tag: ["Next.js", "GSAP"] },
  { n: "03", t: "Halo Studio", c: "Agency Site · 2024", d: "Award-winning brand site with shader transitions between cases.",
    g: "linear-gradient(135deg, #0a3d3d, #004242)", tag: ["Three.js", "Lenis"] },
  { n: "04", t: "Pulse Wallet", c: "Fintech · 2024", d: "Mobile-first wallet UI with kinetic data visualisations.",
    g: "linear-gradient(135deg, #1a1a1a, #003a3a)", tag: ["React Native", "Reanimated"] },
];

export function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">◇ Selected Work</span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Recent <span className="chrome-text">obsessions</span>.
            </h2>
          </div>
          <div className="hidden text-right text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
            <div>2024 — 2026</div>
            <div className="mt-1">Worldwide</div>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.n}
              href="#"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:bg-card/70 md:grid-cols-[100px_1fr_320px] md:p-8"
            >
              <div className="font-display text-5xl text-muted-foreground/40 transition-colors group-hover:text-primary md:text-6xl">{p.n}</div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{p.c}</div>
                <h3 className="mt-2 font-display text-3xl font-semibold md:text-5xl">{p.t}</h3>
                <p className="mt-3 max-w-xl text-muted-foreground">{p.d}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tag.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-2xl md:h-40">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: p.g }} />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.7 0.18 195 / 0.5), transparent 70%)" }} />
                <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full glass text-lg transition-transform group-hover:rotate-45">↗</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
