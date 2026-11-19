"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Figma,
  ExternalLink,
  Maximize2,
  Flame,
  Gem,
  Heart,
  CheckCircle2,
  Sparkles,
  Home,
  Compass,
  Map,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import KodelaMobileDemo, { DemoScreen, DemoStats } from "./KodelaMobileDemo";
import { CourseId, LINKS } from "@/data/kodelaData";

interface DemoShowcaseSectionProps {
  activeScreen: DemoScreen;
  onScreenChange: (screen: DemoScreen) => void;
  selectedCourse: CourseId;
  onCourseChange: (courseId: CourseId) => void;
  standalone?: boolean;
}

const SCREEN_GUIDES: {
  id: DemoScreen;
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: "splash",
    step: "01",
    title: "Layar Pembuka (Tuturu~!)",
    desc: "Branding KodelaID adaptasi Harvard CSEdu dengan maskot Kodela & opsi Masuk Cepat.",
    icon: Sparkles,
  },
  {
    id: "home",
    step: "02",
    title: "Beranda & Quiz Interaktif",
    desc: "Sapaan personal maskot Kodela, statistik Streak/Hearts, serta akses cepat kuis 5 menit.",
    icon: Home,
  },
  {
    id: "paths",
    step: "03",
    title: "Pemilihan Jalur Belajar",
    desc: "Pilih jalur Python, Pengantar Coding, C++, SQL, Web Dev, Data Science, atau Algorithm.",
    icon: Compass,
  },
  {
    id: "unitmap",
    step: "04",
    title: "Peta Unit Gamifikasi",
    desc: "Alur belajar bertahap (stepping stones) lengkap dengan XP, Gems, Streak, dan target unit.",
    icon: Map,
  },
  {
    id: "quiz",
    step: "05",
    title: "Kuis Coding Real-Time",
    desc: "Jawab soal interaktif Python Dictionary, C++, SQL, dan dapatkan umpan balik instan +XP.",
    icon: HelpCircle,
  },
  {
    id: "streak",
    step: "06",
    title: "7-Day Streak & Sertifikasi",
    desc: "Pelacakan konsistensi belajar harian (Sen–Min) menuju target akhir Sertifikasi Digital.",
    icon: Flame,
  },
  {
    id: "community",
    step: "07",
    title: "Forum Diskusi & Tanya Mentor",
    desc: "Coba kirim pesan langsung pada Forum Chat Basis Data/OOP atau Ruang Tanya Mentor C++.",
    icon: MessageCircle,
  },
];

export default function DemoShowcaseSection({
  activeScreen,
  onScreenChange,
  selectedCourse,
  onCourseChange,
  standalone = false,
}: DemoShowcaseSectionProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "figma">("interactive");
  const [stats, setStats] = useState<DemoStats>({
    xp: 496,
    streak: 7,
    hearts: 5,
    completedQuizzes: 0,
  });

  return (
    <section
      id="demo"
      className={`bg-white ${standalone ? "py-10 lg:py-14" : "py-20 lg:py-24 border-b border-fluent-border/70"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
              Demo Aplikasi Interaktif • Prototipe Figma Mihaku
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fluent-ink">
              Rasakan langsung pengalaman belajar di KodelaID.
            </h2>
            <p className="mt-3 text-base text-fluent-secondary leading-relaxed">
              Seluruh alur layar diadaptasi langsung dari desain Figma resmi Mihaku Edutainment—klik
              tombol di dalam perangkat untuk mencoba kuis coding, menjaga 7-Day Streak, atau mengirim
              pesan di Forum &amp; Ruang Tanya Mentor.
            </p>
          </div>

          {/* Clean Fluent Segmented Control & Actions */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex p-1 rounded-lg bg-fluent-canvas border border-fluent-border">
              <button
                type="button"
                onClick={() => setViewMode("interactive")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all ${
                  viewMode === "interactive"
                    ? "bg-white text-fluent-blue shadow-fluent"
                    : "text-fluent-secondary hover:text-fluent-ink"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Simulator Interaktif
              </button>
              <button
                type="button"
                onClick={() => setViewMode("figma")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold transition-all ${
                  viewMode === "figma"
                    ? "bg-white text-fluent-blue shadow-fluent"
                    : "text-fluent-secondary hover:text-fluent-ink"
                }`}
              >
                <Figma className="w-3.5 h-3.5" />
                Pratinjau Figma
              </button>
            </div>

            <a
              href={LINKS.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-fluent-border bg-white hover:bg-fluent-canvas text-xs font-semibold text-fluent-ink transition-colors"
            >
              Buka di Figma
              <ExternalLink className="w-3.5 h-3.5 text-fluent-secondary" />
            </a>

            {!standalone && (
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-fluent-blue/30 bg-fluent-blue-tint/50 hover:bg-fluent-blue-tint text-xs font-semibold text-fluent-blue transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Mode Studio
              </Link>
            )}
          </div>
        </div>

        {/* Main Showcase Surface */}
        {viewMode === "interactive" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: 7-Screen Navigator + Live Session Telemetry */}
            <div className="lg:col-span-5 space-y-5">
              {/* Live Session Stats Bar */}
              <div className="p-4 rounded-xl bg-fluent-canvas border border-fluent-border grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 border border-fluent-border/70">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-fluent-secondary">
                    <Gem className="w-3.5 h-3.5 text-sky-500" />
                    Total XP
                  </div>
                  <p className="font-display text-xl font-bold text-fluent-ink mt-1">
                    {stats.xp}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-fluent-border/70">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-fluent-secondary">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    Streak
                  </div>
                  <p className="font-display text-xl font-bold text-fluent-ink mt-1">
                    {stats.streak} Hari
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-fluent-border/70">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-fluent-secondary">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    Nyawa
                  </div>
                  <p className="font-display text-xl font-bold text-fluent-ink mt-1">
                    {stats.hearts} / 5
                  </p>
                </div>
              </div>

              {/* Interactive Screen Switcher List */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-fluent-secondary px-1">
                  Pilih Layar Prototipe ({SCREEN_GUIDES.length} Layar Aktif)
                </p>
                {SCREEN_GUIDES.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onScreenChange(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isActive
                          ? "bg-fluent-blue-tint/60 border-fluent-blue shadow-fluent"
                          : "bg-white border-fluent-border hover:border-slate-300 hover:bg-fluent-canvas/50"
                      }`}
                    >
                      <span
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-fluent-blue text-white"
                            : "bg-fluent-canvas text-fluent-secondary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-sm font-semibold ${
                              isActive ? "text-fluent-blue" : "text-fluent-ink"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-[11px] font-mono font-semibold text-fluent-secondary">
                            {item.step}
                          </span>
                        </div>
                        <p className="text-xs text-fluent-secondary mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Subtle Tip */}
              <div className="flex items-center gap-2 text-xs text-fluent-secondary px-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Tip: Coba pilih kursus berbeda di katalog bawah untuk menguji soal kuis Python,
                  C++, SQL, dan Web!
                </span>
              </div>
            </div>

            {/* Right Panel: Clean Microsoft Studio Stage with Playable Phone */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl bg-fluent-canvas border border-fluent-border p-3 sm:p-10 flex flex-col items-center justify-center overflow-hidden">
                {/* Subtle Fluent radial backdrop */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(55% 55% at 50% 45%, rgba(0, 103, 184, 0.08) 0%, rgba(245, 247, 250, 0) 75%)",
                  }}
                />

                {/* Top Quick Subject Switcher above Phone */}
                <div className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-1.5">
                  <span className="text-[11px] font-semibold text-fluent-secondary mr-1">
                    Topik Kuis:
                  </span>
                  {(
                    [
                      { id: "python", label: "Python" },
                      { id: "intro", label: "Pengantar CS" },
                      { id: "cpp", label: "C++ Dasar" },
                      { id: "sql", label: "Master SQL" },
                      { id: "web", label: "Modern Web" },
                    ] as { id: CourseId; label: string }[]
                  ).map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => {
                        onCourseChange(topic.id);
                        onScreenChange("quiz");
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                        selectedCourse === topic.id
                          ? "bg-fluent-blue text-white border-fluent-blue"
                          : "bg-white text-fluent-secondary border-fluent-border hover:border-fluent-blue hover:text-fluent-blue"
                      }`}
                    >
                      {topic.label}
                    </button>
                  ))}
                </div>

                {/* Playable Mobile Simulator */}
                <div className="relative z-10 w-full">
                  <KodelaMobileDemo
                    activeScreen={activeScreen}
                    onScreenChange={onScreenChange}
                    selectedCourse={selectedCourse}
                    onCourseChange={onCourseChange}
                    onStatsChange={setStats}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Figma Embed View */
          <div className="rounded-2xl border border-fluent-border bg-fluent-canvas overflow-hidden shadow-fluent">
            <div className="px-5 py-3.5 bg-white border-b border-fluent-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Figma className="w-4 h-4 text-fluent-blue" />
                <span className="text-sm font-semibold text-fluent-ink">
                  Figma File — Mihaku / KodelaID UI/UX Design
                </span>
              </div>
              <a
                href={LINKS.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-fluent-blue hover:bg-fluent-blue-hover text-white text-xs font-semibold transition-colors"
              >
                Buka Kanvas Penuh di Figma
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="relative w-full h-[640px] bg-white">
              <iframe
                title="Pratinjau Desain Figma Mihaku KodelaID"
                src={LINKS.figmaEmbed}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
            <div className="px-5 py-3 bg-fluent-canvas border-t border-fluent-border text-xs text-fluent-secondary flex flex-wrap items-center justify-between gap-2">
              <span>
                Catatan: Jika pratinjau Figma meminta login akun Figma di browser Anda, gunakan{" "}
                <button
                  type="button"
                  onClick={() => setViewMode("interactive")}
                  className="font-semibold text-fluent-blue hover:underline"
                >
                  Simulator Interaktif
                </button>{" "}
                untuk mencoba seluruh layar secara langsung tanpa login.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
