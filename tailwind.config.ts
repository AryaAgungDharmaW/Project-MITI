import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fluent: {
          blue: "#0067B8",
          "blue-hover": "#005A9E",
          "blue-dark": "#004E8C",
          "blue-tint": "#EBF3FC",
          sky: "#0078D4",
          ink: "#1B1A19",
          secondary: "#5C5B5A",
          muted: "#605E5C",
          surface: "#FAF9F8",
          canvas: "#F5F7FA",
          border: "#E1DFDD",
        },
        kodela: {
          green: "#58CC02",
          "green-dark": "#46A302",
          orange: "#FF9600",
          red: "#FF4B4B",
          cyan: "#1CB0F6",
          navy: "#0B2545",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      boxShadow: {
        fluent: "0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.08)",
        "fluent-md": "0 8px 24px rgba(0, 0, 0, 0.07), 0 2px 6px rgba(0, 0, 0, 0.04)",
        "fluent-lg": "0 20px 50px rgba(0, 32, 80, 0.12), 0 4px 14px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
