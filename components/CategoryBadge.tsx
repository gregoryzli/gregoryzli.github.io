import { Category, categoryMeta } from '@/data/projects';

const colorClasses: Record<Category, { text: string; bg: string; border: string }> = {
  fullstack: {
    text: 'text-fullstack',
    bg: 'bg-fullstack/10',
    border: 'border-fullstack/30',
  },
  security: {
    text: 'text-security',
    bg: 'bg-security/10',
    border: 'border-security/30',
  },
  gamedev: {
    text: 'text-gamedev',
    bg: 'bg-gamedev/10',
    border: 'border-gamedev/30',
  },
  research: {
    text: 'text-research',
    bg: 'bg-research/10',
    border: 'border-research/30',
  },
};

export default function CategoryBadge({ category }: { category: Category }) {
  const meta = categoryMeta[category];
  const c = colorClasses[category];
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider ${c.text} ${c.bg} ${c.border}`}
    >
      [{meta.label}]
    </span>
  );
}
