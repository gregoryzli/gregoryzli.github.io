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
    description: 'Reinforcement learning, and constraining what LLMs believe.',
  },
};

export type ProjectLink = { href: string; label: string };

/** Intrinsic dimensions are required — they reserve space so images can't shift layout. */
export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  status?: string;
  description: string;
  role?: string;
  stack: string[];
  image?: ProjectImage;
  /** Rendered in order. Put a live demo first — it's the link people click. */
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'splitpay',
    title: 'SplitPay',
    category: 'fullstack',
    status: 'Solo build · live demo · 92 tests',
    description:
      'A group-expense splitter: create a group, log shared costs across equal, exact, and percentage splits, and get back the fewest payments needed to settle everyone up.',
    role: 'The settle-up step is the interesting part — the exact minimum is NP-hard, so it uses a greedy creditor/debtor heuristic bounded at n−1 payments, written as a pure function and checked with property-based tests over randomized balances rather than fixed cases. Money is integer cents end to end, with a largest-remainder allocator so percentage splits still sum back to the total.',
    stack: [
      'React',
      'TypeScript',
      'Express',
      'Prisma',
      'MySQL',
      'Docker',
      'JWT',
    ],
    image: {
      src: 'projects/splitpay.png',
      alt: 'SplitPay settle-up view: member balances above a list of suggested payments that settle the group.',
      width: 1000,
      height: 643,
    },
    links: [
      { href: 'https://gregoryzli.github.io/expense-splitter/', label: 'Live demo' },
      { href: 'https://github.com/gregoryzli/expense-splitter', label: 'View repo' },
    ],
  },
  {
    slug: 'sortaai',
    title: 'SortaAI',
    category: 'fullstack',
    status: 'Hackathon build · "Most Innovative Product"',
    description:
      'An AI email assistant that summarizes, classifies, and prioritizes a Gmail inbox, built in 24 hours at the AWS x BruinAI GenAI Hackathon with a team of four.',
    role: 'My role: built the Flask backend and the OAuth-secured Gmail integration.',
    stack: ['Flask', 'Streamlit', 'AWS Bedrock', 'OAuth'],
    links: [
      { href: 'https://github.com/lektphire/AWS_Summit_2025', label: 'View repo' },
    ],
  },
  {
    slug: 'duckx-fuzzing',
    title: 'Fuzz-Testing duckx',
    category: 'security',
    status: 'With one collaborator',
    description:
      'Fuzz-tested duckx, a C++ .docx parsing library, with honggfuzz in feedback-driven mode — 236M iterations across 16 threads, no crashes and no timeouts.',
    role: 'The work was mostly in getting the fuzzer past the container format: random bytes never form a valid .docx ZIP, so document.open was modified to take raw bytes directly, and a pugixml link error had to be cleared first. Reworking the harness took edge coverage from roughly 400 to 1030. On duckx.cpp itself that came to 51% of functions and 41% of lines — the 17% project-wide number is diluted by the pugixml and zip dependencies, which the harness barely exercises.',
    stack: ['C++', 'honggfuzz', 'llvm-cov'],
    image: {
      src: 'projects/duckx.png',
      alt: 'honggfuzz status output: feedback-driven mode, 16 threads, 146,789 execs/sec, 0 crashes, 0 timeouts, edge coverage 1030 of 14761.',
      width: 1000,
      height: 283,
    },
  },
  {
    slug: 'astar-enemy-ai',
    title: 'A* Enemy AI',
    category: 'gamedev',
    status: 'My AI from a team game project · extracted to run standalone',
    description:
      'Three enemy archetypes — a persistent tracker, a vision-gated pursuer, and a rusher that telegraphs for three seconds then charges — all driven by one MonoBehaviour over a single A* grid graph.',
    role: 'The AI, its pathfinding integration, and this standalone extraction are mine; the rest of Through the Gates of Hell — flashlight, player systems, UI, audio — was my teammates\'. Decoupling it behind two interfaces (ILightSource, IDamageable) lets it run without their code. Light-stun freezes an in-progress path by pinning the destination each frame instead of cancelling it, so a stunned enemy resumes without replanning.',
    stack: ['Unity', 'C#', 'A* Pathfinding Project'],
    image: {
      src: 'projects/astar.png',
      alt: 'Unity demo scene showing the A* grid graph, wall colliders, and a live path bending around an obstacle toward the player.',
      width: 1000,
      height: 686,
    },
    links: [
      {
        href: 'https://github.com/gregoryzli/unity-astar-enemy-ai',
        label: 'View repo',
      },
      {
        href: 'https://raymondzou.itch.io/through-the-gates-of-hell',
        label: 'Play the game',
      },
    ],
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
  {
    slug: 'bipedal-walker',
    title: 'BipedalWalker via TD3',
    category: 'research',
    status: 'UCLA ACM AI, AISF · solo',
    description:
      "Trained an agent to solve Gymnasium's BipedalWalker-v3 with TD3, clearing the 300-reward solve threshold.",
    role: 'Landed on TD3 only after benchmarking the alternatives — a PPO baseline, several tuned PPO variants, then SAC — with the earlier checkpoints and TensorBoard runs left in the repo rather than tidied away. Built on Stable-Baselines3 with normalized observations and Gaussian action noise.',
    stack: ['Python', 'Stable-Baselines3', 'PyTorch', 'Gymnasium'],
    links: [
      {
        href: 'https://github.com/gregoryzli/AISF_Bipedal_Walker',
        label: 'View repo',
      },
    ],
  },
];

export const projectsByCategory = (category: Category) =>
  projects.filter((p) => p.category === category);
