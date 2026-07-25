'use client';

import { useEffect, useState } from 'react';
import { categoryMeta } from '@/data/projects';

const links = [
  { id: 'fullstack', label: categoryMeta.fullstack.label },
  { id: 'security', label: categoryMeta.security.label },
  { id: 'gamedev', label: categoryMeta.gamedev.label },
  { id: 'research', label: categoryMeta.research.label },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

// Written out rather than interpolated so Tailwind's scanner can see them.
const activeClass: Record<string, string> = {
  fullstack: 'text-fullstack',
  security: 'text-security',
  gamedev: 'text-gamedev',
  research: 'text-research',
  about: 'text-ink',
  contact: 'text-ink',
};

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // The bottom inset means a section only counts as current once it reaches
    // the upper band of the viewport, which matches where a reader's eye is.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-88px 0px -65% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 font-mono text-sm"
      >
        <a href="#top" className="text-ink">
          gregory<span className="text-fullstack">li</span>
        </a>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-faint">
          {links.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`transition-colors hover:text-ink ${
                    isActive ? activeClass[id] : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
