'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  return (
    <div className="fixed right-4 bottom-6 z-50">
      <button
        aria-label="Toggle theme"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="p-2 rounded-full border shadow-md bg-white/10 backdrop-blur border-gray-700"
      >
        {isDark ? '🌙' : '☀️'}
      </button>
    </div>
  )
}
