import React from 'react';

export default function ServicesSection({ activeTab }) {
  const services = [
    { 
      title: 'Full Stack Web Development', 
      icon: 'fa-regular fa-code', 
      desc: 'Building scalable, high-performance web applications using React 19, Next.js, Node.js, Python, and FastAPI.' 
    },
    { 
      title: 'AI Feature Integration', 
      icon: 'fa-regular fa-brain', 
      desc: 'Incorporating AI-powered features, intelligent data processing, and LLM API integrations into modern web applications.' 
    },
    { 
      title: 'API & Database Architecture', 
      icon: 'fa-regular fa-server', 
      desc: 'Designing high-throughput REST APIs and optimized database schemas across MongoDB and PostgreSQL for speed and scale.' 
    },
    { 
      title: 'UI/UX Audits & Optimization', 
      icon: 'fa-regular fa-object-group', 
      desc: 'Comprehensive UI/UX audits and accessibility enhancements, tested directly for Government of India departments.' 
    },
    { 
      title: 'Institutional Portals & Systems', 
      icon: 'fa-regular fa-building-columns', 
      desc: 'Digitizing complex workflows for 1,000+ institutional users, event management (Luma API), and custom web platforms.' 
    },
    { 
      title: 'Performance & Speed Tuning', 
      icon: 'fa-regular fa-gauge-high', 
      desc: 'Refactoring legacy codebases, optimizing SEO, and resolving performance bottlenecks to improve load speeds by 15% – 40%.' 
    },
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'service' ? 'show active' : ''}`} id="service" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Card Header */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 pb--50 pt--30">
          <div className="section-header">
            <h4 className="subtitle theme-gradient">
              <i className="fa-solid fa-layer-group"></i> MY SERVICES
            </h4>
            <h1>My <strong><span className="theme-gradient">Specializations</span></strong></h1>
            <p>Providing end-to-end full-stack software development, AI integrations, API architecture, and UI/UX optimization.</p>
          </div>
          <div className="tmp-light light-left"></div>
          <div className="separator-animated-border border-top-footer animated-true" style={{ width: '100%' }}></div>
          <div className="separator-animated-border animated-true" style={{ width: '100%' }}></div>
        </div>

        {/* Services Grid */}
        <div className="tmp-service-area tmp-section-gapBottom banner-personal-portfolio signle-section">
          <div className="row g-5 service-wrapper animation-action-3">
            {services.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
                <div className="service service__style--1 bg-color-card service-narrow radius text-center tmp-border-none tmponhover single-animation h-100 d-flex flex-column justify-content-between p-4">
                  <div className="content">
                    <div className="icon mb--20" style={{ fontSize: '32px', color: 'var(--color-primary)' }}>
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="title w-600 mb--15">
                      <a href="javascript:void(0)" style={{ color: '#ffffff', fontSize: '18px' }}>{item.title}</a>
                    </h4>
                    <p className="description mb--0" style={{ fontSize: '14px', lineHeight: '1.6', color: '#a0a8b6' }}>{item.desc}</p>
                  </div>
                  <div className="discover-btn mt--25">
                    <a className="tmp-btn hover-icon-reverse btn-border btn-sm tmp-modern-button download-icon w-100" href="javascript:void(0)">
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Learn More</span>
                        <div className="btn-hack"></div>
                        <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                        <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      </div>
                    </a>
                  </div>
                  <div className="tmp-light light-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
