import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codi Tech — Cinematic Frontend Developer" },
      { name: "description", content: "Codi Tech is a frontend developer designing digital experiences that feel alive — motion-first, cinematic, premium." },
      { property: "og:title", content: "Codi Tech — Cinematic Frontend Developer" },
      { property: "og:description", content: "Designing digital experiences that feel alive." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative noise">
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Services />
      <Work />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
