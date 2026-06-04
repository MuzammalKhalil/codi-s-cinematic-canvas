import { motion } from "framer-motion";

const stats = [
  { v: "5+", l: "Years Crafting" },
  { v: "60+", l: "Projects Shipped" },
  { v: "30+", l: "Happy Clients" },
  { v: "20+", l: "Technologies" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary"
          >
            ◇ About
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl"
          >
            Engineering interfaces that <span className="chrome-text">move people</span>.
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a frontend developer obsessed with the intersection of code, motion and craft.
            For five years I've been shipping interfaces for ambitious brands — building the kind
            of websites that don't just inform, they perform.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My work lives at the edge of <span className="text-foreground">React, WebGL and design systems</span> —
            turning ideas into immersive, kinetic experiences that feel as good as they look.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-background/80 p-6 transition hover:bg-background"
              >
                <div className="font-display text-4xl font-semibold glow-text md:text-5xl">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
