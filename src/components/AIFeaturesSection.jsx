import React from 'react';

/**
 * AI Features Showcase Banner & Hub Component
 * Highlights portfolio AI capabilities and provides instant navigation to AI features.
 */
export default function AIFeaturesSection({ setActiveTab = null }) {
  const handleOpenChat = () => {
    const chatTrigger = document.getElementById('chat-widget-toggle-btn') || document.querySelector('.chat-widget-trigger');
    if (chatTrigger) {
      chatTrigger.click();
    } else {
      alert('Click the AI Chatbot floating icon in the bottom-right corner!');
    }
  };

  const handleNavProjects = () => {
    if (setActiveTab) {
      setActiveTab('projects');
    }
  };

  const handleNavMatcher = () => {
    if (setActiveTab) {
      setActiveTab('profile');
      setTimeout(() => {
        const el = document.getElementById('recruiter-skill-matcher-widget');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  };

  return (
    <div className="banner-personal-portfolio signle-section mt-5 mb-5 p-4 p-md-5 position-relative overflow-hidden" style={{ backgroundColor: '#090d16', borderRadius: '24px', border: '1px solid rgba(0, 163, 255, 0.3)', boxShadow: '0 12px 40px rgba(0, 163, 255, 0.15)' }}>
      
      {/* Background Animated Gradient Aura */}
      <div 
        className="position-absolute"
        style={{
          top: '-80px',
          right: '-80px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 163, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></div>

      <div className="position-relative" style={{ zIndex: 1 }}>
        
        {/* Section Title */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
              <i className="fa-solid fa-sparkles me-2" style={{ color: '#00a3ff' }}></i> PORTFOLIO AI HUB
            </h4>
            <h2 style={{ fontSize: '24px', color: '#ffffff', fontWeight: '800', margin: '4px 0 0 0' }}>
              Experience My Interactive <span style={{ color: '#00a3ff' }}>AI Systems</span>
            </h2>
            <p style={{ color: '#9098a8', fontSize: '14px', margin: '4px 0 0 0', maxWidth: '650px' }}>
              Explore custom AI features built directly into this portfolio — from Claude 3.5 Sonnet chat assistants to client-side vector recommendation engines.
            </p>
          </div>

          <span 
            style={{
              fontSize: '11px',
              color: '#00e676',
              backgroundColor: 'rgba(0, 230, 118, 0.12)',
              padding: '4px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(0, 230, 118, 0.3)',
              fontWeight: '700'
            }}
          >
            🤖 4 Active AI Features Live
          </span>
        </div>

        {/* 3 AI Feature Bento Cards */}
        <div className="row g-4 mt-1">
          
          {/* Card 1: Puter.js AI Assistant */}
          <div className="col-lg-4 col-md-6 col-12">
            <div 
              className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{
                backgroundColor: '#10151f',
                borderRadius: '18px',
                border: '1px solid rgba(0, 163, 255, 0.25)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00a3ff';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 163, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 163, 255, 0.15)',
                      color: '#00a3ff',
                      fontSize: '20px',
                      border: '1px solid rgba(0, 163, 255, 0.3)'
                    }}
                  >
                    🤖
                  </div>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', padding: '3px 10px', borderRadius: '12px', fontWeight: '800' }}>
                    CLAUDE 3.5 SONNET
                  </span>
                </div>

                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: '800', marginBottom: '8px' }}>
                  Portfolio AI Assistant
                </h4>

                <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                  Interactive floating AI chatbot powered by Puter.js AI. Answers real-time questions about my work experience, tech stack, and projects.
                </p>
              </div>

              <button
                onClick={handleOpenChat}
                className="btn w-100 mt-4 d-flex align-items-center justify-content-center gap-2 py-2"
                style={{
                  backgroundColor: 'rgba(0, 163, 255, 0.12)',
                  border: '1px solid rgba(0, 163, 255, 0.3)',
                  borderRadius: '10px',
                  color: '#00a3ff',
                  fontWeight: '700',
                  fontSize: '13px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Launch AI Assistant</span>
                <i className="fa-regular fa-comment-dots"></i>
              </button>
            </div>
          </div>

          {/* Card 2: Recruiter Skill Matcher */}
          <div className="col-lg-4 col-md-6 col-12">
            <div 
              className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{
                backgroundColor: '#10151f',
                borderRadius: '18px',
                border: '1px solid rgba(0, 230, 118, 0.25)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#00e676';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 230, 118, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(0, 230, 118, 0.25)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(0, 230, 118, 0.15)',
                      color: '#00e676',
                      fontSize: '20px',
                      border: '1px solid rgba(0, 230, 118, 0.3)'
                    }}
                  >
                    ⚡
                  </div>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(0, 230, 118, 0.15)', color: '#00e676', padding: '3px 10px', borderRadius: '12px', fontWeight: '800' }}>
                    CLIENT-SIDE NLP
                  </span>
                </div>

                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: '800', marginBottom: '8px' }}>
                  Recruiter Skill Matcher
                </h4>

                <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                  Paste any Job Description to generate a real-time compatibility score, matched skill breakdown, and relevant repository links with 0% latency.
                </p>
              </div>

              <button
                onClick={handleNavMatcher}
                className="btn w-100 mt-4 d-flex align-items-center justify-content-center gap-2 py-2"
                style={{
                  backgroundColor: 'rgba(0, 230, 118, 0.12)',
                  border: '1px solid rgba(0, 230, 118, 0.3)',
                  borderRadius: '10px',
                  color: '#00e676',
                  fontWeight: '700',
                  fontSize: '13px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Test Job Matcher</span>
                <i className="fa-regular fa-calculator"></i>
              </button>
            </div>
          </div>

          {/* Card 3: Cosine Vector Recommendation Matrix */}
          <div className="col-lg-4 col-md-6 col-12">
            <div 
              className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{
                backgroundColor: '#10151f',
                borderRadius: '18px',
                border: '1px solid rgba(112, 200, 255, 0.25)',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#70c8ff';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(112, 200, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(112, 200, 255, 0.25)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(112, 200, 255, 0.15)',
                      color: '#70c8ff',
                      fontSize: '20px',
                      border: '1px solid rgba(112, 200, 255, 0.3)'
                    }}
                  >
                    🧠
                  </div>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(112, 200, 255, 0.15)', color: '#70c8ff', padding: '3px 10px', borderRadius: '12px', fontWeight: '800' }}>
                    COSINE SIMILARITY
                  </span>
                </div>

                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: '800', marginBottom: '8px' }}>
                  Smart Recommendation Matrix
                </h4>

                <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                  Content-based filtering algorithm calculating feature-vector affinity to recommend relevant repositories based on visitor viewing habits.
                </p>
              </div>

              <button
                onClick={handleNavProjects}
                className="btn w-100 mt-4 d-flex align-items-center justify-content-center gap-2 py-2"
                style={{
                  backgroundColor: 'rgba(112, 200, 255, 0.12)',
                  border: '1px solid rgba(112, 200, 255, 0.3)',
                  borderRadius: '10px',
                  color: '#70c8ff',
                  fontWeight: '700',
                  fontSize: '13px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>View AI Repositories</span>
                <i className="fa-regular fa-code-branch"></i>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
