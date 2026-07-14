import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TiltCard from "./TiltCard";
import { cn } from "../utils/cn";

export default function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={cn(featured ? "md:col-span-2" : "md:col-span-1")}
    >
      <TiltCard className="group h-full bg-white rounded-3xl overflow-hidden border border-[var(--color-line)] hover:shadow-[0_40px_80px_-40px_rgba(11,37,69,0.35)] transition-shadow duration-500">
        <div className={cn("relative overflow-hidden", featured ? "h-72" : "h-52")}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {project.status && (
            <span className="absolute top-4 right-4 text-xs font-mono px-3 py-1 rounded-full bg-white/90 text-[var(--color-azure)]">
              {project.status}
            </span>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--color-slate)] leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--color-sky)] text-[var(--color-ink)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-azure)] transition-colors"
              >
                <FaGithub /> Code
              </a>
            )}
            {!project.github && !project.live && (
              <span className="text-sm font-mono text-[var(--color-slate)]">
                Internal / private repo
              </span>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[var(--color-ink)] text-white hover:bg-[var(--color-azure)] transition-colors"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
