/**
 * Comprehensive Technical Skill Matrix & Synonym Map for Job Description Matching Engine
 */

export const skillsMatrix = [
  // --- FRONTEND ---
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    weight: 1.0,
    aliases: ['react', 'react.js', 'reactjs', 'jsx', 'tsx', 'react 19'],
    relatedProjects: ['mokarramshahban-portfolio', 'food-delivery-app', 'tripazi-travel-agency', 'flixfusion-streaming']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    weight: 0.95,
    aliases: ['next', 'next.js', 'nextjs', 'ssr', 'ssg'],
    relatedProjects: ['mokarramshahban-portfolio']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    weight: 0.90,
    aliases: ['typescript', 'ts', 'type-safe', 'type safe'],
    relatedProjects: ['mokarramshahban-portfolio', 'food-delivery-app']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    weight: 1.0,
    aliases: ['javascript', 'js', 'es6', 'es6+', 'vanilla js', 'ecmascript'],
    relatedProjects: ['mokarramshahban-portfolio', 'devtinder-social', 'flixfusion-streaming']
  },
  {
    id: 'redux',
    name: 'Redux / Redux Toolkit',
    category: 'Frontend',
    weight: 0.85,
    aliases: ['redux', 'redux toolkit', 'rtk', 'state management'],
    relatedProjects: ['food-delivery-app', 'flixfusion-streaming']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    weight: 0.90,
    aliases: ['tailwind', 'tailwind css', 'tailwindcss', 'utility css'],
    relatedProjects: ['food-delivery-app', 'flixfusion-streaming', 'mokarramshahban-portfolio']
  },
  {
    id: 'html_css',
    name: 'HTML5 & CSS3 Glassmorphism',
    category: 'Frontend',
    weight: 0.90,
    aliases: ['html', 'html5', 'css', 'css3', 'responsive design', 'glassmorphism', 'flexbox', 'grid'],
    relatedProjects: ['tripazi-travel-agency', 'techurja-2025-portal']
  },

  // --- BACKEND ---
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    weight: 1.0,
    aliases: ['node', 'node.js', 'nodejs', 'server-side js'],
    relatedProjects: ['devtinder-social', 'roomnest-property-hub', 'mokarramshahban-portfolio']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    weight: 0.95,
    aliases: ['express', 'express.js', 'expressjs'],
    relatedProjects: ['devtinder-social', 'roomnest-property-hub']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    weight: 0.85,
    aliases: ['python', 'py', 'python3'],
    relatedProjects: ['fastapi-ai-microservices']
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend',
    weight: 0.85,
    aliases: ['fastapi', 'fast api', 'asyncio', 'python backend'],
    relatedProjects: ['fastapi-ai-microservices']
  },
  {
    id: 'rest_api',
    name: 'RESTful API Architecture',
    category: 'Backend',
    weight: 0.95,
    aliases: ['rest', 'rest api', 'restful', 'endpoints', 'json api', 'api design'],
    relatedProjects: ['devtinder-social', 'roomnest-property-hub', 'fastapi-ai-microservices']
  },

  // --- DATABASES ---
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    weight: 0.90,
    aliases: ['mongodb', 'mongo', 'mongoose', 'nosql', 'document database'],
    relatedProjects: ['devtinder-social', 'roomnest-property-hub']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL / SQL',
    category: 'Databases',
    weight: 0.85,
    aliases: ['postgres', 'postgresql', 'sql', 'relational database', 'rdbms'],
    relatedProjects: ['roomnest-property-hub']
  },

  // --- AI & TOOLS ---
  {
    id: 'ai_integration',
    name: 'AI Integration & Prompt Engineering',
    category: 'AI & ML',
    weight: 0.90,
    aliases: ['ai', 'artificial intelligence', 'claude', 'puter.js', 'llm', 'nlp', 'openai', 'gpt', 'prompts'],
    relatedProjects: ['mokarramshahban-portfolio', 'fastapi-ai-microservices']
  },
  {
    id: 'git',
    name: 'Git & GitHub Workflows',
    category: 'Tools & DevOps',
    weight: 0.95,
    aliases: ['git', 'github', 'version control', 'ci/cd'],
    relatedProjects: ['mokarramshahban-portfolio', 'devtinder-social']
  },
  {
    id: 'jest_testing',
    name: 'Jest & Unit Testing',
    category: 'Tools & DevOps',
    weight: 0.80,
    aliases: ['jest', 'unit test', 'unit testing', 'react testing library', 'rtl', 'testing'],
    relatedProjects: ['food-delivery-app']
  }
];

export const sampleJobDescriptions = [
  {
    title: 'Full-Stack Software Engineer (React + Node.js)',
    company: 'TechCorp Solutions',
    text: `We are looking for a Senior Full-Stack Developer proficient in React.js, TypeScript, Node.js, and Express.js.
Responsibilities include building high-performance responsive web applications, designing RESTful APIs, managing MongoDB databases, and implementing automated Jest test suites. Experience with Tailwind CSS and Git version control is required.`
  },
  {
    title: 'Frontend React & UI/UX Developer',
    company: 'Innovate AI Labs',
    text: `Seeking a passionate Frontend React Engineer to craft modern glassmorphic web user interfaces.
Key Skills: React 19, JavaScript ES6+, Redux Toolkit, Tailwind CSS, Responsive Design, and API integration. Candidates should have a strong eye for UI/UX architecture and performance optimization.`
  },
  {
    title: 'AI Microservices & Backend Engineer',
    company: 'DataPulse Systems',
    text: `Looking for a Backend Developer experienced in Python, FastAPI, REST APIs, and AI integrations (LLMs, NLP).
Must have strong experience designing asynchronous microservices, PostgreSQL databases, Docker, and CI/CD pipelines.`
  }
];

export default skillsMatrix;
