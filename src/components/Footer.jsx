import { FiArrowUp } from 'react-icons/fi'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-ink-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p className="text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {personal.name} · Built with React &amp; Vite
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-300 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-ink-700 dark:text-slate-400 dark:hover:text-accent-300"
        >
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
