"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Briefcase } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/kodelaData";

export default function TeamSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TEAM_MEMBERS.length;
  const current = TEAM_MEMBERS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="tim"
      className="py-20 lg:py-24 bg-fluent-canvas border-b border-fluent-border/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Clean Slide Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
              Struktur Organisasi
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fluent-ink">
              Empat penggerak utama di balik Mihaku Edutainment.
            </h2>
            <p className="mt-3 text-base text-fluent-secondary leading-relaxed">
              Struktur tim ramping dengan pembagian tanggung jawab strategis di bidang produk,
              rekayasa perangkat lunak, kurikulum, dan pertumbuhan komunitas.
            </p>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="font-mono text-sm font-semibold text-fluent-secondary tabular-nums mr-1">
              <span className="text-fluent-ink">{current.slideNumber}</span> / 0{total}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Anggota sebelumnya"
              className="w-10 h-10 rounded-full bg-white border border-fluent-border hover:border-fluent-blue hover:text-fluent-blue text-fluent-ink flex items-center justify-center shadow-fluent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Anggota berikutnya"
              className="w-10 h-10 rounded-full bg-fluent-blue hover:bg-fluent-blue-hover text-white flex items-center justify-center shadow-fluent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dedicated Executive Slide Showcase */}
        <div
          key={current.name}
          className="bg-white rounded-2xl border border-fluent-border shadow-fluent-md overflow-hidden transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visual Identity Panel */}
            <div
              className="lg:col-span-5 relative p-8 sm:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[360px]"
              style={{
                background: `linear-gradient(135deg, ${current.softBg} 0%, #FFFFFF 100%)`,
              }}
            >
              {/* Subtle top row */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-fluent-border text-xs font-semibold text-fluent-ink shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" style={{ color: current.accent }} />
                  {current.department}
                </span>
                <span
                  className="font-mono text-4xl font-bold opacity-20 select-none"
                  style={{ color: current.accent }}
                >
                  {current.slideNumber}
                </span>
              </div>

              {/* Center Large Avatar Emblem */}
              <div className="my-8 flex items-center gap-5">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl text-white font-display font-bold text-3xl sm:text-4xl flex items-center justify-center shadow-fluent-md shrink-0"
                  style={{ backgroundColor: current.accent }}
                >
                  {current.initials}
                </div>
                <div>
                  <p
                    className="font-display text-lg font-semibold leading-snug"
                    style={{ color: current.accent }}
                  >
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Progress Bar Accent */}
              <div className="flex items-center gap-1.5">
                {TEAM_MEMBERS.map((m, i) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Lihat slide ${m.name}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex ? "w-10" : "w-3 bg-slate-300 hover:bg-slate-400"
                    }`}
                    style={i === activeIndex ? { backgroundColor: current.accent } : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Right Executive Profile Panel */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-fluent-border/70">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: current.accent }}
                >
                  {current.role}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-fluent-ink">
                  {current.name}
                </h3>

                <p className="mt-4 text-base text-fluent-secondary leading-relaxed">
                  {current.bio}
                </p>

                <div className="mt-7 pt-6 border-t border-fluent-border/70">
                  <p className="text-xs font-semibold uppercase tracking-wider text-fluent-secondary mb-3.5">
                    Fokus &amp; Tanggung Jawab Utama
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-fluent-canvas border border-fluent-border/70 text-sm font-medium text-fluent-ink"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: current.accent }}
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 4-Member Slide Selector Strip */}
        <div
          className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          role="tablist"
          aria-label="Pilih anggota struktur organisasi"
        >
          {TEAM_MEMBERS.map((member, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={member.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`relative text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 overflow-hidden ${
                  isActive
                    ? "bg-white border-fluent-blue shadow-fluent"
                    : "bg-white/70 border-fluent-border hover:bg-white hover:border-slate-300"
                }`}
              >
                {/* Top active indicator line */}
                <span
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: member.accent }}
                />
                <span
                  className="w-10 h-10 rounded-lg text-white font-display font-bold text-xs flex items-center justify-center shrink-0"
                  style={{ backgroundColor: member.accent }}
                >
                  {member.initials}
                </span>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-semibold truncate ${
                      isActive ? "text-fluent-blue" : "text-fluent-ink"
                    }`}
                  >
                    {member.name}
                  </p>
                  <p className="text-[11.5px] text-fluent-secondary truncate">{member.role}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
