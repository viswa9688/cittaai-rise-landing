import { motion } from 'framer-motion'
import { event, REGISTER_URL } from '../content'

function Watermark() {
  const row = ['cittathon', 'hackathon', 'cittathon', 'hackathon']
  const rows = Array.from({ length: 8 }, (_, i) =>
    i % 2 === 0 ? row : [...row].reverse(),
  )

  return (
    <div className="hero-watermark" aria-hidden>
      <div className="hero-watermark-grid">
        {rows.map((words, r) => (
          <div key={r} className="hero-watermark-row">
            {words.map((word, c) => (
              <span key={`${r}-${c}`}>{word}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function TechField() {
  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1 }}
    >
      <defs>
        <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A0A0A" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#FF1F1F" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#D10000" stopOpacity="0.12" />
        </linearGradient>
        <radialGradient id="softGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF1F1F" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FF1F1F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Chip — top right */}
      <g
        fill="none"
        stroke="url(#traceGrad)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      >
        <rect x="980" y="86" width="88" height="72" rx="4" />
        <rect x="996" y="102" width="56" height="40" rx="2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={`chip-pin-${i}`}>
            <line x1="980" y1={102 + i * 12} x2="966" y2={102 + i * 12} />
            <line x1="1068" y1={102 + i * 12} x2="1082" y2={102 + i * 12} />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={`chip-pin-v-${i}`}>
            <line x1={998 + i * 18} y1="86" x2={998 + i * 18} y2="72" />
            <line x1={998 + i * 18} y1="158" x2={998 + i * 18} y2="172" />
          </g>
        ))}
      </g>

      {/* Orthogonal circuit traces */}
      <g fill="none" stroke="url(#traceGrad)" strokeWidth="1.3">
        <path d="M72 620 H220 V520 H340 V440" />
        <path d="M340 440 H480" />
        <path d="M72 520 H160" />
        <path d="M1082 114 H1140 V260 H1080 V340" />
        <path d="M1024 172 V240 H920 V300" />
        <path d="M920 300 H780" />
        <path d="M180 180 H280 V260 H360" />
        <path d="M1040 640 H880 V700" />
      </g>

      {/* Trace nodes */}
      {[
        [72, 620],
        [340, 440],
        [480, 440],
        [180, 180],
        [360, 260],
        [780, 300],
        [1040, 640],
      ].map(([cx, cy], i) => (
        <g key={`node-${i}`}>
          <circle cx={cx} cy={cy} r="3.5" fill="#0A0A0A" opacity="0.55" />
          <circle cx={cx} cy={cy} r="1.6" fill="#FF1F1F" />
        </g>
      ))}

      {/* Robot / agent — lower left, sparse line-art */}
      <g
        transform="translate(70 470)"
        fill="none"
        stroke="#0A0A0A"
        strokeOpacity="0.22"
        strokeWidth="1.6"
        strokeLinejoin="round"
      >
        <rect x="28" y="8" width="52" height="44" rx="8" />
        <circle cx="44" cy="28" r="4.5" fill="#FF1F1F" fillOpacity="0.45" stroke="none" />
        <circle cx="64" cy="28" r="4.5" fill="#FF1F1F" fillOpacity="0.45" stroke="none" />
        <line x1="54" y1="8" x2="54" y2="-6" />
        <circle cx="54" cy="-10" r="3.5" />
        <rect x="22" y="56" width="64" height="54" rx="6" />
        <line x1="22" y1="72" x2="6" y2="88" />
        <line x1="86" y1="72" x2="102" y2="88" />
        <line x1="40" y1="110" x2="40" y2="128" />
        <line x1="68" y1="110" x2="68" y2="128" />
      </g>

      {/* Hex cell — mid right */}
      <g
        transform="translate(980 430)"
        fill="none"
        stroke="#FF1F1F"
        strokeOpacity="0.28"
        strokeWidth="1.3"
      >
        <polygon points="32,4 58,18 58,46 32,60 6,46 6,18" />
        <polygon points="32,16 46,24 46,40 32,48 18,40 18,24" />
      </g>

      <motion.circle
        cx="340"
        cy="440"
        r="14"
        fill="url(#softGlow)"
        animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.2, 1] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '340px 440px' }}
      />
      <motion.circle
        cx="780"
        cy="300"
        r="12"
        fill="url(#softGlow)"
        animate={{ opacity: [0.2, 0.65, 0.2], scale: [1, 1.18, 1] }}
        transition={{
          duration: 4.1,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        style={{ transformOrigin: '780px 300px' }}
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
      <Watermark />
      <TechField />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-[clamp(1.25rem,5vw,4rem)]">
        <p className="eyebrow mb-5 text-sm text-mint-deep">{event.presents}</p>

        <motion.h1
          className="headline-impact max-w-[14ch] text-[clamp(3.75rem,14vw,8.5rem)] text-ink"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          CittaAI <span className="text-mint">RISE</span>
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
