import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import ProjectRecommendations from './ProjectRecommendations.jsx';
import { usePersonalization } from '../context/PersonalizationContext';
import { sortProjectsByPersona } from '../utils/personaEngine';

export default function ProjectsSection({ activeTab }) {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { trackInteraction, themeConfig } = usePersonalization();

  // Curate high-impact tech tags for dropdown filtering
  const featuredTags = ['All', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Full Stack', 'Tailwind CSS', 'REST API', 'Socket.io', 'UI/UX Design'];
  const extraTags = [...new Set(projectsData.flatMap(p => (p.tags || []).map(t => (t === 'React 19' || t === 'ReactJS' || t === 'React') ? 'React.js' : t)))].filter(t => !featuredTags.includes(t));
  const allTags = [...featuredTags, ...extraTags];

  // Filter projects by tag and search query with normalized matching
  const filteredProjects = projectsData.filter(project => {
    const projTags = (project.tags || []).map(t => (t === 'React 19' || t === 'ReactJS' || t === 'React') ? 'React.js' : t);
    const projLang = (project.language === 'React 19' || project.language === 'React') ? 'React.js' : project.language;
    const matchesTag = selectedTag === 'All' || projTags.includes(selectedTag) || projLang === selectedTag;

    const rawSearch = searchQuery.trim().toLowerCase();
    const cleanSearch = rawSearch.replace(/[^a-z0-9]/g, '');

    const searchableText = [
      project.name,
      project.summary,
      project.highlight,
      project.language,
      ...(project.tags || []),
      ...(projTags || [])
    ].filter(Boolean).join(' ').toLowerCase();

    const cleanSearchable = searchableText.replace(/[^a-z0-9]/g, '');

    const matchesSearch = rawSearch === '' || 
      searchableText.includes(rawSearch) || 
      cleanSearchable.includes(cleanSearch);

    return matchesTag && matchesSearch;
  });

  // Re-sort filtered results according to the detected persona's preference weights
  const personaSortedProjects = themeConfig
    ? sortProjectsByPersona(filteredProjects, themeConfig.sortWeights)
    : filteredProjects;

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'projects' ? 'show active' : ''}`} id="projects" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Section */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 pb--40 pt--30 active">
          <div className="section-header text-center">
            <h4 className="subtitle theme-gradient mb-2">
              <i className="fa-solid fa-code-branch me-2"></i> OPEN SOURCE REPOSITORIES
            </h4>
            <h1 style={{ fontSize: '28px' }}>
              🤖 AI-Summarized <strong><span className="theme-gradient">GitHub Projects</span></strong>
            </h1>
            <p className="description" style={{ color: '#a0a5b5', maxWidth: '650px', margin: '0 auto 20px auto' }}>
              Explore my public repositories with AI-generated summaries, key technical highlights, and auto-extracted topics powered by Puter.js AI (Claude 3.5 Sonnet).
            </p>

            {/* Single-Line Controls: Search Bar + Technology Dropdown Select */}
            <div className="d-flex flex-column flex-sm-row gap-3 align-items-center justify-content-between mt-4">
              
              {/* Search Bar */}
              <div className="flex-grow-1 w-100 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search projects or tech stack (e.g. React, Node, MongoDB)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    padding: '10px 16px 10px 42px',
                    fontSize: '14px',
                    height: '46px',
                    outline: 'none',
                    boxShadow: 'none'
                  }}
                />
                <i className="fa-regular fa-magnifying-glass position-absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#808595' }}></i>
              </div>

              {/* Single-Line Tech Stack Dropdown */}
              <div className="position-relative w-100 w-sm-auto" style={{ minWidth: '210px' }}>
                <select
                  className="form-select"
                  value={selectedTag}
                  onChange={(e) => {
                    const tag = e.target.value;
                    setSelectedTag(tag);
                    if (tag !== 'All') trackInteraction(tag);
                  }}
                  style={{
                    backgroundColor: '#141821',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    color: '#00a3ff',
                    fontWeight: '600',
                    padding: '10px 36px 10px 16px',
                    fontSize: '14px',
                    height: '46px',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: 'none',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                >
                  {allTags.map((tag) => (
                    <option key={tag} value={tag} style={{ backgroundColor: '#141821', color: '#ffffff', padding: '10px' }}>
                      {tag === 'All' ? '⚡ Tech Stack: All Projects' : `⚡ Tech: ${tag}`}
                    </option>
                  ))}
                </select>
                <i 
                  className="fa-regular fa-chevron-down position-absolute" 
                  style={{ 
                    right: '16px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    color: '#00a3ff', 
                    pointerEvents: 'none',
                    fontSize: '12px'
                  }}
                ></i>
              </div>

            </div>
          </div>
          <div className="tmp-light light-left"></div>
        </div>

        {/* Projects Area using exact template service hover glow card structure */}
        <div className="tmp-service-area mb-4 banner-personal-portfolio signle-section">
          <div className="row g-4 service-wrapper animation-action-3">
            {personaSortedProjects.length === 0 ? (
              <div className="col-12 text-center py-5">
                <p style={{ color: '#a0a5b5', fontSize: '16px' }}>No projects match your search query or selected filter.</p>
                <button 
                  onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
                  style={{
                    backgroundColor: 'rgba(0, 163, 255, 0.15)',
                    border: '1px solid rgba(0, 163, 255, 0.4)',
                    color: '#00a3ff',
                    borderRadius: '8px',
                    padding: '6px 16px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              personaSortedProjects.map((project, index) => (
                <div key={project.name || index} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="service service__style--1 bg-color-card service-narrow radius tmp-border-none tmponhover single-animation h-100 d-flex flex-column justify-content-between p-4 text-start">
                    <div>
                      {/* Header: Name & Language Badge */}
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h4 className="title w-600 mb-1" style={{ fontSize: '18px', color: '#ffffff' }}>
                            {project.name}
                          </h4>
                          <div className="d-flex align-items-center gap-2">
                            <span 
                              style={{ 
                                fontSize: '11px', 
                                fontWeight: '600', 
                                padding: '2px 8px', 
                                borderRadius: '6px', 
                                backgroundColor: 'rgba(0, 163, 255, 0.15)', 
                                color: '#00a3ff' 
                              }}
                            >
                              {project.language || 'Code'}
                            </span>
                            {project.lastUpdated && (
                              <span style={{ fontSize: '11px', color: '#707585' }}>
                                Updated {new Date(project.lastUpdated).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>

                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-github-link d-flex align-items-center justify-content-center"
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                          title="View on GitHub"
                        >
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>

                      {/* AI Summary */}
                      <p className="description mb-3" style={{ fontSize: '14px', lineHeight: '1.6', color: '#a0a8b6' }}>
                        {project.summary}
                      </p>

                      {/* Key Highlight */}
                      {project.highlight && (
                        <div 
                          className="p-3 mb-3" 
                          style={{ 
                            backgroundColor: 'rgba(0, 163, 255, 0.05)', 
                            borderLeft: '3px solid #00a3ff',
                            borderRadius: '0 8px 8px 0'
                          }}
                        >
                          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#00a3ff', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
                            💡 Key Takeaway / Highlight
                          </span>
                          <p style={{ color: '#d0d5e5', fontSize: '13px', margin: 0, fontStyle: 'italic' }}>
                            "{project.highlight}"
                          </p>
                        </div>
                      )}

                      {/* Tech Tags */}
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {project.tags && project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            onClick={() => { setSelectedTag(tag); trackInteraction(tag); }}
                            style={{ 
                              fontSize: '11px', 
                              color: '#808595', 
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }}
                            title={`Filter by ${tag}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Learn More / View Project Action Button */}
                    <div className="discover-btn mt-2">
                      <a 
                        className="tmp-btn hover-icon-reverse btn-border btn-sm tmp-modern-button download-icon w-100" 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">View Repository</span>
                          <div className="btn-hack"></div>
                          <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                          <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                          <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        </div>
                      </a>
                    </div>

                    {/* Template Hover Spotlight Light */}
                    <div className="tmp-light light-left"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Smart Project Recommendation Matrix Section */}
        <ProjectRecommendations 
          currentProjectId={selectedTag !== 'All' ? selectedTag : 'mokarramshahban-portfolio'}
          onSelectProject={(proj) => {
            if (proj.repoUrl) {
              window.open(proj.repoUrl, '_blank', 'noopener,noreferrer');
            }
          }}
        />

      </div>
    </div>
  );
}
