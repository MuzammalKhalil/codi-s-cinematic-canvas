import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/e-commerce")({
  head: () => ({
    meta: [
      { title: "E-Commerce — Codi Tech" },
      { name: "description", content: "High-performing e-commerce platforms designed for speed, security, and seamless shopping experiences." },
    ],
  }),
  component: ECommercePage,
});

function ECommercePage() {
  return <ServiceLayout serviceKey="ecommerce" />;
}
