import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

// Dark by default; the choice is saved in localStorage when available
function getInitialTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage blocked (private mode etc.) — theme still works for this visit
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-10 w-10 place-items-center rounded-xl border border-slate-300 text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-ink-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-300"
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
