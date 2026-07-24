import React from 'react';

export default function AboutSection({ activeTab, setActiveTab }) {
  const skills = [
    { 
      name: 'React.js', 
      level: 'Expert', 
      val: '95', 
      color: '#61DAFB',
      icon: <i className="fa-brands fa-react" style={{ fontSize: '32px', color: '#61DAFB' }}></i> 
    },
    { 
      name: 'Next.js', 
      level: 'Expert', 
      val: '92', 
      color: '#ffffff',
      icon: <svg width="32" height="32" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="90" cy="90" r="90" fill="white"/><path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.2155L138.564 162.247C142.441 162.247 146.096 159.26 149.508 157.52Z" fill="black"/><rect x="115" y="54" width="13" height="72" fill="black"/></svg> 
    },
    { 
      name: 'Node.js', 
      level: 'Advanced', 
      val: '90', 
      color: '#68A063',
      icon: <i className="fa-brands fa-node-js" style={{ fontSize: '32px', color: '#68A063' }}></i> 
    },
    { 
      name: 'TypeScript', 
      level: 'Advanced', 
      val: '88', 
      color: '#3178C6',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.194-.48 5.72 5.72 0 0 0-1.272-.143c-.63 0-1.1.128-1.41.383-.31.256-.465.617-.465 1.083 0 .341.096.619.288.835.192.215.467.4.825.555.358.155.795.31 1.311.465.733.22 1.341.465 1.824.735.483.27.864.606 1.143 1.008.279.402.419.912.419 1.53 0 .864-.249 1.57-.747 2.118-.498.548-1.18.932-2.046 1.152-.866.22-1.859.33-2.979.33a10.02 10.02 0 0 1-1.743-.15 7.74 7.74 0 0 1-1.635-.453v-2.58a7.04 7.04 0 0 0 1.545.642 6.06 6.06 0 0 0 1.83.255c.66 0 1.164-.135 1.512-.405.348-.27.522-.64.522-1.11 0-.348-.1-.632-.3-.852-.2-.22-.486-.412-.858-.577a15.82 15.82 0 0 0-1.392-.495c-.71-.233-1.3-.49-1.77-.772a3.84 3.84 0 0 1-1.122-1.028c-.27-.427-.405-.96-.405-1.6 0-.816.246-1.492.738-2.028.492-.536 1.157-.91 1.995-1.122.838-.212 1.782-.318 2.832-.318zM11.31 9.96v2.325H8.76v9.33H5.73v-9.33H3.18V9.96h8.13z"/></svg> 
    },
    { 
      name: 'Python', 
      level: 'Expert', 
      val: '92', 
      color: '#3776AB',
      icon: <i className="fa-brands fa-python" style={{ fontSize: '32px', color: '#3776AB' }}></i> 
    },
    { 
      name: 'FastAPI', 
      level: 'Advanced', 
      val: '86', 
      color: '#009688',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#009688"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1 18.5l-2.5-6.5H7.5L13 3.5l-1 6.5h3.5L13 18.5z"/></svg> 
    },
    { 
      name: 'MongoDB', 
      level: 'Advanced', 
      val: '88', 
      color: '#47A248',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 9.555c-1.264-4.802-4.426-7.854-5.048-8.435a.252.252 0 0 0-.345 0c-.622.58-3.784 3.633-5.048 8.435-1.455 5.529.585 10.25 4.965 13.385a.732.732 0 0 0 .867 0c4.38-3.135 6.42-7.856 4.965-13.385zM12 21.65c-.247-.184-3.568-2.732-4.148-7.65.654 1.258 2.008 2.05 3.548 2.05s2.894-.792 3.548-2.05c-.58 4.918-3.901 7.466-4.148 7.65z"/></svg> 
    },
    { 
      name: 'PostgreSQL', 
      level: 'Advanced', 
      val: '90', 
      color: '#4169E1',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="#4169E1"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 8.78c-.06.72-.34 1.83-1.07 2.85-.92 1.28-2.3 2.1-3.66 2.37.14.49.27 1.05.35 1.63.1.72.07 1.48-.12 2.17-.18.66-.54 1.26-1.07 1.69-.53.43-1.2.69-1.92.74-.72.05-1.45-.1-2.07-.44-.62-.34-1.12-.85-1.45-1.47-.33-.62-.48-1.34-.43-2.06.05-.72.3-1.41.72-1.99.42-.58.99-1.02 1.65-1.27v-1.1c-.69.04-1.38.22-2.01.52-.63.3-1.19.72-1.64 1.24s-.78 1.13-.97 1.8c-.19.67-.23 1.38-.11 2.08.12.7.4 1.36.82 1.92.42.56.97 1 1.61 1.29.64.29 1.35.42 2.06.37.71-.05 1.4-.28 2-.67.6-.39 1.09-.92 1.43-1.55.34-.63.52-1.34.52-2.06 0-.66-.15-1.31-.43-1.91z"/></svg> 
    },
    { 
      name: 'Tailwind CSS', 
      level: 'Expert', 
      val: '96', 
      color: '#06B6D4',
      icon: <i className="fa-brands fa-css3-alt" style={{ fontSize: '28px', color: '#06B6D4' }}></i> 
    },
    { 
      name: 'Git / GitHub', 
      level: 'Expert', 
      val: '94', 
      color: '#ffffff',
      icon: <i className="fa-brands fa-github" style={{ fontSize: '28px', color: '#ffffff' }}></i> 
    },
    { 
      name: 'REST & GraphQL APIs', 
      level: 'Expert', 
      val: '92', 
      color: '#E10098',
      icon: <i className="fa-regular fa-network-wired" style={{ fontSize: '26px', color: '#E10098' }}></i> 
    },
    { 
      name: 'UI/UX Architecture', 
      level: 'Advanced', 
      val: '90', 
      color: '#FFD700',
      icon: <i className="fa-regular fa-object-group" style={{ fontSize: '26px', color: '#FFD700' }}></i> 
    },
  ];

  const experienceItems = [
    {
      step: 'CURRENT ROLE',
      role: 'Software Developer',
      company: 'Vizva Consultancy Services',
      location: 'Gurugram, India',
      date: 'July 2026 – Present',
      badgeColor: '#00a3ff',
      iconText: 'V',
      isCurrent: true,
      tags: ['React.js', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'],
      desc: 'Building scalable full-stack applications with React, Next.js, Node.js, Python, and FastAPI. Implementing AI integrations, automated data workflows, and optimizing PostgreSQL & MongoDB database queries.'
    },
    {
      step: 'INTERNSHIP',
      role: 'Full Stack Web Development Intern',
      company: 'AOSC Technologies India Pvt. Ltd.',
      location: 'Amritsar, India',
      date: 'Jan 2026 – June 2026',
      badgeColor: '#ea4335',
      iconText: 'A',
      isCurrent: false,
      tags: ['React.js', 'TypeScript', 'Node.js', 'UI Architecture', 'Performance Optimization'],
      desc: 'Engineered responsive interfaces and reusable type-safe React/TypeScript component libraries. Resolved database bottleneck queries and reduced initial page load speeds by 15%.'
    },
    {
      step: 'CO-FOUNDER',
      role: 'Web Developer & Co-Founder',
      company: 'MxNext.in',
      location: 'Amritsar, India',
      date: 'May 2023 – May 2024',
      badgeColor: '#06b6d4',
      iconText: 'M',
      isCurrent: false,
      tags: ['Full-Stack Web', 'Agency Lead', 'UI/UX Audits', 'Client Management'],
      desc: 'Co-founded web development agency delivering 5+ production sites for institutional clients including KCET and Sikh History Research Centre. Conducted audits boosting organic engagement.'
    },
    {
      step: 'TRAINEESHIP',
      role: 'Trainee – Web Designing & Development',
      company: 'Green Apple Media Solution',
      location: 'Amritsar, India',
      date: 'Sept 2023 – March 2024',
      badgeColor: '#47a248',
      iconText: 'G',
      isCurrent: false,
      tags: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design', 'UI/UX Architecture'],
      desc: 'Mastered web design fundamentals (HTML5, CSS3, JavaScript ES6+, UI/UX architecture) and built responsive web pages under senior software developer guidance.'
    }
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'profile' ? 'show active' : ''}`} id="profile" role="tabpanel">
      {/* Dynamic Keyframes for Pathway Animation */}
      <style>{`
        @keyframes pathwayLightBeam {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .pathway-beam {
          position: absolute;
          left: 23px;
          top: 0;
          width: 4px;
          height: 140px;
          background: linear-gradient(180deg, rgba(0, 163, 255, 0) 0%, #00a3ff 50%, #47a248 100%);
          box-shadow: 0 0 14px #00a3ff;
          border-radius: 4px;
          animation: pathwayLightBeam 3.5s linear infinite;
        }
      `}</style>

      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Introduce */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 p-4 p-md-5" style={{ borderRadius: '16px', background: '#10151f', border: '1px solid rgba(0, 163, 255, 0.25)' }}>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
              <i className="fa-regular fa-user me-2"></i> BIOGRAPHY & PROFILE
            </h4>
            <span style={{ fontSize: '11px', color: '#00e676', backgroundColor: 'rgba(0, 230, 118, 0.12)', padding: '3px 12px', borderRadius: '20px', border: '1px solid rgba(0, 230, 118, 0.3)', fontWeight: '600' }}>
              🟢 Available for Software Developer Roles
            </span>
          </div>

          <h1 style={{ fontSize: '28px', color: '#ffffff', fontWeight: '800', lineHeight: '1.3' }}>
            Hi, I'm <span style={{ color: '#00a3ff' }}>Mokarram Shahban</span> — <br />
            a <span style={{ color: '#00a3ff' }}>Software Developer</span> & AI Enthusiast.
          </h1>

          <p className="mt-3" style={{ fontSize: '15px', lineHeight: '1.7', color: '#a0a8b6' }}>
            Software Developer at <strong>Vizva Consultancy Services</strong> specializing in React, Next.js, Node.js, TypeScript, Python, and FastAPI. My track record spans full-stack engineering, co-founding a web agency, and performing official UI/UX audits for <strong>two Government of India departments</strong> (Jharkhand Transport & Legal Affairs).
          </p>

          {/* Hero Metadata Pills Box */}
          <div 
            className="d-flex flex-wrap align-items-center mt-4 p-3" 
            style={{ 
              gap: '10px', 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              borderRadius: '12px', 
              border: '1px solid rgba(255, 255, 255, 0.06)' 
            }}
          >
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              📍 Gurugram, India
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              🎓 B.Tech CSE (2022 – 2026)
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              🏆 2 Govt UI/UX Audits
            </span>
          </div>

          <div className="d-flex flex-wrap mt-4" style={{ gap: '12px' }}>
            <a 
              href="mailto:mokarramshahban.in@gmail.com" 
              className="btn px-4 py-2.5 d-inline-flex align-items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '13.5px',
                boxShadow: '0 4px 16px rgba(0, 163, 255, 0.35)',
                transition: 'transform 0.2s ease, boxShadow 0.2s ease'
              }}
            >
              Get In Touch Direct <i className="fa-regular fa-paper-plane"></i>
            </a>

            <div 
              onClick={() => setActiveTab && setActiveTab('projects')}
              role="button"
              tabIndex={0}
              className="btn px-4 py-2.5 d-inline-flex align-items-center gap-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(0, 163, 255, 0.3)',
                borderRadius: '10px',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '13.5px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s ease'
              }}
            >
              Explore All Projects <i className="fa-regular fa-arrow-right"></i>
            </div>
          </div>

          <div className="tmp-light light-left"></div>
        </div>

        {/* Skills Section - Modern Glass Cards */}
        <div className="mb--50 banner-personal-portfolio signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-solid fa-layer-group me-2"></i> TECHNICAL SPECIALIZATIONS
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Core Technical <span style={{ color: '#00a3ff' }}>Stack & Proficiency</span>
            </h2>
          </div>

          <div className="row g-3">
            {skills.map((skill, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div 
                  className="p-4 h-100 d-flex flex-column justify-content-between position-relative"
                  style={{
                    backgroundColor: '#10151f',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = skill.color;
                    e.currentTarget.style.boxShadow = `0 8px 24px ${skill.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: '44px', 
                          height: '44px', 
                          borderRadius: '12px', 
                          backgroundColor: `${skill.color}15`,
                          border: `1px solid ${skill.color}35`,
                          flexShrink: 0
                        }}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <h5 className="m-0" style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700' }}>{skill.name}</h5>
                        <span style={{ fontSize: '11px', color: '#8c96a5', fontWeight: '500' }}>{skill.level}</span>
                      </div>
                    </div>

                    <span 
                      style={{ 
                        fontSize: '12px', 
                        fontWeight: '800', 
                        color: skill.color,
                        backgroundColor: `${skill.color}18`,
                        border: `1px solid ${skill.color}40`,
                        padding: '3px 10px',
                        borderRadius: '8px'
                      }}
                    >
                      {skill.val}%
                    </span>
                  </div>

                  <div>
                    <div className="progress" style={{ height: '7px', backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ 
                          width: `${skill.val}%`, 
                          background: `linear-gradient(90deg, ${skill.color}88 0%, ${skill.color} 100%)`, 
                          boxShadow: `0 0 10px ${skill.color}66`,
                          borderRadius: '4px' 
                        }} 
                        aria-valuenow={skill.val} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="tmp-light light-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WORK EXPERIENCE PATHWAY */}
        <div className="mb--50 banner-personal-portfolio experience-style-list signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-briefcase me-2"></i> PROFESSIONAL CAREER PATHWAY
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Work Experience & <span style={{ color: '#00a3ff' }}>Career Journey</span>
            </h2>
          </div>

          {/* Animated Pathway Container for Experience */}
          <div className="position-relative ps-4 ps-md-5" style={{ minHeight: '350px' }}>
            
            {/* Pathway Vertical Connecting Line running from Node 1 down to bottom of Card 4 */}
            <div 
              className="position-absolute"
              style={{
                left: '24px',
                top: '23px',
                bottom: '14px',
                width: '2px',
                background: 'linear-gradient(180deg, #00a3ff 0%, rgba(0, 163, 255, 0.5) 60%, #47a248 100%)',
                zIndex: 1
              }}
            >
              <div className="pathway-beam"></div>
            </div>

            {/* Glowing Curved Elbow wrapping Card 4 bottom-left corner */}
            <div 
              className="position-absolute"
              style={{
                left: '24px',
                bottom: '0px',
                width: '24px',
                height: '24px',
                borderLeft: '2px solid #47a248',
                borderBottom: '2px solid #47a248',
                borderBottomLeftRadius: '16px',
                boxShadow: '-2px 2px 10px rgba(71, 162, 72, 0.4)',
                zIndex: 2
              }}
            ></div>

            <div className="d-flex flex-column" style={{ gap: '20px' }}>
              {experienceItems.map((item, index) => (
                <div key={index} className="position-relative d-flex align-items-start gap-3 gap-md-4">
                  
                  {/* Glowing Node Avatar */}
                  <div 
                    className="d-flex align-items-center justify-content-center position-relative"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: '#10151f',
                      border: `2px solid ${item.badgeColor}`,
                      boxShadow: item.isCurrent ? '0 0 16px rgba(0, 163, 255, 0.6)' : '0 0 10px rgba(0, 0, 0, 0.5)',
                      color: item.badgeColor,
                      fontWeight: '800',
                      fontSize: '15px',
                      zIndex: 5,
                      flexShrink: 0,
                      marginLeft: '-22px'
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 6 }}>{item.iconText}</span>

                    {item.isCurrent && (
                      <span 
                        className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"
                        style={{ boxShadow: '0 0 8px #00e676', zIndex: 7 }}
                      ></span>
                    )}
                  </div>

                  {/* Company Content Card */}
                  <div 
                    className="p-4 flex-grow-1 position-relative"
                    style={{
                      backgroundColor: '#10151f',
                      borderRadius: '16px',
                      border: item.isCurrent 
                        ? '1px solid rgba(0, 163, 255, 0.4)' 
                        : index === experienceItems.length - 1
                        ? '1px solid rgba(71, 162, 72, 0.4)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: item.isCurrent 
                        ? '0 6px 24px rgba(0, 163, 255, 0.12)' 
                        : index === experienceItems.length - 1
                        ? '0 6px 24px rgba(71, 162, 72, 0.1)'
                        : 'none',
                      transition: 'all 0.2s ease-in-out'
                    }}
                  >
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                      <div>
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span style={{ fontSize: '9px', backgroundColor: `${item.badgeColor}22`, color: item.badgeColor, padding: '2px 8px', borderRadius: '4px', fontWeight: '800', border: `1px solid ${item.badgeColor}40` }}>
                            {item.step}
                          </span>
                        </div>
                        <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', margin: 0 }}>{item.role}</h4>
                        <span style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '600' }}>
                          {item.company} — <span style={{ color: '#8c96a5', fontWeight: '400' }}>{item.location}</span>
                        </span>
                      </div>

                      <span style={{ fontSize: '11px', color: item.isCurrent ? '#00e676' : '#8c96a5', fontWeight: '600', backgroundColor: 'rgba(255, 255, 255, 0.04)', padding: '4px 12px', borderRadius: '20px', border: item.isCurrent ? '1px solid rgba(0, 230, 118, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)' }}>
                        {item.date}
                      </span>
                    </div>

                    <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: '10px 0 14px 0' }}>
                      {item.desc}
                    </p>

                    {/* Uniform Enclosed Tech Skill Box */}
                    <div 
                      className="d-flex flex-wrap align-items-center mt-3 p-2.5" 
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

                    <div className="tmp-light light-left"></div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DEDICATED ACADEMIC & EDUCATION HIGHLIGHT */}
        <div className="mb--50 banner-personal-portfolio experience-style-list signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#ffd700', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-graduation-cap me-2"></i> ACADEMIC FOUNDATION
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Degree & <span style={{ color: '#ffd700' }}>Education Milestone</span>
            </h2>
          </div>

          <div 
            className="p-4 p-md-5 position-relative"
            style={{
              backgroundColor: '#10151f',
              borderRadius: '16px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              boxShadow: '0 6px 24px rgba(255, 215, 0, 0.08)'
            }}
          >
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 215, 0, 0.15)',
                    color: '#ffd700',
                    border: '1px solid rgba(255, 215, 0, 0.4)',
                    fontSize: '24px',
                    flexShrink: 0
                  }}
                >
                  🎓
                </div>

                <div>
                  <span style={{ fontSize: '10px', backgroundColor: 'rgba(255, 215, 0, 0.2)', color: '#ffd700', padding: '2px 10px', borderRadius: '12px', fontWeight: '800', letterSpacing: '0.5px' }}>
                    ACADEMIC DEGREE
                  </span>
                  <h3 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '800', margin: '4px 0 2px 0' }}>
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <span style={{ color: '#00a3ff', fontSize: '14px', fontWeight: '600' }}>
                    Khalsa College of Engineering & Technology, Amritsar
                  </span>
                </div>
              </div>

              <span style={{ fontSize: '12px', color: '#ffd700', fontWeight: '700', backgroundColor: 'rgba(255, 215, 0, 0.12)', padding: '6px 16px', borderRadius: '20px', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
                2022 – 2026
              </span>
            </div>

            <p style={{ fontSize: '14px', color: '#a0a8b6', lineHeight: '1.7', margin: '14px 0 16px 0' }}>
              Specialized in modern full-stack web development, REST API design, algorithms, database systems, and software engineering architecture. Actively participated in technical leadership roles and national technology conferences.
            </p>

            {/* Academic Focus Badges Enclosed Box */}
            <div 
              className="d-flex flex-wrap align-items-center mt-3 p-2.5" 
              style={{ 
                gap: '8px', 
                backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                borderRadius: '10px', 
                border: '1px solid rgba(255, 255, 255, 0.05)' 
              }}
            >
              <span style={{ fontSize: '11px', color: '#ffd700', backgroundColor: 'rgba(255, 215, 0, 0.08)', padding: '5px 12px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)', fontWeight: '600' }}>
                💻 Data Structures & Algorithms
              </span>
              <span style={{ fontSize: '11px', color: '#ffd700', backgroundColor: 'rgba(255, 215, 0, 0.08)', padding: '5px 12px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)', fontWeight: '600' }}>
                🗄️ Database Systems (MongoDB & PostgreSQL)
              </span>
              <span style={{ fontSize: '11px', color: '#ffd700', backgroundColor: 'rgba(255, 215, 0, 0.08)', padding: '5px 12px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)', fontWeight: '600' }}>
                ⚡ Web Application Architecture
              </span>
              <span style={{ fontSize: '11px', color: '#ffd700', backgroundColor: 'rgba(255, 215, 0, 0.08)', padding: '5px 12px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)', fontWeight: '600' }}>
                🚀 Software Engineering Best Practices
              </span>
            </div>

            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* Achievements & Awards Section */}
        <div className="mb--50 banner-personal-portfolio experience-style-list signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-trophy me-2"></i> HONORS & AUDITS
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Key Achievements & <span style={{ color: '#00a3ff' }}>Govt Audits</span>
            </h2>
          </div>

          <div className="row g-4">
            {/* Card 1: Govt Audits */}
            <div className="col-lg-4 col-md-6 col-12">
              <div 
                className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden" 
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 163, 255, 0.06) 0%, #10151f 100%)', 
                  borderRadius: '18px', 
                  border: '1px solid rgba(0, 163, 255, 0.3)', 
                  boxShadow: '0 6px 20px rgba(0, 163, 255, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#00a3ff';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 163, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.08)';
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div 
                      className="d-flex align-items-center justify-content-center" 
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '14px', 
                        backgroundColor: 'rgba(0, 163, 255, 0.15)', 
                        color: '#00a3ff', 
                        fontSize: '22px', 
                        border: '1px solid rgba(0, 163, 255, 0.4)',
                        boxShadow: '0 0 16px rgba(0, 163, 255, 0.25)'
                      }}
                    >
                      <i className="fa-regular fa-landmark"></i>
                    </div>
                    <span style={{ fontSize: '11px', backgroundColor: 'rgba(0, 163, 255, 0.15)', color: '#61dafb', padding: '4px 12px', borderRadius: '20px', fontWeight: '700', border: '1px solid rgba(0, 163, 255, 0.35)', letterSpacing: '0.5px' }}>
                      🏛️ GOVT AUDITOR
                    </span>
                  </div>

                  <h5 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', margin: '0 0 4px 0' }}>Govt UI/UX Audits</h5>
                  <span style={{ fontSize: '12.5px', color: '#00a3ff', fontWeight: '600', display: 'block', marginBottom: '12px' }}>Jharkhand Transport & Legal Depts</span>
                  <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                    Conducted comprehensive UI/UX audits directly for two Government of India departments, optimizing citizen portal accessibility and user flows.
                  </p>
                </div>

                <div 
                  className="d-flex align-items-center justify-content-center mt-4 py-2 px-3" 
                  style={{ 
                    gap: '8px', 
                    backgroundColor: 'rgba(0, 163, 255, 0.12)', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(0, 163, 255, 0.3)',
                    fontSize: '12px',
                    color: '#70c8ff',
                    fontWeight: '700'
                  }}
                >
                  <i className="fa-regular fa-check-circle" style={{ color: '#00a3ff' }}></i>
                  <span>2 Government Portals Audited</span>
                </div>

                <div className="tmp-light light-left"></div>
              </div>
            </div>

            {/* Card 2: Best Poster Award */}
            <div className="col-lg-4 col-md-6 col-12">
              <div 
                className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden" 
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, #10151f 100%)', 
                  borderRadius: '18px', 
                  border: '1px solid rgba(255, 215, 0, 0.3)', 
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#ffd700';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.08)';
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div 
                      className="d-flex align-items-center justify-content-center" 
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '14px', 
                        backgroundColor: 'rgba(255, 215, 0, 0.15)', 
                        color: '#ffd700', 
                        fontSize: '22px', 
                        border: '1px solid rgba(255, 215, 0, 0.4)',
                        boxShadow: '0 0 16px rgba(255, 215, 0, 0.25)'
                      }}
                    >
                      <i className="fa-regular fa-award"></i>
                    </div>
                    <span style={{ fontSize: '11px', backgroundColor: 'rgba(255, 215, 0, 0.15)', color: '#ffd700', padding: '4px 12px', borderRadius: '20px', fontWeight: '700', border: '1px solid rgba(255, 215, 0, 0.35)', letterSpacing: '0.5px' }}>
                      🏆 NATIONAL AWARD
                    </span>
                  </div>

                  <h5 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', margin: '0 0 4px 0' }}>Best Poster Award</h5>
                  <span style={{ fontSize: '12.5px', color: '#ffd700', fontWeight: '600', display: 'block', marginBottom: '12px' }}>KCET National Conferences (2024 & 2025)</span>
                  <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                    Honored with Best Poster Presentation at National Conferences focusing on Women-Centric Laws and Technology & Tradition.
                  </p>
                </div>

                <div 
                  className="d-flex align-items-center justify-content-center mt-4 py-2 px-3" 
                  style={{ 
                    gap: '8px', 
                    backgroundColor: 'rgba(255, 215, 0, 0.12)', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    fontSize: '12px',
                    color: '#ffd700',
                    fontWeight: '700'
                  }}
                >
                  <i className="fa-regular fa-trophy" style={{ color: '#ffd700' }}></i>
                  <span>National Conference 1st Prize</span>
                </div>

                <div className="tmp-light light-left"></div>
              </div>
            </div>

            {/* Card 3: Tech Urja Lead */}
            <div className="col-lg-4 col-md-6 col-12">
              <div 
                className="p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden" 
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 230, 118, 0.06) 0%, #10151f 100%)', 
                  borderRadius: '18px', 
                  border: '1px solid rgba(0, 230, 118, 0.3)', 
                  boxShadow: '0 6px 20px rgba(0, 230, 118, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = '#00e676';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 230, 118, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(0, 230, 118, 0.3)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 230, 118, 0.08)';
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div 
                      className="d-flex align-items-center justify-content-center" 
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        borderRadius: '14px', 
                        backgroundColor: 'rgba(0, 230, 118, 0.15)', 
                        color: '#00e676', 
                        fontSize: '22px', 
                        border: '1px solid rgba(0, 230, 118, 0.4)',
                        boxShadow: '0 0 16px rgba(0, 230, 118, 0.25)'
                      }}
                    >
                      <i className="fa-regular fa-users"></i>
                    </div>
                    <span style={{ fontSize: '11px', backgroundColor: 'rgba(0, 230, 118, 0.15)', color: '#00e676', padding: '4px 12px', borderRadius: '20px', fontWeight: '700', border: '1px solid rgba(0, 230, 118, 0.35)', letterSpacing: '0.5px' }}>
                      👥 1,200+ LEAD
                    </span>
                  </div>

                  <h5 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '800', margin: '0 0 4px 0' }}>Tech Urja Lead Organiser</h5>
                  <span style={{ fontSize: '12.5px', color: '#00e676', fontWeight: '600', display: 'block', marginBottom: '12px' }}>1,200+ Event Sign-ups Managed</span>
                  <p style={{ fontSize: '13.5px', color: '#9098a8', lineHeight: '1.6', margin: 0 }}>
                    Led overall event operations and digital registration portal architectures for annual technical and cultural flagship festivals.
                  </p>
                </div>

                <div 
                  className="d-flex align-items-center justify-content-center mt-4 py-2 px-3" 
                  style={{ 
                    gap: '8px', 
                    backgroundColor: 'rgba(0, 230, 118, 0.12)', 
                    borderRadius: '10px', 
                    border: '1px solid rgba(0, 230, 118, 0.3)',
                    fontSize: '12px',
                    color: '#00e676',
                    fontWeight: '700'
                  }}
                >
                  <i className="fa-regular fa-user-group" style={{ color: '#00e676' }}></i>
                  <span>1,200+ Festival Participants</span>
                </div>

                <div className="tmp-light light-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Banner Card */}
        <div className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section">
          <div className="p-4 p-md-5 text-center position-relative" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #10151f 0%, #17202e 100%)', border: '1px solid rgba(0, 163, 255, 0.3)' }}>
            <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '800', marginBottom: '6px' }}>Let's Build Something Amazing Together!</h3>
            <p style={{ color: '#9098a8', fontSize: '14px', maxWidth: '600px', margin: '0 auto 20px auto' }}>
              Have a full-stack web project, backend architecture, or AI integration opportunity? I'm available for engineering roles and collaborations.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a 
                href="mailto:mokarramshahban.in@gmail.com" 
                className="btn btn-primary px-4 py-2.5"
                style={{
                  background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Send Email <i className="fa-regular fa-envelope ms-2"></i>
              </a>

              <a 
                href="https://www.linkedin.com/in/mokarram-shahban/" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline-light px-4 py-2.5"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                LinkedIn Profile <i className="fa-brands fa-linkedin ms-2"></i>
              </a>
            </div>
            <div className="tmp-light light-center"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
