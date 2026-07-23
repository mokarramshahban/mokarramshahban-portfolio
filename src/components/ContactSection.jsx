import React, { useState } from 'react';

export default function ContactSection({ activeTab }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mokarramshahban.in@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mokarramshahban.in@gmail.com";
  };

  const contactItems = [
    {
      title: 'Direct Email',
      value: 'mokarramshahban.in@gmail.com',
      icon: 'fa-regular fa-envelope',
      link: 'mailto:mokarramshahban.in@gmail.com',
      btnText: 'Send',
      isEmail: true,
      onClick: handleSendEmail
    },
    {
      title: 'GitHub',
      value: 'mokarramshahban',
      icon: 'fa-brands fa-github',
      link: 'https://github.com/mokarramshahban',
      btnText: 'View GitHub'
    },
    {
      title: 'LinkedIn',
      value: 'Mokarram Shahban',
      icon: 'fa-brands fa-linkedin-in',
      link: 'https://linkedin.com',
      btnText: 'Connect'
    },
    {
      title: 'Location',
      value: 'Gurugram, India',
      icon: 'fa-regular fa-location-dot',
      link: 'https://maps.google.com/?q=Gurugram,India',
      btnText: 'Gurugram / NCR'
    }
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'contactme' ? 'show active' : ''}`} id="contactme" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Card Header */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 pb--50 pt--30">
          <div className="section-header">
            <h4 className="subtitle theme-gradient">
              <i className="fa-regular fa-envelope"></i> GET IN TOUCH
            </h4>
            <h1>Let's Connect & <strong><span className="theme-gradient">Work Together!</span></strong></h1>
            <p>I am available for full-stack software development roles, AI integrations, freelance projects, and consultations.</p>
          </div>
          <div className="tmp-light light-left"></div>
          <div className="separator-animated-border border-top-footer animated-true" style={{ width: '100%' }}></div>
          <div className="separator-animated-border animated-true" style={{ width: '100%' }}></div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section">
          <div className="row g-4">
            {contactItems.map((item, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-12" key={index}>
                <div className="contact-card-subtle p-4 d-flex flex-column justify-content-between h-100">
                  <div>
                    <div className="d-flex align-items-center gap-3 mb--20">
                      <div className="contact-icon-box">
                        <i className={`${item.icon}`} style={{ fontSize: '20px', color: '#00a3ff' }}></i>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h5 className="mb--2" style={{ color: '#8c96a5', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: '600' }}>{item.title}</h5>
                        {item.isEmail ? (
                          <a href="mailto:mokarramshahban.in@gmail.com" className="mb-0 text-truncate d-block contact-value-link">
                            {item.value}
                          </a>
                        ) : (
                          <h4 className="mb-0 text-truncate" style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}>{item.value}</h4>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <button 
                      onClick={(e) => {
                        if (item.onClick) {
                          item.onClick(e);
                        } else {
                          window.open(item.link, '_blank');
                        }
                      }}
                      className="contact-card-action-btn flex-grow-1"
                    >
                      <span>{item.btnText}</span>
                      <i className="fa-regular fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </button>
                    {item.isEmail && (
                      <button 
                        onClick={handleCopyEmail}
                        className="contact-card-action-btn contact-copy-btn"
                      >
                        <i className="fa-regular fa-copy" style={{ fontSize: '11px' }}></i>
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
