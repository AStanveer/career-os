import { Routes, Route, Navigate } from 'react-router-dom'
import { useRole, ROLES } from './shared/context/RoleContext.jsx'
import ProtectedRoute from './shared/layout/ProtectedRoute.jsx'
import AppShell from './shared/layout/AppShell.jsx'

import LoginPage from './shared/components/LoginPage.jsx'
import WorkAnimalOnboarding from './shared/components/WorkAnimalOnboarding.jsx'

import InterviewGym from './modules/wildcard-interview/InterviewGym.jsx'

import UniversityDashboard from './modules/university/UniversityDashboard.jsx'
import CurriculumAlerts from './modules/university/CurriculumAlerts.jsx'

import CareerMirror from './modules/candidate/CareerMirror.jsx'
import CareerPathNavigator from './modules/candidate/CareerPathNavigator.jsx'
import CandidateHome from './modules/candidate/CandidateHome.jsx'

import TalentFuturesMarket from './modules/employer/TalentFuturesMarket.jsx'
import EmployerHome from './modules/employer/EmployerHome.jsx'

export default function App() {
  const { role } = useRole()

  return (
    <Routes>
      <Route path="/" element={role ? <Navigate to={`/${role}`} replace /> : <LoginPage />} />

      {/* Shared, role-agnostic */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route path="/onboarding" element={<WorkAnimalOnboarding />} />

          {/* ⚡ Wildcard — Interview Intelligence Layer (shared engine, all roles read from it) */}
          <Route path="/interview" element={<InterviewGym />} />

          {/* 🎓 University */}
          <Route path="/university" element={<UniversityDashboard />} />
          <Route path="/university/curriculum-alerts" element={<CurriculumAlerts />} />

          {/* 👤 Candidate */}
          <Route path="/candidate" element={<CandidateHome />} />
          <Route path="/candidate/career-mirror" element={<CareerMirror />} />
          <Route path="/candidate/navigator" element={<CareerPathNavigator />} />

          {/* 💼 Employer */}
          <Route path="/employer" element={<EmployerHome />} />
          <Route path="/employer/talent-futures-market" element={<TalentFuturesMarket />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
