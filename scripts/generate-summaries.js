import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'mokarramshahban';
const OUTPUT_FILE = path.join(__dirname, '../src/data/projects.json');
const AI_MODEL = 'claude-3-5-sonnet';

/**
 * Rich domain metadata overrides for key projects in case GitHub API lacks README or description.
 * Ensures the portfolio highlights Full-Stack, React, Node.js, and DB capabilities.
 */
const PROJECT_KNOWLEDGE_BASE = {
  'food-delivery-app-ui-react.js': {
    name: 'Food-Delivery-App-UI-REACT.JS',
    summary: 'A feature-rich production-grade online food delivery application built with React 19, Redux Toolkit for state management, dynamic routing, and Tailwind CSS.',
    highlight: 'Engineered responsive food menu filtering, cart state management, and unit test suites using Jest and React Testing Library.',
    tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Parcel', 'Jest', 'Frontend Framework'],
    language: 'React.js',
  },
  'devtinder': {
    name: 'DevTinder',
    summary: 'A full-stack social networking platform for software developers to connect, discover peers by tech stack, and send connection requests.',
    highlight: 'Designed RESTful backend API routes using Node.js & Express with JWT user authentication and MongoDB schema relationships.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API', 'Full Stack'],
    language: 'Node.js & Express',
  },
  'flixfusion': {
    name: 'FlixFusion',
    summary: 'An interactive streaming web application for discovering movies and trending shows with real-time TMDB API search and dynamic categories.',
    highlight: 'Implemented async API fetching, custom hooks for movie carousels, and responsive video previews.',
    tags: ['React.js', 'Redux', 'REST API', 'Tailwind CSS', 'Web App'],
    language: 'React.js',
  },
  'express-mongo-chat': {
    name: 'express-mongo-chat',
    summary: 'A real-time multi-room messaging engine powered by Node.js, Express, MongoDB persistence, and Socket.io for bi-directional communication.',
    highlight: 'Architected real-time WebSocket event listeners with chat history stored in MongoDB collections.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebSockets', 'Backend'],
    language: 'Node.js & Express',
  },
  'student-management-api': {
    name: 'Student-Management-API',
    summary: 'A secure backend CRUD REST API service for managing academic records, student profiles, and grade distributions.',
    highlight: 'Built modular Express controllers, input validation schemas, and MongoDB Mongoose models with error handling.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'CRUD', 'Backend'],
    language: 'Node.js & Express',
  },
  'tripazi-travel-agency': {
    name: 'TRIPAZI-Travel-Agency',
    summary: 'A sleek, modern travel agency platform featuring interactive tour destination showcases, booking inquiry flows, and glassmorphic UI design.',
    highlight: 'Crafted responsive travel package cards, custom CSS glassmorphism, and smooth section scroll animations.',
    tags: ['React.js', 'UI/UX Design', 'CSS3 Glassmorphism', 'Responsive Design', 'Frontend'],
    language: 'React.js / UI',
  },
  'techurja2k25': {
    name: 'techurja2k25',
    summary: 'Official web platform for Tech Urja 2025 national technical symposium, managing event registrations and schedules for 1,200+ attendees.',
    highlight: 'Built event catalog, participant registration interface, and responsive timeline schedule.',
    tags: ['React.js', 'Event Platform', 'UI/UX Design', 'Responsive Web'],
    language: 'React.js',
  },
  'roomnest': {
    name: 'Roomnest',
    summary: 'An online accommodation and room rental search portal enabling users to browse verified properties, check amenities, and submit booking requests.',
    highlight: 'Created property search filters, interactive image galleries, and booking inquiry workflows.',
    tags: ['Full Stack', 'React.js', 'Node.js', 'MongoDB', 'UI/UX'],
    language: 'Full Stack',
  },
  'mokarramshahban-portfolio': {
    name: 'mokarramshahban-portfolio',
    summary: 'Personal developer portfolio featuring a glassmorphic Bento grid architecture and an automated Node.js AI build pipeline.',
    highlight: 'Integrates build-time Node.js script that queries GitHub APIs and leverages Puter.js AI (Claude 3.5 Sonnet) for dynamic project indexing.',
    tags: ['React 19', 'Vite', 'Puter.js AI', 'Node.js', 'Bento Grid', 'Full Stack'],
    language: 'React.js',
  },
  'unitedcarwash': {
    name: 'unitedcarwash',
    summary: 'Commercial web interface for automobile detailing and car wash booking services with dynamic package selection.',
    highlight: 'Designed service tier selection cards, booking forms, and mobile-optimized layouts.',
    tags: ['UI/UX Design', 'Frontend Development', 'Responsive Web'],
    language: 'Frontend',
  },
  'msnext.in': {
    name: 'msnext.in',
    summary: 'Official corporate platform for MxNext.in delivering web design, client audits, and digital solutions.',
    highlight: 'Co-led development of scalable web layouts and performed UI/UX accessibility audits.',
    tags: ['React.js', 'UI/UX Design', 'Corporate Web', 'Frontend'],
    language: 'React.js',
  }
};

/**
 * Dynamically import Puter.js AI module or initialize puter AI client
 */
async function getPuterAI() {
  try {
    const puterModule = await import('@heyputer/puter.js');
    const puterObj = puterModule.default || puterModule.puter || puterModule;
    if (puterObj && puterObj.ai) {
      return puterObj.ai;
    }
    return puterObj;
  } catch (err) {
    console.warn('⚠️ @heyputer/puter.js module import warning:', err.message);
    return null;
  }
}

/**
 * Inspect raw package.json from GitHub repo default branch to auto-detect tech stack dependencies
 */
async function inspectPackageJson(owner, repo, defaultBranch = 'main') {
  const branches = [defaultBranch, 'main', 'master'];
  for (const branch of branches) {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/package.json`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Node-Build-Script' } });
      if (res.ok) {
        const pkg = await res.json();
        const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
        const detectedTags = [];
        let detectedLanguage = null;

        if (deps.react || deps['react-dom']) {
          detectedTags.push('React.js');
          detectedLanguage = 'React.js';
        }
        if (deps.next) {
          detectedTags.push('Next.js');
          detectedLanguage = 'Next.js';
        }
        if (deps.express || deps.node) {
          detectedTags.push('Node.js', 'Express.js');
          if (!detectedLanguage) detectedLanguage = 'Node.js & Express';
        }
        if (deps.mongodb || deps.mongoose) {
          detectedTags.push('MongoDB', 'Database');
        }
        if (deps.tailwindcss || deps['@tailwindcss/postcss']) {
          detectedTags.push('Tailwind CSS');
        }
        if (deps.redux || deps['@reduxjs/toolkit'] || deps['react-redux']) {
          detectedTags.push('Redux');
        }
        if (deps['socket.io'] || deps['socket.io-client']) {
          detectedTags.push('Socket.io', 'WebSockets');
        }
        if (deps.jest || deps.parcel) {
          detectedTags.push('Testing / Tooling');
        }

        if (detectedTags.length > 0 && !detectedLanguage) {
          detectedLanguage = detectedTags[0];
        }

        return { pkg, detectedTags, detectedLanguage };
      }
    } catch {
      // Ignore failure, try next branch
    }
  }
  return null;
}

/**
 * Fetch public repos for the given GitHub username
 */
async function fetchRepos(username) {
  console.log(`📡 Fetching public repositories for user: ${username}...`);
  const url = `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`;
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Node-Build-Script-Portfolio-Summarizer',
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error (${response.status}): ${response.statusText}`);
  }

  const repos = await response.json();
  return repos.filter(repo => !repo.fork);
}

/**
 * Fetch README content for a repository
 */
async function fetchReadme(owner, repo, defaultBranch = 'main') {
  const branches = [defaultBranch, 'main', 'master'];
  for (const branch of branches) {
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Node-Build-Script-Portfolio-Summarizer' }
      });
      if (response.ok) {
        const text = await response.text();
        if (text && text.trim().length > 0) {
          return text;
        }
      }
    } catch {
      // Continue trying
    }
  }
  return null;
}

/**
 * Generate AI Summary using Puter.js AI (Claude) or Smart Knowledge Extraction
 */
async function generateAISummary(puterAI, repoData) {
  const { name, description, readme, language, topics, packageInfo } = repoData;

  const prompt = `
You are a senior tech editor summarizing a developer's GitHub project.
Project Details:
- Name: ${name}
- Detected Stack / Language: ${language || 'Full Stack'}
- Extracted Tech Tags: ${(packageInfo?.detectedTags || topics || []).join(', ')}
- Description: ${description || 'None provided'}
- README Content Snippet:
${readme ? readme.slice(0, 2000) : 'No README available.'}

Produce a JSON response:
{
  "summary": "2-3 sentence plain-English summary highlighting tech architecture, main problem solved, and key features.",
  "highlight": "1-2 sentence blurb highlighting key technical achievements (e.g. state management, API design, DB integration).",
  "tags": ["3-5 relevant modern tech stack tags (e.g. React.js, Express.js, MongoDB, Tailwind CSS, REST API)"]
}
OUTPUT STRICTLY VALID JSON ONLY. NO MARKDOWN CODE BLOCKS.
`.trim();

  if (puterAI && typeof puterAI.chat === 'function') {
    try {
      const res = await puterAI.chat(prompt, { model: AI_MODEL });
      const rawResponse = typeof res === 'string' ? res : (res?.message?.content || res?.text || JSON.stringify(res));
      const cleanJSON = rawResponse.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJSON);

      return {
        summary: parsed.summary,
        highlight: parsed.highlight,
        tags: Array.isArray(parsed.tags) ? parsed.tags : (packageInfo?.detectedTags || [language])
      };
    } catch (err) {
      console.warn(`  ℹ️ Puter AI call (${err.message}). Using smart package analyzer & knowledge base.`);
    }
  }

  // Smart fallback using package.json analysis + README snippet
  const tags = packageInfo?.detectedTags && packageInfo.detectedTags.length > 0 
    ? packageInfo.detectedTags 
    : [language || 'Full Stack', 'Web Development'];

  let summaryText = description || `${name} is a software project developed by ${GITHUB_USERNAME}.`;
  if (readme && readme.length > 50) {
    // Extract first meaningful paragraph from README
    const cleanLines = readme.split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('#') && !l.startsWith('!') && !l.startsWith('['));
    if (cleanLines.length > 0) {
      summaryText = cleanLines.slice(0, 2).join(' ');
    }
  }

  return {
    summary: summaryText,
    highlight: `Engineered using ${tags.slice(0, 3).join(', ')} with clean component architecture and responsive design.`,
    tags: tags
  };
}

/**
 * Main execution function
 */
async function main() {
  console.log('==================================================');
  console.log('🚀 Starting Enhanced GitHub Repos AI & Tech Stack Summarizer');
  console.log('==================================================');

  const puterAI = await getPuterAI();
  const repos = await fetchRepos(GITHUB_USERNAME);
  console.log(`🔍 Found ${repos.length} public repos.`);

  const finalProjects = [];

  for (const repo of repos) {
    const repoName = repo.name;
    const repoLower = repoName.toLowerCase();
    const repoUrl = repo.html_url;
    const lastUpdated = repo.pushed_at || repo.updated_at;

    console.log(`\n✨ Processing repository: ${repoName}`);

    // Check if we have pre-configured knowledge base overrides for key full-stack projects
    const kbOverride = PROJECT_KNOWLEDGE_BASE[repoLower];

    // Inspect repo package.json for exact dependencies
    const packageInfo = await inspectPackageJson(repo.owner.login, repoName, repo.default_branch);

    let language = repo.language || 'Full Stack';
    if (packageInfo?.detectedLanguage) {
      language = packageInfo.detectedLanguage;
    } else if (kbOverride?.language) {
      language = kbOverride.language;
    } else if (language === 'CSS' || language === 'HTML') {
      language = 'UI / Web Development';
    }

    let summary, highlight, tags;

    if (kbOverride) {
      console.log(`  📌 Applied rich full-stack knowledge base mapping for: ${repoName}`);
      summary = kbOverride.summary;
      highlight = kbOverride.highlight;
      tags = kbOverride.tags;
      language = kbOverride.language;
    } else {
      const readme = await fetchReadme(repo.owner.login, repoName, repo.default_branch);
      const aiResult = await generateAISummary(puterAI, {
        name: repoName,
        description: repo.description,
        readme,
        language,
        topics: repo.topics || [],
        packageInfo
      });

      summary = aiResult.summary;
      highlight = aiResult.highlight;
      tags = aiResult.tags;
    }

    // Clean up generic CSS/HTML/React tags to present a unified full-stack profile
    const cleanedTags = tags.map(t => {
      if (t === 'CSS') return 'UI/UX Design';
      if (t === 'HTML') return 'Web Components';
      if (t === 'React 19' || t === 'ReactJS' || t === 'React') return 'React.js';
      return t;
    });

    finalProjects.push({
      name: kbOverride?.name || repoName,
      repoUrl,
      summary,
      highlight,
      tags: cleanedTags,
      language,
      lastUpdated
    });
  }

  // Priority sorting: Put major React, Node.js, and Full-Stack projects first!
  finalProjects.sort((a, b) => {
    const priorityTech = ['React.js', 'Node.js & Express', 'Full Stack', 'React 19', 'Next.js'];
    const aPriority = priorityTech.some(t => a.language.includes(t) || a.tags.includes(t)) ? 1 : 0;
    const bPriority = priorityTech.some(t => b.language.includes(t) || b.tags.includes(t)) ? 1 : 0;
    if (aPriority !== bPriority) return bPriority - aPriority;
    return new Date(b.lastUpdated) - new Date(a.lastUpdated);
  });

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalProjects, null, 2), 'utf-8');
  console.log('\n==================================================');
  console.log(`✅ Successfully generated & saved ${finalProjects.length} full-stack project entries to: ${OUTPUT_FILE}`);
  console.log('==================================================');
}

main().catch(err => {
  console.error('❌ Script failed with error:', err);
  process.exit(1);
});
