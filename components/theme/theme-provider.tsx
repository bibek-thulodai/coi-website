"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Enhanced Theme Provider for Creating Opportunities International
 *
 * This provider wraps the next-themes ThemeProvider to provide theme functionality
 * throughout the application. It supports:
 * - Light/dark mode toggling
 * - System preference detection
 * - Theme persistence across sessions
 * - Custom theme attributes
 */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light" // Force light theme initially
      enableSystem={false} // Disable system preference detection initially
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
