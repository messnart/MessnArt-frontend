"use client"

import { useState, useEffect } from "react"

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return { theme, setTheme }
}

