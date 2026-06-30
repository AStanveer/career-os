import { createContext, useContext, useState, useCallback } from 'react'
import { fetchCandidateProfile } from '../../api/mockApi.js'

// ──────────────────────────────────────────────────────────────────────────
// ProfileContext — THE SPINE
//
// Per the architecture doc (Section 3 & 4.2): one CandidateProfile object
// carries two signals — ReadinessSignal (from the Interview Intelligence
// wildcard) and SelfAwareness (from Career Mirror). The candidate writes to
// both; university reads aggregated slices as cohort readiness; employer
// reads predictive slices as hiring risk / rising-talent trajectories.
//
// Every module is a CONSUMER of this spine, never an island. Modules should
// read from here via the selector hooks below rather than holding their
// own duplicate state.
//
// All data currently flows through mockApi.js (the seam). Swapping mock
// data for real HTTP calls later means editing mockApi.js only — this
// context and every component using it stays unchanged.
// ──────────────────────────────────────────────────────────────────────────

const ProfileContext = createContext(null)

// Shape reference (see architecture doc Section 4.2 data model table):
// {
//   candidateId, workAnimalTraits, skills, projects, university, program,
//   readiness: { subscores, overall, medal, history: [] },
//   selfAwareness: { selfScores: [], aiScores: [], gap, trend: [] },
// }

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadProfile = useCallback(async (candidateId) => {
    setLoading(true)
    const data = await fetchCandidateProfile(candidateId)
    setProfile(data)
    setLoading(false)
    return data
  }, [])

  // Selectors — University/Employer views should use these rather than
  // reaching into `profile` directly, so the read contract stays explicit.
  const selectReadiness = () => profile?.readiness ?? null
  const selectSelfAwareness = () => profile?.selfAwareness ?? null

  const value = {
    profile,
    setProfile,
    loading,
    loadProfile,
    selectReadiness,
    selectSelfAwareness,
  }

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within a ProfileProvider')
  return ctx
}
