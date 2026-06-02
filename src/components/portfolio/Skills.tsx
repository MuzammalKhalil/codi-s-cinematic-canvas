import { motion } from "framer-motion";

const skills = [
  { t: "Frontend Engineering", d: "React, Next.js, TypeScript, performance-first architecture.", i: "◢" },
  { t: "Motion Design", d: "Framer Motion & GSAP — choreographed UI that earns its frames.", i: "◐" },
  { t: "WebGL & 3D", d: "Three.js / R3F shaders, particles, scroll-driven worlds.", i: "◈" },
  { t: "UI / UX Craft", d: "Pixel-perfect systems with editorial typographic taste.", i: "▣" },
  { t: "Branding", d: "Translating identity into living, breathing product surfaces.", i: "✦" },
  { t: "Interaction Design", d: "Magnetic buttons, parallax, kinetic micro-feedback.", i: "❖" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">◇ Capabilities</span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              A toolkit forged for <br /> <span className="chrome-text">cinematic builds</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Six disciplines, one obsession — making the web feel like a film, not a form.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.4), transparent 70%)", filter: "blur(20px)" }} />
              <div className="relative">
                <div className="font-display text-5xl text-primary glow-text">{s.i}</div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-primary">
                  Explore <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
