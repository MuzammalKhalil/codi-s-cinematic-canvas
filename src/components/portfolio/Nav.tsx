import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/#work", label: "Work", key: "work" },
  { to: "/#", label: "Process", key: "process" },
  { to: "/#about", label: "About", key: "about" },
  { to: "/packages", label: "Packages", key: "packages" },
  { to: "/contact", label: "Contact", key: "contact" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <nav className="glass flex items-center justify-between gap-4 rounded-full px-3 py-3">
        <Link to="/" className="flex items-center gap-2 rounded-full px-4 py-2">
          <span className="font-display font-bold tracking-tight text-lg">
            CODI<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.key} to={l.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-magnetic text-sm rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground">
            Book a call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-3xl p-4"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link 
                  key={l.key} 
                  to={l.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-full text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
