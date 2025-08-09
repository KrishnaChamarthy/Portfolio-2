import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RepoScopeProject from './pages/RepoScopeProject.jsx'
import CampusCoreProject from './pages/CampusCoreProject.jsx'
import ExoplanetProject from './pages/ExoplanetProject.jsx'
import CurrExchProject from './pages/CurrExchProject.jsx'
import PathFinderProject from './pages/PathFinderProject.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/reposcope" element={<RepoScopeProject />} />
        <Route path="/projects/campuscore" element={<CampusCoreProject />} />
        <Route path="/projects/exoplanet" element={<ExoplanetProject />} />
        <Route path="/projects/currexch" element={<CurrExchProject />} />
        <Route path="/projects/pathfinding" element={<PathFinderProject />} />
      </Routes>
    </Router>
  </StrictMode>,
)
