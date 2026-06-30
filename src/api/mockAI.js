// ──────────────────────────────────────────────────────────────────────────
// mockAI.js — simulated AI, deterministic and explainable
//
// Per the architecture doc: "All AI is deterministic, seeded, explainable.
// Every technical risk we once worried about is gone." No tokens, no
// external model calls — just transparent formulas judges can be shown.
//
// Keep every function pure and explainable: given the same input, always
// the same output, and able to say WHY in plain language.
// ──────────────────────────────────────────────────────────────────────────

// Interview Intelligence: score a single response dimension 0-100.
// TODO: replace placeholder logic with the real seeded scoring rule.
export function scoreResponse(responseText, dimension) {
  return { score: 0, reason: 'TODO: explain why this score was given' }
}

// Roll up dimension scores into a medal tier.
export function calculateMedal(overallScore) {
  if (overallScore >= 80) return 'gold'
  if (overallScore >= 60) return 'silver'
  if (overallScore >= 1) return 'bronze'
  return null
}

// Career Mirror: compare self-rating vs AI rating per dimension.
export function calculateSelfAwarenessGap(selfScores, aiScores) {
  // TODO: per-dimension diff + overall gap, flag overconfident/underconfident
  return { perDimension: [], overallGap: 0, flag: null }
}

// Curriculum Gap Alert: compare cohort performance vs job-market skill demand.
export function detectCurriculumGap(cohortSkillScores, marketSkillDemand) {
  // TODO: threshold-based comparison, return list of weak-skill alerts
  return []
}
