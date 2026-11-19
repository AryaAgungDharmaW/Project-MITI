"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Flame,
  Heart,
  Gem,
  Star,
  Check,
  Code2,
  Laptop,
  Gift,
  Trophy,
  Home,
  Compass,
  Map,
  MessageCircle,
  Send,
  X,
  Volume2,
  Award,
  ChevronRight,
  Fingerprint,
  BookOpen,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import {
  CourseId,
  LEARNING_PATHS,
  QUIZ_QUESTIONS,
  INITIAL_FORUM_CHAT,
  INITIAL_MENTOR_CHAT,
  ChatMessage,
} from "@/data/kodelaData";

export type DemoScreen =
  | "splash"
  | "home"
  | "paths"
  | "unitmap"
  | "quiz"
  | "streak"
  | "community";

export interface DemoStats {
  xp: number;
  streak: number;
  hearts: number;
  completedQuizzes: number;
}

interface KodelaMobileDemoProps {
  activeScreen: DemoScreen;
  onScreenChange: (screen: DemoScreen) => void;
  selectedCourse: CourseId;
  onCourseChange: (courseId: CourseId) => void;
  onStatsChange?: (stats: DemoStats) => void;
}

const WEEK_DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export default function KodelaMobileDemo({
  activeScreen,
  onScreenChange,
  selectedCourse,
  onCourseChange,
  onStatsChange,
}: KodelaMobileDemoProps) {
  const [xp, setXp] = useState(496);
  const [streak, setStreak] = useState(7);
  const [hearts, setHearts] = useState(5);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [streakCommitted, setStreakCommitted] = useState(false);

  // Quiz state
  const [quizIdx, setQuizIdx] = useState(0);
  const [pickedOption, setPickedOption] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<"idle" | "correct" | "wrong">("idle");

  // Community / Mentor Chat state
  const [chatTab, setChatTab] = useState<"forum" | "mentor">("forum");
  const [forumMessages, setForumMessages] = useState<ChatMessage[]>(INITIAL_FORUM_CHAT);
  const [mentorMessages, setMentorMessages] = useState<ChatMessage[]>(INITIAL_MENTOR_CHAT);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const courseInfo =
    LEARNING_PATHS.find((c) => c.id === selectedCourse) || LEARNING_PATHS[0];
  const quizPool = QUIZ_QUESTIONS[selectedCourse] || QUIZ_QUESTIONS.python;
  const currentQuestion = quizPool[quizIdx % quizPool.length];

  // Reset quiz selection when course changes
  useEffect(() => {
    setQuizIdx(0);
    setPickedOption(null);
    setAnswerState("idle");
  }, [selectedCourse]);

  useEffect(() => {
    if (onStatsChange) {
      onStatsChange({ xp, streak, hearts, completedQuizzes });
    }
  }, [xp, streak, hearts, completedQuizzes, onStatsChange]);

  useEffect(() => {
    if (activeScreen === "community") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [forumMessages, mentorMessages, chatTab, activeScreen]);

  const handleCheckAnswer = () => {
    if (pickedOption === null) return;
    if (pickedOption === currentQuestion.correctIndex) {
      setAnswerState("correct");
      setXp((prev) => prev + currentQuestion.xp);
    } else {
      setAnswerState("wrong");
      setHearts((prev) => Math.max(1, prev - 1));
    }
  };

  const handleNextQuestion = () => {
    if (answerState === "wrong") {
      setPickedOption(null);
      setAnswerState("idle");
      return;
    }

    if (quizIdx + 1 < quizPool.length) {
      setQuizIdx((prev) => prev + 1);
      setPickedOption(null);
      setAnswerState("idle");
    } else {
      setCompletedQuizzes((prev) => prev + 1);
      if (!streakCommitted) {
        setStreak((prev) => Math.max(prev, 7));
      }
      setQuizIdx(0);
      setPickedOption(null);
      setAnswerState("idle");
      onScreenChange("streak");
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: trimmed,
      time: timeStr,
    };

    const lower = trimmed.toLowerCase();
    let replyText =
      chatTab === "mentor"
        ? "Pertanyaan bagus! Coba pecah masalahnya jadi langkah kecil (input → proses → output), lalu uji di kuis interaktif KodelaID ya."
        : "Halo kak! Terima kasih sudah diskusi di forum. Coba cek juga unit terkait di Jalur Belajar KodelaID biar makin paham praktik kodenya!";

    if (lower.includes("python") || lower.includes("dict")) {
      replyText =
        "Di Python, Dictionary memakai {kunci: nilai} sedangkan List memakai [item1, item2]. Coba latihan di modul Dasar Pemrograman Harvard CSEdu!";
    } else if (lower.includes("c++") || lower.includes("cpp") || lower.includes("if")) {
      replyText =
        "Untuk selection condition di C++, gunakan if (kondisi) { ... } else { ... } dan pastikan variabel sudah dibaca pakai cin >> ya!";
    } else if (lower.includes("sql") || lower.includes("database") || lower.includes("basis data")) {
      replyText =
        "Di SQL, mulai dengan SELECT kolom FROM nama_tabel WHERE kondisi; — lalu gunakan JOIN kalau ingin menggabungkan 2 tabel berelasi.";
    } else if (lower.includes("oop") || lower.includes("class")) {
      replyText =
        "Ingat konsep inti OOP: Class = blueprint/cetakan, Object = instansinya, plus Encapsulation untuk menjaga keamanan data atribut!";
    }

    if (chatTab === "forum") {
      setForumMessages((prev) => [...prev, userMsg]);
      setChatInput("");
      setTimeout(() => {
        setForumMessages((prev) => [
          ...prev,
          {
            id: `r-${Date.now()}`,
            sender: "other",
            author: "Komunitas KodelaID",
            text: replyText,
            time: timeStr,
          },
        ]);
      }, 550);
    } else {
      setMentorMessages((prev) => [...prev, userMsg]);
      setChatInput("");
      setTimeout(() => {
        setMentorMessages((prev) => [
          ...prev,
          {
            id: `r-${Date.now()}`,
            sender: "other",
            author: "Arya Agung • Mentor",
            text: replyText,
            time: timeStr,
          },
        ]);
      }, 550);
    }
  };

  const showBottomNav = activeScreen !== "splash" && activeScreen !== "quiz";
  const progressPercent = Math.round(
    ((quizIdx + (answerState === "correct" ? 1 : 0.35)) / quizPool.length) * 100
  );

  return (
    <div className="relative mx-auto w-full max-w-[332px] sm:max-w-[356px]">
      {/* Realistic Modern Phone Bezel */}
      <div className="relative rounded-[42px] sm:rounded-[44px] bg-[#16191D] p-[9px] sm:p-[11px] shadow-[0_24px_60px_rgba(11,37,69,0.22),0_0_0_1px_rgba(255,255,255,0.08)_inset]">
        {/* Side Hardware Buttons */}
        <span className="hidden sm:block absolute -left-[3px] top-28 w-[3px] h-9 rounded-l bg-[#2D333B]" />
        <span className="hidden sm:block absolute -left-[3px] top-40 w-[3px] h-12 rounded-l bg-[#2D333B]" />
        <span className="hidden sm:block absolute -right-[3px] top-36 w-[3px] h-16 rounded-r bg-[#2D333B]" />

        {/* Inner Viewport */}
        <div className="relative h-[672px] w-full rounded-[34px] overflow-hidden bg-white flex flex-col select-none">
          {/* Status Bar + Dynamic Island */}
          <div
            className={`relative z-20 flex items-center justify-between px-6 pt-3 pb-2 text-[11px] font-semibold shrink-0 ${
              activeScreen === "splash" ? "text-white bg-[#0284C7]" : "text-slate-800 bg-white"
            }`}
          >
            <span>09:30</span>
            <div className="w-[82px] h-[22px] rounded-full bg-black mx-auto absolute left-1/2 -translate-x-1/2 top-2.5 flex items-center justify-end pr-2">
              <span className="w-2 h-2 rounded-full bg-[#1C2838] ring-1 ring-slate-700" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex items-end gap-[1.5px] h-2.5">
                <span className="w-[2px] h-1 bg-current rounded-full" />
                <span className="w-[2px] h-1.5 bg-current rounded-full" />
                <span className="w-[2px] h-2 bg-current rounded-full" />
                <span className="w-[2px] h-2.5 bg-current rounded-full" />
              </span>
              <span className="w-5 h-2.5 rounded-[3px] border border-current p-[1.5px] flex items-center">
                <span className="w-full h-full bg-current rounded-[1px]" />
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SCREEN 1: SPLASH / WELCOME (Figma Screen 1)               */}
          {/* ========================================================= */}
          {activeScreen === "splash" && (
            <div className="flex-1 flex flex-col items-center justify-between px-6 pt-5 pb-6 bg-gradient-to-b from-[#0284C7] via-[#0369A1] to-[#0B2E59] text-white text-center">
              <div className="flex flex-col items-center mt-4">
                {/* Yellow Tuturu Badge */}
                <div className="relative mb-3">
                  <span className="absolute -top-3 -right-4 z-10 px-2.5 py-0.5 rounded-full bg-[#FACC15] text-[#1E293B] text-[11px] font-extrabold shadow-md">
                    Tuturu~! ★
                  </span>
                  <div className="w-32 h-32 rounded-full bg-white/15 ring-4 ring-white/25 backdrop-blur-sm flex items-center justify-center p-2 shadow-xl">
                    <img
                      src="/images/kodela-mascot.png"
                      alt="Maskot Kodela"
                      className="w-28 h-28 object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                <span className="mt-2 px-3 py-1 rounded-full bg-[#58CC02] text-white text-[10px] font-extrabold tracking-wider uppercase shadow">
                  HARVARD CSEDU ADAPTED
                </span>

                <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
                  kodelaid
                </h3>
                <p className="mt-1.5 text-xs text-sky-100/95 leading-relaxed max-w-[240px]">
                  Belajar Ilmu Komputer &amp; Coding Gratis, Seru, dan Terukur!
                </p>
              </div>

              <div className="w-full space-y-2.5">
                <button
                  type="button"
                  onClick={() => onScreenChange("home")}
                  className="w-full py-3.5 rounded-xl text-white font-display font-extrabold text-xs tracking-wide uppercase kodela-btn-green"
                >
                  MULAI BELAJAR SEKARANG
                </button>
                <button
                  type="button"
                  onClick={() => onScreenChange("paths")}
                  className="w-full py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Fingerprint className="w-4 h-4 text-sky-200" />
                  Masuk Cepat (Google / Biometrik)
                </button>
                <p className="pt-2 text-[10px] tracking-[0.2em] uppercase text-sky-200/75 font-semibold">
                  MIHAKU EDUTAINMENT
                </p>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 2: HOME DASHBOARD (Figma Poster Screen!)           */}
          {/* ========================================================= */}
          {activeScreen === "home" && (
            <div className="flex-1 overflow-y-auto demo-scroll px-4 pt-2 pb-4 bg-[#F8FAFC] space-y-4">
              {/* Top User Pill */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-fluent-blue text-white text-[10px] font-bold flex items-center justify-center">
                    K
                  </span>
                  <span className="text-xs font-bold text-slate-800">Kukuh</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[10px] font-semibold">
                    Beginner
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500 text-white text-[11px] font-bold shadow-sm">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    {streak}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500 text-white text-[11px] font-bold shadow-sm">
                    <Heart className="w-3.5 h-3.5 fill-white" />
                    {hearts}
                  </span>
                </div>
              </div>

              {/* Greeting Banner with Kodela Mascot */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0078D4] to-[#0EA5E9] p-4 text-white shadow-md">
                <div className="flex items-center justify-between gap-2">
                  <div className="max-w-[190px]">
                    <p className="text-sm font-extrabold leading-snug">
                      Halo, aku Kodela!
                    </p>
                    <p className="text-[11px] text-sky-100 mt-0.5">
                      Mau belajar apa hari ini? Cukup 5 menit untuk jaga streak!
                    </p>
                    <button
                      type="button"
                      onClick={() => onScreenChange("unitmap")}
                      className="mt-3 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white text-fluent-blue text-[11px] font-bold shadow-sm hover:bg-sky-50 transition-colors"
                    >
                      Lanjut {courseInfo.codeTag}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <img
                    src="/images/kodela-mascot.png"
                    alt="Kodela"
                    className="w-20 h-24 object-contain drop-shadow-md shrink-0"
                  />
                </div>
              </div>

              {/* Quiz Interaktif Carousel */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-extrabold text-slate-800">
                    Quiz Interaktif
                  </h4>
                  <button
                    type="button"
                    onClick={() => onScreenChange("paths")}
                    className="text-[11px] font-semibold text-fluent-blue hover:underline"
                  >
                    Lihat Semua
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {(["python", "intro", "cpp", "sql"] as CourseId[]).map((cid) => {
                    const item = LEARNING_PATHS.find((p) => p.id === cid)!;
                    return (
                      <button
                        key={cid}
                        type="button"
                        onClick={() => {
                          onCourseChange(cid);
                          onScreenChange("quiz");
                        }}
                        className="text-left p-3 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400 shadow-sm transition-all group"
                      >
                        <div
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-extrabold mb-2"
                          style={{ backgroundColor: item.softBg, color: item.accentColor }}
                        >
                          {item.codeTag}
                        </div>
                        <p className="text-[12px] font-bold text-slate-800 leading-tight group-hover:text-fluent-blue">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Daily Goal & Quick Actions */}
              <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 shadow-sm space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Target Harian (5 Menit)
                  </span>
                  <span className="text-[11px] font-extrabold text-emerald-600">
                    {xp} XP
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#58CC02] transition-all duration-500"
                    style={{ width: `${Math.min(100, 65 + completedQuizzes * 20)}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setChatTab("forum");
                      onScreenChange("community");
                    }}
                    className="py-2 px-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Forum Diskusi
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setChatTab("mentor");
                      onScreenChange("community");
                    }}
                    className="py-2 px-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Tanya Mentor
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 3: LEARNING PATH PICKER (Figma Screen 2)           */}
          {/* ========================================================= */}
          {activeScreen === "paths" && (
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {/* Top Progress Header */}
              <div className="px-4 pt-1 pb-2 flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => onScreenChange("home")}
                  className="p-1 text-slate-500 hover:text-slate-800"
                  aria-label="Kembali"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-2/5 rounded-full bg-[#58CC02]" />
                </div>
              </div>

              {/* Mascot Speech Bubble */}
              <div className="px-4 pb-3 flex items-center gap-3 shrink-0">
                <img
                  src="/images/kodela-mascot.png"
                  alt="Kodela"
                  className="w-12 h-14 object-contain shrink-0"
                />
                <div className="flex-1 p-2.5 rounded-2xl rounded-tl-sm bg-slate-50 border border-slate-200 text-[11.5px] font-semibold text-slate-700 leading-snug">
                  Tuturu~! Jalur belajar apa yang ingin kamu kuasai hari ini?
                </div>
              </div>

              {/* Scrollable Path Cards */}
              <div className="flex-1 overflow-y-auto demo-scroll px-4 space-y-2 pb-2">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  Jalur Pembelajaran Utama (KodelaID)
                </p>
                {LEARNING_PATHS.map((path) => {
                  const isSelected = selectedCourse === path.id;
                  const isLocked = path.status === "FASE 3";
                  return (
                    <button
                      key={path.id}
                      type="button"
                      disabled={isLocked}
                      onClick={() => onCourseChange(path.id)}
                      className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                        isSelected
                          ? "border-[#1CB0F6] bg-[#EFF8FF] shadow-sm"
                          : isLocked
                          ? "border-slate-100 bg-slate-50/70 opacity-75 cursor-not-allowed"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-extrabold shrink-0"
                        style={{ backgroundColor: path.softBg, color: path.accentColor }}
                      >
                        {path.codeTag}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-extrabold text-slate-800 truncate">
                          {path.title}
                        </p>
                        <p className="text-[10.5px] text-slate-500 truncate">
                          {path.subtitle}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[9.5px] font-extrabold uppercase shrink-0 ${
                          isLocked
                            ? "bg-amber-300 text-amber-950"
                            : "bg-[#1CB0F6] text-white"
                        }`}
                      >
                        {path.status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="p-3.5 border-t border-slate-100 bg-white shrink-0">
                <button
                  type="button"
                  onClick={() => onScreenChange("unitmap")}
                  className="w-full py-3 rounded-xl text-white font-display font-extrabold text-xs tracking-wide uppercase kodela-btn-green"
                >
                  LANJUTKAN
                </button>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 4: GAMIFIED UNIT MAP (Figma Screen 3)              */}
          {/* ========================================================= */}
          {activeScreen === "unitmap" && (
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {/* Top Gamification HUD */}
              <div className="px-4 py-2 flex items-center justify-between border-b border-slate-100 text-xs font-extrabold shrink-0">
                <span className="px-2 py-1 rounded-lg bg-sky-50 text-fluent-blue text-[11px]">
                  &lt;/&gt; {courseInfo.codeTag}
                </span>
                <span className="inline-flex items-center gap-1 text-amber-500">
                  <Flame className="w-4 h-4 fill-amber-500" />
                  {streak}
                </span>
                <span className="inline-flex items-center gap-1 text-sky-500">
                  <Gem className="w-4 h-4 fill-sky-400" />
                  {xp}
                </span>
                <span className="inline-flex items-center gap-1 text-rose-500">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  {hearts}
                </span>
              </div>

              <div className="flex-1 overflow-y-auto demo-scroll px-4 pt-3 pb-6">
                {/* Green Harvard CSEdu Unit Banner */}
                <div className="rounded-2xl bg-[#58CC02] p-3.5 text-white shadow-[0_4px_0_#46A302] flex items-center justify-between">
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-wider text-lime-100">
                      BAGIAN 1, UNIT 1 • HARVARD CSEDU
                    </p>
                    <p className="text-sm font-extrabold mt-0.5 leading-snug">
                      {courseInfo.title}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onScreenChange("paths")}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 transition-colors"
                    title="Ganti Jalur Belajar"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>

                {/* Winding Gamified Stepping Path */}
                <div className="mt-6 flex flex-col items-center space-y-5 relative">
                  {/* Node 1: Completed Gold Star */}
                  <button
                    type="button"
                    onClick={() => onScreenChange("quiz")}
                    className="w-14 h-14 rounded-full bg-amber-400 shadow-[0_5px_0_#D97706] flex items-center justify-center text-white hover:scale-105 transition-transform"
                    title="Materi 1 — Selesai"
                  >
                    <Star className="w-6 h-6 fill-white" />
                  </button>

                  {/* Node 2: Active MULAI Node */}
                  <div className="relative -translate-x-5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onScreenChange("quiz")}
                      className="w-14 h-14 rounded-full bg-[#58CC02] ring-4 ring-lime-200 shadow-[0_5px_0_#46A302] flex items-center justify-center text-white hover:scale-105 transition-transform"
                      title="Mulai Kuis Interaktif"
                    >
                      <Check className="w-6 h-6 stroke-[3]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onScreenChange("quiz")}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-sm text-[10px] font-extrabold text-[#46A302] animate-bounce"
                    >
                      MULAI
                    </button>
                  </div>

                  {/* Node 3: Code Challenge + Waving Mascot */}
                  <div className="flex items-center gap-4 translate-x-3">
                    <button
                      type="button"
                      onClick={() => onScreenChange("quiz")}
                      className="w-16 h-16 rounded-full bg-[#58CC02] shadow-[0_6px_0_#46A302] flex items-center justify-center text-white hover:scale-105 transition-transform"
                      title="Kuis Praktik Koding"
                    >
                      <Code2 className="w-7 h-7" />
                    </button>
                    <img
                      src="/images/kodela-mascot.png"
                      alt="Kodela Mascot"
                      className="w-16 h-20 object-contain drop-shadow"
                    />
                  </div>

                  {/* Node 4: Lab Practice */}
                  <button
                    type="button"
                    onClick={() => onScreenChange("quiz")}
                    className="translate-x-5 w-14 h-14 rounded-full bg-[#1CB0F6] shadow-[0_5px_0_#0284C7] flex items-center justify-center text-white hover:scale-105 transition-transform"
                    title="Latihan Kode Interaktif"
                  >
                    <Laptop className="w-6 h-6" />
                  </button>

                  {/* Node 5: Bonus XP Chest */}
                  <button
                    type="button"
                    onClick={() => onScreenChange("streak")}
                    className="-translate-x-3 w-14 h-14 rounded-2xl bg-amber-500 shadow-[0_5px_0_#B45309] flex items-center justify-center text-white hover:scale-105 transition-transform"
                    title="Lihat Streak & Reward"
                  >
                    <Gift className="w-6 h-6" />
                  </button>

                  {/* Node 6: Unit Trophy */}
                  <button
                    type="button"
                    onClick={() => onScreenChange("streak")}
                    className="w-14 h-14 rounded-full bg-slate-200 shadow-[0_5px_0_#CBD5E1] flex items-center justify-center text-slate-400"
                    title="Sertifikasi Unit"
                  >
                    <Trophy className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 5: INTERACTIVE QUIZ (Figma Screen 4)               */}
          {/* ========================================================= */}
          {activeScreen === "quiz" && (
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
              {/* Top Quiz Bar */}
              <div className="px-4 pt-1 pb-3 flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setPickedOption(null);
                    setAnswerState("idle");
                    onScreenChange("unitmap");
                  }}
                  className="p-1 text-slate-400 hover:text-slate-700"
                  aria-label="Tutup kuis"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#58CC02] transition-all duration-300"
                    style={{ width: `${Math.min(100, progressPercent)}%` }}
                  />
                </div>
                <span className="inline-flex items-center gap-1 text-rose-500 text-xs font-extrabold">
                  <Heart className="w-4 h-4 fill-rose-500" />
                  {hearts}
                </span>
              </div>

              {/* Question Body */}
              <div className="flex-1 overflow-y-auto demo-scroll px-4 pb-3 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-wider uppercase text-purple-600">
                  <span className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center text-[9px]">
                    ★
                  </span>
                  {currentQuestion.tag}
                </div>

                <h4 className="text-[14px] font-extrabold text-slate-900 leading-snug">
                  {currentQuestion.prompt}
                </h4>

                {currentQuestion.codeSnippet && (
                  <div className="p-3 rounded-2xl bg-[#F0F9FF] border border-sky-200 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#1CB0F6] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Volume2 className="w-3.5 h-3.5" />
                    </span>
                    <pre className="font-mono text-[11.5px] font-semibold text-sky-900 whitespace-pre-wrap break-all leading-relaxed">
                      {currentQuestion.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* 2x2 Option Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {currentQuestion.options.map((opt, idx) => {
                    const isPicked = pickedOption === idx;
                    const isCorrectChoice =
                      answerState !== "idle" && idx === currentQuestion.correctIndex;
                    const isWrongPicked =
                      answerState === "wrong" && isPicked && idx !== currentQuestion.correctIndex;

                    let cardStyle =
                      "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50";
                    if (isCorrectChoice) {
                      cardStyle = "border-[#58CC02] bg-[#F0FDF4] ring-2 ring-[#58CC02]/30";
                    } else if (isWrongPicked) {
                      cardStyle = "border-rose-500 bg-rose-50 ring-2 ring-rose-500/20";
                    } else if (isPicked) {
                      cardStyle = "border-[#1CB0F6] bg-[#EFF8FF] ring-2 ring-[#1CB0F6]/25";
                    }

                    return (
                      <button
                        key={opt.title}
                        type="button"
                        disabled={answerState === "correct"}
                        onClick={() => {
                          setPickedOption(idx);
                          if (answerState === "wrong") setAnswerState("idle");
                        }}
                        className={`p-3 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center min-h-[112px] ${cardStyle}`}
                      >
                        <span
                          className="px-3 py-1.5 rounded-xl font-mono text-sm font-extrabold mb-2"
                          style={{
                            backgroundColor: opt.symbolBg,
                            color: opt.symbolColor,
                          }}
                        >
                          {opt.symbol}
                        </span>
                        <span className="text-xs font-extrabold text-slate-900 leading-tight">
                          {opt.title}
                        </span>
                        <span className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                          {opt.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback Banner & Action Button */}
              <div
                className={`p-4 border-t shrink-0 transition-colors ${
                  answerState === "correct"
                    ? "bg-[#D7FFB8] border-[#B8F28B]"
                    : answerState === "wrong"
                    ? "bg-rose-50 border-rose-200"
                    : "bg-white border-slate-100"
                }`}
              >
                {answerState === "correct" && (
                  <div className="mb-3 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#58CC02] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-[#3B8702]">
                        Tuturu~! Luar Biasa! +{currentQuestion.xp} XP
                      </p>
                      <p className="text-[11px] text-[#3B8702]/90 leading-snug mt-0.5">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                )}

                {answerState === "wrong" && (
                  <div className="mb-3 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <RotateCcw className="w-3.5 h-3.5" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold text-rose-700">
                        Hampir tepat! Coba lagi ya (-1 ❤️)
                      </p>
                      <p className="text-[11px] text-rose-700/85 leading-snug mt-0.5">
                        Petunjuk: Perhatikan tanda kurung atau fungsi utama dari sintaksnya.
                      </p>
                    </div>
                  </div>
                )}

                {answerState === "idle" ? (
                  <button
                    type="button"
                    disabled={pickedOption === null}
                    onClick={handleCheckAnswer}
                    className={`w-full py-3 rounded-xl font-display font-extrabold text-xs tracking-wide uppercase transition-all ${
                      pickedOption !== null
                        ? "text-white kodela-btn-green"
                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    PERIKSA JAWABAN
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className={`w-full py-3 rounded-xl font-display font-extrabold text-xs tracking-wide uppercase text-white ${
                      answerState === "correct"
                        ? "kodela-btn-green"
                        : "bg-rose-500 shadow-[0_4px_0_#BE123C] active:translate-y-[3px]"
                    }`}
                  >
                    {answerState === "correct"
                      ? quizIdx + 1 < quizPool.length
                        ? "SOAL BERIKUTNYA"
                        : "LANJUTKAN KUIS LENGKAP"
                      : "COBA JAWAB LAGI"}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 6: 7-DAY STREAK CELEBRATION (Figma Screen 5)       */}
          {/* ========================================================= */}
          {activeScreen === "streak" && (
            <div className="flex-1 flex flex-col justify-between px-5 pt-5 pb-4 bg-white overflow-y-auto demo-scroll text-center">
              <div className="flex flex-col items-center">
                {/* Glowing Fire + Mascot */}
                <div className="flex items-center justify-center gap-3 mt-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-400/35 blur-xl rounded-full" />
                    <Flame className="relative w-20 h-20 text-amber-500 fill-amber-400 drop-shadow-md" />
                  </div>
                  <img
                    src="/images/kodela-mascot.png"
                    alt="Kodela Merayakan Streak"
                    className="w-16 h-20 object-contain drop-shadow"
                  />
                </div>

                <p className="mt-3 font-display text-5xl font-black text-amber-500 leading-none">
                  {streak}
                </p>
                <p className="mt-1.5 font-display text-sm font-extrabold tracking-wide text-amber-500 uppercase">
                  HARI BERUNTUN (STREAK)!
                </p>

                {/* Weekly Days Card */}
                <div className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="grid grid-cols-7 gap-1.5">
                    {WEEK_DAYS.map((day, idx) => {
                      const activeCount = streakCommitted ? 6 : 5;
                      const done = idx < activeCount;
                      return (
                        <div key={day} className="flex flex-col items-center gap-1.5">
                          <span className="text-[10px] font-bold text-slate-500">{day}</span>
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold transition-all ${
                              done
                                ? "bg-amber-500 text-white shadow-sm"
                                : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            {done ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-3 text-[11px] text-slate-600 leading-relaxed">
                    Berlatih coding setiap hari menjaga api streak tetap menyala menuju{" "}
                    <strong className="text-slate-900">Sertifikasi Digital!</strong>
                  </p>
                </div>

                {/* Target Akhir Dark Navy Card */}
                <button
                  type="button"
                  onClick={() => onScreenChange("paths")}
                  className="mt-4 w-full p-3.5 rounded-2xl bg-[#0B2545] text-white flex items-center justify-between text-left hover:bg-[#13345F] transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[9.5px] font-bold uppercase tracking-wider text-amber-300">
                        TARGET AKHIR KODELAID
                      </p>
                      <p className="text-xs font-extrabold">Sertifikasi &amp; Penghargaan</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-sky-200" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!streakCommitted) {
                    setStreakCommitted(true);
                    setStreak((s) => s + 1);
                    setXp((prev) => prev + 25);
                  } else {
                    onScreenChange("home");
                  }
                }}
                className="mt-4 w-full py-3 rounded-xl text-white font-display font-extrabold text-xs tracking-wide uppercase kodela-btn-sky"
              >
                {streakCommitted ? "STREAK +1 TERSIMPAN! KE BERANDA" : "SAYA BERKOMITMEN!"}
              </button>
            </div>
          )}

          {/* ========================================================= */}
          {/* SCREEN 7: FORUM CHAT & RUANG TANYA MENTOR (fig3_6!)       */}
          {/* ========================================================= */}
          {activeScreen === "community" && (
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {/* Top Pill Switcher */}
              <div className="px-3.5 pt-1 pb-2.5 border-b border-slate-100 shrink-0 space-y-2.5">
                <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setChatTab("forum")}
                    className={`py-1.5 rounded-lg transition-all ${
                      chatTab === "forum"
                        ? "bg-white text-fluent-blue shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Forum Chat
                  </button>
                  <button
                    type="button"
                    onClick={() => setChatTab("mentor")}
                    className={`py-1.5 rounded-lg transition-all ${
                      chatTab === "mentor"
                        ? "bg-white text-fluent-blue shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Tanya Mentor
                  </button>
                </div>

                {/* Chat Room Header (Exact fig3_6 soft blue pill!) */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-[#EAF4FE]">
                  <button
                    type="button"
                    onClick={() => onScreenChange("home")}
                    className="text-slate-600 hover:text-slate-900"
                    aria-label="Kembali ke beranda"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  {chatTab === "mentor" && (
                    <span className="w-8 h-8 rounded-full bg-fluent-blue text-white text-xs font-bold flex items-center justify-center shrink-0">
                      AA
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-slate-900 truncate">
                      {chatTab === "forum" ? "Forum Chat" : "Arya Agung"}
                    </p>
                    <p className="text-[10px] text-slate-600 truncate">
                      {chatTab === "forum"
                        ? "Komunitas Diskusi Basis Data & OOP"
                        : "Mentor Pemrograman • Online"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 overflow-y-auto demo-scroll px-3.5 py-3 space-y-2.5 bg-white">
                {(chatTab === "forum" ? forumMessages : mentorMessages).map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    {msg.author && msg.sender === "other" && (
                      <span className="text-[9.5px] font-semibold text-slate-400 mb-0.5 ml-1">
                        {msg.author}
                      </span>
                    )}
                    <div
                      className={`max-w-[84%] px-3 py-2 rounded-2xl text-[11.5px] leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#0EA5E9] text-white rounded-br-sm"
                          : "bg-[#EAF4FE] text-slate-800 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5 px-1">
                      {msg.time}
                    </span>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Working Live Chat Composer */}
              <form
                onSubmit={handleSendMessage}
                className="p-2.5 border-t border-slate-100 bg-white flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={
                    chatTab === "forum"
                      ? "Tanya OOP, Python, SQL..."
                      : "Tanya mentor C++ / coding..."
                  }
                  className="flex-1 px-3.5 py-2 rounded-full border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-fluent-blue"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-fluent-blue hover:bg-fluent-blue-hover text-white flex items-center justify-center shrink-0 transition-colors"
                  aria-label="Kirim pesan"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}

          {/* ========================================================= */}
          {/* NATIVE BOTTOM NAVIGATION BAR                              */}
          {/* ========================================================= */}
          {showBottomNav && (
            <nav
              aria-label="Navigasi Demo Aplikasi"
              className="h-14 border-t border-slate-200 bg-white px-2 grid grid-cols-5 items-center shrink-0"
            >
              {(
                [
                  { id: "home", label: "Beranda", icon: Home },
                  { id: "paths", label: "Jalur", icon: Compass },
                  { id: "unitmap", label: "Peta", icon: Map },
                  { id: "community", label: "Forum", icon: MessageCircle },
                  { id: "streak", label: "Streak", icon: Flame },
                ] as { id: DemoScreen; label: string; icon: React.ComponentType<{ className?: string }> }[]
              ).map((nav) => {
                const Icon = nav.icon;
                const active = activeScreen === nav.id;
                return (
                  <button
                    key={nav.id}
                    type="button"
                    onClick={() => onScreenChange(nav.id)}
                    className={`flex flex-col items-center justify-center gap-0.5 py-1 rounded-xl transition-colors ${
                      active ? "text-[#1CB0F6]" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span
                      className={`p-1 rounded-lg ${
                        active ? "bg-sky-50 ring-1 ring-sky-200" : ""
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[9.5px] font-bold">{nav.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* Home Gesture Indicator */}
          <div className="h-4 bg-white flex items-center justify-center shrink-0">
            <span className="w-28 h-1 rounded-full bg-slate-900/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
