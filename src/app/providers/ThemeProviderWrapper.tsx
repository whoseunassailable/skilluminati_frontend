// src/context/ThemeProviderWrapper.tsx
import type { Theme } from "@emotion/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { darkTheme, lightTheme, type ThemeName } from "../../theme/theme";
// src/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      surface: string;
      surfaceAlt: string;
      text: string;
      textMuted: string;
      border: string;
      primary: string;
    };
  }
}

type ThemeContextValue = {
  theme: Theme;
  setTheme: (name: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_KEY = "skilluminati_theme";

type ThemeProviderWrapperProps = {
  children: React.ReactNode;
};

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>("dark");

  // on mount, read from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as ThemeName | null;
    if (stored) {
      setThemeName(stored);
    } else {
      // optional: respect system
      const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) setThemeName("dark");
    }
  }, []);

  // keep <html> class in sync so Tailwind / global styles can use it
  useEffect(() => {
    const root = document.documentElement;
    if (themeName === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, themeName);
  }, [themeName]);

  const theme = useMemo<Theme>(() => {
    return themeName === "dark" ? darkTheme : lightTheme;
  }, [themeName]);

  const setTheme = (name: ThemeName) => setThemeName(name);

  const toggleTheme = () =>
    setThemeName((prev) => (prev === "dark" ? "light" : "dark"));

  // optionally inject CSS vars
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--bg", theme.colors.background);
    root.style.setProperty("--surface", theme.colors.surface);
    root.style.setProperty("--surface-alt", theme.colors.surfaceAlt);
    root.style.setProperty("--text", theme.colors.text);
    root.style.setProperty("--text-muted", theme.colors.textMuted);
    root.style.setProperty("--border", theme.colors.border);
    root.style.setProperty("--primary", theme.colors.primary);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProviderWrapper");
  }
  return ctx;
};
