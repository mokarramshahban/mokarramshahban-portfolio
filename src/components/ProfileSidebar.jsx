import React, { useState } from 'react';
import { usePersonalization } from '../context/PersonalizationContext';

export default function ProfileSidebar({ setActiveTab, activeTab }) {
  const [copied, setCopied] = useState(false);
  const { themeConfig, persona } = usePersonalization();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mokarramshahban.in@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className={`col-xl-4 ${activeTab === 'home' ? '' : 'd-none d-xl-block'}`}>
      <div 
        className="tmp-profile-card with-sticky profile-picture-area mt-0 paralax-image tmponhover single-animation animation-order-1 active" 
        style={{
          backgroundColor: '#0c1017',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--persona-accent-soft)',
          padding: '28px 22px 22px 22px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="tmp-card-body p-0">
          
          {/* Avatar Profile Image Container */}
          <div 
            className="profile-avatar-wrap position-relative mx-auto mt-2 mb-3 text-center"
            style={{
              width: '100%',
              maxWidth: '280px',
              borderRadius: '20px',
              padding: '3px',
              background: 'var(--persona-gradient)',
              boxShadow: '0 10px 30px var(--persona-accent-glow), 0 0 15px var(--persona-accent-soft)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <img 
              src="assets/images/banner/ms-profile-dark.jpg" 
              alt="Mokarram Shahban Profile" 
              style={{
                borderRadius: '17px',
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />

            {/* Online Status Pill Badge on Avatar */}
            <div 
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: 'rgba(10, 15, 24, 0.85)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                padding: '4px 10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              }}
            >
              <span 
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 6px #10b981',
                  animation: 'statusPulse 2s ease-in-out infinite',
                }} 
              />
              <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#10b981', letterSpacing: '0.3px' }}>
                Online
              </span>
            </div>
          </div>

          {/* Name & Bio Description */}
          <div className="text-center">
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '4px' }}>
              Mokarram <span style={{ background: 'var(--persona-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'background 0.5s ease' }}>Shahban</span>
            </h3>

            {/* Role Tag */}
            <div className="mb-2">
              <span 
                style={{ 
                  fontSize: '11.5px', 
                  fontWeight: '700', 
                  color: 'var(--persona-accent)', 
                  backgroundColor: 'var(--persona-accent-soft)',
                  border: '1px solid var(--persona-accent-border)',
                  padding: '3px 12px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  letterSpacing: '0.2px',
                }}
              >
                Software Developer
              </span>
            </div>

            <p style={{ fontSize: '13px', color: '#a0a8c0', lineHeight: '1.5', marginBottom: '16px', padding: '0 4px' }}>
              Building high-performance, AI-integrated & scalable web applications. Experienced with Govt audits & React/Next.js architectures.
            </p>

            {/* Bento Quick Stats Row */}
            <div className="d-flex justify-content-between gap-2 mb-3">
              <div 
                className="flex-grow-1 p-2 text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff' }}>29+</div>
                <div style={{ fontSize: '10.5px', color: '#8a95b0', fontWeight: '600' }}>Projects</div>
              </div>
              <div 
                className="flex-grow-1 p-2 text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--persona-accent)' }}>2+</div>
                <div style={{ fontSize: '10.5px', color: '#8a95b0', fontWeight: '600' }}>Govt Audits</div>
              </div>
              <div 
                className="flex-grow-1 p-2 text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#10b981' }}>1.2k+</div>
                <div style={{ fontSize: '10.5px', color: '#8a95b0', fontWeight: '600' }}>Fest Attendees</div>
              </div>
            </div>

            {/* Interactive Quick Copy Email Card */}
            <div 
              className="email-copy-box p-3 mb-3 d-flex align-items-center justify-content-between"
              onClick={handleCopyEmail}
              title="Click to copy email address"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
            >
              <div className="d-flex align-items-center gap-2 overflow-hidden me-2">
                <i className="fa-regular fa-envelope" style={{ color: 'var(--persona-accent)', fontSize: '15px' }} />
                <span style={{ fontSize: '12.5px', color: '#d0d8e8', fontWeight: '600', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  mokarramshahban.in@gmail.com
                </span>
              </div>
              <span 
                style={{ 
                  fontSize: '11.5px', 
                  color: copied ? '#10b981' : 'var(--persona-accent)', 
                  fontWeight: '700', 
                  flexShrink: 0,
                  transition: 'color 0.3s ease'
                }}
              >
                {copied ? 'Copied! ✓' : <i className="fa-regular fa-copy" />}
              </span>
            </div>

            {/* Modern Bento Action Buttons */}
            <div className="d-flex gap-2 mb-3">
              <button 
                type="button"
                className="btn-bento-primary flex-grow-1"
                onClick={() => setActiveTab('contactme')}
                style={{
                  padding: '11px 16px',
                  borderRadius: '14px',
                  background: 'var(--persona-gradient)',
                  border: 'none',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px var(--persona-accent-glow)',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                }}
              >
                <span>Get In Touch</span>
                <i className="fa-regular fa-paper-plane" style={{ fontSize: '13px' }} />
              </button>

              <button 
                type="button"
                className="btn-bento-secondary flex-grow-1"
                onClick={handleCopyEmail}
                style={{
                  padding: '11px 16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#d0d8e8',
                  fontWeight: '700',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                }}
              >
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"} style={{ color: copied ? '#10b981' : '#d0d8e8', fontSize: '13px' }} />
              </button>
            </div>

            {/* Social Media Links */}
            <div className="d-flex justify-content-center align-items-center gap-3">
              <a 
                href="https://github.com/mokarramshahban" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon-btn"
                title="GitHub"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#c0c8d8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '17px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <i className="fa-brands fa-github" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mokarram-shahban/" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#c0c8d8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '17px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a 
                href="https://www.instagram.com/mokarramshahban.in/" 
                target="_blank" 
                rel="noreferrer"
                className="social-icon-btn"
                title="Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#c0c8d8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '17px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>

          </div>
        </div>

        {/* CSS Hover & Animation Styles */}
        <style>{`
          .profile-avatar-wrap:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 18px 45px var(--persona-accent-glow), 0 0 25px var(--persona-accent-soft) !important;
          }
          .email-copy-box:hover {
            background-color: rgba(255, 255, 255, 0.06) !important;
            border-color: var(--persona-accent-border) !important;
            box-shadow: 0 0 15px var(--persona-accent-glow) !important;
          }
          .btn-bento-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px var(--persona-accent-glow) !important;
          }
          .btn-bento-secondary:hover {
            transform: translateY(-2px);
            background-color: rgba(255, 255, 255, 0.08) !important;
            border-color: var(--persona-accent-border) !important;
            color: #ffffff !important;
          }
          .social-icon-btn:hover {
            transform: translateY(-3px);
            color: var(--persona-accent) !important;
            border-color: var(--persona-accent-border) !important;
            box-shadow: 0 4px 15px var(--persona-accent-glow) !important;
            background-color: var(--persona-accent-soft) !important;
          }
          @keyframes statusPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%       { opacity: 0.4; transform: scale(1.3); }
          }
        `}</style>
      </div>
    </div>
  );
}
