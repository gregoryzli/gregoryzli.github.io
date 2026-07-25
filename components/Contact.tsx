import { asset, author } from '@/lib/site';

const linkClass =
  'text-fullstack underline decoration-fullstack/40 underline-offset-4 hover:decoration-fullstack';

export default function Contact() {
  return (
    <section id="contact" className="border-l-2 border-border pl-5 sm:pl-6">
      <p className="font-mono text-sm text-faint">~/contact</p>
      <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
        Get in touch
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        Looking for summer internships in full-stack, security, or ML/AI
        research. Reach out — happy to talk about any of the above.
      </p>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
        <a href={`mailto:${author.email}`} className={linkClass}>
          {author.email}
        </a>
        <a
          href={author.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
        </a>
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        {/* Filename is case-sensitive on GitHub Pages, and the deploy subpath
            has to be prefixed by hand — Next only rewrites its own assets. */}
        <a
          href={asset('Resume.pdf')}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Resume (PDF)
        </a>
      </div>

      <p className="mt-10 pb-6 font-mono text-xs text-faint">
        built by Gregory Li · Next.js, deployed on GitHub Pages
      </p>
    </section>
  );
}
