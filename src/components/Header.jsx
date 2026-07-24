import React from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'fa-light fa-house-chimney' },
    { id: 'profile', label: 'About', icon: 'fa-regular fa-user' },
    { id: 'service', label: 'Services', icon: 'fa-regular fa-layer-group' },
    { id: 'contactme', label: 'Contact', icon: 'fa-regular fa-envelope' },
  ];

  return (
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
              <div className="logo inner-logo d-block d-xl-none">
                <a className="navbar-brand me-0" href="#" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z" className="logo-icon"></path>
                  </svg>
                </a>
              </div>
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
  );
}
