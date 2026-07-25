/**
 * PersonalizationBadge
 *
 * A subtle floating pill badge that appears after enough interactions to detect
 * the visitor's dominant interest persona. Clicking it opens a modal overlay
 * showing the real-time score breakdown with manual override options.
 */

import React, { useState, useEffect } from 'react';
import { usePersonalization } from '../context/PersonalizationContext';
import { PERSONAS } from '../utils/personaEngine';

// ---------------------------------------------------------------------------
// Score Bar sub-component
// ---------------------------------------------------------------------------
function ScoreBar({ label, emoji, value, max, color }) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div style={{ marginBottom: '12px' }}>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span style={{ fontSize: '12.5px', color: '#c0c8d8', fontWeight: '600' }}>
          {emoji} {label}
        </span>
        <span style={{ fontSize: '11px', color: color, fontWeight: '700' }}>
          {value} pts
        </span>
      </div>
      <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: color,
            borderRadius: '4px',
            transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Badge Component
// ---------------------------------------------------------------------------
export default function PersonalizationBadge() {
  const { activePersona, themeConfig, scores, resetPersona, overridePersona } = usePersonalization();
  const [isOpen, setIsOpen] = useState(false);

  const maxScore = Math.max(...Object.values(scores), 1);
  const personaList = Object.values(PERSONAS);

  return (
    <>
      {/* ── Floating Badge Button (Full pill on desktop, Icon on mobile) ── */}
      <button
        type="button"
        className="persona-theme-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Toggle Theme & Adaptive Persona Engine"
        title="Click to view & change theme persona"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9990,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          width: 'auto',
          maxWidth: 'fit-content',
          backgroundColor: themeConfig.theme['--persona-badge-bg'],
          border: `1px solid ${themeConfig.theme['--persona-accent-border']}`,
          boxShadow: `0 4px 20px ${themeConfig.theme['--persona-accent-glow']}`,
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'personaBadgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
          outline: 'none',
        }}
      >
        {/* Pulse Dot */}
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: themeConfig.theme['--persona-badge-color'],
            boxShadow: `0 0 8px ${themeConfig.theme['--persona-badge-color']}`,
            animation: 'personaPulse 1.8s ease-in-out infinite',
            flexShrink: 0,
          }}
        />

        {/* Text (Visible on Desktop) */}
        <span
          className="persona-badge-text-desktop"
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: themeConfig.theme['--persona-badge-color'],
            whiteSpace: 'nowrap',
          }}
        >
          {themeConfig.emoji} {themeConfig.badge} Active
        </span>

        {/* Palette Icon */}
        <i
          className="fa-solid fa-palette persona-badge-icon"
          style={{
            fontSize: '13px',
            color: themeConfig.theme['--persona-badge-color'],
          }}
        />
      </button>

      {/* ── Backdrop ────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9995,
            backgroundColor: 'rgba(5,8,15,0.75)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {/* ── Modal Panel ─────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="persona-modal-panel"
          style={{
            position: 'fixed',
            zIndex: 9996,
            backgroundColor: '#0d1117',
            borderRadius: '20px',
            border: `1px solid ${themeConfig.theme['--persona-accent-border']}`,
            boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${themeConfig.theme['--persona-accent-glow']}`,
            padding: '24px 22px 22px 22px',
            animation: 'personaModalSlide 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glowing Circular Close Button in Top-Right Corner */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="persona-modal-close-btn"
            title="Close theme panel"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${themeConfig.theme['--persona-accent-border']}`,
              color: themeConfig.theme['--persona-badge-color'],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              outline: 'none',
              padding: '0',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: 'closeBtnGlow 2.5s ease-in-out infinite',
              zIndex: 10,
            }}
          >
            <i className="fa-solid fa-xmark" style={{ fontSize: '14px', lineHeight: 1 }} />
          </button>

          {/* Header */}
          <div className="mb-3" style={{ paddingRight: '36px' }}>
            <div style={{ fontSize: '10px', color: themeConfig.theme['--persona-badge-color'], fontWeight: '800', letterSpacing: '1px', marginBottom: '3px' }}>
              ADAPTIVE THEME ENGINE
            </div>
            <h5 style={{ color: '#fff', fontWeight: '800', fontSize: '16px', margin: 0 }}>
              {themeConfig.emoji} {themeConfig.label}
            </h5>
          </div>

          <p style={{ fontSize: '12.5px', color: '#9098a8', lineHeight: '1.5', marginBottom: '18px' }}>
            Your portfolio theme adapts automatically based on your interactions, or you can pick a manual theme below.
          </p>

          {/* Score Breakdown */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', color: '#808898', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '12px' }}>
              INTEREST SCORE BREAKDOWN
            </div>
            {personaList.map((p) => (
              <ScoreBar
                key={p.id}
                label={p.label}
                emoji={p.emoji}
                value={scores[p.id] || 0}
                max={maxScore}
                color={p.theme['--persona-badge-color']}
              />
            ))}
          </div>

          {/* Manual Theme Override Grid */}
          <div style={{ marginBottom: '18px' }}>
            <div style={{ fontSize: '11px', color: '#808898', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '10px' }}>
              MANUAL THEME OVERRIDE
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '10px' 
              }}
            >
              {personaList.map((p) => {
                const isActive = activePersona === p.id;
                const accentColor = p.theme['--persona-badge-color'];
                const accentBorder = p.theme['--persona-accent-border'];
                const accentBg = p.theme['--persona-badge-bg'];

                return (
                  <button
                    key={p.id}
                    onClick={() => { overridePersona(p.id); }}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '14px',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: isActive ? `1.5px solid ${accentColor}` : `1px solid ${accentBorder}`,
                      backgroundColor: isActive ? accentBg : 'rgba(255, 255, 255, 0.03)',
                      color: isActive ? accentColor : '#a0a8c0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      boxShadow: isActive ? `0 0 16px ${p.theme['--persona-accent-glow']}` : 'none',
                      transition: 'all 0.25s ease',
                      textAlign: 'left',
                      outline: 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                        e.currentTarget.style.borderColor = accentColor;
                        e.currentTarget.style.color = '#ffffff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.borderColor = accentBorder;
                        e.currentTarget.style.color = '#a0a8c0';
                      }
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 flex-grow-1 overflow-hidden">
                      <span style={{ fontSize: '15px' }}>{p.emoji}</span>
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {p.badge}
                      </span>
                    </div>

                    {isActive && (
                      <span style={{ fontSize: '11px', color: accentColor, fontWeight: '900' }}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => { resetPersona(); }}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '14px',
              fontSize: '12px',
              fontWeight: '700',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              color: '#808898',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.25s ease',
              outline: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#808898';
            }}
          >
            <i className="fa-regular fa-rotate-left" style={{ fontSize: '13px' }} />
            <span>Reset to Default Theme</span>
          </button>
        </div>
      )}

      {/* ── Responsive Styling ───────────────────────────────────────── */}
      <style>{`
        /* Desktop Default */
        .persona-theme-btn {
          display: inline-flex !important;
          width: auto !important;
          max-width: fit-content !important;
          padding: 7px 14px !important;
          border-radius: 20px !important;
        }
        .persona-theme-btn:hover {
          transform: scale(1.05) translateY(-2px);
        }
        .persona-modal-panel {
          bottom: 74px;
          left: 24px;
          width: 340px;
        }
        .persona-modal-close-btn:hover {
          transform: scale(1.12) rotate(90deg) !important;
          background-color: ${themeConfig.theme['--persona-badge-bg']} !important;
          box-shadow: 0 0 16px ${themeConfig.theme['--persona-accent-glow']} !important;
          color: #ffffff !important;
        }

        /* Mobile View (max-width: 768px) */
        @media (max-width: 768px) {
          .persona-theme-btn {
            display: none !important;
          }
          .persona-modal-panel {
            bottom: 74px !important;
            left: 16px !important;
            right: 16px !important;
            width: auto !important;
            max-width: calc(100vw - 32px) !important;
          }
        }

        /* Keyframes */
        @keyframes closeBtnGlow {
          0%, 100% {
            box-shadow: 0 0 8px ${themeConfig.theme['--persona-accent-glow']};
            border-color: ${themeConfig.theme['--persona-accent-border']};
          }
          50% {
            box-shadow: 0 0 16px ${themeConfig.theme['--persona-accent-glow']}, 0 0 10px ${themeConfig.theme['--persona-badge-color']}70;
            border-color: ${themeConfig.theme['--persona-badge-color']};
          }
        }
        @keyframes personaBadgePop {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes personaPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes personaModalSlide {
          from { opacity: 0; transform: translateY(12px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
