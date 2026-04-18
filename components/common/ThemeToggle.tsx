"use client";

import { useTheme } from "@/lib/ThemeContext";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    /* Radio-style pill toggle - no text, icons only */
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center w-14 h-7 rounded-full border border-gold-40 bg-transparent cursor-pointer transition-all duration-300 p-0.5"
    >
      {/* Track fill on dark mode */}
      <span
        className={`absolute inset-0 rounded-full transition-all duration-300 ${isDark ? "bg-gold-12" : "bg-gold-06"}`}
      />

      {/* Sliding thumb */}
      <span
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-gold text-deep shadow-sm transition-all duration-300 ${isDark ? "translate-x-0" : "translate-x-7"}`}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
