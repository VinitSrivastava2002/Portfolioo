import { motion } from "framer-motion";
import { FaServer, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { skillCategories, coreConcepts } from "../data/skills";

const icons = { backend: FaServer, frontend: FaCode, database: FaDatabase, cloud: FaCloud };

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--color-ink)]">{name}</span>
        <span className="text-xs font-mono text-[var(--color-azure)]">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--color-sky)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-azure)] to-[var(--color-azure-2)]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built in production."
          description="2.5+ years of shipping real features — not just tutorials — across the stack."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[var(--color-sky-2)] rounded-3xl p-7 border border-[var(--color-line)] hover:shadow-[0_30px_60px_-30px_rgba(11,37,69,0.2)] transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[var(--color-ink)] text-white flex items-center justify-center mb-5">
                  <Icon />
                </div>
                <h3 className="font-display text-base font-semibold text-[var(--color-ink)] mb-5">
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <SkillBar key={skill.name} {...skill} delay={j * 0.12} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {coreConcepts.map((concept) => (
            <span
              key={concept}
              className="font-mono text-xs px-4 py-2 rounded-full border border-[var(--color-line)] text-[var(--color-slate)] hover:border-[var(--color-azure-2)] hover:text-[var(--color-azure)] transition-colors duration-300"
            >
              {concept}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
