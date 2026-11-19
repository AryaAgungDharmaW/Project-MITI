"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, Play } from "lucide-react";
import { LINKS } from "@/data/kodelaData";

interface NavbarProps {
  onLaunchDemo?: () => void;
  isDemoPage?: boolean;
}

export default function Navbar({ onLaunchDemo, isDemoPage = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: isDemoPage ? "/#beranda" : "#beranda" },
    { label: "Demo Aplikasi", href: isDemoPage ? "/demo" : "#demo" },
    { label: "Jalur Belajar", href: isDemoPage ? "/#kurikulum" : "#kurikulum" },
    { label: "Struktur Tim", href: isDemoPage ? "/#tim" : "#tim" },
    { label: "Tentang Kami", href: isDemoPage ? "/#perusahaan" : "#perusahaan" },
  ];

  return (
    <header className="sticky top-0 z-50 h-16 fluent-acrylic border-b border-fluent-border/80">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Microsoft-style Brand Mark + Divider + Product Name */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Mihaku Edutainment — KodelaID"
          >
            {/* 4-tile clean geometric Mihaku mark */}
            <span className="grid grid-cols-2 gap-[2.5px] w-5 h-5 shrink-0">
              <span className="rounded-[2px] bg-[#0067B8]" />
              <span className="rounded-[2px] bg-[#1CB0F6]" />
              <span className="rounded-[2px] bg-[#58CC02]" />
              <span className="rounded-[2px] bg-[#FF9600]" />
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight text-fluent-ink group-hover:text-fluent-blue transition-colors">
              Mihaku
            </span>
            <span className="h-4 w-px bg-fluent-border mx-0.5 hidden sm:inline-block" />
            <span className="font-display font-semibold text-[15px] tracking-tight text-fluent-blue hidden sm:inline-block">
              KodelaID
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi Utama">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 text-[13.5px] font-medium text-fluent-secondary hover:text-fluent-ink transition-colors rounded-md hover:bg-fluent-canvas/80 group"
              >
                {item.label}
                <span className="absolute left-3 right-3 bottom-1 h-[2px] bg-fluent-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Clean Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={LINKS.figma}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-fluent-secondary hover:text-fluent-ink hover:bg-fluent-canvas rounded-md transition-colors"
          >
            Desain Figma
            <ExternalLink className="w-3.5 h-3.5 opacity-75" />
          </a>

          {isDemoPage ? (
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-fluent-ink bg-fluent-canvas hover:bg-fluent-border/60 border border-fluent-border rounded-[4px] transition-colors"
            >
              Kembali ke Beranda
            </Link>
          ) : (
            <>
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-medium text-fluent-blue hover:bg-fluent-blue-tint border border-fluent-blue/30 rounded-[4px] transition-colors"
              >
                Full Studio
              </Link>
              <button
                type="button"
                onClick={() => {
                  if (onLaunchDemo) {
                    onLaunchDemo();
                  } else {
                    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-white bg-fluent-blue hover:bg-fluent-blue-hover rounded-[4px] shadow-sm transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Coba Demo
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md text-fluent-ink hover:bg-fluent-canvas transition-colors"
          aria-label="Buka menu navigasi"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-fluent-border shadow-fluent-md px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-fluent-ink hover:bg-fluent-canvas rounded-md"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-fluent-border flex flex-col gap-2">
            <a
              href={LINKS.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-fluent-secondary border border-fluent-border rounded-[4px]"
            >
              Lihat Desain Figma
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-fluent-blue rounded-[4px]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Buka Demo Aplikasi KodelaID
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
