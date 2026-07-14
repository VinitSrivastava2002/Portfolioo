import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { profile } from "../data/profile";

const iconLinks = [
  { icon: FaGithub, url: profile.socials.github, label: "GitHub" },
  { icon: FaLinkedin, url: profile.socials.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, url: profile.socials.email, label: "Email" },
  { icon: FaPhoneAlt, url: profile.socials.phone, label: "Phone" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-xl text-white">
            Vinit<span className="text-[var(--color-azure-2)]">.</span>
          </p>
          <p className="text-sm text-white/50 mt-1 font-mono">
            Full-Stack Developer (MERN)
          </p>
        </div>

        <div className="flex items-center gap-3">
          {iconLinks.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target={url.startsWith("mailto") || url.startsWith("tel") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[var(--color-azure)] hover:border-[var(--color-azure)] transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/40 font-mono text-center md:text-right">
          © {new Date().getFullYear()} Vinit Srivastava.<br className="hidden md:block" /> All rights reserved.
        </p>
      </div>
    </footer>
  );
}
