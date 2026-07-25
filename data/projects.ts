export type Category = 'fullstack' | 'security' | 'gamedev' | 'research';

export const categoryMeta: Record<
  Category,
  { label: string; dir: string; description: string }
> = {
  fullstack: {
    label: 'Full-Stack',
    dir: '~/full-stack',
    description: 'Web apps, end to end.',
  },
  security: {
    label: 'Cybersecurity',
    dir: '~/security',
    description: 'Breaking things on purpose.',
  },
  gamedev: {
    label: 'Game Dev',
    dir: '~/game-dev',
    description: 'Systems for play.',
  },
  research: {
    label: 'AI Research',
    dir: '~/research',
    description: 'Constraining what LLMs believe.',
  },
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  status?: string;
  description: string;
  role?: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: 'sortaai',
    title: 'SortaAI',
    category: 'fullstack',
    status: 'Hackathon build · "Most Innovative Product"',
    description:
      'An AI email assistant that summarizes, classifies, and prioritizes a Gmail inbox, built in 24 hours at the AWS x BruinAI GenAI Hackathon with a team of four.',
    role: 'My role: built the Flask backend and the OAuth-secured Gmail integration.',
    stack: ['Flask', 'Streamlit', 'AWS Bedrock', 'OAuth'],
    link: 'https://github.com/lektphire/AWS_Summit_2025',
    linkLabel: 'View repo',
  },
  {
    slug: 'expense-splitter',
    title: 'Expense Splitter',
    category: 'fullstack',
    status: 'Frontend complete · backend in progress',
    description:
      'A shared-expense tracker for splitting group costs. The React frontend is done; a persistence layer and backend are next.',
    stack: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/gregoryzli/expense_splitter_react_contained',
    linkLabel: 'View repo',
  },
  {
    slug: 'duckx-fuzzing',
    title: 'Fuzz-Testing duckx',
    category: 'security',
    status: 'With one collaborator',
    description:
      'Fuzz-tested duckx, a C++ .docx parsing library, using Honggfuzz with malformed inputs aimed at its file-parsing routines.',
    role: 'Result: broad coverage across parsing edge cases, no crashes or vulnerabilities found — a clean bill of health for the library.',
    stack: ['C++', 'Honggfuzz'],
  },
  {
    slug: 'reminescence',
    title: 'Reminescence',
    category: 'gamedev',
    status: 'In development',
    description:
      'A story-driven puzzle-platformer in the spirit of Little Nightmares, built around swapping between past and present states to solve environmental puzzles.',
    role: 'My role: programmer — dual-state scene logic for object persistence across timelines and time-swap transitions.',
    stack: ['Unity', 'C#'],
  },
  {
    slug: 'neurosymbolic-context',
    title: 'Neurosymbolic Context Constraints',
    category: 'research',
    status: 'UCLA ACM AI, AISF · team of four · targeting an ICML workshop',
    description:
      'Research into reducing LLM hallucination by constraining how context updates, storing state in a dynamic knowledge graph rather than a raw context window.',
    role: 'My role: designing the Scallop-constrained knowledge graph and a recursive architecture that segments long contexts into structured subchunks, evaluated against GEPA and Dynamic Cheatsheet on LongBench.',
    stack: ['Python', 'Scallop', 'LLMs'],
  },
];

export const projectsByCategory = (category: Category) =>
  projects.filter((p) => p.category === category);
