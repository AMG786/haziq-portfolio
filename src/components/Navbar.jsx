import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, personal } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Highlight the section currently in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    const ids = ['home', ...navLinks.map((l) => l.id)]
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Add a background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'text-accent-600 dark:text-accent-400'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-ink-700 dark:bg-ink-900/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        <a
          href="#home"
          className="font-mono text-lg font-semibold text-slate-900 dark:text-white"
          aria-label={`${personal.name}, back to top`}
        >
          <span className="text-accent-600 dark:text-accent-400">&lt;</span>
          {personal.initials}
          <span className="text-accent-600 dark:text-accent-400"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={linkClass(link.id)}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-300 text-slate-700 md:hidden dark:border-ink-700 dark:text-slate-300"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden px-4 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 ${linkClass(link.id)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="h-3" aria-hidden="true" />
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
