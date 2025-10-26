import React, { useMemo, useState } from 'react';
import { Dumbbell, Goal, Clock } from 'lucide-react';

const GOALS = [
  { id: 'weight_loss', label: 'Weight loss' },
  { id: 'muscle_gain', label: 'Muscle gain' },
  { id: 'endurance', label: 'Endurance' },
  { id: 'general', label: 'General fitness' },
];

function PlanRow({ day, focus, details }) {
  return (
    <div className="flex items-start justify-between rounded-xl border border-slate-200 bg-white/70 p-3 text-sm shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
      <div>
        <p className="font-medium">{day}</p>
        <p className="text-slate-600 dark:text-slate-300">{focus}</p>
      </div>
      <p className="text-right text-slate-500 dark:text-slate-300">{details}</p>
    </div>
  );
}

export default function WorkoutPlanner() {
  const [goal, setGoal] = useState('general');
  const [days, setDays] = useState(4);
  const [duration, setDuration] = useState(45);

  const plan = useMemo(() => {
    const templates = {
      weight_loss: [
        ['Mon', 'HIIT + Steps', '20 min HIIT, 40 min brisk walk'],
        ['Tue', 'Upper Body', 'Supersets, moderate weights'],
        ['Wed', 'LISS Cardio', '45-60 min low intensity'],
        ['Thu', 'Lower Body', 'Circuits + core'],
        ['Fri', 'Mobility', 'Yoga + stretching'],
        ['Sat', 'Full Body', 'Compound lifts + intervals'],
        ['Sun', 'Active Rest', '10k steps, light mobility'],
      ],
      muscle_gain: [
        ['Mon', 'Push', 'Bench, OHP, triceps'],
        ['Tue', 'Pull', 'Rows, pull-ups, biceps'],
        ['Wed', 'Legs', 'Squats, lunges, calves'],
        ['Thu', 'Rest', 'Mobility + steps'],
        ['Fri', 'Upper', 'Hypertrophy focus'],
        ['Sat', 'Lower', 'Glutes + hamstrings'],
        ['Sun', 'Rest', 'Walk + stretch'],
      ],
      endurance: [
        ['Mon', 'Intervals', 'VO2 max repeats'],
        ['Tue', 'Strength', 'Core + single-leg'],
        ['Wed', 'Tempo', 'Sustained pace run/ride'],
        ['Thu', 'Easy', 'Zone 2 cardio'],
        ['Fri', 'Mobility', 'Hips + ankles'],
        ['Sat', 'Long', 'Endurance session'],
        ['Sun', 'Rest', 'Walk + foam roll'],
      ],
      general: [
        ['Mon', 'Full Body', 'Compound lifts'],
        ['Tue', 'Cardio', 'Intervals or cycling'],
        ['Wed', 'Mobility', 'Yoga + stretch'],
        ['Thu', 'Upper', 'Push/pull mix'],
        ['Fri', 'Lower', 'Quads + posterior'],
        ['Sat', 'Conditioning', 'Kettlebells + core'],
        ['Sun', 'Rest', 'Steps + breathe'],
      ],
    };

    const base = templates[goal];
    const selected = base.slice(0, Math.min(days, 7));
    return selected.map((row) => ({ day: row[0], focus: row[1], details: row[2] + ` • ~${duration} min` }));
  }, [goal, days, duration]);

  return (
    <section className="mx-auto mt-10 max-w-6xl px-6">
      <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-6 ring-1 ring-sky-100 dark:from-white/5 dark:to-white/10 dark:ring-white/10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Personalized workout plan</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Set your goal and we\'ll craft a weekly routine.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
              <Goal className="h-4 w-4 text-sky-500" />
              <select value={goal} onChange={(e) => setGoal(e.target.value)} className="bg-transparent outline-none">
                {GOALS.map((g) => (
                  <option key={g.id} value={g.id}>{g.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
              <Dumbbell className="h-4 w-4 text-fuchsia-500" />
              <input type="range" min="3" max="7" value={days} onChange={(e) => setDays(Number(e.target.value))} />
              <span>{days} days</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
              <Clock className="h-4 w-4 text-emerald-500" />
              <input type="number" min="20" max="120" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-16 bg-transparent outline-none" />
              <span>min</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plan.map((row) => (
            <PlanRow key={row.day} day={row.day} focus={row.focus} details={row.details} />)
          )}
        </div>
      </div>
    </section>
  );
}
