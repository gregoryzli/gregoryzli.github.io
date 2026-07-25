import type { CSSProperties } from 'react';

/** CSS custom props driving the type/reveal animations in globals.css. */
type Timed = CSSProperties & {
  '--type-w'?: string;
  '--type-steps'?: string;
  '--type-dur'?: string;
  '--type-delay'?: string;
};

const CHAR_MS = 40;

/** A typed command line. `cmd` must be single-line for the width clip to work. */
function Command({ cmd, delay }: { cmd: string; delay: number }) {
  const style: Timed = {
    '--type-w': `${cmd.length}ch`,
    '--type-steps': `${cmd.length}`,
    '--type-dur': `${cmd.length * CHAR_MS}ms`,
    '--type-delay': `${delay}ms`,
  };
  return (
    <>
      <span className="text-[#5b8def]">gregoryli@portfolio</span>
      <span className="text-faint">:~$ </span>
      <span className="type" style={style}>
        {cmd}
      </span>
    </>
  );
}

// One timeline, derived rather than hand-tuned, so edits to the copy above
// don't desynchronise the stagger.
const t = (() => {
  let now = 150;
  const step = (chars: number) => {
    const start = now;
    now += chars * CHAR_MS + 50;
    return start;
  };
  const cmd1 = step(6); // whoami
  const out1 = step(0);
  const cmd2 = step(12); // cat about.md
  const out2 = step(0);
  const cmd3 = step(12); // ls projects/
  return { cmd1, out1, cmd2, out2, cmd3, cursor: now };
})();

const at = (delay: number): Timed => ({ '--type-delay': `${delay}ms` });

export default function Terminal() {
  return (
    <div className="mx-auto w-full max-w-3xl">
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
            <Command cmd="whoami" delay={t.cmd1} />
          </p>
          <h1 className="reveal mt-1 text-ink" style={at(t.out1)}>
            Gregory Li
          </h1>
          <p className="reveal text-faint" style={at(t.out1)}>
            B.S. Computer Science, UCLA · Class of 2029
          </p>

          <p className="mt-5 text-muted">
            <Command cmd="cat about.md" delay={t.cmd2} />
          </p>
          <p className="reveal mt-1 max-w-xl text-ink" style={at(t.out2)}>
            I like taking things apart to see how they break — across full-stack
            apps, security research, game systems, and neurosymbolic AI.
            Currently looking for summer internships.
          </p>

          <p className="mt-5 text-muted">
            <Command cmd="ls projects/" delay={t.cmd3} />
            {/* The cursor is its own element: blinking the span that also holds
                the command text would flash the text along with it. */}
            <span className="reveal" style={at(t.cursor)}>
              <span className="animate-blink border-r-2 border-ink pr-0.5" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
