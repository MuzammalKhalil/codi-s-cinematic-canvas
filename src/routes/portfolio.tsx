import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    id: "1",
    year: "2025",
    category: "Web Development",
    title: "Lumen OS Dashboard",
    description: "A cinematic SaaS dashboard with WebGL particle effects and real-time analytics integration.",
    tags: ["React", "Three.js", "Framer Motion"],
    gradient: "linear-gradient(135deg, #004242, #1a1a2e)",
  },
  {
    id: "2",
    year: "2025",
    category: "E-commerce",
    title: "Atelier Noir Luxury Store",
    description: "Premium fashion e-commerce site with editorial scroll storytelling and immersive product showcases.",
    tags: ["Next.js", "GSAP", "Stripe"],
    gradient: "linear-gradient(135deg, #1B1212, #343434)",
  },
  {
    id: "3",
    year: "2024",
    category: "Brand Identity",
    title: "Halo Studio Website",
    description: "Award-winning creative agency site with shader transitions and award-winning UI design.",
    tags: ["Three.js", "Lenis", "WebGL"],
    gradient: "linear-gradient(135deg, #0a3d3d, #004242)",
  },
  {
    id: "4",
    year: "2024",
    category: "Mobile App",
    title: "Pulse Wallet",
    description: "Kinetic mobile wallet UI with dynamic data visualizations and smooth micro-interactions.",
    tags: ["React Native", "Reanimated", "Fintech"],
    gradient: "linear-gradient(135deg, #1a1a1a, #003a3a)",
  },
  {
    id: "5",
    year: "2023",
    category: "SaaS",
    title: "Vertex Analytics",
    description: "Data visualization platform with interactive charts and real-time data streaming.",
    tags: ["Vue.js", "D3.js", "Firebase"],
    gradient: "linear-gradient(135deg, #1a2a3a, #2a4a5a)",
  },
  {
    id: "6",
    year: "2023",
    category: "Marketing",
    title: "Nexus Campaign Hub",
    description: "Multi-channel marketing campaign manager with beautiful analytics and reporting.",
    tags: ["React", "Tailwind", "Node.js"],
    gradient: "linear-gradient(135deg, #2a1a3a, #4a2a5a)",
  },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Codi Tech" },
      { name: "description", content: "Explore our curated collection of premium digital projects." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
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
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Curated <span className="chrome-text">digital projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of our best work, where design meets technology to create unforgettable digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group glass rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all"
                style={{ boxShadow: "0 0 40px oklch(0.55 0.18 195 / 0.1)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: project.gradient }}
                  />
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, oklch(0.7 0.18 195 / 0.5), transparent 70%)",
                    }}
                  />
                  <div className="absolute top-6 left-6 flex gap-3">
                    <span className="glass px-3 py-1 rounded-full text-xs text-primary font-semibold">
                      {project.year}
                    </span>
                    <span className="glass px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
