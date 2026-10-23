"use client";

import { useState } from "react";
import { Sparkles, HelpCircle, Sliders, Play, Share2, Check, Clock, AlertCircle } from "lucide-react";

export default function GeneratePage() {
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [questionCount, setQuestionCount] = useState(5);
  const [timeLimit, setTimeLimit] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-2">
          <Sparkles className="w-3.5 h-3.5" /> OpenAI Engine Connected
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">AI Quiz Generator</h2>
        <p className="text-sm text-slate-400 mt-1">
          Specify your academic topic, difficulty level, and parameters to synthesize high-quality multiple-choice questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Generator Form */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 shadow-xl space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <h3 className="font-bold text-white text-base">Quiz Specifications</h3>
            <p className="text-xs text-slate-400 mt-0.5">Parameters sent to OpenAI for question generation</p>
          </div>

          <div className="space-y-4">
            {/* Topic Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Topic or Syllabus Unit
              </label>
              <input
                type="text"
                placeholder="e.g. Memory Management in Operating Systems"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Target Difficulty
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Easy", "Medium", "Hard"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setDifficulty(lvl)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      difficulty === lvl
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Question Count & Time Limit */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Questions ({questionCount})
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Timer ({timeLimit}m)
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            <button
              type="button"
              disabled={!topic.trim() || isGenerating}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 disabled:opacity-50 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all mt-6"
            >
              <Sparkles className="w-4 h-4" />
              {isGenerating ? "Synthesizing Questions..." : "Generate with AI"}
            </button>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 border-dashed min-h-[400px] flex flex-col items-center justify-center text-center p-12">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
            <Sparkles className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-white text-lg">AI Generation Preview</h3>
          <p className="text-slate-400 text-sm max-w-md mt-1">
            Fill out the quiz parameters on the left and click <strong>Generate with AI</strong>. You'll be able to review, edit questions, and publish the shareable student link.
          </p>
        </div>
      </div>
    </div>
  );
}
