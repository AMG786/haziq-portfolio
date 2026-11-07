import { about, highlights } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionHeading number="01" eyebrow="About" title="A little about me" id="about-title" />

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed sm:text-lg">
          {about.map((para, i) => (
            <Reveal key={i} delay={i * 0.08} as="p">
              {para}
            </Reveal>
          ))}
        </div>

        <ul className="grid gap-4 self-start sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((h, i) => (
            <Reveal as="li" key={h.label} delay={i * 0.08} className="card p-5">
              <p className="text-xl font-bold text-slate-900 dark:text-white">{h.value}</p>
              <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{h.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
