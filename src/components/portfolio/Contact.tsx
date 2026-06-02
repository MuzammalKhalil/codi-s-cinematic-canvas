import { motion } from "framer-motion";

const socials = [
  { l: "Email", v: "muzammalkhaliloffical@gmail.com", h: "mailto:muzammalkhaliloffical@gmail.com" },
  { l: "LinkedIn", v: "/in/muzammal-khalil", h: "https://www.linkedin.com/in/muzammal-khalil-189b19317/" },
  { l: "Github", v: "@MuzammalKhalil", h: "https://github.com/MuzammalKhalil" },
  { l: "Facebook", v: "/muzammal.khalil", h: "https://www.facebook.com/muzammal.khalil.491578" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="pulse-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.3), transparent 70%)",
          filter: "blur(60px)",
        }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">◇ Let's Build</span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-4 max-w-4xl font-display text-6xl font-semibold leading-[0.95] md:text-[8rem]"
        >
          Have a <span className="chrome-text italic">vision</span>? <br />
          <span className="glow-text">Let's ship it.</span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-xl text-muted-foreground">
          Available for select frontend and motion engagements. Average response time: 12 hours.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-12 grid max-w-2xl gap-4 text-left">
          <div className="grid gap-4 md:grid-cols-2">
            <input placeholder="Your name" className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)]" />
            <input placeholder="Email" type="email" className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)]" />
          </div>
          <textarea placeholder="Tell me about the project…" rows={5}
            className="glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)]" />
          <button type="submit" className="btn-magnetic mt-2 rounded-2xl bg-primary py-4 font-medium text-primary-foreground">
            Send transmission →
          </button>
        </form>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {socials.map((s) => (
            <a key={s.l} href={s.h} target="_blank" rel="noreferrer"
              className="group flex flex-col gap-1 bg-background p-5 text-left transition hover:bg-card">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</span>
              <span className="truncate transition group-hover:text-primary">{s.v} <span className="opacity-0 transition group-hover:opacity-100">↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
