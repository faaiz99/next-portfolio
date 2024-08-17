"use client";
import { Sun, Moon } from "lucide-react";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div onClick={toggleTheme} className="hover:cursor-pointer">
      {theme === "light" ? (
        <Sun size={20} color="white" />
      ) : (
        <Moon size={20} color="white" />
      )}
    </div>
  );
};

export default ThemeSwitch;
