"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type ThemeContextType = {
  isDarkMode: boolean
  primaryColor: string
  secondaryColor: string
  headerColor: string
  accentColor: string
  toggleTheme: () => void
}

// Default colors for light and dark themes
const lightThemeColors = {
  primaryColor: "#017489",
  secondaryColor: "#006955",
  headerColor: "#02609E",
  accentColor: "#013A87",
}

const darkThemeColors = {
  primaryColor: "#01304f",
  secondaryColor: "#014a59",
  headerColor: "#003d31",
  accentColor: "#012c66",
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false, // Default to light mode
  ...lightThemeColors, // Use light theme colors by default
  toggleTheme: () => {},
})

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false) // Default to light mode

  // Set initial theme to light on component mount
  useEffect(() => {
    setTheme("light")
  }, [])

  // Update dark mode state when theme changes
  useEffect(() => {
    setIsDarkMode(theme === "dark")
  }, [theme])

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  // Get the appropriate colors based on the current theme
  const themeColors = isDarkMode ? darkThemeColors : lightThemeColors

  const value = {
    isDarkMode,
    ...themeColors,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
