import React from "react";
import { Target, Compass, Flag, CheckCircle2, Clock, CircleDot } from "lucide-react";
import { ROADMAP_PHASES } from "@/data/kodelaData";

export default function CompanySection() {
  return (
    <section id="perusahaan" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: Profil, Visi, Misi & Tujuan Perusahaan */}
        <div>
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
              Tentang Mihaku Edutainment
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fluent-ink">
              Menyetarakan akses pendidikan teknologi bertaraf internasional.
            </h2>
            <p className="mt-3 text-base text-fluent-secondary leading-relaxed">
              Mihaku Edutainment adalah perusahaan teknologi pendidikan (EdTech) yang menghadirkan
              pembelajaran ilmu komputer secara aplikatif, menyenangkan, dan mudah diakses oleh
              pelajar, mahasiswa, maupun masyarakat luas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-fluent-canvas border border-fluent-border">
              <span className="w-10 h-10 rounded-lg bg-white border border-fluent-border text-fluent-blue flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-fluent-blue">
                Visi Kami
              </p>
              <h3 className="font-display text-lg font-semibold text-fluent-ink mt-1">
                Menjadi Platform EdTech Terdepan
              </h3>
              <p className="text-sm text-fluent-secondary mt-2.5 leading-relaxed">
                Menjadi platform teknologi edukasi terdepan di Indonesia yang menghadirkan akses
                pembelajaran ilmu komputer berkualitas tinggi bertaraf global.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-fluent-canvas border border-fluent-border">
              <span className="w-10 h-10 rounded-lg bg-white border border-fluent-border text-fluent-blue flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-fluent-blue">
                Misi Kami
              </p>
              <h3 className="font-display text-lg font-semibold text-fluent-ink mt-1">
                Adaptasi Kurikulum &amp; Praktik Terukur
              </h3>
              <ul className="text-sm text-fluent-secondary mt-2.5 space-y-2 leading-relaxed">
                <li>• Mengadaptasi materi ilmu komputer Harvard CSEdu secara aplikatif.</li>
                <li>• Membangun kuis interaktif &amp; evaluasi pemahaman berbasis praktik.</li>
                <li>• Memperluas literasi digital masyarakat secara fleksibel &amp; merata.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-fluent-canvas border border-fluent-border">
              <span className="w-10 h-10 rounded-lg bg-white border border-fluent-border text-fluent-blue flex items-center justify-center mb-4">
                <Flag className="w-5 h-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-fluent-blue">
                Tujuan Perusahaan
              </p>
              <h3 className="font-display text-lg font-semibold text-fluent-ink mt-1">
                Ekosistem Belajar Mandiri &amp; Siap Industri
              </h3>
              <p className="text-sm text-fluent-secondary mt-2.5 leading-relaxed">
                Meluncurkan platform KodelaID yang stabil untuk publik, membantu pelajar menguasai
                dasar ilmu komputer, serta mencetak talenta digital yang siap menghadapi kebutuhan
                akademik maupun profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Peta Jalan Pengembangan (4 Fase) */}
        <div id="roadmap" className="pt-14 border-t border-fluent-border/80">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
              Peta Jalan Pengembangan (Roadmap)
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-fluent-ink">
              Langkah strategis menuju ekosistem pendidikan teknologi nasional.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROADMAP_PHASES.map((item) => {
              const isDone = item.status === "completed";
              const isActive = item.status === "active";
              return (
                <div
                  key={item.phase}
                  className={`p-6 rounded-xl border transition-all ${
                    isActive
                      ? "bg-fluent-blue-tint/40 border-fluent-blue shadow-fluent"
                      : "bg-fluent-canvas/70 border-fluent-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-2xl font-bold ${
                        isActive
                          ? "text-fluent-blue"
                          : isDone
                          ? "text-emerald-700"
                          : "text-slate-400"
                      }`}
                    >
                      {item.phase}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        isDone
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : isActive
                          ? "bg-fluent-blue text-white"
                          : "bg-white text-fluent-secondary border border-fluent-border"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : isActive ? (
                        <CircleDot className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {item.period}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-semibold text-fluent-ink">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-fluent-secondary mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
