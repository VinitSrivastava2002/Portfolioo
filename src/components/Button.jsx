import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export default function Button({
  as = "a",
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  children,
  className,
  target,
}) {
  const Comp = motion[as] ?? motion.a;

  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-colors duration-300";

  const variants = {
    primary:
      "bg-[var(--color-ink)] text-white hover:bg-[var(--color-azure)] shadow-[0_10px_30px_-10px_rgba(11,37,69,0.5)]",
    outline:
      "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-azure)] hover:text-[var(--color-azure)]",
    ghost: "text-[var(--color-ink)] hover:text-[var(--color-azure)]",
  };

  return (
    <Comp
      href={href}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
    >
      {Icon && <Icon className="text-base" />}
      {children}
    </Comp>
  );
}
