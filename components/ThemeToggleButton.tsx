"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // While SSR/hydrating, render a disabled toggle
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Toggle
          variant="outline"
          className="size-9"
          pressed={false}
          disabled
          aria-label="Toggle theme"
        >
          <MoonIcon
            size={16}
            className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
            aria-hidden="true"
          />
          <SunIcon
            size={16}
            className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
            aria-hidden="true"
          />
        </Toggle>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="fixed top-4 right-4 z-50">
      <Toggle
        variant="outline"
        className="size-9"
        pressed={isDark}
        onPressedChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <MoonIcon
          size={16}
          className="shrink-0 scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100"
          aria-hidden="true"
        />
        <SunIcon
          size={16}
          className="absolute shrink-0 scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}
