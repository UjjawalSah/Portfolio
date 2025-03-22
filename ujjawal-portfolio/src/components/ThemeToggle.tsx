
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    // Then check system preference if no saved preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Set theme based on saved preference or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Update DOM
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/40 dark:to-orange-900/40 backdrop-blur-sm shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-gray-700"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Button>
  );
};
