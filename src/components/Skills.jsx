import { FiCloud, FiCode, FiCpu, FiDatabase, FiServer, FiShield, FiSmartphone } from 'react-icons/fi'
import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Maps the `icon` key in portfolio.js to an icon component
const icons = {
  frontend: FiCode,
  mobile: FiSmartphone,
  backend: FiServer,
  database: FiDatabase,
  cloud: FiCloud,
  ai: FiCpu,
  security: FiShield,
}

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHeading number="02" eyebrow="Skills" title="What I work with" id="skills-title" />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? FiCode
          return (
            <Reveal
              as="li"
              key={group.title}
              delay={(i % 3) * 0.08}
              className="card group p-6 transition-colors hover:border-accent-500/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-600 group-hover:text-white dark:text-accent-400">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 px-2.5 py-1 text-sm text-slate-700 dark:border-ink-700 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
