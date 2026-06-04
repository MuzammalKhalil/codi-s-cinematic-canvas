import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/shopify-development")({
  head: () => ({
    meta: [
      { title: "Shopify Development — Codi Tech" },
      { name: "description", content: "Launch a world-class Shopify store with custom features, high-speed performance, and a design that reflects your brand's unique identity." },
    ],
  }),
  component: ShopifyDevelopmentPage,
});

function ShopifyDevelopmentPage() {
  return <ServiceLayout serviceKey="shopify-development" />;
}
