import React from 'react';
import Hero3D from './components/Hero3D';
import StatsDashboard from './components/StatsDashboard';
import WorkoutPlanner from './components/WorkoutPlanner';
import CommunitySection from './components/CommunitySection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500" />
          <span className="text-lg font-semibold text-slate-900 dark:text-white">PulseFit</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-700 md:flex dark:text-slate-200">
          <a href="#dashboard" className="hover:text-sky-600">Dashboard</a>
          <a href="#planner" className="hover:text-sky-600">Planner</a>
          <a href="#community" className="hover:text-sky-600">Community</a>
        </nav>
      </header>

      <main>
        <Hero3D />
        <section id="dashboard">
          <StatsDashboard />
        </section>
        <section id="planner">
          <WorkoutPlanner />
        </section>
        <section id="community">
          <CommunitySection />
        </section>
      </main>

      <footer className="mx-auto mt-16 max-w-6xl px-6 pb-16 text-xs text-slate-500">
        <p>Designed for mobile-first wellness • Works great on phones and tablets</p>
      </footer>
    </div>
  );
}

export default App;
