import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { servicesData } from "@/data/servicesData";
import {
  Briefcase,
  Globe,
  ShoppingBag,
  Layers,
  Code2,
  RefreshCw,
  Smartphone,
  Monitor,
  LayoutDashboard,
  MousePointer2,
  Search,
  Settings,
  Share2,
  TrendingUp,
  Sparkles,
  Palette,
  ShieldCheck,
  Zap,
  Target,
  Mail,
  Cpu,
  Rocket
} from "lucide-react";

// Map icon string names to Lucide Icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  "briefcase": Briefcase,
  "globe": Globe,
  "shopping-bag": ShoppingBag,
  "layers": Layers,
  "code-xml": Code2,
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

// Title line breaking map for custom formatting (second line gets gradient)
const titleLinesMap: Record<string, string[]> = {
  "website-development": ["WE BUILD", "MODERN WEBSITES", "THAT GROW BRANDS"],
  "ui-ux-design": ["WE DESIGN", "MODERN INTERFACES", "THAT ENGAGE"],
  "seo-optimization": ["WE OPTIMIZE", "SEARCH RANKINGS", "TO GROW SALES"],
  "branding": ["WE CRAFT", "DISTINCT IDENTITIES", "THAT LAST"],
  "ecommerce": ["WE BUILD", "ONLINE STORES", "THAT SELL"],
  "digital-marketing": ["WE GROW", "YOUR AUDIENCE", "AND ROI"],
  "shopify-development": ["WE BUILD", "PREMIUM SHOPIFY", "EXPERIENCES"],
  "website-maintenance": ["WE KEEP", "YOUR WEBSITE", "FAST AND SECURE"],
};

interface ServiceLayoutProps {
  serviceKey: string;
}

export function ServiceLayout({ serviceKey }: ServiceLayoutProps) {
  const data = servicesData[serviceKey];

  if (!data) {
    return (
      <main className="relative noise min-h-screen flex items-center justify-center">
        <CursorGlow />
        <Nav />
        <div className="text-center">
          <h1 className="text-3xl font-display font-semibold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go Back Home</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const titleLines = titleLinesMap[serviceKey] || [data.hero.title];

  return (
    <main className="relative noise min-h-screen bg-background text-foreground overflow-hidden">
      <CursorGlow />
      <Nav />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-36 pb-20 px-6 min-h-screen flex items-center">
        {/* Cinematic Backdrop Glows */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse-glow" />
          <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-teal-glow/10 blur-[100px] float-y" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest text-muted-foreground uppercase"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {data.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-[5.5rem] leading-[0.9] font-bold tracking-tight uppercase"
            >
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {index === 1 ? (
                    <span className="text-primary glow-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 mx-auto lg:mx-0 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-sans"
            >
              {data.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                START PROJECT
                <Sparkles className="h-4 w-4" />
              </Link>
              <Link
                to="/#work"
                className="glass w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium text-foreground hover:bg-white/5 transition-all"
              >
                VIEW PORTFOLIO
              </Link>
            </motion.div>

            {/* Custom Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-8 sm:gap-12"
            >
              {data.hero.stats.map((stat, i) => (
                <div key={i} className="min-w-[100px] sm:min-w-[120px]">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary glow-text">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] tracking-wider text-muted-foreground uppercase font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Floating Orbs / Interactive Element */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] flex items-center justify-center float-y"
            >
              {/* Outer Pulsing Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" />
              {/* Ring 1 */}
              <div className="absolute inset-4 rounded-full border border-white/5 border-dashed animate-[spin_40s_linear_infinite]" />
              {/* Ring 2 with Gradient Border */}
              <div
                className="absolute inset-10 rounded-full border-[8px] sm:border-[12px] border-transparent"
                style={{
                  background: "linear-gradient(var(--background), var(--background)) padding-box, var(--grad-teal) border-box",
                  boxShadow: "0 0 60px oklch(0.55 0.18 195 / 0.15)"
                }}
              />
              {/* Center Tech Symbol / Sparkle */}
              <Sparkles className="h-16 w-16 text-primary glow-text animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SERVICE SECTION */}
      <section className="relative z-10 py-24 sm:py-32 border-t border-border/50 bg-black/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs tracking-[0.3em] text-primary uppercase"
            >
              ◇ ABOUT SERVICE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight max-w-2xl leading-[1.05]"
            >
              {data.about.title}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
            {/* Description Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass border border-border rounded-3xl p-8 sm:p-12 flex flex-col justify-center bg-black/20"
            >
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
                {data.about.description}
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.about.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                  className="glass border border-border rounded-2xl p-6 flex items-center justify-center text-foreground font-display text-base sm:text-lg tracking-wider uppercase text-center transition-all duration-300"
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED SOLUTIONS SECTION */}
      <section className="relative z-10 py-24 sm:py-32 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs tracking-[0.3em] text-primary uppercase"
            >
              ◇ OUR SERVICES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight leading-[1.05]"
            >
              {data.solutions.title}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.solutions.cards.map((card, i) => {
              const IconComponent = iconMap[card.icon] || Sparkles;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ y: -8, borderColor: "rgba(var(--primary), 0.3)" }}
                  className="group glass border border-border rounded-3xl p-8 flex flex-col items-start transition-all duration-300 bg-black/10"
                >
                  <div className="glass mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 bg-white/[0.02]">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 tracking-wide uppercase transition-colors group-hover:text-primary leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WORK PROCESS SECTION */}
      <section className="relative z-10 py-24 sm:py-32 border-t border-border/50 bg-black/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs tracking-[0.3em] text-primary uppercase"
            >
              ◇ WORK PROCESS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight leading-[1.05]"
            >
              {data.process.title}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {data.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="group glass border border-border rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 bg-black/20"
              >
                <div className="font-display text-5xl sm:text-6xl font-bold text-muted-foreground/15 mb-6 group-hover:text-primary transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 uppercase tracking-wider text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA LET'S BUILD SECTION */}
      <section className="relative z-10 py-24 sm:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="noise relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-6 py-20 text-center sm:px-12 sm:py-28"
          >
            {/* CTA Background Gradient */}
            <div className="absolute inset-0 pointer-events-none -z-10">
              <div className="absolute -inset-10 bg-primary/5 blur-3xl animate-pulse-glow" />
              <div className="absolute inset-0 grid-bg opacity-30" />
            </div>

            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-6">
              [ Let’s Build Something Great ]
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-none uppercase max-w-3xl mx-auto font-bold">
              YOUR DIGITAL PLATFORM <br />
              <span className="text-primary glow-text">SHOULD FEEL PREMIUM.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
              We build visual stories and high-performance products that connect, perform, and elevate your brand to the next level. Let's make it happen.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.03]"
              >
                Book a strategy call
                <Sparkles className="h-4 w-4" />
              </Link>
              <a
                href="mailto:info@coditech.com"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground hover:bg-white/5 transition-all"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@coditech.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
