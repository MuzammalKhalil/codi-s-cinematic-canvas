import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Packages as PackagesComponent } from "@/components/portfolio/Packages";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Codi Tech — Packages & Pricing" },
      { name: "description", content: "Choose from our premium packages designed to scale with your business." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />
      <div className="pt-32">
        <PackagesComponent />
      </div>
      <Footer />
    </main>
  );
}
