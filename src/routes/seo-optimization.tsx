import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/seo-optimization")({
  head: () => ({
    meta: [
      { title: "SEO Optimization — Codi Tech" },
      { name: "description", content: "Increase your organic visibility and drive high-quality traffic to your website with our data-driven SEO strategies." },
    ],
  }),
  component: SeoOptimizationPage,
});

function SeoOptimizationPage() {
  return <ServiceLayout serviceKey="seo-optimization" />;
}
