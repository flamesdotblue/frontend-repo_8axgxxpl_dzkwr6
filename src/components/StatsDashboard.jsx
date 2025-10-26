import React, { useEffect, useMemo, useState } from 'react';
import { Activity, Droplet, Flame, Dumbbell } from 'lucide-react';

function StatCard({ title, value, unit, icon: Icon, accent = 'from-sky-500 to-cyan-500', children }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-md dark:bg-white/5 dark:text-white">
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">{title}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl font-semibold">{value}</span>
            {unit && <span className="text-xs text-slate-500">{unit}</span>}
          </div>
        </div>
        <div className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-white/10 dark:text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {children}
    </div>
  );
}

function Sparkline({ data }) {
  const path = useMemo(() => {
    if (!data.length) return '';
    const w = 120;
    const h = 36;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const norm = (v) => (h - 4) - ((v - min) / Math.max(max - min || 1, 1)) * (h - 8);
    return data
      .map((v, i) => `${i === 0 ? 'M' : 'L'} ${(i / (data.length - 1)) * (w - 8) + 4} ${norm(v) + 2}`)
      .join(' ');
  }, [data]);

  return (
    <svg viewBox="0 0 120 36" className="mt-3 h-9 w-full text-sky-500">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function StatsDashboard() {
  const [steps, setSteps] = useState(5421);
  const [calories, setCalories] = useState(730);
  const [water, setWater] = useState(1.2);
  const [workouts, setWorkouts] = useState(2);
  const [trend, setTrend] = useState([4, 5, 6, 5, 7, 8, 7, 9]);

  useEffect(() => {
    const id = setInterval(() => {
      setSteps((s) => s + Math.floor(Math.random() * 5));
      setCalories((c) => c + Math.floor(Math.random() * 2));
      setWater((w) => Math.min(4, +(w + (Math.random() < 0.2 ? 0.1 : 0)).toFixed(1)));
      setTrend((t) => [...t.slice(1), t[t.length - 1] + (Math.random() > 0.5 ? 0.2 : -0.2)]);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Steps" value={steps.toLocaleString()} unit="today" icon={Activity} accent="from-emerald-400 to-teal-500">
        <Sparkline data={trend} />
      </StatCard>
      <StatCard title="Calories" value={calories} unit="kcal" icon={Flame} accent="from-orange-400 to-pink-500">
        <Sparkline data={trend.map((v) => v + 2)} />
      </StatCard>
      <StatCard title="Water" value={water} unit="L" icon={Droplet} accent="from-sky-400 to-cyan-500">
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-gradient-to-r from-sky-400 to-cyan-500" style={{ width: `${(water / 3) * 100}%` }} />
        </div>
        <p className="mt-1 text-xs text-slate-500">Goal: 3L</p>
      </StatCard>
      <StatCard title="Workouts" value={workouts} unit="this week" icon={Dumbbell} accent="from-violet-400 to-fuchsia-500">
        <Sparkline data={trend.map((v, i) => (i % 2 === 0 ? v : v - 1))} />
      </StatCard>
    </section>
  );
}
