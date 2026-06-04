import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Contact as ContactComponent } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Codi Tech — Contact Us" },
      { name: "description", content: "Get in touch with Codi Tech for premium web development and design services." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />
      <div className="pt-32">
        <ContactComponent />
      </div>
      <Footer />
    </main>
  );
}
