const credentials = [
  {
    label: 'RoboSub 2022–2024',
    detail:
      'AVBotz Robotics — placed 2nd, 5th, and 14th internationally; built Gazebo simulation tooling and migrated the vision pipeline from YOLOv5 to YOLOv8.',
  },
  {
    label: 'PicoCTF 2025',
    detail:
      '28th nationally (top 2%) of 1,817 U.S. high school teams, as part of a 5-member team.',
  },
];

const skills = [
  'C++',
  'Python',
  'C',
  'JavaScript',
  'TypeScript',
  'React',
  'SQL',
  'Git',
  'Linux',
  'Docker',
  'Ghidra',
  'Burp Suite',
  'Wireshark',
  'Unity',
];

export default function About() {
  return (
    <section id="about" className="border-l-2 border-border pl-5 sm:pl-6">
      <p className="font-mono text-sm text-faint">~/about</p>
      <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
        About
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        I'm a sophomore studying Computer Science at UCLA. My projects don't
        share one stack — they share an instinct to open the box and see how
        it fails, whether that's a language model, a network protocol, or a
        game's timeline logic. Outside of the projects above, a couple of
        things I'm proud of:
      </p>

      <ul className="mt-4 max-w-2xl space-y-3">
        {credentials.map((c) => (
          <li key={c.label} className="text-sm leading-relaxed text-muted">
            <span className="font-mono text-xs uppercase tracking-wide text-ink/80">
              {c.label}
            </span>
            <br />
            {c.detail}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-faint"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
