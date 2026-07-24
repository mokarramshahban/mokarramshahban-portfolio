import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects.js';
import { 
  getRecommendedProjects, 
  getPersonalizedRecommendations, 
  buildUserInterestVector 
} from '../utils/recommendationEngine.js';

/**
 * Smart Project Recommendation Matrix Component
 * Content-based recommendation engine running 100% locally in browser via Cosine Similarity.
 * 
 * @param {string} currentProjectId - ID or Name of the project currently selected/viewed
 * @param {function} onSelectProject - Callback when visitor clicks a recommended project
 * @param {number} limit - Number of recommended items to render (default: 3)
 */
export default function ProjectRecommendations({ 
  currentProjectId = 'mokarramshahban-portfolio', 
  onSelectProject = null,
  limit = 3 
}) {
  const [recommendationMode, setRecommendationMode] = useState('similar'); // 'similar' | 'personalized'
  const [recommendations, setRecommendations] = useState([]);
  const [sessionHistory, setSessionHistory] = useState(() => {
    try {
      const stored = sessionStorage.getItem('portfolio_session_views');
      return stored ? JSON.parse(stored) : [currentProjectId];
    } catch {
      return [currentProjectId];
    }
  });

  // Track session viewing history & recalculate recommendations
  useEffect(() => {
    // Save current viewing ID into session history
    if (currentProjectId && !sessionHistory.includes(currentProjectId)) {
      const updated = [currentProjectId, ...sessionHistory].slice(0, 10);
      setSessionHistory(updated);
      try {
        sessionStorage.setItem('portfolio_session_views', JSON.stringify(updated));
      } catch {
        // Fallback for private browsing
      }
    }

    if (recommendationMode === 'similar') {
      // 1. Content-based similarity to current project
      const results = getRecommendedProjects(currentProjectId, projectsData, limit);
      setRecommendations(results);
    } else {
      // 2. Session personalized affinity recommendations
      const userVector = buildUserInterestVector(sessionHistory, [], projectsData);
      const results = getPersonalizedRecommendations(userVector, projectsData, limit + 1)
        .filter(p => p.id !== currentProjectId);
      setRecommendations(results.slice(0, limit));
    }
  }, [currentProjectId, recommendationMode, limit]);

  const handleProjectClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div className="banner-personal-portfolio signle-section mt-2 p-4 p-md-4" style={{ backgroundColor: '#10151f', borderRadius: '18px', border: '1px solid rgba(0, 163, 255, 0.25)', boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)' }}>
      
      {/* Component Section Header */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
            <i className="fa-solid fa-brain me-2" style={{ color: '#00a3ff' }}></i> INTELLIGENT RECOMMENDATIONS
          </h4>
          <h2 style={{ fontSize: '22px', color: '#ffffff', fontWeight: '800', margin: '4px 0 0 0' }}>
            Smart Project <span style={{ color: '#00a3ff' }}>Recommendations</span>
          </h2>
          <p style={{ color: '#9098a8', fontSize: '13px', margin: '4px 0 0 0' }}>
            Dynamically curated repositories based on tech stack similarity and your active viewing interests.
          </p>
        </div>

        {/* Mode Toggle Selector */}
        <div className="d-flex gap-1 p-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => setRecommendationMode('similar')}
            className="btn btn-sm px-3 py-1.5"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: recommendationMode === 'similar' ? 'rgba(0, 163, 255, 0.2)' : 'transparent',
              color: recommendationMode === 'similar' ? '#00a3ff' : '#9098a8',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            🎯 Similar Items
          </button>
          <button
            onClick={() => setRecommendationMode('personalized')}
            className="btn btn-sm px-3 py-1.5"
            style={{
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: recommendationMode === 'personalized' ? 'rgba(0, 230, 118, 0.2)' : 'transparent',
              color: recommendationMode === 'personalized' ? '#00e676' : '#9098a8',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            🧠 Session Fit
          </button>
        </div>
      </div>

      {/* Recommended Projects Bento Grid */}
      <div className="row g-3">
        {recommendations.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={project.id || index}>
            <div 
              className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{
                backgroundColor: '#10151f',
                borderRadius: '16px',
                border: '1px solid rgba(0, 163, 255, 0.25)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00a3ff';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 163, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
              }}
              onClick={() => handleProjectClick(project)}
            >
              <div>
                {/* Header Badge & Category */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', padding: '3px 10px', borderRadius: '6px', fontWeight: '800', border: '1px solid rgba(0, 163, 255, 0.3)' }}>
                    {project.category || 'PROJECT'}
                  </span>

                  {/* Cosine Relevancy Score Badge */}
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      backgroundColor: 'rgba(0, 230, 118, 0.15)', 
                      color: '#00e676', 
                      padding: '3px 10px', 
                      borderRadius: '20px', 
                      fontWeight: '800', 
                      border: '1px solid rgba(0, 230, 118, 0.35)',
                      boxShadow: '0 0 10px rgba(0, 230, 118, 0.2)'
                    }}
                  >
                    ⚡ {project.matchPercentage || '92%'} Match
                  </span>
                </div>

                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>
                  {project.title || project.name}
                </h5>

                <p style={{ fontSize: '13px', color: '#9098a8', lineHeight: '1.6', margin: '0 0 14px 0' }}>
                  {project.description || project.summary}
                </p>
              </div>

              <div>
                {/* Normalized Feature Vector Progress Bar */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '10px', color: '#70c8ff', fontWeight: '600' }}>
                    <span>Vector Affinity</span>
                    <span>{project.matchPercentage || '92%'}</span>
                  </div>
                  <div className="progress" style={{ height: '5px', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px' }}>
                    <div 
                      className="progress-bar" 
                      style={{ 
                        width: project.matchPercentage || '92%', 
                        background: 'linear-gradient(90deg, #00a3ff 0%, #00e676 100%)', 
                        borderRadius: '3px' 
                      }} 
                    ></div>
                  </div>
                </div>

                {/* Tech Skill Badges with fixed minHeight for 100% alignment */}
                <div className="d-flex flex-wrap gap-1 mb-3" style={{ minHeight: '28px' }}>
                  {(project.tags || []).slice(0, 3).map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '10px',
                        color: '#70c8ff',
                        backgroundColor: 'rgba(0, 163, 255, 0.08)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(0, 163, 255, 0.2)',
                        height: '22px',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Sleek Glass Action Button */}
                <a 
                  href={project.repoUrl || 'https://github.com/mokarramshahban'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100 d-inline-flex align-items-center justify-content-center gap-2 py-2"
                  style={{
                    backgroundColor: 'rgba(0, 163, 255, 0.12)',
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    borderRadius: '10px',
                    color: '#00a3ff',
                    fontWeight: '700',
                    fontSize: '13px',
                    transition: 'all 0.2s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.25)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.12)';
                    e.currentTarget.style.color = '#00a3ff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <span>Explore Repository</span>
                  <i className="fa-regular fa-arrow-right" style={{ fontSize: '11px' }}></i>
                </a>
              </div>

              <div className="tmp-light light-left"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
