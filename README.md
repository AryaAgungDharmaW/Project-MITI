# KodelaID — Mihaku Edutainment Web & Interactive App Demo

Website resmi dan **Demo Aplikasi Interaktif KodelaID** (*Mihaku Learning Courses*) yang dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS** dengan estetika desain bersih bergaya **Microsoft Fluent 2**.

## Fitur Utama

- **Desain Bersih ala Microsoft Fluent 2**: Tata letak modern, tipografi tajam (`Plus Jakarta Sans` + `Inter` + `JetBrains Mono`), nuansa warna Microsoft Blue (`#0067B8`), dan responsif penuh di desktop maupun perangkat seluler.
- **Demo Aplikasi Interaktif KodelaID (7 Layar Lengkap dari Desain Figma)**:
  1. **Layar Pembuka (`Tuturu~!`)** lengkap dengan maskot KodelaID dan badge *Harvard CSEdu Adapted*.
  2. **Beranda Aplikasi (`Halo, aku Kodela!`)** dengan pelacakan Streak, Hearts, dan akses cepat Quiz Interaktif.
  3. **Pemilihan Jalur Belajar** (Python, Pengantar Coding, C++, SQL, Web Development, Data Science, Algorithm Design).
  4. **Peta Unit Gamifikasi** (*stepping-stone map* interaktif).
  5. **Kuis Coding Real-Time** (Python Dictionary, Pengantar CS, C++ `cin`/`cout`, Master SQL, dan Modern Web) dengan umpan balik langsung & skor `+XP`.
  6. **Perayaan 7-Day Streak** menuju target *Sertifikasi Digital*.
  7. **Forum Chat Komunitas & Ruang Tanya Mentor** dengan fitur kirim pesan interaktif.
- **Pratinjau Figma Terintegrasi**: Beralih cepat antara *Simulator Interaktif* dan *Pratinjau Figma Embed* (`Mihaku Figma Design`).
- **Katalog Kursus, Slide Khusus Struktur Organisasi (4 Anggota), Profil Mihaku Edutainment, & Peta Jalan 4 Fase**.

## Cara Menjalankan di Komputer Lokal

Pastikan **Node.js (v18+ / v22 LTS)** telah terpasang.

```bash
# 1. Masuk ke folder proyek
cd Website-MITI

# 2. Instal seluruh dependensi
npm install

# 3. Jalankan server pengembangan lokal
npm run dev
```

Buka browser dan kunjungi:
- Halaman Utama: [http://localhost:3000](http://localhost:3000)
- Mode Studio Demo Penuh: [http://localhost:3000/demo](http://localhost:3000/demo)

*(Catatan untuk Windows PowerShell: apabila `npm` terblokir kebijakan eksekusi skrip, gunakan `npm.cmd run dev`.)*

## Struktur Folder (Mudah Diedit)

- `src/data/kodelaData.ts` — Seluruh konten teks, daftar kursus, bank soal kuis, pesan forum/mentor, anggota tim, paket harga, dan tautan Figma/GitHub (edit file ini untuk memperbarui konten dengan cepat).
- `src/components/KodelaMobileDemo.tsx` — Simulator interaktif 7 layar aplikasi KodelaID.
- `src/components/DemoShowcaseSection.tsx` — Bagian showcase demo & toggle embed Figma.
- `src/components/HeroSection.tsx`, `CoursesSection.tsx`, `MembershipSection.tsx`, `CompanySection.tsx`, `Navbar.tsx`, `Footer.tsx` — Komponen tampilan modular bergaya Microsoft.
- `public/images/kodela-mascot.png` — Aset maskot KodelaID transparan.

## Build Produksi & Deploy ke Vercel

```bash
npm run build
npm run start
```

Repositori ini siap langsung dihubungkan ke **Vercel** karena Next.js sudah berada di direktori root proyek.
