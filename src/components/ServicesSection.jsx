import React from 'react';

export default function ServicesSection({ activeTab, setActiveTab }) {
  const services = [
    { 
      title: 'Full Stack Web Development', 
      icon: 'fa-regular fa-code', 
      badge: 'FRONTEND & BACKEND',
      color: '#00a3ff',
      tags: ['React 19', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'TypeScript', 'Tailwind CSS'],
      desc: 'Building high-performance, responsive full-stack applications with modern React 19, server-rendered Next.js, and high-throughput Python/Node.js backends.' 
    },
    { 
      title: 'AI Feature Integration & Automation', 
      icon: 'fa-regular fa-brain-circuit', 
      badge: 'AI & LLM API',
      color: '#ea4335',
      tags: ['OpenAI API', 'LLM Workflows', 'Python', 'LangChain', 'Automated Processing'],
      desc: 'Incorporating intelligent AI features, automated document & data pipelines, and custom LLM API integrations directly into web platforms.' 
    },
    { 
      title: 'API & Database Architecture', 
      icon: 'fa-regular fa-server', 
      badge: 'SCALABLE BACKEND',
      color: '#06b6d4',
      tags: ['REST APIs', 'PostgreSQL', 'MongoDB', 'FastAPI', 'Mongoose', 'Prisma ORM'],
      desc: 'Designing high-speed, secure REST APIs and normalized SQL & NoSQL database schemas built for reliability, scale, and low latency query execution.' 
    },
    { 
      title: 'UI/UX Audits & Usability Enhancement', 
      icon: 'fa-regular fa-landmark', 
      badge: 'GOVT AUDITED',
      color: '#ffd700',
      tags: ['Jharkhand Transport', 'Legal Affairs Dept', 'Accessibility', 'Figma', 'UI Audits'],
      desc: 'Comprehensive UI/UX usability audits, WCAG accessibility compliance, and user workflow optimizations tested directly for Government of India departments.' 
    },
    { 
      title: 'Institutional Portals & Event Platforms', 
      icon: 'fa-regular fa-building-columns', 
      badge: '1,000+ USERS',
      color: '#00e676',
      tags: ['Luma API', 'Event Registration', 'Role Auth', 'Student Portals', 'Admin Dashboards'],
      desc: 'Digitizing complex institutional workflows, multi-tier user role authentication, Luma API integration, and event registration portals for 1,000+ participants.' 
    },
    { 
      title: 'Performance & Speed Optimization', 
      icon: 'fa-regular fa-gauge-high', 
      badge: '15% – 40% FASTER',
      color: '#a855f7',
      tags: ['Code Refactoring', 'SEO Optimization', 'Core Web Vitals', 'Vite', 'Lighthouse 95+'],
      desc: 'Profiling bottlenecks, refactoring legacy components, optimizing bundle sizes, and elevating Core Web Vitals to improve overall page load speeds by 15% – 40%.' 
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & System Audit',
      desc: 'Analyzing system requirements, mapping database data flows, and conducting initial performance & UI/UX audits.'
    },
    {
      step: '02',
      title: 'Architecture & Schema Design',
      desc: 'Structuring type-safe component libraries, REST API endpoints, and scalable PostgreSQL/MongoDB database models.'
    },
    {
      step: '03',
      title: 'Full-Stack Development',
      desc: 'Building responsive React/Next.js frontends, FastAPI backends, and seamless third-party AI integrations.'
    },
    {
      step: '04',
      title: 'Speed Tuning & Deployment',
      desc: 'Profiling load speeds, optimizing Core Web Vitals, setting up CI/CD, and delivering clean technical documentation.'
    }
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'service' ? 'show active' : ''}`} id="service" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Card Header */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 p-4 p-md-5" style={{ borderRadius: '16px', background: '#10151f', border: '1px solid rgba(0, 163, 255, 0.25)' }}>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
              <i className="fa-solid fa-layer-group me-2"></i> SERVICES & SPECIALIZATIONS
            </h4>
            <span style={{ fontSize: '11px', color: '#00e676', backgroundColor: 'rgba(0, 230, 118, 0.12)', padding: '3px 12px', borderRadius: '20px', border: '1px solid rgba(0, 230, 118, 0.3)', fontWeight: '600' }}>
              🟢 Available for Engineering Projects
            </span>
          </div>

          <h1 style={{ fontSize: '28px', color: '#ffffff', fontWeight: '800', lineHeight: '1.3' }}>
            Engineering Scalable <span style={{ color: '#00a3ff' }}>Full-Stack Web Apps</span> <br />
            & AI Integrations.
          </h1>

          <p className="mt-3" style={{ fontSize: '15px', lineHeight: '1.7', color: '#a0a8b6' }}>
            Delivering end-to-end software solutions — from responsive frontend interfaces and AI pipelines to high-throughput REST APIs and Government-level UI/UX audits.
          </p>

          {/* Hero Service Stats Strip */}
          <div className="d-flex flex-wrap align-items-center mt-4 p-3" style={{ gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              ⚡ 6 Core Specializations
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              🚀 15% – 40% Speed Gains
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              🏛️ 2 Govt Department Audits
            </span>
          </div>

          <div className="tmp-light light-left"></div>
        </div>

        {/* Services Bento Grid */}
        <div className="mb--50 banner-personal-portfolio signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-gears me-2"></i> WHAT I OFFER
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Technical Services & <span style={{ color: '#00a3ff' }}>Capabilities</span>
            </h2>
          </div>

          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-6 col-12" key={index}>
                <div 
                  className="p-4 h-100 d-flex flex-column justify-content-between position-relative"
                  style={{
                    backgroundColor: '#10151f',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: `${item.color}15`, border: `1px solid ${item.color}35`, color: item.color, fontSize: '22px' }}>
                        <i className={item.icon}></i>
                      </div>

                      <span style={{ fontSize: '10px', backgroundColor: `${item.color}18`, color: item.color, padding: '3px 10px', borderRadius: '4px', fontWeight: '800', border: `1px solid ${item.color}35`, letterSpacing: '0.5px' }}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '14px', color: '#9098a8', lineHeight: '1.6', margin: '0 0 14px 0' }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Uniform Enclosed Tech Skill Box matching About Page */}
                  <div>
                    <div 
                      className="d-flex flex-wrap align-items-center p-2.5 mb-3" 
                      style={{ 
                        gap: '8px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                        borderRadius: '10px', 
                        border: '1px solid rgba(255, 255, 255, 0.05)' 
                      }}
                    >
                      {item.tags.map((tag, tIndex) => (
                        <span 
                          key={tIndex}
                          style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#70c8ff',
                            backgroundColor: 'rgba(0, 163, 255, 0.08)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            border: '1px solid rgba(0, 163, 255, 0.25)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span style={{ fontSize: '9px', opacity: 0.8, color: '#00a3ff' }}>⚡</span> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="tmp-light light-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Workflow / Integrated Node Pathway Timeline */}
        <div className="mb--50 banner-personal-portfolio experience-style-list signle-section position-relative">
          <div className="section-header pb--40">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-timeline me-2"></i> WORKFLOW & METHODOLOGY
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              How I Engineer <span style={{ color: '#00a3ff' }}>Solutions</span>
            </h2>
          </div>

          <div className="position-relative pt-3">
            {/* Horizontal Pathway Glow Line passing through node centers */}
            <div 
              className="d-none d-lg-block position-absolute" 
              style={{ 
                top: '27px', 
                left: '10%', 
                right: '10%', 
                height: '4px', 
                background: 'linear-gradient(90deg, #00a3ff 0%, #00d2ff 33%, #00e6a8 66%, #00e676 100%)', 
                borderRadius: '4px',
                boxShadow: '0 0 16px rgba(0, 163, 255, 0.6)',
                zIndex: 0 
              }}
            >
              {/* Moving Glow Pulse Dot */}
              <div 
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 18px #00e676, 0 0 28px #00a3ff',
                  position: 'absolute',
                  top: '-5px',
                  animation: 'servicePathwayPulse 3.5s infinite linear'
                }}
              ></div>
            </div>

            <style>{`
              @keyframes servicePathwayPulse {
                0% { left: 0%; opacity: 0.3; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0.3; }
              }
            `}</style>

            <div className="row g-4 position-relative" style={{ zIndex: 1 }}>
              {workflowSteps.map((step, sIndex) => (
                <div className="col-lg-3 col-md-6 col-12 d-flex flex-column align-items-center" key={sIndex}>
                  
                  {/* Glowing Node Circle ON the line */}
                  <div 
                    className="d-flex align-items-center justify-content-center mb-4 position-relative"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      backgroundColor: '#10151f',
                      border: `3px solid ${step.color}`,
                      color: step.color,
                      fontSize: '18px',
                      fontWeight: '900',
                      boxShadow: `0 0 20px ${step.color}66`,
                      zIndex: 2,
                      transition: 'transform 0.3s ease, boxShadow 0.3s ease'
                    }}
                  >
                    <span>{step.step}</span>
                  </div>

                  {/* Step Bento Card */}
                  <div 
                    className="p-4 w-100 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                    style={{
                      backgroundColor: '#10151f',
                      borderRadius: '18px',
                      border: `1px solid ${step.color}35`,
                      boxShadow: `0 6px 20px rgba(0, 0, 0, 0.35)`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = step.color;
                      e.currentTarget.style.boxShadow = `0 12px 32px ${step.color}35`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = `${step.color}35`;
                      e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 0, 0, 0.35)`;
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div 
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            backgroundColor: `${step.color}18`,
                            border: `1px solid ${step.color}40`,
                            color: step.color,
                            fontSize: '18px'
                          }}
                        >
                          <i className={step.icon}></i>
                        </div>

                        <span style={{ fontSize: '10px', backgroundColor: `${step.color}18`, color: step.color, padding: '3px 10px', borderRadius: '20px', fontWeight: '800', border: `1px solid ${step.color}35`, letterSpacing: '0.5px' }}>
                          PHASE 0{sIndex + 1}
                        </span>
                      </div>

                      <h5 style={{ color: '#ffffff', fontSize: '16.5px', fontWeight: '800', marginBottom: '8px' }}>
                        {step.title}
                      </h5>

                      <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Deliverable Sub-Card Box */}
                    <div 
                      className="d-flex align-items-center justify-content-center mt-4 p-2.5"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <span 
                        style={{
                          fontSize: '11.5px',
                          color: step.color,
                          fontWeight: '700',
                          textAlign: 'center'
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    <div className="tmp-light light-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Call To Action Card */}
        <div className="banner-personal-portfolio signle-section mt--40">
          <div className="p-4 p-md-5 text-center position-relative overflow-hidden" style={{ borderRadius: '18px', background: 'linear-gradient(135deg, rgba(0, 163, 255, 0.08) 0%, #10151f 100%)', border: '1px solid rgba(0, 163, 255, 0.3)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)' }}>
            <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>Need a High-Performance Full-Stack Application?</h3>
            <p style={{ color: '#9098a8', fontSize: '14.5px', maxWidth: '580px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
              Let's collaborate to build your web app, AI feature integration, backend REST API, or conduct a Government-grade UI/UX audit.
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-center" style={{ gap: '14px' }}>
              <button 
                onClick={() => setActiveTab && setActiveTab('contactme')}
                className="btn py-2.5 px-4"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '14px',
                  boxShadow: '0 4px 16px rgba(0, 163, 255, 0.35)',
                  transition: 'all 0.2s ease-in-out',
                  width: 'auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(0, 163, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 163, 255, 0.35)';
                }}
              >
                <span>Get In Touch</span>
                <i className="fa-regular fa-paper-plane"></i>
              </button>

              <a 
                href="https://github.com/mokarramshahban" 
                target="_blank" 
                rel="noreferrer"
                className="btn py-2.5 px-4"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.2s ease-in-out',
                  width: 'auto'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>GitHub Profile</span>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="tmp-light light-center"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
