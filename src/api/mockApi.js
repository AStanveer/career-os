// ──────────────────────────────────────────────────────────────────────────
// mockApi.js — THE SEAM
//
// Every component fetches data through this file. Right now it returns
// seeded / mock data with a fake network delay. After the hackathon,
// each function body swaps to a real fetch() / axios call — the function
// SIGNATURES stay identical, so no UI code changes.
//
// This is the answer to "is the stack viable in 5-10 years": the UI never
// talks to data sources directly, so swapping mocks → real APIs, or even
// swapping backend providers later, never touches a component.
//
// Skeleton only for now — wire in real seed data / logic per module as
// you build each one.
// ──────────────────────────────────────────────────────────────────────────

const FAKE_DELAY = 300

function delay(ms = FAKE_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ── Spine ────────────────────────────────────────────────────────────────

export async function fetchCandidateProfile(candidateId) {
  await delay()
  // TODO: replace with seeded data lookup, then later a real GET /profiles/:id
  return {
    candidateId,
    workAnimalTraits: [],
    skills: [],
    projects: [],
    university: null,
    program: null,
    readiness: { subscores: {}, overall: 0, medal: null, history: [] },
    selfAwareness: { selfScores: [], aiScores: [], gap: null, trend: [] },
  }
}

export async function saveCandidateProfile(candidateId, updates) {
  await delay()
  // TODO: persist to seed store / later a real PATCH /profiles/:id
  return { candidateId, ...updates }
}

// ── Wildcard: Interview Intelligence Layer ─────────────────────────────────

export async function fetchInterviewQuestions(jobId) {
  await delay()
  // TODO: return seeded question bank for the given job listing
  return []
}

export async function submitInterviewSession(candidateId, responses) {
  await delay()
  // TODO: run mockAI.js scoring against responses, return ReadinessSignal
  return { medal: null, subscores: {}, overall: 0 }
}

// ── University ───────────────────────────────────────────────────────────

export async function fetchCohortReadiness(programId) {
  await delay()
  // TODO: aggregate ReadinessSignal across seeded candidates in a programme
  return { programId, heatmap: [] }
}

export async function fetchCurriculumAlerts(programId) {
  await delay()
  // TODO: derive from skill-demand vs cohort-performance seed data
  return []
}

// ── Candidate: Career Mirror + Navigator ────────────────────────────────────

export async function submitSelfRating(candidateId, sessionId, selfScores) {
  await delay()
  // TODO: store self-scores, pair against AI scores for the same session
  return { gap: null }
}

export async function fetchCareerPaths(candidateId) {
  await delay()
  // TODO: return seeded path options based on candidate skills/profile
  return []
}

// ── Employer: Talent Futures Market ─────────────────────────────────────────

export async function fetchTalentPool(filters) {
  await delay()
  // TODO: return anonymised seeded candidate trajectories matching filters
  return []
}

export async function watchCandidate(employerId, candidateId) {
  await delay()
  // TODO: write TalentWatch entity — student is NOT notified at this point
  return { employerId, candidateId, addedAt: new Date().toISOString() }
}

export async function fetchJobs() {
  await delay()
  // TODO: seeded job listings for compulsory core
  return []
}
