/**
 * Personalization Context Provider
 *
 * Maintains visitor interaction state (clickHistory, activePersona, scoreBreakdown)
 * across the entire portfolio session. Persists to sessionStorage so navigation
 * between tabs preserves the detected persona.
 *
 * Usage:
 *   const { trackInteraction, activePersona, themeConfig, scores } = usePersonalization();
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  calculateDominantPersona,
  calculateScores,
  getThemeConfig,
  applyThemeToRoot,
} from '../utils/personaEngine';

// ---------------------------------------------------------------------------
// Context Shape
// ---------------------------------------------------------------------------
const PersonalizationContext = createContext({
  clickHistory: [],
  activePersona: 'fullstack',
  themeConfig: null,
  scores: { frontend: 0, backend: 0, fullstack: 0, ai: 0 },
  isPersonaActive: false,
  trackInteraction: () => {},
  resetPersona: () => {},
  overridePersona: () => {},
});

// ---------------------------------------------------------------------------
// Storage Helpers
// ---------------------------------------------------------------------------
const STORAGE_KEY = 'portfolio_persona_history';
const OVERRIDE_KEY = 'portfolio_persona_override';

function loadFromSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function loadOverrideFromSession() {
  try {
    return sessionStorage.getItem(OVERRIDE_KEY) || null;
  } catch {
    return null;
  }
}

function saveToSession(history) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // silent — sessionStorage blocked (e.g. private mode edge case)
  }
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------
export function PersonalizationProvider({ children }) {
  const [clickHistory, setClickHistory] = useState(() => loadFromSession());
  const [overrideId, setOverrideId] = useState(() => loadOverrideFromSession());

  // Derived state
  const dominantPersona = calculateDominantPersona(clickHistory);
  const activePersona = overrideId || dominantPersona;
  const themeConfig = getThemeConfig(activePersona);
  const scores = calculateScores(clickHistory);
  const totalSignals = clickHistory.length;
  const isPersonaActive = totalSignals >= 2 || overrideId !== null;

  // Apply CSS variables to root whenever persona changes
  useEffect(() => {
    applyThemeToRoot(themeConfig.theme);
  }, [activePersona, themeConfig]);

  // Persist history to sessionStorage
  useEffect(() => {
    saveToSession(clickHistory);
  }, [clickHistory]);

  /**
   * Track a tag/category click interaction.
   * @param {string} tag - e.g. 'React.js', 'Node.js', 'Python'
   */
  const trackInteraction = useCallback((tag) => {
    if (!tag) return;
    setClickHistory((prev) => [...prev, tag]);
    // Clear manual override when new interactions come in
    setOverrideId(null);
    try { sessionStorage.removeItem(OVERRIDE_KEY); } catch {}
  }, []);

  /**
   * Reset all interaction history and return to default Electric Blue theme.
   */
  const resetPersona = useCallback(() => {
    setClickHistory([]);
    setOverrideId(null);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(OVERRIDE_KEY);
    } catch {}
    const defaultTheme = getThemeConfig('frontend').theme;
    applyThemeToRoot(defaultTheme);
  }, []);

  /**
   * Manually force a specific persona (visitor override).
   * @param {string} personaId - 'frontend' | 'backend' | 'fullstack' | 'ai'
   */
  const overridePersona = useCallback((personaId) => {
    setOverrideId(personaId);
    try {
      sessionStorage.setItem(OVERRIDE_KEY, personaId);
    } catch {}
  }, []);

  return (
    <PersonalizationContext.Provider
      value={{
        clickHistory,
        activePersona,
        themeConfig,
        scores,
        isPersonaActive,
        trackInteraction,
        resetPersona,
        overridePersona,
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Custom Hook
// ---------------------------------------------------------------------------
export function usePersonalization() {
  return useContext(PersonalizationContext);
}
