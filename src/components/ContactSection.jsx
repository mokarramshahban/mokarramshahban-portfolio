import React, { useState } from 'react';

export default function ContactSection({ activeTab }) {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState('Full-Stack App');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Project Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const triggerMailto = (url) => {
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = url;
      document.body.appendChild(iframe);
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 1000);
    } catch {
      window.location.assign(url);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mokarramshahban.in@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[${projectType}] ${formData.subject} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Sender Name: ${formData.name}\nSender Email: ${formData.email}\nProject Category: ${projectType}\n\nMessage Details:\n${formData.message}`);
    triggerMailto(`mailto:mokarramshahban.in@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const contactItems = [
    {
      title: 'Direct Email',
      value: 'mokarramshahban.in@gmail.com',
      icon: 'fa-regular fa-envelope',
      link: 'mailto:mokarramshahban.in@gmail.com',
      btnText: 'Send Email',
      color: '#00a3ff',
      glowRgb: '0, 163, 255',
      isEmail: true,
      badge: 'PRIMARY CONTACT'
    },
    {
      title: 'LinkedIn Network',
      value: 'linkedin.com/in/mokarram-shahban',
      icon: 'fa-brands fa-linkedin-in',
      link: 'https://www.linkedin.com/in/mokarram-shahban/',
      btnText: 'Connect on LinkedIn',
      color: '#0077b5',
      glowRgb: '0, 119, 181',
      badge: 'PROFESSIONAL'
    },
    {
      title: 'GitHub Profile',
      value: 'github.com/mokarramshahban',
      icon: 'fa-brands fa-github',
      link: 'https://github.com/mokarramshahban',
      btnText: 'Explore 29+ Repos',
      color: '#ffffff',
      glowRgb: '255, 255, 255',
      badge: 'OPEN SOURCE'
    },
    {
      title: 'Instagram Handle',
      value: '@mokarramshahban.in',
      icon: 'fa-brands fa-instagram',
      link: 'https://www.instagram.com/mokarramshahban.in/',
      btnText: 'Follow on Instagram',
      color: '#e1306c',
      glowRgb: '225, 48, 108',
      badge: 'SOCIAL'
    },
    {
      title: 'Location & Base',
      value: 'Gurugram, Haryana, India',
      icon: 'fa-regular fa-location-dot',
      link: 'https://maps.google.com/?q=Gurugram,India',
      btnText: 'Gurugram / Delhi NCR',
      color: '#00e676',
      glowRgb: '0, 230, 118',
      badge: 'LOCATION'
    }
  ];

  const projectTypes = [
    { id: 'fullstack', label: '💻 Full-Stack Web App' },
    { id: 'ai', label: '🧠 AI Feature Integration' },
    { id: 'backend', label: '⚡ REST API & DB' },
    { id: 'hire', label: '💼 Software Dev Hire' },
    { id: 'other', label: '💬 Other / General Inquiry' }
  ];

  return (
    <div className={`tab-pane fade pl--30 pl_md--10 pl_sm--10 ${activeTab === 'contactme' ? 'show active' : ''}`} id="contactme" role="tabpanel">
      <div className="personal-portfolio-right-inner-wrapper mt--50 about-tab in-bentogrid">
        
        {/* Banner Card Header */}
        <div className="banner-personal-portfolio tmponhover paralax-image tmp-card-body with-bento-about-banner tmp-profile-card position-relative mb--30 p-4 p-md-5" style={{ borderRadius: '16px', background: '#10151f', border: '1px solid rgba(0, 163, 255, 0.25)' }}>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h4 className="subtitle theme-gradient m-0" style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>
              <i className="fa-regular fa-paper-plane me-2"></i> GET IN TOUCH
            </h4>
            <span style={{ fontSize: '11px', color: '#00e676', backgroundColor: 'rgba(0, 230, 118, 0.12)', padding: '4px 14px', borderRadius: '20px', border: '1px solid rgba(0, 230, 118, 0.3)', fontWeight: '600' }}>
              🟢 Available for Software Developer Roles
            </span>
          </div>

          <h1 style={{ fontSize: '28px', color: '#ffffff', fontWeight: '800', lineHeight: '1.3' }}>
            Let's Connect & <span style={{ color: '#00a3ff' }}>Build Extraordinary Software</span>
          </h1>

          <p className="mt-3" style={{ fontSize: '15px', lineHeight: '1.7', color: '#a0a8b6' }}>
            Available for full-stack software developer roles, AI feature integrations, database architecture, and technical consulting.
          </p>

          {/* Quick Contact Specs Strip */}
          <div className="d-flex flex-wrap align-items-center mt-4 p-3" style={{ gap: '10px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              📍 Gurugram, NCR, India
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              ⚡ 100% Response Rate • Under 24h
            </span>
            <span style={{ fontSize: '12px', color: '#70c8ff', backgroundColor: 'rgba(0, 163, 255, 0.08)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(0, 163, 255, 0.25)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              ✉️ Direct Mail & LinkedIn Active
            </span>
          </div>

          <div className="tmp-light light-left"></div>
        </div>

        {/* Contact Method Cards Grid with Interactive Glowing Hover */}
        <div className="mb--40 banner-personal-portfolio signle-section">
          <div className="section-header pb--30">
            <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
              <i className="fa-regular fa-address-book me-2"></i> DIRECT CHANNELS
            </h4>
            <h2 className="title" style={{ fontSize: '24px', color: '#ffffff', fontWeight: '700' }}>
              Connect Via <span style={{ color: '#00a3ff' }}>Preferred Platform</span>
            </h2>
          </div>

          <div className="row g-4">
            {contactItems.map((item, index) => (
              <div className={index === 0 ? "col-12" : "col-lg-6 col-12"} key={index}>
                <div 
                  className="p-4 h-100 d-flex flex-column justify-content-between position-relative"
                  style={{
                    backgroundColor: '#10151f',
                    borderRadius: '16px',
                    border: `1px solid rgba(${item.glowRgb}, 0.25)`,
                    boxShadow: item.isEmail ? `0 4px 20px rgba(${item.glowRgb}, 0.12)` : 'none',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 8px 26px rgba(${item.glowRgb}, 0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = `rgba(${item.glowRgb}, 0.25)`;
                    e.currentTarget.style.boxShadow = item.isEmail ? `0 4px 20px rgba(${item.glowRgb}, 0.12)` : 'none';
                  }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center gap-3">
                        <div 
                          className="d-flex align-items-center justify-content-center" 
                          style={{ 
                            width: '48px', 
                            height: '48px', 
                            borderRadius: '12px', 
                            backgroundColor: `${item.color}15`, 
                            border: `1px solid ${item.color}35`, 
                            color: item.color, 
                            fontSize: '22px',
                            transition: 'transform 0.2s ease'
                          }}
                        >
                          <i className={item.icon}></i>
                        </div>
                        <div>
                          <span style={{ fontSize: '10px', backgroundColor: `${item.color}18`, color: item.color, padding: '2px 8px', borderRadius: '4px', fontWeight: '800', border: `1px solid ${item.color}35` }}>
                            {item.badge}
                          </span>
                          <h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', margin: '4px 0 0 0' }}>{item.title}</h5>
                        </div>
                      </div>

                      <span style={{ color: '#9098a8', fontSize: '13px', fontWeight: '600' }}>
                        {item.value}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons without outline box */}
                  <div className="d-flex gap-2 mt-3" style={{ gap: '10px' }}>
                    {item.isEmail ? (
                      <button
                        onClick={() => triggerMailto(item.link)}
                        className="btn flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 py-2.5"
                        style={{
                          background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                          border: 'none',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontWeight: '700',
                          fontSize: '13.5px',
                          boxShadow: '0 4px 14px rgba(0, 163, 255, 0.3)',
                          transition: 'all 0.2s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 163, 255, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 163, 255, 0.3)';
                        }}
                      >
                        <span>{item.btnText}</span>
                        <i className="fa-regular fa-paper-plane" style={{ fontSize: '12px' }}></i>
                      </button>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2 py-2.5"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          fontWeight: '600',
                          fontSize: '13.5px',
                          transition: 'all 0.2s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.12)';
                          e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.4)';
                          e.currentTarget.style.color = '#70c8ff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span>{item.btnText}</span>
                        <i className="fa-regular fa-arrow-right" style={{ fontSize: '11px', transition: 'transform 0.2s ease' }}></i>
                      </a>
                    )}

                    {item.isEmail && (
                      <button
                        onClick={handleCopyEmail}
                        className="btn px-4 py-2.5 d-inline-flex align-items-center gap-2"
                        style={{
                          backgroundColor: 'rgba(0, 163, 255, 0.12)',
                          border: '1px solid rgba(0, 163, 255, 0.3)',
                          borderRadius: '10px',
                          color: '#00a3ff',
                          fontWeight: '600',
                          fontSize: '13px',
                          transition: 'all 0.2s ease-in-out'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.25)';
                          e.currentTarget.style.borderColor = '#00a3ff';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(0, 163, 255, 0.12)';
                          e.currentTarget.style.borderColor = 'rgba(0, 163, 255, 0.3)';
                          e.currentTarget.style.color = '#00a3ff';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="fa-regular fa-copy" style={{ fontSize: '12px' }}></i>
                        <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                      </button>
                    )}
                  </div>

                  <div className="tmp-light light-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Direct Message Form */}
        <div className="mb--50 banner-personal-portfolio signle-section">
          <div className="p-4 p-md-5 position-relative" style={{ backgroundColor: '#10151f', borderRadius: '16px', border: '1px solid rgba(0, 163, 255, 0.25)', boxShadow: '0 6px 24px rgba(0, 0, 0, 0.3)' }}>
            <div className="section-header mb-4">
              <h4 className="subtitle" style={{ color: '#00a3ff', fontSize: '13px', fontWeight: '700' }}>
                <i className="fa-regular fa-paper-plane me-2"></i> DIRECT INQUIRY FORM
              </h4>
              <h2 className="title" style={{ fontSize: '22px', color: '#ffffff', fontWeight: '700' }}>
                Send A Direct <span style={{ color: '#00a3ff' }}>Message</span>
              </h2>
              <p style={{ color: '#9098a8', fontSize: '14px', margin: '4px 0 0 0' }}>
                Select your project category and enter details below to initiate a direct collaboration or software developer inquiry.
              </p>
            </div>

            {/* Interactive Project Type Selector Pills */}
            <div className="mb-4">
              <label style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', marginBottom: '8px', display: 'block' }}>
                Select Category / Interest:
              </label>
              <div className="d-flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setProjectType(type.label)}
                    role="button"
                    tabIndex={0}
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: projectType === type.label ? 'rgba(0, 163, 255, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                      color: projectType === type.label ? '#00a3ff' : '#9098a8',
                      border: projectType === type.label ? '1px solid #00a3ff' : '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {type.label}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="row g-3">
                <div className="col-md-6 col-12">
                  <label style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Your Name</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        padding: '10px 14px 10px 38px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#00a3ff'; e.target.style.boxShadow = '0 0 10px rgba(0, 163, 255, 0.2)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <i className="fa-regular fa-user position-absolute top-50 start-0 translate-middle-y ms-3" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <label style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Your Email</label>
                  <div className="position-relative">
                    <input 
                      type="email" 
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        padding: '10px 14px 10px 38px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#00a3ff'; e.target.style.boxShadow = '0 0 10px rgba(0, 163, 255, 0.2)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <i className="fa-regular fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                </div>

                <div className="col-12">
                  <label style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Inquiry Title</label>
                  <div className="position-relative">
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Building Next.js Web App / Developer Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '10px',
                        padding: '10px 14px 10px 38px',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                      onFocus={(e) => { e.target.style.borderColor = '#00a3ff'; e.target.style.boxShadow = '0 0 10px rgba(0, 163, 255, 0.2)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                    <i className="fa-regular fa-tag position-absolute top-50 start-0 translate-middle-y ms-3" style={{ color: '#00a3ff', fontSize: '14px' }}></i>
                  </div>
                </div>

                <div className="col-12">
                  <label style={{ color: '#ffffff', fontSize: '12px', fontWeight: '600', marginBottom: '6px', display: 'block' }}>Message Details</label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="Describe project goals, timeline, or engineering role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      padding: '12px 14px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#00a3ff'; e.target.style.boxShadow = '0 0 10px rgba(0, 163, 255, 0.2)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.boxShadow = 'none'; }}
                  ></textarea>
                </div>

                <div className="col-12 mt-3 d-flex align-items-center gap-3">
                  <button
                    type="submit"
                    className="btn px-5 py-3 d-inline-flex align-items-center gap-2"
                    style={{
                      background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                      border: 'none',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '14px',
                      boxShadow: '0 4px 16px rgba(0, 163, 255, 0.35)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Launch Direct Email</span>
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>

                  {submitted && (
                    <span className="text-success fw-bold" style={{ fontSize: '13px' }}>
                      ✓ Mail app triggered cleanly!
                    </span>
                  )}
                </div>
              </div>
            </form>
            <div className="tmp-light light-right"></div>
          </div>
        </div>

        {/* Communication Privacy Notice */}
        <div className="contact-area-left-portfolio-fixed finance banner-personal-portfolio signle-section">
          <div className="p-4 text-center position-relative" style={{ borderRadius: '14px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <p style={{ color: '#8c96a5', fontSize: '12.5px', margin: 0 }}>
              🔒 <strong>Communication Note:</strong> Mobile number is not publicly listed to prevent spam calls. You can connect directly via Email, LinkedIn, GitHub, or Instagram for prompt response!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
