import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/portfolio/ServiceLayout";

export const Route = createFileRoute("/website-maintenance")({
  head: () => ({
    meta: [
      { title: "Website Maintenance — Codi Tech" },
      { name: "description", content: "Reliable updates, backups, security patches, and technical support to keep your website fast and secure." },
    ],
  }),
  component: WebsiteMaintenancePage,
});

function WebsiteMaintenancePage() {
  return <ServiceLayout serviceKey="website-maintenance" />;
}
