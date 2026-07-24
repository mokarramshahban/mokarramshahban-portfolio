import React, { useState, useRef, useEffect } from 'react';
import { knowledgeBase } from '../data/knowledgeBase';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      contentType: 'welcome',
      content: {
        text: "Hi there! 👋 I'm Mokarram Shahban's interactive Portfolio Assistant. Select a quick topic icon below or type any question!"
      }
    }
  ]);
  const messagesEndRef = useRef(null);
  const chipsContainerRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Quick Category Suggestion Chips with Icons
  const categoryChips = [
    { label: "Experience", icon: "fa-regular fa-briefcase", key: "experience", fullTitle: "Work Experience" },
    { label: "Skills", icon: "fa-solid fa-layer-group", key: "skills", fullTitle: "Tech Stack & Skills" },
    { label: "Projects", icon: "fa-regular fa-code", key: "projects", fullTitle: "Featured Projects" },
    { label: "Audits", icon: "fa-regular fa-trophy", key: "audits", fullTitle: "Government Audits" },
    { label: "Education", icon: "fa-regular fa-graduation-cap", key: "education", fullTitle: "Education" },
    { label: "Contact", icon: "fa-regular fa-envelope", key: "contact", fullTitle: "Contact Info" }
  ];

  const handleChipsScroll = (direction) => {
    if (chipsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -120 : 120;
      chipsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  /**
   * Fast local knowledge query engine returning structured card objects
   */
  const queryKnowledgeBase = (queryText) => {
    const text = queryText.toLowerCase().trim();
    const p = knowledgeBase.personalInfo;

    // Mobile / Phone privacy check
    if (text.includes('mobile') || text.includes('phone') || text.includes('number') || text.includes('whatsapp') || text.includes('call')) {
      return {
        contentType: 'phone_privacy',
        title: '🔒 Contact Notice',
        info: p
      };
    }

    // 1. Work Experience
    if (text.includes('experience') || text.includes('work') || text.includes('job') || text.includes('company') || text === 'experience') {
      return {
        contentType: 'experience',
        title: '💼 Work Experience',
        items: knowledgeBase.workExperience.map(w => ({
          role: w.role,
          company: w.company,
          location: w.location,
          period: w.period,
          details: w.details
        }))
      };
    }

    // 2. Tech Stack & Skills
    if (text.includes('skill') || text.includes('stack') || text.includes('language') || text.includes('tool') || text.includes('react') || text.includes('node') || text === 'skills') {
      const s = knowledgeBase.skills;
      return {
        contentType: 'skills',
        title: '🛠️ Technical Proficiencies',
        categories: [
          { name: 'Frontend', items: s.frontend },
          { name: 'Backend', items: s.backend },
          { name: 'Databases & ORM', items: s.databases },
          { name: 'Tools & Testing', items: s.tooling }
        ]
      };
    }

    // 3. Featured Projects
    if (text.includes('project') || text.includes('repo') || text.includes('built') || text === 'projects') {
      return {
        contentType: 'projects',
        title: `🚀 Featured Projects (${knowledgeBase.projects.length} Total)`,
        items: knowledgeBase.projects.slice(0, 5)
      };
    }

    // 4. Government Audits & Achievements
    if (text.includes('audit') || text.includes('award') || text.includes('achievement') || text.includes('government') || text === 'audits') {
      return {
        contentType: 'achievements',
        title: '🏆 Key Honors, Awards & Audits',
        items: knowledgeBase.achievements
      };
    }

    // 5. Education
    if (text.includes('education') || text.includes('study') || text.includes('college') || text.includes('degree') || text === 'education') {
      return {
        contentType: 'education',
        title: '🎓 Educational Background',
        items: knowledgeBase.education
      };
    }

    // 6. Contact & Hiring
    if (text.includes('contact') || text.includes('email') || text.includes('reach') || text.includes('hire') || text === 'contact') {
      return {
        contentType: 'contact',
        title: '📩 Direct Contact Details',
        info: p
      };
    }

    // 7. Dynamic Project/Keyword Search
    const matchingProj = knowledgeBase.projects.find(pr => 
      pr.name.toLowerCase().includes(text) || 
      pr.tags.toLowerCase().includes(text) || 
      pr.language.toLowerCase().includes(text)
    );

    if (matchingProj) {
      return {
        contentType: 'single_project',
        title: `🔍 Project Match: ${matchingProj.name}`,
        project: matchingProj
      };
    }

    // Default Fallback
    return {
      contentType: 'text',
      text: `I can help answer questions about Mokarram's background!\n\nSelect any quick topic icon below.`
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    // Add User Message
    const userMsg = { sender: 'user', text };
    const structuredResponse = queryKnowledgeBase(text);

    setMessages(prev => [
      ...prev, 
      userMsg, 
      { sender: 'assistant', ...structuredResponse }
    ]);
    setInputMessage('');
  };

  /**
   * Render structured UI cards for assistant responses
   */
  const renderMessageContent = (msg) => {
    if (msg.sender === 'user') {
      return <div style={{ fontWeight: '600' }}>{msg.text}</div>;
    }

    switch (msg.contentType) {
      case 'phone_privacy':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>🔒 Contact Privacy Notice</h6>
            <div className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', borderLeft: '3px solid #00a3ff' }}>
              <div style={{ fontSize: '11px', color: '#ffffff', marginBottom: '6px', lineHeight: '1.4' }}>
                Mokarram's mobile number is <strong>not publicly available</strong>.
              </div>
              <div style={{ fontSize: '11px', color: '#b0b5c5', marginBottom: '8px' }}>
                You can reach out directly via email or connect on social media handles:
              </div>
              
              <div className="d-flex flex-column gap-1.5">
                <a 
                  href={`mailto:${msg.info.email}`}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#00a3ff',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    marginBottom: '4px'
                  }}
                >
                  ✉️ Email: {msg.info.email}
                </a>

                <div style={{ fontSize: '11px', color: '#d0d5e5', lineHeight: '1.6' }}>
                  • <strong>LinkedIn:</strong> <a href={msg.info.linkedin} target="_blank" rel="noreferrer" style={{ color: '#00a3ff', textDecoration: 'underline' }}>linkedin.com/in/mokarram-shahban</a><br />
                  • <strong>GitHub:</strong> <a href={msg.info.github} target="_blank" rel="noreferrer" style={{ color: '#00a3ff', textDecoration: 'underline' }}>github.com/mokarramshahban</a><br />
                  • <strong>Instagram:</strong> <a href={msg.info.instagram} target="_blank" rel="noreferrer" style={{ color: '#00a3ff', textDecoration: 'underline' }}>@mokarramshahban.in</a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            {msg.items.map((item, i) => (
              <div key={i} className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', borderLeft: '3px solid #00a3ff', marginBottom: '4px' }}>
                <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '12px' }}>{item.role}</div>
                <div style={{ fontSize: '10px', color: '#00a3ff', marginBottom: '3px' }}>{item.company} | {item.period}</div>
                <div style={{ fontSize: '11px', color: '#b0b5c5', lineHeight: '1.4' }}>{item.details}</div>
              </div>
            ))}
          </div>
        );

      case 'skills':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            {msg.categories.map((cat, i) => (
              <div key={i} className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', marginBottom: '4px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>{cat.name}</div>
                <div className="d-flex flex-wrap gap-1">
                  {cat.items.map((s, sIdx) => (
                    <span key={sIdx} style={{ fontSize: '10px', backgroundColor: 'rgba(0, 163, 255, 0.18)', color: '#00a3ff', padding: '2px 7px', borderRadius: '4px', fontWeight: '600' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            {msg.items.map((p, i) => (
              <div key={i} className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '4px' }}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span style={{ fontWeight: '700', color: '#ffffff', fontSize: '12px' }}>{p.name}</span>
                  <span style={{ fontSize: '9px', backgroundColor: 'rgba(0, 163, 255, 0.2)', color: '#00a3ff', padding: '1px 6px', borderRadius: '4px' }}>{p.language}</span>
                </div>
                <div style={{ fontSize: '11px', color: '#b0b5c5', lineHeight: '1.4', marginBottom: '3px' }}>{p.summary}</div>
                <div style={{ fontSize: '10px', color: '#00a3ff', fontStyle: 'italic' }}>💡 "{p.highlight}"</div>
              </div>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            {msg.items.map((item, i) => (
              <div key={i} className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', borderLeft: '3px solid #00a3ff', marginBottom: '4px' }}>
                <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '12px' }}>{item.title}</div>
                <div style={{ fontSize: '10px', color: '#00a3ff', marginBottom: '2px' }}>{item.organization} ({item.period})</div>
                <div style={{ fontSize: '11px', color: '#b0b5c5', lineHeight: '1.4' }}>{item.details}</div>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            {msg.items.map((edu, i) => (
              <div key={i} className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', borderLeft: '3px solid #00a3ff', marginBottom: '4px' }}>
                <div style={{ fontWeight: '700', color: '#ffffff', fontSize: '12px' }}>{edu.degree}</div>
                <div style={{ fontSize: '10px', color: '#00a3ff', marginBottom: '2px' }}>{edu.institution} ({edu.period})</div>
                <div style={{ fontSize: '11px', color: '#b0b5c5', lineHeight: '1.4' }}>{edu.details}</div>
              </div>
            ))}
          </div>
        );

      case 'contact':
        return (
          <div className="d-flex flex-column gap-2">
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', margin: 0 }}>{msg.title}</h6>
            <div className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px' }}>
              <div style={{ fontSize: '12px', color: '#ffffff', fontWeight: '700', marginBottom: '3px' }}>{msg.info.name}</div>
              <div style={{ fontSize: '11px', color: '#b0b5c5', marginBottom: '2px' }}>💼 {msg.info.role} at {msg.info.company}</div>
              <div style={{ fontSize: '11px', color: '#b0b5c5', marginBottom: '6px' }}>📍 {msg.info.location}</div>
              
              <a 
                href={`mailto:${msg.info.email}`}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#00a3ff',
                  color: '#ffffff',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                ✉️ Email Me ({msg.info.email})
              </a>
            </div>
          </div>
        );

      case 'single_project':
        return (
          <div className="p-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', borderLeft: '3px solid #00a3ff' }}>
            <h6 style={{ color: '#00a3ff', fontSize: '12px', fontWeight: '700', marginBottom: '4px' }}>{msg.title}</h6>
            <div style={{ fontSize: '11px', color: '#b0b5c5', lineHeight: '1.4', marginBottom: '4px' }}>{msg.project.summary}</div>
            <div style={{ fontSize: '10px', color: '#00a3ff', fontStyle: 'italic' }}>💡 "{msg.project.highlight}"</div>
          </div>
        );

      default:
        return <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{msg.content?.text || msg.text}</div>;
    }
  };

  return (
    <>
      <style>{`
        .chat-chip-btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          white-space: nowrap !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          color: #00a3ff !important;
          background-color: #141c26 !important;
          border: 1px solid rgba(0, 163, 255, 0.4) !important;
          border-radius: 16px !important;
          padding: 5px 12px !important;
          margin-right: 6px !important;
          margin-left: 2px !important;
          cursor: pointer !important;
          user-select: none !important;
          flex-shrink: 0 !important;
          transition: all 0.15s ease-in-out !important;
        }
        .chat-chip-btn:hover {
          background-color: #00a3ff !important;
          color: #ffffff !important;
          border-color: #00a3ff !important;
          transform: translateY(-1px);
        }
        .chip-scroll-container::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>

      {/* Floating Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Portfolio Assistant Chat"
        role="button"
        tabIndex={0}
        style={{
          position: 'fixed',
          bottom: '85px',
          right: '20px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#00a3ff',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(0, 163, 255, 0.45)',
          cursor: 'pointer',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          userSelect: 'none',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark" style={{ fontSize: '22px' }}></i>
        ) : (
          <div className="position-relative d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-robot" style={{ fontSize: '22px' }}></i>
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
              style={{ fontSize: '9px', padding: '2px 4px', border: '2px solid #00a3ff' }}
            >
              100%
            </span>
          </div>
        )}
      </div>

      {/* Expandable Chat Panel */}
      {isOpen && (
        <div
          className="chat-widget-panel d-flex flex-column"
          style={{
            position: 'fixed',
            bottom: '145px',
            right: '20px',
            width: 'calc(100vw - 32px)',
            maxWidth: '390px',
            height: '510px',
            maxHeight: '75vh',
            backgroundColor: '#0f131a',
            border: '1px solid rgba(0, 163, 255, 0.35)',
            borderRadius: '20px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(16px)',
            zIndex: 99998,
            overflow: 'hidden',
            fontFamily: "'Inter', sans-serif"
          }}
        >
          {/* Header */}
          <div 
            className="px-3 py-2.5 d-flex align-items-center justify-content-between"
            style={{
              backgroundColor: 'rgba(20, 26, 38, 0.98)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              flex: '0 0 auto',
              flexShrink: 0
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <div 
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #00a3ff 0%, #0066ff 100%)',
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '15px'
                }}
              >
                🤖
              </div>
              <div>
                <h6 className="m-0" style={{ color: '#ffffff', fontWeight: '700', fontSize: '13px', whiteSpace: 'nowrap' }}>
                  Portfolio Assistant
                </h6>
                <span style={{ fontSize: '10px', color: '#00a3ff', whiteSpace: 'nowrap' }}>
                  ⚡ Instant Zero-Friction Chat
                </span>
              </div>
            </div>

            <div 
              onClick={() => setIsOpen(false)}
              role="button"
              tabIndex={0}
              style={{ color: '#808595', cursor: 'pointer', fontSize: '16px' }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div 
            className="p-3 overflow-auto d-flex flex-column gap-2"
            style={{ 
              flex: '1 1 auto',
              minHeight: 0,
              backgroundColor: 'rgba(15, 19, 26, 0.95)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 163, 255, 0.3) rgba(15, 19, 26, 0.95)'
            }}
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  style={{
                    maxWidth: '92%',
                    padding: '8px 12px',
                    borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    backgroundColor: msg.sender === 'user' ? '#00a3ff' : 'rgba(255, 255, 255, 0.05)',
                    color: msg.sender === 'user' ? '#ffffff' : '#d0d5e5',
                    fontSize: '12px',
                    lineHeight: '1.4',
                    border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {renderMessageContent(msg)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Non-Compressing Horizontal Scrollable Icon Pill Bar with Mouse Wheel & Arrow Controls */}
          <div 
            className="px-2 py-1.5 d-flex align-items-center position-relative"
            style={{ 
              backgroundColor: '#0c1017', 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              flex: '0 0 auto',
              flexShrink: 0,
              minHeight: '44px'
            }}
          >
            {/* Left Scroll Arrow Button */}
            <div
              onClick={() => handleChipsScroll('left')}
              role="button"
              tabIndex={0}
              className="d-flex align-items-center justify-content-center me-1"
              style={{
                width: '22px',
                height: '28px',
                backgroundColor: 'rgba(0, 163, 255, 0.15)',
                color: '#00a3ff',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '10px',
                flexShrink: 0
              }}
              title="Scroll Left"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </div>

            {/* Scrollable Container */}
            <div
              ref={chipsContainerRef}
              className="d-flex flex-nowrap align-items-center overflow-auto chip-scroll-container flex-grow-1"
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {categoryChips.map((chip, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  className="chat-chip-btn"
                  title={chip.fullTitle}
                  onClick={() => handleSendMessage(chip.key)}
                >
                  <i className={`${chip.icon} me-1`} style={{ fontSize: '11px' }}></i>
                  <span className="chat-chip-text">{chip.label}</span>
                </div>
              ))}
            </div>

            {/* Right Scroll Arrow Button */}
            <div
              onClick={() => handleChipsScroll('right')}
              role="button"
              tabIndex={0}
              className="d-flex align-items-center justify-content-center ms-1"
              style={{
                width: '22px',
                height: '28px',
                backgroundColor: 'rgba(0, 163, 255, 0.15)',
                color: '#00a3ff',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '10px',
                flexShrink: 0
              }}
              title="Scroll Right"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>

          {/* Fixed Non-Compressing Input Box */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            className="p-2 d-flex gap-2"
            style={{
              backgroundColor: '#0f131a',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              flex: '0 0 auto',
              flexShrink: 0
            }}
          >
            <input
              type="text"
              placeholder="Ask or type a topic (e.g. React, Experience, Email)..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '10px',
                color: '#ffffff',
                padding: '6px 12px',
                fontSize: '12px',
                outline: 'none'
              }}
            />
            <div
              onClick={() => inputMessage.trim() && handleSendMessage()}
              role="button"
              tabIndex={0}
              style={{
                backgroundColor: '#00a3ff',
                color: '#ffffff',
                borderRadius: '10px',
                width: '36px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !inputMessage.trim() ? 'not-allowed' : 'pointer',
                opacity: !inputMessage.trim() ? 0.5 : 1
              }}
            >
              <i className="fa-solid fa-paper-plane" style={{ fontSize: '11px' }}></i>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
