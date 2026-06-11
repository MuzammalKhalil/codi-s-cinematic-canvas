import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as CursorGlow, N as Nav, F as Footer } from "./CursorGlow-BrOlEftU.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Contact } from "./Contact-DG2lGXqs.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FloatingObjects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "float-y absolute left-[8%] top-[20%] h-32 w-32 rounded-3xl glass",
        style: { background: "var(--grad-chrome)", opacity: 0.25, transform: "rotate(12deg)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "float-x absolute right-[10%] top-[15%] h-40 w-40 rounded-full",
        style: {
          background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.05 195), oklch(0.3 0.08 200))",
          boxShadow: "var(--shadow-glow-soft)",
          opacity: 0.6
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "float-y absolute right-[20%] bottom-[10%] h-24 w-48 rounded-2xl glass",
        style: { animationDelay: "-3s", transform: "rotate(-8deg)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "float-x absolute left-[15%] bottom-[20%] h-20 w-20 rotate-45 glass",
        style: { animationDelay: "-5s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full",
        style: {
          background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.25), transparent 70%)",
          filter: "blur(60px)"
        }
      }
    )
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingObjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60",
        style: { animation: "scan 8s linear infinite" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "glass mb-8 flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-primary opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
            ] }),
            "Available for select projects · 2026"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "relative font-display text-[14vw] font-semibold leading-[0.9] tracking-[-0.04em] md:text-[10rem]", children: ["Codi", "Tech"].map((word, wi) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { duration: 1.1, delay: 0.3 + wi * 0.15, ease: [0.2, 0.8, 0.2, 1] },
          className: wi === 1 ? "chrome-text inline-block" : "glow-text inline-block",
          children: word
        }
      ) }, wi)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.9 },
          className: "mt-8 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl",
          children: [
            "Frontend developer crafting",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "cinematic, motion-first interfaces" }),
            " ",
            "where every pixel breathes and every interaction feels alive."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 1.1 },
          className: "mt-10 flex flex-wrap items-center justify-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#work", className: "btn-magnetic group flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground", children: [
              "View Work",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+923041625523", className: "glass btn-magnetic rounded-full px-7 py-4 font-medium", children: "Contact Me" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 1.4 },
          className: "mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/MuzammalKhalil", target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "Github" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/muzammal-khalil-189b19317/", target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "LinkedIn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/muzammal.khalil.491578", target: "_blank", rel: "noreferrer", className: "hover:text-foreground", children: "Facebook" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.6 },
        className: "absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
        children: [
          "Scroll",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-px bg-gradient-to-b from-primary to-transparent" })
        ]
      }
    )
  ] });
}
const items$1 = ["React", "TypeScript", "Next.js", "Framer Motion", "GSAP", "Three.js", "Tailwind", "WebGL", "Node.js", "Figma"];
function Marquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden border-y border-border bg-black/40 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee gap-16 whitespace-nowrap", children: [...items$1, ...items$1, ...items$1].map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-3xl text-muted-foreground md:text-5xl", children: [
    it,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-16 text-primary", children: "✦" })
  ] }, i)) }) });
}
const stats = [
  { v: "5+", l: "Years Crafting" },
  { v: "60+", l: "Projects Shipped" },
  { v: "30+", l: "Happy Clients" },
  { v: "20+", l: "Technologies" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "text-xs uppercase tracking-[0.3em] text-primary",
          children: "◇ About"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl",
          children: [
            "Engineering interfaces that ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text", children: "move people" }),
            "."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay: 0.1 },
        className: "flex flex-col gap-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "I'm a frontend developer obsessed with the intersection of code, motion and craft. For five years I've been shipping interfaces for ambitious brands — building the kind of websites that don't just inform, they perform." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-muted-foreground", children: [
            "My work lives at the edge of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "React, WebGL and design systems" }),
            " — turning ideas into immersive, kinetic experiences that feel as good as they look."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              className: "group relative bg-background/80 p-6 transition hover:bg-background",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-semibold glow-text md:text-5xl", children: s.v }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: s.l })
              ]
            },
            s.l
          )) })
        ]
      }
    )
  ] }) });
}
const skills = [
  { t: "Frontend Engineering", d: "React, Next.js, TypeScript, performance-first architecture.", i: "◢" },
  { t: "Motion Design", d: "Framer Motion & GSAP — choreographed UI that earns its frames.", i: "◐" },
  { t: "WebGL & 3D", d: "Three.js / R3F shaders, particles, scroll-driven worlds.", i: "◈" },
  { t: "UI / UX Craft", d: "Pixel-perfect systems with editorial typographic taste.", i: "▣" },
  { t: "Branding", d: "Translating identity into living, breathing product surfaces.", i: "✦" },
  { t: "Interaction Design", d: "Magnetic buttons, parallax, kinetic micro-feedback.", i: "❖" }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1440px] px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "◇ Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl", children: [
            "A toolkit forged for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text", children: "cinematic builds" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-muted-foreground", children: "Six disciplines, one obsession — making the web feel like a film, not a form." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.06, duration: 0.6 },
          className: "group relative overflow-hidden bg-background p-8 transition-colors hover:bg-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                style: { background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.4), transparent 70%)", filter: "blur(20px)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-primary glow-text", children: s.i }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl font-semibold", children: s.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: s.d }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition group-hover:text-primary", children: [
                "Explore ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
              ] })
            ] })
          ]
        },
        s.t
      )) })
    ] })
  ] });
}
const services = [
  {
    title: "Website Development",
    description: "Custom responsive websites built for speed and scalability.",
    number: "01",
    href: "/website-development"
  },
  {
    title: "UI/UX Design",
    description: "Modern interfaces designed to improve engagement.",
    number: "02",
    href: "/ui-ux-design"
  },
  {
    title: "SEO Optimization",
    description: "Smart SEO strategies that improve rankings and traffic.",
    number: "03",
    href: "/seo-optimization"
  },
  {
    title: "Branding",
    description: "Creative branding solutions for modern businesses.",
    number: "04",
    href: "/branding"
  },
  {
    title: "E-Commerce",
    description: "High-converting online stores built for growth.",
    number: "05",
    href: "/e-commerce"
  },
  {
    title: "Digital Marketing",
    description: "Performance marketing campaigns focused on ROI.",
    number: "06",
    href: "/digital-marketing"
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify stores for modern brands.",
    number: "07",
    href: "/shopify-development"
  },
  {
    title: "Website Maintenance",
    description: "Reliable updates, backups, and technical support.",
    number: "08",
    href: "/website-maintenance"
  }
];
function Services() {
  const [isClient, setIsClient] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative z-10 py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-primary mb-4", children: "What we do" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-display font-semibold", children: [
            "Services designed ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "for digital growth." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl", children: "Eight disciplines, one obsessive standard. Every engagement is led by a senior designer and engineer." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((service, i) => {
      const getAnimationProps = () => {
        const width = isClient ? window.innerWidth : 1024;
        let initial2 = { opacity: 0, y: 20 };
        if (width >= 1024) {
          const col = i % 4;
          if (col === 0) initial2 = { opacity: 0, x: -50 };
          else if (col === 3) initial2 = { opacity: 0, x: 50 };
        } else if (width >= 768) {
          const col = i % 2;
          if (col === 0) initial2 = { opacity: 0, x: -50 };
          else if (col === 1) initial2 = { opacity: 0, x: 50 };
        }
        return {
          initial: initial2,
          whileInView: { opacity: 1, x: 0, y: 0 }
        };
      };
      const { initial, whileInView } = getAnimationProps();
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial,
          whileInView,
          viewport: { once: true, margin: "-100px" },
          transition: { duration: 0.6, delay: i * 0.1 },
          whileHover: { y: -8, backgroundColor: "rgba(255,255,255,0.03)" },
          className: "group relative overflow-hidden rounded-2xl border border-border bg-black/20 p-6 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: service.href, className: "block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors", children: service.number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-semibold mt-2 group-hover:text-primary transition-colors", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: service.description })
          ] })
        },
        service.number
      );
    }) })
  ] }) });
}
const projects = [
  {
    n: "01",
    t: "Lumen OS",
    c: "SaaS · 2025",
    d: "Cinematic dashboard with WebGL particle field and real-time analytics.",
    g: "linear-gradient(135deg, #004242, #1a1a2e)",
    tag: ["React", "R3F", "Motion"]
  },
  {
    n: "02",
    t: "Atelier Noir",
    c: "E-commerce · 2025",
    d: "Luxury fashion store with editorial scroll storytelling.",
    g: "linear-gradient(135deg, #1B1212, #343434)",
    tag: ["Next.js", "GSAP"]
  },
  {
    n: "03",
    t: "Halo Studio",
    c: "Agency Site · 2024",
    d: "Award-winning brand site with shader transitions between cases.",
    g: "linear-gradient(135deg, #0a3d3d, #004242)",
    tag: ["Three.js", "Lenis"]
  },
  {
    n: "04",
    t: "Pulse Wallet",
    c: "Fintech · 2024",
    d: "Mobile-first wallet UI with kinetic data visualisations.",
    g: "linear-gradient(135deg, #1a1a1a, #003a3a)",
    tag: ["React Native", "Reanimated"]
  }
];
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "◇ Selected Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl", children: [
          "Recent ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text", children: "obsessions" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-right text-xs uppercase tracking-[0.25em] text-muted-foreground md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "2024 — 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: "Worldwide" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, delay: i * 0.08 },
        className: "group relative grid grid-cols-1 items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:bg-card/70 md:grid-cols-[100px_1fr_320px] md:p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-muted-foreground/40 transition-colors group-hover:text-primary md:text-6xl", children: p.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: p.c }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-3xl font-semibold md:text-5xl", children: p.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-muted-foreground", children: p.d }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.tag.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs text-muted-foreground", children: t }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden rounded-2xl md:h-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 transition-transform duration-700 group-hover:scale-110", style: { background: p.g } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100",
                style: { background: "radial-gradient(circle at 50% 50%, oklch(0.7 0.18 195 / 0.5), transparent 70%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full glass text-lg transition-transform group-hover:rotate-45", children: "↗" })
          ] })
        ]
      },
      p.n
    )) })
  ] }) });
}
const items = [
  {
    y: "2025 — Now",
    r: "Independent Frontend Developer",
    c: "Codi Tech · Worldwide",
    d: "Partnering with founders and studios on cinematic product launches and brand sites."
  },
  {
    y: "2023 — 2025",
    r: "Senior Frontend Engineer",
    c: "Halo Interactive",
    d: "Led motion architecture across three Awwwards-shortlisted launches."
  },
  {
    y: "2021 — 2023",
    r: "UI Developer",
    c: "Northwind Studio",
    d: "Built design systems and shipped 20+ marketing experiences for SaaS brands."
  },
  {
    y: "2019 — 2021",
    r: "Frontend Apprentice",
    c: "Self-taught",
    d: "Fell in love with shaders, scroll, and the rhythm of great interfaces."
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "◇ Journey" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl", children: [
        "A ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text", children: "timeline" }),
        " of craft."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" }),
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: i * 0.1 },
          className: `relative mb-12 grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:left-1/2 pulse-glow",
                style: { boxShadow: "0 0 20px var(--primary)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden md:block ${i % 2 === 0 ? "text-right" : "text-left"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: it.y }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary md:hidden", children: it.y }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold", children: it.r }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.c }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: it.d })
            ] })
          ]
        },
        it.y
      ))
    ] })
  ] }) });
}
const quotes = [
  { q: "Codi turned our launch into a moment. The motion felt expensive and intentional.", n: "Elena Park", r: "Founder, Lumen OS" },
  { q: "Rare combination of taste and technical depth. Our site shipped weeks ahead of schedule.", n: "Marcus Lee", r: "Creative Director, Halo" },
  { q: "Every interaction has a soul. Best frontend collaborator I've ever worked with.", n: "Sara Vidal", r: "Head of Product, Pulse" }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-16 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "◇ Kind Words" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-7xl", children: [
        "Trusted by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text", children: "visionary teams" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: quotes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: i * 0.1 },
        className: "glass relative flex flex-col gap-6 rounded-3xl p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl text-primary/40", children: '"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-lg leading-relaxed", children: q.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-auto border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: q.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: q.r })
          ] })
        ]
      },
      q.n
    )) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative noise", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
