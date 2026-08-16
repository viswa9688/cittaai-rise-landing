import { motion } from 'framer-motion'
import { event, REGISTER_URL } from '../content'

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-20"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-[clamp(1.25rem,5vw,4rem)] py-5">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          {event.name}
        </a>
        <a
          href={REGISTER_URL}
          className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-mist transition hover:bg-ink-soft"
        >
          Register
        </a>
      </div>
    </motion.header>
  )
}
