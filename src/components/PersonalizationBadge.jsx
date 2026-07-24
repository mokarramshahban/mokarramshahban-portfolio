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
  const { activePersona, themeConfig, scores, isPersonaActive, resetPersona, overridePersona } = usePersonalization();
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade in badge after it becomes active
  useEffect(() => {
    if (isPersonaActive) {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    } else {
      setVisible(false);
    }
  }, [isPersonaActive]);

  const maxScore = Math.max(...Object.values(scores), 1);
  const personaList = Object.values(PERSONAS);

  if (!visible) return null;

  return (
    <>
      {/* ── Floating Badge Pill ─────────────────────────────────────── */}
      <div
        onClick={() => setIsOpen(true)}
        title="Click to view your detected interest profile"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9990,
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          padding: '7px 14px',
          borderRadius: '20px',
          backgroundColor: themeConfig.theme['--persona-badge-bg'],
          border: `1px solid ${themeConfig.theme['--persona-accent-border']}`,
          boxShadow: `0 4px 18px ${themeConfig.theme['--persona-accent-glow']}`,
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          animation: 'personaBadgePop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
        }}
      >
        {/* Pulse dot */}
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: themeConfig.theme['--persona-badge-color'],
            boxShadow: `0 0 6px ${themeConfig.theme['--persona-badge-color']}`,
            animation: 'personaPulse 1.8s ease-in-out infinite',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '11.5px',
            fontWeight: '700',
            color: themeConfig.theme['--persona-badge-color'],
            whiteSpace: 'nowrap',
          }}
        >
          {themeConfig.emoji} {themeConfig.badge} Active
        </span>
        <i
          className="fa-regular fa-sliders"
          style={{ fontSize: '11px', color: themeConfig.theme['--persona-badge-color'], opacity: 0.7 }}
        />
      </div>

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
            animation: 'fadeIn 0.2s ease',
          }}
        />
      )}

      {/* ── Modal Panel ─────────────────────────────────────────────── */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '72px',
            left: '24px',
            zIndex: 9996,
            width: '340px',
            backgroundColor: '#0d1117',
            borderRadius: '20px',
            border: `1px solid ${themeConfig.theme['--persona-accent-border']}`,
            boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${themeConfig.theme['--persona-accent-glow']}`,
            padding: '24px',
            animation: 'personaModalSlide 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <div style={{ fontSize: '10px', color: themeConfig.theme['--persona-badge-color'], fontWeight: '800', letterSpacing: '1px', marginBottom: '3px' }}>
                ADAPTIVE THEME ENGINE
              </div>
              <h5 style={{ color: '#fff', fontWeight: '800', fontSize: '16px', margin: 0 }}>
                {themeConfig.emoji} {themeConfig.label}
              </h5>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#808898', fontSize: '18px', cursor: 'pointer', padding: '0', lineHeight: 1 }}
            >
              ×
            </button>
          </div>

          <p style={{ fontSize: '12.5px', color: '#9098a8', lineHeight: '1.5', marginBottom: '18px' }}>
            Your portfolio theme adapts based on the tags and topics you interact with.
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

          {/* Override buttons */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '11px', color: '#808898', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '10px' }}>
              MANUAL OVERRIDE
            </div>
            <div className="d-flex flex-wrap gap-2">
              {personaList.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { overridePersona(p.id); setIsOpen(false); }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '12px',
                    fontSize: '11.5px',
                    fontWeight: '700',
                    border: `1px solid ${p.theme['--persona-accent-border']}`,
                    backgroundColor: activePersona === p.id ? p.theme['--persona-badge-bg'] : 'rgba(255,255,255,0.03)',
                    color: activePersona === p.id ? p.theme['--persona-badge-color'] : '#808898',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {p.emoji} {p.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={() => { resetPersona(); setIsOpen(false); }}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '10px',
              fontSize: '12px',
              fontWeight: '700',
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: 'rgba(255,255,255,0.03)',
              color: '#808898',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <i className="fa-regular fa-rotate-left me-2" />
            Reset Detection
          </button>
        </div>
      )}

      {/* ── Keyframe Styles ─────────────────────────────────────────── */}
      <style>{`
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
