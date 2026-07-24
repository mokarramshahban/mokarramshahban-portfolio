/**
 * Normalized Dataset for Portfolio Projects with Feature Vector Representations
 * Used by client-side content-based filtering & Cosine Similarity recommendation engine.
 */

export const projects = [
  {
    id: 'mokarramshahban-portfolio',
    title: 'AI-Enhanced Developer Portfolio',
    description: 'Personal developer portfolio featuring glassmorphic Bento grid architecture, client-side recommendation engine, and an automated Puter.js AI build pipeline.',
    category: 'Fullstack',
    tags: ['React.js', 'Vite', 'Puter.js AI', 'Node.js', 'Bento Grid', 'Fullstack', 'CSS Glassmorphism'],
    featureVector: {
      frontend: 0.95,
      backend: 0.70,
      ai: 0.90,
      ui: 0.95,
      fullstack: 0.85,
      database: 0.40
    },
    repoUrl: 'https://github.com/mokarramshahban/mokarramshahban-portfolio',
    demoUrl: 'https://github.com/mokarramshahban/mokarramshahban-portfolio'
  },
  {
    id: 'tripazi-travel-agency',
    title: 'TRIPAZI Travel Showcase',
    description: 'Modern travel agency web platform with interactive tour destination showcases, booking inquiry flows, and custom glassmorphic UI components.',
    category: 'Frontend',
    tags: ['React.js', 'UI/UX Design', 'CSS Glassmorphism', 'Responsive Web', 'Frontend'],
    featureVector: {
      frontend: 0.95,
      backend: 0.20,
      ai: 0.10,
      ui: 0.98,
      fullstack: 0.30,
      database: 0.15
    },
    repoUrl: 'https://github.com/mokarramshahban/TRIPAZI-Travel-Agency',
    demoUrl: 'https://github.com/mokarramshahban/TRIPAZI-Travel-Agency'
  },
  {
    id: 'devtinder-social',
    title: 'DevTinder Social Platform',
    description: 'Full-stack social networking platform for software engineers to discover peers by tech stack, send connection requests, and manage developer profiles.',
    category: 'Fullstack',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API', 'Fullstack', 'React.js'],
    featureVector: {
      frontend: 0.75,
      backend: 0.95,
      ai: 0.20,
      ui: 0.70,
      fullstack: 0.95,
      database: 0.90
    },
    repoUrl: 'https://github.com/mokarramshahban/DevTinder',
    demoUrl: 'https://github.com/mokarramshahban/DevTinder'
  },
  {
    id: 'flixfusion-streaming',
    title: 'FlixFusion Movie Streaming UI',
    description: 'Interactive streaming web application for discovering trending movies with real-time TMDB API search, custom hooks, and dynamic category filtering.',
    category: 'Frontend',
    tags: ['React.js', 'Redux', 'REST API', 'Tailwind CSS', 'Web App', 'Frontend'],
    featureVector: {
      frontend: 0.95,
      backend: 0.50,
      ai: 0.30,
      ui: 0.90,
      fullstack: 0.60,
      database: 0.30
    },
    repoUrl: 'https://github.com/mokarramshahban/FlixFusion',
    demoUrl: 'https://github.com/mokarramshahban/FlixFusion'
  },
  {
    id: 'food-delivery-app',
    title: 'Food Delivery React 19 App',
    description: 'Production-grade online food delivery app built with React 19, Redux Toolkit state management, dynamic cart operations, and Jest unit test suites.',
    category: 'Frontend',
    tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Parcel', 'Jest', 'Frontend'],
    featureVector: {
      frontend: 0.98,
      backend: 0.40,
      ai: 0.15,
      ui: 0.85,
      fullstack: 0.55,
      database: 0.25
    },
    repoUrl: 'https://github.com/mokarramshahban/Food-Delivery-App-UI-REACT.JS',
    demoUrl: 'https://github.com/mokarramshahban/Food-Delivery-App-UI-REACT.JS'
  },
  {
    id: 'techurja-2025-portal',
    title: 'Tech Urja 2025 Symposium Portal',
    description: 'Official web platform for Tech Urja 2025 national technical symposium, managing event schedules, catalog listings, and registrations for 1,200+ attendees.',
    category: 'Fullstack',
    tags: ['React.js', 'Event Platform', 'UI/UX Design', 'Responsive Web', 'Fullstack'],
    featureVector: {
      frontend: 0.90,
      backend: 0.65,
      ai: 0.10,
      ui: 0.88,
      fullstack: 0.80,
      database: 0.55
    },
    repoUrl: 'https://github.com/mokarramshahban/techurja2k25',
    demoUrl: 'https://github.com/mokarramshahban/techurja2k25'
  },
  {
    id: 'roomnest-property-hub',
    title: 'Roomnest Accommodation Portal',
    description: 'Online accommodation and rental search portal enabling users to browse verified properties, filter amenities, and submit booking inquiries.',
    category: 'Fullstack',
    tags: ['Fullstack', 'React.js', 'Node.js', 'MongoDB', 'REST API', 'UI/UX Design'],
    featureVector: {
      frontend: 0.85,
      backend: 0.85,
      ai: 0.15,
      ui: 0.82,
      fullstack: 0.90,
      database: 0.80
    },
    repoUrl: 'https://github.com/mokarramshahban/Roomnest',
    demoUrl: 'https://github.com/mokarramshahban/Roomnest'
  },
  {
    id: 'fastapi-ai-microservices',
    title: 'FastAPI AI Backend Engine',
    description: 'High-throughput Python FastAPI backend microservices providing asynchronous REST endpoints for automated document summarization and AI data processing.',
    category: 'AI & ML',
    tags: ['FastAPI', 'Python', 'AI', 'REST API', 'AsyncIO', 'Backend'],
    featureVector: {
      frontend: 0.30,
      backend: 0.95,
      ai: 0.95,
      ui: 0.40,
      fullstack: 0.70,
      database: 0.65
    },
    repoUrl: 'https://github.com/mokarramshahban',
    demoUrl: 'https://github.com/mokarramshahban'
  }
];

export default projects;
