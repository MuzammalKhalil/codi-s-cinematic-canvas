import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { motion } from "framer-motion";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Branding — Codi Tech" },
      { description: "Creative branding solutions for modern businesses." },
    ],
  }),
  component: BrandingPage,
});

function BrandingPage() {
  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />
      <section className="relative z-10 py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">What we do</span>
            <h1 className="text-4xl md:text-6xl font-display font-semibold mb-4">
              Branding
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Creative branding solutions for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
