import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { m as Building2, M as Mail, n as Phone } from "../_libs/lucide-react.mjs";
const socials = [
  { l: "ABOUT STUDIO", v: "Premium Digital Design & Web Development", h: "#", i: Building2 },
  { l: "CONTACT INFO", v: "muzammalkhaliloffical@gmail.com", h: "mailto:muzammalkhaliloffical@gmail.com", i: Mail },
  { l: "PHONE", v: "+92 304 162 5523", h: "tel:+923041625523", i: Phone }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "pulse-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full",
        style: {
          background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.3), transparent 70%)",
          filter: "blur(60px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1440px] px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mx-auto mt-4 max-w-4xl font-display text-4xl md:text-6xl font-semibold",
          children: [
            "GET IN ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chrome-text italic", children: "TOUCH" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground text-sm", children: "Any questions or remarks? Just write us a message!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "mx-auto mt-12 grid max-w-2xl gap-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block", children: "First Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "John", className: "glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block", children: "Last Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Doe", className: "glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Enter a valid email address", type: "email", className: "glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 block", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              placeholder: "How can we help you?",
              rows: 5,
              className: "glass rounded-2xl px-5 py-4 outline-none transition focus:border-primary focus:shadow-[0_0_30px_oklch(0.55_0.18_195/0.3)] w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-4 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 py-4 font-semibold text-background", children: "SUBMIT MESSAGE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-3", children: socials.map((s) => {
        const IconComponent = s.i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: s.h,
            target: "_blank",
            rel: "noreferrer",
            className: "group flex flex-col items-center gap-4 p-5 transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "w-8 h-8 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold", children: s.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground max-w-xs text-center transition group-hover:text-primary", children: s.v })
            ]
          },
          s.l
        );
      }) })
    ] })
  ] });
}
export {
  Contact as C
};
