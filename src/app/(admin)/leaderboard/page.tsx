import { Trophy, Medal, Star, Flame, Award, ArrowUp } from "lucide-react";

export default function LeaderboardPage() {
  const topStudents = [
    { rank: 1, name: "Sneha Patel", roll: "CS21B014", score: 980, quizzes: 10, avatar: "🥇", trend: "+2" },
    { rank: 2, name: "Aarav Sharma", roll: "CS21B001", score: 940, quizzes: 10, avatar: "🥈", trend: "+1" },
    { rank: 3, name: "Rohan Verma", roll: "CS21B022", score: 890, quizzes: 9, avatar: "🥉", trend: "+0" },
    { rank: 4, name: "Ananya Iyer", roll: "CS21B035", score: 840, quizzes: 9, avatar: "4", trend: "+3" },
    { rank: 5, name: "Vikram Malhotra", roll: "CS21B019", score: 810, quizzes: 8, avatar: "5", trend: "-1" },
    { rank: 6, name: "Pooja Reddy", roll: "CS21B042", score: 790, quizzes: 8, avatar: "6", trend: "+2" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4" /> Academic Hall of Fame
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Student Leaderboard</h2>
          <p className="text-sm text-slate-400 mt-1">
            Cumulative rankings based on quiz accuracy, speed, and consistent submissions.
          </p>
        </div>
      </div>

      {/* Podium Top 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-6">
        {/* Rank 2 */}
        <div className="order-2 md:order-1 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center relative overflow-hidden flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-2xl shadow-lg mb-3">
            🥈
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 mb-2">
            Rank #2
          </span>
          <h4 className="font-bold text-white text-base">{topStudents[1].name}</h4>
          <p className="font-mono text-xs text-slate-400">{topStudents[1].roll}</p>
          <div className="mt-4 pt-4 border-t border-slate-800/60 w-full flex justify-around text-xs">
            <div>
              <p className="text-slate-500">Score</p>
              <p className="font-bold text-indigo-400 text-sm">{topStudents[1].score} pts</p>
            </div>
            <div>
              <p className="text-slate-500">Completed</p>
              <p className="font-bold text-white text-sm">{topStudents[1].quizzes} Quizzes</p>
            </div>
          </div>
        </div>

        {/* Rank 1 (Tallest / Champion) */}
        <div className="order-1 md:order-2 p-8 rounded-2xl bg-gradient-to-b from-amber-500/15 via-slate-900/80 to-slate-950 border-2 border-amber-500/40 text-center relative overflow-hidden flex flex-col items-center shadow-xl shadow-amber-500/10 scale-105">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-3xl shadow-xl shadow-amber-500/30 mb-3 ring-4 ring-amber-500/20">
            🥇
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 mb-2 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 fill-amber-400" /> Grand Champion
          </span>
          <h4 className="font-extrabold text-white text-lg">{topStudents[0].name}</h4>
          <p className="font-mono text-xs text-amber-200/80">{topStudents[0].roll}</p>
          <div className="mt-5 pt-4 border-t border-amber-500/20 w-full flex justify-around text-xs">
            <div>
              <p className="text-slate-400">Total Score</p>
              <p className="font-extrabold text-amber-400 text-base">{topStudents[0].score} pts</p>
            </div>
            <div>
              <p className="text-slate-400">Quizzes</p>
              <p className="font-bold text-white text-base">{topStudents[0].quizzes} Perfect</p>
            </div>
          </div>
        </div>

        {/* Rank 3 */}
        <div className="order-3 md:order-3 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center relative overflow-hidden flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-amber-700/60 flex items-center justify-center text-2xl shadow-lg mb-3">
            🥉
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-900/30 text-amber-400 mb-2">
            Rank #3
          </span>
          <h4 className="font-bold text-white text-base">{topStudents[2].name}</h4>
          <p className="font-mono text-xs text-slate-400">{topStudents[2].roll}</p>
          <div className="mt-4 pt-4 border-t border-slate-800/60 w-full flex justify-around text-xs">
            <div>
              <p className="text-slate-500">Score</p>
              <p className="font-bold text-indigo-400 text-sm">{topStudents[2].score} pts</p>
            </div>
            <div>
              <p className="text-slate-500">Completed</p>
              <p className="font-bold text-white text-sm">{topStudents[2].quizzes} Quizzes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Rankings Table */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden">
        <div className="p-6 border-b border-slate-800/80">
          <h3 className="text-base font-bold text-white">Full Cohort Rankings</h3>
          <p className="text-xs text-slate-400">All registered students ranked by cumulative points</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/70 text-xs font-semibold uppercase text-slate-400 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Student Name</th>
                <th className="px-6 py-4">Roll Number</th>
                <th className="px-6 py-4">Quizzes Taken</th>
                <th className="px-6 py-4">Total Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {topStudents.map((student) => (
                <tr key={student.roll} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-300">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-xs">
                      #{student.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold">
                      {student.name.charAt(0)}
                    </div>
                    {student.name}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">{student.roll}</td>
                  <td className="px-6 py-4">{student.quizzes}</td>
                  <td className="px-6 py-4 font-bold text-indigo-400">{student.score} pts</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
