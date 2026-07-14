import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects worth showing."
          description="Production systems from Codedemeter alongside personal builds — full-stack apps, an ML tool and crafted front ends. Featured work is shown larger."
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
