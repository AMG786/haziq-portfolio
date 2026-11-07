import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projectFilters, projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

// Screenshot, or a gradient placeholder if the image is missing
function ProjectImage({ project }) {
  const [failed, setFailed] = useState(!project.image)

  if (failed) {
    return (
      <div
        className="grid aspect-video place-items-center bg-gradient-to-br from-accent-600 via-accent-700 to-cyan-glow"
        role="img"
        aria-label={`${project.title} preview placeholder`}
      >
        <span className="px-4 text-center font-mono text-lg font-semibold text-white/90">
          {project.title}
        </span>
      </div>
    )
  }

  return (
    <img
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      loading="lazy"
      decoding="async"
      width="640"
      height="360"
      onError={() => setFailed(true)}
      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  )
}

function ProjectLink({ href, label, icon: Icon, title }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${title}`}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
    >
      <Icon aria-hidden="true" /> {label}
    </a>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHeading number="04" eyebrow="Projects" title="Things I've built" id="projects-title" />

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-accent-600 text-white'
                : 'border border-slate-300 text-slate-600 hover:border-accent-500 hover:text-accent-700 dark:border-ink-700 dark:text-slate-400 dark:hover:text-accent-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-accent-600/10"
            >
              <div className="overflow-hidden">
                <ProjectImage project={project} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {project.category}
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                {(project.live || project.github) && (
                  <div className="mt-5 flex gap-5 border-t border-slate-200 pt-4 dark:border-ink-700">
                    <ProjectLink href={project.live} label="Live Demo" icon={FiExternalLink} title={project.title} />
                    <ProjectLink href={project.github} label="GitHub" icon={FiGithub} title={project.title} />
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="text-center text-slate-500">No projects in this category yet.</p>
      )}
    </section>
  )
}
