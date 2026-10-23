"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Trophy,
  Sparkles,
  GraduationCap,
  ChevronRight,
  ExternalLink,
  BookCheck,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Analytics & student scores",
  },
  {
    title: "AI Generator",
    href: "/generate",
    icon: Sparkles,
    badge: "AI",
    description: "Create quizzes with OpenAI",
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: Trophy,
    description: "Top performing students",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-950 text-slate-100 flex flex-col border-r border-slate-800/80 shrink-0 select-none">
      {/* Brand Header */}
      <div className="h-20 px-6 flex items-center border-b border-slate-800/60 bg-gradient-to-b from-slate-900/50 to-transparent">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                QuizMaster
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                Pro
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">College Project Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Core Navigation
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/25 font-semibold"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/80"
              )}
            >
              <div
                className={cn(
                  "p-1.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 group-hover:text-indigo-400 group-hover:bg-slate-800/60"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="truncate">{item.title}</span>
                  {item.badge && (
                    <span
                      className={cn(
                        "text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider transition-colors",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "text-[11px] truncate mt-0.5",
                    isActive ? "text-indigo-100/80" : "text-slate-500 group-hover:text-slate-400"
                  )}
                >
                  {item.description}
                </p>
              </div>

              {isActive && (
                <ChevronRight className="w-4 h-4 text-white/70 ml-auto shrink-0 animate-pulse" />
              )}
            </Link>
          );
        })}

        {/* Live Quiz Preview Callout */}
        <div className="pt-6">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Student Quick Portal
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-indigo-400 mb-1.5">
              <BookCheck className="w-4 h-4" />
              <span className="text-xs font-semibold">Test Link Ready</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Generate or publish a quiz to share a clean student-taking link instantly.
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              Create New Quiz <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer / System Status */}
      <div className="p-4 border-t border-slate-800/60 bg-slate-950/60">
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Flame className="w-4 h-4" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-200 truncate">PostgreSQL & Prisma</p>
            <p className="text-[11px] text-emerald-400 font-medium">Engine Connected</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
