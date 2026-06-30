import { useNavigate } from 'react-router-dom'
import { useRole, ROLES } from '../context/RoleContext.jsx'

// One-click login bypass: three buttons set the role, no auth at all.
export default function LoginPage() {
  const { setRole } = useRole()
  const navigate = useNavigate()

  const choose = (role) => {
    setRole(role)
    navigate(`/${role}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand text-white px-6">
      <h1 className="text-3xl font-bold mb-2">Career OS</h1>
      <p className="text-white/70 mb-10">Choose a role to continue</p>

      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => choose(ROLES.CANDIDATE)}
          className="px-6 py-4 rounded-xl bg-signal-awareness hover:opacity-90 transition-opacity font-semibold"
        >
          👤 Candidate
        </button>
        <button
          onClick={() => choose(ROLES.UNIVERSITY)}
          className="px-6 py-4 rounded-xl bg-signal-readiness hover:opacity-90 transition-opacity font-semibold"
        >
          🎓 University
        </button>
        <button
          onClick={() => choose(ROLES.EMPLOYER)}
          className="px-6 py-4 rounded-xl bg-signal-employer hover:opacity-90 transition-opacity font-semibold"
        >
          💼 Employer
        </button>
      </div>
    </div>
  )
}
