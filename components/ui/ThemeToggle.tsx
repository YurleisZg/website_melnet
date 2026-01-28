"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar errores de hidratación (SSR)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="relative flex h-9 w-16 items-center rounded-full bg-slate-100 p-1 transition-all duration-300 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20"
      aria-label="Cambiar tema"
    >
      {/* El círculo que se mueve (Switch) */}
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
          currentTheme === "dark"
            ? "translate-x-7 bg-slate-800 text-yellow-400"
            : "translate-x-0 bg-white text-slate-500"
        }`}
      >
        {currentTheme === "dark" ? (
          <Sun size={16} fill="currentColor" strokeWidth={2.5} />
        ) : (
          <Moon size={16} fill="currentColor" strokeWidth={2.5} />
        )}
      </div>
    </button>
  );
}