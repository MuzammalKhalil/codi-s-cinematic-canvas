import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — Codi Tech" },
      { name: "description", content: "Scale your business with multi-channel marketing campaigns that drive engagement, generate leads, and maximize return on investment." },
    ],
  }),
  component: DigitalMarketingPage,
});

function DigitalMarketingPage() {
  return <ServiceLayout serviceKey="digital-marketing" />;
}
