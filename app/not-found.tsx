import type { Metadata } from 'next';
import { home } from '@/lib/site';

export const metadata: Metadata = {
  title: '404 — Not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-20">
      <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e35b6b]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0a458]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5b8def]/70" />
          <span className="ml-3 font-mono text-xs text-faint">
            gregoryli@portfolio: ~
          </span>
        </div>

        <div className="px-5 py-6 font-mono text-sm leading-relaxed sm:text-base">
          <p className="text-muted">
            <span className="text-[#5b8def]">gregoryli@portfolio</span>
            <span className="text-faint">:~$</span> cd {'<'}that page{'>'}
          </p>
          <p className="mt-1 text-security">
            bash: cd: no such file or directory
          </p>

          <h1 className="mt-6 text-2xl font-semibold text-ink sm:text-3xl">
            404
          </h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            That path doesn&apos;t exist. Nothing broke — you just took a wrong
            turn.
          </p>

          <p className="mt-6 text-muted">
            <span className="text-[#5b8def]">gregoryli@portfolio</span>
            <span className="text-faint">:~$</span>{' '}
            <a
              href={home}
              className="text-fullstack underline decoration-fullstack/40 underline-offset-4 hover:decoration-fullstack"
            >
              cd ~
            </a>
            <span className="ml-1 animate-blink border-r-2 border-ink pr-0.5" />
          </p>
        </div>
      </div>
    </main>
  );
}
