import { useState } from 'react'
import { FiCheckCircle, FiAlertCircle, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { contact, personal, socials } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

const inputClass =
  'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:bg-ink-900 dark:text-white dark:placeholder:text-slate-500'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    // No Formspree ID yet → open the visitor's email app instead
    if (!personal.formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${personal.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const fieldBorder = (name) =>
    errors[name] ? 'border-red-500' : 'border-slate-300 dark:border-ink-700'

  const links = [
    { href: socials.email, label: personal.email, icon: FiMail, name: 'Email' },
    { href: socials.linkedin, label: 'LinkedIn', icon: FiLinkedin, name: 'LinkedIn' },
    { href: socials.github, label: 'GitHub', icon: FiGithub, name: 'GitHub' },
  ]

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <SectionHeading number="07" eyebrow="Contact" title={contact.heading} id="contact-title" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-lg sm:text-xl">{contact.line}</p>
          <ul className="mt-8 space-y-3">
            {links.map(({ href, label, icon: Icon, name }) => (
              <li key={name}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-4 transition-colors hover:border-accent-500/60"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{name}</span>
                    <span className="font-medium break-all text-slate-900 dark:text-white">{label}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`${inputClass} ${fieldBorder('name')}`}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${inputClass} ${fieldBorder('email')}`}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`${inputClass} resize-y ${fieldBorder('message')}`}
                placeholder="Tell me about your project or role…"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:cursor-wait disabled:opacity-70">
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message <FiSend aria-hidden="true" />
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-400">
                  <FiCheckCircle aria-hidden="true" /> Thanks! Your message was sent. I&apos;ll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400">
                  <FiAlertCircle aria-hidden="true" /> Something went wrong. Please email me directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
