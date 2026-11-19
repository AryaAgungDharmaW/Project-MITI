export const LINKS = {
  figma:
    "https://www.figma.com/design/D6HyXS2JJNPFrq413Ji4Ag/Mihaku?node-id=0-1&t=Ho8nblAfIObjFmZ8-1",
  figmaEmbed:
    "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FD6HyXS2JJNPFrq413Ji4Ag%2FMihaku%3Fnode-id%3D0-1",
  github: "https://github.com/AryaAgungDharmaW/Project-MITI",
  livePreview: "https://mihaku-edutaintment.vercel.app/",
  architectureDoc:
    "https://sites.google.com/d/1V7GQWlwTI3zBWzgrl3DZJ22XE1sUEXp1/p/1ZW_Uu1qBBtn0ZpzEz8G0YP6N07gFw4Dt/edit",
};

export type CourseId =
  | "python"
  | "intro"
  | "cpp"
  | "sql"
  | "web"
  | "datascience"
  | "algo";

export interface LearningPathItem {
  id: CourseId;
  title: string;
  subtitle: string;
  category: "Pemrograman" | "Data & Basis Data" | "Web & Algoritma";
  level: "Pemula" | "Menengah" | "Lanjutan";
  modules: number;
  duration: string;
  badgeText: string;
  status: "AKSES" | "FASE 3";
  accentColor: string;
  softBg: string;
  codeTag: string;
  description: string;
  highlights: string[];
}

export const LEARNING_PATHS: LearningPathItem[] = [
  {
    id: "python",
    title: "Dasar Pemrograman",
    subtitle: "Adaptasi Python Harvard CSEdu",
    category: "Pemrograman",
    level: "Pemula",
    modules: 12,
    duration: "4 Jam",
    badgeText: "HARVARD CSEDU",
    status: "AKSES",
    accentColor: "#0067B8",
    softBg: "#EBF3FC",
    codeTag: "PY",
    description:
      "Kuasai fondasi ilmu komputer menggunakan Python: variabel, struktur data dictionary & list, percabangan, fungsi, hingga mini-project terukur.",
    highlights: ["Variabel & Tipe Data", "Dictionary & List", "Fungsi & Loop"],
  },
  {
    id: "intro",
    title: "Pengantar Coding",
    subtitle: "Logika Komputasi & Flowchart",
    category: "Pemrograman",
    level: "Pemula",
    modules: 8,
    duration: "2,5 Jam",
    badgeText: "FUNDAMENTAL",
    status: "AKSES",
    accentColor: "#107C10",
    softBg: "#EAF6EA",
    codeTag: "CS",
    description:
      "Dirancang khusus untuk pemula tanpa latar belakang IT. Pahami cara kerja komputer, berpikir komputasional, pseudocode, dan alur logika.",
    highlights: ["Computational Thinking", "Flowchart & Pseudocode", "Problem Solving"],
  },
  {
    id: "cpp",
    title: "C++ Dasar",
    subtitle: "Logika, I/O cin/cout & Algoritma",
    category: "Pemrograman",
    level: "Pemula",
    modules: 10,
    duration: "3,5 Jam",
    badgeText: "POPULER",
    status: "AKSES",
    accentColor: "#005A9E",
    softBg: "#E6F2FB",
    codeTag: "C++",
    description:
      "Pelajari pemrograman terstruktur C++ dari nol, mulai dari input/output cin & cout, selection condition, array, hingga konsep OOP dasar.",
    highlights: ["I/O cin & cout", "Selection Condition", "Konsep OOP Dasar"],
  },
  {
    id: "sql",
    title: "Master SQL & Basis Data",
    subtitle: "Query, Relasi & Manajemen Database",
    category: "Data & Basis Data",
    level: "Menengah",
    modules: 10,
    duration: "3 Jam",
    badgeText: "PRAKTIKUM",
    status: "AKSES",
    accentColor: "#C2410C",
    softBg: "#FFF1EA",
    codeTag: "SQL",
    description:
      "Latihan query basis data relasional secara interaktif: SELECT, WHERE, JOIN, normalisasi tabel, serta studi kasus sistem informasi nyata.",
    highlights: ["Query SELECT & JOIN", "ERD & Normalisasi", "Studi Kasus Industri"],
  },
  {
    id: "web",
    title: "Web Development",
    subtitle: "HTML, CSS, JS & Modern Web",
    category: "Web & Algoritma",
    level: "Menengah",
    modules: 14,
    duration: "5 Jam",
    badgeText: "MODERN WEB",
    status: "AKSES",
    accentColor: "#6B21A8",
    softBg: "#F3E8FF",
    codeTag: "WEB",
    description:
      "Bangun antarmuka web modern dan responsif menggunakan HTML semantik, Tailwind CSS, JavaScript interaktif, serta pengantar React & Next.js.",
    highlights: ["HTML5 & Tailwind CSS", "JavaScript Interaktif", "Komponen Modern Web"],
  },
  {
    id: "datascience",
    title: "Data Science",
    subtitle: "Analisis Data, Pandas & Statistik",
    category: "Data & Basis Data",
    level: "Menengah",
    modules: 12,
    duration: "4,5 Jam",
    badgeText: "DATA LAB",
    status: "AKSES",
    accentColor: "#B45309",
    softBg: "#FEF3C7",
    codeTag: "DS",
    description:
      "Eksplorasi pengolahan data menggunakan Python, Pandas, statistik deskriptif, dan visualisasi data untuk pengambilan keputusan berbasis fakta.",
    highlights: ["Pandas & DataFrame", "Statistik Terapan", "Visualisasi Data"],
  },
  {
    id: "algo",
    title: "Algorithm Design",
    subtitle: "Struktur Data & Kompleksitas",
    category: "Web & Algoritma",
    level: "Lanjutan",
    modules: 16,
    duration: "6 Jam",
    badgeText: "FASE 3",
    status: "FASE 3",
    accentColor: "#BE123C",
    softBg: "#FFE4E6",
    codeTag: "ALG",
    description:
      "Pendalaman struktur data graf, tree, dynamic programming, dan analisis kompleksitas Big-O sebagai persiapan kompetisi maupun wawancara teknis.",
    highlights: ["Tree & Graph", "Dynamic Programming", "Analisis Big-O"],
  },
];

export interface QuizOption {
  symbol: string;
  title: string;
  subtitle: string;
  symbolBg: string;
  symbolColor: string;
}

export interface QuizQuestion {
  id: string;
  courseId: CourseId;
  tag: string;
  unitTitle: string;
  prompt: string;
  codeSnippet?: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
  xp: number;
}

export const QUIZ_QUESTIONS: Record<string, QuizQuestion[]> = {
  python: [
    {
      id: "py-1",
      courseId: "python",
      tag: "KONSEP BARU • PYTHON DASAR",
      unitTitle: "Dasar Pemrograman & Variabel",
      prompt: "Pilih struktur data yang tepat untuk menyimpan pasangan Kunci & Nilai:",
      codeSnippet: '{"nama": "Mayuri", "xp": 500}',
      options: [
        {
          symbol: "{ : }",
          title: "Dictionary",
          subtitle: "dict (Kunci-Nilai)",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "[0, 1]",
          title: "List Array",
          subtitle: "Urutan Terindeks",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "True",
          title: "Boolean",
          subtitle: "Logika Benar/Salah",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
        {
          symbol: "def()",
          title: "Function",
          subtitle: "Blok Fungsi",
          symbolBg: "#F3E8FF",
          symbolColor: "#7E22CE",
        },
      ],
      correctIndex: 0,
      explanation: "Dictionary memakai kurung kurawal {} untuk menyimpan pasangan Kunci & Nilai.",
      xp: 15,
    },
    {
      id: "py-2",
      courseId: "python",
      tag: "PRAKTIKUM • HARVARD CSEDU",
      unitTitle: "Dasar Pemrograman & Variabel",
      prompt: "Apa keluaran (output) dari potongan kode Python berikut?",
      codeSnippet: 'streak = 6\nstreak += 1\nprint(f"Streak: {streak} hari")',
      options: [
        {
          symbol: "6",
          title: "Streak: 6 hari",
          subtitle: "Nilai tetap",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "7",
          title: "Streak: 7 hari",
          subtitle: "Increment +1",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "Err",
          title: "SyntaxError",
          subtitle: "Kesalahan kode",
          symbolBg: "#FFE4E6",
          symbolColor: "#BE123C",
        },
        {
          symbol: "{ }",
          title: "Streak: {streak}",
          subtitle: "Tanpa evaluasi",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
      ],
      correctIndex: 1,
      explanation: "Operator += menambahkan 1 ke streak (6 → 7) dan f-string menampilkannya.",
      xp: 20,
    },
  ],
  intro: [
    {
      id: "intro-1",
      courseId: "intro",
      tag: "PENGANTAR PEMROGRAMAN DASAR",
      unitTitle: "Logika Komputasi & Algoritma",
      prompt: "Apa yang dimaksud dengan algoritma dalam pemrograman komputer?",
      options: [
        {
          symbol: "1→2",
          title: "Langkah Logis",
          subtitle: "Urutan sistematis solusi",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "CPU",
          title: "Perangkat Keras",
          subtitle: "Komponen fisik laptop",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "RAM",
          title: "Memori Utama",
          subtitle: "Penyimpan data sementara",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
        {
          symbol: "UI",
          title: "Desain Layar",
          subtitle: "Tampilan warna aplikasi",
          symbolBg: "#F3E8FF",
          symbolColor: "#7E22CE",
        },
      ],
      correctIndex: 0,
      explanation: "Algoritma adalah rangkaian langkah logis dan terstruktur untuk menyelesaikan masalah.",
      xp: 15,
    },
    {
      id: "intro-2",
      courseId: "intro",
      tag: "FLOWCHART & PERCABANGAN",
      unitTitle: "Logika Komputasi & Algoritma",
      prompt: "Simbol belah ketupat (diamond) pada flowchart digunakan untuk menyatakan:",
      options: [
        {
          symbol: "◇",
          title: "Keputusan (If)",
          subtitle: "Percabangan kondisi",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "▭",
          title: "Proses Hitung",
          subtitle: "Operasi aritmetika",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "◯",
          title: "Terminator",
          subtitle: "Mulai atau selesai",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
        {
          symbol: "▱",
          title: "Input / Output",
          subtitle: "Masukan data pengguna",
          symbolBg: "#F3E8FF",
          symbolColor: "#7E22CE",
        },
      ],
      correctIndex: 0,
      explanation: "Belah ketupat (decision) dipakai untuk mengevaluasi kondisi Ya/Tidak (True/False).",
      xp: 15,
    },
  ],
  cpp: [
    {
      id: "cpp-1",
      courseId: "cpp",
      tag: "C++ DASAR • INPUT & OUTPUT",
      unitTitle: "Dasar I/O & Selection Condition",
      prompt: "Objek standar C++ manakah yang dipakai untuk menerima input dari pengguna?",
      codeSnippet: 'int nilai;\n___ >> nilai;\ncout << "Nilai: " << nilai;',
      options: [
        {
          symbol: "cin",
          title: "cin >>",
          subtitle: "Standard Input Stream",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "cout",
          title: "cout <<",
          subtitle: "Standard Output Stream",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "endl",
          title: "endl",
          subtitle: "Baris baru & flush",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
        {
          symbol: "main",
          title: "int main()",
          subtitle: "Titik awal program",
          symbolBg: "#F3E8FF",
          symbolColor: "#7E22CE",
        },
      ],
      correctIndex: 0,
      explanation: "cin (character input) dengan operator >> membaca masukan pengguna, sedangkan cout menampilkan hasil.",
      xp: 15,
    },
  ],
  sql: [
    {
      id: "sql-1",
      courseId: "sql",
      tag: "MASTER SQL • QUERY DASAR",
      unitTitle: "Manajemen Basis Data Relasional",
      prompt: "Perintah SQL untuk mengambil kolom nama siswa yang memiliki streak minimal 7 hari adalah:",
      codeSnippet: "___ nama FROM siswa WHERE streak >= 7;",
      options: [
        {
          symbol: "SEL",
          title: "SELECT",
          subtitle: "Mengambil data tabel",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "INS",
          title: "INSERT",
          subtitle: "Menambah baris baru",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "DEL",
          title: "DELETE",
          subtitle: "Menghapus baris data",
          symbolBg: "#FFE4E6",
          symbolColor: "#BE123C",
        },
        {
          symbol: "DRP",
          title: "DROP",
          subtitle: "Menghapus struktur tabel",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
      ],
      correctIndex: 0,
      explanation: "SELECT digunakan untuk membaca dan menyaring kolom data dari tabel basis data.",
      xp: 15,
    },
  ],
  web: [
    {
      id: "web-1",
      courseId: "web",
      tag: "MODERN WEB • NEXT.JS & TAILWIND",
      unitTitle: "Antarmuka Responsif Modern",
      prompt: "Utility class Tailwind CSS manakah yang membuat elemen rata tengah secara horizontal & vertikal dengan Flexbox?",
      codeSnippet: '<div className="flex ___">KodelaID</div>',
      options: [
        {
          symbol: "flex",
          title: "items-center justify-center",
          subtitle: "Flexbox center 2 sumbu",
          symbolBg: "#DCFCE7",
          symbolColor: "#15803D",
        },
        {
          symbol: "blk",
          title: "block text-left",
          subtitle: "Tampilan blok rata kiri",
          symbolBg: "#E0F2FE",
          symbolColor: "#0369A1",
        },
        {
          symbol: "hid",
          title: "hidden opacity-0",
          subtitle: "Menyembunyikan elemen",
          symbolBg: "#FFE4E6",
          symbolColor: "#BE123C",
        },
        {
          symbol: "abs",
          title: "static float-right",
          subtitle: "Posisi alur standar",
          symbolBg: "#FEF3C7",
          symbolColor: "#B45309",
        },
      ],
      correctIndex: 0,
      explanation: "Kombinasi flex items-center justify-center memusatkan konten di sumbu vertikal & horizontal.",
      xp: 15,
    },
  ],
};

export interface ChatMessage {
  id: string;
  sender: "user" | "other";
  author?: string;
  text: string;
  time: string;
}

export const INITIAL_FORUM_CHAT: ChatMessage[] = [
  {
    id: "f1",
    sender: "user",
    text: "Ada yang paham nggak maksudnya OOP itu gimana? Ada yang bisa bantu menjelaskan?",
    time: "09:24",
  },
  {
    id: "f2",
    sender: "other",
    author: "Raka • Komunitas OOP",
    text: "Aku paham kak! Sederhananya OOP (Object-Oriented Programming) itu cara menyusun kode seperti benda nyata: ada Class sebagai cetakan (blueprint), dan Object sebagai hasil nyatanya.",
    time: "09:26",
  },
  {
    id: "f3",
    sender: "user",
    text: "Okeiii, berarti misalnya Class Mobil punya properti warna & kecepatan, lalu tiap mobil jadi Object-nya ya?",
    time: "09:27",
  },
  {
    id: "f4",
    sender: "other",
    author: "Raka • Komunitas OOP",
    text: "Betul banget kak! Plus ada 4 pilar utamanya: Encapsulation, Inheritance, Polymorphism, dan Abstraction. Semoga membantu yaa!",
    time: "09:28",
  },
  {
    id: "f5",
    sender: "user",
    text: "Ohh begitu ya kak, akhirnya aku paham apa itu OOP, terima kasih kakak-kakak forum, bintang 5 buat kalian :D",
    time: "09:30",
  },
];

export const INITIAL_MENTOR_CHAT: ChatMessage[] = [
  {
    id: "m1",
    sender: "user",
    text: "Mas, saya mau belajar C++ dari dasar apakah bisa?",
    time: "09:18",
  },
  {
    id: "m2",
    sender: "other",
    author: "Arya Agung • Mentor",
    text: "Boleh saja, bisa kita mulai pembelajarannya sekarang yaa!",
    time: "09:19",
  },
  {
    id: "m3",
    sender: "other",
    author: "Arya Agung • Mentor",
    text: "Hari ini kita bahas Input & Output di C++: untuk membaca input user pakai cin >> variabel, lalu menampilkan hasil ke layar pakai cout << hasil.",
    time: "09:22",
  },
  {
    id: "m4",
    sender: "user",
    text: "Wahh terima kasih banyak mas, besok saya mau belajar materi selection condition (if-else) bersama mas lagi yaa!",
    time: "09:29",
  },
  {
    id: "m5",
    sender: "other",
    author: "Arya Agung • Mentor",
    text: "Boleh kak, saya tunggu antusiasnya yaa! Jangan lupa jaga 7-Day Streak hari ini.",
    time: "09:30",
  },
];

export const ECOSYSTEM_SECTORS = [
  {
    sector: "Sektor 01",
    title: "Jalur Pembelajaran Utama",
    subtitle: "Learning Path Adaptasi Harvard CSEdu",
    description:
      "Kurikulum terstruktur dari dasar pemrograman hingga data science yang dipecah menjadi sesi mikro 5 menit sehari.",
    items: [
      "Dasar Pemrograman (Python)",
      "Pengantar Coding & Logika",
      "Web Development Modern",
      "Data Science & Basis Data SQL",
    ],
  },
  {
    sector: "Sektor 02",
    title: "Fitur Edutainment",
    subtitle: "Gamified Practice & Retensi Belajar",
    description:
      "Mekanisme permainan yang membuat latihan coding terasa seru, konsisten, dan terukur setiap harinya.",
    items: [
      "Kuis Interaktif Real-Time",
      "Pelacakan 7-Day Streak & XP",
      "Leaderboard & Proyek Mini",
      "Sertifikasi Digital Terverifikasi",
    ],
  },
  {
    sector: "Sektor 03",
    title: "Dashboard & Komunitas",
    subtitle: "Ecosystem & Peer Mentoring",
    description:
      "Belajar tidak pernah sendirian berkat analitik kemajuan siswa, forum diskusi aktif, dan ruang tanya mentor.",
    items: [
      "Profil Siswa & Analitik Progres",
      "Forum Diskusi Basis Data & OOP",
      "Ruang Tanya Mentor Pemrograman",
      "Pendampingan Tugas & Portofolio",
    ],
  },
];

export interface TeamMember {
  slideNumber: string;
  name: string;
  role: string;
  department: string;
  initials: string;
  accent: string;
  softBg: string;
  bio: string;
  focusAreas: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slideNumber: "01",
    name: "Kukuh Satrio Buditomo",
    role: "Chief Executive & Product Lead",
    department: "Eksekutif & Strategi Produk",
    initials: "KS",
    accent: "#0067B8",
    softBg: "#EBF3FC",
    bio: "Memimpin visi strategis perusahaan, peta jalan produk KodelaID, kemitraan kurikulum, serta memastikan pengalaman pengguna (UX) tetap ringkas, intuitif, dan berdampak bagi pembelajar.",
    focusAreas: [
      "Visi & Strategi Produk",
      "Desain Pengalaman Pengguna (UX)",
      "Kemitraan & Ekosistem EdTech",
    ],
  },
  {
    slideNumber: "02",
    name: "Arya Agung Dharma Wisesa",
    role: "Lead Software Engineer",
    department: "Arsitektur & Rekayasa Perangkat Lunak",
    initials: "AA",
    accent: "#0B4F8A",
    softBg: "#E6F1FA",
    bio: "Merancang arsitektur penuh aplikasi KodelaID, mengembangkan sistem kuis interaktif real-time, mengelola keandalan infrastruktur cloud, serta berperan sebagai mentor pemrograman aktif.",
    focusAreas: [
      "Arsitektur Full-Stack & Cloud",
      "Sistem Kuis Interaktif & Gamifikasi",
      "Mentoring Pemrograman C++ & Web",
    ],
  },
  {
    slideNumber: "03",
    name: "Abdallah Ilham Zamzami",
    role: "Curriculum & Content Specialist",
    department: "Kurikulum & Pengembangan Materi",
    initials: "AI",
    accent: "#107C10",
    softBg: "#EAF6EA",
    bio: "Menyusun dan mengadaptasi materi ilmu komputer berstandar internasional Harvard CSEdu menjadi modul mikro 5 menit yang terstruktur, aplikatif, serta mudah dipahami dari level pemula.",
    focusAreas: [
      "Adaptasi Kurikulum Harvard CSEdu",
      "Penyusunan Modul & Bank Soal Kuis",
      "Standar Evaluasi Kompetensi CS",
    ],
  },
  {
    slideNumber: "04",
    name: "Muhammad Hafiz Paherti",
    role: "Marketing & Growth Lead",
    department: "Pemasaran & Pertumbuhan Komunitas",
    initials: "MH",
    accent: "#6B21A8",
    softBg: "#F3E8FF",
    bio: "Mengelola identitas merek Mihaku Edutainment, merancang kampanye akuisisi pengguna beta, melaksanakan riset validasi pasar secara langsung, dan membangun komunitas pembelajar aktif.",
    focusAreas: [
      "Strategi Branding & Kampanye Digital",
      "Validasi Pasar & Riset Pengguna",
      "Pertumbuhan Komunitas Pembelajar",
    ],
  },
];

export const ROADMAP_PHASES = [
  {
    phase: "01",
    title: "Minimum Viable Product (MVP)",
    period: "Fase 1 • Selesai",
    status: "completed" as const,
    description:
      "Penyempurnaan aplikasi pembelajaran inti adaptasi Harvard CSEdu (Python & Dasar Ilmu Komputer) beserta kuis evaluasi interaktif dan maskot Kodela.",
  },
  {
    phase: "02",
    title: "Publikasi Portofolio & Beta Testing",
    period: "Fase 2 • Berjalan",
    status: "active" as const,
    description:
      "Peluncuran portal resmi Mihaku Edutainment ke publik, pengujian UAT, promosi lapangan, serta pengumpulan testimoni 500 pengguna awal.",
  },
  {
    phase: "03",
    title: "Ekspansi Modul Pembelajaran",
    period: "Fase 3 • Berikutnya",
    status: "upcoming" as const,
    description:
      "Pengembangan katalog kurikulum lanjutan mencakup Web Development modern, Data Science terapan, serta Algorithm Design berbasis proyek nyata.",
  },
  {
    phase: "04",
    title: "Kemitraan Strategis & Ekosistem",
    period: "Fase 4 • Visi Jangka Panjang",
    status: "upcoming" as const,
    description:
      "Pembukaan jalur sertifikasi digital resmi serta kolaborasi dengan institusi pendidikan, kampus, dan komunitas teknologi lokal di Indonesia.",
  },
];
