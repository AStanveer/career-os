import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { RoleProvider } from './shared/context/RoleContext.jsx'
import { ProfileProvider } from './shared/context/ProfileContext.jsx'
import './styles/index.css'

// HashRouter is used deliberately here: GitHub Pages serves static files
// with no server-side rewrites, so a BrowserRouter route like /dashboard
// would 404 on refresh. HashRouter keeps everything after the # client-side
// only, so it always resolves to index.html first. Zero config needed.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <RoleProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </RoleProvider>
    </HashRouter>
  </React.StrictMode>,
)
