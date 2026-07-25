import { Category, categoryMeta, projectsByCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';

const borderClasses: Record<Category, string> = {
  fullstack: 'border-fullstack',
  security: 'border-security',
  gamedev: 'border-gamedev',
  research: 'border-research',
};

const textClasses: Record<Category, string> = {
  fullstack: 'text-fullstack',
  security: 'text-security',
  gamedev: 'text-gamedev',
  research: 'text-research',
};

export default function SectionGroup({ category }: { category: Category }) {
  const meta = categoryMeta[category];
  const items = projectsByCategory(category);
  if (items.length === 0) return null;

  return (
    <section
      id={category}
      className={`border-l-2 pl-5 sm:pl-6 ${borderClasses[category]}`}
    >
      <div className="mb-5">
        <p className={`font-mono text-sm ${textClasses[category]}`}>
          {meta.dir}/
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
          {meta.label}
        </h2>
        <p className="mt-1 text-sm text-muted">{meta.description}</p>
      </div>

      {/* A lone project in a 2-up grid leaves an empty half-column, so those
          sections get a single full-width card instead. */}
      <div
        className={`grid grid-cols-1 gap-4 ${
          items.length > 1 ? 'md:grid-cols-2' : ''
        }`}
      >
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
