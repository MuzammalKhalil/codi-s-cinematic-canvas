import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Contact as ContactComponent } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codi Tech" },
      { name: "description", content: "Get in touch with us for your digital project needs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative noise min-h-screen">
      <CursorGlow />
      <Nav />
      <section className="pt-40">
        <ContactComponent />
      </section>
      <Footer />
    </main>
  );
}
