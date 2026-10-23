import Link from "next/link";
import {
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Clock,
  TrendingUp,
  FileQuestion,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900/80 border border-indigo-500/20 p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Admin Overview & Analytics
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Academic Performance Dashboard
          </h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Monitor real-time student participation, track completion scores across all published quizzes, and analyze cohort proficiency.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/generate"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Generate Quiz with AI
            </Link>
            <Link
              href="/leaderboard"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-sm font-semibold border border-slate-700/80 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-400" />
              View Student Rankings
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Quizzes</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <FileQuestion className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">12</div>
            <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> +3 added this week
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Enrolled Students</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">84</div>
            <p className="text-xs text-purple-300 flex items-center gap-1 mt-1 font-medium">
              Active across 4 cohorts
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Completion Rate</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">92.4%</div>
            <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
              High engagement score
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Score</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-extrabold text-white tracking-tight">82.5%</div>
            <p className="text-xs text-amber-300 flex items-center gap-1 mt-1 font-medium">
              Across all evaluations
            </p>
          </div>
        </div>
      </div>

      {/* Student Results Table Preview */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">Recent Student Results</h3>
            <p className="text-xs text-slate-400 mt-0.5">Individual submissions and performance logs</p>
          </div>
          <Link
            href="/leaderboard"
            className="text-xs font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 transition-colors"
          >
            View Full Leaderboard <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/70 text-xs font-semibold uppercase text-slate-400 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Roll Number</th>
                <th className="px-6 py-4">Quiz Topic</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {[
                { name: "Aarav Sharma", roll: "CS21B001", topic: "Operating Systems", score: "9/10", time: "10 mins ago", badge: "bg-emerald-500/20 text-emerald-400" },
                { name: "Sneha Patel", roll: "CS21B014", topic: "Database Management", score: "10/10", time: "35 mins ago", badge: "bg-emerald-500/20 text-emerald-400" },
                { name: "Rohan Verma", roll: "CS21B022", topic: "Data Structures", score: "8/10", time: "1 hour ago", badge: "bg-blue-500/20 text-blue-400" },
                { name: "Ananya Iyer", roll: "CS21B035", topic: "Computer Networks", score: "7/10", time: "2 hours ago", badge: "bg-amber-500/20 text-amber-400" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {row.name.charAt(0)}
                    </div>
                    {row.name}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{row.roll}</td>
                  <td className="px-6 py-4">{row.topic}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${row.badge}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400 flex items-center gap-1.5 pt-5">
                    <Clock className="w-3.5 h-3.5" />
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
