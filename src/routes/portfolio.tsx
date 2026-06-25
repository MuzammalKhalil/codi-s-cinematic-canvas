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
    hidden: true,
  },
  {
    id: "11",
    category: "WordPress",
    title: "MJ Hernon",
    description: "Elegant WordPress site for MJ Hernon, showcasing services and portfolio.",
    tags: ["Consulting", "WordPress", "Professional"],
    image: "/mjhernon-co-uk.png",
    link: "https://mjhernon.co.uk/",
    hidden: true,
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

const bannerImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProjects = portfolioProjects.filter(project =>
    !project.hidden && (activeCategory === "All" ? true : project.category === activeCategory)
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
          <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap px-4">
            {["Websites", "Videos", "Brandings", "Graphic Design", "SEO"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all border-2 bg-transparent text-primary border-primary hover:bg-transparent hover:text-primary"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Scrolling Banner */}
          <div className="portfolio-banner mb-16 w-screen left-1/2 relative -translate-x-1/2">
            <div className="portfolio-banner-track">
              {[...bannerImages, ...bannerImages].map((imgSrc, i) => (
                <div key={`${imgSrc}-${i}`} className="portfolio-banner-card">
                  <img
                    src={imgSrc}
                    alt={`Portfolio showcase ${i + 1}`}
                    className="portfolio-banner-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .portfolio-banner {
              height: clamp(190px, 21vw, 320px);
              overflow: hidden;
              perspective: 1200px;
              transform-style: preserve-3d;
            }

            .portfolio-banner::before,
            .portfolio-banner::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              width: min(12vw, 170px);
              z-index: 2;
              pointer-events: none;
            }

            .portfolio-banner::before {
              left: 0;
              background: linear-gradient(90deg, var(--background), transparent);
            }

            .portfolio-banner::after {
              right: 0;
              background: linear-gradient(270deg, var(--background), transparent);
            }

            .portfolio-banner-track {
              display: flex;
              align-items: center;
              gap: clamp(18px, 2.4vw, 34px);
              width: max-content;
              height: 100%;
              padding-inline: clamp(24px, 5vw, 80px);
              animation: portfolio-banner-marquee 34s linear infinite;
              will-change: transform;
            }

            .portfolio-banner-card {
              flex: 0 0 auto;
              width: clamp(210px, 21vw, 340px);
              height: clamp(120px, 11vw, 190px);
              overflow: hidden;
              border-radius: 0.65rem;
              background: oklch(1 0 0 / 0.06);
              box-shadow: 0 24px 55px oklch(0 0 0 / 0.34);
              transform: translateZ(0) rotateY(var(--card-rotate, 0deg)) skewY(var(--card-skew, 0deg));
              transform-origin: center;
              backface-visibility: hidden;
            }

            .portfolio-banner-card:nth-child(6n + 1) {
              --card-rotate: 18deg;
              --card-skew: 2deg;
            }

            .portfolio-banner-card:nth-child(6n + 2) {
              --card-rotate: 10deg;
              --card-skew: -1.25deg;
            }

            .portfolio-banner-card:nth-child(6n + 3) {
              --card-rotate: 0deg;
              --card-skew: 0deg;
            }

            .portfolio-banner-card:nth-child(6n + 4) {
              --card-rotate: -8deg;
              --card-skew: 1deg;
            }

            .portfolio-banner-card:nth-child(6n + 5) {
              --card-rotate: -15deg;
              --card-skew: -1.5deg;
            }

            .portfolio-banner-card:nth-child(6n) {
              --card-rotate: -22deg;
              --card-skew: 2deg;
            }

            .portfolio-banner-image {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale(1.02);
            }

            @keyframes portfolio-banner-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @media (max-width: 640px) {
              .portfolio-banner {
                height: 175px;
              }

              .portfolio-banner-track {
                animation-duration: 28s;
                gap: 16px;
                padding-inline: 18px;
              }

              .portfolio-banner-card {
                width: 205px;
                height: 118px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .portfolio-banner-track {
                animation-duration: 90s;
              }
            }
          `}</style>

          {/* Projects Section Header */}
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-4">Our Complete Portfolio</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">Organized by technology platform and industry</p>
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
              {["All", "Custom", "WordPress", "Woocommerce", "Shopify"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all border-2 ${
                  activeCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-transparent"
                }`}
              >
                {category}
              </button>
            ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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
