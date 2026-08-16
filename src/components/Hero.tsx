import { motion } from 'framer-motion'
import { event, REGISTER_URL } from '../content'

function NeuralPulse() {
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF1F1F" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF1F1F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#FF1F1F" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D10000" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#nodeGlow)" opacity="0.22" />

      <g stroke="url(#edgeGrad)" strokeWidth="1.4" fill="none">
        <path d="M120 640 C280 520, 340 420, 520 360" />
        <path d="M520 360 C680 300, 760 280, 920 220" />
        <path d="M280 180 C420 240, 480 300, 520 360" />
        <path d="M520 360 C560 480, 640 560, 820 620" />
        <path d="M180 320 C320 340, 420 350, 520 360" />
        <path d="M720 480 C800 400, 860 300, 920 220" />
        <path d="M420 640 C480 520, 500 440, 520 360" />
      </g>

      {[
        [120, 640],
        [280, 180],
        [180, 320],
        [520, 360],
        [720, 480],
        [820, 620],
        [920, 220],
        [420, 640],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <motion.circle
            cx={cx}
            cy={cy}
            r="18"
            fill="url(#nodeGlow)"
            animate={{ opacity: [0.35, 0.9, 0.35], scale: [1, 1.18, 1] }}
            transition={{
              duration: 3.2 + i * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
          <circle cx={cx} cy={cy} r="4.5" fill="#0A0A0A" opacity="0.85" />
          <circle cx={cx} cy={cy} r="2" fill="#FF1F1F" />
        </g>
      ))}

      <motion.circle
        r="5"
        fill="#FF1F1F"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          offsetDistance: ['0%', '100%'],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
        style={{ offsetPath: "path('M120 640 C280 520, 340 420, 520 360 C680 300, 760 280, 920 220')" }}
      />
    </motion.svg>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="atmosphere-surface relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:justify-center md:pb-24 md:pt-32"
    >
      <NeuralPulse />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-[clamp(1.25rem,5vw,4rem)]">
        <p className="eyebrow mb-5 text-sm text-mint-deep">{event.presents}</p>

        <motion.h1
          className="headline-impact max-w-[14ch] text-[clamp(3.75rem,14vw,8.5rem)] text-ink"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          CittaAI{' '}
          <span className="text-mint">RISE</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base font-medium text-slate md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.acronym}
          <span className="mt-1 block text-lg font-bold tracking-wide text-ink uppercase">
            {event.edition}
          </span>
        </motion.p>

        <motion.p
          className="font-display mt-6 max-w-lg text-3xl font-semibold tracking-wide text-ink uppercase md:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={REGISTER_URL}
            className="inline-flex items-center justify-center rounded-md bg-mint px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-mint-deep"
          >
            Register now
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center justify-center rounded-md border-2 border-ink bg-transparent px-7 py-3.5 text-sm font-bold tracking-wide text-ink uppercase transition hover:bg-ink hover:text-white"
          >
            View schedule
          </a>
        </motion.div>
      </div>
    </section>
  )
}
