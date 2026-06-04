import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description: "Custom responsive websites built for speed and scalability.",
    number: "01",
    href: "#",
  },
  {
    title: "UI/UX Design",
    description: "Modern interfaces designed to improve engagement.",
    number: "02",
    href: "#",
  },
  {
    title: "SEO Optimization",
    description: "Smart SEO strategies that improve rankings and traffic.",
    number: "03",
    href: "#",
  },
  {
    title: "Branding",
    description: "Creative branding solutions for modern businesses.",
    number: "04",
    href: "#",
  },
  {
    title: "E-Commerce",
    description: "High-converting online stores built for growth.",
    number: "05",
    href: "#",
  },
  {
    title: "Digital Marketing",
    description: "Performance marketing campaigns focused on ROI.",
    number: "06",
    href: "#",
  },
  {
    title: "Shopify Development",
    description: "Professional Shopify stores for modern brands.",
    number: "07",
    href: "#",
  },
  {
    title: "Website Maintenance",
    description: "Reliable updates, backups, and technical support.",
    number: "08",
    href: "#",
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-20 px-6">
      <div className="mx-auto max-w-7xl">
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
          {services.map((service, i) => (
            <motion.a
              key={service.number}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.03)" }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-black/20 p-6 transition-all"
            >
              <span className="text-6xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors">
                {service.number}
              </span>
              <h3 className="text-xl font-display font-semibold mt-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{service.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
