import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/website-development")({
  head: () => ({
    meta: [
      { title: "Website Development — Codi Tech" },
      { name: "description", content: "Custom responsive websites built for speed, performance, and scalability with modern UI/UX." },
    ],
  }),
  component: WebsiteDevelopmentPage,
});

function WebsiteDevelopmentPage() {
  return <ServiceLayout serviceKey="website-development" />;
}
