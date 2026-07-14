import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiCoursera, SiDocker, SiGooglecloud, SiGit, SiLeetcode } from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";

const iconMap = {
  coursera: SiCoursera,
  docker: SiDocker,
  googlecloud: SiGooglecloud,
  git: SiGit,
  leetcode: SiLeetcode,
};

function CertMedia({ cert }) {
  if (cert.image) {
    return (
      <div className="relative h-40 overflow-hidden bg-[var(--color-sky)]">
        <img
          src={cert.image}
          alt={cert.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/50 transition-colors duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium inline-flex items-center gap-2">
            View Certificate <FaExternalLinkAlt className="text-xs" />
          </span>
        </div>
      </div>
    );
  }

  const Icon = iconMap[cert.icon];
  return (
    <div className="p-7 pb-0 flex items-center gap-4">
      <span className="w-14 h-14 rounded-2xl bg-[var(--color-sky)] text-[var(--color-azure)] flex items-center justify-center text-2xl group-hover:bg-[var(--color-ink)] group-hover:text-white transition-colors duration-300">
        <Icon />
      </span>
      <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-azure)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View <FaExternalLinkAlt className="text-[10px]" />
      </span>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 bg-[var(--color-sky-2)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Certifications & Activities"
          title="Yes — I'm certified."
          description="Courses, cloud programs, virtual internships and coding challenges that back up the skills above."
          align="center"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name + cert.issuer}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-line)] hover:border-[var(--color-azure-2)] hover:shadow-[0_30px_60px_-30px_rgba(11,37,69,0.25)] transition-all duration-300"
            >
              <CertMedia cert={cert} />
              <div className="p-5">
                <h3 className="font-display font-semibold text-[var(--color-ink)]">{cert.name}</h3>
                <p className="text-sm text-[var(--color-slate)] mt-1">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
