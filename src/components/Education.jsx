import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <SectionHeading number="05" eyebrow="Education" title="Where I studied" id="education-title" />

      <ul className="grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal as="li" key={item.degree} delay={i * 0.08} className="card flex gap-4 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
              <FiBookOpen size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="mt-1">{item.school}</p>
              <p className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
