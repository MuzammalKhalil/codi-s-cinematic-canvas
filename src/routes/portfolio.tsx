import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { motion } from "framer-motion";

import { useState } from "react";

const portfolioProjects = [
  // WordPress Projects
  {
    id: "7",
    category: "WordPress",
    title: "Get Quick Skills",
    description: "Online learning platform built with WordPress, featuring course management and user dashboards.",
    tags: ["Construction", "WordPress", "Business"],
    image: "/screencapture-getquickskills-2.jpeg",
  },
  {
    id: "8",
    category: "WordPress",
    title: "Million Deeds",
    description: "Charity and crowdfunding platform developed with WordPress for social impact initiatives.",
    tags: ["Education", "WordPress", "Language"],
    image: "/screencapture-milliondeeds-202.png",
  },
  {
    id: "9",
    category: "WordPress",
    title: "Taxi Crandendon",
    description: "Taxi booking and transportation service website created with WordPress.",
    tags: ["Pets", "WordPress", "Animals"],
    image: "/screencapture-taxi-crandendonc.png",
  },
  {
    id: "10",
    category: "WordPress",
    title: "Leeper",
    description: "Professional WordPress website for Leeper, featuring modern design and responsive layout.",
    tags: ["Business", "WordPress", "Corporate"],
    image: "/leeper.png",
  },
  {
    id: "11",
    category: "WordPress",
    title: "MJ Hernon",
    description: "Elegant WordPress site for MJ Hernon, showcasing services and portfolio.",
    tags: ["Consulting", "WordPress", "Professional"],
    image: "/mjhernon-co-uk.png",
  },
  {
    id: "12",
    category: "WordPress",
    title: "Rixx Tech",
    description: "Tech company website built with WordPress, featuring services and company information.",
    tags: ["Tech", "WordPress", "Business"],
    image: "/rixxtech.png",
    link: "https://rixxtech.com/",
  },
];

const categories = ["All", "HTML", "WordPress", "Woocommerce", "Shopify", "Squarespace"];

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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter(project =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm text-primary uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              <span className="text-gray-500">DISCOVER</span> OUR WORK
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-lg">
              Codi Tech delivers end-to-end technology services - from ideation to execution - tailored for modern businesses.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary"
            >
              Websites
            </button>
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary"
            >
              Videos
            </button>
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary"
            >
              Brandings
            </button>
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary"
            >
              Graphic Design
            </button>
            <button
              className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary"
            >
              SEO
            </button>
          </div>

          {/* Scrolling Banner */}
          <div className="overflow-hidden mb-12 w-screen left-1/2 relative -translate-x-1/2">
            <div className="flex animate-scroll items-end" style={{
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}>
              {/* Duplicate images for seamless scroll */}
              {[
                "/1.png",
                "/2.png",
                "/3.png",
                "/4.png",
                "/5.png",
                "/6.png",
                "/1.png",
                "/2.png",
                "/3.png",
                "/4.png",
                "/5.png",
                "/6.png",
              ].map((imgSrc, i) => {
                const indexInSet = i % 6;
                const totalInSet = 6;
                const offsetFromCenter = indexInSet - (totalInSet - 1) / 2;
                
                return (
                  <div 
                    key={i} 
                    className="flex-shrink-0 w-96 mx-3 overflow-hidden rounded-2xl"
                    style={{
                      transform: `perspective(2000px) rotateY(${offsetFromCenter * 18}deg) translateY(${Math.abs(offsetFromCenter) * 30}px)`,
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Banner ${i+1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
          `}</style>

          {/* Projects Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Our Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => {
              const CardContent = (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur transition-all hover:border-primary/30 hover:shadow-glow"
                  style={{ boxShadow: "0 0 40px oklch(0.55 0.18 195 / 0.1)" }}
                >
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute w-full h-auto object-cover transition-all duration-[5000ms] ease-in-out group-hover:translate-y-[-calc(100%-256px)]"
                        style={{ minHeight: "100%", top: 0 }}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                        style={{ background: project.gradient }}
                      />
                    )}
                    <div className="absolute inset-0 grid-bg opacity-40" />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, oklch(0.7 0.18 195 / 0.3), transparent 70%)",
                      }}
                    />
                    {/* Tags at top */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="glass px-3 py-1 rounded-full text-xs text-primary">{(2024 - (i % 2)).toString()}</span>
                      <span className="glass px-3 py-1 rounded-full text-xs text-muted-foreground">{project.category}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );

              if (project.link) {
                return (
                  <a 
                    key={project.id}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                );
              }
              return CardContent;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
