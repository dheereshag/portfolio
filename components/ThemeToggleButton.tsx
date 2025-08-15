"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { useMetaColor } from "@/hooks/use-meta-color";
import { Button } from "@/components/ui/button";

export default function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();

  React.useEffect(() => {
    setMetaColor(metaColor);
    // setMetaColor is stable for our purposes; including it would cause unnecessary reruns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metaColor]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="group/toggle extend-touch-target size-8 top-2 right-2 sm:top-4 sm:right-4 fixed z-50"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      {/* Sun icon - visible in dark mode */}
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/* Moon icon - visible in light mode */}
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
