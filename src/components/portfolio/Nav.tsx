import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/#work", label: "Work", key: "work" },
  { to: "/#", label: "Process", key: "process" },
  { to: "/#about", label: "About", key: "about" },
  { to: "/packages", label: "Packages", key: "packages" },
  { to: "/#contact", label: "Contact", key: "contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <nav className="glass flex items-center gap-1 rounded-full px-3 py-3">
        <Link to="/" className="flex items-center gap-2 rounded-full px-4 py-2">
          <span className="font-display font-bold tracking-tight text-lg">
            CODI<span className="text-primary">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.key} to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/#contact" className="btn-magnetic ml-1 text-sm rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground">
          Book a call
        </Link>
      </nav>
    </motion.header>
  );
}
