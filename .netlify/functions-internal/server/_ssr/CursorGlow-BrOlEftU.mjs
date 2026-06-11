import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
const links = [
  { to: "/#work", label: "Work", key: "work" },
  { to: "/#", label: "Process", key: "process" },
  { to: "/#about", label: "About", key: "about" },
  // { to: "/packages", label: "Packages", key: "packages" },
  { to: "/contact", label: "Contact", key: "contact" }
];
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay: 0.3 },
      className: "fixed left-1/2 top-6 z-50 -translate-x-1/2 w-full max-w-[1440px] px-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "glass flex items-center justify-between gap-4 rounded-full px-10 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 rounded-full px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold tracking-tight text-lg", children: [
            "CODI",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "TECH" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground",
              children: l.label
            },
            l.key
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923041625523", className: "btn-magnetic ml-1 text-sm rounded-full bg-primary px-6 py-2 font-medium text-primary-foreground", children: "Book a call" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setIsMenuOpen(!isMenuOpen),
              className: "md:hidden flex flex-col gap-1.5 p-2 rounded-full hover:bg-white/5 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "opacity-0" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-6 h-0.5 bg-foreground transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}` })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            className: "md:hidden mt-4 glass rounded-3xl p-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setIsMenuOpen(false),
                  className: "px-4 py-3 rounded-full text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors",
                  children: l.label
                },
                l.key
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:+923041625523",
                  onClick: () => setIsMenuOpen(false),
                  className: "mt-2 w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-medium",
                  children: "Book a call"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-border bg-black/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1440px] px-6 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-bold mb-4", children: [
            "CODI",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "TECH" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs", children: "A premium digital design studio crafting cinematic web experiences for brands that refuse to look ordinary." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/#work", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Work" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "#", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Process" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/#about", className: "text-muted-foreground hover:text-foreground transition-colors", children: "About" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/website-development", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Web Development" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ui-ux-design", className: "text-muted-foreground hover:text-foreground transition-colors", children: "UI/UX Design" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/seo-optimization", className: "text-muted-foreground hover:text-foreground transition-colors", children: "SEO Optimization" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/branding", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Branding" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/e-commerce", className: "text-muted-foreground hover:text-foreground transition-colors", children: "E-Commerce" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/digital-marketing", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Digital Marketing" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shopify-development", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Shopify Development" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/website-maintenance", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Website Maintenance" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:muzammalkhaliloffical@gmail.com", className: "hover:text-foreground transition-colors", children: "muzammalkhaliloffical@gmail.com" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923041625523", className: "hover:text-foreground transition-colors", children: "+92 304 162 5523" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-6 inline-block text-sm border border-border rounded-full px-6 py-3 hover:border-primary transition-all", children: "Book a call" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "© 2026 Codi Tech. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Designed & engineered in-house" })
      ] })
    ] })
  ] });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  reactExports.useEffect(() => {
    const m = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      "aria-hidden": true,
      className: "pointer-events-none fixed z-[2] h-[500px] w-[500px] rounded-full",
      animate: { x: pos.x - 250, y: pos.y - 250 },
      transition: { type: "spring", damping: 30, stiffness: 200, mass: 0.5 },
      style: {
        background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.18), transparent 60%)",
        filter: "blur(40px)",
        mixBlendMode: "screen"
      }
    }
  );
}
export {
  CursorGlow as C,
  Footer as F,
  Nav as N
};
