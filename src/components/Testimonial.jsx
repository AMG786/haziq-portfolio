import { testimonials } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Testimonial() {
  return (
    <section id="testimonial" className="section" aria-labelledby="testimonial-title">
      <SectionHeading number="06" eyebrow="Testimonial" title="Kind words" id="testimonial-title" />

      <div className="grid gap-6">
        {testimonials.map((t) => (
          <Reveal key={t.name}>
            <figure className="card relative overflow-hidden p-8 sm:p-12">
              <span
                className="absolute -top-6 left-6 font-serif text-[10rem] leading-none text-accent-500/15 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl dark:text-white">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="relative mt-6">
                <p className="font-semibold text-accent-600 dark:text-accent-400">{t.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.role} · {t.context}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
