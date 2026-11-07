import Reveal from './Reveal'

// Numbered heading used at the top of every section, e.g. "02. Skills"
export default function SectionHeading({ number, eyebrow, title, id }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-accent-600 dark:text-accent-400">
        {number}. {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
      >
        {title}
      </h2>
    </Reveal>
  )
}
