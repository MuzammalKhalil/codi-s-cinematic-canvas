import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-A-bgDSf-.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Codi Tech — Frontend Developer & Cinematic Web Engineer" },
      { name: "description", content: "Codi Tech is a frontend developer crafting immersive, cinematic digital experiences with motion, depth, and premium interaction." },
      { name: "author", content: "Codi Tech" },
      { property: "og:title", content: "Codi Tech — Frontend Developer & Cinematic Web Engineer" },
      { property: "og:description", content: "Codi Tech is a frontend developer crafting immersive, cinematic digital experiences with motion, depth, and premium interaction." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Codi Tech — Frontend Developer & Cinematic Web Engineer" },
      { name: "twitter:description", content: "Codi Tech is a frontend developer crafting immersive, cinematic digital experiences with motion, depth, and premium interaction." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b80e5583-11ae-4a70-9f56-2f0b8f07cd8a/id-preview-54c79efa--5a12075e-271c-456a-9a79-f91c35f1c730.lovable.app-1780405890704.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b80e5583-11ae-4a70-9f56-2f0b8f07cd8a/id-preview-54c79efa--5a12075e-271c-456a-9a79-f91c35f1c730.lovable.app-1780405890704.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$a = () => import("./website-maintenance-DMo0lA-Q.mjs");
const Route$a = createFileRoute("/website-maintenance")({
  head: () => ({
    meta: [{
      title: "Website Maintenance — Codi Tech"
    }, {
      name: "description",
      content: "Reliable updates, backups, security patches, and technical support to keep your website fast and secure."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./website-development-CzjsBrtN.mjs");
const Route$9 = createFileRoute("/website-development")({
  head: () => ({
    meta: [{
      title: "Website Development — Codi Tech"
    }, {
      name: "description",
      content: "Custom responsive websites built for speed, performance, and scalability with modern UI/UX."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./ui-ux-design-DGkHc_gk.mjs");
const Route$8 = createFileRoute("/ui-ux-design")({
  head: () => ({
    meta: [{
      title: "UI/UX Design — Codi Tech"
    }, {
      name: "description",
      content: "Crafting intuitive and visually stunning user experiences that drive user satisfaction and business growth."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./shopify-development-Dt_phEWC.mjs");
const Route$7 = createFileRoute("/shopify-development")({
  head: () => ({
    meta: [{
      title: "Shopify Development — Codi Tech"
    }, {
      name: "description",
      content: "Launch a world-class Shopify store with custom features, high-speed performance, and a design that reflects your brand's unique identity."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./seo-optimization-C2XKzmi7.mjs");
const Route$6 = createFileRoute("/seo-optimization")({
  head: () => ({
    meta: [{
      title: "SEO Optimization — Codi Tech"
    }, {
      name: "description",
      content: "Increase your organic visibility and drive high-quality traffic to your website with our data-driven SEO strategies."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./packages-DkW0IKyu.mjs");
const Route$5 = createFileRoute("/packages")({
  head: () => ({
    meta: [{
      title: "Codi Tech — Packages & Pricing"
    }, {
      name: "description",
      content: "Choose from our premium packages designed to scale with your business."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./e-commerce-DRZaWmOt.mjs");
const Route$4 = createFileRoute("/e-commerce")({
  head: () => ({
    meta: [{
      title: "E-Commerce — Codi Tech"
    }, {
      name: "description",
      content: "High-performing e-commerce platforms designed for speed, security, and seamless shopping experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./digital-marketing-BP_A2-Gm.mjs");
const Route$3 = createFileRoute("/digital-marketing")({
  head: () => ({
    meta: [{
      title: "Digital Marketing — Codi Tech"
    }, {
      name: "description",
      content: "Scale your business with multi-channel marketing campaigns that drive engagement, generate leads, and maximize return on investment."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BE8OGFfm.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Codi Tech — Contact Us"
    }, {
      name: "description",
      content: "Get in touch with Codi Tech for premium web development and design services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./branding-DP-JvIDO.mjs");
const Route$1 = createFileRoute("/branding")({
  head: () => ({
    meta: [{
      title: "Branding — Codi Tech"
    }, {
      name: "description",
      content: "We build memorable brands that connect with your audience and stand out in the marketplace."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-JQF2MD_h.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Codi Tech — Cinematic Frontend Developer"
    }, {
      name: "description",
      content: "Codi Tech is a frontend developer designing digital experiences that feel alive — motion-first, cinematic, premium."
    }, {
      property: "og:title",
      content: "Codi Tech — Cinematic Frontend Developer"
    }, {
      property: "og:description",
      content: "Designing digital experiences that feel alive."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WebsiteMaintenanceRoute = Route$a.update({
  id: "/website-maintenance",
  path: "/website-maintenance",
  getParentRoute: () => Route$b
});
const WebsiteDevelopmentRoute = Route$9.update({
  id: "/website-development",
  path: "/website-development",
  getParentRoute: () => Route$b
});
const UiUxDesignRoute = Route$8.update({
  id: "/ui-ux-design",
  path: "/ui-ux-design",
  getParentRoute: () => Route$b
});
const ShopifyDevelopmentRoute = Route$7.update({
  id: "/shopify-development",
  path: "/shopify-development",
  getParentRoute: () => Route$b
});
const SeoOptimizationRoute = Route$6.update({
  id: "/seo-optimization",
  path: "/seo-optimization",
  getParentRoute: () => Route$b
});
const PackagesRoute = Route$5.update({
  id: "/packages",
  path: "/packages",
  getParentRoute: () => Route$b
});
const ECommerceRoute = Route$4.update({
  id: "/e-commerce",
  path: "/e-commerce",
  getParentRoute: () => Route$b
});
const DigitalMarketingRoute = Route$3.update({
  id: "/digital-marketing",
  path: "/digital-marketing",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const BrandingRoute = Route$1.update({
  id: "/branding",
  path: "/branding",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  BrandingRoute,
  ContactRoute,
  DigitalMarketingRoute,
  ECommerceRoute,
  PackagesRoute,
  SeoOptimizationRoute,
  ShopifyDevelopmentRoute,
  UiUxDesignRoute,
  WebsiteDevelopmentRoute,
  WebsiteMaintenanceRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
