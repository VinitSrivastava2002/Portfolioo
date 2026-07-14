import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { profile } from "../data/profile";
import { education } from "../data/education";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[var(--color-sky-2)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Every great project begins with the right people."
          description="A quick look at who I am, how I work, and where I learned it."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          {/* Focus areas */}
          <div className="lg:col-span-1 space-y-5">
            {profile.focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[var(--color-line)] hover:border-[var(--color-azure-2)] hover:shadow-[0_20px_40px_-20px_rgba(47,111,237,0.35)] transition-all duration-300"
              >
                <p className="font-mono text-xs text-[var(--color-azure)] mb-1">{`0${i + 1}`}</p>
                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {area.title}
                </h3>
                <p className="text-sm text-[var(--color-slate)] mt-1">{area.description}</p>
                <p className="text-xs font-mono text-[var(--color-azure)] mt-3">{area.stat}</p>
              </motion.div>
            ))}
          </div>

          {/* Bio + resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 sm:p-10 border border-[var(--color-line)] shadow-[0_30px_60px_-30px_rgba(11,37,69,0.15)]"
          >
            <h3 className="font-display text-2xl font-semibold text-[var(--color-ink)]">
              Hello! I'm {profile.name}
            </h3>
            <p className="mt-4 text-[var(--color-slate)] leading-relaxed">{profile.about}</p>

            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <span className="text-[var(--color-slate)]">Based in</span>{" "}
                <span className="font-medium text-[var(--color-ink)]">{profile.location}</span>
              </div>
              <div>
                <span className="text-[var(--color-slate)]">Email</span>{" "}
                <span className="font-medium text-[var(--color-ink)]">{profile.email}</span>
              </div>
              <div>
                <span className="text-[var(--color-slate)]">Focus</span>{" "}
                <span className="font-medium text-[var(--color-ink)]">Design × Full-Stack</span>
              </div>
            </div>

            <div className="mt-8">
              <Button href={profile.resumeUrl} target="_blank" icon={HiOutlineDocumentDownload}>
                Download Resume
              </Button>
            </div>

            {/* Education timeline */}
            <div className="mt-10 pt-8 border-t border-[var(--color-line)]">
              <div className="flex items-center gap-2 mb-6">
                <FaGraduationCap className="text-[var(--color-azure)]" />
                <h4 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  Education
                </h4>
              </div>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.institution + edu.degree}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-6 border-l-2 border-[var(--color-sky)]"
                  >
                    <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[var(--color-azure)] rail-dot" />
                    <p className="font-mono text-xs text-[var(--color-azure)]">{edu.period}</p>
                    <p className="font-display font-semibold text-[var(--color-ink)] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-[var(--color-slate)]">{edu.institution}</p>
                    <p className="text-sm text-[var(--color-slate)] mt-0.5">{edu.score}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
