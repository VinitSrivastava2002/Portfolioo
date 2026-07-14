import { motion } from "framer-motion";
import { SiGeeksforgeeks, SiLeetcode, SiCodechef, SiHackerrank } from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

const platformIcons = {
  GeeksforGeeks: SiGeeksforgeeks,
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  HackerRank: SiHackerrank,
};

export default function Platforms() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Platforms' Stats"
          title="Hands-on coding."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
          {profile.platforms.map((p, i) => {
            const Icon = platformIcons[p.name];
            return (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center gap-3 bg-[var(--color-sky-2)] rounded-2xl p-6 border border-[var(--color-line)] hover:border-[var(--color-azure-2)] transition-colors duration-300"
              >
                <Icon className="text-3xl text-[var(--color-azure)]" />
                <span className="text-sm font-medium text-[var(--color-ink)]">{p.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
