import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black/40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-4">
            <div className="font-display text-3xl font-bold mb-4">
              CODI<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              A premium digital design studio crafting cinematic web experiences for brands that refuse to look ordinary.
            </p>
          </div>

          {/* Studio Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Studio</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Process</Link></li>
              <li><Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/website-development" className="text-muted-foreground hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link to="/ui-ux-design" className="text-muted-foreground hover:text-foreground transition-colors">UI/UX Design</Link></li>
              <li><Link to="/seo-optimization" className="text-muted-foreground hover:text-foreground transition-colors">SEO Optimization</Link></li>
              <li><Link to="/branding" className="text-muted-foreground hover:text-foreground transition-colors">Branding</Link></li>
              <li><Link to="/e-commerce" className="text-muted-foreground hover:text-foreground transition-colors">E-Commerce</Link></li>
              <li><Link to="/digital-marketing" className="text-muted-foreground hover:text-foreground transition-colors">Digital Marketing</Link></li>
              <li><Link to="/shopify-development" className="text-muted-foreground hover:text-foreground transition-colors">Shopify Development</Link></li>
              <li><Link to="/website-maintenance" className="text-muted-foreground hover:text-foreground transition-colors">Website Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@coditech.com" className="hover:text-foreground transition-colors">info@coditech.com</a></li>
            </ul>
            <Link to="/contact" className="mt-6 inline-block text-sm border border-border rounded-full px-6 py-3 hover:border-primary transition-all">
              Book a call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 Codi Tech. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Designed & engineered in-house
          </p>
        </div>
      </div>
    </footer>
  );
}
