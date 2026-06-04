import { motion } from "framer-motion";

const quotes = [
  { q: "Codi turned our launch into a moment. The motion felt expensive and intentional.", n: "Elena Park", r: "Founder, Lumen OS" },
  { q: "Rare combination of taste and technical depth. Our site shipped weeks ahead of schedule.", n: "Marcus Lee", r: "Creative Director, Halo" },
  { q: "Every interaction has a soul. Best frontend collaborator I've ever worked with.", n: "Sara Vidal", r: "Head of Product, Pulse" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">◇ Kind Words</span>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Trusted by <br /><span className="chrome-text">visionary teams</span>.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.n}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass relative flex flex-col gap-6 rounded-3xl p-8"
            >
              <div className="font-display text-6xl text-primary/40">"</div>
              <blockquote className="text-lg leading-relaxed">{q.q}</blockquote>
              <figcaption className="mt-auto border-t border-border pt-4">
                <div className="font-medium">{q.n}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
