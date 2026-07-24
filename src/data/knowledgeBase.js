import projectsData from './projects.json';

/**
 * Consolidated single source of truth knowledge base for Mokarram Shahban.
 * Covers bio, work experience, education, skills, achievements, services, and projects.
 */
export const knowledgeBase = {
  personalInfo: {
    name: 'Mokarram Shahban',
    role: 'Software Developer',
    company: 'Vizva Consultancy Services',
    location: 'Gurugram, India (also associated with Amritsar)',
    email: 'mokarramshahban.in@gmail.com',
    github: 'https://github.com/mokarramshahban',
    linkedin: 'https://www.linkedin.com/in/mokarram-shahban/',
    instagram: 'https://www.instagram.com/mokarramshahban.in/',
    bio: 'Software Developer at Vizva Consultancy Services specializing in building scalable, high-performance, and AI-powered web applications using React, Next.js, Node.js, Python, and FastAPI. Experienced in full-stack engineering, REST API architecture, database schema design, and UI/UX audits for Government of India departments.'
  },

  workExperience: [
    {
      role: 'Software Developer',
      company: 'Vizva Consultancy Services',
      location: 'Gurugram',
      period: 'July 2026 – Present',
      details: 'Building scalable full-stack applications using React, Next.js, Node.js, Python, and FastAPI. Incorporates AI-powered features, intelligent data processing, and designs REST APIs and database schemas across MongoDB and PostgreSQL.'
    },
    {
      role: 'Full Stack Web Development Intern',
      company: 'AOSC Technologies India Pvt. Ltd.',
      location: 'Amritsar',
      period: 'Jan 2026 – June 2026',
      details: 'Built high-performance, responsive web interfaces using React, Next.js, and TypeScript. Developed reusable, type-safe UI components and fixed performance bottlenecks, improving page load speeds by 15%.'
    },
    {
      role: 'Web Developer & Co-Founder',
      company: 'MxNext.in',
      location: 'Amritsar',
      period: 'May 2023 – May 2024',
      details: 'Acted as primary client contact for institutional clients including KCET and Sikh History Research Centre. Co-led a team delivering 5+ web projects and conducted UI/UX audits that raised organic traffic and engagement.'
    },
    {
      role: 'Trainee – Web Designing & Development',
      company: 'Green Apple Media Solution',
      location: 'Amritsar',
      period: 'Sept 2023 – March 2024',
      details: 'Completed structured training in web design fundamentals: HTML5, CSS3, JavaScript, and UI/UX principles. Assisted in building and styling responsive web pages under mentor guidance.'
    }
  ],

  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering (CSE)',
      institution: 'Khalsa College of Engineering & Technology (KCET)',
      location: 'Amritsar',
      period: '2022 – 2026',
      details: 'Bachelor of Technology degree in CSE with specialization in modern full-stack web development, data structures, algorithms, and software engineering principles.'
    }
  ],

  achievements: [
    {
      title: 'Government UI/UX Audits',
      organization: 'Jharkhand Transport Department & Department of Legal Affairs (Government of India)',
      period: 'Jan – Mar 2025',
      details: 'Conducted comprehensive UI/UX audits directly for two Government of India departments, providing usability recommendations to optimize accessibility and user workflow.'
    },
    {
      title: 'Best Poster Presentation Award',
      organization: 'KCET National Conferences',
      period: '2024 & 2025',
      details: 'Awarded Best Poster Presentation at National Conferences on Women-Centric Laws (2024) and Women, Technology & Tradition (2025).'
    },
    {
      title: 'Overall Student Organiser',
      organization: 'Tech Urja Technical & Cultural Fest',
      period: '2023 – 2025',
      details: 'Led event operations and website portal integration for 1,200+ participant sign-ups across annual college flagship technical & cultural festivals.'
    }
  ],

  skills: {
    frontend: ['React.js', 'Next.js', 'Redux / Redux Toolkit', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3 Glassmorphism'],
    backend: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'Socket.io (WebSockets)'],
    databases: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma ORM'],
    tooling: ['Git / GitHub', 'Vite', 'Parcel', 'Jest', 'Postman', 'VS Code', 'Linux']
  },

  services: [
    'Full Stack Web Development (React, Next.js, Node.js, Python, FastAPI)',
    'AI Feature & LLM API Integrations',
    'High-throughput REST API & Database Schema Design (MongoDB, PostgreSQL)',
    'Government & Institutional UI/UX Audits and Accessibility Optimizations',
    'Institutional Portals & System Digitization',
    'Performance Bottleneck Tuning & Page Speed Optimization'
  ],

  // Dynamically formatted project summaries from projects.json
  projects: (projectsData || []).map(p => ({
    name: p.name,
    language: p.language,
    summary: p.summary,
    highlight: p.highlight,
    tags: p.tags ? p.tags.join(', ') : '',
    url: p.repoUrl
  }))
};

/**
 * Format the knowledgeBase object into a clean, labeled plain text block for the AI system prompt.
 * Avoids dumping raw JSON and formats readable text for higher quality answers.
 */
export function formatKnowledgeBaseForAI(kb = knowledgeBase) {
  const p = kb.personalInfo;
  
  let formatted = `
DEVELOPER PROFILE:
Name: ${p.name}
Role: ${p.role} at ${p.company}
Location: ${p.location}
Email: ${p.email}
GitHub: ${p.github}
LinkedIn: ${p.linkedin}
Bio: ${p.bio}

WORK EXPERIENCE:
${kb.workExperience.map(w => `- ${w.role} at ${w.company} (${w.period}, ${w.location}): ${w.details}`).join('\n')}

EDUCATION:
${kb.education.map(e => `- ${e.degree} - ${e.institution} (${e.period}): ${e.details}`).join('\n')}

SKILLS & TECHNICAL PROFICIENCIES:
- Frontend: ${kb.skills.frontend.join(', ')}
- Backend: ${kb.skills.backend.join(', ')}
- Databases: ${kb.skills.databases.join(', ')}
- Developer Tools & Testing: ${kb.skills.tooling.join(', ')}

SERVICES & OFFERINGS:
${kb.services.map(s => `- ${s}`).join('\n')}

KEY ACHIEVEMENTS & AWARDS:
${kb.achievements.map(a => `- ${a.title} (${a.organization}, ${a.period}): ${a.details}`).join('\n')}

FEATURED OPEN SOURCE & FULL STACK PROJECTS (${kb.projects.length} Total Repositories):
${kb.projects.slice(0, 10).map(pr => `- ${pr.name} (${pr.language}): ${pr.summary} Highlight: "${pr.highlight}". Tech: [${pr.tags}]. Link: ${pr.url}`).join('\n')}
`;

  return formatted.trim();
}
