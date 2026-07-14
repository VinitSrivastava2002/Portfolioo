import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Button from "../components/Button";
import TypingText from "../components/TypingText";
import FloatingShapes from "../components/FloatingShapes";
import { profile } from "../data/profile";

const socialIcons = [
  { icon: FaGithub, url: profile.socials.github },
  { icon: FaLinkedin, url: profile.socials.linkedin },
  { icon: FaEnvelope, url: profile.socials.email },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white"
    >
      <FloatingShapes variant="hero" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-5"
          >
            Portfolio / 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)]"
          >
            Hi, I'm Vinit —
            <br />
            I build <span className="text-gradient">full-stack</span>
            <br />
            products that ship.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 font-mono text-base sm:text-lg text-[var(--color-slate)] h-7"
          >
            <TypingText words={profile.typedRoles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 max-w-lg text-[var(--color-slate)] leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={profile.resumeUrl} target="_blank" icon={HiOutlineDocumentDownload}>
              View Resume
            </Button>
            <Button href={profile.socials.github} target="_blank" variant="outline" icon={FaGithub}>
              View GitHub
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            {socialIcons.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target={url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink)] hover:text-white hover:bg-[var(--color-azure)] hover:border-[var(--color-azure)] transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-sky)] to-[var(--color-azure-2)]/20 p-2">
            <div className="w-full h-full rounded-[2rem] bg-[var(--color-sky-2)] flex items-center justify-center overflow-hidden border border-[var(--color-line)]">
              <span className="font-display text-8xl font-semibold text-[var(--color-azure)]">
                VS
              </span>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-8 glass rounded-2xl px-5 py-3 shadow-lg"
          >
            <p className="font-display text-xl font-semibold text-[var(--color-ink)]">2.5+</p>
            <p className="text-xs text-[var(--color-slate)] font-mono">Years experience</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-6 -right-6 glass rounded-2xl px-5 py-3 shadow-lg"
          >
            <p className="font-display text-xl font-semibold text-[var(--color-ink)]">270+</p>
            <p className="text-xs text-[var(--color-slate)] font-mono">LeetCode solved</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-slate)] flex flex-col items-center gap-2 text-xs font-mono"
      >
        Scroll
        <FaArrowDown />
      </motion.a>
    </section>
  );
}
