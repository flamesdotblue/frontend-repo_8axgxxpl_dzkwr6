import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bell, ShieldCheck } from 'lucide-react';

export default function Hero3D() {
  const handleNotify = async () => {
    if (!('Notification' in window)) return;
    if (Notification.permission === 'default') {
      try {
        await Notification.requestPermission();
      } catch (e) {
        // ignore errors
      }
    }
    if (Notification.permission === 'granted') {
      new Notification("You're set! We'll remind you to move, hydrate, and refuel.");
    }
  };

  return (
    <section className="relative min-h-[75vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16 pt-20 sm:pt-28">
        <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-200">Private by design</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Own your fitness journey
          <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Track. Train. Thrive.
          </span>
        </h1>
        <p className="max-w-xl text-pretty text-white/80">
          Real-time stats, smart workout plans, nutrition guidance, and a motivating community — all in one beautiful, mobile-first experience.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleNotify}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <Bell className="h-4 w-4" /> Enable reminders
          </button>

          <div className="ml-1 inline-flex items-center gap-2 text-xs text-white/70">
            <span>Sign in with</span>
            <div className="flex gap-2">
              <button className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                Google
              </button>
              <button className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                Facebook
              </button>
              <button className="rounded-full bg-white/10 px-3 py-1 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
