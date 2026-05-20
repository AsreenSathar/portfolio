import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('portfolio-theme')
    if (stored !== null) {
      return stored === 'dark'
    }

    // Check system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    return false
  })

  useEffect(() => {
    const html = document.documentElement

    if (isDark) {
      html.classList.add('dark')
      localStorage.setItem('portfolio-theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('portfolio-theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  return {
    isDark,
    toggleDarkMode,
  }
}
