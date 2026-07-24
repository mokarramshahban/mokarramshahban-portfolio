import React from 'react';

export default function HomeSection({ activeTab, setActiveTab }) {
  const experienceItems = [
    { 
      date: 'July 2026 – Present', 
      company: 'Vizva Consultancy Services', 
      role: 'Software Developer', 
      desc: 'Building scalable full-stack web apps, REST APIs & AI integrations.',
      badgeColor: '#00a3ff',
      isCurrent: true 
    },
    { 
      date: 'Jan 2026 – June 2026', 
      company: 'AOSC Technologies India', 
      role: 'Full Stack Web Dev Intern', 
      desc: 'Full-stack engineering with React, Node.js & database schema design.',
      badgeColor: '#ea4335',
      isCurrent: false 
    },
    { 
      date: 'May 2023 – May 2024', 
      company: 'MxNext.in', 
      role: 'Web Developer & Co-Founder', 
      desc: 'Co-founded web agency & delivered client web platforms.',
      badgeColor: '#06b6d4',
      isCurrent: false 
    },
    { 
      date: 'Sept 2023 – March 2024', 
      company: 'Green Apple Media Solution', 
      role: 'Trainee – Web Designing', 
      desc: 'UI/UX design, HTML5/CSS3 & responsive layout architectures.',
      badgeColor: '#47a248',
      isCurrent: false 
    },
  ];

  const expertSkills = [
    { name: 'React.js', icon: <i className="fa-brands fa-react" style={{ fontSize: '24px', color: '#61DAFB' }}></i> },
    { name: 'Next.js', icon: <svg width="22" height="22" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="90" fill="white"/><path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.2155L138.564 162.247C142.441 162.247 146.096 159.26 149.508 157.52Z" fill="black"/><rect x="115" y="54" width="13" height="72" fill="black"/></svg> },
    { name: 'TypeScript', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.194-.48 5.72 5.72 0 0 0-1.272-.143c-.63 0-1.1.128-1.41.383-.31.256-.465.617-.465 1.083 0 .341.096.619.288.835.192.215.467.4.825.555.358.155.795.31 1.311.465.733.22 1.341.465 1.824.735.483.27.864.606 1.143 1.008.279.402.419.912.419 1.53 0 .864-.249 1.57-.747 2.118-.498.548-1.18.932-2.046 1.152-.866.22-1.859.33-2.979.33a10.02 10.02 0 0 1-1.743-.15 7.74 7.74 0 0 1-1.635-.453v-2.58a7.04 7.04 0 0 0 1.545.642 6.06 6.06 0 0 0 1.83.255c.66 0 1.164-.135 1.512-.405.348-.27.522-.64.522-1.11 0-.348-.1-.632-.3-.852-.2-.22-.486-.412-.858-.577a15.82 15.82 0 0 0-1.392-.495c-.71-.233-1.3-.49-1.77-.772a3.84 3.84 0 0 1-1.122-1.028c-.27-.427-.405-.96-.405-1.6 0-.816.246-1.492.738-2.028.492-.536 1.157-.91 1.995-1.122.838-.212 1.782-.318 2.832-.318zM11.31 9.96v2.325H8.76v9.33H5.73v-9.33H3.18V9.96h8.13z"/></svg> },
    { name: 'Tailwind CSS', icon: <i className="fa-brands fa-css3-alt" style={{ fontSize: '24px', color: '#06B6D4' }}></i> },
    { name: 'Node.js', icon: <i className="fa-brands fa-node-js" style={{ fontSize: '24px', color: '#68A063' }}></i> },
    { name: 'Python', icon: <i className="fa-brands fa-python" style={{ fontSize: '24px', color: '#3776AB' }}></i> },
    { name: 'FastAPI', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#009688"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1 18.5l-2.5-6.5H7.5L13 3.5l-1 6.5h3.5L13 18.5z"/></svg> },
    { name: 'MongoDB', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-4.802-4.426-7.854-5.048-8.435a.252.252 0 0 0-.345 0c-.622.58-3.784 3.633-5.048 8.435-1.455 5.529.585 10.25 4.965 13.385a.732.732 0 0 0 .867 0c4.38-3.135 6.42-7.856 4.965-13.385zM12 21.65c-.247-.184-3.568-2.732-4.148-7.65.654 1.258 2.008 2.05 3.548 2.05s2.894-.792 3.548-2.05c-.58 4.918-3.901 7.466-4.148 7.65z"/></svg> },
    { name: 'PostgreSQL', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#4169E1"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 8.78c-.06.72-.34 1.83-1.07 2.85-.92 1.28-2.3 2.1-3.66 2.37.14.49.27 1.05.35 1.63.1.72.07 1.48-.12 2.17-.18.66-.54 1.26-1.07 1.69-.53.43-1.2.69-1.92.74-.72.05-1.45-.1-2.07-.44-.62-.34-1.12-.85-1.45-1.47-.33-.62-.48-1.34-.43-2.06.05-.72.3-1.41.72-1.99.42-.58.99-1.02 1.65-1.27v-1.1c-.69.04-1.38.22-2.01.52-.63.3-1.19.72-1.64 1.24s-.78 1.13-.97 1.8c-.19.67-.23 1.38-.11 2.08.12.7.4 1.36.82 1.92.42.56.97 1 1.61 1.29.64.29 1.35.42 2.06.37.71-.05 1.4-.28 2-.67.6-.39 1.09-.92 1.43-1.55.34-.63.52-1.34.52-2.06 0-.66-.15-1.31-.43-1.91z"/></svg> },
    { name: 'Git / GitHub', icon: <i className="fa-brands fa-github" style={{ fontSize: '24px', color: '#ffffff' }}></i> },
  ];

  const statHighlights = [
    { number: '29+', label: 'GitHub Projects', sub: 'Full Stack & Open Source', icon: 'fa-regular fa-code-branch' },
    { number: '2', label: 'Govt UI/UX Audits', sub: 'Jharkhand Transport & Legal Depts', icon: 'fa-regular fa-landmark' },
    { number: '1,200+', label: 'Fest Attendees', sub: 'Tech Urja Lead Organiser', icon: 'fa-regular fa-users' },
    { number: '15%', label: 'Speed Boost', sub: 'React Speed & Core Vitals', icon: 'fa-regular fa-bolt' }
  ];

  const featuredSpotlightProjects = [
    {
      name: 'DevTinder',
      tech: 'Node.js, Express, MongoDB, JWT',
      desc: 'Full-stack developer networking platform with tech-stack peer discovery & connection workflows.',
      link: 'https://github.com/mokarramshahban/devtinder'
    },
    {
      name: 'Food Delivery App UI',
      tech: 'React 19, Redux Toolkit, Tailwind CSS',
      desc: 'Production-grade food ordering app with dynamic category filters, cart state, and Jest unit tests.',
      link: 'https://github.com/mokarramshahban/food-delivery-app-ui-react.js'
    },
    {
      name: 'FlixFusion',
      tech: 'React.js, TMDB API, Custom Hooks',
      desc: 'Interactive movie streaming portal with real-time TMDB API integration and responsive previews.',
      link: 'https://github.com/mokarramshahban/flixfusion'
    }
  ];

  return (
    <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="home" role="tabpanel">
      <div className="row g-4">
        
        {/* HERO FEATURED HEADER CARD */}
        <div className="col-lg-12">
          <div 
            className="tmp-profile-card tmponhover single-animation p-4" 
            style={{ 
              borderRadius: '16px', 
              background: 'linear-gradient(135deg, rgba(20, 26, 38, 0.95) 0%, rgba(10, 15, 24, 0.98) 100%)', 
              border: '1px solid rgba(0, 163, 255, 0.25)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1" style={{ backgroundColor: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.3)', borderRadius: '20px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00e676', display: 'inline-block', boxShadow: '0 0 8px #00e676' }}></span>
                <span style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '600' }}>Available for Software Developer Roles</span>
              </div>
            </div>

            <h1 style={{ color: '#ffffff', fontSize: '26px', fontWeight: '800', lineHeight: '1.3', margin: '0 0 10px 0' }}>
              Building Scalable, AI-Powered <span style={{ color: '#00a3ff' }}>Full-Stack Web Applications</span>
            </h1>
            
            <p style={{ color: '#a0a8b6', fontSize: '14px', lineHeight: '1.6', margin: 0, maxWidth: '780px' }}>
              Software Developer at <strong>Vizva Consultancy Services</strong>. Crafting high-throughput REST APIs, responsive React & Next.js user interfaces, and database architectures across MongoDB & PostgreSQL. Experienced in conducting UI/UX audits directly for Government of India departments.
            </p>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        {/* METRICS & IMPACT HIGHLIGHTS BAR */}
        <div className="col-lg-12">
          <div className="row g-3">
            {statHighlights.map((stat, i) => (
              <div className="col-lg-3 col-md-6 col-6" key={i}>
                <div 
                  className="tmp-profile-card tmponhover single-animation p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center" 
                  style={{ 
                    background: '#121822', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="mb-1 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', fontSize: '16px' }}>
                    <i className={stat.icon}></i>
                  </div>
                  <h3 className="m-0" style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800' }}>{stat.number}</h3>
                  <span style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700' }}>{stat.label}</span>
                  <span style={{ color: '#7e8796', fontSize: '10px', marginTop: '2px' }}>{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED PROJECTS SPOTLIGHT SHOWCASE */}
        <div className="col-lg-12">
          <div 
            className="tmp-profile-card tmponhover single-animation p-4" 
            style={{ 
              borderRadius: '16px', 
              background: '#10151f', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', margin: 0 }}>
                  ⭐ Featured Project Spotlight
                </h4>
                <span style={{ color: '#8c96a5', fontSize: '12px' }}>Selected full-stack open-source highlights</span>
              </div>

              <div
                onClick={() => setActiveTab && setActiveTab('projects')}
                role="button"
                tabIndex={0}
                style={{ color: '#00a3ff', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}
              >
                Explore All 29 Repos <i className="fa-regular fa-arrow-right ms-1"></i>
              </div>
            </div>

            <div className="row g-3">
              {featuredSpotlightProjects.map((proj, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div 
                    className="p-3 h-100 d-flex flex-column justify-content-between" 
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                      borderRadius: '12px', 
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', margin: 0 }}>{proj.name}</h5>
                        <i className="fa-brands fa-github" style={{ color: '#00a3ff', fontSize: '16px' }}></i>
                      </div>
                      <span style={{ display: 'inline-block', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', fontSize: '10px', fontWeight: '600', padding: '2px 8px', borderRadius: '6px', marginBottom: '8px' }}>
                        {proj.tech}
                      </span>
                      <p style={{ color: '#a0a8b6', fontSize: '12px', lineHeight: '1.4', margin: 0 }}>
                        {proj.desc}
                      </p>
                    </div>
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '600', textDecoration: 'none', marginTop: '12px', display: 'inline-block' }}
                    >
                      View GitHub Source <i className="fa-regular fa-arrow-up-right-from-square ms-1" style={{ fontSize: '10px' }}></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* ROW 1: WORK EXPERIENCE & EXPERT AREA */}
        <div className="col-lg-6">
          <div 
            className="tmp-profile-card paralax-image tmponhover single-animation h-100"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="tmp-card-body work-experiance-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="card-title m-0">💼 Work Experience</h3>
                <div 
                  onClick={() => setActiveTab && setActiveTab('profile')}
                  role="button"
                  tabIndex={0}
                  style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Full Resume <i className="fa-regular fa-arrow-right ms-1"></i>
                </div>
              </div>

              <div className="work-experiance-main" style={{ height: '215px', overflow: 'hidden' }}>
                <ul className="work-experiance-slider list-unstyled m-0 p-0">
                  {experienceItems.map((item, index) => (
                    <li key={`exp1-${index}`} className={item.isCurrent ? 'current-company-item' : ''}>
                      <div className="info">
                        <div 
                          className="d-flex align-items-center justify-content-center me-2"
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: `${item.badgeColor}22`,
                            color: item.badgeColor,
                            border: `1px solid ${item.badgeColor}44`,
                            fontWeight: '800',
                            fontSize: '13px',
                            flexShrink: 0
                          }}
                        >
                          {item.company.charAt(0)}
                        </div>
                        <div className="text">
                          <h4 className="title">{item.company}</h4>
                          <h6 className="subtitle">{item.role}</h6>
                        </div>
                      </div>
                      <div className="date">
                        <p style={{ color: item.isCurrent ? '#00e676' : '#8c96a5', fontWeight: '600', fontSize: '10px' }}>
                          {item.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <ul className="work-experiance-slider list-unstyled m-0 p-0">
                  {experienceItems.map((item, index) => (
                    <li key={`exp2-${index}`} className={item.isCurrent ? 'current-company-item' : ''}>
                      <div className="info">
                        <div 
                          className="d-flex align-items-center justify-content-center me-2"
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            backgroundColor: `${item.badgeColor}22`,
                            color: item.badgeColor,
                            border: `1px solid ${item.badgeColor}44`,
                            fontWeight: '800',
                            fontSize: '13px',
                            flexShrink: 0
                          }}
                        >
                          {item.company.charAt(0)}
                        </div>
                        <div className="text">
                          <h4 className="title">{item.company}</h4>
                          <h6 className="subtitle">{item.role}</h6>
                        </div>
                      </div>
                      <div className="date">
                        <p style={{ color: item.isCurrent ? '#00e676' : '#8c96a5', fontWeight: '600', fontSize: '10px' }}>
                          {item.date}
                        </p>
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
          <div 
            className="tmp-profile-card tmponhover single-animation h-100 p-4" 
            style={{ 
              borderRadius: '16px', 
              background: '#10151f', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="card-title m-0" style={{ fontSize: '18px', color: '#ffffff', fontWeight: '700' }}>
                🛠️ My Expert Area
              </h3>
              <div 
                onClick={() => setActiveTab && setActiveTab('profile')}
                role="button"
                tabIndex={0}
                style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}
              >
                All Skills <i className="fa-regular fa-arrow-right ms-1"></i>
              </div>
            </div>

            <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginTop: '12px' }}>
              {expertSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-2 text-center d-flex flex-column align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    minHeight: '76px',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.12)';
                    e.currentTarget.style.borderColor = '#00a3ff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center mb-1" style={{ height: '32px' }}>
                    {skill.icon}
                  </div>
                  <span style={{ fontSize: '11px', color: '#ffffff', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Sleek Glassmorphic Summary Bar */}
            <div 
              className="mt-3 px-3 py-2 d-flex flex-wrap justify-content-between align-items-center gap-2"
              style={{
                backgroundColor: 'rgba(0, 163, 255, 0.08)',
                border: '1px solid rgba(0, 163, 255, 0.2)',
                borderRadius: '10px',
                fontSize: '11px'
              }}
            >
              <div className="d-flex align-items-center gap-1.5" style={{ color: '#d0d5e5', fontWeight: '500' }}>
                <span style={{ color: '#00a3ff', fontSize: '12px' }}>⚡</span>
                <span>Full-Stack & REST API Architecture</span>
              </div>

              <div 
                onClick={() => setActiveTab && setActiveTab('profile')}
                role="button"
                tabIndex={0}
                style={{
                  color: '#00a3ff',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>View Skills Breakdown</span>
                <i className="fa-regular fa-arrow-right" style={{ fontSize: '10px' }}></i>
              </div>
            </div>

            <div className="tmp-light light-bottom-left"></div>
          </div>
        </div>

        {/* ROW 2: KEY ACHIEVEMENTS & CURRENT FOCUS */}
        <div className="col-lg-6 mt-3">
          <div 
            className="tmp-profile-card tmponhover single-animation h-100 p-4" 
            style={{ 
              borderRadius: '16px', 
              background: '#10151f', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="card-title m-0" style={{ fontSize: '18px', color: '#ffffff', fontWeight: '700' }}>
                🏆 Key Honors & Audits
              </h3>
              <span style={{ fontSize: '10px', color: '#00a3ff', fontWeight: '600', backgroundColor: 'rgba(0, 163, 255, 0.12)', padding: '2px 8px', borderRadius: '10px' }}>
                3 Highlights
              </span>
            </div>

            <div className="d-flex flex-column" style={{ marginTop: '12px', gap: '10px' }}>
              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-landmark"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '2px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>Govt UI/UX Audits</h5>
                    <span style={{ fontSize: '9px', backgroundColor: 'rgba(0, 163, 255, 0.18)', color: '#00a3ff', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>Govt Auditor</span>
                  </div>
                  <span style={{ color: '#9098a8', fontSize: '11px' }}>Jharkhand Transport & Legal Depts</span>
                </div>
              </div>

              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'rgba(255, 215, 0, 0.15)', color: '#ffd700', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-award"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '2px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>Best Poster Award</h5>
                    <span style={{ fontSize: '9px', backgroundColor: 'rgba(255, 215, 0, 0.18)', color: '#ffd700', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>National Award</span>
                  </div>
                  <span style={{ color: '#9098a8', fontSize: '11px' }}>KCET National Conferences (2024 & 2025)</span>
                </div>
              </div>

              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'rgba(0, 230, 118, 0.15)', color: '#00e676', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-users"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '2px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>Tech Urja Lead</h5>
                    <span style={{ fontSize: '9px', backgroundColor: 'rgba(0, 230, 118, 0.18)', color: '#00e676', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>1,200+ Lead</span>
                  </div>
                  <span style={{ color: '#9098a8', fontSize: '11px' }}>Managed Fest Registration Architecture</span>
                </div>
              </div>
            </div>
            <div className="tmp-light light-left"></div>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div 
            className="tmp-profile-card tmponhover single-animation h-100 p-4" 
            style={{ 
              borderRadius: '16px', 
              background: '#10151f', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="card-title m-0" style={{ fontSize: '18px', color: '#ffffff', fontWeight: '700' }}>
                🎯 Current Focus
              </h3>
              <span style={{ fontSize: '10px', color: '#00a3ff', fontWeight: '600', backgroundColor: 'rgba(0, 163, 255, 0.12)', padding: '2px 8px', borderRadius: '10px' }}>
                2026 Focus
              </span>
            </div>

            <div className="d-flex flex-column" style={{ marginTop: '12px', gap: '10px' }}>
              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-brain"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '2px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>AI & LLM Integration</h5>
                    <span style={{ fontSize: '9px', backgroundColor: 'rgba(0, 163, 255, 0.18)', color: '#00a3ff', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>Next-Gen AI</span>
                  </div>
                  <span style={{ color: '#9098a8', fontSize: '11px' }}>Intelligent Agents & API Workflows</span>
                </div>
              </div>

              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#00a3ff', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-bolt"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '2px' }}>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>Backend Microservices</h5>
                    <span style={{ fontSize: '9px', backgroundColor: 'rgba(0, 163, 255, 0.18)', color: '#00a3ff', padding: '1px 6px', borderRadius: '4px', fontWeight: '600' }}>REST & DBs</span>
                  </div>
                  <span style={{ color: '#9098a8', fontSize: '11px' }}>FastAPI, Node.js & DB Schema Design</span>
                </div>
              </div>

              <div className="px-3 py-2.5 d-flex align-items-center gap-3" style={{ backgroundColor: 'rgba(0, 163, 255, 0.08)', borderRadius: '10px', border: '1px solid rgba(0, 163, 255, 0.25)' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', borderRadius: '10px', backgroundColor: '#00a3ff', color: '#ffffff', flexShrink: 0, fontSize: '15px' }}>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: 0 }}>Let's Connect</h5>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setActiveTab && setActiveTab('contactme'); }} 
                    style={{ color: '#00a3ff', fontSize: '11px', fontWeight: '700', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Get In Touch Direct</span>
                    <i className="fa-regular fa-arrow-right" style={{ fontSize: '10px' }}></i>
                  </a>
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
