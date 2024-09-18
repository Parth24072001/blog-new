import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  theme: "system",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (mode?: string) => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "Mode",
  ...props
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const [theme, setThemeState] = useState(() => defaultTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      // Remove all theme-related classes
      root.classList.remove("light", "dark", "new-theme");

      // Get the stored theme from localStorage
      const storedItem = localStorage.getItem(storageKey);

      if (storedItem) {
        root.classList.add(storedItem);
        setThemeState(storedItem);
      } else {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
        setThemeState(systemTheme);
      }
    }
  }, [storageKey]);

  const value = {
    theme,
    setTheme: (newTheme: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
        setThemeState(newTheme);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
