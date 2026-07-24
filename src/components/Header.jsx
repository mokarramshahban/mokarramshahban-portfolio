import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'fa-light fa-house-chimney' },
    { id: 'profile', label: 'About', icon: 'fa-regular fa-user' },
    { id: 'projects', label: 'Projects', icon: 'fa-regular fa-code-branch' },
    { id: 'service', label: 'Services', icon: 'fa-regular fa-layer-group' },
    { id: 'contactme', label: 'Contact', icon: 'fa-regular fa-envelope' },
  ];

  return (
    <>
      {/* Mobile Top Header Bar: Provides immediate Brand Context & Quick Contact on small screens */}
      <div 
        className="mobile-top-header d-flex d-md-none justify-content-between align-items-center px-3 py-2 position-sticky top-0"
        style={{
          backgroundColor: 'rgba(15, 20, 30, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          zIndex: 9990,
          top: 0
        }}
      >
        <a 
          className="d-flex align-items-center gap-2" 
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
          style={{ textDecoration: 'none' }}
        >
          <div 
            className="d-flex align-items-center justify-content-center" 
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '16px'
            }}
          >
            M
          </div>
          <span style={{ fontWeight: '700', fontSize: '16px', color: '#ffffff', letterSpacing: '-0.3px' }}>
            Mokarram <span style={{ color: '#00a3ff' }}>Shahban</span>
          </span>
        </a>

        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); setActiveTab('contactme'); }}
          style={{
            backgroundColor: 'rgba(0, 163, 255, 0.15)',
            border: '1px solid rgba(0, 163, 255, 0.4)',
            color: '#00a3ff',
            borderRadius: '20px',
            padding: '5px 14px',
            fontSize: '12px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          Let's Talk 💬
        </a>
      </div>

      {/* Main Desktop & Floating Mobile Bottom Header */}
      <header className="header-area-bentogrid">
        <nav className="navbar">
          <div className="container">
            <div className="menu-container tmponhover single-animation active">
              
              {/* Custom Modern Brand Logo */}
              <div className="logo">
                <a 
                  className="navbar-brand me-0 d-flex align-items-center gap-2" 
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="brand-logo-icon d-flex align-items-center justify-content-center" 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                      boxShadow: '0 0 15px rgba(0, 163, 255, 0.4)',
                      color: '#ffffff',
                      fontWeight: '800',
                      fontSize: '18px',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    M
                  </div>
                  <span style={{ 
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
                    fontWeight: '700', 
                    fontSize: '20px', 
                    color: '#ffffff',
                    letterSpacing: '-0.5px'
                  }}>
                    Mokarram <span style={{ color: '#00a3ff' }}>Shahban</span>
                  </span>
                </a>
              </div>

              <div className="navbar-main d-flex flex-grow-1">
                <ul className="navbar-info m-auto border-none nav nav-tabs" id="myTab" role="tablist">
                  {tabs.map((tab) => (
                    <li key={tab.id} className="nav-item">
                      <a
                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                        id={`${tab.id}-tab`}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        <i className={`${tab.icon} nav-icon`}></i>
                        <span>{tab.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="header-right-info d-flex align-items-center">
                  <a 
                    className="tmp-btn hover-icon-reverse btn-border tmp-modern-button download-icon w-100 btn-md"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab('contactme');
                    }}
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Let's Talk</span>
                      <div className="btn-hack"></div>
                      <img src="assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                      <img src="assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                      <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="tmp-light light-center-center"></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
