import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KodelaID by Mihaku Edutainment — Platform Pembelajaran Ilmu Komputer Interaktif",
  description:
    "Platform edutainment pembelajaran ilmu komputer dan pemrograman adaptasi Harvard CSEdu. Belajar Python, C++, SQL, Web Development, dan Data Science melalui kuis interaktif, gamifikasi, dan pendampingan mentor.",
  keywords: [
    "KodelaID",
    "Mihaku Edutainment",
    "Belajar Coding",
    "Harvard CSEdu",
    "EdTech Indonesia",
    "FILKOM UB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-fluent-ink antialiased selection:bg-fluent-blue-tint selection:text-fluent-blue">
        {children}
      </body>
    </html>
  );
}
