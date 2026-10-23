"use client";

import Link from "next/link";
import { Sparkles, Plus, Bell, Search } from "lucide-react";

export function TopNav() {
  return (
    <header className="h-20 px-8 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md flex items-center justify-between shrink-0 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            Academic Assessment Platform
            <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
              College Project v1.0
            </span>
          </h1>
          <p className="text-xs text-slate-400">
            Intelligent automated quiz generator, tracking & student leaderboard
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Quick generate CTA */}
        <Link
          href="/generate"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>New AI Quiz</span>
        </Link>
      </div>
    </header>
  );
}
