import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { servicesData } from "@/data/servicesData";

const serviceRoutes: Record<string, string> = {
  "website-development": "/website-development",
  "ui-ux-design": "/ui-ux-design",
  "seo-optimization": "/seo-optimization",
  branding: "/branding",
  ecommerce: "/e-commerce",
  "digital-marketing": "/digital-marketing",
  "shopify-development": "/shopify-development",
  "website-maintenance": "/website-maintenance",
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codi Tech" },
      { name: "description", content: "Premium digital services to elevate your brand and drive growth." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const servicesList = Object.entries(servicesData).map(([key, data]) => ({
    key,
    route: serviceRoutes[key] ?? `/${key}`,
    badge: data.hero.badge,
    title: data.about.title,
    description: data.about.description,
    features: data.about.features,
  }));

  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-y" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-x" />

        <div className="relative mx-auto max-w-[1440px] z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs uppercase tracking-[0.3em] text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Premium <span className="chrome-text">digital services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a comprehensive suite of services designed to build, grow, and maintain your digital presence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {servicesList.map((service) => (
                <Link
                  key={service.key}
                  to={service.route}
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  {service.badge}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-8 border border-border hover:border-primary/30 transition-all"
                style={{ boxShadow: "0 0 40px oklch(0.55 0.18 195 / 0.1)" }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{service.badge}</div>
                <h2 className="text-2xl font-display font-semibold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  to={service.route}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn more <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
