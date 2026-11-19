"use client";

import React, { useState } from "react";
import { Clock, Layers, ArrowRight, Lock, PlayCircle } from "lucide-react";
import { CourseId, LEARNING_PATHS } from "@/data/kodelaData";

interface CoursesSectionProps {
  onSelectCourseQuiz: (courseId: CourseId) => void;
}

const CATEGORIES = ["Semua", "Pemrograman", "Data & Basis Data", "Web & Algoritma"] as const;

export default function CoursesSection({ onSelectCourseQuiz }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("Semua");

  const filteredCourses =
    selectedCategory === "Semua"
      ? LEARNING_PATHS
      : LEARNING_PATHS.filter((c) => c.category === selectedCategory);

  return (
    <section id="kurikulum" className="py-20 lg:py-24 bg-white border-b border-fluent-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Microsoft Learn Underline Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
              Katalog Jalur Pembelajaran
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fluent-ink">
              Pilih kelas yang selaras dengan target karir digitalmu.
            </h2>
            <p className="mt-3 text-base text-fluent-secondary leading-relaxed">
              Setiap kelas dilengkapi modul mikro, kuis evaluasi real-time, serta pendampingan
              mentor. Klik <strong className="text-fluent-ink">Mulai Kuis di Demo</strong> untuk
              langsung menguji materinya di simulator.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-1 border-b border-fluent-border pb-px"
            role="tablist"
            aria-label="Filter kategori kursus"
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${
                    active
                      ? "border-fluent-blue text-fluent-blue"
                      : "border-transparent text-fluent-secondary hover:text-fluent-ink"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isPhase3 = course.status === "FASE 3";
            return (
              <article
                key={course.id}
                className="group bg-white rounded-xl border border-fluent-border hover:border-fluent-blue/50 hover:shadow-fluent-md transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Code Tag + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
                      style={{ backgroundColor: course.softBg, color: course.accentColor }}
                    >
                      &lt;/&gt; {course.codeTag}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        isPhase3
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : "bg-fluent-canvas text-fluent-secondary border border-fluent-border"
                      }`}
                    >
                      {course.badgeText}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-fluent-ink group-hover:text-fluent-blue transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium text-fluent-blue mt-0.5">
                    {course.subtitle}
                  </p>

                  <p className="text-sm text-fluent-secondary mt-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Topic Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-md bg-fluent-canvas text-[11.5px] font-medium text-fluent-secondary"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta + Action */}
                <div className="mt-6 pt-4 border-t border-fluent-border/70">
                  <div className="flex items-center justify-between text-xs text-fluent-secondary mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      {course.modules} Modul
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                    <span className="font-semibold text-fluent-ink">{course.level}</span>
                  </div>

                  {isPhase3 ? (
                    <div className="w-full py-2.5 px-4 rounded-[4px] bg-fluent-canvas border border-fluent-border text-xs font-semibold text-fluent-secondary flex items-center justify-center gap-2">
                      <Lock className="w-3.5 h-3.5" />
                      Hadir pada Fase 3 Roadmap
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectCourseQuiz(course.id)}
                      className="w-full py-2.5 px-4 rounded-[4px] bg-fluent-blue-tint/60 hover:bg-fluent-blue text-fluent-blue hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Mulai Kuis di Demo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
