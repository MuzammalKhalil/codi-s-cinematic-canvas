import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Define Technology Tabs
const technologies = [
  { id: "all", label: "All" },
  { id: "html-css", label: "HTML & CSS" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "typescript", label: "TypeScript" },
  { id: "nextjs", label: "Next.js" },
  { id: "framer", label: "Framer Motion" },
  { id: "threejs", label: "Three.js" },
  { id: "wordpress", label: "WordPress" },
];

// Define Packages for each Technology
const packagesData = {
  all: [],
  "html-css": [
    {
      name: "Basic Website",
      price: "£100",
      description: "A simple, clean website with essential pages.",
      features: [
        "1-3 Pages",
        "Responsive Design",
        "Clean HTML5 & CSS3",
        "Basic SEO",
        "1 Week Support",
      ],
    },
    {
      name: "Business Website",
      price: "£250",
      description: "Professional website for your business needs.",
      features: [
        "Up to 6 Pages",
        "Modern UI/UX",
        "Responsive Layouts",
        "Contact Form",
        "Google Maps",
        "2 Weeks Support",
      ],
    },
    {
      name: "Premium Website",
      price: "£500",
      description: "High-quality, custom website with premium features.",
      features: [
        "Up to 10 Pages",
        "Custom Design",
        "Advanced Animations",
        "Contact & Forms",
        "Social Integration",
        "4 Weeks Support",
      ],
    },
  ],
  tailwind: [
    {
      name: "Landing Page",
      price: "£150",
      description: "High-converting, beautiful landing page.",
      features: [
        "Single Page",
        "Tailwind CSS",
        "Modern UI",
        "Mobile Optimized",
        "1 Week Support",
      ],
    },
    {
      name: "Business UI",
      price: "£350",
      description: "Complete business UI with multiple pages.",
      features: [
        "Up to 8 Pages",
        "Tailwind Components",
        "Responsive Design",
        "Forms & CTAs",
        "2 Weeks Support",
      ],
    },
    {
      name: "Complete Design System",
      price: "£700",
      description: "Full design system and components library.",
      features: [
        "Design System",
        "Reusable Components",
        "Dark/Light Mode",
        "Storybook",
        "4 Weeks Support",
      ],
    },
  ],
  typescript: [
    {
      name: "TypeScript Setup",
      price: "£150",
      description: "Get your project started with TypeScript.",
      features: [
        "TypeScript Configuration",
        "Basic Types",
        "Project Setup",
        "Linting & Formatting",
        "1 Week Support",
      ],
    },
    {
      name: "Advanced Development",
      price: "£400",
      description: "Advanced TypeScript features and architecture.",
      features: [
        "Generics & Utility Types",
        "Type-Safe APIs",
        "State Management",
        "Testing Setup",
        "2 Weeks Support",
      ],
    },
    {
      name: "Enterprise Solution",
      price: "£800",
      description: "Enterprise-grade TypeScript application.",
      features: [
        "Full Architecture",
        "Type-Safe Everything",
        "Scalable Codebase",
        "Documentation",
        "4 Weeks Support",
      ],
    },
  ],
  nextjs: [
    {
      name: "Starter Website",
      price: "£300",
      description: "Modern Next.js website with great performance.",
      features: [
        "Next.js 15",
        "Up to 5 Pages",
        "SEO Optimized",
        "Responsive Design",
        "1 Week Support",
      ],
    },
    {
      name: "Business Website",
      price: "£700",
      description: "Professional business website with Next.js.",
      features: [
        "Up to 12 Pages",
        "CMS Integration",
        "Blog Section",
        "Forms & CTAs",
        "2 Weeks Support",
      ],
    },
    {
      name: "Custom Web Application",
      price: "£1500",
      description: "Fully custom Next.js web application.",
      features: [
        "Custom App",
        "Database Integration",
        "Authentication",
        "API Routes",
        "4 Weeks Support",
      ],
    },
  ],
  framer: [
    {
      name: "Basic Animations",
      price: "£100",
      description: "Add smooth animations to your website.",
      features: [
        "Page Transitions",
        "Hover Effects",
        "Scroll Animations",
        "1 Week Support",
      ],
    },
    {
      name: "Advanced Animations",
      price: "£300",
      description: "Advanced animations and interactions.",
      features: [
        "Complex Transitions",
        "SVG Animations",
        "Gesture Controls",
        "2 Weeks Support",
      ],
    },
    {
      name: "Premium Interactive Experience",
      price: "£600",
      description: "High-end interactive experience.",
      features: [
        "Custom Motion Components",
        "Physics-Based Animations",
        "Performance Optimized",
        "4 Weeks Support",
      ],
    },
  ],
  threejs: [
    {
      name: "Basic 3D Section",
      price: "£300",
      description: "Add a 3D section to your website.",
      features: [
        "Single 3D Scene",
        "Basic Interactions",
        "Responsive",
        "1 Week Support",
      ],
    },
    {
      name: "Interactive 3D Experience",
      price: "£800",
      description: "Fully interactive 3D experience.",
      features: [
        "Custom 3D Models",
        "Advanced Interactions",
        "Animations",
        "2 Weeks Support",
      ],
    },
    {
      name: "Full 3D Website",
      price: "£2000",
      description: "Complete immersive 3D website.",
      features: [
        "Full 3D Experience",
        "Custom Shaders",
        "Optimization",
        "4 Weeks Support",
      ],
    },
  ],
  wordpress: [
    {
      name: "Basic Website",
      price: "£149",
      description: "Perfect for startups and small businesses.",
      features: [
        "1 Responsive Landing Page",
        "Modern UI Design",
        "Mobile & Tablet Optimization",
        "Contact Form Integration",
        "Basic Speed Optimization",
        "Social Media Links",
        "7 Days Support",
      ],
    },
    {
      name: "Business Website",
      price: "£499",
      description: "Ideal for companies that need a professional online presence.",
      features: [
        "Up to 5 Pages",
        "WordPress Installation & Setup",
        "Premium Responsive Design",
        "Contact Forms",
        "Basic SEO Setup",
        "Speed Optimization",
        "Security Configuration",
        "Social Media Integration",
        "14 Days Support",
      ],
    },
    {
      name: "Premium Website",
      price: "£999",
      description: "Complete solution for growing businesses.",
      features: [
        "Up to 10 Pages",
        "Custom WordPress Design",
        "Elementor Pro Design",
        "Advanced Animations",
        "Blog Setup",
        "SEO Optimization",
        "Performance Optimization",
        "Security Setup",
        "WhatsApp Integration",
        "Google Analytics Setup",
        "30 Days Support",
      ],
    },
  ],
};

// Package Card Component
function PackageCard({ name, price, description, features }: { name: string; price: string; description: string; features: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.03)" }}
      className="glass rounded-3xl p-8 border border-border flex flex-col h-full"
    >
      <h3 className="font-display text-xl font-semibold mb-2">{name}</h3>
      <p className="text-4xl font-display font-bold text-primary mb-2">{price}</p>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      <ul className="space-y-3 mb-auto flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="text-primary mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all">
          Get Started
        </button>
      </div>
    </motion.div>
  );
}

export function Packages() {
  const [activeTab, setActiveTab] = useState("all");

  // Get active packages: if "all", group by technology, else get single category
  const getRenderContent = () => {
    if (activeTab === "all") {
      // Render each category with title and packages
      return Object.entries(packagesData)
        .filter(([key]) => key !== "all")
        .map(([techKey, packages]) => {
          const techLabel = technologies.find((t) => t.id === techKey)?.label;
          return (
            <div key={techKey} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8">
                {techLabel}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, i) => (
                  <PackageCard
                    key={i}
                    name={pkg.name}
                    price={pkg.price}
                    description={pkg.description}
                    features={pkg.features}
                  />
                ))}
              </div>
            </div>
          );
        });
    } else {
      // Render single category packages
      const packages = packagesData[activeTab as keyof typeof packagesData];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <PackageCard
              key={i}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <section className="relative z-10 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
            Choose Your <span className="text-primary">Technology</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert frontend development with the tools you love.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2 md:gap-4 justify-center min-w-max mx-auto">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tech.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tech.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {getRenderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
