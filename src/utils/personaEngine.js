/**
 * Persona Engine — Client-Side Interest Detection & Theme Configuration
 *
 * Defines 4 developer personas based on tag-click interaction signals.
 * Each persona carries its own accent CSS variables, hero copy, and project sort weights.
 * All computation runs 100% in the browser with no external API calls.
 */

// ---------------------------------------------------------------------------
// 1. Persona Tag Signal Maps
//    Each tag is mapped to the persona it signals and how strongly.
// ---------------------------------------------------------------------------
export const TAG_PERSONA_MAP = {
  // Frontend / UI signals
  'React.js': { frontend: 3 },
  'React 19': { frontend: 3 },
  'Next.js': { frontend: 2, fullstack: 1 },
  'Tailwind CSS': { frontend: 2 },
  'CSS Glassmorphism': { frontend: 2 },
  'UI/UX Design': { frontend: 3 },
  'Responsive Web': { frontend: 2 },
  'Animation': { frontend: 2 },
  'TypeScript': { frontend: 2, backend: 1 },
  'Redux': { frontend: 2 },
  'Redux Toolkit': { frontend: 2 },
  'Framer Motion': { frontend: 3 },
  'GSAP': { frontend: 3 },
  'Bento Grid': { frontend: 2 },
  'Web App': { frontend: 1 },
  'Parcel': { frontend: 1 },
  'Vite': { frontend: 1 },

  // Backend / Systems signals
  'Node.js': { backend: 3 },
  'Express.js': { backend: 3 },
  'FastAPI': { backend: 3 },
  'REST API': { backend: 2 },
  'GraphQL': { backend: 2 },
  'WebSockets': { backend: 2 },
  'Socket.io': { backend: 3 },
  'JWT Auth': { backend: 2 },
  'MongoDB': { backend: 2 },
  'PostgreSQL': { backend: 3 },
  'MySQL': { backend: 2 },
  'Redis': { backend: 3 },
  'Microservices': { backend: 3 },
  'Docker': { backend: 2 },
  'SQL': { backend: 3 },

  // Fullstack signals
  'Fullstack': { fullstack: 3 },
  'Full Stack': { fullstack: 3 },
  'MERN': { fullstack: 3 },
  'MEAN': { fullstack: 2 },

  // AI / ML signals
  'Python': { ai: 3 },
  'Puter.js AI': { ai: 3 },
  'NLP': { ai: 3 },
  'TensorFlow': { ai: 3 },
  'PyTorch': { ai: 3 },
  'OpenAI': { ai: 3 },
  'Claude': { ai: 3 },
  'LLM': { ai: 3 },
  'Machine Learning': { ai: 3 },
  'Embeddings': { ai: 3 },
  'WebGPU': { ai: 2 },
  'AI': { ai: 2 },
};

// ---------------------------------------------------------------------------
// 2. Persona Definitions
// ---------------------------------------------------------------------------
export const PERSONAS = {
  frontend: {
    id: 'frontend',
    label: 'Frontend / UI Specialist',
    emoji: '🎨',
    badge: 'UI Mode',
    heroCopy: 'Crafting Pixel-Perfect Interfaces',
    heroSub: 'Turning design systems into fluid, accessible, and visually stunning user experiences.',
    theme: {
      '--persona-accent': '#00a3ff',
      '--persona-accent-glow': 'rgba(0, 163, 255, 0.25)',
      '--persona-accent-soft': 'rgba(0, 163, 255, 0.08)',
      '--persona-accent-border': 'rgba(0, 163, 255, 0.3)',
      '--persona-gradient': 'linear-gradient(135deg, #00a3ff 0%, #00e5ff 100%)',
      '--persona-badge-bg': 'rgba(0, 163, 255, 0.12)',
      '--persona-badge-color': '#00a3ff',
    },
    sortWeights: { frontend: 1, ui: 1, fullstack: 0.5, backend: 0.2, ai: 0.3, database: 0.1 },
  },
  backend: {
    id: 'backend',
    label: 'Backend / Systems Engineer',
    emoji: '⚙️',
    badge: 'Systems Mode',
    heroCopy: 'Building Scalable High-Performance Systems',
    heroSub: 'Engineering robust REST APIs, distributed microservices, and resilient database architectures.',
    theme: {
      '--persona-accent': '#00e676',
      '--persona-accent-glow': 'rgba(0, 230, 118, 0.25)',
      '--persona-accent-soft': 'rgba(0, 230, 118, 0.08)',
      '--persona-accent-border': 'rgba(0, 230, 118, 0.3)',
      '--persona-gradient': 'linear-gradient(135deg, #00e676 0%, #00bfa5 100%)',
      '--persona-badge-bg': 'rgba(0, 230, 118, 0.12)',
      '--persona-badge-color': '#00e676',
    },
    sortWeights: { backend: 1, database: 1, fullstack: 0.6, frontend: 0.2, ai: 0.3, ui: 0.1 },
  },
  fullstack: {
    id: 'fullstack',
    label: 'Full-Stack / Product Developer',
    emoji: '🚀',
    badge: 'Full-Stack Mode',
    heroCopy: 'Shipping Complete Full-Stack Products',
    heroSub: 'From database schema to interactive UI — building end-to-end digital products that scale.',
    theme: {
      '--persona-accent': '#7c4dff',
      '--persona-accent-glow': 'rgba(124, 77, 255, 0.25)',
      '--persona-accent-soft': 'rgba(124, 77, 255, 0.08)',
      '--persona-accent-border': 'rgba(124, 77, 255, 0.3)',
      '--persona-gradient': 'linear-gradient(135deg, #7c4dff 0%, #651fff 100%)',
      '--persona-badge-bg': 'rgba(124, 77, 255, 0.12)',
      '--persona-badge-color': '#b09fff',
    },
    sortWeights: { fullstack: 1, frontend: 0.7, backend: 0.7, ai: 0.5, ui: 0.5, database: 0.5 },
  },
  ai: {
    id: 'ai',
    label: 'AI / ML Enthusiast',
    emoji: '🧠',
    badge: 'AI Mode',
    heroCopy: 'Engineering Intelligent AI-Powered Systems',
    heroSub: 'Building LLM integrations, NLP pipelines, and client-side ML recommendation engines.',
    theme: {
      '--persona-accent': '#ff6d00',
      '--persona-accent-glow': 'rgba(255, 109, 0, 0.25)',
      '--persona-accent-soft': 'rgba(255, 109, 0, 0.08)',
      '--persona-accent-border': 'rgba(255, 109, 0, 0.3)',
      '--persona-gradient': 'linear-gradient(135deg, #ff6d00 0%, #ffab40 100%)',
      '--persona-badge-bg': 'rgba(255, 109, 0, 0.12)',
      '--persona-badge-color': '#ffab40',
    },
    sortWeights: { ai: 1, frontend: 0.5, fullstack: 0.6, backend: 0.4, ui: 0.4, database: 0.2 },
  },
};

// ---------------------------------------------------------------------------
// 3. Score Calculation
// ---------------------------------------------------------------------------

/**
 * Given a click-history array of tag strings, sum up weighted signals per persona.
 * @param {string[]} clickHistory - Array of tag/category strings clicked.
 * @returns {{ frontend: number, backend: number, fullstack: number, ai: number }}
 */
export function calculateScores(clickHistory) {
  const scores = { frontend: 0, backend: 0, fullstack: 0, ai: 0 };
  clickHistory.forEach((tag) => {
    const signals = TAG_PERSONA_MAP[tag];
    if (signals) {
      Object.entries(signals).forEach(([persona, weight]) => {
        scores[persona] = (scores[persona] || 0) + weight;
      });
    }
  });
  return scores;
}

/**
 * Determine the dominant persona from score totals.
 * Requires minimum 2 total signals to activate a non-default persona.
 * @param {string[]} clickHistory
 * @returns {string} persona id ('frontend' | 'backend' | 'fullstack' | 'ai')
 */
export function calculateDominantPersona(clickHistory) {
  const scores = calculateScores(clickHistory);
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  if (total < 2) return 'frontend'; // default Electric Blue persona until enough signals
  const dominant = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return dominant[0];
}

/**
 * Returns the full theme config object for a given persona id.
 * @param {string} personaId
 */
export function getThemeConfig(personaId) {
  return PERSONAS[personaId] || PERSONAS.fullstack;
}

/**
 * Applies CSS variables to document root for live theme switching.
 * Also remaps the template's native --color-primary and --theme-gradient
 * so the full site palette (buttons, borders, gradients, glows) adapts.
 * @param {Object} themeVars - key/value CSS variable pairs
 */
export function applyThemeToRoot(themeVars) {
  const root = document.documentElement;

  // Set persona-specific tokens
  Object.entries(themeVars).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });

  // Remap template's own primary color tokens so the whole site adapts
  const accent = themeVars['--persona-accent'];
  const gradient = themeVars['--persona-gradient'];
  if (accent) {
    root.style.setProperty('--color-primary', accent);
    root.style.setProperty('--color-primary-alt', accent);
  }
  if (gradient) {
    root.style.setProperty('--theme-gradient', gradient);
  }
}

/**
 * Sort projects array according to persona feature-vector weights.
 * Projects without featureVector are sorted to the end.
 * @param {Object[]} projects
 * @param {Object} sortWeights - { frontend, backend, ai, ui, fullstack, database }
 * @returns {Object[]} sorted projects
 */
export function sortProjectsByPersona(projects, sortWeights) {
  return [...projects].sort((a, b) => {
    const scoreA = computeProjectScore(a, sortWeights);
    const scoreB = computeProjectScore(b, sortWeights);
    return scoreB - scoreA;
  });
}

function computeProjectScore(project, weights) {
  const fv = project.featureVector;
  if (!fv) return 0;
  return Object.entries(weights).reduce((sum, [key, w]) => {
    return sum + (fv[key] || 0) * w;
  }, 0);
}
