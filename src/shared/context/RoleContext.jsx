import { createContext, useContext, useState } from 'react'

// ──────────────────────────────────────────────────────────────────────────
// RoleContext
// No auth, no passwords. The hackathon brief explicitly allows a one-click
// role bypass — three buttons that set the current role. Every route is
// gated off this single value.
// ──────────────────────────────────────────────────────────────────────────

export const ROLES = {
  CANDIDATE: 'candidate',
  UNIVERSITY: 'university',
  EMPLOYER: 'employer',
}

const RoleContext = createContext(null)

export function RoleProvider({ children }) {
  const [role, setRole] = useState(null) // null = not logged in yet

  const value = {
    role,
    setRole,
    isCandidate: role === ROLES.CANDIDATE,
    isUniversity: role === ROLES.UNIVERSITY,
    isEmployer: role === ROLES.EMPLOYER,
    logout: () => setRole(null),
  }

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
}

export function useRole() {
  const ctx = useContext(RoleContext)
  if (!ctx) throw new Error('useRole must be used within a RoleProvider')
  return ctx
}
