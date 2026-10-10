"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      aria-label="Light theme"
      onClick={toggleTheme}
      className="group relative inline-flex h-10 w-16 shrink-0 items-center rounded-full border border-outline bg-surface/40 p-1 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-brand-violet focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
    >
      <span
        aria-hidden="true"
        className={`flex size-8 items-center justify-center rounded-full bg-brand-gradient text-white shadow-lg transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      >
        {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      </span>
    </button>
  );
}
