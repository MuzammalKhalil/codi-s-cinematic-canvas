import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const servicesDropdownLinks = [
  { to: "/website-development", label: "Website Development", key: "web-dev" },
  { to: "/ui-ux-design", label: "UI/UX Design", key: "ui-ux" },
  { to: "/seo-optimization", label: "SEO Optimization", key: "seo" },
  { to: "/branding", label: "Branding", key: "branding" },
  { to: "/e-commerce", label: "E-Commerce", key: "ecommerce" },
  { to: "/digital-marketing", label: "Digital Marketing", key: "digital-marketing" },
  { to: "/shopify-development", label: "Shopify Development", key: "shopify" },
  { to: "/website-maintenance", label: "Website Maintenance", key: "maintenance" },
];

const links = [
  { to: "/about", label: "About", key: "about", isDropdown: false },
  { to: "/services", label: "Services", key: "services", isDropdown: true },
  { to: "/portfolio", label: "Portfolio", key: "portfolio", isDropdown: false },
  { to: "/contact", label: "Contact", key: "contact", isDropdown: false },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            l.isDropdown ? (
              <div 
                key={l.key} 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => {}}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground flex items-center gap-1"
                >
                  {l.label}
                  <span className="text-xs">▼</span>
                </button>

                {/* Services Dropdown */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 glass rounded-2xl p-2 w-56"
                    >
                      {servicesDropdownLinks.map((s) => (
                        <Link
                          key={s.key}
                          to={s.to}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition rounded-xl"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={l.key} to={l.to}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground">
                {l.label}
              </Link>
            )
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="tel:+923041625523" className="btn-magnetic ml-1 text-sm rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground">
            Book a call
          </a>
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
                <div key={l.key}>
                  {l.isDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="w-full text-left px-4 py-3 rounded-full text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors flex items-center justify-between"
                      >
                        {l.label}
                        <span className="text-xs">{isServicesDropdownOpen ? "▲" : "▼"}</span>
                      </button>
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {servicesDropdownLinks.map((s) => (
                              <Link
                                key={s.key}
                                to={s.to}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsServicesDropdownOpen(false);
                                }}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition rounded-xl my-1"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={l.to}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-3 rounded-full text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  )}
                </div>
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
