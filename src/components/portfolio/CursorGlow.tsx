import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const m = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[2] h-[500px] w-[500px] rounded-full"
      animate={{ x: pos.x - 250, y: pos.y - 250 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        background:
          "radial-gradient(circle, oklch(0.55 0.18 195 / 0.18), transparent 60%)",
        filter: "blur(40px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
