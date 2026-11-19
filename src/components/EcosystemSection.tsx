import React from "react";
import { BookOpen, Gamepad2, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { ECOSYSTEM_SECTORS } from "@/data/kodelaData";

const SECTOR_ICONS = [BookOpen, Gamepad2, Users];

export default function EcosystemSection() {
  return (
    <section className="py-20 lg:py-24 bg-fluent-canvas border-b border-fluent-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-fluent-blue mb-2">
            Arsitektur Ekosistem KodelaID
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-fluent-ink">
            Tiga sektor terpadu untuk belajar teknologi yang konsisten.
          </h2>
          <p className="mt-3 text-base text-fluent-secondary leading-relaxed">
            Mengacu pada blueprint arsitektur KodelaID, seluruh pengalaman belajar dirancang agar
            materi akademik, motivasi gamifikasi, dan dukungan komunitas saling terhubung.
          </p>
        </div>

        {/* Clean Microsoft 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECOSYSTEM_SECTORS.map((item, idx) => {
            const Icon = SECTOR_ICONS[idx];
            return (
              <div
                key={item.sector}
                className="bg-white rounded-xl border border-fluent-border p-7 shadow-fluent hover:shadow-fluent-md hover:border-fluent-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-11 h-11 rounded-lg bg-fluent-blue-tint text-fluent-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-semibold text-fluent-secondary bg-fluent-canvas px-2.5 py-1 rounded-full border border-fluent-border/80">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-fluent-ink">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-fluent-blue mt-1">{item.subtitle}</p>
                  <p className="text-sm text-fluent-secondary mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-fluent-border/70 space-y-2.5">
                    {item.items.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-fluent-ink"
                      >
                        <CheckCircle2 className="w-4 h-4 text-fluent-blue shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Goal Banner: Sertifikasi & Penghargaan Akhir */}
        <div className="mt-8 rounded-xl bg-[#0B2545] text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-fluent-md">
          <div className="flex items-start sm:items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                Target Akhir Ekosistem KodelaID
              </p>
              <h3 className="font-display text-xl font-semibold mt-0.5">
                Sertifikasi Digital &amp; Portofolio Proyek Nyata
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                Setiap siswa yang menuntaskan jalur belajar, kuis evaluasi, dan proyek mini berhak
                memperoleh sertifikat digital terverifikasi untuk menunjang karir akademik maupun
                profesional.
              </p>
            </div>
          </div>

          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] bg-white hover:bg-sky-50 text-[#0B2545] text-sm font-semibold shrink-0 transition-colors"
          >
            Coba Kuis Sekarang
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
