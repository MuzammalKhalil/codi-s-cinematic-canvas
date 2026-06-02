import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <nav className="glass flex items-center gap-1 rounded-full px-2 py-2 text-sm">
        <a href="#top" className="flex items-center gap-2 rounded-full px-4 py-2 font-display font-semibold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-primary pulse-glow" />
          CODI<span className="text-muted-foreground">.tech</span>
        </a>
        <div className="hidden md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="rounded-full px-4 py-2 text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-magnetic ml-1 rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground">
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
