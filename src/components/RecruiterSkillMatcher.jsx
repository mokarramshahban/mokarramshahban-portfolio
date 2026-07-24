import React, { useState } from 'react';
import { skillsMatrix, sampleJobDescriptions } from '../data/skillsData.js';
import { analyzeJobDescription } from '../utils/skillMatcher.js';
import projectsData from '../data/projects.js';

/**
 * Recruiter Skill Matcher Component
 * Client-side NLP & keyword extraction widget running 100% locally in browser.
 */
export default function RecruiterSkillMatcher() {
  const [jdText, setJdText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  const handleAnalyze = (textToAnalyze = jdText) => {
    if (!textToAnalyze || textToAnalyze.trim().length === 0) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const result = analyzeJobDescription(textToAnalyze, skillsMatrix);
      setMatchResult(result);
      setIsAnalyzing(false);
    }, 150);
  };

  const handleSampleClick = (sampleText) => {
    setJdText(sampleText);
    handleAnalyze(sampleText);
  };

  const handleClear = () => {
    setJdText('');
    setMatchResult(null);
  };

  return (
    <div 
      id="recruiter-skill-matcher-widget"
      className="banner-personal-portfolio signle-section mt-4 p-4 p-md-5"
      style={{
        backgroundColor: '#10151f',
        borderRadius: '20px',
        border: '1px solid rgba(0, 163, 255, 0.25)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Widget Header & Title */}
      <div className="mb-3">
        <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
          <i className="fa-solid fa-bolt me-2" style={{ color: '#00a3ff' }}></i> RECRUITER & HIRING WIDGET
        </h4>
        <h2 style={{ fontSize: '22px', color: '#ffffff', fontWeight: '800', margin: '4px 0 0 0' }}>
          Job Description <span style={{ color: '#00a3ff' }}>Skill Matcher</span>
        </h2>
        <p style={{ color: '#9098a8', fontSize: '13.5px', margin: '4px 0 0 0' }}>
          Paste a Job Description below to evaluate tech stack alignment in real-time.
        </p>

        {/* Preset Sample JDs Dropdown Select */}
        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mt-3 pt-1">
          <span style={{ fontSize: '12.5px', color: '#808898', fontWeight: '600', whiteSpace: 'nowrap' }}>
            ⚡ Load Preset Job Description:
          </span>
          <div className="position-relative flex-grow-1" style={{ maxWidth: '380px' }}>
            <select
              className="form-select"
              value=""
              onChange={(e) => {
                const val = e.target.value;
                if (val) {
                  handleSampleClick(val);
                }
              }}
              style={{
                backgroundColor: '#0d121c',
                border: '1px solid rgba(0, 163, 255, 0.3)',
                borderRadius: '10px',
                color: '#00a3ff',
                fontWeight: '700',
                padding: '8px 36px 8px 14px',
                fontSize: '13px',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none'
              }}
            >
              <option value="" disabled style={{ backgroundColor: '#10151f', color: '#808898' }}>
                -- Choose Preset Sample Role --
              </option>
              {sampleJobDescriptions.map((sample, idx) => (
                <option key={idx} value={sample.text} style={{ backgroundColor: '#10151f', color: '#ffffff' }}>
                  📄 {sample.title} ({sample.company})
                </option>
              ))}
            </select>
            <i 
              className="fa-regular fa-chevron-down position-absolute" 
              style={{ 
                right: '14px', 
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

      {/* Input Area */}
      <div className="position-relative mb-3 mt-3">
        <textarea
          className="form-control"
          rows={4}
          placeholder="Paste job description text here (e.g. Seeking Full-Stack Developer with React, Node.js, REST APIs, MongoDB)..."
          value={jdText}
          onChange={(e) => {
            setJdText(e.target.value);
            if (e.target.value.trim().length > 10) {
              handleAnalyze(e.target.value);
            } else if (e.target.value.trim().length === 0) {
              setMatchResult(null);
            }
          }}
          style={{
            backgroundColor: '#0d121c',
            border: '1px solid rgba(0, 163, 255, 0.2)',
            borderRadius: '14px',
            color: '#ffffff',
            padding: '14px 18px',
            fontSize: '14px',
            lineHeight: '1.6',
            outline: 'none',
            boxShadow: 'none',
            resize: 'vertical'
          }}
        />

        {jdText && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '14px',
              top: '14px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              color: '#a0a8b6',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}
            title="Clear text"
          >
            ✕
          </button>
        )}
      </div>

      {/* Action Controls Bar */}
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 mb-4">
        <button
          onClick={() => handleAnalyze()}
          disabled={!jdText || isAnalyzing}
          className="btn px-4 py-2.5 d-inline-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: !jdText ? 'rgba(255, 255, 255, 0.05)' : '#00a3ff',
            color: !jdText ? '#606575' : '#ffffff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '700',
            fontSize: '13.5px',
            cursor: !jdText ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: !jdText ? 'none' : '0 0 16px rgba(0, 163, 255, 0.4)'
          }}
        >
          {isAnalyzing ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i> Parsing Tokens...
            </>
          ) : (
            <>
              <span>Analyze Compatibility Score</span>
              <i className="fa-regular fa-calculator"></i>
            </>
          )}
        </button>

        <span style={{ fontSize: '12px', color: '#606878', whiteSpace: 'nowrap' }}>
          ⚡ Tokenization & matching computed 100% in-browser
        </span>
      </div>

      {/* Match Result Display Panel */}
      {matchResult && (
        <div 
          className="p-4 rounded-4 position-relative overflow-hidden"
          style={{
            backgroundColor: '#0d121c',
            border: `1px solid ${matchResult.matchScore >= 80 ? 'rgba(0, 230, 118, 0.35)' : 'rgba(0, 163, 255, 0.35)'}`,
            boxShadow: `0 0 28px ${matchResult.matchScore >= 80 ? 'rgba(0, 230, 118, 0.12)' : 'rgba(0, 163, 255, 0.12)'}`
          }}
        >
          <div className="row g-4 align-items-center">
            
            {/* Score Radial Gauge Column */}
            <div className="col-lg-4 col-12 text-center text-lg-start">
              <div className="d-flex flex-column align-items-center align-items-lg-start pe-lg-3">
                <div 
                  className="d-flex align-items-center justify-content-center mb-2"
                  style={{
                    width: '94px',
                    height: '94px',
                    borderRadius: '50%',
                    backgroundColor: matchResult.matchScore >= 80 ? 'rgba(0, 230, 118, 0.12)' : 'rgba(0, 163, 255, 0.12)',
                    border: `3px solid ${matchResult.matchScore >= 80 ? '#00e676' : '#00a3ff'}`,
                    boxShadow: `0 0 24px ${matchResult.matchScore >= 80 ? 'rgba(0, 230, 118, 0.35)' : 'rgba(0, 163, 255, 0.35)'}`
                  }}
                >
                  <span style={{ fontSize: '26px', fontWeight: '900', color: matchResult.matchScore >= 80 ? '#00e676' : '#00a3ff' }}>
                    {matchResult.matchScore}%
                  </span>
                </div>
                <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '800', margin: '4px 0 2px 0' }}>
                  Stack Alignment Score
                </h5>
                <p style={{ color: '#9098a8', fontSize: '12.5px', margin: 0 }}>
                  {matchResult.matchedSkills.length} Core Skills Matched
                </p>
              </div>
            </div>

            {/* Summary & Skills Breakdown Column */}
            <div className="col-lg-8 col-12">
              <p style={{ color: '#d0d8e8', fontSize: '14px', lineHeight: '1.6', fontWeight: '600', marginBottom: '14px' }}>
                {matchResult.summaryText}
              </p>

              {/* Matched Skills Glass Pills */}
              <div className="mb-3">
                <span style={{ fontSize: '11px', color: '#00e676', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                  ✅ Matched Candidate Skills ({matchResult.matchedSkills.length})
                </span>
                <div className="d-flex flex-wrap gap-2">
                  {matchResult.matchedSkills.map((skill) => (
                    <span
                      key={skill.id}
                      style={{
                        fontSize: '11.5px',
                        color: '#00e676',
                        backgroundColor: 'rgba(0, 230, 118, 0.1)',
                        border: '1px solid rgba(0, 230, 118, 0.25)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>🟢</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Missing / Additional Tech Skills */}
              {matchResult.missingSkills.length > 0 && (
                <div>
                  <span style={{ fontSize: '11px', color: '#9098a8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                    ℹ️ Additional Stack Items Mentioned in JD
                  </span>
                  <div className="d-flex flex-wrap gap-1.5">
                    {matchResult.missingSkills.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '11px',
                          color: '#808898',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '3px 10px',
                          borderRadius: '14px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Enclosed Glass Sub-Card for Relevant Repositories */}
          {matchResult.topProjectIds.length > 0 && (
            <div 
              className="mt-4 p-3 rounded-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <span style={{ fontSize: '11px', color: '#00a3ff', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                🚀 Relevant Repositories Demonstrating This Stack:
              </span>
              <div className="d-flex flex-wrap gap-2">
                {matchResult.topProjectIds.map((projId) => {
                  const proj = projectsData.find(p => p.id === projId || p.name === projId);
                  if (!proj) return null;
                  return (
                    <a
                      key={projId}
                      href={proj.repoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center gap-2 px-3 py-1.5"
                      style={{
                        backgroundColor: 'rgba(0, 163, 255, 0.1)',
                        border: '1px solid rgba(0, 163, 255, 0.25)',
                        borderRadius: '8px',
                        color: '#70c8ff',
                        fontSize: '12px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.25)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.1)';
                        e.currentTarget.style.color = '#70c8ff';
                      }}
                    >
                      <i className="fa-brands fa-github"></i>
                      <span>{proj.title || proj.name}</span>
                      <i className="fa-regular fa-arrow-right" style={{ fontSize: '10px' }}></i>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
