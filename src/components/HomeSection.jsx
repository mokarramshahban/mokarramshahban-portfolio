import React from 'react';

export default function HomeSection({ activeTab, setActiveTab }) {
  const experienceItems = [
    { date: 'July 2026 - Present', company: 'Vizva Consultancy Services', role: 'Software Developer', icon: 'adobe.svg', isCurrent: true },
    { date: 'Jan 2026 - June 2026', company: 'AOSC Technologies India Pvt. Ltd.', role: 'Full Stack Web Development Intern', icon: 'google.svg' },
    { date: 'May 2023 - May 2024', company: 'MxNext.in', role: 'Web Developer & Co-Founder', icon: 'meta.svg' },
    { date: 'Sept 2023 - March 2024', company: 'Green Apple Media Solution', role: 'Trainee – Web Designing', icon: 'adobe.svg' },
  ];

  const expertSkills = [
    { name: 'React', icon: <i className="fa-brands fa-react" style={{ fontSize: '24px', color: '#61DAFB' }}></i> },
    { name: 'Next.js', icon: <svg width="22" height="22" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="90" fill="white"/><path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.2155L138.564 162.247C142.441 162.247 146.096 159.26 149.508 157.52Z" fill="black"/><rect x="115" y="54" width="13" height="72" fill="black"/></svg> },
    { name: 'Node.js', icon: <i className="fa-brands fa-node-js" style={{ fontSize: '24px', color: '#68A063' }}></i> },
    { name: 'TypeScript', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.194-.48 5.72 5.72 0 0 0-1.272-.143c-.63 0-1.1.128-1.41.383-.31.256-.465.617-.465 1.083 0 .341.096.619.288.835.192.215.467.4.825.555.358.155.795.31 1.311.465.733.22 1.341.465 1.824.735.483.27.864.606 1.143 1.008.279.402.419.912.419 1.53 0 .864-.249 1.57-.747 2.118-.498.548-1.18.932-2.046 1.152-.866.22-1.859.33-2.979.33a10.02 10.02 0 0 1-1.743-.15 7.74 7.74 0 0 1-1.635-.453v-2.58a7.04 7.04 0 0 0 1.545.642 6.06 6.06 0 0 0 1.83.255c.66 0 1.164-.135 1.512-.405.348-.27.522-.64.522-1.11 0-.348-.1-.632-.3-.852-.2-.22-.486-.412-.858-.577a15.82 15.82 0 0 0-1.392-.495c-.71-.233-1.3-.49-1.77-.772a3.84 3.84 0 0 1-1.122-1.028c-.27-.427-.405-.96-.405-1.6 0-.816.246-1.492.738-2.028.492-.536 1.157-.91 1.995-1.122.838-.212 1.782-.318 2.832-.318zM11.31 9.96v2.325H8.76v9.33H5.73v-9.33H3.18V9.96h8.13z"/></svg> },
    { name: 'Python', icon: <i className="fa-brands fa-python" style={{ fontSize: '24px', color: '#3776AB' }}></i> },
    { name: 'FastAPI', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#009688"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1 18.5l-2.5-6.5H7.5L13 3.5l-1 6.5h3.5L13 18.5z"/></svg> },
    { name: 'MongoDB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-4.802-4.426-7.854-5.048-8.435a.252.252 0 0 0-.345 0c-.622.58-3.784 3.633-5.048 8.435-1.455 5.529.585 10.25 4.965 13.385a.732.732 0 0 0 .867 0c4.38-3.135 6.42-7.856 4.965-13.385zM12 21.65c-.247-.184-3.568-2.732-4.148-7.65.654 1.258 2.008 2.05 3.548 2.05s2.894-.792 3.548-2.05c-.58 4.918-3.901 7.466-4.148 7.65z"/></svg> },
    { name: 'PostgreSQL', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#4169E1"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 8.78c-.06.72-.34 1.83-1.07 2.85-.92 1.28-2.3 2.1-3.66 2.37.14.49.27 1.05.35 1.63.1.72.07 1.48-.12 2.17-.18.66-.54 1.26-1.07 1.69-.53.43-1.2.69-1.92.74-.72.05-1.45-.1-2.07-.44-.62-.34-1.12-.85-1.45-1.47-.33-.62-.48-1.34-.43-2.06.05-.72.3-1.41.72-1.99.42-.58.99-1.02 1.65-1.27v-1.1c-.69.04-1.38.22-2.01.52-.63.3-1.19.72-1.64 1.24s-.78 1.13-.97 1.8c-.19.67-.23 1.38-.11 2.08.12.7.4 1.36.82 1.92.42.56.97 1 1.61 1.29.64.29 1.35.42 2.06.37.71-.05 1.4-.28 2-.67.6-.39 1.09-.92 1.43-1.55.34-.63.52-1.34.52-2.06 0-.66-.15-1.31-.43-1.91z"/></svg> },
    { name: 'Tailwind CSS', icon: <i className="fa-brands fa-css3-alt" style={{ fontSize: '24px', color: '#06B6D4' }}></i> },
    { name: 'Git / GitHub', icon: <i className="fa-brands fa-github" style={{ fontSize: '24px', color: '#ffffff' }}></i> },
  ];

  const achievements = [
    { title: 'Govt UI/UX Audits', sub: 'Jharkhand Transport & Legal Depts', icon: 'fa-regular fa-landmark' },
    { title: 'Best Poster Award', sub: 'KCET National Conferences', icon: 'fa-regular fa-award' },
    { title: 'Tech Urja Organiser', sub: '1,200+ Event Participants', icon: 'fa-regular fa-users' },
  ];

  const servicesHighlights = [
    { title: 'Full Stack Engineering', sub: 'React, Next.js, Node.js, FastAPI' },
    { title: 'AI Features & Data', sub: 'LLM APIs & Intelligent Workflows' },
    { title: 'API & Schema Design', sub: 'MongoDB, PostgreSQL, REST APIs' },
  ];

  return (
    <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel">
      <div className="row g-4">
        {/* Top Marquee Banner */}
        <div className="col-lg-12">
          <div className="tmp-profile-card text-marque-banner-top-brnto mt--20 tmponhover single-animation active">
            <div className="tmp-slider-item-banner-text">
              <div className="item">
                <p>
                  💼 Software Developer at Vizva Consultancy Services | Building Scalable, AI-Powered Applications 🚀
                </p>
              </div>
              <div className="item">
                <p>
                  💼 Software Developer at Vizva Consultancy Services | Building Scalable, AI-Powered Applications 🚀
                </p>
              </div>
            </div>
            <div className="tmp-light light-top-left"></div>
          </div>
        </div>

        {/* Row 1: Work Experience & My Expert Area */}
        <div className="col-lg-6">
          <div className="tmp-profile-card paralax-image tmponhover single-animation active">
            <div className="tmp-card-body work-experiance-card">
              <h3 className="card-title">Work Experience</h3>
              <div className="work-experiance-main">
                <ul className="work-experiance-slider list-unstyled">
                  {experienceItems.map((item, index) => (
                    <li key={`exp1-${index}`} className={item.isCurrent ? 'current-company-item' : ''}>
                      <div className="date"><p>{item.date}</p></div>
                      <div className="info">
                        <div className="icon"><img src={`assets/images/icons/${item.icon}`} alt={item.company} /></div>
                        <div className="text">
                          <h4 className="title">{item.company}</h4>
                          <h6 className="subtitle">{item.role}</h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="work-experiance-slider list-unstyled">
                  {experienceItems.map((item, index) => (
                    <li key={`exp2-${index}`} className={item.isCurrent ? 'current-company-item' : ''}>
                      <div className="date"><p>{item.date}</p></div>
                      <div className="info">
                        <div className="icon"><img src={`assets/images/icons/${item.icon}`} alt={item.company} /></div>
                        <div className="text">
                          <h4 className="title">{item.company}</h4>
                          <h6 className="subtitle">{item.role}</h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tmp-light light-center"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="tmp-profile-card paralax-image tmponhover single-animation active">
            <div className="tmp-card-body expertise-card">
              <h3 className="card-title">My Expert Area</h3>
              <div className="expertise-main">
                <div className="expertise-grid-5">
                  {expertSkills.map((skill, index) => (
                    <div className="expertise-item" key={index}>
                      <div className="image text-center d-flex align-items-center justify-content-center" style={{ height: '42px', padding: '6px' }}>
                        {skill.icon}
                      </div>
                      <div className="text">
                        <h4 className="title" style={{ fontSize: '11px', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tmp-light light-bottom-left"></div>
          </div>
        </div>

        {/* Row 2: Key Achievements & Specializations */}
        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Key Achievements</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                {achievements.map((item, idx) => (
                  <div className="d-flex align-items-center gap-3" key={idx}>
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                      <i className={item.icon} style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>{item.title}</h5>
                      <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Specializations</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                {servicesHighlights.map((item, idx) => (
                  <div className="d-flex align-items-center gap-3" key={idx}>
                    <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                      <i className="fa-regular fa-layer-group" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>{item.title}</h5>
                      <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* Row 3: Impact & Highlights + Current Focus & Tech Stack */}
        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Impact & Highlights</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-rocket" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>5+ Production Apps</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Designed, Built & Maintained</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-circle-check" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>High Code Quality</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>SEO-Optimized, Modular Architecture</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-briefcase" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Open for Hire</h5>
                    <span className="text-truncate d-block" style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Full-Time & Remote Positions</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Current Focus</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-brain" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>AI & LLM Integration</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Intelligent Agents & API Workflows</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-bolt" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Backend Microservices</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>FastAPI, Node.js & Database Systems</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-paper-plane" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Let's Collaborate</h5>
                    {setActiveTab ? (
                      <a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('contactme'); }} className="text-truncate d-block" style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}>
                        Get In Touch <i className="fa-regular fa-arrow-right ms-1"></i>
                      </a>
                    ) : (
                      <span className="text-truncate d-block" style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>mokarramshahban.in@gmail.com</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* Row 4: Education & Developer Tooling */}
        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Education & Background</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-graduation-cap" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>B.Tech Computer Science</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>KCET (2022 - 2026)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-laptop-mobile" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Web Design Traineeship</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Green Apple Media Solution (2023–2024)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-trophy" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Best Poster Award</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>National Level Tech Symposiums</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Developer Tooling</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-code" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Dev Environment</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>VS Code, Git, GitHub Actions, Linux</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-palette" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>UI & Styling</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Figma, Tailwind CSS, Glassmorphism</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-server" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>API & Database</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Postman, MongoDB Atlas, PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* Row 5: Work History Highlights & Quick Contact */}
        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Career Highlights</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-briefcase" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Software Developer</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Vizva Consultancy Services (2026–Present)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-laptop-code" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Full Stack Intern</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>AOSC Technologies India (2026)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-user-gear" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Web Dev & Co-Founder</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>MxNext.in (2023–2024)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="tmp-profile-card bento-achieve-card tmponhover single-animation active">
            <div className="tmp-card-body p-0 d-flex flex-column h-100">
              <h3 className="card-title" style={{ fontSize: '17px', color: '#ffffff', fontWeight: '700', margin: '0 0 12px 0' }}>Quick Contact</h3>
              <div className="d-flex flex-column gap-2 flex-grow-1 justify-content-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-location-dot" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Location</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>India (Open to Global Remote)</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-clock" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Response Time</h5>
                    <span className="text-truncate d-block" style={{ color: '#8c96a5', fontSize: '11px', fontFamily: "'Inter', sans-serif" }}>Within 24 Hours</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', flexShrink: 0 }}>
                    <i className="fa-regular fa-envelope-open" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h5 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}>Direct Email</h5>
                    <a href="mailto:mokarramshahban.in@gmail.com" className="text-truncate d-block" style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', fontFamily: "'Inter', sans-serif", textDecoration: 'none' }}>
                      mokarramshahban.in@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
