import React from 'react';
import { Trophy, Users, Share2 } from 'lucide-react';

const leaderboard = [
  { name: 'Ava', points: 12450 },
  { name: 'Liam', points: 11890 },
  { name: 'Mia', points: 11110 },
  { name: 'Noah', points: 10420 },
  { name: 'Zoe', points: 9920 },
];

const challenges = [
  { title: '7-Day Hydration Streak', progress: 4, total: 7 },
  { title: '30k Weekend Step-Off', progress: 18, total: 30 },
  { title: 'Core Crusher: 5 Sessions', progress: 3, total: 5 },
];

export default function CommunitySection() {
  return (
    <section className="mx-auto my-12 max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-semibold">Leaderboard</h3>
          </div>
          <ul className="space-y-2">
            {leaderboard.map((p, i) => (
              <li key={p.name} className="flex items-center justify-between rounded-xl bg-gradient-to-r from-white to-white/60 p-3 ring-1 ring-slate-200 dark:from-white/10 dark:to-white/5 dark:ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">{i + 1}</span>
                  <span className="font-medium">{p.name}</span>
                </div>
                <span className="text-slate-600 dark:text-slate-300">{p.points.toLocaleString()} pts</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-sky-500" />
            <h3 className="text-lg font-semibold">Group challenges</h3>
          </div>
          <div className="space-y-3">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-xl bg-gradient-to-r from-sky-50 to-cyan-50 p-4 ring-1 ring-sky-100 dark:from-white/10 dark:to-white/5 dark:ring-white/10">
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-medium">{c.title}</p>
                  <button className="inline-flex items-center gap-1 rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-white shadow-sm transition hover:bg-sky-400">
                    <Share2 className="h-3.5 w-3.5" /> Invite
                  </button>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-500" style={{ width: `${(c.progress / c.total) * 100}%` }} />
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{c.progress}/{c.total} complete</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
