export function Footer() {
  return (
    <footer className="relative border-t border-border bg-black/40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="font-display text-2xl font-semibold">
          Codi<span className="text-primary glow-text">.</span>Tech
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © 2026 — Crafted with obsession in the dark.
        </div>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <a href="https://github.com/MuzammalKhalil" target="_blank" rel="noreferrer" className="hover:text-primary">GH</a>
          <a href="https://www.linkedin.com/in/muzammal-khalil-189b19317/" target="_blank" rel="noreferrer" className="hover:text-primary">LI</a>
          <a href="https://www.facebook.com/muzammal.khalil.491578" target="_blank" rel="noreferrer" className="hover:text-primary">FB</a>
        </div>
      </div>
    </footer>
  );
}
