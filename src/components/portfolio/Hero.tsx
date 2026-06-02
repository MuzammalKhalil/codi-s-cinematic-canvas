import { motion } from "framer-motion";
import { FloatingObjects } from "./FloatingObjects";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 grid-bg" />
      <FloatingObjects />

      {/* scan line */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        style={{ animation: "scan 8s linear infinite" }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass mb-8 flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for select projects · 2026
        </motion.div>

        <h1 className="relative font-display text-[14vw] font-semibold leading-[0.9] tracking-[-0.04em] md:text-[10rem]">
          {["Codi", "Tech"].map((word, wi) => (
            <span key={wi} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3 + wi * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className={wi === 1 ? "chrome-text inline-block" : "glow-text inline-block"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          Frontend developer crafting{" "}
          <span className="text-foreground">cinematic, motion-first interfaces</span>{" "}
          where every pixel breathes and every interaction feels alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#work" className="btn-magnetic group flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground">
            View Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" className="glass btn-magnetic rounded-full px-7 py-4 font-medium">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <a href="https://github.com/MuzammalKhalil" target="_blank" rel="noreferrer" className="hover:text-foreground">Github</a>
          <span className="h-px w-8 bg-border" />
          <a href="https://www.linkedin.com/in/muzammal-khalil-189b19317/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <span className="h-px w-8 bg-border" />
          <a href="https://www.facebook.com/muzammal.khalil.491578" target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
