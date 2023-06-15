"use client";

import { ThemeProvider } from "../contexts/ThemeContext";
import AuthProvider from "./auth/AuthProvider";

export function GlobalProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
