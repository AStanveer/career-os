import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useRole, ROLES } from '../context/RoleContext.jsx'

// ──────────────────────────────────────────────────────────────────────────
// AppShell — single responsive web shell.
//
// Per latest decision: dropping the MobileShell/DashboardShell split from
// the original architecture doc to save build time. One shell, built
// desktop-first and responsive, works across roles. Adjust nav items per
// role below.
// ──────────────────────────────────────────────────────────────────────────

const NAV_BY_ROLE = {
  [ROLES.CANDIDATE]: [
    { label: 'Home', to: '/candidate' },
    { label: 'Interview Gym', to: '/interview' },
    { label: 'Career Mirror', to: '/candidate/career-mirror' },
    { label: 'Path Navigator', to: '/candidate/navigator' },
  ],
  [ROLES.UNIVERSITY]: [
    { label: 'Dashboard', to: '/university' },
    { label: 'Curriculum Alerts', to: '/university/curriculum-alerts' },
  ],
  [ROLES.EMPLOYER]: [
    { label: 'Home', to: '/employer' },
    { label: 'Talent Futures Market', to: '/employer/talent-futures-market' },
  ],
}

export default function AppShell() {
  const { role, logout } = useRole()
  const navigate = useNavigate()
  const navItems = NAV_BY_ROLE[role] ?? []

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-brand text-white">
        <Link to={`/${role}`} className="font-bold text-lg tracking-tight">
          Career OS
        </Link>
        <nav className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-brand-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <button onClick={handleLogout} className="text-sm hover:text-brand-accent transition-colors">
          Switch role
        </button>
      </header>

      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  )
}
