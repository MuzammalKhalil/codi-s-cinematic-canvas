export function FloatingObjects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="float-y absolute left-[8%] top-[20%] h-32 w-32 rounded-3xl glass"
        style={{ background: "var(--grad-chrome)", opacity: 0.25, transform: "rotate(12deg)" }} />
      <div className="float-x absolute right-[10%] top-[15%] h-40 w-40 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.05 195), oklch(0.3 0.08 200))",
          boxShadow: "var(--shadow-glow-soft)", opacity: 0.6,
        }} />
      <div className="float-y absolute right-[20%] bottom-[10%] h-24 w-48 rounded-2xl glass"
        style={{ animationDelay: "-3s", transform: "rotate(-8deg)" }} />
      <div className="float-x absolute left-[15%] bottom-[20%] h-20 w-20 rotate-45 glass"
        style={{ animationDelay: "-5s" }} />
      <div className="pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.18 195 / 0.25), transparent 70%)",
          filter: "blur(60px)",
        }} />
    </div>
  );
}
