/**
 * Pure JavaScript Skill Parsing & Job Description Matching Engine.
 * Tokenizes text, extracts technical keywords, calculates match scores, and provides project recommendations.
 */

// Common English Stopwords to filter out non-technical words
const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'aren\'t', 'as', 'at',
  'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'can', 'cant', 'cannot', 'could',
  'did', 'do', 'does', 'doing', 'don\'t', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have',
  'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'i', 'if', 'in', 'into', 'is', 'it',
  'its', 'itself', 'just', 'me', 'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only',
  'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'should', 'so', 'some', 'such', 'than', 'that',
  'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to',
  'too', 'under', 'until', 'up', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom',
  'why', 'with', 'would', 'you', 'your', 'yours', 'yourself', 'yourselves', 'looking', 'seeking', 'proficient', 'experience',
  'work', 'working', 'ability', 'strong', 'skills', 'role', 'team', 'company', 'developer', 'engineer', 'building', 'must'
]);

// Secondary industry keywords for transparency tracking of missing stack items
const INDUSTRY_TECH_DICTIONARY = [
  { name: 'Docker / Containers', key: 'docker' },
  { name: 'Kubernetes', key: 'kubernetes' },
  { name: 'AWS Cloud', key: 'aws' },
  { name: 'GraphQL', key: 'graphql' },
  { name: 'Vue.js', key: 'vue' },
  { name: 'Angular', key: 'angular' },
  { name: 'Java / Spring', key: 'java' },
  { name: 'Golang', key: 'golang' },
  { name: 'C# / .NET', key: 'c#' }
];

/**
 * Tokenizes and cleans raw text.
 * @param {string} text 
 * @returns {Array<string>} List of cleaned lowercase tokens
 */
export function tokenizeAndClean(text) {
  if (!text || typeof text !== 'string') return [];

  return text
    .toLowerCase()
    .replace(/[^a-z0-9#+.\s-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !STOPWORDS.has(token));
}

/**
 * Analyzes a Job Description against the portfolio Skill Matrix.
 * 
 * @param {string} jdText - Full raw text of the job description
 * @param {Array<Object>} skillsMatrix - Dataset of candidate skills & aliases
 * @returns {Object} Comprehensive match report
 */
export function analyzeJobDescription(jdText = '', skillsMatrix = []) {
  if (!jdText || jdText.trim().length === 0) {
    return {
      matchScore: 0,
      matchedSkills: [],
      missingSkills: [],
      detectedCategoryCounts: {},
      suggestedProjects: [],
      summaryText: 'Paste a Job Description above to generate a real-time compatibility report.'
    };
  }

  const normalizedJd = jdText.toLowerCase();
  const tokens = tokenizeAndClean(jdText);
  const tokenSet = new Set(tokens);

  const matchedSkills = [];
  const detectedCategories = {};
  const projectPointTracker = {};

  let totalDetectedRequirementWeight = 0;
  let totalMatchedWeight = 0;

  // 1. Scan Candidate Skill Matrix
  skillsMatrix.forEach(skill => {
    // Check if any alias or skill name exists in raw JD text or token set
    const isMatched = skill.aliases.some(alias => {
      const lowerAlias = alias.toLowerCase();
      // Handle multi-word aliases (e.g. "unit testing", "react toolkit") vs single word
      if (lowerAlias.includes(' ') || lowerAlias.includes('.')) {
        return normalizedJd.includes(lowerAlias);
      }
      return tokenSet.has(lowerAlias) || normalizedJd.includes(` ${lowerAlias} `);
    });

    if (isMatched) {
      matchedSkills.push(skill);
      totalMatchedWeight += skill.weight || 1.0;
      totalDetectedRequirementWeight += skill.weight || 1.0;

      // Track category match counts
      const category = skill.category || 'General';
      detectedCategories[category] = (detectedCategories[category] || 0) + 1;

      // Weight related project relevance
      (skill.relatedProjects || []).forEach(projId => {
        projectPointTracker[projId] = (projectPointTracker[projId] || 0) + 2;
      });
    }
  });

  // 2. Scan Industry Dictionary for Transparency (Missing Skills)
  const missingSkills = [];
  INDUSTRY_TECH_DICTIONARY.forEach(tech => {
    if (normalizedJd.includes(tech.key)) {
      missingSkills.push(tech.name);
      totalDetectedRequirementWeight += 0.8; // Add to requirement pool for accurate ratio
    }
  });

  // 3. Compute Percentage Score (0% - 100%)
  let rawScore = 0;
  if (totalDetectedRequirementWeight > 0) {
    rawScore = Math.round((totalMatchedWeight / totalDetectedRequirementWeight) * 100);
  } else if (matchedSkills.length > 0) {
    rawScore = Math.min(95, 70 + (matchedSkills.length * 5));
  } else {
    rawScore = 35; // Baseline default if generic JD text
  }

  // Boost score slightly if multiple core stack items match (React + Node + Mongo/FastAPI)
  const finalMatchScore = Math.min(98, Math.max(15, rawScore));

  // 4. Determine Top Suggested Projects based on matched tech stack
  const sortedProjectIds = Object.keys(projectPointTracker)
    .sort((a, b) => projectPointTracker[b] - projectPointTracker[a]);

  // Generate dynamic summary statement
  let summaryText = '';
  if (finalMatchScore >= 85) {
    summaryText = `🔥 Excellent Match! (${finalMatchScore}% Alignment) Your job description strongly matches Mokarram's core stack in ${Object.keys(detectedCategories).join(', ')}.`;
  } else if (finalMatchScore >= 65) {
    summaryText = `⚡ Good Technical Fit! (${finalMatchScore}% Alignment) Strong overlap detected in ${matchedSkills.slice(0, 3).map(s => s.name).join(', ')}.`;
  } else {
    summaryText = `💡 Partial Compatibility (${finalMatchScore}% Alignment). Matched ${matchedSkills.length} key skills.`;
  }

  return {
    matchScore: finalMatchScore,
    matchedSkills,
    missingSkills,
    detectedCategoryCounts: detectedCategories,
    topProjectIds: sortedProjectIds.slice(0, 2),
    summaryText
  };
}
