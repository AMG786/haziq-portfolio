import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { personal, socials } from '../data/portfolio'

const socialLinks = [
  { href: socials.github, label: 'GitHub', icon: FiGithub },
  { href: socials.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  { href: socials.email, label: 'Email', icon: FiMail },
]

// Photo with an automatic fallback to an initials avatar
function Avatar() {
  const [failed, setFailed] = useState(false)
  const showPhoto = personal.photo && !failed

  return (
    <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
      <div
        className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent-600 to-cyan-glow opacity-30 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-gradient-to-tr from-accent-600 to-cyan-glow shadow-2xl dark:border-ink-800">
        {showPhoto ? (
          <img
            src={personal.photo}
            alt={`Portrait of ${personal.name}`}
            width="320"
            height="320"
            fetchPriority="high"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className="grid h-full w-full place-items-center text-6xl font-extrabold text-white"
            role="img"
            aria-label={`${personal.name} initials`}
          >
            {personal.initials}
          </span>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  const fade = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  })

  return (
    <section id="home" className="relative overflow-hidden" aria-label="Introduction">
      {/* Soft background glow + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 pt-28 pb-16 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs text-accent-700 dark:text-accent-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-accent-600 to-cyan-glow bg-clip-text text-transparent dark:from-accent-400">
              {personal.name}
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-4 text-lg font-semibold text-slate-800 sm:text-xl dark:text-slate-200"
          >
            {personal.title}
            <span className="mx-2 text-accent-500">|</span>
            {personal.stack}
            <span className="mx-2 text-accent-500">|</span>
            {personal.focus}
          </motion.p>

          <motion.p
            {...fade(0.3)}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            {...fade(0.35)}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
          >
            <FiMapPin aria-hidden="true" /> {personal.location}
          </motion.p>

          <motion.div
            {...fade(0.4)}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a href="#projects" className="btn-primary">
              View My Work <FiArrowDown aria-hidden="true" />
            </a>
            <a href={personal.resume} download={personal.resumeFileName} className="btn-ghost">
              <FiDownload aria-hidden="true" /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.ul {...fade(0.5)} className="mt-8 flex justify-center gap-3 lg:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-slate-300 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-ink-700 dark:text-slate-400 dark:hover:border-accent-400 dark:hover:text-accent-300"
                >
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Avatar />
        </motion.div>
      </div>
    </section>
  )
}
