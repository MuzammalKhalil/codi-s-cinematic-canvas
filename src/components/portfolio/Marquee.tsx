const items = ["React", "TypeScript", "Next.js", "Framer Motion", "GSAP", "Three.js", "Tailwind", "WebGL", "Node.js", "Figma"];
export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-black/40 py-8">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-3xl text-muted-foreground md:text-5xl">
            {it} <span className="ml-16 text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
