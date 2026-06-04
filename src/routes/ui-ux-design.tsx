import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design — Codi Tech" },
      { name: "description", content: "Crafting intuitive and visually stunning user experiences that drive user satisfaction and business growth." },
    ],
  }),
  component: UiUxDesignPage,
});

function UiUxDesignPage() {
  return <ServiceLayout serviceKey="ui-ux-design" />;
}
