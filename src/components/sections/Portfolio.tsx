import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-14 py-12 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Portfolio" />
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
