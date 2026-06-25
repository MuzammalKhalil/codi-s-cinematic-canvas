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
    link: "https://mjhernon.co.uk/",
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
  const [modalImage, setModalImage] = useState<string | null>(null);

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
              <span className="text-primary">DISCOVER</span> OUR WORK
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-lg">
              Codi Tech delivers end-to-end technology services - from ideation to execution - tailored for modern businesses.
            </p>
          </motion.div>

          {/* Banner Filter Buttons */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["Websites", "Videos", "Brandings", "Graphic Design", "SEO"].map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary hover:bg-primary hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Scrolling Banner */}
          <div className="overflow-hidden mb-12 w-screen left-1/2 relative -translate-x-1/2">
            <div className="flex animate-scroll items-center" style={{
              perspective: "1500px",
              perspectiveOrigin: "center center",
              transformStyle: "preserve-3d",
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
                // Alternate rotation for curved effect
                const rotate = (i % 2 === 0) ? -15 : 15;
                
                return (
                  <div 
                    key={i} 
                    className="flex-shrink-0 w-80 mx-2 overflow-hidden rounded-xl"
                    style={{
                      transform: `rotateY(${rotate}deg)`,
                      transformOrigin: "center center",
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Banner ${i+1}`}
                      className="w-full h-52 object-cover"
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
              animation: scroll 60s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Projects Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Complete Portfolio</h2>
            <p className="text-muted-foreground text-lg mb-8">Organized by technology platform and industry</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["All", "Custom", "WordPress", "Woocommerce", "Shopify"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all border-2 ${
                    activeCategory === category
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => {
              return (
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
                  <div className="relative h-64 overflow-hidden cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    if (project.image) setModalImage(project.image);
                  }}>
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
                    <h3 className="text-xl font-display font-semibold mb-2 cursor-pointer hover:text-primary transition-colors" onClick={(e) => {
                      e.stopPropagation();
                      if (project.link) window.open(project.link, "_blank");
                    }}>
                      {project.title}
                    </h3>
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
            })}
          </div>
        </div>
      </div>
      <Footer />

      {/* Modal for full image */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setModalImage(null)}>
          <button className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors" onClick={() => setModalImage(null)}>
            &times;
          </button>
          <img 
            src={modalImage} 
            alt="Full size" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
