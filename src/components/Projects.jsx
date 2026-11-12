import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiImage } from 'react-icons/fi'
import { projectFilters, projects } from '../data/portfolio'
import ProjectGallery from './ProjectGallery'
import SectionHeading from './SectionHeading'

// Gradient block shown when a project has no screenshots
function Placeholder({ title }) {
  return (
    <div
      className="grid aspect-video place-items-center bg-gradient-to-br from-accent-600 via-accent-700 to-cyan-glow"
      role="img"
      aria-label={`${title} preview placeholder`}
    >
      <span className="px-4 text-center font-mono text-lg font-semibold text-white/90">{title}</span>
    </div>
  )
}

// Card cover: a cropped screenshot, or up to three phone screens side by side
function ProjectCover({ project, onOpen }) {
  const images = project.images ?? []
  if (images.length === 0) return <Placeholder title={project.title} />

  const isMobile = project.device === 'mobile'

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${images.length} screenshot${images.length > 1 ? 's' : ''} of ${project.title}`}
      className="relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-slate-100 dark:bg-ink-950"
    >
      {isMobile ? (
        <div className="flex h-full items-end justify-center gap-3 bg-gradient-to-br from-accent-600 to-cyan-glow px-4 pt-5">
          {images.slice(0, 3).map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className={`h-full w-auto rounded-t-xl border-4 border-b-0 border-ink-900 object-cover object-top shadow-xl transition-transform duration-500 group-hover:-translate-y-1 ${
                i === 1 ? '' : 'hidden translate-y-3 min-[380px]:block'
              }`}
            />
          ))}
        </div>
      ) : (
        <img
          src={images[0]}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          width="640"
          height="360"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {images.length > 1 && (
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-lg bg-ink-950/75 px-2 py-1 font-mono text-xs text-white backdrop-blur">
          <FiImage aria-hidden="true" /> {images.length}
        </span>
      )}
    </button>
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
  const [open, setOpen] = useState(null) // project whose gallery is open
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))

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
              <ProjectCover project={project} onOpen={() => setOpen(project)} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {project.categories.join(' · ')}
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

      <AnimatePresence>
        {open && <ProjectGallery key={open.title} project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
