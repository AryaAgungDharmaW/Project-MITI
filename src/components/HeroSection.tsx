"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Flame,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Award,
  Code2,
} from "lucide-react";
import { CourseId, LINKS } from "@/data/kodelaData";

interface HeroSectionProps {
  onStartQuiz: (courseId: CourseId) => void;
  onScrollToDemo: () => void;
}

export default function HeroSection({ onStartQuiz, onScrollToDemo }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden fluent-hero-bg border-b border-fluent-border/70"
    >
      {/* Subtle architectural hairline grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 103, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 103, 184, 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column (Microsoft Learn / Surface Clean Style) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-fluent-border shadow-fluent text-[11px] sm:text-xs font-semibold text-fluent-blue">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate sm:whitespace-normal">
                Mihaku Edutainment • Adaptasi Harvard CSEdu
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-fluent-ink leading-[1.12]">
              Pendidikan Ilmu Komputer{" "}
              <span className="text-fluent-blue">Tingkat Dunia</span> dalam 5 Menit Sehari.
            </h1>

            <p className="text-base sm:text-lg text-fluent-secondary leading-relaxed max-w-2xl">
              <strong className="font-semibold text-fluent-ink">KodelaID</strong> menghadirkan
              pengalaman belajar pemrograman Python, C++, SQL, Web Development, hingga Data Science
              melalui kuis interaktif, sistem{" "}
              <span className="text-fluent-ink font-medium">7-Day Streak</span>, forum diskusi, dan
              ruang tanya mentor—dirancang ringkas, terukur, dan gratis untuk mulai.
            </p>

            {/* Clean Microsoft Action Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onScrollToDemo}
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-white bg-fluent-blue hover:bg-fluent-blue-hover rounded-[4px] shadow-sm transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                Coba Demo Aplikasi
              </button>

              <a
                href="#kurikulum"
                className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-semibold text-fluent-ink bg-white hover:bg-fluent-canvas border border-fluent-border rounded-[4px] transition-colors"
              >
                Jelajahi Kurikulum
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={LINKS.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-[14px] font-semibold text-fluent-blue hover:underline"
              >
                Lihat Desain Figma
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Enterprise-clean Key Metrics Row */}
            <div className="pt-6 border-t border-fluent-border/80 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              <div>
                <p className="font-display text-2xl font-semibold text-fluent-ink">7 Jalur</p>
                <p className="text-xs sm:text-sm text-fluent-secondary mt-0.5">
                  Kurikulum Ilmu Komputer
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-fluent-ink">5 Menit</p>
                <p className="text-xs sm:text-sm text-fluent-secondary mt-0.5">
                  Sesi Kuis Mikro Harian
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-fluent-ink">3 Sektor</p>
                <p className="text-xs sm:text-sm text-fluent-secondary mt-0.5">
                  Belajar, Game & Mentor
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Fluent Showcase Card previewing KodelaID */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-fluent-border shadow-fluent-lg p-6 sm:p-7">
              {/* Top Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-fluent-border/70">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-fluent-blue-tint text-fluent-blue flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-fluent-blue">
                      KodelaID Preview
                    </p>
                    <p className="text-xs text-fluent-secondary">
                      Harvard CSEdu Adapted • MVP v2.0
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />7 Streak
                </span>
              </div>

              {/* Mascot Welcome Strip */}
              <div className="mt-5 flex items-center gap-4 p-4 rounded-xl bg-fluent-canvas border border-fluent-border/70">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0067B8] p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                  <img
                    src="/images/kodela-mascot.png"
                    alt="Maskot KodelaID"
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div className="min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[11px] font-bold mb-1">
                    Tuturu~! ★
                  </span>
                  <p className="text-sm font-semibold text-fluent-ink leading-snug">
                    Halo, aku Kodela! Siap latihan koding 5 menit hari ini?
                  </p>
                </div>
              </div>

              {/* Live Code Quiz Sneak Peek */}
              <div className="mt-4 p-4 rounded-xl bg-[#0F172A] text-slate-100 font-mono text-xs leading-relaxed">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span>python_dasar.py</span>
                  <span className="text-emerald-400">+15 XP</span>
                </div>
                <code>
                  <span className="text-sky-300">siswa</span> ={" "}
                  <span className="text-amber-300">{`{"nama": "Mayuri", "xp": 500}`}</span>
                  <br />
                  <span className="text-slate-400"># Tipe struktur data: Dictionary</span>
                </code>
              </div>

              {/* Quick Launch Pills */}
              <div className="mt-5">
                <p className="text-xs font-semibold text-fluent-secondary uppercase tracking-wider mb-2.5">
                  Mulai Langsung Kuis Interaktif
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: "python", label: "Python Dasar", sub: "Harvard CSEdu" },
                      { id: "cpp", label: "C++ Dasar", sub: "cin / cout & OOP" },
                      { id: "sql", label: "Master SQL", sub: "Query Basis Data" },
                      { id: "intro", label: "Pengantar CS", sub: "Logika & Algoritma" },
                    ] as { id: CourseId; label: string; sub: string }[]
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onStartQuiz(item.id)}
                      className="text-left p-3 rounded-lg border border-fluent-border hover:border-fluent-blue hover:bg-fluent-blue-tint/40 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-fluent-ink group-hover:text-fluent-blue">
                          {item.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-fluent-secondary group-hover:text-fluent-blue group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] text-fluent-secondary mt-0.5">{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Feature Strip */}
              <div className="mt-5 pt-4 border-t border-fluent-border/70 flex items-center justify-between text-xs text-fluent-secondary">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Bisa dicoba langsung tanpa login
                </span>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-1 font-semibold text-fluent-blue hover:underline"
                >
                  <Award className="w-3.5 h-3.5" />
                  Buka Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
