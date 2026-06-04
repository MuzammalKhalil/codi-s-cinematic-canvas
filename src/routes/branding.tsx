import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/branding")({
  head: () => ({
    meta: [
      { title: "Branding — Codi Tech" },
      { name: "description", content: "We build memorable brands that connect with your audience and stand out in the marketplace." },
    ],
  }),
  component: BrandingPage,
});

function BrandingPage() {
  return <ServiceLayout serviceKey="branding" />;
}
