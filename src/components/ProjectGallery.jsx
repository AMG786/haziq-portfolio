import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

// Full-screen screenshot viewer. Esc closes, arrow keys move between images.
export default function ProjectGallery({ project, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const closeRef = useRef(null)
  const images = project.images
  const count = images.length
  const isMobile = project.device === 'mobile'

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    // Stop the page behind from scrolling while the viewer is open
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navBtn =
    'absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25'

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshots`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 text-white" onClick={(e) => e.stopPropagation()}>
        <p className="font-semibold">
          {project.title}
          <span className="ml-3 font-mono text-sm text-slate-400">
            {index + 1} / {count}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close screenshots"
          className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
        >
          <FiX size={20} />
        </button>
      </div>

      {/* Current image */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
        {count > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous screenshot"
            className={`${navBtn} left-0 sm:left-2`}
          >
            <FiChevronLeft size={22} />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${project.title} screenshot ${index + 1} of ${count}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className={`max-h-full rounded-xl object-contain shadow-2xl ${
              isMobile ? 'max-w-[min(90vw,380px)]' : 'max-w-full'
            }`}
          />
        </AnimatePresence>

        {count > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next screenshot"
            className={`${navBtn} right-0 sm:right-2`}
          >
            <FiChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto pb-1" onClick={(e) => e.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${
                i === index ? 'border-accent-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className={`object-cover object-top ${isMobile ? 'h-16 w-9' : 'h-12 w-20'}`}
              />
            </button>
          ))}
        </div>
      )}
    </motion.div>,
    document.body,
  )
}
