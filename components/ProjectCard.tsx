import { Project } from '@/data/projects';
import { asset } from '@/lib/site';
import CategoryBadge from './CategoryBadge';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-faint hover:bg-surfaceHover">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-mono text-lg text-ink">{project.title}</h3>
        <CategoryBadge category={project.category} />
      </div>

      {project.status && (
        <p className="mt-1 font-mono text-xs text-faint">{project.status}</p>
      )}

      {/* Capped so a full-width card doesn't stretch prose to unreadable
          line lengths. */}
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.role && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80">
          {project.role}
        </p>
      )}

      {project.image && (
        <div className="mt-4 overflow-hidden rounded border border-border">
          {/* Plain <img>: next/image's optimizer doesn't run in a static export,
              and width/height reserve the box so the load can't shift layout. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(project.image.src)}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full opacity-90 transition-opacity group-hover:opacity-100"
          />
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-faint"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-fullstack underline decoration-fullstack/40 underline-offset-4 hover:decoration-fullstack"
            >
              {l.label} &rarr;
            </a>
          ))}
        </div>
      )}

    </article>
  );
}
