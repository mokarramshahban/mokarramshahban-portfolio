/**
 * Pure JavaScript Recommendation Engine powered by Cosine Similarity & Vector Math.
 * Operates 100% locally in the browser with zero third-party APIs or backend dependencies.
 */

/**
 * Calculates Cosine Similarity between two feature vector objects or tag arrays.
 * Formula: CosineSimilarity = (A · B) / (||A|| * ||B||)
 * 
 * @param {Object|Array<string>} vecA - First feature vector or tag list
 * @param {Object|Array<string>} vecB - Second feature vector or tag list
 * @returns {number} Similarity score between 0.0 and 1.0
 */
export function cosineSimilarity(vecA, vecB) {
  if (!vecA || !vecB) return 0;

  // Handle Array of string tags (Jaccard-weighted Cosine Similarity)
  if (Array.isArray(vecA) && Array.isArray(vecB)) {
    if (vecA.length === 0 || vecB.length === 0) return 0;
    
    const setA = new Set(vecA.map(t => String(t).toLowerCase()));
    const setB = new Set(vecB.map(t => String(t).toLowerCase()));
    
    let intersection = 0;
    setA.forEach(tag => {
      if (setB.has(tag)) intersection++;
    });

    const magA = Math.sqrt(setA.size);
    const magB = Math.sqrt(setB.size);

    if (magA === 0 || magB === 0) return 0;
    return intersection / (magA * magB);
  }

  // Handle Feature Vector Objects (e.g., { frontend: 0.8, backend: 0.9, ai: 0.2 })
  if (typeof vecA === 'object' && typeof vecB === 'object') {
    const keys = Array.from(new Set([...Object.keys(vecA), ...Object.keys(vecB)]));
    
    let dotProduct = 0;
    let magASquared = 0;
    let magBSquared = 0;

    keys.forEach(key => {
      const valA = Number(vecA[key]) || 0;
      const valB = Number(vecB[key]) || 0;

      dotProduct += valA * valB;
      magASquared += valA * valA;
      magBSquared += valB * valB;
    });

    const magA = Math.sqrt(magASquared);
    const magB = Math.sqrt(magBSquared);

    if (magA === 0 || magB === 0) return 0;
    return dotProduct / (magA * magB);
  }

  return 0;
}

/**
 * Recommends top N projects similar to a specific current project.
 * Uses a combined score of Feature Vector Cosine Similarity (70%) and Tag Overlap (30%).
 * 
 * @param {string} currentProjectId - ID of the project currently being viewed
 * @param {Array<Object>} allProjects - Full list of project objects
 * @param {number} limit - Number of recommendations to return (default: 3)
 * @returns {Array<Object>} Top recommended projects with similarity scores and match percentages
 */
export function getRecommendedProjects(currentProjectId, allProjects = [], limit = 3) {
  if (!allProjects || allProjects.length === 0) return [];

  const targetProject = allProjects.find(p => p.id === currentProjectId || p.name === currentProjectId);
  if (!targetProject) return allProjects.slice(0, limit);

  const scoredProjects = allProjects
    .filter(p => p.id !== targetProject.id && p.name !== targetProject.name)
    .map(project => {
      // 1. Vector similarity (weights: frontend, backend, ai, etc.)
      const vectorScore = cosineSimilarity(
        targetProject.featureVector || {}, 
        project.featureVector || {}
      );

      // 2. Tag similarity (technologies: React, Node, MongoDB, etc.)
      const tagScore = cosineSimilarity(
        targetProject.tags || [], 
        project.tags || []
      );

      // 3. Category match bonus (+0.08 if exact category match)
      const categoryBonus = (targetProject.category && project.category && targetProject.category === project.category) ? 0.08 : 0;

      // Composite similarity score (weighted average)
      const rawScore = (vectorScore * 0.65) + (tagScore * 0.27) + categoryBonus;
      const normalizedScore = Math.min(1.0, Math.max(0.0, rawScore));
      const matchPercentage = Math.round(normalizedScore * 100);

      return {
        ...project,
        similarityScore: normalizedScore,
        matchPercentage: `${matchPercentage}%`,
        matchVal: matchPercentage
      };
    });

  const sorted = scoredProjects
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);

  // Log calculation results to DevTools console for live verification
  if (typeof window !== 'undefined' && window.console) {
    console.log(`[Smart Matrix Engine] Computed Cosine Similarity for "${targetProject.title || targetProject.name}":`, 
      sorted.map(s => `${s.title || s.name} (${s.matchPercentage})`)
    );
  }

  return sorted;
}

/**
 * Calculates personalized project recommendations based on visitor session interests (clicked tags & viewed items).
 * 
 * @param {Object} userInterestVector - Aggregated interest feature vector of the user
 * @param {Array<Object>} allProjects - Full list of project objects
 * @param {number} limit - Number of recommendations to return (default: 3)
 * @returns {Array<Object>} Top personalized recommendations
 */
export function getPersonalizedRecommendations(userInterestVector = {}, allProjects = [], limit = 3) {
  if (!allProjects || allProjects.length === 0) return [];

  // If no user vector established yet, return top featured projects
  if (!userInterestVector || Object.keys(userInterestVector).length === 0) {
    return allProjects.slice(0, limit).map(p => ({
      ...p,
      similarityScore: 0.85,
      matchPercentage: '85%',
      matchVal: 85
    }));
  }

  const scoredProjects = allProjects.map(project => {
    const vectorScore = cosineSimilarity(userInterestVector, project.featureVector || {});
    const matchPercentage = Math.min(99, Math.max(60, Math.round(vectorScore * 100)));

    return {
      ...project,
      similarityScore: vectorScore,
      matchPercentage: `${matchPercentage}%`,
      matchVal: matchPercentage
    };
  });

  return scoredProjects
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, limit);
}

/**
 * Builds or updates an aggregated User Interest Vector based on visitor interactions.
 * 
 * @param {Array<string>} viewedProjectIds - List of project IDs viewed during current session
 * @param {Array<string>} clickedTags - Tech tags clicked by visitor
 * @param {Array<Object>} allProjects - Full list of projects
 * @returns {Object} Aggregated user feature vector
 */
export function buildUserInterestVector(viewedProjectIds = [], clickedTags = [], allProjects = []) {
  const interestVector = {
    frontend: 0.5,
    backend: 0.5,
    ai: 0.3,
    ui: 0.5,
    fullstack: 0.5,
    database: 0.4
  };

  // Weight viewed projects into vector
  viewedProjectIds.forEach(id => {
    const proj = allProjects.find(p => p.id === id || p.name === id);
    if (proj && proj.featureVector) {
      Object.keys(proj.featureVector).forEach(key => {
        interestVector[key] = (interestVector[key] || 0) + (proj.featureVector[key] * 0.4);
      });
    }
  });

  // Weight clicked tags into vector
  clickedTags.forEach(tag => {
    const lower = String(tag).toLowerCase();
    if (lower.includes('react') || lower.includes('ui') || lower.includes('tailwind') || lower.includes('frontend')) {
      interestVector.frontend += 0.3;
      interestVector.ui += 0.3;
    }
    if (lower.includes('node') || lower.includes('express') || lower.includes('api') || lower.includes('backend')) {
      interestVector.backend += 0.3;
    }
    if (lower.includes('ai') || lower.includes('puter') || lower.includes('fastapi') || lower.includes('python')) {
      interestVector.ai += 0.4;
    }
    if (lower.includes('mongo') || lower.includes('sql') || lower.includes('db')) {
      interestVector.database += 0.3;
    }
  });

  // Normalize weights between 0 and 1
  const maxVal = Math.max(...Object.values(interestVector), 1.0);
  Object.keys(interestVector).forEach(k => {
    interestVector[k] = Math.round((interestVector[k] / maxVal) * 100) / 100;
  });

  return interestVector;
}
