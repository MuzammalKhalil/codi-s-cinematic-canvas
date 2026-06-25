import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "About", key: "about" },
  { to: "/services", label: "Services", key: "services" },
  { to: "/portfolio", label: "Portfolio", key: "portfolio" },
  { to: "/contact", label: "Contact", key: "contact" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 w-full max-w-[1440px] px-6"
    >
      <nav className="glass flex items-center justify-between gap-4 rounded-full px-10 py-4">
        <Link to="/" className="flex items-center gap-2 rounded-full px-4 py-2">
          <span className="font-display font-bold tracking-tight text-lg">
            CODI<span className="text-primary">TECH</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="tel:+923041625523" className="btn-magnetic ml-1 text-sm rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground">
            Book a call
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-3xl p-4"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-full text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+923041625523"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
