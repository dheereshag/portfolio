"use client";

import { useId, useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export default function ThemeToggleButton() {
  const id = useId();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR/hydration
    return (
      <div className="fixed top-4 right-4 z-50 group inline-flex items-center gap-2">
        <span className="flex-1 cursor-pointer text-right text-sm font-medium">
          <SunIcon size={16} aria-hidden="true" />
        </span>
        <Switch
          id={id}
          checked={true}
          aria-label="Toggle between dark and light mode"
          disabled
        />
        <span className="flex-1 cursor-pointer text-left text-sm font-medium">
          <MoonIcon size={16} aria-hidden="true" />
        </span>
      </div>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className="fixed top-4 right-4 z-50 group inline-flex items-center gap-2"
      data-state={isDark ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme("light")}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
    </div>
  );
}
