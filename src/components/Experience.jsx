import { FiBriefcase, FiExternalLink } from 'react-icons/fi'
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
            {/* Timeline dot: company logo if there is one, otherwise a briefcase */}
            <span
              className={`absolute -left-[17px] grid h-8 w-8 place-items-center overflow-hidden rounded-full border-4 border-slate-50 text-white dark:border-ink-900 ${
                job.logo ? 'bg-white' : 'bg-accent-600'
              }`}
              aria-hidden="true"
            >
              {job.logo ? (
                <img src={job.logo} alt="" loading="lazy" className="h-full w-full object-contain" />
              ) : (
                <FiBriefcase size={14} />
              )}
            </span>

            <div className="card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                  <p className="font-medium text-accent-600 dark:text-accent-400">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {job.company}
                        <FiExternalLink size={13} aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
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
              {job.tech?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {job.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
