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
          <stop offset="0%" stopColor="#3DFFB5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3DFFB5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1220" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#3DFFB5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F5B942" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Soft dawn wash behind the network */}
      <rect width="1200" height="800" fill="url(#nodeGlow)" opacity="0.25" />

      {/* Network edges */}
      <g stroke="url(#edgeGrad)" strokeWidth="1.25" fill="none">
        <path d="M120 640 C280 520, 340 420, 520 360" />
        <path d="M520 360 C680 300, 760 280, 920 220" />
        <path d="M280 180 C420 240, 480 300, 520 360" />
        <path d="M520 360 C560 480, 640 560, 820 620" />
        <path d="M180 320 C320 340, 420 350, 520 360" />
        <path d="M720 480 C800 400, 860 300, 920 220" />
        <path d="M420 640 C480 520, 500 440, 520 360" />
      </g>

      {/* Nodes */}
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
            animate={{ opacity: [0.35, 0.85, 0.35], scale: [1, 1.15, 1] }}
            transition={{
              duration: 3.2 + i * 0.25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
          <circle cx={cx} cy={cy} r="4.5" fill="#0B1220" opacity="0.7" />
          <circle cx={cx} cy={cy} r="2" fill="#3DFFB5" />
        </g>
      ))}

      {/* Pulse traveling along main arc */}
      <motion.circle
        r="5"
        fill="#F5B942"
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
        <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-slate uppercase">
          {event.presents}
        </p>

        <motion.h1
          className="font-display max-w-[12ch] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] font-extrabold tracking-tight text-ink"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.name}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base text-slate md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.acronym}
          <span className="mt-1 block font-semibold text-ink">{event.edition}</span>
        </motion.p>

        <motion.p
          className="font-display mt-6 max-w-lg text-2xl font-bold tracking-tight text-ink md:text-3xl"
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
            className="inline-flex items-center justify-center rounded-md bg-ink px-6 py-3 text-sm font-semibold text-mist transition hover:bg-ink-soft"
          >
            Register now
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white/40 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-ink/30 hover:bg-white/70"
          >
            View schedule
          </a>
        </motion.div>
      </div>
    </section>
  )
}
