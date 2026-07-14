import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[var(--color-sky-2)]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put in the work."
          description="2.5+ years leading delivery on production, AI-integrated web applications."
          align="center"
        />

        <div className="mt-16 relative">
          <div className="absolute left-[27px] sm:left-1/2 top-0 bottom-0 w-px bg-[var(--color-line)] sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex sm:items-center gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-[22px] sm:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--color-azure)] sm:-translate-x-1/2 rail-dot z-10" />

                <div className="hidden sm:block sm:w-1/2" />

                <div className="pl-16 sm:pl-0 sm:w-1/2">
                  <div
                    className={`bg-white rounded-2xl p-6 border border-[var(--color-line)] hover:border-[var(--color-azure-2)] hover:shadow-[0_20px_40px_-24px_rgba(47,111,237,0.35)] transition-all duration-300 ${
                      i % 2 === 0 ? "sm:mr-10" : "sm:ml-10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaBriefcase className="text-[var(--color-azure)] text-sm" />
                      <span className="font-mono text-xs text-[var(--color-azure)]">
                        {job.period}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-[var(--color-ink)]">
                      {job.role}
                    </h3>
                    <p className="text-sm text-[var(--color-slate)] mb-3">{job.company}</p>
                    <ul className="space-y-1.5 text-sm text-[var(--color-slate)] list-disc list-inside">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--color-sky)] text-[var(--color-ink)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
