import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const services = [
  {
    title: "Website Development",
    description: "Custom responsive websites built for speed and scalability.",
    number: "01",
    href: "/website-development",
  },
  {
    title: "UI/UX Design",
    description: "Modern interfaces designed to improve engagement.",
    number: "02",
    href: "/ui-ux-design",
  },
  {
    title: "SEO Optimization",
    description: "Smart SEO strategies that improve rankings and traffic.",
    number: "03",
    href: "/seo-optimization",
  },
  {
    title: "Branding",
    description: "Creative branding solutions for modern businesses.",
    number: "04",
    href: "/branding",
  },
  {
    title: "E-Commerce",
    description: "High-converting online stores built for growth.",
    number: "05",
    href: "/e-commerce",
  },
  {
    title: "Digital Marketing",
    description: "Performance marketing campaigns focused on ROI.",
    number: "06",
    href: "/digital-marketing",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify stores for modern brands.",
    number: "07",
    href: "/shopify-development",
  },
  {
    title: "Website Maintenance",
    description: "Reliable updates, backups, and technical support.",
    number: "08",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            // For lg: 4 columns, md: 2 columns
            const getAnimationProps = () => {
              const width = isClient ? window.innerWidth : 1024;
              let initial = { opacity: 0, y: 20 };
              
              if (width >= 1024) {
                const col = i % 4;
                if (col === 0) initial = { opacity: 0, x: -50 };
                else if (col === 3) initial = { opacity: 0, x: 50 };
              } else if (width >= 768) {
                const col = i % 2;
                if (col === 0) initial = { opacity: 0, x: -50 };
                else if (col === 1) initial = { opacity: 0, x: 50 };
              }
              
              return {
                initial,
                whileInView: { opacity: 1, x: 0, y: 0 },
              };
            };
            
            const { initial, whileInView } = getAnimationProps();

            return (
              <motion.div
                key={service.number}
                initial={initial}
                whileInView={whileInView}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-black/20 p-6 transition-all"
              >
                <Link to={service.href} className="block">
                  <span className="text-6xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-display font-semibold mt-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
