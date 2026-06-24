import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { motion } from "framer-motion";

const stats = [
  { v: "5+", l: "Years Crafting" },
  { v: "60+", l: "Projects Shipped" },
  { v: "30+", l: "Happy Clients" },
  { v: "20+", l: "Technologies" },
];

const teamMembers = [
  {
    name: "Muzammal Khalil",
    role: "Lead Frontend Developer",
    bio: "Passionate about creating cinematic, motion-first digital experiences.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codi Tech" },
      { name: "description", content: "Learn about our mission, team, and approach to creating digital excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-y" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-x" />

        <div className="relative mx-auto max-w-[1440px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Engineering interfaces that <span className="chrome-text">move people</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-semibold mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6">
                I'm a frontend developer obsessed with the intersection of code, motion and craft.
                For five years I've been shipping interfaces for ambitious brands — building the kind
                of websites that don't just inform, they perform.
              </p>
              <p className="text-muted-foreground text-lg">
                My work lives at the edge of <span className="text-foreground font-semibold">React, WebGL and design systems</span> —
                turning ideas into immersive, kinetic experiences that feel as good as they look.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-background/80 p-8 transition hover:bg-background"
                >
                  <div className="font-display text-5xl font-semibold glow-text">{s.v}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values / Approach */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-semibold">Our Approach</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We combine technical excellence with creative design to deliver exceptional digital experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                desc: "Every pixel, every animation, every interaction is thoughtfully designed and carefully executed.",
              },
              {
                title: "Innovation",
                desc: "We leverage the latest technologies and creative techniques to push the boundaries of what's possible.",
              },
              {
                title: "Performance",
                desc: "We build fast, responsive, and accessible websites that perform flawlessly on every device.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 border border-border hover:border-primary/30 transition-all"
                style={{ boxShadow: "0 0 40px oklch(0.55 0.18 195 / 0.1)" }}
              >
                <h3 className="text-2xl font-display font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
