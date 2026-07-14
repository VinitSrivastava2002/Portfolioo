import { motion } from "framer-motion";

// Ambient floating gradient blobs used sparingly behind hero/CTA sections.
export default function FloatingShapes({ variant = "hero" }) {
  const shapes =
    variant === "hero"
      ? [
          { size: 420, top: "-10%", left: "60%", delay: 0, blur: 90 },
          { size: 300, top: "50%", left: "-8%", delay: 1.2, blur: 70 },
          { size: 220, top: "70%", left: "80%", delay: 0.6, blur: 60 },
        ]
      : [
          { size: 320, top: "0%", left: "70%", delay: 0.2, blur: 80 },
          { size: 260, top: "60%", left: "5%", delay: 0.9, blur: 70 },
        ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.35, y: 0 }}
          animate={{ opacity: [0.25, 0.45, 0.25], y: [0, -20, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            background:
              "radial-gradient(circle at 30% 30%, var(--color-azure-2), var(--color-sky) 70%)",
            filter: `blur(${s.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
