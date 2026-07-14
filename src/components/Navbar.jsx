import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { cn } from "../utils/cn";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 flex items-center justify-between rounded-full transition-all duration-300",
          scrolled ? "glass shadow-[0_10px_30px_-15px_rgba(11,37,69,0.25)] py-2 px-6" : ""
        )}
      >
        <a href="#home" className="font-display text-lg font-semibold text-[var(--color-ink)]">
          Vinit<span className="text-[var(--color-azure)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative px-4 py-2 rounded-full transition-colors duration-300",
                active === link.id
                  ? "text-[var(--color-azure)]"
                  : "text-[var(--color-slate)] hover:text-[var(--color-ink)]"
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-[var(--color-sky)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-[var(--color-ink)] text-white text-sm px-5 py-2.5 font-medium hover:bg-[var(--color-azure)] transition-colors duration-300"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-2xl text-[var(--color-ink)]"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-3 rounded-3xl glass overflow-hidden"
          >
            <div className="flex flex-col p-4 font-mono text-sm">
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-colors",
                    active === link.id
                      ? "bg-[var(--color-sky)] text-[var(--color-azure)]"
                      : "text-[var(--color-slate)]"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
