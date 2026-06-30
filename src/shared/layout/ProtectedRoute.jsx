import { Navigate, Outlet } from 'react-router-dom'
import { useRole } from '../context/RoleContext.jsx'

// Simple gate: if no role is set, bounce to the login/role-select screen.
// No tokens, no expiry — this is a hackathon demo, not a security boundary.
export default function ProtectedRoute() {
  const { role } = useRole()
  if (!role) return <Navigate to="/" replace />
  return <Outlet />
}
