import type { Project } from "@/data/portfolio";
import YouTubeEmbed from "./YouTubeEmbed";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pb-12 border-b border-border last:border-b-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-xs text-muted">{project.subtitle}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.youtubeId && (
        <div className="mt-5">
          <YouTubeEmbed videoId={project.youtubeId} />
        </div>
      )}

      {project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground underline underline-offset-2 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.keywords.map((keyword) => (
          <SkillBadge key={keyword} name={keyword} />
        ))}
      </div>
    </article>
  );
}
