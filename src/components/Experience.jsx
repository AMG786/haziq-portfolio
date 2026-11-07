import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHeading
        number="03"
        eyebrow="Experience"
        title="Where I've worked"
        id="experience-title"
      />

      {/* Vertical timeline */}
      <ol className="relative ml-3 border-l border-slate-300 dark:border-ink-700">
        {experience.map((job, i) => (
          <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 0.08} className="mb-10 ml-8 last:mb-0">
            <span
              className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full border-4 border-slate-50 bg-accent-600 text-white dark:border-ink-900"
              aria-hidden="true"
            >
              <FiBriefcase size={14} />
            </span>

            <div className="card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="font-medium text-accent-600 dark:text-accent-400">{job.company}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-slate-500 sm:pt-1 dark:text-slate-400">
                  {job.period}
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {job.type} · {job.mode}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
