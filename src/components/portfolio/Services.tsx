import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Code2, LayoutDashboard, Search, Palette, ShoppingBag, TrendingUp, Monitor, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Custom responsive websites built for speed and scalability.",
    details: [
      "Responsive websites built for performance.",
      "Focused on speed, scalability, and clean code.",
      "Designed for modern brands and conversion."
    ],
    icon: Code2,
    href: "/website-development",
  },
  {
    title: "UI/UX Design",
    description: "Modern interfaces designed to improve engagement.",
    details: [
      "Interfaces with intuitive user journeys.",
      "Pixel-perfect visual systems.",
      "Built for engagement and usability."
    ],
    icon: LayoutDashboard,
    href: "/ui-ux-design",
  },
  {
    title: "SEO Optimization",
    description: "Smart SEO strategies that improve rankings and traffic.",
    details: [
      "Technical SEO to improve visibility.",
      "Content strategies that drive organic traffic.",
      "Performance tuned for search engines."
    ],
    icon: Search,
    href: "/seo-optimization",
  },
  {
    title: "Branding",
    description: "Creative branding solutions for modern businesses.",
    details: [
      "Identity systems that feel memorable.",
      "Logo, color, typography, and tone.",
      "Designed to position your brand clearly."
    ],
    icon: Palette,
    href: "/branding",
  },
  {
    title: "E-Commerce",
    description: "High-converting online stores built for growth.",
    details: [
      "High-converting online stores.",
      "Optimized checkout and product flows.",
      "Built for growth and easy management."
    ],
    icon: ShoppingBag,
    href: "/e-commerce",
  },
  {
    title: "Digital Marketing",
    description: "Performance marketing campaigns focused on ROI.",
    details: [
      "Data-driven ad campaigns.",
      "Audience growth across channels.",
      "Focused on ROI and conversions."
    ],
    icon: TrendingUp,
    href: "/digital-marketing",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify stores for modern brands.",
    details: [
      "Shopify stores built for speed.",
      "Custom storefronts and checkout flows.",
      "Scalable setups for modern commerce."
    ],
    icon: Monitor,
    href: "/shopify-development",
  },
  {
    title: "Website Maintenance",
    description: "Reliable updates, backups, and technical support.",
    details: [
      "Regular updates and security checks.",
      "Backups, monitoring, and support.",
      "Reliable care for your live website."
    ],
    icon: ShieldCheck,
    href: "/website-maintenance",
  },
];

export function Services() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="services" className="relative z-10 py-20 px-6">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Services designed <br />
            <span className="text-muted-foreground">for digital growth.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Eight disciplines, one obsessive standard. Every engagement is led by a senior designer and engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const getAnimationProps = () => {
              const width = isClient ? window.innerWidth : 1024;
              let initial = { opacity: 0, y: 20 };

              if (width >= 1280) {
                const col = i % 3;
                if (col === 0) initial = { opacity: 0, x: -50 };
                else if (col === 2) initial = { opacity: 0, x: 50 };
              } else if (width >= 640) {
                const col = i % 2;
                if (col === 0) initial = { opacity: 0, x: -50 };
                else initial = { opacity: 0, x: 50 };
              }

              return {
                initial,
                whileInView: { opacity: 1, x: 0, y: 0 },
              };
            };

            const getItemLayoutClass = (index: number) => {
              if (index === 3) return "xl:col-span-2";
              if (index === 4) return "xl:col-start-3 xl:col-span-1";
              if (index === 5) return "xl:col-span-1";
              if (index === 6) return "xl:col-start-2 xl:col-span-2";
              if (index === 7) return "xl:col-span-3";
              return "";
            };

            const { initial, whileInView } = getAnimationProps();
            const Icon = service.icon;
            const positionClass = getItemLayoutClass(i);

            return (
              <motion.div
                key={service.title}
                initial={initial}
                whileInView={whileInView}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-black/10 p-10 transition-all hover:shadow-xl ${positionClass}`}
              >
                <Link to={service.href} className="block h-full">
                  <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-border bg-background text-primary shadow-sm">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {service.details.map((line, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground leading-6">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
