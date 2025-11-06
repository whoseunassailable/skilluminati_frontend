// src/theme.ts

export type ThemeName = "dark" | "light";

export type Theme = {
  name: ThemeName;
  colors: {
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    primarySoft: string;
    danger: string;
  };
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    background: "#0B0D11", // page bg
    surface: "#0F1115", // panels
    surfaceAlt: "#14171D",
    text: "#F3F4F6",
    textMuted: "#9CA3AF",
    border: "rgba(255,255,255,0.04)",
    primary: "#3B82F6", // blue
    primarySoft: "rgba(59,130,246,0.12)",
    danger: "#F43F5E",
  },
};

export const lightTheme: Theme = {
  name: "light",
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceAlt: "#F3F4F6",
    text: "#0F172A",
    textMuted: "#6B7280",
    border: "rgba(15, 23, 42, 0.07)",
    primary: "#3B82F6",
    primarySoft: "rgba(59,130,246,0.08)",
    danger: "#DC2626",
  },
};
