import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CursorGlow, N as Nav, F as Footer } from "./CursorGlow-BrOlEftU.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, R as Rocket, C as Cpu, M as Mail, T as Target, Z as Zap, a as ShieldCheck, P as Palette, b as TrendingUp, c as Share2, d as Settings, e as Search, f as MousePointer2, L as LayoutDashboard, g as Monitor, h as Smartphone, i as RefreshCw, j as CodeXml, k as Layers, l as ShoppingBag, G as Globe, B as Briefcase } from "../_libs/lucide-react.mjs";
const servicesData = {
  "website-development": {
    hero: {
      badge: "Premium Website Engineering",
      title: "ENGINEERING HIGH-PERFORMANCE DIGITAL EXPERIENCE LABS",
      subtitle: "We architect custom React & Next.js web systems that load instantly, engage deeply, and convert traffic into scalable business value.",
      stats: [
        { value: "100%", label: "Custom Developed" },
        { value: "<1s", label: "Average Load Time" },
        { value: "30+", label: "Success Partners" }
      ]
    },
    about: {
      title: "SCALABLE & CLEAN CODE STRUCTURES",
      description: "Codi Tech is dedicated to building robust and scalable web applications. We reject generic templates and builder bloat, writing semantic, hand-crafted code optimized for modern search engines and flawless user interactions.",
      features: [
        "Next-Gen Frameworks",
        "Speed Optimization",
        "Search-Engine Ready",
        "Semantic Structure"
      ]
    },
    solutions: {
      title: "FULL-STACK WEBCRAFT SOLUTIONS",
      cards: [
        {
          title: "Custom React Apps",
          description: "Next.js and Vite platforms tailored to unique business flows.",
          icon: "code-xml"
        },
        {
          title: "Enterprise Portals",
          description: "Secure, high-bandwidth corporate hubs for seamless workflows.",
          icon: "globe"
        },
        {
          title: "Performance Optimization",
          description: "Speed audits and migration to modern headless tech stacks.",
          icon: "zap"
        },
        {
          title: "Tailored CMS Integration",
          description: "Custom dashboard management built on headless WordPress or Sanity.",
          icon: "layers"
        },
        {
          title: "Interactive Web Apps",
          description: "Highly responsive user dashboards and dynamic data portals.",
          icon: "monitor"
        },
        {
          title: "Legacy App Modernization",
          description: "Upgrading old codebases to modern design systems and fast runtimes.",
          icon: "refresh-cw"
        }
      ]
    },
    process: {
      title: "OUR CORE ENGINEERING METHODOLOGY",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "Deep-diving into your target audience and system requirements."
        },
        {
          number: "02",
          title: "Architecture",
          description: "Structuring state, API flows, and component hierarchies."
        },
        {
          number: "03",
          title: "Development",
          description: "Writing modular, type-safe, and clean code with Tailwind styles."
        },
        {
          number: "04",
          title: "QA Testing",
          description: "Rigorous cross-browser, speed, and usability audits."
        },
        {
          number: "05",
          title: "Launch",
          description: "Deploying via secure, edge-hosted CDNs with continuous deployment setups."
        }
      ]
    },
    cta: {
      title: "LET'S BUILD A HIGHER STANDARD OF WEB",
      subtitle: "Ready to replace slow, outdated templates with a custom web experience that performs? Reach out today."
    }
  },
  "ui-ux-design": {
    hero: {
      badge: "High-Fidelity Interface Design",
      title: "CRAFTING KINETIC INTERFACES THAT COMMUNICATE BRAND VALUE",
      subtitle: "We design pixel-perfect, motion-first digital products. We bridge the gap between creative visual art and logical, user-friendly experiences.",
      stats: [
        { value: "150+", label: "Product Prototypes" },
        { value: "20+", label: "Design Systems Built" },
        { value: "100%", label: "User Focused" }
      ]
    },
    about: {
      title: "BEAUTY POWERED BY USER BEHAVIOR",
      description: "We believe interfaces should not only look premium but feel organic to navigate. Our design studio combines deep user research with wireframing and interactive motion to build seamless digital journeys.",
      features: [
        "Interactive Prototyping",
        "Design System Craft",
        "User Journey Maps",
        "Motion Guidelines"
      ]
    },
    solutions: {
      title: "CREATIVE DESIGN SOLUTIONS",
      cards: [
        {
          title: "SaaS Dashboard Design",
          description: "Simplifying complex workflows into clean, data-driven interfaces.",
          icon: "panels-top-left"
        },
        {
          title: "Mobile App Design",
          description: "Native iOS and Android app experiences focused on tactile interactions.",
          icon: "smartphone"
        },
        {
          title: "Tactile Web Layouts",
          description: "Premium brand landing pages designed to showcase visual identity.",
          icon: "palette"
        },
        {
          title: "Interactive Prototypes",
          description: "High-fidelity Figma prototypes representing final product animations.",
          icon: "mouse-pointer2"
        },
        {
          title: "Design Systems",
          description: "Reusable UI kits and component token guides for unified scaling.",
          icon: "layers"
        },
        {
          title: "UX Audit & Optimization",
          description: "Analyzing heatmaps and logs to find and fix user drop-off points.",
          icon: "search"
        }
      ]
    },
    process: {
      title: "OUR CREATIVE DESIGN WORKFLOW",
      steps: [
        {
          number: "01",
          title: "Research",
          description: "Empathizing with users to map behaviors and identify pain points."
        },
        {
          number: "02",
          title: "Wireframing",
          description: "Creating low-fidelity layouts to align on navigation hierarchy."
        },
        {
          number: "03",
          title: "Visual Direction",
          description: "Defining color mood boards, typography, and premium styling."
        },
        {
          number: "04",
          title: "High-Fi Mockups",
          description: "Crafting beautiful, pixel-perfect layouts for all responsive states."
        },
        {
          number: "05",
          title: "Prototype",
          description: "Linking interactions and motion curves to test user flow viability."
        }
      ]
    },
    cta: {
      title: "DESIGN EXPERIENCES THAT ENGAGE DEEPLY",
      subtitle: "Turn complex interfaces into clean, beautiful, and high-converting products. Let's design it together."
    }
  },
  "seo-optimization": {
    hero: {
      badge: "Data-Driven Rank Authority",
      title: "DOMINATE SEARCH RESULTS TO ACCELERATE ORGANIC ACQUISITION",
      subtitle: "We help ambitious brands rise to page one through rigorous search engine optimization, content strategy, and technical crawling health.",
      stats: [
        { value: "3x+", label: "Average Traffic Lift" },
        { value: "10k+", label: "Ranked Target Keywords" },
        { value: "100%", label: "White-Hat Growth" }
      ]
    },
    about: {
      title: "SYSTEMIC SEARCH ENGINE DOMINANCE",
      description: "Generic SEO tactics don't work. We focus on search intent, schema markup, site speed, and domain authority to build sustainable ranking growth that reduces your dependency on paid ads.",
      features: [
        "Competitor Audits",
        "Core Web Vitals SEO",
        "Content Mapping",
        "Link Equity Building"
      ]
    },
    solutions: {
      title: "AUTHORITATIVE SEO SERVICES",
      cards: [
        {
          title: "Technical Site Audit",
          description: "Analyzing indexing bugs, crawl budget, and redirect loops.",
          icon: "settings"
        },
        {
          title: "On-Page Optimization",
          description: "Refining headings, semantic markup, and title tag density.",
          icon: "globe"
        },
        {
          title: "Search Intent Mapping",
          description: "Researching exact keywords your customers use when they are ready to buy.",
          icon: "target"
        },
        {
          title: "Link Building Campaigns",
          description: "Earning high-quality backlinks from trusted editorial platforms.",
          icon: "share2"
        },
        {
          title: "Content Authority Engine",
          description: "Drafting search-optimized articles that position you as an expert.",
          icon: "panels-top-left"
        },
        {
          title: "Performance Tracking",
          description: "Providing clear dashboard analytics and growth insights.",
          icon: "trending-up"
        }
      ]
    },
    process: {
      title: "OUR STRATEGIC SEARCH ROADMAP",
      steps: [
        {
          number: "01",
          title: "Audit",
          description: "Inspecting site health, index status, and competitor backlink profiles."
        },
        {
          number: "02",
          title: "Keywords",
          description: "Mapping out high-value, high-intent keywords to target."
        },
        {
          number: "03",
          title: "Optimization",
          description: "Fixing technical code issues and updating existing pages."
        },
        {
          number: "04",
          title: "Link Acquisition",
          description: "Running PR outreach campaigns to drive domain authority."
        },
        {
          number: "05",
          title: "Monitor & Refine",
          description: "Reviewing search console data to scale top-performing pages."
        }
      ]
    },
    cta: {
      title: "STOP HIDING FROM YOUR CLIENTS",
      subtitle: "Your target audience is actively searching for your services. Let's make sure they find your website first."
    }
  },
  "branding": {
    hero: {
      badge: "Premium Visual Identity",
      title: "CRAFTING AUTHENTIC BRAND SYSTEMS THAT LEAVE AN IMPRESSION",
      subtitle: "We shape memorable brand stories and visual design systems that connect with target audiences and differentiate you from competitors.",
      stats: [
        { value: "50+", label: "Identity Systems" },
        { value: "100%", label: "Original Design" },
        { value: "Custom", label: "Brand Voice" }
      ]
    },
    about: {
      title: "STRATEGIC VISUAL COMMUNICATION",
      description: "Great branding goes beyond logo design. We build comprehensive systems—including color science, typography guidelines, and messaging tone—to give your company a strong, uniform digital voice.",
      features: [
        "Bespoke Logo Mark",
        "Color Psychology",
        "Typography Systems",
        "Voice & Style Guides"
      ]
    },
    solutions: {
      title: "COMPLETE BRAND SUITE",
      cards: [
        {
          title: "Brand Strategy",
          description: "Aligning your business mission with market opportunities.",
          icon: "target"
        },
        {
          title: "Logo & Wordmark",
          description: "Crafting timeless visual symbols that scale across physical & digital media.",
          icon: "sparkles"
        },
        {
          title: "Identity Guidelines",
          description: "Providing rules for color, typography, grids, and assets.",
          icon: "layers"
        },
        {
          title: "Social Identity Kits",
          description: "Consistent templates and banners for social profiles.",
          icon: "share2"
        },
        {
          title: "Collateral Design",
          description: "Professional business stationery, card layouts, and digital slide decks.",
          icon: "briefcase"
        },
        {
          title: "Brand Voice & Tone",
          description: "Developing verbal identity frameworks to keep messaging consistent.",
          icon: "mouse-pointer2"
        }
      ]
    },
    process: {
      title: "OUR IDENTITY CRAFT PROCESS",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "Uncovering your brand history, target audience, and business values."
        },
        {
          number: "02",
          title: "Direction",
          description: "Creating mood boards to establish look and feel parameters."
        },
        {
          number: "03",
          title: "Sketch & Design",
          description: "Drafting concepts, vectorizing logo marks, and selecting fonts."
        },
        {
          number: "04",
          title: "Brand Collateral",
          description: "Applying the brand system to mockups and real-world assets."
        },
        {
          number: "05",
          title: "Guidelines Handover",
          description: "Delivering all vector resources alongside a comprehensive usage manual."
        }
      ]
    },
    cta: {
      title: "GIVE YOUR BUSINESS A BOLD DIGITAL VOICE",
      subtitle: "Ready to stand out with a professional brand identity that commands attention? Let's build your story."
    }
  },
  "ecommerce": {
    hero: {
      badge: "High-Volume Store Engineering",
      title: "ENGINEERING CONVERSION-OPTIMIZED ONLINE STOREFRONTS",
      subtitle: "We build lightning-fast online shopping experiences designed to reduce cart abandonment and turn casual visitors into loyal customers.",
      stats: [
        { value: "100%", label: "Secure Payment" },
        { value: "Fast", label: "Mobile Checkout" },
        { value: "30+", label: "Stores Launched" }
      ]
    },
    about: {
      title: "FRICTIONLESS DIGITAL COMMERCE",
      description: "We believe e-commerce should be seamless for both you and your customers. Our custom stores feature clean database structures, optimized checkout funnels, and easy order management setups.",
      features: [
        "Checkout Funnel Tuning",
        "Secure Merchant Gateways",
        "Inventory Automations",
        "Responsive Product Grids"
      ]
    },
    solutions: {
      title: "COMMERCE SOLUTIONS",
      cards: [
        {
          title: "Custom Store Development",
          description: "Bespoke online storefronts built with modern headless tech.",
          icon: "shopping-bag"
        },
        {
          title: "Subscription Platforms",
          description: "Configuring recurring payments and membership billing systems.",
          icon: "globe"
        },
        {
          title: "Gateway Integration",
          description: "Connecting Stripe, PayPal, and modern payment APIs securely.",
          icon: "shield-check"
        },
        {
          title: "Cart Optimization",
          description: "Minimizing checkout steps to boost sales conversion rates.",
          icon: "zap"
        },
        {
          title: "Order System Automation",
          description: "Syncing inventory counts and warehouse tracking streams.",
          icon: "refresh-cw"
        },
        {
          title: "Sales Analytics Hubs",
          description: "Setting up detailed revenue and user-journey metrics.",
          icon: "target"
        }
      ]
    },
    process: {
      title: "OUR COMMERCE LAUNCH ROADMAP",
      steps: [
        {
          number: "01",
          title: "Product Mapping",
          description: "Reviewing catalog details, tax structures, and shipping paths."
        },
        {
          number: "02",
          title: "Architecture",
          description: "Structuring database collections, user accounts, and cart state."
        },
        {
          number: "03",
          title: "Interface Design",
          description: "Designing conversion-first product listing and detail pages."
        },
        {
          number: "04",
          title: "Gateway Integration",
          description: "Linking payment processors and automated tax systems."
        },
        {
          number: "05",
          title: "Testing & Launch",
          description: "Executing end-to-end sandbox orders before going live."
        }
      ]
    },
    cta: {
      title: "CONVERT VISITORS INTO BUYERS",
      subtitle: "Maximize your digital sales potential with a fast, secure, and beautiful online store. Let's start building."
    }
  },
  "digital-marketing": {
    hero: {
      badge: "Performance-First Marketing",
      title: "GROW YOUR AUDIENCE AND SCALE ad ROI",
      subtitle: "We run highly optimized, data-backed campaigns that capture search intent, drive lead generation, and multiply your return on ad spend.",
      stats: [
        { value: "100%", label: "Data-Driven Decisions" },
        { value: "Multi", label: "Channel Ads" },
        { value: "ROI", label: "Focused Campaigns" }
      ]
    },
    about: {
      title: "ACQUISITION DRIVEN BY ANALYTICS",
      description: "We don't guess with your advertising budget. We study customer data, construct persuasive copy, and implement rigorous A/B testing to ensure your ads convert at the lowest possible acquisition cost.",
      features: [
        "Targeted PPC Campaigns",
        "Ad Copy Optimization",
        "Lead Funnel Creation",
        "Conversion Tracking"
      ]
    },
    solutions: {
      title: "GROWTH ENGINE SOLUTIONS",
      cards: [
        {
          title: "Paid Search Ads",
          description: "Dominating Google Search for keywords with direct buyer intent.",
          icon: "target"
        },
        {
          title: "Social Ads Campaigns",
          description: "Reaching qualified prospects on Meta, LinkedIn, and TikTok.",
          icon: "share2"
        },
        {
          title: "Funnels & Landing Pages",
          description: "Building fast landing pages to capture incoming ad traffic.",
          icon: "panels-top-left"
        },
        {
          title: "Email Automations",
          description: "Setting up welcome flows and drip sequences to nurture leads.",
          icon: "mail"
        },
        {
          title: "Creative Ad Design",
          description: "Developing engaging image and video ad layouts.",
          icon: "palette"
        },
        {
          title: "Analytics Auditing",
          description: "Configuring UTM tracking parameters to measure ROI.",
          icon: "trending-up"
        }
      ]
    },
    process: {
      title: "OUR PERFORMANCE MARKETING CYCLE",
      steps: [
        {
          number: "01",
          title: "Targeting",
          description: "Defining customer demographics, pain points, and buyer behaviors."
        },
        {
          number: "02",
          title: "Ad Creation",
          description: "Writing copy and designing creative resources for campaigns."
        },
        {
          number: "03",
          title: "Launch",
          description: "Deploying campaigns with budget guardrails to test assumptions."
        },
        {
          number: "04",
          title: "A/B Testing",
          description: "Comparing headers, creatives, and landing pages to optimize conversion."
        },
        {
          number: "05",
          title: "Scaling",
          description: "Allocating budget to the most profitable keywords and audiences."
        }
      ]
    },
    cta: {
      title: "MULTIPLY YOUR CLIENT ACQUISITION",
      subtitle: "Stop wasting money on unoptimized campaigns. Let's build a systematic growth engine for your company."
    }
  },
  "shopify-development": {
    hero: {
      badge: "Bespoke Shopify Engineering",
      title: "BUILDING PREMIUM TAILORED SHOPIFY STOREFRONTS",
      subtitle: "We craft fast, custom Liquid and Hydrogen store themes that reflect your brand identity while utilizing Shopify's powerful checkout backend.",
      stats: [
        { value: "Custom", label: "Liquid Theme Dev" },
        { value: "Headless", label: "Shopify Hydrogen" },
        { value: "Speed", label: "Optimized Setup" }
      ]
    },
    about: {
      title: "TAILORED SHOPIFY POWER",
      description: "Avoid generic templates that bloat your site and slow down your store. Codi Tech builds custom Shopify storefronts from scratch, ensuring your page speed stays high and checkout is completely seamless.",
      features: [
        "Liquid Theme Engineering",
        "App Stack Architecture",
        "Seamless Store Migration",
        "Core Web Vitals Audit"
      ]
    },
    solutions: {
      title: "SHOPIFY ENGINE SERVICES",
      cards: [
        {
          title: "Custom Liquid Themes",
          description: "Building tailored templates optimized for visual brand identity.",
          icon: "code-xml"
        },
        {
          title: "Shopify App Integrations",
          description: "Integrating ERP, inventory, and marketing apps safely.",
          icon: "cpu"
        },
        {
          title: "Speed Optimization",
          description: "Optimizing Liquid code and scripts to reduce load times.",
          icon: "zap"
        },
        {
          title: "E-commerce Migrations",
          description: "Moving existing databases from WordPress, Magento, or custom code.",
          icon: "refresh-cw"
        },
        {
          title: "Headless Storefronts",
          description: "Building Next-Gen Shopify apps using React and the Storefront API.",
          icon: "rocket"
        },
        {
          title: "Product Listing Design",
          description: "Designing beautiful grids, filter layouts, and product pages.",
          icon: "search"
        }
      ]
    },
    process: {
      title: "OUR SHOPIFY BUILD WORKFLOW",
      steps: [
        {
          number: "01",
          title: "Scope",
          description: "Mapping out product structures, shipping methods, and necessary apps."
        },
        {
          number: "02",
          title: "Visual Design",
          description: "Creating custom layouts for home, collection, and checkout pages."
        },
        {
          number: "03",
          title: "Coding",
          description: "Developing custom Liquid code and styling with Tailwind."
        },
        {
          number: "04",
          title: "Integration",
          description: "Linking payment processors, shipping apps, and setting up redirects."
        },
        {
          number: "05",
          title: "Launch & Handoff",
          description: "Taking the store live and training your team on editor controls."
        }
      ]
    },
    cta: {
      title: "SCALE YOUR SHOPIFY BUSINESS",
      subtitle: "Get a custom Shopify store built for speed and high conversions. Let's start coding today."
    }
  },
  "website-maintenance": {
    hero: {
      badge: "Technical Site Care & Support",
      title: "WE KEEP YOUR DIGITAL ASSETS SECURE AND RUNNING FAST",
      subtitle: "Delegate server updates, security patches, backups, and small code changes to our engineering team so you can focus on running your business.",
      stats: [
        { value: "24/7", label: "Site Monitoring" },
        { value: "Zero", label: "Downtime Vibe" },
        { value: "Daily", label: "Offsite Backups" }
      ]
    },
    about: {
      title: "CONTINUOUS HEALTH & SECURITY AUDITS",
      description: "A launch is only the beginning. To stay ahead, your site needs regular system updates, security scans, and database maintenance to prevent bugs, crashes, and search ranking drops.",
      features: [
        "Continuous Security Scans",
        "Daily Offsite Backups",
        "Core Updates & Patches",
        "Priority Code Support"
      ]
    },
    solutions: {
      title: "HEALTH & CARE SOLUTIONS",
      cards: [
        {
          title: "Security Protection",
          description: "Monitoring for malware and defending against server attacks.",
          icon: "shield-check"
        },
        {
          title: "Core Platform Updates",
          description: "Safely updating modules, plugins, and package versions.",
          icon: "settings"
        },
        {
          title: "Database Backups",
          description: "Scheduling secure, offsite backups to recover data instantly.",
          icon: "refresh-cw"
        },
        {
          title: "Speed Maintenance",
          description: "Regularly clearing databases to keep load times low.",
          icon: "zap"
        },
        {
          title: "Priority Content Edits",
          description: "Quick turnaround on adding pages, updating text, or pricing.",
          icon: "panels-top-left"
        },
        {
          title: "Bug Fix Support",
          description: "Rapid debugging and technical response for any runtime issues.",
          icon: "code-xml"
        }
      ]
    },
    process: {
      title: "OUR ONGOING CARE FLOW",
      steps: [
        {
          number: "01",
          title: "Inspection",
          description: "Auditing database size, code plugins, and security health."
        },
        {
          number: "02",
          title: "Setup",
          description: "Configuring automated daily backups and security firewalls."
        },
        {
          number: "03",
          title: "Monitoring",
          description: "Uptime tracking to catch and fix connection issues immediately."
        },
        {
          number: "04",
          title: "Support",
          description: "Answering your technical requests and executing code changes."
        },
        {
          number: "05",
          title: "Reports",
          description: "Providing monthly updates on site speed, security logs, and updates."
        }
      ]
    },
    cta: {
      title: "PROTECT YOUR DIGITAL ASSETS",
      subtitle: "Keep your website secure, fast, and free of bugs. Partner with Codi Tech for professional site care."
    }
  }
};
const iconMap = {
  "briefcase": Briefcase,
  "globe": Globe,
  "shopping-bag": ShoppingBag,
  "layers": Layers,
  "code-xml": CodeXml,
  "refresh-cw": RefreshCw,
  "smartphone": Smartphone,
  "monitor": Monitor,
  "panels-top-left": LayoutDashboard,
  "mouse-pointer2": MousePointer2,
  "search": Search,
  "settings": Settings,
  "share2": Share2,
  "trending-up": TrendingUp,
  "sparkles": Sparkles,
  "palette": Palette,
  "shield-check": ShieldCheck,
  "zap": Zap,
  "target": Target,
  "mail": Mail,
  "cpu": Cpu,
  "rocket": Rocket
};
const titleLinesMap = {
  "website-development": ["WE BUILD", "MODERN WEBSITES", "THAT GROW BRANDS"],
  "ui-ux-design": ["WE DESIGN", "MODERN INTERFACES", "THAT ENGAGE"],
  "seo-optimization": ["WE OPTIMIZE", "SEARCH RANKINGS", "TO GROW SALES"],
  "branding": ["WE CRAFT", "DISTINCT IDENTITIES", "THAT LAST"],
  "ecommerce": ["WE BUILD", "ONLINE STORES", "THAT SELL"],
  "digital-marketing": ["WE GROW", "YOUR AUDIENCE", "AND ROI"],
  "shopify-development": ["WE BUILD", "PREMIUM SHOPIFY", "EXPERIENCES"],
  "website-maintenance": ["WE KEEP", "YOUR WEBSITE", "FAST AND SECURE"]
};
function ServiceLayout({ serviceKey }) {
  const data = servicesData[serviceKey];
  if (!data) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative noise min-h-screen flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-semibold mb-4", children: "Service Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-primary hover:underline", children: "Go Back Home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  const titleLines = titleLinesMap[serviceKey] || [data.hero.title];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative noise min-h-screen bg-background text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 pt-36 pb-20 px-6 min-h-screen flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none -z-10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-teal-glow/10 blur-[100px] float-y" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              className: "glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
                data.hero.badge
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1 },
              className: "font-display text-4xl sm:text-6xl lg:text-[5.5rem] leading-[0.9] font-bold tracking-tight uppercase",
              children: titleLines.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: index === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary glow-text", children: line }) : line }, index))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "mt-8 mx-auto lg:mx-0 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-sans",
              children: data.hero.subtitle
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              className: "mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/contact",
                    className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]",
                    children: [
                      "START PROJECT",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/#work",
                    className: "glass w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium text-foreground hover:bg-white/5 transition-all",
                    children: "VIEW PORTFOLIO"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.8, delay: 0.4 },
              className: "mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-8 sm:gap-12",
              children: data.hero.stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[100px] sm:min-w-[120px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl sm:text-4xl font-bold text-primary glow-text", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] tracking-wider text-muted-foreground uppercase font-sans", children: stat.label })
              ] }, i))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1, type: "spring" },
            className: "relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] flex items-center justify-center float-y",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-10 rounded-full border-[8px] sm:border-[12px] border-transparent",
                  style: {
                    background: "linear-gradient(var(--background), var(--background)) padding-box, var(--grad-teal) border-box",
                    boxShadow: "0 0 60px oklch(0.55 0.18 195 / 0.15)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-16 w-16 text-primary glow-text animate-pulse" })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 py-24 sm:py-32 border-t border-border/50 bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-4 text-xs tracking-[0.3em] text-primary uppercase",
            children: "◇ ABOUT SERVICE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight max-w-2xl leading-[1.05]",
            children: data.about.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "glass border border-border rounded-3xl p-8 sm:p-12 flex flex-col justify-center bg-black/20",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base sm:text-lg leading-relaxed font-sans", children: data.about.description })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: data.about.features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            whileHover: { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" },
            className: "glass border border-border rounded-2xl p-6 flex items-center justify-center text-foreground font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all duration-300",
            children: feature
          },
          feature
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 py-24 sm:py-32 border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-4 text-xs tracking-[0.3em] text-primary uppercase",
            children: "◇ OUR SERVICES"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight leading-[1.05]",
            children: data.solutions.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: data.solutions.cards.map((card, i) => {
        const IconComponent = iconMap[card.icon] || Sparkles;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.08 },
            whileHover: { y: -8, borderColor: "rgba(var(--primary), 0.3)" },
            className: "group glass border border-border rounded-3xl p-8 flex flex-col items-start transition-all duration-300 bg-black/10",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 bg-white/[0.02]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconComponent, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl font-semibold mb-3 tracking-wide uppercase transition-colors group-hover:text-primary leading-tight", children: card.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm sm:text-base leading-relaxed font-sans", children: card.description })
            ]
          },
          card.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 py-24 sm:py-32 border-t border-border/50 bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-4 text-xs tracking-[0.3em] text-primary uppercase",
            children: "◇ WORK PROCESS"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight leading-[1.05]",
            children: data.process.title
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6", children: data.process.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          whileHover: { y: -6, backgroundColor: "rgba(255, 255, 255, 0.03)" },
          className: "group glass border border-border rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 bg-black/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl sm:text-6xl font-bold text-muted-foreground/15 mb-6 group-hover:text-primary transition-colors duration-300", children: step.number }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg sm:text-xl font-semibold mb-3 uppercase tracking-wider text-foreground", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans", children: step.description })
          ]
        },
        step.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 py-24 sm:py-32 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "noise relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-6 py-20 text-center sm:px-12 sm:py-28",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none -z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-primary/5 blur-3xl animate-pulse-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-xs uppercase tracking-[0.3em] mb-6", children: "[ Let’s Build Something Great ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-5xl lg:text-6xl leading-tight uppercase max-w-4xl mx-auto font-bold text-foreground", children: data.cta.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed font-sans", children: data.cta.subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+923041625523",
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03]",
                children: [
                  "Book a strategy call",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:muzammalkhaliloffical@gmail.com",
                className: "w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-white/5 transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mr-2" }),
                  "muzammalkhaliloffical@gmail.com"
                ]
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServiceLayout as S
};
